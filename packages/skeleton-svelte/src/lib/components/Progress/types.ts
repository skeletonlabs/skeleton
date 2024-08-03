import * as progress from '@zag-js/progress';
import type { Snippet } from 'svelte';

export interface ProgressProps extends Omit<progress.Context, 'id'> {
	// Root ---
	/** Set root base classes */
	base?: string;
	/** Set root background classes  */
	bg?: string;
	/** Set root width classes */
	width?: string;
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
	/** Set meter animation classes for indeterminate mode. (value === undefined) */
	meterAnimate?: string;
	/** Set meter arbitrary classes. */
	meterClasses?: string;

	// Label ---
	/** Set label base classes. */
	labelBase?: string;
	/** Set label classes. */
	labelClasses?: string;

	// Snippets ---
	/** Set the label */
	label?: Snippet;
}
