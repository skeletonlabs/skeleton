import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Root } from 'mdast';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxFromMarkdown } from 'mdast-util-mdx';
import type { MdxJsxAttribute, MdxJsxExpressionAttribute, MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import { mdxjs } from 'micromark-extension-mdxjs';
import { readFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkStringify from 'remark-stringify';
import { glob } from 'tinyglobby';
import { unified } from 'unified';
import type { Parent } from 'unist';
import { visit } from 'unist-util-visit';

function parse(content: string): Root {
	return fromMarkdown(content, {
		extensions: [mdxjs()],
		mdastExtensions: [mdxFromMarkdown()],
	});
}

function print(ast: Root): string {
	return unified().use(remarkMdx).use(remarkGfm).use(remarkStringify, { fences: true }).stringify(ast);
}

function generateTableFromSchema(schema: CollectionEntry<'types'>['data']) {
	return {
		type: 'table',
		align: [],
		children: [
			{
				type: 'tableRow',
				children: ['Property', 'Default', 'Type'].map((val) => ({
					type: 'tableCell',
					children: [{ type: 'text', value: val }],
				})),
			},
			...schema.types.flatMap((type) =>
				type.props.map((prop) => {
					const defaultValue = prop.JSDoc.tags.find((t) => t.name === 'default')?.value ?? '-';
					const description = prop.JSDoc.description ?? '';
					return {
						type: 'tableRow',
						children: [
							{ type: 'tableCell', children: [{ type: 'text', value: prop.name }] },
							{ type: 'tableCell', children: [{ type: 'text', value: defaultValue }] },
							{
								type: 'tableCell',
								children: [
									{ type: 'text', value: prop.type },
									{ type: 'text', value: description ? ` — ${description}` : '' },
								],
							},
						],
					};
				}),
			),
		],
	};
}

async function processApiTable(node: MdxJsxFlowElement, index: number, parent: Parent, entry: CollectionEntry<'docs'>) {
	const frameworkAttribute = node.attributes?.find((a) => a.type === 'mdxJsxAttribute' && a.name === 'framework');
	const componentAttribute = node.attributes?.find((a) => a.type === 'mdxJsxAttribute' && a.name === 'component');
	const framework = frameworkAttribute?.value ? (frameworkAttribute.value as string) : entry.id.split('/').at(-1);
	const component = componentAttribute?.value ? (componentAttribute.value as string) : entry.id.split('/').at(-2);
	if (!framework || !component) {
		return;
	}
	const typesEntry = await getEntry('types', `${framework}/${component}`);
	if (!typesEntry) {
		return;
	}
	parent.children.splice(index, 1, generateTableFromSchema(typesEntry.data));
}

async function loadRawFile(importPath: string) {
	const pathWithoutRaw = importPath.replace(/\?raw$/, '');
	const hasExtension = extname(pathWithoutRaw) !== '';
	if (hasExtension) {
		return readFile(resolve(pathWithoutRaw), 'utf-8');
	}
	const matches = await glob(`${pathWithoutRaw}.*`);
	if (matches.length > 0) {
		return readFile(resolve(matches[0]), 'utf-8');
	}
	return '// Error loading file';
}

function resolveAlias(importPath: string) {
	return importPath.replace('@/', './src/');
}

function buildImportMap(ast: Root): Record<string, string> {
	const map: Record<string, string> = {};
	visit(ast, (node: any) => {
		if (node.type === 'mdxjsEsm') {
			const importRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g;
			let match;
			while ((match = importRegex.exec(node.value)) !== null) {
				const [, id, path] = match;
				map[id] = path;
			}
		}
	});
	return map;
}

async function processPreview(node: MdxJsxFlowElement, index: number, parent: Parent, importMap: Record<string, string>) {
	function findAttribute(attributes: (MdxJsxAttribute | MdxJsxExpressionAttribute)[], name: string) {
		return attributes.find((a) => a.type === 'mdxJsxAttribute' && a.name === name)?.value;
	}

	for (const child of node.children) {
		if (child.type !== 'mdxJsxFlowElement' || child.name !== 'Fragment') {
			continue;
		}

		const slot = findAttribute(child.attributes, 'slot');

		if (slot !== 'code') {
			continue;
		}

		const codeChild = child.children?.find((c): c is MdxJsxFlowElement => c.type === 'mdxJsxFlowElement' && c.name === 'Code');
		if (!codeChild) {
			continue;
		}

		const codeAttr = findAttribute(codeChild.attributes, 'code');
		const langAttr = findAttribute(codeChild.attributes, 'lang') as string | undefined;

		if (!codeAttr || typeof codeAttr !== 'object') continue;

		const codeId = (codeAttr.value ?? '')
			.toString()
			.replace(/^\{?|\}?$/g, '')
			.trim();

		if (!importMap[codeId]) {
			continue;
		}

		const resolved = resolveAlias(importMap[codeId]);
		const fileContent = await loadRawFile(resolved);

		const codeNode = {
			type: 'code',
			lang: langAttr ?? '',
			value: fileContent,
		};

		parent.children.splice(index, 1, codeNode);
		return;
	}
}

function removeMdxNodes(ast: Root) {
	visit(ast, (node, index, parent) => {
		if (!parent || typeof index !== 'number') {
			return;
		}
		if (node.type === 'mdxjsEsm') {
			parent.children.splice(index, 1);
			return;
		}
		if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
			parent.children.splice(index, 1);
			return;
		}
	});
}

function prependData(ast: Root, data: CollectionEntry<'docs'>['data']) {
	ast.children = [
		{
			type: 'heading',
			depth: 1,
			children: [
				{
					type: 'text',
					value: data.title,
				},
			],
		},
		{
			type: 'paragraph',
			children: [
				{
					type: 'text',
					value: data.description,
				},
			],
		},
		...ast.children,
	];
}

async function processApiTables(ast: Root, entry: CollectionEntry<'docs'>) {
	const promises: Promise<void>[] = [];
	visit(ast, (node, index, parent) => {
		if (!parent || typeof index !== 'number') return;
		if (node.type === 'mdxJsxFlowElement' && node.name === 'ApiTable') {
			promises.push(processApiTable(node, index, parent, entry));
		}
	});
	await Promise.all(promises);
}

async function processPreviews(ast: Root, importMap: Record<string, string>) {
	const promises: Promise<void>[] = [];
	visit(ast, (node, index, parent) => {
		if (!parent || typeof index !== 'number') return;
		if (node.type === 'mdxJsxFlowElement' && node.name === 'Preview') {
			promises.push(processPreview(node, index, parent, importMap));
		}
	});
	await Promise.all(promises);
}

export async function generateTextFromEntry(entry: CollectionEntry<'docs'>): Promise<string> {
	if (!entry.body) {
		throw new Error('Entry has no body');
	}
	const hasMetaEntry = ['components/', 'integrations/'].some((id) => entry.id.startsWith(id));
	if (hasMetaEntry) {
		entry.data = {
			...entry.data,
			...(await getEntry('docs', entry.id.replace(/\/[^/]*$/, '/meta')))?.data,
		};
	}
	const ast = parse(entry.body);
	const importMap = buildImportMap(ast);
	await processApiTables(ast, entry);
	await processPreviews(ast, importMap);
	removeMdxNodes(ast);
	prependData(ast, entry.data);
	return print(ast);
}

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

async function getEntriesFromFramework(framework: string) {
	const entries = await getCollection('docs', (entry) => {
		if (entry.id.endsWith('/meta')) {
			return false;
		}
		const hasMetaEntry = ['components/', 'integrations/'].some((id) => entry.id.startsWith(id));
		if (hasMetaEntry) {
			return entry.id.endsWith(`/${framework}`);
		}
		return true;
	});
	return entries.toSorted((a, b) => a.data.order - b.data.order);
}

export async function generateTextFromFramework(framework: string) {
	let content = `<SYSTEM>This is the developer documentation for Skeleton, an adaptive design system powered by Tailwind CSS, featuring ${capitalize(framework)} specific examples.</SYSTEM>\n`;
	const entries = await getEntriesFromFramework(framework);
	for (const entry of entries) {
		const entryText = await generateTextFromEntry(entry);
		content += `\n\n${entryText}`;
	}
	return content;
}
