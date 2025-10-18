import type { AstroCookies } from 'astro';
import { getCollection, getEntry } from 'astro:content';

const frameworks = await getCollection('frameworks');

const DEFAULT_FRAMEWORK = frameworks.at(0)!;

export async function getActiveFramework(cookies: AstroCookies) {
	const frameworkCookie = cookies.get('framework');
	if (!frameworkCookie) {
		return DEFAULT_FRAMEWORK;
	}
	const framework = await getEntry('frameworks', frameworkCookie.value);
	if (!framework) {
		return DEFAULT_FRAMEWORK;
	}
	return framework;
}
