import { readFile, writeFile } from 'node:fs/promises';
import { CallExpression, Node, ObjectLiteralExpression, SourceFile } from 'ts-morph';
import { getDefaultExportObject } from '../../../../../utility/get-default-export-object';
import { THEME_MAPPINGS } from '../utility/theme-mappings';
import { createSourceFile } from '../../../../../utility/create-source-file';

function isJoinCallExpression(node: Node): node is CallExpression {
	if (!Node.isCallExpression(node)) {
		return false;
	}
	const expression = node.getExpression();
	if (expression.getText() !== 'join') {
		return false;
	}
	const args = node.getArguments();
	if (args.length !== 2) {
		return false;
	}
	const firstArg = args[0];
	if (!Node.isCallExpression(firstArg)) {
		return false;
	}
	const firstArgExpression = firstArg.getExpression();
	if (!Node.isPropertyAccessExpression(firstArgExpression)) {
		return false;
	}
	const firstArgExpressionPropertyAccessExpression = firstArgExpression.getExpression();
	if (!Node.isIdentifier(firstArgExpressionPropertyAccessExpression)) {
		return false;
	}
	if (firstArgExpressionPropertyAccessExpression.getText() !== 'require') {
		return false;
	}
	if (firstArgExpression.getName() !== 'resolve') {
		return false;
	}
	const firstArgArgs = firstArg.getArguments();
	if (firstArgArgs.length !== 1) {
		return false;
	}
	const firstArgArg = firstArgArgs[0];
	if (!Node.isStringLiteral(firstArgArg)) {
		return false;
	}
	if (firstArgArg.getLiteralText() !== '@skeletonlabs/skeleton') {
		return false;
	}
	const secondArg = args[1];
	if (!Node.isStringLiteral(secondArg)) {
		return false;
	}
	return secondArg.getLiteralText() === '../**/*.{html,js,svelte,ts}';
}

function isSkeletonPluginCallExpression(node: Node): node is CallExpression {
	if (!Node.isCallExpression(node)) {
		return false;
	}
	const expression = node.getExpression();
	if (!Node.isIdentifier(expression)) {
		return false;
	}
	return expression.getText() === 'skeleton';
}

function transformTailwindContentOption(file: SourceFile) {
	const defaultExportObject = getDefaultExportObject(file);
	if (!defaultExportObject) {
		return;
	}
	const contentProperty = defaultExportObject.getProperty('content');
	if (!(contentProperty && Node.isPropertyAssignment(contentProperty))) {
		return;
	}
	const contentArray = contentProperty.getInitializer();
	if (!(contentArray && Node.isArrayLiteralExpression(contentArray))) {
		return;
	}
	const joinCallExpression = contentArray.getElements().find(isJoinCallExpression);
	if (!joinCallExpression) {
		return;
	}
	joinCallExpression.replaceWithText('contentPath(import.meta.url, "svelte")');
	for (const importDeclaration of file.getImportDeclarations()) {
		if (importDeclaration.getModuleSpecifierValue() === '@skeletonlabs/tw-plugin') {
			importDeclaration.setModuleSpecifier('@skeletonlabs/skeleton/plugin');
			importDeclaration.addNamedImport('contentPath');
		}
	}
}

function getThemeName(node: Node) {
	if (Node.isStringLiteral(node)) {
		return THEME_MAPPINGS[node.getLiteralText()] ?? null;
	}
	if (Node.isObjectLiteralExpression(node)) {
		const nameProperty = node.getProperty('name');
		if (!(nameProperty && Node.isPropertyAssignment(nameProperty))) {
			return null;
		}
		const nameValue = nameProperty.getInitializer();
		if (!Node.isStringLiteral(nameValue)) {
			return null;
		}
		return THEME_MAPPINGS[nameValue.getLiteralText()] ?? null;
	}
	return null;
}

function extractPresetThemes(node: ObjectLiteralExpression) {
	const presetThemesProperty = node.getProperty('preset');
	if (!(presetThemesProperty && Node.isPropertyAssignment(presetThemesProperty))) {
		return [];
	}
	const presetThemesArray = presetThemesProperty.getInitializer();
	if (!(presetThemesArray && Node.isArrayLiteralExpression(presetThemesArray))) {
		return [];
	}
	return presetThemesArray
		.getElements()
		.map((node) => {
			const themeName = getThemeName(node);
			if (!themeName) {
				return null;
			}
			return `themes.${themeName}`;
		})
		.filter((node) => node !== null);
}

function extractCustomThemes(node: ObjectLiteralExpression) {
	const customThemesProperty = node.getProperty('custom');
	if (!(customThemesProperty && Node.isPropertyAssignment(customThemesProperty))) {
		return [];
	}
	const customThemeArray = customThemesProperty.getInitializer();
	if (!(customThemeArray && Node.isArrayLiteralExpression(customThemeArray))) {
		return [];
	}
	const themes = customThemeArray
		.getElements()
		.map((node) => {
			if (!Node.isIdentifier(node)) {
				return null;
			}
			return `/* ${node.getFullText()} */`;
		})
		.filter((node) => node !== null);
	if (themes.length > 0) {
		themes.push('themes.cerberus');
	}
	return themes;
}

function transformSkeletonThemesOption(file: SourceFile) {
	const defaultExportObject = getDefaultExportObject(file);
	if (!defaultExportObject) {
		return;
	}
	const pluginsProperty = defaultExportObject.getProperty('plugins');
	if (!(pluginsProperty && Node.isPropertyAssignment(pluginsProperty))) {
		return;
	}
	const pluginsArray = pluginsProperty.getInitializer();
	if (!(pluginsArray && Node.isArrayLiteralExpression(pluginsArray))) {
		return;
	}
	const skeletonPluginCallExpression = pluginsArray.getElements().find(isSkeletonPluginCallExpression);
	if (!skeletonPluginCallExpression) {
		return;
	}
	const skeletonConfigObject = skeletonPluginCallExpression.getArguments().at(0);
	if (!(skeletonConfigObject && Node.isObjectLiteralExpression(skeletonConfigObject))) {
		return;
	}
	const themesProperty = skeletonConfigObject.getProperty('themes');
	if (!(themesProperty && Node.isPropertyAssignment(themesProperty))) {
		return;
	}
	const themesObject = themesProperty.getInitializer();
	if (!(themesObject && Node.isObjectLiteralExpression(themesObject))) {
		return;
	}
	const presetThemes = extractPresetThemes(themesObject);
	const customThemes = extractCustomThemes(themesObject);
	if (customThemes.length > 0) {
		file.insertStatements(
			0,
			`/**
 * SKELETON MIGRATION NOTICE
 *
 * Custom themes were detected and commented out due to them not being compatible with the V3 theme format.
 * See https://github.com/skeletonlabs/skeleton/discussions/2921 for info on how to migrate these yourself.
 */`
		);
	}
	const themes = [...new Set([...presetThemes, ...customThemes])];
	if (themes.some((theme) => theme.startsWith('themes.'))) {
		file.addImportDeclaration({
			moduleSpecifier: '@skeletonlabs/skeleton/themes',
			namespaceImport: 'themes'
		});
	}
	themesProperty.setInitializer(`[${themes.join(', ')}]`);
}

function transformTailwindConfigContent(code: string) {
	const file = createSourceFile(code);
	transformTailwindContentOption(file);
	transformSkeletonThemesOption(file);
	return file.getFullText();
}

async function transformTailwindConfig(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformTailwindConfigContent(code);
	await writeFile(path, transformed);
}

export { transformTailwindConfigContent, transformTailwindConfig };
