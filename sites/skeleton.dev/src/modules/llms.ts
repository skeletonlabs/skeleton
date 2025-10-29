import type { CollectionEntry } from 'astro:content';
import type { Root, Node } from 'mdast';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxFromMarkdown, mdxToMarkdown } from 'mdast-util-mdx';
import { toMarkdown } from 'mdast-util-to-markdown';
import { mdxjs } from 'micromark-extension-mdxjs';
import { visit } from 'unist-util-visit';

function parseMDX(content: string) {
	return fromMarkdown(content, {
		extensions: [mdxjs()],
		mdastExtensions: [mdxFromMarkdown()],
	});
}

function printMDX(root: Root) {
	return toMarkdown(root, {
		extensions: [mdxToMarkdown()],
	});
}

export function pruneMDXNodes(root: Root) {
	const nodesToRemove = new WeakSet<Node>();
	visit(root, (node) => {
		if (node.type.startsWith('mdx')) {
			nodesToRemove.add(node);
		}
	});
	function filterChildren(node: Node) {
		if ('children' in node && Array.isArray(node.children)) {
			node.children = node.children.filter((child) => !nodesToRemove.has(child)).map(filterChildren);
		}
		return node;
	}
	return filterChildren(root);
}

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
