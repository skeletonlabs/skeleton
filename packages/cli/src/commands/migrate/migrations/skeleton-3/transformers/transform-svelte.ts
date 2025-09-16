import { EXPORT_MAPPINGS } from '../utility/export-mappings';
import { transformClasses } from './transform-classes';
import { transformModule } from './transform-module';
import { transformStyleSheet } from './transform-stylesheet';
import type { Node } from 'estree';
import MagicString from 'magic-string';
import { parse } from 'svelte/compiler';
import type { AST } from 'svelte/compiler';
import { walk } from 'zimmerframe';

function renameComponent(s: MagicString, node: AST.Component, name: string) {
	const adjustedStart = node.start + 1;
	s.update(adjustedStart, adjustedStart + node.name.length, name);
	const componentString = s.original.slice(node.start, node.end);
	const indexOfNonSelfClosingTag = componentString.lastIndexOf('</');
	if (indexOfNonSelfClosingTag === -1 || node.start + indexOfNonSelfClosingTag > node.end) {
		return;
	}
	s.update(node.start + indexOfNonSelfClosingTag + 2, node.start + indexOfNonSelfClosingTag + 2 + node.name.length, name);
}

function transformScript(s: MagicString, script: AST.Script | null) {
	if (
		!script ||
		!(
			'start' in script.content &&
			typeof script.content.start === 'number' &&
			'end' in script.content &&
			typeof script.content.end === 'number'
		)
	) {
		return {
			meta: {
				skeletonImports: [],
			},
		};
	}
	const content = s.original.slice(script.content.start, script.content.end);
	const transformed = transformModule(content);
	s.overwrite(script.content.start, script.content.end, transformed.code);
	return {
		meta: transformed.meta,
	};
}

function transformCss(s: MagicString, css: AST.CSS.StyleSheet | null) {
	if (!css) {
		return;
	}
	const transformed = transformStyleSheet(s.original.slice(css.content.start, css.content.end));
	s.overwrite(css.content.start, css.content.end, transformed.code);
}

function hasRange(node: Node | AST.SvelteNode): node is (Node | AST.SvelteNode) & { start: number; end: number } {
	return 'start' in node && 'end' in node && typeof node.start === 'number' && typeof node.end === 'number';
}

function transformFragment(s: MagicString, fragment: AST.Fragment, skeletonImports: string[]) {
	walk(
		fragment as AST.SvelteNode,
		{},
		{
			Literal(node, ctx) {
				const parent = ctx.path.at(-1);
				if (typeof node.raw === 'string' && node.raw !== '' && !(parent && parent.type === 'ImportDeclaration') && hasRange(node)) {
					s.update(node.start, node.end, transformClasses(node.raw).code);
				}
				ctx.next();
			},
			Text(node, ctx) {
				if (node.data !== '' && hasRange(node)) {
					s.update(node.start, node.end, transformClasses(node.data).code);
				}
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
			},
			Component(node, ctx) {
				if (Object.hasOwn(EXPORT_MAPPINGS, node.name) && skeletonImports.includes(node.name)) {
					const exportMapping = EXPORT_MAPPINGS[node.name];
					if (exportMapping?.identifier.type === 'renamed' && hasRange(node)) {
						renameComponent(s, node, exportMapping.identifier.value);
					}
				}
				ctx.next();
			},
		},
	);
	return {
		code: s.toString(),
	};
}

function transformSvelte(code: string) {
	const s = new MagicString(code);
	const root = parse(code, {
		modern: true,
	});
	const skeletonImports = [
		...transformScript(s, root.module).meta.skeletonImports,
		...transformScript(s, root.instance).meta.skeletonImports,
	];
	transformFragment(s, root.fragment, skeletonImports);
	transformCss(s, root.css);
	return {
		code: s.toString(),
	};
}

export { transformSvelte };
