import { parseSourceFile } from '../../../../../utility/ts-morph/parse-source-file.js';
import { IDENTIFIER_MAPPINGS } from '../utility/identifier-mappings.js';
import { IMPORT_MAPPINGS } from '../utility/import-mappings.js';
import { Node } from 'ts-morph';

function transformModule(code: string) {
	const file = parseSourceFile(code);
	const skeletonImports: string[] = [];

	file.forEachDescendant((node) => {
		if (
			Node.isImportSpecifier(node) &&
			['@skeletonlabs/skeleton-svelte', '@skeletonlabs/skeleton-react'].includes(
				node.getImportDeclaration().getModuleSpecifier().getLiteralText(),
			)
		) {
			const name = node.getName();
			if (Object.hasOwn(IMPORT_MAPPINGS, name)) {
				skeletonImports.push(name);
				node.setName(IMPORT_MAPPINGS[name]!);
			}
		}
	});

	file.forEachDescendant((node) => {
		if (Node.isPropertyAccessExpression(node)) {
			const fullName = `${node.getExpression().getText()}.${node.getName()}`;
			if (Object.hasOwn(IDENTIFIER_MAPPINGS, fullName)) {
				node.replaceWithText(IDENTIFIER_MAPPINGS[fullName]!);
			}
		} else if (Node.isIdentifier(node) && !Node.isImportSpecifier(node.getParent())) {
			if (Object.hasOwn(IDENTIFIER_MAPPINGS, node.getText())) {
				node.replaceWithText(IDENTIFIER_MAPPINGS[node.getText()]!);
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
