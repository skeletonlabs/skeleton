import { type AST, parse } from 'svelte/compiler';
import type { Node } from 'estree';
import { walk } from 'zimmerframe';
import MagicString from 'magic-string';
import { transformClasses } from './transform-classes.js';
import { COMPONENT_MAPPINGS } from '../utility/component-mappings';
import { REMOVED_COMPONENTS } from '../utility/removed-components';

function hasRange(node: Node | AST.SvelteNode): node is (Node | AST.SvelteNode) & { start: number; end: number } {
	return 'start' in node && 'end' in node && typeof node.start === 'number' && typeof node.end === 'number';
}

function transformSvelte(code: string) {
	const s = new MagicString(code);
	const root = parse(code, {
		modern: true
	});
	const asts = [root.instance, root.module, root.fragment].filter((node) => !!node);
	for (const ast of asts) {
		walk(
			ast as Node | AST.SvelteNode,
			{},
			{
				ImportDeclaration(node, ctx) {
					if (node.source.type === 'Literal' && node.source.value === '@skeletonlabs/skeleton' && hasRange(node.source)) {
						// Add 1 to the start and subtract 1 from the end to exclude (and thus preserve) the quotes
						s.update(node.source.start + 1, node.source.end - 1, '@skeletonlabs/skeleton-svelte');
					}
					ctx.next();
				},
				Identifier(node, ctx) {
					if (node.name in COMPONENT_MAPPINGS && hasRange(node)) {
						s.update(node.start, node.end, COMPONENT_MAPPINGS[node.name]);
					}
					ctx.next();
				},
				Component(node, ctx) {
					if (node.name in COMPONENT_MAPPINGS && hasRange(node)) {
						// Adjusts for the opening tag (`<`)
						const adjustedStart = node.start + 1;
						s.update(adjustedStart, adjustedStart + node.name.length, COMPONENT_MAPPINGS[node.name]);
					}
					ctx.next();
				},
				ImportSpecifier(node, ctx) {
					if (node.imported.type === 'Identifier') {
						if (node.imported.name in COMPONENT_MAPPINGS && hasRange(node.imported)) {
							s.update(node.imported.start, node.imported.end, COMPONENT_MAPPINGS[node.imported.name]);
						}
						if (REMOVED_COMPONENTS.includes(node.imported.name) && hasRange(node.imported) && hasRange(node)) {
							const parent = ctx.path.at(-1);
							if (parent && parent.type === 'ImportDeclaration' && hasRange(parent)) {
								const hasDefaultImport = parent.specifiers.some((s) => s.type === 'ImportDefaultSpecifier');
								if (parent.specifiers.length === 1) {
									s.remove(parent.start, parent.end);
								} else if (parent.specifiers.length === 2 && hasDefaultImport) {
									// If we're removing the last named import and there's a default import,
									// keep the default import but remove the named import block entirely
									const defaultSpecifier = parent.specifiers.find((s) => s.type === 'ImportDefaultSpecifier');
									const importStart = parent.start;
									const importEnd = parent.end;
									if (defaultSpecifier && hasRange(defaultSpecifier)) {
										s.overwrite(importStart, importEnd, `import ${defaultSpecifier.local.name} from "${parent.source.value}";`);
									}
								} else {
									const specifierIndex = parent.specifiers.findIndex((s) => s === node);
									// Handle the removal of import specifiers while preserving commas
									if (specifierIndex === (hasDefaultImport ? 1 : 0)) {
										// First named specifier (after default import if present)
										const nextSpecifier = parent.specifiers[specifierIndex + 1];
										if (hasRange(nextSpecifier)) {
											s.remove(node.start, nextSpecifier.start);
										}
									} else if (specifierIndex === parent.specifiers.length - 1) {
										// Last specifier
										const previousSpecifier = parent.specifiers[specifierIndex - 1];
										if (hasRange(previousSpecifier)) {
											s.remove(previousSpecifier.end, node.end);
										}
									} else {
										// Middle specifier
										const previousSpecifier = parent.specifiers[specifierIndex - 1];
										const nextSpecifier = parent.specifiers[specifierIndex + 1];
										if (hasRange(previousSpecifier) && hasRange(nextSpecifier)) {
											s.overwrite(
												previousSpecifier.end,
												nextSpecifier.start,
												', ' // Ensure consistent formatting
											);
										}
									}
									// Check if we've removed all named imports and need to clean up the empty brackets
									const remainingNamedImports = parent.specifiers.filter((s) => s.type !== 'ImportDefaultSpecifier').length - 1; // -1 for the one we're removing
									if (remainingNamedImports === 0 && hasDefaultImport && hasRange(parent.source)) {
										// Find the start of the named imports block (after the default import)
										const defaultSpecifier = parent.specifiers.find((s) => s.type === 'ImportDefaultSpecifier');
										if (defaultSpecifier && hasRange(defaultSpecifier)) {
											// Remove everything from after the default import name to before the 'from'
											const fromKeyword = parent.source.start - 6; // 6 = length of ' from '
											s.remove(defaultSpecifier.end, fromKeyword);
										}
									}
								}
							}
						}
					}
					ctx.next();
				},
				Literal(node, ctx) {
					const parent = ctx.path.at(-1);
					if (typeof node.value === 'string' && !(parent && parent.type === 'ImportDeclaration') && hasRange(node)) {
						// Add 1 to the start and subtract 1 from the end to exclude (and thus preserve) the quotes
						s.update(node.start + 1, node.end - 1, transformClasses(node.value).code);
					}
					ctx.next();
				},
				Text(node, ctx) {
					s.update(node.start, node.end, transformClasses(node.data).code);
					ctx.next();
				},
				ClassDirective(node, ctx) {
					if (
						!(node.expression.type === 'Identifier' && !('loc' in node.expression) && node.name === node.expression.name) &&
						hasRange(node)
					) {
						const adjustedStart = node.start + 'class:'.length;
						s.update(adjustedStart, adjustedStart + node.name.length, transformClasses(node.name).code);
					}
					ctx.next();
				}
			}
		);
	}
	return {
		code: s.toString()
	};
}

export { transformSvelte };
