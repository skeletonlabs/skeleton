import type { Snippet } from 'svelte';

export interface SegmentControlProps {
	// Root ---
	/** Sets base classes. */
	base?: string;
	/** Set display classes. */
	display?: string;
	/** Set background classes. */
	background?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}

export interface SegmentProps {
	/** Provide a unique ID. */
	id?: string;
	/** Provide the shared group value. */
	group: unknown;
	/** Provide the shared group name. */
	name: string;
	/** Provide the unique segment value. */
	value: unknown;
	/** Provide a native title attribute value. */
	title?: string;
	/** Set a disabled state. */
	disabled?: boolean;

	// Root ---
	/** Sets base classes. */
	base?: string;
	/** Sets active state classes. */
	active?: string;
	/** Sets hover state classes. */
	hover?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Children ---
	/** Set the default snippet region base classes */
	childrenBase?: string;
	/** Provide arbitrary classes to the default snippet region. */
	childrenClasses?: string;

	// Events ---
	/** Triggers on click events. */
	onclick?: (value: unknown) => void;
	/** Triggers on change events. */
	onchange?: (value: unknown) => void;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}
