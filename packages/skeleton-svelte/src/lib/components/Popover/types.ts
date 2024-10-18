import type { Snippet } from 'svelte';
import * as popover from '@zag-js/popover';

export interface PopoverProps extends Omit<popover.Context, 'id' | 'open'> {
	/** Set the open state of the popover. */
	open?: boolean;
	/** Enable display of the popover arrow. */
	arrow?: boolean;

	// Trigger ---
	/** Set base styles for the trigger. */
	triggerBase?: string;
	/** Set background styles for the trigger. */
	triggerBackground?: string;
	/** Provide arbitrary styles for the trigger. */
	triggerClasses?: string;

	// Content ---
	/** Set base styles for the content. */
	contentBase?: string;
	/** Set background styles for the content. */
	contentBackground?: string;
	/** Provide arbitrary styles for the content. */
	contentClasses?: string;

	// Arrow ---
	/** Set base styles for the arrow. */
	arrowBase?: string;
	/** Set background styles for the arrow. */
	arrowBackground?: string;
	/** Provide arbitrary styles for the arrow. */
	arrowClasses?: string;

	// Snippets ---
	/** Provide the the trigger element, such as a button. */
	trigger?: Snippet;
	/** Provide the template contents of the popover itself. */
	content?: Snippet;
}
