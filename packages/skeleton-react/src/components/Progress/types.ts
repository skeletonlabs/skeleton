import * as progress from '@zag-js/progress';
import type { ReactNode } from 'react';

export interface ProgressProps extends React.PropsWithChildren, Omit<progress.Props, 'id'> {
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

	// Label ---
	/** Set label base classes. */
	labelBase?: string;
	/** Set label text classes. */
	labelText?: string;
	/** Set label classes. */
	labelClasses?: string;

	// Track ---
	/** Set the track base classes. */
	trackBase?: string;
	/** Set the track background classes. */
	trackBg?: string;
	/** Set the track border radius classes. */
	trackRounded?: string;
	/** Set arbitrary track classes. */
	trackClasses?: string;

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

	// Nodes ---
	/** Set the label */
	label?: ReactNode;
}
