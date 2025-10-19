import type { AstroGlobal } from 'astro';
import { getCollection, getEntry } from 'astro:content';

const frameworks = await getCollection('frameworks');

const DEFAULT_FRAMEWORK = frameworks.at(0)!;

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
