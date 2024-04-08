import type { Snippet } from 'svelte';

export interface RatingProps {
	/** Sets the rating value. */
	value?: number;
	/** Sets the maximum rating value. */
	max?: number;
	/** Sets the rating fractions. */
	fraction?: number;
	/** Sets interactive mode. */
	interactive?: boolean;
	/** Sets single select mode. */
	single?: boolean;

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

	// Snippets ---
	/** The empty icon slot. */
	emptyIcon?: Snippet;
	/** The full icon slot. */
	fullIcon?: Snippet;
}
