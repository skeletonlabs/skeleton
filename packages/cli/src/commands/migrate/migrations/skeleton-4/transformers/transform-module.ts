import { parseSourceFile } from '../../../../../utility/ts-morph/parse-source-file';
import { IDENTIFIER_MAPPINGS } from '../utility/identifier-mappings';
import { IMPORT_MAPPINGS } from '../utility/import-mappings';
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
			const newName = IMPORT_MAPPINGS[name];
			if (newName) {
				skeletonImports.push(name);
				node.setName(newName);
			}
		}
	});

	file.forEachDescendant((node) => {
		if (Node.isPropertyAccessExpression(node)) {
			const fullName = `${node.getExpression().getText()}.${node.getName()}`;
			const newName = IDENTIFIER_MAPPINGS[fullName];
			if (newName) {
				node.replaceWithText(newName);
			}
		} else if (Node.isIdentifier(node) && !Node.isImportSpecifier(node.getParent())) {
			const newName = IDENTIFIER_MAPPINGS[node.getText()];
			if (newName) {
				node.replaceWithText(newName);
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
