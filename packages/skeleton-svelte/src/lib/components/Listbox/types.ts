import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

export interface ListboxContext {
	readonly id: string;
	readonly name: string;
	readonly select: (value: string) => void;
	readonly deselect: (value: string) => void;
	readonly isSelected: (value: string) => boolean;
}

export interface ListboxProps extends HTMLAttributes<HTMLDivElement> {
	/** Set the item name. */
	name?: string;
	/** The value of the selected item(s). */
	value?: string | string[];
	/** Whether multiple items can be selected. */
	multiple?: boolean;
	/** Set the base classes. */
	base?: string;
	/** Set padding classes. */
	paddingClasses?: string;
	/** Set border classes. */
	borderClasses?: string;
	/** Set radii classes. */
	radiiClasses?: string;
	/** Set arbitrary classes. */
	classes?: string;
	/** Set the default Snippet */
	children?: Snippet;
}

export interface ListboxItemProps extends HTMLButtonAttributes {
	/** Set the item value. */
	value: string;
	/** Set the base classes. */
	base?: string;
	/** Set padding classes. */
	paddingClasses?: string;
	/** Set radii classes. */
	radiiClasses?: string;
	/** Set selected classes. */
	selectedClasses?: string;
	/** Set arbitrary classes. */
	classes?: string;
	/** Set the lead base classes */
	leadBase?: string;
	/** Set the lead arbitrary classes */
	leadClasses?: string;
	/** Set the trail base classes */
	trailBase?: string;
	/** Set the trail arbitrary classes */
	trailClasses?: string;
	/** Set the default Snippet */
	children?: Snippet;
	/** Set the lead Snippet */
	lead?: Snippet;
	/** Set the trail Snippet */
	trail?: Snippet;
}
