import { REMOVED_TOKENS, TOKEN_MAPPINGS } from '../utility/token-mappings.js';
import { log } from '@clack/prompts';
import { parse } from 'postcss';

function renameTokens(content: string) {
	return Object.entries(TOKEN_MAPPINGS).reduce((result, [from, to]) => {
		// The `(?![-\w])` right-boundary stops a token from matching inside a longer variant
		// (e.g. `--base-font-color` inside `--base-font-color-dark`), so map order is irrelevant.
		return result.replace(new RegExp(`${from}(?![-\\w])`, 'g'), to);
	}, content);
}

export function transformStylesheet(content: string) {
	// Renames are pure string replacements and don't require parseable CSS, so apply them first.
	const renamed = renameTokens(content);
	try {
		const ast = parse(renamed);
		ast.walkDecls((decl) => {
			if (REMOVED_TOKENS.includes(decl.prop)) {
				decl.remove();
			}
		});
		return {
			code: ast.toString(),
		};
	} catch (error) {
		log.warn(`Failed to parse CSS, skipping removals: ${error instanceof Error ? error.message : 'Unknown error'}`);
		return {
			code: renamed,
		};
	}
}
