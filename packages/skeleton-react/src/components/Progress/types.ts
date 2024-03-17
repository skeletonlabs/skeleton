export interface ProgressProps {
	/** Set the value */
	value?: number;
	/** Set the minimum value. */
	min?: number;
	/** Set the maximum value. */
	max?: number;

	// Root ---
	/** Provide base classes. */
	base?: string;
	/** Provide height classes. */
	height?: string;
	/** Provide rounded classes. */
	rounded?: string;
	/** Provide arbitrary classes. */
	classes?: string;

	// Indicator ---
	/** Provide base classes. */
	indicatorBase?: string;
	/** Provide rounded classes. */
	indicatorRounded?: string;
	/** Provide transition classes. */
	indicatorTransition?: string;
	/** Provide indeterminate animation classes. */
	indicatorIndeterminateAnimation?: string;
	/** Provide arbitrary classes. */
	indicatorClasses?: string;
}
