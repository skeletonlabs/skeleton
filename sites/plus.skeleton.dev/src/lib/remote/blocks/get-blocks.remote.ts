import { query } from '$app/server';
import * as v from 'valibot';

// Types ---

export interface Framework {
	key: string;
	label: string;
}

export interface BlockCategory {
	name: string;
	meta: {
		description: string;
		iconName: string;
	};
	react: number;
	svelte: number;
}

export interface Block {
	title: string;
	code: string;
	lang: string;
	isPremium: boolean;
	path: string;
}

// Glob Imports ---

const freeMetaModules = import.meta.glob('../../content/free/blocks/**/meta.json', { eager: true });
const freeReactModules = import.meta.glob('../../content/free/blocks/**/react/*.tsx');
const freeSvelteModules = import.meta.glob('../../content/free/blocks/**/svelte/*.svelte');
const premiumMetaModules = import.meta.glob('../../content/premium/blocks/**/meta.json', { eager: true });
const premiumReactModules = import.meta.glob('../../content/premium/blocks/**/react/*.tsx');
const premiumSvelteModules = import.meta.glob('../../content/premium/blocks/**/svelte/*.svelte');

const freeReactSources = import.meta.glob('../../content/free/blocks/**/react/*.tsx', { query: '?raw', import: 'default' });
const freeSvelteSources = import.meta.glob('../../content/free/blocks/**/svelte/*.svelte', { query: '?raw', import: 'default' });
const premiumReactSources = import.meta.glob('../../content/premium/blocks/**/react/*.tsx', { query: '?raw', import: 'default' });
const premiumSvelteSources = import.meta.glob('../../content/premium/blocks/**/svelte/*.svelte', { query: '?raw', import: 'default' });

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
	reactModules: Record<string, unknown>,
	svelteModules: Record<string, unknown>,
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
		[reactModules, 'react'],
		[svelteModules, 'svelte'],
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

async function buildBlockExamples(
	category: string,
	name: string,
	sources: Record<string, () => Promise<unknown>>,
	lang: string,
	isPremium: boolean,
): Promise<Block[]> {
	const prefix = `/blocks/${category}/${name}/`;
	const paths = Object.keys(sources)
		.filter((p) => p.includes(prefix))
		.sort();
	return Promise.all(
		paths.map(async (path) => {
			const code = (await sources[path]()) as string;
			const filename = path.split('/').pop()!;
			const title = filename
				.replace(/\.\w+$/, '')
				.replace(/^\d+-/, '')
				.replace(/-/g, ' ')
				.replace(/\b\w/g, (c) => c.toUpperCase());
			return { title, code, lang, isPremium, path };
		}),
	);
}

// Data Functions ---

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
	const blockCategoriesFree = buildBlockCategories(freeMetaModules, freeReactModules, freeSvelteModules);
	const blockCategoriesPremium = buildBlockCategories(premiumMetaModules, premiumReactModules, premiumSvelteModules);
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
export const getBlock = query(v.object({ category: v.string(), block: v.string() }), async ({ category, block }) => {
	const metaPath = Object.keys(freeMetaModules).find((p) => p.includes(`/blocks/${category}/${block}/`));
	const meta = metaPath
		? (freeMetaModules[metaPath] as { default: { description: string; iconName: string } }).default
		: { description: '', iconName: '' };

	const [freeReact, freeSvelte, premiumReact, premiumSvelte] = await Promise.all([
		buildBlockExamples(category, block, freeReactSources, 'tsx', false),
		buildBlockExamples(category, block, freeSvelteSources, 'svelte', false),
		buildBlockExamples(category, block, premiumReactSources, 'tsx', true),
		buildBlockExamples(category, block, premiumSvelteSources, 'svelte', true),
	]);

	return {
		name: block,
		meta,
		examples: {
			react: [...freeReact, ...premiumReact],
			svelte: [...freeSvelte, ...premiumSvelte],
		} as Record<string, Block[]>,
	};
});
