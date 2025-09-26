import { parse } from 'postcss';

function transformEntryStylesheet(code: string) {
	const parsed = parse(code);

	parsed.walkAtRules('source', (rule) => {
		console.log(rule);
	});
}

export { transformEntryStylesheet };
