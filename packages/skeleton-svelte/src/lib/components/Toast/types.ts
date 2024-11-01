import type { Snippet } from 'svelte';

// Store

// https://zagjs.com/components/react/toast#creating-a-toast
export interface Toast {
	/** The unique toast ID. */
	id?: string;
	/** The unique toast title text. */
	title?: string;
	/** The unique toast description text. */
	description?: string;
	/**
	 * Set one of the available toast types.
	 * @default info
	 */
	type?: 'info' | 'error' | 'success';
	/** The duration of the toast. Default varies by type. */
	duration?: number;
}

// Context ---

// https://zagjs.com/components/react/toast#programmatic-control
/** Provides accesss to the Toast Context API. */
export interface ToastContext {
	/** Used to create display a new Toast instance. */
	create: (toast: Toast) => void;
}

// Component ---

export interface ToastProviderProps {
	/**
	 * Offset from the viewport edge.
	 * @default bottom-end
	 */
	placement?: string;
	/**
	 * Offset from the viewport edge.
	 * @default 16px
	 */
	offset?: string;

	// State ---
	stateInfo?: string;
	stateError?: string;
	stateSuccess?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}
