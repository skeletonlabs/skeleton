import { transformClasses } from './transform-classes';
import { Node } from 'ts-morph';
import { addNamedImport } from '../../../../../utility/ts-morph/add-named-import';
import { parseSourceFile } from '../../../../../utility/ts-morph/parse-source-file';
import { EXPORT_MAPPINGS } from '../utility/export-mappings';

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
			const exportMapping = EXPORT_MAPPINGS[name];
			if (exportMapping) {
				if (exportMapping.identifier.type === 'renamed' && !exportMapping.identifier.value.match(/^[A-Za-z]+\.[A-Za-z]+$/)) {
					node.remove();
					addNamedImport(file, '@skeletonlabs/skeleton-svelte', exportMapping.identifier.value);
				} else if (exportMapping.namedImport.type === 'removed') {
					const parent = node.getImportDeclaration();
					if (parent.getNamedImports().length === 1 && !parent.getDefaultImport() && !parent.getNamespaceImport()) {
						parent.remove();
					} else {
						node.remove();
					}
				}
			}
		}
		if (!node.wasForgotten() && Node.isIdentifier(node)) {
			const name = node.getText();
			const exportMapping = EXPORT_MAPPINGS[name];
			if (exportMapping && exportMapping.identifier.type === 'renamed') {
				node.replaceWithText(exportMapping.identifier.value);
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
