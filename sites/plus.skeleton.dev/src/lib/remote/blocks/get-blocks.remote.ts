import { query } from '$app/server';
import { type BlockCategory, blockCategoriesFree, blockCategoriesPremium, blockDetailsFree, blockDetailsPremium } from './data';

export type { Category, BlockCategory, Block } from './data';

export interface Framework {
	key: string;
	label: string;
}

const frameworkList: Framework[] = [
	{ key: 'react', label: 'React' },
	{ key: 'svelte', label: 'Svelte' },
	{ key: 'vue', label: 'Vue' },
	{ key: 'solid', label: 'Solid.js' },
	{ key: 'astro', label: 'Astro' },
];

/** Get all supported frameworks */
export const getFrameworks = query(async (): Promise<Framework[]> => {
	return frameworkList;
});

/** Get all block categories */
export const getBlocks = query(async () => {
	const result: Record<string, BlockCategory[]> = {};
	const allKeys = new Set([...Object.keys(blockCategoriesFree), ...Object.keys(blockCategoriesPremium)]);
	for (const key of allKeys) {
		const map = new Map<string, BlockCategory>();
		for (const cat of blockCategoriesFree[key] ?? []) map.set(cat.name, { ...cat });
		for (const cat of blockCategoriesPremium[key] ?? []) {
			const existing = map.get(cat.name);
			if (existing) {
				existing.react += cat.react;
				existing.svelte += cat.svelte;
			} else {
				map.set(cat.name, { ...cat });
			}
		}
		result[key] = Array.from(map.values());
	}
	return result;
});

/** Get single block details */
export const getBlockBySlug = query(async () => {
	return {
		...blockDetailsFree,
		examples: {
			react: [
				...blockDetailsFree.examples.react.map((block) => ({ ...block, isPremium: false })),
				...blockDetailsPremium.examples.react.map((block) => ({ ...block, isPremium: true })),
			],
			svelte: [
				...blockDetailsFree.examples.svelte.map((block) => ({ ...block, isPremium: false })),
				...blockDetailsPremium.examples.svelte.map((block) => ({ ...block, isPremium: true })),
			],
		},
	};
});
