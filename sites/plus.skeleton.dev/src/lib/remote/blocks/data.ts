export type Category = 'marketing' | 'applications' | 'ecommerce';

export interface Block {
	title: string;
	code: string;
	lang: string;
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

const placeholderDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

const placeholderBlocks: Block[] = [
	{ title: 'Example 1', code: '<h1 class="h1">Hello World</h1>', lang: 'svelte' },
	{ title: 'Example 2', code: '<h2 class="h2">Hello World</h2>', lang: 'svelte' },
	{ title: 'Example 3', code: '<h3 class="h3">Hello World</h3>', lang: 'svelte' },
];

export const blockCategories: Record<string, BlockCategory[]> = {
	applications: [
		{
			name: 'stacked-layouts',
			meta: { description: placeholderDesc, iconName: 'StarIcon' },
			react: 9,
			svelte: 9,
		},
	],
	ecommerce: [
		{
			name: 'product-overviews',
			meta: { description: placeholderDesc, iconName: 'StarIcon' },
			react: 5,
			svelte: 5,
		},
	],
	marketing: [
		{
			name: 'hero-sections',
			meta: { description: placeholderDesc, iconName: 'StarIcon' },
			react: 12,
			svelte: 12,
		},
	],
};

export const blockDetails = {
	name: 'stacked-layouts',
	meta: { description: placeholderDesc, iconName: 'StarIcon' },
	examples: {
		react: placeholderBlocks,
		svelte: placeholderBlocks,
	},
};
