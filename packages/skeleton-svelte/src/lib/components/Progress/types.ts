export interface ProgressTrackProps {
	/** Set the value */
	value?: number;
	/** Set the minimum value. */
	min?: number;
	/** Set the maximum value. */
	max?: number;

	// Track ---
	/** Provide base classes. */
	base?: string;
	/** Provide height classes. */
	height?: string;
	/** Provide rounded classes. */
	rounded?: string;
	/** Provide arbitrary classes. */
	classes?: string;
}

export interface ProgressIndicatorProps {
	// Root ---
	/** Provide base classes. */
	base?: string;
	/** Provide height classes. */
	height?: string;
	/** Provide rounded classes. */
	rounded?: string;
	/** Provide arbitrary classes. */
	classes?: string;
}
