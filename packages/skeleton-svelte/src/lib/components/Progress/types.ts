export interface ProgressProps {
	/** Set the value */
	value?: number;
	/** Set the maximum value */
	max?: number;
	/** Set the aria-labelledby */
	ariaLabelledby?: string;

	// Root ---
	/** Set root base classes */
	base?: string;
	/** Set root background classes  */
	bg?: string;
	/** Set root height classes */
	height?: string;
	/** Set root rounded classes */
	rounded?: string;
	/** Set root arbitrary classes */
	classes?: string;

	// Meter ---
	/** Set meter base classes. */
	meterBase?: string;
	/** Set meter bg classes */
	meterBg?: string;
	/** Set meter rounded classes. */
	meterRounded?: string;
	/** Set meter transition classes. */
	meterTransition?: string;
	/** Set meter indeterminate animation classes */
	meterIndeterminateAnim?: string;
	/** Set meter arbitrary classes. */
	meterClasses?: string;
}
