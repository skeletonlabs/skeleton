import * as rating from '@zag-js/rating-group';
import type { ReactNode } from 'react';

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

	// Nodes ---
	/** Set the empty icon node */
	iconEmpty?: ReactNode;
	/** Set the half icon node */
	iconHalf?: ReactNode;
	/** Set the full icon node */
	iconFull?: ReactNode;
	/** Set the label node */
	label?: ReactNode;

	// Events ---
	/** Set the onValueChange callback */
	onValueChange?: (value: number) => void;
}
