import { parseSourceFile } from '../../../../../utility/ts-morph/parse-source-file';
import { IDENTIFIER_MAPPINGS } from '../utility/identifier-mappings';
import { IMPORT_MAPPINGS } from '../utility/import-mappings';
import { Node } from 'ts-morph';

function transformModule(code: string) {
	const file = parseSourceFile(code);

	file.forEachDescendant((node) => {
		if (
			Node.isImportSpecifier(node) &&
			['@skeletonlabs/skeleton-svelte', '@skeletonlabs/skeleton-react'].includes(
				node.getImportDeclaration().getModuleSpecifier().getLiteralText(),
			)
		) {
			const newName = IMPORT_MAPPINGS[node.getName()];
			if (newName) {
				node.setName(newName);
			}
		}
	});

	file.forEachDescendant((node) => {
		if (!node.wasForgotten() && Node.isIdentifier(node) && !Node.isImportSpecifier(node.getParent())) {
			const newName = IDENTIFIER_MAPPINGS[node.getText()];
			if (newName) {
				console.log('Renaming', node.getText(), 'to', newName);
				node.rename(newName);
			}
		}
	});

	return {
		code: file.getFullText(),
	};
}

export { transformModule };
