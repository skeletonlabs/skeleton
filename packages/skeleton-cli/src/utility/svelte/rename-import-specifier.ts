import MagicString from 'magic-string';
import type { ImportDeclaration, ImportSpecifier } from 'estree';
import { hasRange } from './has-range';

function renameImportSpecifier(s: MagicString, node: ImportSpecifier, parent: ImportDeclaration, name: string) {
	if (!(node.imported.type === 'Identifier' && hasRange(node.imported))) {
		return;
	}
	// TODO: Only update when target name isn't already imported
	s.update(node.imported.start, node.imported.end, name);
}

export { renameImportSpecifier };
