import { parse } from 'postcss';

function transformStyleSheet(code: string) {
	const parsed = parse(code);

	parsed.walkAtRules('source', (rule) => {
		console.log(rule);
	});

	return {
		code: parsed.toString(),
	};
}

export { transformStyleSheet };
