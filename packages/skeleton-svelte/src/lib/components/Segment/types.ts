import type { Snippet } from 'svelte';

export interface SegmentControlProps {
	// Root ---
	/** Sets base classes. */
	base?: string;
	/** Set background classes. */
	background?: string;
	/** Set border classes. */
	border?: string;
	/** Set flex direction classes. */
	flexDirection?: string;
	/** Set gap classes. */
	gap?: string;
	/** Set padding classes. */
	padding?: string;
	/** Set rounded classes. */
	rounded?: string;
	/** Set width classes. */
	width?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}

export interface SegmentProps {
	/** Provide the shared group binding. */
	group: unknown;
	/** Provide the shared group name. */
	name: string;
	/** Provide a unique ID. */
	id: string;
	/** Provide the unique segment value. */
	value: unknown;
	/** Provide a hover title attribute. */
	title?: string;
	/** Set the disabled state. */
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
