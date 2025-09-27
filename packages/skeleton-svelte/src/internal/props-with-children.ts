import type { Snippet } from 'svelte';

interface PropsWithChildren<T extends unknown[] = unknown[]> {
	/**
	 * The default slot content to be rendered within the component.
	 */
	children?: Snippet<T>;
}

export type { PropsWithChildren };
