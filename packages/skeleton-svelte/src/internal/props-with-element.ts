import type { Snippet } from 'svelte';

interface PropsWithElement {
	/**
	 * Render the element yourself
	 */
	element?: Snippet<[{ attributes: Record<string, unknown> }]>;
}

export type { PropsWithElement };
