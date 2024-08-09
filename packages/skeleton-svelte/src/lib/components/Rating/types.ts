import * as rating from '@zag-js/rating-group';
import type { Snippet } from 'svelte';

export interface RatingProps extends Omit<rating.Context, 'id' | 'onValueChange'> {
	// Root ---
	/** Set root base classes */
	base?: string;
	/** Set root disabled classes */
	disabledClasses?: string;
	/** Set root readonly classes */
	readOnlyClasses?: string;
	/** Set root arbitrary classes */
	classes?: string;

	// Label ---
	/** Set label base classes */
	labelBase?: string;
	/** Set label arbitrary classes */
	labelClasses?: string;

	// Item ---
	/** Set item base classes */
	itemBase?: string;
	/** Set item arbitrary classes */
	itemClasses?: string;

	// Snippets ---
	/** Set the empty icon snippet */
	iconEmpty?: Snippet;
	/** Set the half icon snippet */
	iconHalf?: Snippet;
	/** Set the full icon snippet */
	iconFull?: Snippet;
	/** Set the label snippet */
	label?: Snippet;

	// Events ---
	/** Set the onValueChange callback */
	onValueChange?: (value: number) => void;
}
