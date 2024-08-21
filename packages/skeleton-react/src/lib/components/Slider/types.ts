// import type { ReactNode } from 'react';
import * as slider from '@zag-js/slider';

export interface SliderProps extends Omit<slider.Context, 'id' | 'onValueChange' | 'thumbSize'> {
	height?: string;

	// Root ---
	/** Sets base classes. */
	base?: string;
	/** Provide arbitrary classes to the root. */
	classes?: string;

	// Control ---
	/** Sets base classes to the control. */
	controlBase?: string;
	/** Provide arbitrary classes to the control. */
	controlClasses?: string;

	// Track ---
	/** Sets base classes to the track. */
	trackBase?: string;
	/** Sets background classes to the track. */
	trackBg?: string;
	/** Sets border radius classes to the track. */
	trackRounded?: string;
	/** Provide arbitrary classes to the track. */
	trackClasses?: string;

	// Meter ---
	/** Sets base classes to the meter. */
	meterBase?: string;
	/** Sets background classes to the meter. */
	meterBg?: string;
	/** Provide arbitrary classes to the meter. */
	meterClasses?: string;

	// Thumb ---
	/** Sets base classes to the thumb. */
	thumbBase?: string;
	/** Sets size classes to the thumb. */
	thumbSize?: string;
	/** Sets background classes to the thumb. */
	thumbBg?: string;
	/** Sets ring classes to the thumb. */
	thumbRing?: string;
	/** Sets ring color classes to the thumb. */
	thumbRingColor?: string;
	/** Sets border-radius classes to the thumb. */
	thumbRounded?: string;
	/** Sets cursor classes to the thumb. */
	thumbCursor?: string;
	/** Provide arbitrary classes to the thumb. */
	thumbClasses?: string;

	// Events ---
	/** Triggers when the value state is changed. */
	onValueChange?: (value: number[]) => void;
}
