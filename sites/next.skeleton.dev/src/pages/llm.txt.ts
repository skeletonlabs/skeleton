/* eslint-disable @typescript-eslint/no-explicit-any */
import type { APIRoute } from 'astro';
import { getEntry, getCollection } from 'astro:content';
import fs from 'fs/promises';
import path from 'path';

/**
 * If no schema prop is provided, use the document’s slug to fetch the schema.
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
	// Get all meta entries for components.
	// Meta entries have slugs like "components/<component>/meta".
	const metaEntries = (await getCollection('docs')).filter((entry) => entry.slug.startsWith('components/') && entry.slug.endsWith('/meta'));

	let finalContent = '';

	for (const metaEntry of metaEntries) {
		// Derive the corresponding svelte doc by replacing "/meta" with "/svelte"
		const svelteSlug = metaEntry.slug.replace(/\/meta$/, '/svelte');
		const svelteEntry = await getEntry('docs', svelteSlug);
		if (!svelteEntry) continue;

		let content = svelteEntry.body;

		// Raw imports always end with ?raw
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

		// Replace <Preview>…</Preview> blocks with Markdown code blocks.
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
			// Adjust alias if necessary (e.g. '@examples' to './src/examples')
			const resolvedPath = importPath.replace('@examples', './src/examples');
			let fileContent = '';
			try {
				fileContent = await fs.readFile(path.resolve(resolvedPath), 'utf-8');
			} catch (err) {
				console.error('Error reading file:', resolvedPath, err);
				fileContent = '// Error loading file';
			}
			const replacement = `\`\`\`svelte\n${fileContent}\n\`\`\``;
			content = content.replace(previewBlock, replacement);
		}

		// Schema imports always end with .json
		const schemaImportRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+\.json)['"];/g;
		const schemaImports: Record<string, string> = {};
		while ((match = schemaImportRegex.exec(content)) !== null) {
			const identifier = match[1];
			const importPath = match[2]; // Matches paths ending with .json
			schemaImports[identifier] = importPath;
		}

		// API table replacement logic
		// The API table can be either <ApiTable schema={...} /> or just <ApiTable />.
		const apiTableRegex = /<ApiTable(?:\s+schema=\{([^}]+)\})?\s*\/>/g;
		const apiTableMatches = Array.from(content.matchAll(apiTableRegex));
		// Process in reverse order to avoid index issues.
		for (const apiMatch of apiTableMatches.reverse()) {
			const fullMatch = apiMatch[0];
			const schemaVar = apiMatch[1]?.trim();
			let schemaData: any;
			if (schemaVar) {
				// Look up the corresponding schema file via schemaImports.
				const importPath = schemaImports[schemaVar];
				if (importPath) {
					// Adjust the alias; for example, '@schemas' maps to './src/schemas'
					const resolvedPath = importPath.replace('@schemas', './src/schemas');
					try {
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
				// If no schema prop is provided, fetch the schema using the doc’s slug.
				schemaData = await getSchemaFromSlug(svelteEntry.slug);
			}
			if (!Array.isArray(schemaData)) {
				schemaData = [];
			}
			const markdownTable = generateMarkdownApiTable(schemaData);
			content = content.replace(fullMatch, markdownTable);
		}

		// Remove unnnessary imports thats not part of the documentation
		content = content.replace(/^(export\s+.*|import\s+.*)\r?\n/gm, '');

		content = `# ${metaEntry.data.title}\n${metaEntry.data.description}\n\n${content}`;

		// Add divider between contents
		finalContent += content + '\n\n---\n\n';

		// Remove double lines
		finalContent = finalContent.replace(/(\r?\n){2,}/g, '\n');
	}

	return new Response(finalContent, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
};
