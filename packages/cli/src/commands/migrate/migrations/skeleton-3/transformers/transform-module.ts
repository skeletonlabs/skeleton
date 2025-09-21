import { addNamedImport } from '../../../../../utility/ts-morph/add-named-import';
import { parseSourceFile } from '../../../../../utility/ts-morph/parse-source-file';
import { EXPORT_MAPPINGS } from '../utility/export-mappings';
import { transformClasses } from './transform-classes';
import { Node } from 'ts-morph';

function transformModule(code: string) {
	const file = parseSourceFile(code);
	const skeletonImports: string[] = [];
	file.forEachDescendant((node) => {
		if (Node.isImportDeclaration(node)) {
			const moduleSpecifier = node.getModuleSpecifier();
			if (moduleSpecifier.getLiteralText() === '@skeletonlabs/skeleton') {
				node.setModuleSpecifier('@skeletonlabs/skeleton-svelte');
			}
		}
		if (
			Node.isImportSpecifier(node) &&
			node.getImportDeclaration().getModuleSpecifier().getLiteralText() === '@skeletonlabs/skeleton-svelte'
		) {
			const name = node.getName();
			if (Object.hasOwn(EXPORT_MAPPINGS, name)) {
				const exportMapping = EXPORT_MAPPINGS[name];
				switch (exportMapping?.namedImport.type) {
					case 'renamed': {
						if (exportMapping.namedImport.value.match(/^[A-Za-z]+\.[A-Za-z]+$/)) {
							break;
						}
						node.remove();
						addNamedImport(file, '@skeletonlabs/skeleton-svelte', exportMapping.namedImport.value);
						break;
					}
					case 'removed': {
						const parent = node.getImportDeclaration();
						if (parent.getNamedImports().length === 1 && !parent.getDefaultImport() && !parent.getNamespaceImport()) {
							parent.remove();
						} else {
							node.remove();
						}
						break;
					}
				}
				skeletonImports.push(name);
			}
		}
	});
	file.forEachDescendant((node) => {
		if (!node.wasForgotten() && Node.isIdentifier(node) && !Node.isImportSpecifier(node.getParent())) {
			const name = node.getText();
			if (Object.hasOwn(EXPORT_MAPPINGS, name) && skeletonImports.includes(name)) {
				const exportMapping = EXPORT_MAPPINGS[name];
				if (exportMapping?.identifier.type === 'renamed') {
					const updated = exportMapping.identifier.value;
					if (updated !== node.getText()) {
						node.replaceWithText(updated);
					}
				}
			}
		}
		if (!node.wasForgotten() && Node.isStringLiteral(node) && !Node.isImportDeclaration(node.getParent())) {
			const transformed = transformClasses(node.getText()).code;
			if (transformed !== node.getText()) {
				node.replaceWithText(transformed);
			}
		}
	});

	return {
		code: file.getFullText(),
		meta: {
			skeletonImports: skeletonImports,
		},
	};
}

export { transformModule };
