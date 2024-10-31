import type { Snippet } from 'svelte';

export interface ToastProps {
	id?: string;
	title?: string;
	description?: string;
	type?: string;
	duration?: number;
}

export interface ToastProviderProps {
	// State ---
	stateInfo?: string;
	stateError?: string;
	stateSuccess?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}
