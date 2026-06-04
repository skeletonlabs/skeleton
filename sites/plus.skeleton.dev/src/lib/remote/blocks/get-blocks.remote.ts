import { query } from '$app/server';
import { type BlockCategory, blockDetailsFree, blockDetailsPremium } from './data';

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

// Glob Imports ---

const freeMetaModules = import.meta.glob('../../content/free/blocks/**/meta.json', { eager: true });
const freeReactFiles = import.meta.glob('../../content/free/blocks/**/react/*.tsx');
const freeSvelteFiles = import.meta.glob('../../content/free/blocks/**/svelte/*.svelte');
const premiumMetaModules = import.meta.glob('../../content/premium/blocks/**/meta.json', { eager: true });
const premiumReactFiles = import.meta.glob('../../content/premium/blocks/**/react/*.tsx');
const premiumSvelteFiles = import.meta.glob('../../content/premium/blocks/**/svelte/*.svelte');

// Helpers ---

function parseCategoryAndName(path: string): { category: string; name: string } | null {
	const afterBlocks = path.split('/blocks/')[1];
	if (!afterBlocks) return null;
	const parts = afterBlocks.split('/');
	if (parts.length < 2) return null;
	return { category: parts[0], name: parts[1] };
}

function buildBlockCategories(
	metaModules: Record<string, unknown>,
	reactFiles: Record<string, unknown>,
	svelteFiles: Record<string, unknown>,
): Record<string, BlockCategory[]> {
	const result: Record<string, Map<string, BlockCategory>> = {};

	for (const [path, mod] of Object.entries(metaModules)) {
		const parsed = parseCategoryAndName(path);
		if (!parsed) continue;
		const { category, name } = parsed;
		result[category] ??= new Map();
		const meta = (mod as { default: { description: string; iconName: string } }).default;
		result[category].set(name, { name, meta, react: 0, svelte: 0 });
	}

	for (const [files, field] of [
		[reactFiles, 'react'],
		[svelteFiles, 'svelte'],
	] as const) {
		for (const path of Object.keys(files)) {
			const parsed = parseCategoryAndName(path);
			if (!parsed) continue;
			const { category, name } = parsed;
			result[category] ??= new Map();
			const entry = result[category].get(name) ?? { name, meta: { description: '', iconName: '' }, react: 0, svelte: 0 };
			entry[field]++;
			result[category].set(name, entry);
		}
	}

	return Object.fromEntries(Object.entries(result).map(([cat, map]) => [cat, Array.from(map.values())]));
}

// Data Functions ---

/** Get all supported frameworks */
export const getFrameworks = query(async (): Promise<Framework[]> => {
	return frameworkList;
});

/** Get all block categories */
export const getBlocks = query(async () => {
	const blockCategoriesFree = buildBlockCategories(freeMetaModules, freeReactFiles, freeSvelteFiles);
	const blockCategoriesPremium = buildBlockCategories(premiumMetaModules, premiumReactFiles, premiumSvelteFiles);
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
