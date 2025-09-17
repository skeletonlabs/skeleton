import { globSync } from 'node:fs';
import { dirname, relative, sep } from 'node:path';

function kebabToPascalCase(str: string) {
	return str
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

const components = globSync('./**/components/*/+page.svelte').map((route) => {
	const href = '/' + relative('src/routes', dirname(route)).split(sep).join('/');
	const name = kebabToPascalCase(href.split('/').pop()!);
	return { href, name };
});

export function load() {
	return {
		components,
	};
}
