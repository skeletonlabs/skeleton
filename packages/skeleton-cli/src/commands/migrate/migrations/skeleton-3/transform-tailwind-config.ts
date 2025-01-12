import { readFile, writeFile } from 'node:fs/promises';
import { parse, print, types, visit } from 'recast';
import { THEMES } from '../../../../internal/mappers/themes';

const THEMES_IMPORT = types.builders.importDeclaration(
	[types.builders.importNamespaceSpecifier(types.builders.identifier('themes'))],
	types.builders.literal('@skeletonlabs/skeleton/themes')
);

const CUSTOM_THEME_NOTICE_COMMENT = types.builders.commentBlock(`*
 * SKELETON MIGRATION NOTICE
 *
 * Custom themes were detected and commented out due to them not being compatible with the V3 theme format.
 * See https://github.com/skeletonlabs/skeleton/discussions/2921 for info on how to migrate these yourself.
 `);

function transformTailwindConfigContent(code: string) {
	const ast = parse(code);
	const comments: Set<types.namedTypes.Comment> = new Set();
	const imports: Set<types.namedTypes.ImportDeclaration> = new Set();
	visit(ast.program, {
		visitImportDeclaration(path) {
			if (path.node.source.value === 'path') {
				path.prune();
				return false;
			}
			if (path.node.source.value === '@skeletonlabs/tw-plugin') {
				path.prune();
				imports.add(
					types.builders.importDeclaration(
						[
							types.builders.importSpecifier(types.builders.identifier('skeleton')),
							types.builders.importSpecifier(types.builders.identifier('contentPath'))
						],
						types.builders.literal('@skeletonlabs/skeleton/plugin')
					)
				);
				return false;
			}
			this.traverse(path);
		},
		visitCallExpression(path) {
			if (
				path.node.callee.type === 'Identifier' &&
				path.node.callee.name === 'join' &&
				path.node.arguments[0].type === 'CallExpression' &&
				path.node.arguments[0].callee.type === 'MemberExpression' &&
				path.node.arguments[0].callee.object.type === 'Identifier' &&
				path.node.arguments[0].callee.object.name === 'require' &&
				path.node.arguments[0].callee.property.type === 'Identifier' &&
				path.node.arguments[0].callee.property.name === 'resolve' &&
				path.node.arguments[0].arguments[0].type === 'Literal' &&
				path.node.arguments[0].arguments[0].value === '@skeletonlabs/skeleton' &&
				path.node.arguments[1].type === 'Literal' &&
				path.node.arguments[1].value === '../**/*.{html,js,svelte,ts}'
			) {
				path.replace(
					types.builders.callExpression(types.builders.identifier('contentPath'), [
						types.builders.identifier('import.meta.url'),
						types.builders.stringLiteral('svelte')
					])
				);
				return false;
			}
			if (
				path.node.callee.type === 'Identifier' &&
				path.node.callee.name === 'skeleton' &&
				path.node.arguments[0].type === 'ObjectExpression'
			) {
				for (const optionProperty of path.node.arguments[0].properties) {
					if (
						optionProperty.type === 'Property' &&
						optionProperty.key.type === 'Identifier' &&
						optionProperty.key.name === 'themes' &&
						optionProperty.value.type === 'ObjectExpression'
					) {
						const themes: Set<string> = new Set();
						for (const theme of optionProperty.value.properties) {
							if (
								theme.type === 'Property' &&
								theme.key.type === 'Identifier' &&
								theme.key.name === 'preset' &&
								theme.value.type === 'ArrayExpression' &&
								theme.value.elements.length > 0
							) {
								imports.add(THEMES_IMPORT);
								for (const presetTheme of theme.value.elements) {
									if (!presetTheme) {
										continue;
									}
									let name: string | null = null;
									if (presetTheme.type === 'Literal') {
										name = String(presetTheme.value);
									}
									if (presetTheme.type === 'ObjectExpression') {
										for (const presetThemeProperty of presetTheme.properties) {
											if (
												presetThemeProperty.type === 'Property' &&
												presetThemeProperty.key.type === 'Identifier' &&
												presetThemeProperty.key.name === 'name' &&
												presetThemeProperty.value.type === 'Literal'
											) {
												name = String(presetThemeProperty.value.value);
												break;
											}
										}
									}
									if (!name) {
										continue;
									}
									const theme = THEMES.find((theme) => theme.v2 === name);
									if (!theme) {
										return;
									}
									themes.add(`themes.${theme.v3}`);
								}
							}
							if (
								theme.type === 'Property' &&
								theme.key.type === 'Identifier' &&
								theme.key.name === 'custom' &&
								theme.value.type === 'ArrayExpression' &&
								theme.value.elements.length > 0
							) {
								for (const customTheme of theme.value.elements) {
									if (!customTheme) {
										continue;
									}
									if (customTheme.type !== 'Identifier') {
										return;
									}
									themes.add(`/* ${customTheme.name} */`);
									themes.add('themes.cerberus');
									imports.add(THEMES_IMPORT);
									comments.add(CUSTOM_THEME_NOTICE_COMMENT);
								}
							}
						}
						optionProperty.value = types.builders.arrayExpression(
							themes
								.values()
								.map((theme) => types.builders.identifier(theme))
								.toArray()
						);
					}
				}
			}
			this.traverse(path);
		}
	});

	ast.program.comments ||= [];
	ast.program.comments = [...comments, ...ast.program.comments];
	ast.program.body = [...imports, ...ast.program.body];
	return print(ast).code;
}

async function transformTailwindConfig(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformTailwindConfigContent(code);
	await writeFile(path, transformed);
}

export { transformTailwindConfigContent, transformTailwindConfig };
