import { transformClasses } from './transform-classes.js';
import { parse } from 'postcss';

function transformStylesheet(code: string) {
	const parsed = parse(code);
	parsed.walkAtRules('apply', (atRule) => {
		atRule.params = transformClasses(atRule.params).code;
	});

	return {
		code: parsed.toString(),
	};
}

export { transformStylesheet };
