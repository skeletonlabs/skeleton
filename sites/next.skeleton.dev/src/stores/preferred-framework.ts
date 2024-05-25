import { persistentAtom } from '@nanostores/persistent';

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

export const preferredFrameworkStore = persistentAtom<Framework>('preferred-framework', frameworks[0].slug);

export function isFramework(framework: unknown): framework is Framework {
	return frameworks.some((f) => f.slug === framework);
}
