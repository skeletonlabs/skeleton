import { readFile, writeFile } from 'node:fs/promises';
import { generateCode, parseCode } from '../../../../internal/code.js';
import { getDefaultExportObject } from '../../../../internal/get-default-export.js';
import { Node, SourceFile, SyntaxKind, ts } from 'ts-morph';
import { isModuleUsed } from '../../../../internal/is-module-used.js';

function transformContentPaths(module: SourceFile) {
	const configNode = getDefaultExportObject(module);
	if (!configNode) {
		return;
	}
	const contentProperty = configNode.getProperty('content');
	if (!(contentProperty && ts.isPropertyAssignment(contentProperty.compilerNode))) {
		return;
	}
	const propertyAssignment = contentProperty.asKindOrThrow(SyntaxKind.PropertyAssignment);
	const initializer = propertyAssignment.getInitializer();
	if (!(initializer && ts.isArrayLiteralExpression(initializer.compilerNode))) {
		return;
	}
	const arrayLiteral = initializer.asKindOrThrow(SyntaxKind.ArrayLiteralExpression);
	for (const element of arrayLiteral.getElements()) {
		if (!isJoinedContent(element)) {
			continue;
		}
		element.replaceWithText("contentPath(import.meta.url, 'svelte')");
	}
}

function transformPluginConfig(module: SourceFile) {
	const configNode = getDefaultExportObject(module);
	if (!configNode) {
		return;
	}

}

function transformImports(module: SourceFile) {
	for (const declaration of module.getImportDeclarations()) {
		const specifier = declaration.getModuleSpecifierValue();
		if (specifier === '@skeletonlabs/tw-plugin') {
			declaration.addNamedImport('contentPath');
			declaration.setModuleSpecifier('@skeletonlabs/skeleton/plugin');
		}
		if (['path', 'node:path'].includes(specifier)) {
			const namedImports = declaration.getNamedImports();
			const joinImport = namedImports.find((imp) => imp.getName() === 'join');
			if (joinImport) {
				if (namedImports.length === 1 && !isModuleUsed(module, 'join')) {
					declaration.remove();
				} else {
					joinImport.remove();
				}
			}
		}
	}

}

function isJoinedContent(node: Node) {
	if (!node.isKind(SyntaxKind.CallExpression)) {
		return false;
	}
	const expression = node.getExpression();
	if (!expression.isKind(SyntaxKind.Identifier) || expression.getText() !== 'join') {
		return false;
	}
	const [argOne, argTwo] = node.getArguments();
	if (!argOne.isKind(SyntaxKind.CallExpression)) {
		return false;
	}
	const argOneExpression = argOne.getExpression();
	if (!argOneExpression.isKind(SyntaxKind.PropertyAccessExpression)) {
		return false;
	}
	const requireExpression = argOneExpression.getExpression();
	if (!requireExpression.isKind(SyntaxKind.Identifier) || requireExpression.getText() !== 'require') {
		return false;
	}
	if (argOneExpression.getName() !== 'resolve') {
		return false;
	}
	const callArgs = argOne.getArguments();
	if (callArgs.length !== 1) {
		return false;
	}
	const firstCallArg = callArgs[0];
	if (!firstCallArg.isKind(SyntaxKind.StringLiteral) || firstCallArg.getLiteralText() !== '@skeletonlabs/skeleton') {
		return false;
	}
	return !(!argTwo.isKind(SyntaxKind.StringLiteral) || argTwo.getLiteralText() !== '../**/*.{html,js,svelte,ts}');
}

function transformTailwindConfigContent(code: string) {
	const module = parseCode(code);
	transformContentPaths(module);
	transformPluginConfig(module);
	transformImports(module);
	return generateCode(module);
}

async function transformTailwindConfig(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformTailwindConfigContent(code);
	await writeFile(path, transformed);
}

export { transformTailwindConfigContent, transformTailwindConfig };
