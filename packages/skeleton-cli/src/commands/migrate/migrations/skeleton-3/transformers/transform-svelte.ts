import * as svelte from 'svelte/compiler';
import * as postcss from 'postcss';
import type { Node } from 'estree';
import { walk } from 'zimmerframe';
import MagicString from 'magic-string';
import { transformClasses } from './transform-classes';
import { transformModule } from './transform-module';
import { EXPORT_MAPPINGS } from '../utility/export-mappings';

function renameComponent(s: MagicString, node: svelte.AST.Component, name: string) {
	const adjustedStart = node.start + 1;
	s.update(adjustedStart, adjustedStart + node.name.length, name);
	const componentString = s.original.slice(node.start, node.end);
	const indexOfNonSelfClosingTag = componentString.lastIndexOf('</');
	if (indexOfNonSelfClosingTag === -1 || node.start + indexOfNonSelfClosingTag > node.end) {
		return;
	}
	s.update(node.start + indexOfNonSelfClosingTag + 2, node.start + indexOfNonSelfClosingTag + 2 + node.name.length, name);
}

function transformScript(s: MagicString, script: svelte.AST.Script) {
	const content = s.original.slice(script.start, script.end);
	const openingTag = content.match(/^<script[^>]*>/)?.at(0);
	const closingTag = content.match(/<\/script>$/)?.at(0);
	if (!openingTag || !closingTag) {
		throw new Error('Script tags not found in content');
	}
	const codeContent = content.slice(openingTag.length, content.length - closingTag.length);
	const transformed = transformModule(codeContent);
	if (!transformed.code.trim()) {
		s.overwrite(script.start, script.end, '');
	} else {
		s.overwrite(script.start, script.end, `${openingTag}${transformed.code}${closingTag}`);
	}
	return {
		meta: transformed.meta
	};
}

function hasRange(node: Node | svelte.AST.SvelteNode): node is (Node | svelte.AST.SvelteNode) & { start: number; end: number } {
	return 'start' in node && 'end' in node && typeof node.start === 'number' && typeof node.end === 'number';
}

function transformFragment(s: MagicString, fragment: svelte.AST.Fragment, skeletonImports: string[]) {
	walk(
		fragment as svelte.AST.SvelteNode,
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
					if (exportMapping.identifier.type === 'renamed' && hasRange(node)) {
						renameComponent(s, node, exportMapping.identifier.value);
					}
				}
				ctx.next();
			}
		}
	);
	return {
		code: s.toString()
	};
}

function transformCss(s: MagicString, css: svelte.AST.CSS.StyleSheet) {
	const content = s.original.slice(css.content.start, css.content.end);
	const parsed = postcss.parse(content);
	parsed.walkAtRules((rule) => {
		if (rule.name !== 'apply') {
			return;
		}
		rule.params = transformClasses(rule.params).code;
	});
	s.overwrite(css.content.start, css.content.end, parsed.toString());
}

function transformSvelte(code: string) {
	const s = new MagicString(code);
	const root = svelte.parse(code, {
		modern: true
	});
	let skeletonImports: string[] = [];
	if (root.module) {
		skeletonImports = [...skeletonImports, ...transformScript(s, root.module).meta.skeletonImports];
	}
	if (root.instance) {
		skeletonImports = [...skeletonImports, ...transformScript(s, root.instance).meta.skeletonImports];
	}
	transformFragment(s, root.fragment, skeletonImports);
	if (root.css) {
		transformCss(s, root.css);
	}
	return {
		code: s.toString()
	};
}

export { transformSvelte };
