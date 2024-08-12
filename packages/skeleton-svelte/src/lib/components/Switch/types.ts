import * as zagSwitch from '@zag-js/switch';
import type { Snippet } from 'svelte';

export interface SwitchProps extends Omit<zagSwitch.Context, 'id'> {
	/** Set a unique name for the switch input. */
	name: string;
	/** Set the checked state. */
	checked?: boolean;
	/** Set the disabled state. */
	disabled?: boolean;
	/** Set the compact display mode. */
	compact?: boolean;

	// Root ---
	/** Set base classes for the root element. */
	base?: string;
	/** Provide arbitrary classes to the root element. */
	classes?: string;

	// Control ---
	/** Set base classes for the control element. */
	controlBase?: string;
	/** Set inactive state classes for the control element. */
	controlInactive?: string;
	/** Set active state classes for the control element. */
	controlActive?: string;
	/** Set disabled state classes for the control element. */
	controlDisabled?: string;
	/** Set width classes for the control element. */
	controlWidth?: string;
	/** Set height classes for the control element. */
	controlHeight?: string;
	/** Set padding classes for the control element. */
	controlPadding?: string;
	/** Set rounded classes for the control element. */
	controlRounded?: string;
	/** Set hover classes for the control element. */
	controlHover?: string;
	/** Provide arbitrary classes to the control element. */
	controlClasses?: string;

	// Thumb ---
	/** Set base classes for the thumb element. */
	thumbBase?: string;
	/** Set inactive classes for the thumb element. */
	thumbInactive?: string;
	/** Set active classes for the thumb element. */
	thumbActive?: string;
	/** Set rounded classes for the thumb element. */
	thumbRounded?: string;
	/** Set animation X-axis translate classes for the thumb element. */
	thumbTranslateX?: string;
	/** Set animation transition classes for the thumb element. */
	thumbTransition?: string;
	/** Set animation easing classes for the thumb element. */
	thumbEase?: string;
	/** Set animation duration classes for the thumb element. */
	thumbDuration?: string;
	/** Provide arbitrary classes to the thumb element. */
	thumbClasses?: string;

	// Label ---
	/** Set base classes for the label element. */
	labelBase?: string;
	/** Provide arbitrary classes to the label element. */
	labelClasses?: string;

	// Icons ---
	/** Set base classes for the inactive icon child. */
	iconInactiveBase?: string;
	/** Set base classes for the active icon child. */
	iconActiveBase?: string;

	// Snippets ---
	/** The default children snippet. */
	children?: Snippet;
	/** The inactive state snippet. */
	inactiveChild?: Snippet;
	/** The active state snippet. */
	activeChild?: Snippet;
}
