import { readFile, writeFile } from 'node:fs/promises';
import jscs from 'jscodeshift';
import { THEMES } from '../../../../internal/mappers/themes';

function transformContentPath(root: jscs.Collection) {
	root
		.find(jscs.ImportDeclaration, {
			source: {
				value: '@skeletonlabs/tw-plugin'
			}
		})
		.forEach((path) => {
			const specifiers = path.node.specifiers ?? [];
			const hasSkeletonImport = specifiers.some((specifier) => specifier.local?.name === 'skeleton');
			const updatedSpecifiers = [...specifiers, jscs.importSpecifier(jscs.identifier('contentPath'))];
			jscs(path).replaceWith(
				jscs.importDeclaration(hasSkeletonImport ? updatedSpecifiers : specifiers, jscs.literal('@skeletonlabs/skeleton/plugin'))
			);
		});
	root
		.find(jscs.CallExpression, {
			callee: {
				type: 'Identifier',
				name: 'join'
			},
			arguments: [
				{
					type: 'CallExpression',
					callee: {
						type: 'MemberExpression',
						object: { type: 'Identifier', name: 'require' },
						property: { type: 'Identifier', name: 'resolve' }
					},
					arguments: [
						{
							type: 'Literal',
							value: '@skeletonlabs/skeleton'
						}
					]
				},
				{
					type: 'Literal',
					value: '../**/*.{html,js,svelte,ts}'
				}
			]
		})
		.replaceWith(jscs.callExpression(jscs.identifier('contentPath'), [jscs.identifier('import.meta.url'), jscs.literal('svelte')]));
}

function transformSkeletonConfig(root: jscs.Collection) {
	root
		.find(jscs.CallExpression, {
			callee: {
				type: 'Identifier',
				name: 'skeleton'
			}
		})
		.find(jscs.ObjectExpression, {
			properties: [
				{
					key: {
						type: 'Identifier',
						name: 'themes'
					},
					value: {
						type: 'ObjectExpression'
					}
				}
			]
		})
		.find(jscs.Property, {
			key: {
				type: 'Identifier',
				name: 'themes'
			}
		})
		.find(jscs.Property, {
			key: {
				type: 'Identifier',
				name: 'preset'
			}
		})
		.forEach((path) => {
			const importStatements = root.find(jscs.ImportDeclaration);
			const hasThemesImport = importStatements.some((path) => path.node.source.value === '@skeletonlabs/skeleton/themes');
			if (!hasThemesImport) {
				importStatements
					.at(0)
					.insertAfter(
						jscs.importDeclaration(
							[jscs.importNamespaceSpecifier(jscs.identifier('themes'))],
							jscs.literal('@skeletonlabs/skeleton/themes')
						)
					);
			}
		});
}

function transformTailwindConfigContent(code: string) {
	const root = jscs(code);
	transformContentPath(root);
	transformSkeletonConfig(root);
	return root.toSource();
}

async function transformTailwindConfig(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformTailwindConfigContent(code);
	await writeFile(path, transformed);
}

export { transformTailwindConfigContent, transformTailwindConfig };
