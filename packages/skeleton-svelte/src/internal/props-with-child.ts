import type { Snippet } from 'svelte';

interface PropsWithChild {
	child?: Snippet<[Record<string, unknown>]>;
}

export type { PropsWithChild };
