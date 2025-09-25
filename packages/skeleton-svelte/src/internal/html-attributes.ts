import type { SvelteHTMLElements } from 'svelte/elements';

export type HTMLAttributes<T extends keyof SvelteHTMLElements, U extends keyof SvelteHTMLElements[T] = never> = Omit<
	SvelteHTMLElements[T],
	U
>;
