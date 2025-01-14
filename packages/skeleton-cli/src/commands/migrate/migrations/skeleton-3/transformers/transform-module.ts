import { Node } from 'ts-morph';
import { transformClasses } from './transform-classes.js';
import { createSourceFile } from '../../../../../utility/create-source-file.js';

function transformModule(code: string) {
	const file = createSourceFile(code);
	for (const importDeclaration of file.getImportDeclarations()) {
		const moduleSpecifier = importDeclaration.getModuleSpecifier();
		if (moduleSpecifier.getLiteralText() === '@skeletonlabs/skeleton') {
			importDeclaration.setModuleSpecifier('@skeletonlabs/skeleton-svelte');
		}
	}
	file.forEachDescendant((node) => {
		if (!(Node.isStringLiteral(node) && !Node.isImportDeclaration(node.getParent()))) {
			return;
		}
		node.setLiteralValue(transformClasses(node.getLiteralValue()));
	});
	file.fixUnusedIdentifiers();
	return {
		code: file.getFullText()
	};
}

export { transformModule };
