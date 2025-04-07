import type { Snippet } from 'svelte';

interface PropsWithChild {
	child?: Snippet<[{ attributes: Record<string, unknown> }]>;
}

export type { PropsWithChild };
