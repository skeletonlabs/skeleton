import type { AstroGlobal } from 'astro';
import { getEntry } from 'astro:content';

const DEFAULT_FRAMEWORK = await getEntry('frameworks', 'svelte');

export async function getActiveFramework(Astro: AstroGlobal) {
	if (!Astro.params.framework) {
		return DEFAULT_FRAMEWORK;
	}
	const framework = await getEntry('frameworks', Astro.params.framework);
	if (!framework) {
		return DEFAULT_FRAMEWORK;
	}
	return framework;
}
