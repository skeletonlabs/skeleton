import type { Snippet } from 'svelte';

interface PropsWithElement {
	element?: Snippet<[{ attributes: Record<string, unknown> }]>;
}

export type { PropsWithElement };
