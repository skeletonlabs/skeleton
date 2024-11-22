import type { Snippet } from 'svelte';
import * as progress from '@zag-js/progress';

export interface ProgressRingProps extends Omit<progress.Context, 'id'> {
	/** Set the text for the scalable label */
	label?: string;
	/** When enabled, show a text label with the percentage amount */
	showLabel?: boolean;
	/** Set the stroke size (ex: 15px) */
	strokeWidth?: string;
	/** Defines the shape of the meter */
	strokeLinecap?: 'inherit' | 'butt' | 'round' | 'square';

	// Root (Figure) ---
	/** Set the root base classes */
	base?: string;
	/** Set the root size classes */
	size?: string;
	/** Provide arbitrary classes to the root element */
	classes?: string;

	// Children ---
	/** Set the nested children base classes */
	childrenBase?: string;
	/** Provide arbitrary classes to the nested children. */
	childrenClasses?: string;

	// SVG ---
	/** Set the SVG element base classes */
	svgBase?: string;
	/** Provide arbitrary classes to the SVG element */
	svgClasses?: string;

	// Track ---
	/** Set the track base classes */
	trackBase?: string;
	/** Set the track stroke color classes  */
	trackStroke?: string;
	/** Provide arbitrary classes to the track element */
	trackClasses?: string;

	// Meter ---
	/** Set the meter base classes */
	meterBase?: string;
	/** Set the meter stroke color classes */
	meterStroke?: string;
	/** Set the meter transition classes */
	meterTransition?: string;
	/** Set the meter animation classes */
	meterAnimate?: string;
	/** Set the meter transition duration classes */
	meterDuration?: string;
	/** Provide arbitrary classes to the meter element */
	meterClasses?: string;

	// Label ---
	/** Set the label classes */
	labelBase?: string;
	/** Set the label fill color classes */
	labelFill?: string;
	/** Set the label font size */
	labelFontSize?: number;
	/** Set the label font weight */
	labelFontWeight?: string;
	/** Provide arbitrary classes to the label element */
	labelClasses?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}
