import { getRequestEvent, query } from '$app/server';

// Types ---

export type BlockCategory = string;

export interface BlockCategoryItem {
	id: BlockCategory;
	label: string;
}

export interface Block {
	slug: string;
	label: string;
	description: string;
	iconName: string;
	category: string;
	frameworkCounts: Record<string, number>;
}

export interface BlockComponent {
	tier: 'free' | 'premium';
	name: string;
	code: Record<string, string>;
}

export interface BlockDetail extends Block {
	frameworks: string[];
	components: BlockComponent[];
}

type TierFile = {
	tier: 'free' | 'premium';
	parsed: NonNullable<ReturnType<typeof parseContentPath>>;
	loader: () => Promise<string>;
};

interface BlockMeta {
	description?: string;
	iconName?: string;
}

// Consts ---

const freeMetaFiles = import.meta.glob('/src/lib/content/free/blocks/*/*/meta.json', { eager: true }) as Record<string, BlockMeta>;

const premiumMetaFiles = import.meta.glob('/src/lib/content/premium/blocks/*/*/meta.json', { eager: true }) as Record<string, BlockMeta>;

const knownCategories = ['applications', 'ecommerce', 'marketing'];

// Utility Functions ---

// Glob patterns
const freeFiles = import.meta.glob('/src/lib/content/free/blocks/*/*/*/*.*', { query: '?raw', import: 'default' }) as Record<
	string,
	() => Promise<string>
>;
const premiumFiles = import.meta.glob('/src/lib/content/premium/blocks/*/*/*/*.*', { query: '?raw', import: 'default' }) as Record<
	string,
	() => Promise<string>
>;

// Parses a Vite glob key into its semantic parts
function parseContentPath(path: string): { category: string; slug: string; framework: string; name: string } | null {
	const match = path.match(/\/blocks\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)\.[^.]+$/);
	if (!match) return null;
	return { category: match[1], slug: match[2], framework: match[3], name: match[4] };
}

function formatLabel(slug: string): string {
	return slug
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}

function getMetadata(category: string, slug: string): { iconName: string; description: string } {
	const freeKey = `/src/lib/content/free/blocks/${category}/${slug}/meta.json`;
	const premiumKey = `/src/lib/content/premium/blocks/${category}/${slug}/meta.json`;
	const m = freeMetaFiles[freeKey] ?? premiumMetaFiles[premiumKey];
	return { iconName: m?.iconName ?? 'BoxIcon', description: m?.description ?? '' };
}

// Single-pass build: accumulates Block[] directly from glob keys (no file I/O)
function buildBlocks(): Block[] {
	const map = new Map<string, Block>(); // key: `${category}/${slug}`

	for (const path of [...Object.keys(freeFiles), ...Object.keys(premiumFiles)]) {
		const parsed = parseContentPath(path);
		if (!parsed) continue;

		const key = `${parsed.category}/${parsed.slug}`;
		if (!map.has(key)) {
			const meta = getMetadata(parsed.category, parsed.slug);
			map.set(key, {
				slug: parsed.slug,
				label: formatLabel(parsed.slug),
				description: meta.description,
				iconName: meta.iconName,
				category: parsed.category,
				frameworkCounts: {},
			});
		}
		const block = map.get(key)!;
		block.frameworkCounts[parsed.framework] = (block.frameworkCounts[parsed.framework] ?? 0) + 1;
	}

	return [...map.values()];
}

const blocks: Block[] = buildBlocks();

// Query Functions ---

/** Get all categories discovered from meta.json files in the content directories */
export const getCategories = query(async (): Promise<BlockCategoryItem[]> => knownCategories.map((id) => ({ id, label: formatLabel(id) })));

/** Get all blocks derived from the content filesystem */
export const getBlocks = query(async (): Promise<Block[]> => blocks);

/** Get all blocks for a category (matches route param `category`) */
export const getBlocksByCategory = query(async (): Promise<Block[]> => {
	const { params } = getRequestEvent();
	return blocks.filter((b) => b.category === (params as Record<string, string>).category);
});

/** Get a single block with its components and code by category + slug (matches route params) */
export const getBlockBySlug = query(async (): Promise<BlockDetail | undefined> => {
	const { params } = getRequestEvent();
	const { category, slug } = params as Record<string, string>;

	const block = blocks.find((b) => b.category === category && b.slug === slug);
	if (!block) return undefined;

	// Collect only this block's files, storing parsed result to avoid re-parsing
	const tierFiles: TierFile[] = [];
	for (const [path, loader] of Object.entries(freeFiles)) {
		const parsed = parseContentPath(path);
		if (parsed && parsed.category === category && parsed.slug === slug) tierFiles.push({ tier: 'free', parsed, loader });
	}
	for (const [path, loader] of Object.entries(premiumFiles)) {
		const parsed = parseContentPath(path);
		if (parsed && parsed.category === category && parsed.slug === slug) tierFiles.push({ tier: 'premium', parsed, loader });
	}

	// Load all code strings concurrently and group by (tier, name) → { framework: code }
	const componentMap = new Map<string, BlockComponent>();
	await Promise.all(
		tierFiles.map(async ({ tier, parsed, loader }) => {
			const key = `${tier}:${parsed.name}`;
			if (!componentMap.has(key)) componentMap.set(key, { tier, name: parsed.name, code: {} });
			componentMap.get(key)!.code[parsed.framework] = await loader();
		}),
	);

	const frameworks = [...new Set(tierFiles.map((f) => f.parsed.framework))];

	// Sort: free first, then premium; within each tier sort by name
	const components = [...componentMap.values()].sort((a, b) => {
		if (a.tier !== b.tier) return a.tier === 'free' ? -1 : 1;
		return a.name.localeCompare(b.name);
	});

	return { ...block, frameworks, components };
});
