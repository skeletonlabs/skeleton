import type { AstroGlobal } from 'astro';
import { getEntry } from 'astro:content';

export function getFrameworkIdFromUrl(Astro: AstroGlobal) {
	return Astro.params.framework;
}

export async function getActiveFramework(Astro: AstroGlobal) {
	const frameworkId = getFrameworkIdFromUrl(Astro);
	if (!frameworkId) {
		return await getDefaultFramework();
	}
	const framework = await getEntry('frameworks', frameworkId);
	if (!framework) {
		return await getDefaultFramework();
	}
	return framework;
}

async function getDefaultFramework() {
	const framework = await getEntry('frameworks', 'svelte');
	if (!framework) {
		throw new Error('Default framework "svelte" not found in content collection "frameworks".');
	}
	return framework;
}
