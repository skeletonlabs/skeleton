import type { Snippet } from 'svelte';
import * as tooltip from '@zag-js/tooltip';
import type { HTMLButtonAttributes } from 'svelte/elements';

export interface TooltipProps extends Omit<tooltip.Props, 'id'> {
	/** Set a positioner style for z-index, ex: "10" */
	zIndex?: string;

	// Arrow ---
	/** Enable display of the popover arrow. */
	arrow?: boolean;
	/** Set a style value for --arrow-background, ex: "var(--color-surface-50-950)" */
	arrowBackground?: string;
	/** Set a style value for --arrow-size, ex: "10px" */
	arrowSize?: string;

	// Base ---
	/** Set base classes for the root element. */
	base?: string;
	/** Provide arbitrary classes for the root element. */
	classes?: string;

	// Trigger ---
	/** Set base styles for the trigger. */
	triggerBase?: string;
	/** Set background styles for the trigger. */
	triggerBackground?: string;
	/** Provide arbitrary styles for the trigger. */
	triggerClasses?: string;
	/** Set the aria-label for the trigger. */
	triggerAriaLabel?: string;

	// Positioner ---
	/** Set base classes for the positioner. */
	positionerBase?: string;
	/** Provide arbitrary classes for the positioner. */
	positionerClasses?: string;

	// Content ---
	/** Set base styles for the content. */
	contentBase?: string;
	/** Set background styles for the content. */
	contentBackground?: string;
	/** Provide arbitrary styles for the content. */
	contentClasses?: string;

	// Arrow ---
	/** Set base classes for the arrow. */
	arrowBase?: string;
	/** Provide arbitrary classes for the arrow. */
	arrowClasses?: string;

	// Snippets ---
	/** Provide the template contents inside the trigger button. */
	trigger?: Snippet;
	/** Provide the template contents of the tooltip itself. */
	content?: Snippet;

	// Events ---
	/** Handle the tooltip button hover event. */
	onmouseover?: HTMLButtonAttributes['onmouseover'];
	/** Handle the tooltip button click event. */
	onclick?: HTMLButtonAttributes['onclick'];
}
