import type { Snippet } from 'svelte';
import * as dialog from '@zag-js/dialog';
import type { FlyParams, FadeParams } from 'svelte/transition';
import type { HTMLButtonAttributes } from 'svelte/elements';

export interface ModalProps extends Omit<dialog.Props, 'id'> {
	// Base ---
	/** Set base classes for the root element. */
	base?: string;
	/** Provide arbitrary classes for the root element. */
	classes?: string;
	/** Set z-index for the positioner. */
	zIndex?: string;

	// Trigger ---
	/** Set base classes for the trigger. */
	triggerBase?: string;
	/** Set background classes for the trigger. */
	triggerBackground?: string;
	/** Provide arbitrary classes for the trigger. */
	triggerClasses?: string;
	/** Set the aria-label for the trigger. */
	triggerAriaLabel?: string;

	// Backdrop ---
	/** Set base classes for the backdrop. */
	backdropBase?: string;
	/** Set background classes for the backdrop. */
	backdropBackground?: string;
	/** Provide arbitrary classes for the backdrop. */
	backdropClasses?: string;

	// Positioner ---
	/** Set base classes for the positioner. */
	positionerBase?: string;
	/** Set display classes for the positioner. */
	positionerDisplay?: string;
	/** Set justify classes for the positioner. */
	positionerJustify?: string;
	/** Set align classes for the positioner. */
	positionerAlign?: string;
	/** Set padding classes for the positioner. */
	positionerPadding?: string;
	/** Provide arbitrary classes for the positioner. */
	positionerClasses?: string;

	// Content ---
	/** Set base classes for the content. */
	contentBase?: string;
	/** Set background classes for the content. */
	contentBackground?: string;
	/** Provide arbitrary classes for the content. */
	contentClasses?: string;

	// Transitions ---
	/** Provide transition for backdrop in */
	transitionsBackdropIn?: FadeParams;
	/** Provide transition for backdrop out */
	transitionsBackdropOut?: FadeParams;
	/** Provide transition for dialog in */
	transitionsPositionerIn?: FlyParams;
	/** Provide transition for dialog out */
	transitionsPositionerOut?: FlyParams;

	// Snippets ---
	/** Provide the template contents inside the trigger button. */
	trigger?: Snippet;
	/** Provide the template contents of the dialog itself. */
	content?: Snippet;

	// Events ---
	/** Handle the dialog button click event. */
	onclick?: HTMLButtonAttributes['onclick'];
}
