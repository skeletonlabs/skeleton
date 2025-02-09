/* eslint-disable @typescript-eslint/no-explicit-any */
import type { APIRoute } from 'astro';
import { getEntry, getCollection } from 'astro:content';
import fs from 'fs/promises';
import path from 'path';

/**
 * If no schema prop is provided, use the document’s slug to fetch the schema.
 * (This is the same logic as the one used in ApiTable.astro)
 */
async function getSchemaFromSlug(slug: string | undefined) {
	if (!slug) return null;
	const parts = slug.split('/');
	const component = parts.at(-2);
	const framework = parts.at(-1);
	if (!component || !framework) return null;
	const entry = await getEntry('schemas', `${framework}/${component}`);
	return entry?.data;
}

/**
 * Converts a schema (an array of “sections”) into one or more Markdown tables.
 * Each section becomes a Markdown table with a header and one row per property.
 * (This is a rewrite of the function in ApiTable.astro but coverts to Markdown tables instead of HTML)
 */
function generateMarkdownApiTable(schema: any[]): string {
	if (!schema || !Array.isArray(schema) || schema.length === 0) {
		return '';
	}
	let markdown = '';
	schema.forEach((section) => {
		// Remove "Props" from the section name
		const sectionTitle = section.name.replace('Props', '');
		markdown += `\n### ${sectionTitle}\n\n`;
		markdown += `| Property | Type | Description |\n`;
		markdown += `| --- | --- | --- |\n`;
		section.properties.forEach((property: any) => {
			const propName = `\`${property.name}\`${property.required ? '*' : ''}`;
			// For non-primitive types we won’t use popovers—just output the type text
			const typeStr = property.type;
			let description = property.documentation.text || '';
			const defaultTag = property.documentation.tags.find((tag: any) => tag.name === 'default');
			if (defaultTag) {
				description += `\nDefault: ${defaultTag.value}`;
			}
			// Replace newlines in table cells with spaces
			description = description.replace(/\n/g, ' ');
			markdown += `| ${propName} | ${typeStr} | ${description} |\n`;
		});
		markdown += `\n`;
	});
	return markdown;
}

export const GET: APIRoute = async () => {
    //TODO: replace with actual loading
	const doc = await getEntry('docs', 'components/accordion/svelte');
	let content = doc!.body;

	// preview code block imports always end with "?raw"
	const rawImportRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+\?raw)['"];/g;
	const rawImports: Record<string, string> = {};
	let match;
	while ((match = rawImportRegex.exec(content)) !== null) {
		const identifier = match[1];
		const importPathWithRaw = match[2]; // e.g. '@examples/components/accordions/Example.svelte?raw'
		// Remove the "?raw" to get the actual file path.
		const importPath = importPathWithRaw.replace(/\?raw$/, '');
		rawImports[identifier] = importPath;
	}

	// Schema imports always end with .json
	const schemaImportRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+\.json)['"];/g;
	const schemaImports: Record<string, string> = {};

	while ((match = schemaImportRegex.exec(content)) !== null) {
		const identifier = match[1];
		const importPath = match[2]; // This will only match paths ending with .json
		schemaImports[identifier] = importPath;
	}

	// Find all <Preview>…</Preview> blocks and replace them with Markdown code blocks.
	const previewBlockRegex = /<Preview[^>]*>[\s\S]*?<\/Preview>/g;
	const previewBlocks = Array.from(content.matchAll(previewBlockRegex));
	for (const previewMatch of previewBlocks) {
		const previewBlock = previewMatch[0];

		// Extract the code variable from the <Code code={...}> tag.
		const codeIdentifierMatch = previewBlock.match(/<Code\s+code=\{([^}]+)\}/);
		if (!codeIdentifierMatch) continue;
		const codeIdentifier = codeIdentifierMatch[1].trim();

		// Look up the corresponding file path using the rawImports mapping.
		const importPath = rawImports[codeIdentifier];
		if (!importPath) continue;

		// Adjust the alias. For example, assume '@examples' maps to './src/examples'
		const resolvedPath = importPath.replace('@examples', './src/examples');
		let fileContent = '';
		try {
			fileContent = await fs.readFile(path.resolve(resolvedPath), 'utf-8');
		} catch (err) {
			console.error('Error reading file:', resolvedPath, err);
			fileContent = '// Error loading file';
		}

		//TODO: consider replacement for react
		const replacement = `\`\`\`svelte\n${fileContent}\n\`\`\``;
		content = content.replace(previewBlock, replacement);
	}

	// The API table can appear as either:
	//    <ApiTable schema={schemaPopover} />   OR   <ApiTable />
	//
	// This regex captures an optional "schema" prop.
	const apiTableRegex = /<ApiTable(?:\s+schema=\{([^}]+)\})?\s*\/>/g;
	// Gather all matches (processing in reverse order to avoid index issues)
	const apiTableMatches = Array.from(content.matchAll(apiTableRegex));
	for (const match of apiTableMatches.reverse()) {
		const fullMatch = match[0];
		const schemaVar = match[1]?.trim();
		let schemaData: any;

		if (schemaVar) {
			// If a schema prop is provided, look it up in our schemaImports mapping.
			const importPath = schemaImports[schemaVar];
			if (importPath) {
				// Adjust the alias. For example, assume '@schemas' maps to './src/schemas'
				const resolvedPath = importPath.replace('@schemas', './src/schemas');
				try {
					// Dynamically import the schema file.
					const schemaModule = await import(path.resolve(resolvedPath));
					schemaData = schemaModule.default || schemaModule;
				} catch (err) {
					console.error('Error importing schema file:', resolvedPath, err);
					schemaData = [];
				}
			} else {
				schemaData = [];
			}
		} else {
			// If no schema prop is provided, try to fetch the schema using the document’s slug.
			schemaData = await getSchemaFromSlug(doc!.slug);
		}
		// Ensure we have an array.
		if (!Array.isArray(schemaData)) {
			schemaData = [];
		}

		// Generate the Markdown version of the API table(s).
		const markdownTable = generateMarkdownApiTable(schemaData);
		content = content.replace(fullMatch, markdownTable);
	}
	return new Response(content, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
};
