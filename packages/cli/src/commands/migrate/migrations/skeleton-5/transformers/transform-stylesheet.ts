import { THEME_VARIANT_STEP, type ManualStep } from '../utility/manual-steps.js';
import { ADDED_TOKENS, REMOVED_TOKENS, TOKEN_MAPPINGS } from '../utility/token-mappings.js';
import { transformClasses } from './transform-classes.js';
import { log } from '@clack/prompts';
import { parse } from 'postcss';
import type { Rule } from 'postcss';

function renameTokens(content: string) {
	return Object.entries(TOKEN_MAPPINGS).reduce((result, [from, to]) => {
		// The `(?![-\w])` right-boundary prevents matching inside longer token names
		return result.replace(new RegExp(`${from}(?![-\\w])`, 'g'), to);
	}, content);
}

// Append the new v5 tokens to theme blocks (identified by an existing `--typo-*` token)
function addTokens(rule: Rule) {
	const existing = new Set<string>();
	let isThemeBlock = false;
	rule.each((node) => {
		if (node.type === 'decl') {
			existing.add(node.prop);
			if (node.prop.startsWith('--typo-')) {
				isThemeBlock = true;
			}
		}
	});
	if (!isThemeBlock) {
		return;
	}
	for (const [prop, value] of Object.entries(ADDED_TOKENS)) {
		if (!existing.has(prop)) {
			rule.append({ prop, value });
		}
	}
}

export function transformStylesheet(content: string, options: { addMissingTokens?: boolean } = {}) {
	const { addMissingTokens = true } = options;
	const manual: ManualStep[] = [];
	const renamed = renameTokens(content);
	try {
		const ast = parse(renamed);
		ast.walkDecls((decl) => {
			if (REMOVED_TOKENS.includes(decl.prop)) {
				decl.remove();
			}
		});
		if (addMissingTokens) {
			ast.walkRules(addTokens);
		}
		ast.walkAtRules('apply', (atRule) => {
			const { code, meta } = transformClasses(atRule.params);
			atRule.params = code;
			manual.push(...meta.manual);
		});
		// `@variant theme-[name]` was removed in v5, flag it as a manual step
		ast.walkAtRules('variant', (atRule) => {
			if (/^theme-[\w-]+/.test(atRule.params)) {
				manual.push({ ...THEME_VARIANT_STEP, match: `@variant ${atRule.params}` });
			}
		});
		return {
			code: ast.toString(),
			meta: { manual },
		};
	} catch (error) {
		log.warn(`Failed to parse CSS, skipping removals: ${error instanceof Error ? error.message : 'Unknown error'}`);
		return {
			code: renamed,
			meta: { manual },
		};
	}
}
