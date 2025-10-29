import { parseMDX } from './parse-mdx';
import { printMDX } from './print-mdx';
import { pruneMDXNodes } from './prune-mdx-nodes';
import type { CollectionEntry } from 'astro:content';

export function getMarkdownFromDoc(doc: CollectionEntry<'docs'>) {
	if (!doc.body) {
		return;
	}
	const root = parseMDX(doc.body);
	// TODO: Parse <Framework> components
	// TODO: Parse <Preview> components
	// TODO: Parse <ApiTable> components
	pruneMDXNodes(root);
	return [`# ${doc.data.title}`, doc.data.description, doc.data.summary, printMDX(root)].filter(Boolean).join('\n\n');
}
