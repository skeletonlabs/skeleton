import type { Snippet } from 'svelte';

export interface PopoverProps {
	// Snippets ---
	/** Provide the the trigger eleemnt, such as a button. */
	trigger?: Snippet;
	/** Provide the template contents of the popover itself. */
	content?: Snippet;
}
