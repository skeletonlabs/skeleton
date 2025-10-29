import { parseMDX } from './parse-mdx';
import { printMarkdown } from './print-markdown';
import { processApiTableComponents } from './process-api-table-components';
import { processFrameworkComponents } from './process-framework-components';
import { processPreviewComponents } from './process-preview-components';
import { pruneMDXNodes } from './prune-mdx-nodes';
import type { CollectionEntry } from 'astro:content';

export function getMarkdownFromDoc(doc: CollectionEntry<'docs'>, frameworks: CollectionEntry<'frameworks'>[]) {
	if (!doc.body) {
		return;
	}
	const root = parseMDX(doc.body);
	processFrameworkComponents(root, frameworks);
	processPreviewComponents(root);
	processApiTableComponents(root);
	pruneMDXNodes(root);
	return [`# ${doc.data.title}`, doc.data.description, doc.data.summary, printMarkdown(root)].filter(Boolean).join('\n\n');
}
