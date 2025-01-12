import { readFile, writeFile } from 'node:fs/promises';
import { parse, print, types, visit } from 'recast';
import { THEMES } from '../../../../internal/mappers/themes';

function transformContent(program: types.namedTypes.Program) {
	visit(program, {
		visitImportDeclaration(path) {
			if (path.node.source.value === 'path') {
				path.prune();
				return false;
			}
			if (path.node.source.value === '@skeletonlabs/tw-plugin') {
				path.replace(
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
			this.traverse(path);
		}
	});
}

function transformSkeletonConfig(program: types.namedTypes.Program) {
	visit(program, {
		visitCallExpression(path) {
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
						const themes = types.builders.arrayExpression([]);
						for (const theme of optionProperty.value.properties) {
							if (
								theme.type === 'Property' &&
								theme.key.type === 'Identifier' &&
								theme.key.name === 'preset' &&
								theme.value.type === 'ArrayExpression' &&
								theme.value.elements.length > 0
							) {
								program.body.unshift(
									types.builders.importDeclaration(
										[types.builders.importNamespaceSpecifier(types.builders.identifier('themes'))],
										types.builders.literal('@skeletonlabs/skeleton/themes')
									)
								);
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
									themes.elements.push(types.builders.identifier(`themes.${theme.v3}`));
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
									if (customTheme.type === 'Identifier') {
										themes.elements.push(types.builders.identifier(`/* ${customTheme.name} */`));
									}
								}
							}
						}
						optionProperty.value = themes;
					}
				}
			}
			this.traverse(path);
		}
	});
}

function transformTailwindConfigContent(code: string) {
	const ast = parse(code);
	transformContent(ast.program);
	transformSkeletonConfig(ast.program);
	return print(ast).code;
}

async function transformTailwindConfig(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformTailwindConfigContent(code);
	await writeFile(path, transformed);
}

export { transformTailwindConfigContent, transformTailwindConfig };
