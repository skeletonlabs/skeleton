import type { Snippet as SvelteSnippet } from 'svelte';

export type Classes<Prefix extends string = ''> = {
	/** Set the base styles. */
	[key in `${Prefix}${Prefix extends '' ? 'base' : 'Base'}`]?: string;
} & {
	/** Provide a set of arbitrary classes. */
	[key in `${Prefix}${Prefix extends '' ? 'classes' : 'Classes'}`]?: string;
};

export type Snippet<Key extends string = 'children', T extends unknown[] = []> = {
	/** The default snippet. */
	[key in Key]?: SvelteSnippet<T>;
};
