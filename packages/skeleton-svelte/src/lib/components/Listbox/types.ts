import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

export interface ListboxContext {
	readonly id: string;
	value: string | string[];
	readonly multiple: boolean;
	readonly toggle: (value: string) => void;
	readonly isSelected: (value: string) => boolean;
}

export interface ListboxProps {
	/** Whether multiple items can be selected. */
	multiple?: boolean;
	/** Set the parent base styles. */
	base?: string;
	/** Provide the parent a set of arbitrary classes. */
	classes?: string;
	/** The default snippet. */
	children?: Snippet;
}

export interface ListboxGroupProps {
	/** Set the group label. */
	label?: string;
	/** Set the group base styles. */
	base?: string;
	/** Provide the group a set of arbitrary classes. */
	classes?: string;
	/** Set the group label base styles. */
	labelBase?: string;
	/** Provide the group label a set of arbitrary classes. */
	labelClasses?: string;
	/** The default snippet. */
	children?: Snippet;
}

export interface ListboxItemProps extends HTMLButtonAttributes {
	/** Set the item name. */
	name?: string;
	/** Set the item value. */
	value: string;
	/** Set the item base styles. */
	base?: string;
	/** Provide the item a set of arbitrary classes. */
	classes?: string;
	/** Set the item lead base styles. */
	leadBase?: string;
	/** Provide the item lead a set of arbitrary classes. */
	leadClasses?: string;
	/** Set the item trail base styles. */
	trailBase?: string;
	/** Provide the item trail a set of arbitrary classes. */
	trailClasses?: string;
	/** The default snippet. */
	children?: Snippet;
	/** The lead snippet. */
	lead?: Snippet;
	/** The trail snippet. */
	trail?: Snippet;
}
