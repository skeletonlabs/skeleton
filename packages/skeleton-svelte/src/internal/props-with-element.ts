import type { HTMLAttributes } from './html-attributes';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

interface PropsWithElement<T extends keyof SvelteHTMLElements> {
	/**
	 * Render the element yourself
	 */
	element?: Snippet<[HTMLAttributes<T>]>;
}

export type { PropsWithElement };
