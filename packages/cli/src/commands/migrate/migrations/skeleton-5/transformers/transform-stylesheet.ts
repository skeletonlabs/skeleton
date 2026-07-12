import { THEME_VARIANT_STEP, type ManualStep } from '../utility/manual-steps.js';
import { ADDED_TOKENS, REMOVED_TOKENS, TOKEN_MAPPINGS } from '../utility/token-mappings.js';
import { transformClasses } from './transform-classes.js';
import { log } from '@clack/prompts';
import { parse } from 'postcss';
import type { Rule } from 'postcss';

function renameTokens(content: string) {
	return Object.entries(TOKEN_MAPPINGS).reduce((result, [from, to]) => {
		// The `(?![-\w])` right-boundary stops a token from matching inside a longer variant
		// (e.g. `--base-font-color` inside `--base-font-color-dark`), so map order is irrelevant.
		return result.replace(new RegExp(`${from}(?![-\\w])`, 'g'), to);
	}, content);
}

/**
 * Appends the v5-only tokens to a theme's token block. A block qualifies if it already declares a
 * typography token (`--typo-*`), which reliably marks a Skeleton theme's `:root` / `[data-theme]`
 * rule and excludes unrelated `:root` overrides in app stylesheets. Only missing keys are added, so
 * re-runs and already-v5 themes are left untouched.
 */
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
	// The "add" step is a theme-*file* migration concern, so it defaults on for standalone
	// stylesheets but is disabled for Svelte `<style>` blocks (which typically override a few
	// tokens rather than define a whole theme — see transform-svelte.ts).
	const { addMissingTokens = true } = options;
	const manual: ManualStep[] = [];
	// Renames are pure string replacements and don't require parseable CSS, so apply them first.
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
		// `@variant theme-[name]` was removed from the Core API; flag it for manual handling.
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
