import { query } from '$app/server';
import { blockCategories, blockDetails } from './data';

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
	return blockCategories;
});

/** Get single block details */
export const getBlockBySlug = query(async () => {
	return blockDetails;
});
