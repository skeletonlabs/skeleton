import type { Snippet } from 'svelte';
import * as dialog from '@zag-js/dialog';
import type { FlyParams, FadeParams } from 'svelte/transition';

export interface ModalProps extends Omit<dialog.Context, 'id' | 'open'> {
	/** Set the open state of the dialog. */
	open?: boolean;

	// Trigger ---
	/** Set base classes for the trigger. */
	triggerBase?: string;
	/** Set background classes for the trigger. */
	triggerBackground?: string;
	/** Provide arbitrary classes for the trigger. */
	triggerClasses?: string;

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
	transitionsBackdropIn?: FadeParams;
	transitionsBackdropOut?: FadeParams;
	transitionspositionerIn?: FlyParams;
	transitionspositionerOut?: FlyParams;

	// Snippets ---
	/** Provide the template contents of the trigger element. */
	trigger?: Snippet;
	/** Provide the template contents of the dialog itself. */
	content?: Snippet;
}
