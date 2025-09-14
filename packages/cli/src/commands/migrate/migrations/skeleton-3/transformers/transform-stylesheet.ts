import { parse } from 'postcss';
import { transformClasses } from './transform-classes';

function transformStyleSheet(code: string) {
	const parsed = parse(code);
	parsed.walkAtRules('apply', (atRule) => {
		atRule.params = transformClasses(atRule.params).code;
	});

	return {
		code: parsed.toString(),
	};
}

export { transformStyleSheet };
