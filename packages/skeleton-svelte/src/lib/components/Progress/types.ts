export interface ProgressProps {
	/** Set the value */
	value?: number;
	/** Set the minimum value. */
	min?: number;
	/** Set the maximum value. */
	max?: number;

	// Root ---
	/** Set base styles. */
	base?: string;
	/** Provide classes to set track height. */
	height?: string;
	/** Provide classes to set rounded styles. */
	rounded?: string;
	/** Provide classes to set the meter transition styles. */
	transition?: string;
	/** Provide classes to replace the default animation styles. */
	animIndeterminate?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Meter ---
	/** Sets the base classes of the meter element. */
	meterBase?: string;
	/** Provide arbitrary CSS classes to the meter. */
	meterClasses?: string;
}
