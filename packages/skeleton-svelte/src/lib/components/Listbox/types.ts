import type { Snippet } from 'svelte';

export interface ListboxContext {
	readonly value: string | string[] | undefined;
	readonly toggle: (value: string) => void;
	readonly has: (value: string) => boolean;
}

export interface ListboxProps {
	/** The value or values of the selected item(s). */
	value?: string | string[] | undefined;

	// Parent ---
	/** Set the parent base styles. */
	base?: string;
	/** Provide the parent a set of arbitrary classes. */
	classes?: string;

	// Children ---
	/** The default slot contents within the component. */
	children?: Snippet;
}

export interface ListboxItemProps {
	/** The value of the item. */
	value?: string;

	// Parent ---
	/** Set the item base styles. */
	base?: string;
	/** Provide the item a set of arbitrary classes. */
	classes?: string;

	// Children ---
	children?: Snippet;
}
