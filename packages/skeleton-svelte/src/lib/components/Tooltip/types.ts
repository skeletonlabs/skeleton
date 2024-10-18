import type { Snippet } from 'svelte';
import * as tooltip from '@zag-js/tooltip';

export interface TooltipProps extends Omit<tooltip.Context, 'id' | 'open'> {
	/** Set the open state of the tooltip. */
	open?: boolean;

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

	// Snippets ---
	/** Provide the the trigger element, such as a button. */
	trigger?: Snippet;
	/** Provide the template contents of the tooltip itself. */
	content?: Snippet;
}
