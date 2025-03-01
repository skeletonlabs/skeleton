import type * as rating from "@zag-js/rating-group";
import type { ReactNode } from "react";

export interface RatingProps extends Omit<rating.Props, "id"> {
	// Root ---
	/** Set root base classes */
	base?: string;
	/** Set root gap classes */
	gap?: string;
	/** Set root arbitrary classes */
	classes?: string;

	// Control ---
	/** Set control base classes */
	controlBase?: string;
	/** Set control gap classes */
	controlGap?: string;
	/** Set control arbitrary classes */
	controlClasses?: string;

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

	// State ---
	/** Set item read-only state classes */
	stateReadOnly?: string;
	/** Set item disabled state classes */
	stateDisabled?: string;

	// Nodes ---
	/** Set the empty icon node */
	iconEmpty?: ReactNode;
	/** Set the half icon node */
	iconHalf?: ReactNode;
	/** Set the full icon node */
	iconFull?: ReactNode;
	/** Set the label node */
	label?: ReactNode;
}
