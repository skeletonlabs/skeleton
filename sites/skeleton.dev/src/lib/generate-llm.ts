import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import fs from 'fs/promises';
import path from 'path';
import { glob } from 'tinyglobby';

type Framework = 'svelte' | 'react';

type TypesRecord = CollectionEntry<'types'>['data'];

// Exact copy from ApiTable.astro
async function getSchemaFromSlug(slug: string | undefined) {
	if (!slug) {
		return;
	}
	const parts = slug.split('/');
	const component = parts.at(-2);
	const framework = parts.at(-1);
	if (!component || !framework) {
		return;
	}
	const entry = await getEntry('types', `${framework}/${component}`);
	return entry?.data;
}

// Replacement from ApiTable.astro but instead converts schema to markdown tables
function generateMarkdownApiTable(schema: TypesRecord | null | undefined): string {
	if (!schema || typeof schema !== 'object') {
		return '';
	}
	let markdown = '';
	for (const type of schema.types) {
		const sectionTitle = type.name.replace('Props', '');
		markdown += `\n### ${sectionTitle}\n\n`;
		markdown += `| Property | Type | Description |\n`;
		markdown += `| --- | --- | --- |\n`;
		for (const property of type.props) {
			const required = property.optional ? false : true;
			const propName = `\`${property.name}\`${required ? '*' : ''}`;
			// Replace pipe characters in union types with commas to avoid breaking table format (types are listed like number | null | undefined)
			const typeStr = property.type.replace(/\s*\|\s*/g, ', ');
			let description = (property.JSDoc?.description ?? '') as string;
			const defaultTag = property.JSDoc?.tags?.find((t) => t.name === 'default');
			if (defaultTag && defaultTag.value) {
				description += `\nDefault: ${defaultTag.value}`;
			}
			description = description.replace(/\n/g, ' ');
			markdown += `| ${propName} | ${typeStr} | ${description} |\n`;
		}
		markdown += `\n`;
	}
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
	const previewBlocks = [...content.matchAll(previewBlockRegex)];
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
		// We really only care about the code part and detect which path it is referring to
		// by using the rawImports Record

		// Note, there is a edge case where preview have code embeded, We are checking this first
		/*
		<Fragment slot="code">
			<div class="space-y-4">
				Scaling can be adjusted by modifying the [type scale](/docs/get-started/core-api#typography) theme property.
				```css
				[data-theme='cerberus'] {
					--spacing: 0.25rem;
				}
				```
			</div>
		</Fragment>
		*/

		// <Code code={ExampleRaw} lang="tsx" /> -> ExampleRaw
		const codeIdentifierMatch = previewBlock.match(/<Code\s+code=\{([^}]+)\}/);
		if (!codeIdentifierMatch) {
			// No Code component found - check if there's embedded content in the code slot
			// slot=["']code["'] Match exactly "code" or 'code'
			// [^>]* Match anything except >, include additional possible attributes
			// ([\s\S]*?) Match everything including newlines
			const codeSlotMatch = previewBlock.match(/<Fragment\s+slot=["']code["'][^>]*>([\s\S]*?)<\/Fragment>/);
			if (codeSlotMatch) {
				const codeSlotContent = codeSlotMatch[1].trim();
				// Include everything from the code slot - if no code is found
				content = content.replace(previewBlock, codeSlotContent);
			}
			continue;
		}
		const codeIdentifier = codeIdentifierMatch[1].trim();
		const importPath = rawImports[codeIdentifier];
		if (!importPath) {
			continue;
		}
		const resolvedPath = importPath.replace('@examples', './src/examples').replace(/^@\/examples/, './src/examples');

		let fileContent = '';

		// Check if the path already has an extension
		const hasExtension = path.extname(resolvedPath) !== '';

		try {
			if (hasExtension) {
				// Path already has extension, read directly
				fileContent = await fs.readFile(path.resolve(resolvedPath), 'utf8');
			} else {
				// No extension, use glob to find the file with any extension
				const globPattern = `${resolvedPath}.*`;
				const matches = await glob([globPattern], {
					absolute: false,
				});

				if (matches.length > 0) {
					// Pick the first match
					const filePath = matches[0];
					fileContent = await fs.readFile(path.resolve(filePath), 'utf8');
				} else {
					console.error('No file found matching pattern:', globPattern);
					fileContent = '// Error loading file, please report this issue.';
				}
			}
		} catch (error) {
			console.error('Error reading file:', resolvedPath, error);
			fileContent = '// Error loading file, please report this issue.';
		}

		const replacement = `\`\`\`${language}\n${fileContent}\n\`\`\``;
		content = content.replace(previewBlock, replacement);
	}
	return content;
}

// TODO: wait for the APITable update, prehaps the API table could be export its function so no rewrite is needed here
/**
 * Replaces APITable with Markdown Tables.
 * @param content The content to process.
 * @param docSlug The slug of the content.
 */
async function processApiTables(content: string, docSlug: string): Promise<string> {
	// ApiTable might be called in a few ways:
	// 1. <ApiTable /> 2. <ApiTable {schema} />
	// 3. <ApiTable component="progress" />
	// The schema is always imported as json
	const schemaImportRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+\.json)['"];/g;
	const schemaImports: Record<string, string> = {};
	let match;
	while ((match = schemaImportRegex.exec(content)) !== null) {
		const identifier = match[1];
		const importPath = match[2];
		schemaImports[identifier] = importPath;
	}

	const apiTableRegex = /<ApiTable(?:\s+(?:schema=\{([^}]+)\}|component=["']([^"']+)["']))?\s*\/>/g;
	const apiTableMatches = [...content.matchAll(apiTableRegex)];
	for (const apiMatch of apiTableMatches.toReversed()) {
		const fullMatch = apiMatch[0];
		const schemaVar = apiMatch[1]?.trim();
		const componentName = apiMatch[2]?.trim();
		let schemaData: TypesRecord | null;

		if (schemaVar) {
			// Case 2
			const importPath = schemaImports[schemaVar];
			if (importPath) {
				const resolvedPath = importPath.replace(/^@types|@content\/types/, './src/content/types');
				try {
					const schemaModule = await import(/* @vite-ignore */ path.resolve(resolvedPath));
					schemaData = schemaModule.default || schemaModule;
				} catch (error) {
					console.error('Error importing schema file:', resolvedPath, error);
					schemaData = null;
				}
			} else {
				schemaData = null;
			}
		} else if (componentName) {
			// Case 3
			const parts = docSlug.split('/');
			const framework = parts.at(-1);
			if (framework && (framework === 'react' || framework === 'svelte')) {
				const componentSlug = `${framework}/${componentName}`;
				const entry = await getEntry('types', componentSlug);
				schemaData = entry?.data as unknown as TypesRecord | null;
			} else {
				schemaData = null;
			}
		} else {
			// Case 1
			schemaData = (await getSchemaFromSlug(docSlug)) as unknown as TypesRecord | null;
		}
		const markdownTable = generateMarkdownApiTable(schemaData);
		content = content.replace(fullMatch, markdownTable);
	}
	return content;
}

async function processGetStarted(): Promise<string> {
	const allGetStarted = (await getCollection('docs')).filter((entry) => entry.id.startsWith('get-started/'));
	// Separate installation docs
	const installationDocs = allGetStarted.filter((entry) => entry.id.startsWith('get-started/installation/'));
	const generalDocs = allGetStarted.filter((entry) => !entry.id.startsWith('get-started/installation/'));

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
		(entry) => entry.id.startsWith('guides/') && !entry.id.startsWith('guides/figma/') && !entry.id.startsWith('guides/cookbook/'),
	);
	let guidesContent = '';
	for (const doc of guidesDocs) {
		let content = doc.body ?? '';
		// Guides only has preview blocks without ApiTables
		content = await processPreviewBlocks(content, 'html');
		content = `# ${doc.data.title}\n${doc.data.description}\n\n${content}`;
		guidesContent += content + '\n\n---\n\n';
	}
	return guidesContent;
}

async function processGuidesCookbook(): Promise<string> {
	const cookbookDocs = (await getCollection('docs')).filter((entry) => entry.id.startsWith('guides/cookbook/'));
	let cookbookContent = '';
	for (const doc of cookbookDocs) {
		let content = doc.body ?? '';
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
	const designDocs = (await getCollection('docs')).filter((entry) => entry.id.startsWith('design/'));
	let designContent = '';
	for (const doc of designDocs) {
		let content = doc.body ?? '';
		content = await processPreviewBlocks(content, 'html');
		content = `# ${doc.data.title}\n${doc.data.description}\n\n${content}`;
		designContent += content + '\n\n---\n\n';
	}
	designContent = `# Design\n\n` + designContent;
	return designContent;
}

async function processTailwind(): Promise<string> {
	const tailwindDocs = (await getCollection('docs')).filter((entry) => entry.id.startsWith('tailwind/'));
	let tailwindContent = '';
	for (const doc of tailwindDocs) {
		let content = doc.body ?? '';
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
	const metaEntries = (await getCollection('docs')).filter((entry) => entry.id.startsWith('components/') && entry.id.endsWith('/meta'));
	let componentsContent = '';
	for (const metaEntry of metaEntries) {
		const docSlug = metaEntry.id.replace(/\/meta$/, `/${framework}`);
		const docEntry = await getEntry('docs', docSlug);
		if (!docEntry) {
			continue;
		}
		let content = docEntry.body ?? '';
		content = await processPreviewBlocks(content, framework);
		content = await processApiTables(content, docEntry.id);
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
	const metaEntries = (await getCollection('docs')).filter((entry) => entry.id.startsWith('integrations/') && entry.id.endsWith('/meta'));
	let integrationsContent = '';
	for (const metaEntry of metaEntries) {
		const docSlug = metaEntry.id.replace(/\/meta$/, `/${framework}`);
		const docEntry = await getEntry('docs', docSlug);
		if (!docEntry) {
			continue;
		}
		let content = docEntry.body ?? '';
		content = await processPreviewBlocks(content, framework);
		content = await processApiTables(content, docEntry.id);
		content = `# ${metaEntry.data.title}\n${metaEntry.data.description}\n\n${content}`;
		integrationsContent += content + '\n\n---\n\n';
	}
	integrationsContent = `# Integrations\n\n` + integrationsContent;
	return integrationsContent;
}

/**
 * Generates documentation for a single page.
 * @param docEntry The document entry from the content collection.
 * @param metaEntry Optional meta entry for components/integrations.
 */
export async function generateSinglePageDocumentation(
	docEntry: CollectionEntry<'docs'>,
	metaEntry?: CollectionEntry<'docs'>,
): Promise<string> {
	// Determine framework from slug if present
	const slug = docEntry.id;
	let framework: Framework | 'html' = 'html';
	if (slug.endsWith('/react')) {
		framework = 'react';
	} else if (slug.endsWith('/svelte')) {
		framework = 'svelte';
	}

	// Use meta title/description if available, otherwise use doc entry
	const title = metaEntry?.data.title ?? docEntry.data.title;
	const description = metaEntry?.data.description ?? docEntry.data.description;

	let content = `# ${title}\n${description}\n\n`;

	// Process the body content
	let bodyContent = docEntry.body ?? '';

	// Replace previews
	const language = framework === 'react' ? 'tsx' : framework === 'svelte' ? 'svelte' : 'html';
	bodyContent = await processPreviewBlocks(bodyContent, language);
	bodyContent = await processApiTables(bodyContent, docEntry.id);

	content += bodyContent;

	// Final cleanup, removing raw imports, extra new line characters, and comments
	content = content.replace(/^(export\s+.*|import\s+.*)\r?\n/gm, '');
	content = content.replace(/(\r?\n){3,}/g, '\n\n');
	content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

	return content;
}

/**
 * Generates the complete documentation content.
 * @param framework The target framework ('svelte' or 'react').
 */
export async function generateDocumentation(framework: Framework): Promise<string> {
	let content = `<SYSTEM>This is the developer documentation for Skeleton, an adaptive design system powered by Tailwind CSS, featuring ${framework.replace(/^./, (c) => c.toUpperCase())} specific examples.</SYSTEM>\n`;

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
