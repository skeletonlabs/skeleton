import { transformClasses } from './transform-classes.js';
import { parse } from 'postcss';
import { log } from '@clack/prompts';

function transformStylesheet(code: string) {
	try {
		const parsed = parse(code);
		parsed.walkAtRules('apply', (atRule) => {
			atRule.params = transformClasses(atRule.params).code;
		});

		return {
			code: parsed.toString(),
		};
	} catch (error) {
		log.warn(`Failed to parse CSS, skipping transformation: ${error instanceof Error ? error.message : 'Unknown error'}`);
		return {
			code,
		};
	}
}

export { transformStylesheet };
