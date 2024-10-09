import type { Snippet } from 'svelte';
import * as popover from '@zag-js/popover';

export interface PopoverProps extends Omit<popover.Context, 'id' | 'open'> {
	open?: boolean;
	arrow?: boolean;

	// Arrow ---
	arrowBase?: string;
	arrowBackground?: string;
	arrowClasses?: string;

	// Snippets ---
	/** Provide the the trigger eleemnt, such as a button. */
	trigger?: Snippet;
	/** Provide the template contents of the popover itself. */
	content?: Snippet;
}
