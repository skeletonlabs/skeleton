import type { Snippet } from 'svelte';
import type { Base, Children } from '$lib/internal/types.js';
import type { HTMLButtonAttributes } from 'svelte/elements';

export interface ListboxContext {
	readonly id: string;
	readonly toggle: (value: string) => void;
	readonly isSelected: (value: string) => boolean;
}

export interface ListboxProps extends Base, Base<'test'>, Children {
	/** The value of the selected item(s). */
	value?: string | string[];
	/** Whether multiple items can be selected. */
	multiple?: boolean;
}

export interface ListboxItemProps extends Base, Base<'lead'>, Base<'trail'>, Children, HTMLButtonAttributes {
	/** Set the item name. */
	name?: string;
	/** Set the item value. */
	value: string;
	/** The lead snippet. */
	lead?: Snippet;
	/** The trail snippet. */
	trail?: Snippet;
}
