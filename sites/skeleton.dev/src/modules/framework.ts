import { getCollection } from './content';
import type { AstroGlobal } from 'astro';

const frameworks = await getCollection('frameworks');

function getDefaultFramework() {
	const framework = frameworks.find((framework) => framework.data.default)!;
	if (!framework) {
		throw new Error('No default framework defined in content collection "frameworks". Please set one framework as default.');
	}
	return framework;
}

export function getActiveFrameworkId(Astro: AstroGlobal) {
	return Astro.params.framework ?? getDefaultFramework().id;
}

export function getActiveFramework(Astro: AstroGlobal) {
	const framework = frameworks.find((framework) => framework.id === getActiveFrameworkId(Astro));
	if (!framework) {
		return getDefaultFramework();
	}
	return framework;
}
