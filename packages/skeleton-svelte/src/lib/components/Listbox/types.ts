import type { Classes, Snippet } from '$lib/internal/types.js';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

export interface ListboxContext {
	readonly id: string;
	readonly name: string;
	readonly select: (value: string) => void;
	readonly deselect: (value: string) => void;
	readonly isSelected: (value: string) => boolean;
}

export interface ListboxProps extends Classes, Snippet, HTMLAttributes<HTMLDivElement> {
	/** Set the item name. */
	name?: string;
	/** The value of the selected item(s). */
	value?: string | string[];
	/** Whether multiple items can be selected. */
	multiple?: boolean;
}

export interface ListboxItemProps
	extends Classes,
		Classes<'lead'>,
		Classes<'trail'>,
		Snippet,
		Snippet<'lead'>,
		Snippet<'trail'>,
		HTMLButtonAttributes {
	/** Set the item value. */
	value: string;
}
