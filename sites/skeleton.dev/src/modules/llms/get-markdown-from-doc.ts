import { parseMDX } from './parse-mdx';
import { printMarkdown } from './print-markdown';
import { processApiReferenceComponents } from './process-api-reference-components';
import { processFrameworkComponents } from './process-framework-components';
import { processPreviewComponents } from './process-preview-components';
import { pruneESMNodes } from './prune-esm-nodes';
import type { CollectionEntry } from 'astro:content';

export function getMarkdownFromDoc(doc: CollectionEntry<'docs'>, frameworks: CollectionEntry<'frameworks'>[]) {
	if (!doc.body) {
		return;
	}
	const root = parseMDX(doc.body);
	processFrameworkComponents(root, frameworks);
	processPreviewComponents(root);
	processApiReferenceComponents(root);
	pruneESMNodes(root);
	return [`# ${doc.data.title}`, doc.data.description, doc.data.summary, printMarkdown(root)].filter(Boolean).join('\n\n');
}
