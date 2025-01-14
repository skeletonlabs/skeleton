import { Node } from 'ts-morph';
import { transformClasses } from './transform-classes.js';
import { createSourceFile } from '../../../../../utility/create-source-file.js';
import { COMPONENT_MAPPINGS } from '../utility/component-mappings';

function transformModule(code: string) {
	const file = createSourceFile(code);

	file.forEachDescendant((node) => {
		if (Node.isImportDeclaration(node)) {
			const moduleSpecifier = node.getModuleSpecifier();
			if (moduleSpecifier.getLiteralText() === '@skeletonlabs/skeleton') {
				node.setModuleSpecifier('@skeletonlabs/skeleton-svelte');
			}
			for (const importSpecifier of node.getNamedImports()) {
				const importedName = importSpecifier.getNameNode();
				const name = importedName.getText();
				if (name in COMPONENT_MAPPINGS) {
					importedName.replaceWithText(COMPONENT_MAPPINGS[name]);
				}
			}
		}
		if (Node.isIdentifier(node)) {
			const name = node.getText();
			if (name in COMPONENT_MAPPINGS) {
				node.replaceWithText(COMPONENT_MAPPINGS[name]);
			}
		}
		if (Node.isStringLiteral(node) && !Node.isImportDeclaration(node.getParent())) {
			node.setLiteralValue(transformClasses(node.getLiteralValue()).code);
		}
	});
	file.fixUnusedIdentifiers();
	return {
		code: file.getFullText()
	};
}

export { transformModule };
