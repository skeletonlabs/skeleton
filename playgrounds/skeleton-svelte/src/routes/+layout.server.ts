import { globSync } from 'node:fs';
import { dirname, relative, sep } from 'node:path';

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const components = globSync('./**/components/*/+page.svelte')
	.toSorted((a, b) => a.localeCompare(b))
	.map((route) => {
		const href = '/' + relative('src/routes', dirname(route)).split(sep).join('/');
		const name = href.split('/').pop()!.split('-').map(capitalize).join(' ');
		return { href, name };
	});

export function load() {
	return {
		components,
	};
}
