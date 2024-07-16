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
	name: string;
	/** The value of the selected item(s). */
	value?: string | string[];
	/** Whether multiple items can be selected. */
	multiple?: boolean;

	// Root ---
	/** Set the base classes. */
	base?: string;
	/** Set the gap classes. */
	gap?: string;
	/** Set the overflow classes. */
	overflow?: string;
	/** Set padding classes. */
	padding?: string;
	/** Set border classes. */
	border?: string;
	/** Set radii classes. */
	rounded?: string;
	/** Set arbitrary classes. */
	classes?: string;

	// Snippets ---
	/** Set the default Snippet */
	children?: Snippet;
}

export interface ListboxItemProps extends HTMLButtonAttributes {
	/** Set the item value. */
	value: string;

	// Root ---
	/** Set the base classes. */
	base?: string;
	/** Set padding classes. */
	padding?: string;
	/** Set radii classes. */
	rounded?: string;
	/** Set selected classes. */
	selected?: string;
	/** Set arbitrary classes. */
	classes?: string;

	// Lead ---
	/** Set the lead base classes */
	leadBase?: string;
	/** Set the lead arbitrary classes */
	leadClasses?: string;

	// Lead ---
	/** Set the trail base classes */
	trailBase?: string;
	/** Set the trail arbitrary classes */
	trailClasses?: string;

	// Snippets ---
	/** Set the default Snippet */
	children?: Snippet;
	/** Set the lead Snippet */
	lead?: Snippet;
	/** Set the trail Snippet */
	trail?: Snippet;
}
