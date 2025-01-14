import { Node } from 'ts-morph';
import { transformClasses } from './transform-classes.js';
import { createSourceFile } from '../../../../../utility/create-source-file.js';
import { COMPONENT_MAPPINGS } from '../utility/component-mappings';
import { REMOVED_COMPONENTS } from '../utility/removed-components';

function transformModule(code: string) {
	const file = createSourceFile(code);
	file.forEachDescendant((node) => {
		if (Node.isImportDeclaration(node)) {
			const moduleSpecifier = node.getModuleSpecifier();
			if (moduleSpecifier.getLiteralText() === '@skeletonlabs/skeleton') {
				node.setModuleSpecifier('@skeletonlabs/skeleton-svelte');
			}
		}
		if (Node.isImportSpecifier(node)) {
			const importedName = node.getNameNode();
			const name = importedName.getText();
			if (name in COMPONENT_MAPPINGS) {
				importedName.replaceWithText(COMPONENT_MAPPINGS[name]);
			}
			if (REMOVED_COMPONENTS.includes(name)) {
				const parent = node.getParent().getParent().getParent();
				if (
					Node.isImportDeclaration(parent) &&
					parent.getNamedImports().length === 1 &&
					!parent.getDefaultImport() &&
					!parent.getNamespaceImport()
				) {
					parent.remove();
				} else {
					node.remove();
				}
			}
		}
		if (!node.wasForgotten() && Node.isIdentifier(node)) {
			const name = node.getText();
			if (name in COMPONENT_MAPPINGS) {
				node.replaceWithText(COMPONENT_MAPPINGS[name]);
			}
		}
		if (!node.wasForgotten() && Node.isStringLiteral(node) && !Node.isImportDeclaration(node.getParent())) {
			node.setLiteralValue(transformClasses(node.getLiteralValue()).code);
		}
	});
	file.fixUnusedIdentifiers();
	return {
		code: file.getFullText()
	};
}

export { transformModule };
