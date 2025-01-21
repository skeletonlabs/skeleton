import { transformClasses } from './transform-classes';
import { Node } from 'ts-morph';
import { addNamedImport } from '../../../../../utility/ts-morph/add-named-import';
import { parseSourceFile } from '../../../../../utility/ts-morph/parse-source-file';
import { RENAMED_EXPORTS } from '../utility/exports/renamed-exports';
import { REMOVED_EXPORTS } from '../utility/exports/removed-exports';

function transformModule(code: string) {
	const file = parseSourceFile(code);
	file.forEachDescendant((node) => {
		if (Node.isImportDeclaration(node)) {
			const moduleSpecifier = node.getModuleSpecifier();
			if (moduleSpecifier.getLiteralText() === '@skeletonlabs/skeleton') {
				node.setModuleSpecifier('@skeletonlabs/skeleton-svelte');
			}
		}
		if (Node.isImportSpecifier(node)) {
			const name = node.getName();
			if (Object.hasOwn(RENAMED_EXPORTS, name) && !RENAMED_EXPORTS[name].match(/^[A-Za-z]+\.[A-Za-z]+$/)) {
				node.remove();
				addNamedImport(file, '@skeletonlabs/skeleton-svelte', RENAMED_EXPORTS[name]);
			}
			if (REMOVED_EXPORTS.includes(name)) {
				const parent = node.getImportDeclaration();
				if (parent.getNamedImports().length === 1 && !parent.getDefaultImport() && !parent.getNamespaceImport()) {
					parent.remove();
				} else {
					node.remove();
				}
			}
		}
		if (!node.wasForgotten() && Node.isIdentifier(node)) {
			const name = node.getText();
			if (Object.hasOwn(RENAMED_EXPORTS, name)) {
				node.replaceWithText(RENAMED_EXPORTS[name]);
			}
		}
		if (!node.wasForgotten() && Node.isStringLiteral(node) && !Node.isImportDeclaration(node.getParent())) {
			node.replaceWithText(transformClasses(node.getText()).code);
		}
	});
	return {
		code: file.getFullText()
	};
}

export { transformModule };
