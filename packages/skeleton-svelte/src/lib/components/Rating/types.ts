import type { Snippet } from 'svelte';

export interface RatingProps {
	/** Sets the rating value. */
	value?: number;
	/** Sets the maximum rating value. */
	max?: number;
	/** Sets interactive mode. */
	interactive?: boolean;
	/** Sets the rating fractions. */
	fraction?: number;

	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Sets text color styles. */
	text?: string;
	/** sets fill color styles. */
	fill?: string;
	/** Sets justification styles. */
	justify?: string;
	/** Sets horizontal spacing styles. */
	spaceX?: string;
	/** Provide arbitrary CSS classes for empty icons in interractive mode. (important for functionality!) */
	iconEmptyBtnClasses?: string;
	/** Provide arbitrary CSS classes for full icons in interractive mode. (important for functionality!) */
	iconFullBtnClasses?: string;
	/** Provide arbitrary CSS classes for empty icons. (important for functionality!) */
	iconEmptyClasses?: string;
	/** Provide arbitrary CSS classes for full icons. (important for functionality!) */
	iconFullClasses?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Item ---
	/** Sets the item base styles. */
	itemBase?: string;
	/** Sets the item position styles. */
	itemPosition?: string;
	/** Sets the item aspect ratio styles. */
	itemAspect?: string;
	/** Provide arbitrary CSS classes to the rating item. */
	itemClasses?: string;

	// Events ---
	/** Triggers on rating click. */
	onclick?: (event: MouseEvent, value: number) => void;

	// Snippets ---
	/** The empty icon slot. */
	iconEmpty?: Snippet;
	/** The full icon slot. */
	iconFull?: Snippet;
}
