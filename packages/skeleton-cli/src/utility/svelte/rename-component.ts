import MagicString from 'magic-string';
import type { AST } from 'svelte/compiler';
import { COMPONENT_MAPPINGS } from '../../commands/migrate/migrations/skeleton-3/utility/component-mappings';

function renameComponent(s: MagicString, node: AST.Component) {
	const adjustedStart = node.start + 1;
	s.update(adjustedStart, adjustedStart + node.name.length, COMPONENT_MAPPINGS[node.name]);
	const componentString = s.original.slice(node.start, node.end);
	const indexOfNonSelfClosingTag = componentString.lastIndexOf('</', node.start);
	if (indexOfNonSelfClosingTag === -1 || node.start + indexOfNonSelfClosingTag > node.end) {
		return;
	}
	s.update(
		node.start + indexOfNonSelfClosingTag + 2,
		node.start + indexOfNonSelfClosingTag + 2 + node.name.length,
		COMPONENT_MAPPINGS[node.name]
	);
}

export { renameComponent };
