import { readFile, writeFile } from 'node:fs/promises';
import { createSourceFile } from '../../../../../internal/create-source-file.js';
import { Node } from 'ts-morph';
import { transformClasses } from './transform-classes.js';

function transformModuleContent(code: string) {
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
	return file.getFullText();
}

async function transformModule(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformModuleContent(code);
	await writeFile(path, transformed);
}

export { transformModuleContent, transformModule };
