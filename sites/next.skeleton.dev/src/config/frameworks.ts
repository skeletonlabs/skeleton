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

export function getFrameWorkFromSlug(slug: unknown) {
	return frameworks.find((framework) => framework.slug === slug);
}

export function isFramework(value: unknown): value is (typeof frameworks)[number] {
	return frameworks.some((framework) => framework.slug === value);
}
