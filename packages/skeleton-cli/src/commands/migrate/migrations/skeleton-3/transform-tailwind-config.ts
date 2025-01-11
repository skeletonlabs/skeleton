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
		.replaceWith(
			jscs.importDeclaration(
				[jscs.importSpecifier(jscs.identifier('skeleton')), jscs.importSpecifier(jscs.identifier('contentPath'))],
				jscs.literal('@skeletonlabs/skeleton/plugin')
			)
		);
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

function extractPresetThemes(path: jscs.ASTPath<jscs.ObjectExpression>) {
	const property = path.node.properties.find((property) => {
		return property.type === 'Property' && property.key.type === 'Identifier' && property.key.name === 'preset';
	}) as jscs.Property | undefined;
	if (!(property && property.value.type === 'ArrayExpression')) {
		return [];
	}
	return property.value.elements
		.map((element) => {
			let name: string | null = null;
			switch (element?.type) {
				case 'Literal': {
					name = String(element.value);
					break;
				}
				case 'ObjectExpression': {
					const property = element.properties.find((property) => {
						return (
							property.type === 'Property' &&
							property.key.type === 'Identifier' &&
							property.key.name === 'name' &&
							property.value.type === 'Literal'
						);
					}) as jscs.Property | undefined;
					if (!(property && property.value.type === 'Literal')) {
						break;
					}
					name = String(property.value.value);
					break;
				}
			}
			const theme = THEMES.find((theme) => theme.v2 === name);
			if (!theme) {
				return null;
			}
			return jscs.identifier(`themes.${theme.v3}`);
		})
		.filter((item) => item !== null);
}

function extractCustomThemes(path: jscs.ASTPath<jscs.ObjectExpression>) {
	const property = path.node.properties.find((property) => {
		return property.type === 'Property' && property.key.type === 'Identifier' && property.key.name === 'custom';
	}) as jscs.Property | undefined;
	if (!(property && property.value.type === 'ArrayExpression')) {
		return [];
	}
	return property.value.elements
		.map((element) => {
			if (!(element && element.type === 'Identifier')) {
				return null;
			}
			return jscs.identifier(`/* Unable to migrate "${element.name}" */`);
		})
		.filter((item) => item !== null);
}

function transformSkeletonConfig(root: jscs.Collection) {
	root
		.find(jscs.CallExpression, {
			callee: {
				type: 'Identifier',
				name: 'skeleton'
			}
		})
		.find(jscs.ObjectExpression, (path) => {
			return path.properties.some(
				(property) => property.type === 'Property' && property.key.type === 'Identifier' && property.key.name === 'themes'
			);
		})
		.find(jscs.ObjectExpression, (path) => {
			return path.properties.some(
				(property) => property.type === 'Property' && property.key.type === 'Identifier' && ['preset', 'custom'].includes(property.key.name)
			);
		})
		.replaceWith((path) => {
			const presetThemes = extractPresetThemes(path);
			if (presetThemes.length > 0) {
				root
					.find(jscs.ImportDeclaration)
					.at(-1)
					.insertAfter(
						jscs.importDeclaration(
							[jscs.importNamespaceSpecifier(jscs.identifier('themes'))],
							jscs.literal('@skeletonlabs/skeleton/themes')
						)
					);
			}
			const customThemes = extractCustomThemes(path);
			return jscs.arrayExpression([...presetThemes, ...customThemes]);
		});
}

function transformTailwindConfigContent(code: string) {
	const root = jscs(code);
	transformContentPath(root);
	transformSkeletonConfig(root);
	return root.toSource({
		lineTerminator: '\n'
	});
}

async function transformTailwindConfig(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformTailwindConfigContent(code);
	await writeFile(path, transformed);
}

export { transformTailwindConfigContent, transformTailwindConfig };
