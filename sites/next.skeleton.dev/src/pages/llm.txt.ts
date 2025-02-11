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
			const typeStr = property.type;
			let description = property.documentation.text || '';
			const defaultTag = property.documentation.tags.find((tag: any) => tag.name === 'default');
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
 * Processes preview blocks by replacing them with Markdown code blocks.
 * Accepts an optional language parameter (default is "svelte").
 */
async function processPreviewBlocks(content: string, language: string = 'svelte'): Promise<string> {
	// Collect raw import mappings (only those ending with ?raw)
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
 * Processes API tables (only for Components & Integrations docs).
 */
async function processApiTables(content: string, docSlug: string): Promise<string> {
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
		let schemaData: any;
		if (schemaVar) {
			const importPath = schemaImports[schemaVar];
			if (importPath) {
				const resolvedPath = importPath.replace(/^@schemas|@content\/schemas/, './src/content/schemas');
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
			schemaData = await getSchemaFromSlug(docSlug);
		}
		if (!Array.isArray(schemaData)) {
			schemaData = [];
		}
		const markdownTable = generateMarkdownApiTable(schemaData);
		content = content.replace(fullMatch, markdownTable);
	}
	return content;
}

/**
 * Processes Get Started documentation.
 * Files under "get-started/" are output with their title, description, and raw body.
 * Files under "get-started/installation/" are grouped as a subcategory.
 */
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
	// If there are installation docs, add them as a subcategory.
	if (installationDocs.length) {
		content += '## Installation\n\n';
		for (const doc of installationDocs) {
			content += `# ${doc.data.title}\n${doc.data.description}\n\n${doc.body}\n\n---\n\n`;
		}
	}
	return content;
}

/**
 * Processes Guides documentation by combining general guides and cookbook guides.
 * Files under "guides/figma/" are ignored.
 */
async function processGuidesGeneral(): Promise<string> {
	const guidesDocs = (await getCollection('docs')).filter(
		(entry) => entry.slug.startsWith('guides/') && !entry.slug.startsWith('guides/figma/') && !entry.slug.startsWith('guides/cookbook/')
	);
	let guidesContent = '';
	for (const doc of guidesDocs) {
		let content = doc.body;
		content = await processPreviewBlocks(content, 'html');
		content = `# ${doc.data.title}\n${doc.data.description}\n\n${content}`;
		guidesContent += content + '\n\n---\n\n';
	}
	return guidesContent;
}

/**
 * Processes Guides Cookbook documentation.
 * These files are added as a subsection under Guides.
 */
async function processGuidesCookbook(): Promise<string> {
	const cookbookDocs = (await getCollection('docs')).filter((entry) => entry.slug.startsWith('guides/cookbook/'));
	let cookbookContent = '';
	for (const doc of cookbookDocs) {
		let content = doc.body;
		content = await processPreviewBlocks(content, 'html');
		content = `# ${doc.data.title}\n${doc.data.description}\n\n${content}`;
		cookbookContent += content + '\n\n---\n\n';
	}
	if (cookbookContent) {
		cookbookContent = `## Cookbook\n\n` + cookbookContent;
	}
	return cookbookContent;
}

/**
 * Processes the complete Guides section.
 */
async function processGuides(): Promise<string> {
	const general = await processGuidesGeneral();
	const cookbook = await processGuidesCookbook();
	let guidesContent = `# Guides\n\n` + general;
	if (cookbook) {
		guidesContent += cookbook;
	}
	return guidesContent;
}

/**
 * Processes Design documentation.
 * Files under "design/" are processed for preview blocks (using "html") and header meta.
 */
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

/**
 * Processes Tailwind documentation.
 * Files under "tailwind/" are processed for preview blocks (using "html") and header meta.
 */
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
 * Components are represented by a meta file (slug "components/<comp>/meta")
 * and a corresponding Svelte doc (slug "components/<comp>/svelte").
 */
async function processComponents(): Promise<string> {
	const metaEntries = (await getCollection('docs')).filter((entry) => entry.slug.startsWith('components/') && entry.slug.endsWith('/meta'));
	let componentsContent = '';
	for (const metaEntry of metaEntries) {
		const svelteSlug = metaEntry.slug.replace(/\/meta$/, '/svelte');
		const svelteEntry = await getEntry('docs', svelteSlug);
		if (!svelteEntry) continue;
		let content = svelteEntry.body;
		content = await processPreviewBlocks(content, 'svelte');
		content = await processApiTables(content, svelteEntry.slug);
		content = `# ${metaEntry.data.title}\n${metaEntry.data.description}\n\n${content}`;
		componentsContent += content + '\n\n---\n\n';
	}
	componentsContent = `# Components\n\n` + componentsContent;
	return componentsContent;
}

/**
 * Processes Integrations documentation.
 * Integrations are structured like components: each integration has a meta file
 * (slug "integrations/<comp>/meta") and a corresponding Svelte doc (slug "integrations/<comp>/svelte").
 */
async function processIntegrations(): Promise<string> {
	const metaEntries = (await getCollection('docs')).filter(
		(entry) => entry.slug.startsWith('integrations/') && entry.slug.endsWith('/meta')
	);
	let integrationsContent = '';
	for (const metaEntry of metaEntries) {
		const svelteSlug = metaEntry.slug.replace(/\/meta$/, '/svelte');
		const svelteEntry = await getEntry('docs', svelteSlug);
		if (!svelteEntry) continue;
		let content = svelteEntry.body;
		content = await processPreviewBlocks(content, 'svelte');
		content = await processApiTables(content, svelteEntry.slug);
		content = `# ${metaEntry.data.title}\n${metaEntry.data.description}\n\n${content}`;
		integrationsContent += content + '\n\n---\n\n';
	}
	integrationsContent = `# Integrations\n\n` + integrationsContent;
	return integrationsContent;
}

/**
 * Main API function.
 * Final ordering:
 * Get Started → Guides → Design → Tailwind → Components → Integrations.
 * Global final cleanup is applied at the very end.
 */
export const GET: APIRoute = async () => {
	let content = '<system> This is the experimental build of Skeleton v3 Documentation (llm-full-svelte.txt). It includes all Svelte examples and integrations, so please be aware that some errors may occur. For the full documentation, visit https://next.skeleton.dev/. </system>\n';
	content += await processGetStarted();
	content += '\n\n';
	content += await processGuides();
	content += '\n\n';
	content += await processDesign();
	content += '\n\n';
	content += await processTailwind();
	content += '\n\n';
	content += await processComponents();
	content += '\n\n';
	content += await processIntegrations();

	// Global final cleanup: remove top-level import/export statements and collapse multiple newlines.
	content = content.replace(/^(export\s+.*|import\s+.*)\r?\n/gm, '');
	content = content.replace(/(\r?\n){2,}/g, '\n');

	// Remove any occurrences of {/* ... */}
	content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

	return new Response(content, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
};
