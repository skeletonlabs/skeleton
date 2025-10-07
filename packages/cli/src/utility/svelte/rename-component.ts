import type MagicString from 'magic-string';
import type { AST } from 'svelte/compiler';

function renameComponent(s: MagicString, node: AST.Component, name: string) {
	const adjustedStart = node.start + 1;
	s.update(adjustedStart, adjustedStart + node.name.length, name);
	const componentString = s.original.slice(node.start, node.end);
	const indexOfNonSelfClosingTag = componentString.lastIndexOf('</');
	if (indexOfNonSelfClosingTag === -1 || node.start + indexOfNonSelfClosingTag > node.end) {
		return;
	}
	s.update(node.start + indexOfNonSelfClosingTag + 2, node.start + indexOfNonSelfClosingTag + 2 + node.name.length, name);
}

export { renameComponent };
