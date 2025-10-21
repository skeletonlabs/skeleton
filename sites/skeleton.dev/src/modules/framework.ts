import type { AstroGlobal } from 'astro';
import { getEntry } from 'astro:content';

export async function getActiveFramework(Astro: AstroGlobal) {
	if (!Astro.params.framework) {
		return await getDefaultFramework();
	}
	const framework = await getEntry('frameworks', Astro.params.framework);
	if (!framework) {
		return await getDefaultFramework();
	}
	return framework;
}

export async function getDefaultFramework() {
	const framework = await getEntry('frameworks', 'svelte');
	if (!framework) {
		throw new Error('Default framework "svelte" not found in content collection "frameworks".');
	}
	return framework;
}
