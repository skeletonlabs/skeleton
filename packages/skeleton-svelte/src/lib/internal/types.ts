import type { Snippet } from 'svelte';

export type Base<Prefix extends string = ''> = {
	/** Set the base styles. */
	[key in `${Prefix}${Prefix extends '' ? 'base' : 'Base'}`]?: string;
} & {
	/** Provide a set of arbitrary classes. */
	[key in `${Prefix}${Prefix extends '' ? 'classes' : 'Classes'}`]?: string;
};

export interface Children<T extends unknown[] = []> {
	/** The default snippet. */
	children?: Snippet<T>;
}
