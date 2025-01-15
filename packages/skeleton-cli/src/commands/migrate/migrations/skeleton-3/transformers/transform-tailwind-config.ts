import { CallExpression, Node, ObjectLiteralExpression, SourceFile } from 'ts-morph';
import { THEME_MAPPINGS } from '../utility/theme-mappings';
import { FALLBACK_THEME } from '../utility/constants';
import {addNamedImport} from "../../../../../utility/ts-morph/add-named-import";
import {getDefaultExportObject} from "../../../../../utility/ts-morph/get-default-export-object";
import {parseSourceFile} from "../../../../../utility/ts-morph/parse-source-file";

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
	file.getImportDeclaration('@skeletonlabs/tw-plugin')?.remove();
	addNamedImport(file, '@skeletonlabs/skeleton/plugin', 'contentPath');
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
	const themes = new Set<string>();
	const presetThemesProperty = node.getProperty('preset');
	if (!(presetThemesProperty && Node.isPropertyAssignment(presetThemesProperty))) {
		return themes;
	}
	const presetThemesArray = presetThemesProperty.getInitializer();
	if (!(presetThemesArray && Node.isArrayLiteralExpression(presetThemesArray))) {
		return themes;
	}
	for (const element of presetThemesArray.getElements()) {
		const themeName = getThemeName(element);
		if (themeName) {
			themes.add(themeName);
		}
	}
	return themes;
}

function extractCustomThemes(node: ObjectLiteralExpression) {
	const themes = new Set<string>();
	const customThemesProperty = node.getProperty('custom');
	if (!(customThemesProperty && Node.isPropertyAssignment(customThemesProperty))) {
		return themes;
	}
	const customThemeArray = customThemesProperty.getInitializer();
	if (!(customThemeArray && Node.isArrayLiteralExpression(customThemeArray))) {
		return themes;
	}
	for (const element of customThemeArray.getElements()) {
		if (!Node.isIdentifier(element)) {
			continue;
		}
		themes.add(element.getText());
	}
	return themes;
}

function transformSkeletonThemesOption(file: SourceFile) {
	const defaultExportObject = getDefaultExportObject(file);
	if (!defaultExportObject) {
		return {
			preset: [],
			custom: []
		};
	}
	const pluginsProperty = defaultExportObject.getProperty('plugins');
	if (!(pluginsProperty && Node.isPropertyAssignment(pluginsProperty))) {
		return {
			preset: [],
			custom: []
		};
	}
	const pluginsArray = pluginsProperty.getInitializer();
	if (!(pluginsArray && Node.isArrayLiteralExpression(pluginsArray))) {
		return {
			preset: [],
			custom: []
		};
	}
	const skeletonPluginCallExpression = pluginsArray.getElements().find(isSkeletonPluginCallExpression);
	if (!skeletonPluginCallExpression) {
		return {
			preset: [],
			custom: []
		};
	}
	file.getImportDeclaration('@skeletonlabs/tw-plugin')?.remove();
	addNamedImport(file, '@skeletonlabs/skeleton/plugin', 'skeleton');
	const skeletonConfigObject = skeletonPluginCallExpression.getArguments().at(0);
	if (!(skeletonConfigObject && Node.isObjectLiteralExpression(skeletonConfigObject))) {
		return {
			preset: [],
			custom: []
		};
	}
	const themesProperty = skeletonConfigObject.getProperty('themes');
	if (!(themesProperty && Node.isPropertyAssignment(themesProperty))) {
		return {
			preset: [],
			custom: []
		};
	}
	const themesObject = themesProperty.getInitializer();
	if (!(themesObject && Node.isObjectLiteralExpression(themesObject))) {
		return {
			preset: [],
			custom: []
		};
	}
	const presetThemes = extractPresetThemes(themesObject);
	const customThemes = extractCustomThemes(themesObject);
	if (presetThemes.size > 0 || customThemes.size > 0) {
		file.addImportDeclaration({
			moduleSpecifier: '@skeletonlabs/skeleton/themes',
			namespaceImport: 'themes'
		});
	}
	if (customThemes.size > 0) {
		file.insertStatements(
			0,
			`/**
 * SKELETON MIGRATION NOTICE
 *
 * The following custom themes were detected and commented out due to them not being compatible with the V3 theme format:
 *
${[...customThemes].map((theme) => ` * - ${theme}`).join('\n')}
 *
 * See https://github.com/skeletonlabs/skeleton/discussions/2921 for info on how to migrate these yourself.
 */`
		);
	}
	if (customThemes.size > 0 && presetThemes.size === 0) {
		presetThemes.add(FALLBACK_THEME);
	}
	const presetThemesString = [...presetThemes].map((theme) => `themes.${theme}`).join(', ');
	const customThemesString = customThemes.size > 0 ? `/* ${[...customThemes].join(', ')} */` : null;
	themesProperty.setInitializer(`[${presetThemesString}${customThemesString ? ` ${customThemesString}` : ''}]`);
	return {
		preset: [...presetThemes],
		custom: [...customThemes]
	};
}

function transformTailwindConfig(code: string) {
	const file = parseSourceFile(code);
	transformTailwindContentOption(file);
	const themes = transformSkeletonThemesOption(file);
	file.fixUnusedIdentifiers();
	return {
		code: file.getFullText(),
		meta: {
			themes: themes
		}
	};
}

export { transformTailwindConfig };
