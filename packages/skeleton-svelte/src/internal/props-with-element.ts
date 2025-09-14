import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

import type { HTMLAttributes } from './html-attributes';

interface PropsWithElement<T extends keyof SvelteHTMLElements> {
	/**
	 * Render the element yourself
	 */
	element?: Snippet<[HTMLAttributes<T>]>;
}

export type { PropsWithElement };
