export type Framework = (typeof frameworks)[number]['slug'];

export const frameworks = [
	{
		name: 'React',
		slug: 'react',
		iconName: 'react',
	},
	{
		name: 'Svelte',
		slug: 'svelte',
		iconName: 'svelte',
	},
] as const;

export const DEFAULT_FRAMEWORK = frameworks[0].slug;

export function isFramework(framework: string): framework is Framework {
	return frameworks.some((f) => f.slug === framework);
}

const FRAMEWORK_KEY = 'framework';

export function setPreferredFramework(framework: Framework) {
	if (typeof window === 'undefined') {
		return false;
	}
	if (!isFramework(framework)) {
		return false;
	}
	localStorage.setItem(FRAMEWORK_KEY, framework);
	return true;
}

export function getPreferredFramework() {
	if (typeof window === 'undefined') {
		return DEFAULT_FRAMEWORK;
	}
	const framework = localStorage.getItem(FRAMEWORK_KEY);
	if (framework === null) {
		return DEFAULT_FRAMEWORK;
	}
	if (!isFramework(framework)) {
		return DEFAULT_FRAMEWORK;
	}
	return framework;
}
