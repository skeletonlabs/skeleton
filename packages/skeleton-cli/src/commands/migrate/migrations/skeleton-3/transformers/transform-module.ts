import { transformClasses } from './transform-classes.js';
import { COMPONENT_MAPPINGS } from '../utility/component-mappings';
import { REMOVED_COMPONENTS } from '../utility/removed-components';
import { Node } from 'ts-morph';
import { addNamedImport } from '../../../../../utility/ts-morph/add-named-import';
import { parseSourceFile } from '../../../../../utility/ts-morph/parse-source-file';

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
			if (Object.hasOwn(COMPONENT_MAPPINGS, name)) {
				node.remove();
				addNamedImport(file, '@skeletonlabs/skeleton-svelte', COMPONENT_MAPPINGS[name]);
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
			if (Object.hasOwn(COMPONENT_MAPPINGS, name)) {
				node.replaceWithText(COMPONENT_MAPPINGS[name]);
			}
		}
		if (!node.wasForgotten() && Node.isStringLiteral(node) && !Node.isImportDeclaration(node.getParent())) {
			node.setLiteralValue(transformClasses(node.getLiteralValue()).code);
		}
	});
	return {
		code: file.getFullText()
	};
}

export { transformModule };
