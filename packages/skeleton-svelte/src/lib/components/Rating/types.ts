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
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Item ---
	/** Sets the item base styles. */
	itemBase?: string;
	/** Sets the item aspect ratio styles. */
	itemAspect?: string;
	/** Provide arbitrary CSS classes to the rating item. */
	itemClasses?: string;

	// Snippets ---
	/** The empty icon slot. */
	emptyIcon?: Snippet;
	/** The full icon slot. */
	fullIcon?: Snippet;
}
