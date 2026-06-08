import { query } from '$app/server';
import * as v from 'valibot';

// Types ---

export interface Framework {
	key: string;
	label: string;
}

export interface BlockCategory {
	slug: string;
	label: string;
	meta: {
		description: string;
		iconName: string;
	};
	react: number;
	svelte: number;
}

export interface BlockGroup {
	slug: string;
	label: string;
	blocks: BlockCategory[];
}

export interface Block {
	title: string;
	code: string;
	lang: string;
	isPremium: boolean;
	path: string;
}

// Data ---

const frameworkList: Framework[] = [
	{ key: 'react', label: 'React' },
	{ key: 'svelte', label: 'Svelte' },
];

const freeMetaModules = import.meta.glob('../../content/free/blocks/**/meta.json', { eager: true });
const premiumMetaModules = import.meta.glob('../../content/premium/blocks/**/meta.json', { eager: true });

const freeReactSources = import.meta.glob('../../content/free/blocks/**/react/*.tsx', { query: '?raw', import: 'default' });
const freeSvelteSources = import.meta.glob('../../content/free/blocks/**/svelte/*.svelte', { query: '?raw', import: 'default' });
const premiumReactSources = import.meta.glob('../../content/premium/blocks/**/react/*.tsx', { query: '?raw', import: 'default' });
const premiumSvelteSources = import.meta.glob('../../content/premium/blocks/**/svelte/*.svelte', { query: '?raw', import: 'default' });

// Helpers ---

/** Converts a kebab-case slug to a title case display label. */
function slugToLabel(slug: string): string {
	return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Extracts the category and block name from a glob path of the form, ex: `.../blocks/{category}/{name}/...`. */
function parseCategoryAndName(path: string): { category: string; name: string } | null {
	const afterBlocks = path.split('/blocks/')[1];
	if (!afterBlocks) return null;
	const parts = afterBlocks.split('/');
	if (parts.length < 2) return null;
	return { category: parts[0], name: parts[1] };
}

/**
 * Builds a category → BlockCategory[] index from a set of glob modules.
 * Pass 1 seeds entries from meta.json files; pass 2 counts framework source files per block.
 */
function buildBlockCategories(
	metaModules: Record<string, unknown>,
	reactModules: Record<string, unknown>,
	svelteModules: Record<string, unknown>,
): Record<string, BlockCategory[]> {
	// Keyed by category slug → block slug → entry, using a Map to allow upserts.
	const result: Record<string, Map<string, BlockCategory>> = {};

	// Pass 1: seed one entry per block from its meta.json.
	for (const [path, mod] of Object.entries(metaModules)) {
		const parsed = parseCategoryAndName(path);
		if (!parsed) continue;
		const { category, name } = parsed;
		result[category] ??= new Map();
		const meta = (mod as { default: { description: string; iconName: string } }).default;
		result[category].set(name, { slug: name, label: slugToLabel(name), meta, react: 0, svelte: 0 });
	}

	// Pass 2: increment framework counters by scanning source file paths.
	// Falls back to a blank entry if a source file has no corresponding meta.json.
	for (const [files, field] of [
		[reactModules, 'react'],
		[svelteModules, 'svelte'],
	] as const) {
		for (const path of Object.keys(files)) {
			const parsed = parseCategoryAndName(path);
			if (!parsed) continue;
			const { category, name } = parsed;
			result[category] ??= new Map();
			const entry = result[category].get(name) ?? {
				slug: name,
				label: slugToLabel(name),
				meta: { description: '', iconName: '' },
				react: 0,
				svelte: 0,
			};
			entry[field]++;
			result[category].set(name, entry);
		}
	}

	// Flatten each Map to a plain array.
	return Object.fromEntries(Object.entries(result).map(([cat, map]) => [cat, Array.from(map.values())]));
}

/**
 * Loads and parses all code examples for a given block from the provided source modules.
 * Filenames follow the convention `001-my-example.{extension}`; the numeric prefix and
 * extension are stripped before converting to a display title (e.g. "My Example").
 */
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
			// Strip numeric ordering prefix (e.g. "001-") and file extension to get a slug.
			const slug = filename.replace(/\.\w+$/, '').replace(/^\d+-/, '');
			const title = slugToLabel(slug);
			return { title, code, lang, isPremium, path };
		}),
	);
}

// Data Functions ---

/** Get all supported frameworks */
export const getFrameworks = query(async (): Promise<Framework[]> => {
	return frameworkList;
});

/** Get all block groups, merging free and premium content into a unified category list. */
export const getBlocks = query(async (): Promise<BlockGroup[]> => {
	const blockCategoriesFree = buildBlockCategories(freeMetaModules, freeReactSources, freeSvelteSources);
	const blockCategoriesPremium = buildBlockCategories(premiumMetaModules, premiumReactSources, premiumSvelteSources);

	// Union of all category slugs across both tiers.
	const allKeys = new Set([...Object.keys(blockCategoriesFree), ...Object.keys(blockCategoriesPremium)]);
	const groups: BlockGroup[] = [];

	for (const key of allKeys) {
		const map = new Map<string, BlockCategory>();

		// Seed the map with free blocks.
		for (const cat of blockCategoriesFree[key] ?? []) map.set(cat.slug, { ...cat });

		// Merge premium blocks: accumulate counts onto existing entries, or add as new if premium-only.
		for (const cat of blockCategoriesPremium[key] ?? []) {
			const existing = map.get(cat.slug);
			if (existing) {
				existing.react += cat.react;
				existing.svelte += cat.svelte;
			} else {
				map.set(cat.slug, { ...cat });
			}
		}

		groups.push({ slug: key, label: slugToLabel(key), blocks: Array.from(map.values()) });
	}

	return groups;
});

/** Get the full details and all code examples for a single block. */
export const getBlock = query(v.object({ category: v.string(), block: v.string() }), async ({ category, block }) => {
	// Prefer free meta; fall back to premium for premium-only blocks.
	const metaPath =
		Object.keys(freeMetaModules).find((p) => p.includes(`/blocks/${category}/${block}/`)) ??
		Object.keys(premiumMetaModules).find((p) => p.includes(`/blocks/${category}/${block}/`));
	const meta = metaPath
		? ((freeMetaModules[metaPath] ?? premiumMetaModules[metaPath]) as { default: { description: string; iconName: string } }).default
		: { description: '', iconName: '' };

	// Fetch all four source sets in parallel, then merge by framework.
	const [freeReact, freeSvelte, premiumReact, premiumSvelte] = await Promise.all([
		buildBlockExamples(category, block, freeReactSources, 'tsx', false),
		buildBlockExamples(category, block, freeSvelteSources, 'svelte', false),
		buildBlockExamples(category, block, premiumReactSources, 'tsx', true),
		buildBlockExamples(category, block, premiumSvelteSources, 'svelte', true),
	]);

	return {
		slug: block,
		label: slugToLabel(block),
		meta,
		examples: {
			react: [...freeReact, ...premiumReact],
			svelte: [...freeSvelte, ...premiumSvelte],
		} as Record<string, Block[]>,
	};
});
