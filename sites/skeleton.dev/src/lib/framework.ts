import React from '@/images/brand/react.svg';
import Svelte from '@/images/brand/svelte.svg';
import { persistentAtom } from '@nanostores/persistent';

export type Framework = (typeof frameworks)[number]['slug'];

export const frameworks = [
	{
		name: 'React',
		slug: 'react',
		Icon: React,
	},
	{
		name: 'Svelte',
		slug: 'svelte',
		Icon: Svelte,
	},
] as const;

export const framework = persistentAtom<Framework>('framework', frameworks[0].slug);

export function isFramework(framework: unknown): framework is Framework {
	return frameworks.some((f) => f.slug === framework);
}
