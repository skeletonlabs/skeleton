import * as slider from '@zag-js/slider';

export interface SliderProps extends Omit<slider.Context, 'id' | 'thumbSize'> {
	/** Provide the value as an array. */
	value?: number[];
	/** Set height classes for the overall slider. */
	height?: string;

	// Root ---
	/** Set base classes. */
	base?: string;
	/** Provide arbitrary classes for the root. */
	classes?: string;

	// Control ---
	/** Set base classes for the control. */
	controlBase?: string;
	/** Provide arbitrary classes for the control. */
	controlClasses?: string;

	// Track ---
	/** Set base classes for the track. */
	trackBase?: string;
	/** Set background classes for the track. */
	trackBg?: string;
	/** Set border radius classes for the track. */
	trackRounded?: string;
	/** Provide arbitrary classes for the track. */
	trackClasses?: string;

	// Meter ---
	/** Set base classes for the meter. */
	meterBase?: string;
	/** Set background classes for the meter. */
	meterBg?: string;
	/** Set border radius classes for the meter. */
	materRounded?: string;
	/** Provide arbitrary classes for the meter. */
	meterClasses?: string;

	// Thumb ---
	/** Set base classes for the thumb. */
	thumbBase?: string;
	/** Set size classes for the thumb. */
	thumbSize?: string;
	/** Set background classes for the thumb. */
	thumbBg?: string;
	/** Set ring size classes for the thumb. */
	thumbRingSize?: string;
	/** Set ring color classes for the thumb. */
	thumbRingColor?: string;
	/** Set border-radius classes for the thumb. */
	thumbRounded?: string;
	/** Set scale classes for the thumb. */
	thumbScale?: string;
	/** Set cursor classes for the thumb. */
	thumbCursor?: string;
	/** Provide arbitrary classes for the thumb. */
	thumbClasses?: string;

	// State ---
	/** Set disabled state classes for the root element. */
	stateDisabled?: string;
	/** Set read-only state classes for the root element. */
	stateReadOnly?: string;
}
