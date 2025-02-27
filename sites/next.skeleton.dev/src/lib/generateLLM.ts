import { getEntry, getCollection } from 'astro:content';
import fs from 'fs/promises';
import path from 'path';

type Framework = 'svelte' | 'react';
type Schema = {
	name: string;
	properties: Array<{
		type: string;
		name: string;
		typeKind: string;
		required: boolean;
		documentation: {
			tags: Array<{ value: string; name: string }>;
			text: string | null;
		};
	}>;
};

// Exact copy from ApiTable.astro
async function getSchemaFromSlug(slug: string | undefined) {
	if (!slug) return null;
	const parts = slug.split('/');
	const component = parts.at(-2);
	const framework = parts.at(-1);
	if (!component || !framework) return null;
	const entry = await getEntry('schemas', `${framework}/${component}`);
	return entry?.data;
}

// Replacement from ApiTable.astro but instead converts schema to markdown tables
function generateMarkdownApiTable(schema: Schema[]): string {
	if (!schema || !Array.isArray(schema) || schema.length === 0) {
		return '';
	}
	let markdown = '';
	schema.forEach((section) => {
		const sectionTitle = section.name.replace('Props', '');
		markdown += `\n### ${sectionTitle}\n\n`;
		markdown += `| Property | Type | Description |\n`;
		markdown += `| --- | --- | --- |\n`;
		section.properties.forEach((property) => {
			const propName = `\`${property.name}\`${property.required ? '*' : ''}`;
			const typeStr = property.type;
			let description = property.documentation.text || '';
			const defaultTag = property.documentation.tags.find((tag) => tag.name === 'default');
			if (defaultTag) {
				description += `\nDefault: ${defaultTag.value}`;
			}
			description = description.replace(/\n/g, ' ');
			markdown += `| ${propName} | ${typeStr} | ${description} |\n`;
		});
		markdown += `\n`;
	});
	return markdown;
}

/**
 * Replaces preview blocks with Markdown code blocks.
 * @param content The content to process.
 * @param language The language to use in the Markdown code block.
 */
async function processPreviewBlocks(content: string, language: string): Promise<string> {
	// Collect raw import mappings (only those ending with ?raw)
	// All examples are imported as raw.
	const rawImportRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+\?raw)['"];/g;
	const rawImports: Record<string, string> = {};
	let match;
	while ((match = rawImportRegex.exec(content)) !== null) {
		const identifier = match[1];
		const importPathWithRaw = match[2];
		const importPath = importPathWithRaw.replace(/\?raw$/, '');
		rawImports[identifier] = importPath;
	}

	// Replace <Preview>…</Preview> blocks with Markdown code blocks.
	const previewBlockRegex = /<Preview[^>]*>[\s\S]*?<\/Preview>/g;
	const previewBlocks = Array.from(content.matchAll(previewBlockRegex));
	for (const previewMatch of previewBlocks) {
		const previewBlock = previewMatch[0];
		// Example preview block
		//<Preview client:load>
		// 	<Fragment slot="preview">
		// 		<Example client:load />
		// 	</Fragment>
		// 	<Fragment slot="code">
		// 	    <Code code={ExampleRaw} lang="tsx" />
		// </Fragment>
		//</Preview>
		// We really only care about the code part and detect which path it is refering to
		// by using the rawImports Record

		// <Code code={ExampleRaw} lang="tsx" /> -> ExampleRaw
		const codeIdentifierMatch = previewBlock.match(/<Code\s+code=\{([^}]+)\}/);
		if (!codeIdentifierMatch) continue;
		const codeIdentifier = codeIdentifierMatch[1].trim();
		const importPath = rawImports[codeIdentifier];
		if (!importPath) continue;
		const resolvedPath = importPath.replace('@examples', './src/examples');
		let fileContent = '';
		try {
			fileContent = await fs.readFile(path.resolve(resolvedPath), 'utf-8');
		} catch (err) {
			console.error('Error reading file:', resolvedPath, err);
			fileContent = '// Error loading file';
		}
		const replacement = `\`\`\`${language}\n${fileContent}\n\`\`\``;
		content = content.replace(previewBlock, replacement);
	}
	return content;
}

/**
 * Replaces preview blocks with Markdown code blocks.
 * @param content The content to process.
 * @param docSlug The slug of the content.
 */
async function processApiTables(content: string, docSlug: string): Promise<string> {
	// ApiTable might be called in a few ways:
	// 1. <ApiTable /> 2. <ApiTable {schema} />
	// The schema is always imported as json
	const schemaImportRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+\.json)['"];/g;
	const schemaImports: Record<string, string> = {};
	let match;
	while ((match = schemaImportRegex.exec(content)) !== null) {
		const identifier = match[1];
		const importPath = match[2];
		schemaImports[identifier] = importPath;
	}

	const apiTableRegex = /<ApiTable(?:\s+schema=\{([^}]+)\})?\s*\/>/g;
	const apiTableMatches = Array.from(content.matchAll(apiTableRegex));
	for (const apiMatch of apiTableMatches.reverse()) {
		const fullMatch = apiMatch[0];
		const schemaVar = apiMatch[1]?.trim();
		let schemaData: Schema[];
		if (schemaVar) {
			const importPath = schemaImports[schemaVar];
			if (importPath) {
				const resolvedPath = importPath.replace(/^@schemas|@content\/schemas/, './src/content/schemas');
				try {
					const schemaModule = await import(/* @vite-ignore */ path.resolve(resolvedPath));
					schemaData = schemaModule.default || schemaModule;
				} catch (err) {
					console.error('Error importing schema file:', resolvedPath, err);
					schemaData = [];
				}
			} else {
				schemaData = [];
			}
		} else {
			schemaData = (await getSchemaFromSlug(docSlug)) as Schema[];
		}
		if (!Array.isArray(schemaData)) {
			schemaData = [];
		}
		const markdownTable = generateMarkdownApiTable(schemaData);
		content = content.replace(fullMatch, markdownTable);
	}
	return content;
}

async function processGetStarted(): Promise<string> {
	const allGetStarted = (await getCollection('docs')).filter((entry) => entry.slug.startsWith('get-started/'));
	// Separate installation docs
	const installationDocs = allGetStarted.filter((entry) => entry.slug.startsWith('get-started/installation/'));
	const generalDocs = allGetStarted.filter((entry) => !entry.slug.startsWith('get-started/installation/'));

	let content = '# Get Started\n\n';
	// Process general Get Started entries by appending title, description, and body
	for (const doc of generalDocs) {
		content += `# ${doc.data.title}\n${doc.data.description}\n\n${doc.body}\n\n---\n\n`;
	}
	// Installation docs as subcategory
	if (installationDocs.length) {
		content += '## Installation\n\n';
		for (const doc of installationDocs) {
			content += `# ${doc.data.title}\n${doc.data.description}\n\n${doc.body}\n\n---\n\n`;
		}
	}
	return content;
}

async function processGuidesGeneral(): Promise<string> {
	const guidesDocs = (await getCollection('docs')).filter(
		(entry) => entry.slug.startsWith('guides/') && !entry.slug.startsWith('guides/figma/') && !entry.slug.startsWith('guides/cookbook/')
	);
	let guidesContent = '';
	for (const doc of guidesDocs) {
		let content = doc.body;
		// Guides only has preview blocks without ApiTables
		content = await processPreviewBlocks(content, 'html');
		content = `# ${doc.data.title}\n${doc.data.description}\n\n${content}`;
		guidesContent += content + '\n\n---\n\n';
	}
	return guidesContent;
}

async function processGuidesCookbook(): Promise<string> {
	const cookbookDocs = (await getCollection('docs')).filter((entry) => entry.slug.startsWith('guides/cookbook/'));
	let cookbookContent = '';
	for (const doc of cookbookDocs) {
		let content = doc.body;
		// Cookbook only has PreviewBlocks
		content = await processPreviewBlocks(content, 'html');
		content = `# ${doc.data.title}\n${doc.data.description}\n\n${content}`;
		cookbookContent += content + '\n\n---\n\n';
	}
	if (cookbookContent) {
		cookbookContent = `## Cookbook\n\n` + cookbookContent;
	}
	return cookbookContent;
}

async function processGuides(): Promise<string> {
	const general = await processGuidesGeneral();
	const cookbook = await processGuidesCookbook();
	let guidesContent = `# Guides\n\n` + general;
	if (cookbook) {
		guidesContent += cookbook;
	}
	return guidesContent;
}

async function processDesign(): Promise<string> {
	const designDocs = (await getCollection('docs')).filter((entry) => entry.slug.startsWith('design/'));
	let designContent = '';
	for (const doc of designDocs) {
		let content = doc.body;
		content = await processPreviewBlocks(content, 'html');
		content = `# ${doc.data.title}\n${doc.data.description}\n\n${content}`;
		designContent += content + '\n\n---\n\n';
	}
	designContent = `# Design\n\n` + designContent;
	return designContent;
}

async function processTailwind(): Promise<string> {
	const tailwindDocs = (await getCollection('docs')).filter((entry) => entry.slug.startsWith('tailwind/'));
	let tailwindContent = '';
	for (const doc of tailwindDocs) {
		let content = doc.body;
		content = await processPreviewBlocks(content, 'html');
		content = `# ${doc.data.title}\n${doc.data.description}\n\n${content}`;
		tailwindContent += content + '\n\n---\n\n';
	}
	tailwindContent = `# Tailwind\n\n` + tailwindContent;
	return tailwindContent;
}

/**
 * Processes Components documentation.
 * Replaces the `/meta` slug suffix with the framework-specific one.
 */
async function processComponents(framework: Framework): Promise<string> {
	const metaEntries = (await getCollection('docs')).filter((entry) => entry.slug.startsWith('components/') && entry.slug.endsWith('/meta'));
	let componentsContent = '';
	for (const metaEntry of metaEntries) {
		const docSlug = metaEntry.slug.replace(/\/meta$/, `/${framework}`);
		const docEntry = await getEntry('docs', docSlug);
		if (!docEntry) continue;
		let content = docEntry.body;
		content = await processPreviewBlocks(content, framework);
		content = await processApiTables(content, docEntry.slug);
		content = `# ${metaEntry.data.title}\n${metaEntry.data.description}\n\n${content}`;
		componentsContent += content + '\n\n---\n\n';
	}
	componentsContent = `# Components\n\n` + componentsContent;
	return componentsContent;
}

/**
 * Processes Integrations documentation.
 * Replaces the `/meta` slug suffix with the framework-specific one.
 */
async function processIntegrations(framework: Framework): Promise<string> {
	const metaEntries = (await getCollection('docs')).filter(
		(entry) => entry.slug.startsWith('integrations/') && entry.slug.endsWith('/meta')
	);
	let integrationsContent = '';
	for (const metaEntry of metaEntries) {
		const docSlug = metaEntry.slug.replace(/\/meta$/, `/${framework}`);
		const docEntry = await getEntry('docs', docSlug);
		if (!docEntry) continue;
		let content = docEntry.body;
		content = await processPreviewBlocks(content, framework);
		content = await processApiTables(content, docEntry.slug);
		content = `# ${metaEntry.data.title}\n${metaEntry.data.description}\n\n${content}`;
		integrationsContent += content + '\n\n---\n\n';
	}
	integrationsContent = `# Integrations\n\n` + integrationsContent;
	return integrationsContent;
}

/**
 * Generates the complete documentation content.
 * @param framework The target framework ('svelte' or 'react').
 */
export async function generateDocumentation(framework: Framework): Promise<string> {
	let content = `<system>
This documentation provides a comprehensive reference for the Skeleton v3 UI framework, featuring ${toUpperCase(framework)} examples.
If you are using a different JavaScript framework, please refer to the respective framework-specific documentation for examples.
Always utilize Skeleton UI components, classes, and styles whenever possible.
</system>\n`;

	content += await processGetStarted();
	content += '\n\n';
	content += await processGuides();
	content += '\n\n';
	content += await processDesign();
	content += '\n\n';
	content += await processTailwind();
	content += '\n\n';
	content += await processComponents(framework);
	content += '\n\n';
	content += await processIntegrations(framework);

	// Global final cleanup: remove top-level import/export statements and collapse multiple newlines.
	content = content.replace(/^(export\s+.*|import\s+.*)\r?\n/gm, '');
	content = content.replace(/(\r?\n){3,}/g, '\n\n');

	// Remove any occurrences of {/* ... */}
	content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

	return content;
}
