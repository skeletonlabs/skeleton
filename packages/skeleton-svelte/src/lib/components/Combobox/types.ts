import type { Snippet } from 'svelte';
import * as combobox from '@zag-js/combobox';

export interface ComboboxProps extends Omit<combobox.Context, 'id' | 'label' | 'collection'> {
	data?: { label: string; value: string }[];
	label?: string;

	// Base ---
	/** Set base classes for the root element. */
	base?: string;
	/** Set width classes for the root element. */
	width?: string;
	/** Provide arbitrary classes for the root element. */
	classes?: string;

	// Label ---
	/** Set base classes for the label. */
	labelBase?: string;
	/** Set text classes for the label. */
	labelText?: string;
	/** Provide arbitrary classes for the label. */
	labelClasses?: string;

	// Input Group ---
	/** Set base classes for the input group. */
	inputGroupBase?: string;
	/** Set input classes for the input group. */
	inputGroupInput?: string;
	/** Set button classes for the input group. */
	inputGroupButton?: string;
	/** Set arrow classes for the input group. */
	inputGroupArrow?: string;
	/** Provide arbitrary classes for the input group. */
	inputGroupClasses?: string;

	// Content ---
	/** Set base classes for the content. */
	contentBase?: string;
	/** Set background classes for the content. */
	contentBackground?: string;
	/** Provide arbitrary classes for the content. */
	contentClasses?: string;

	// List ---
	/** Set base classes for the list. */
	listBase?: string;
	/** Provide arbitrary classes for the list. */
	listClasses?: string;

	// Option ---
	/** Set base classes for the option. */
	optionBase?: string;
	/** Set hover classes for the option. */
	optionHover?: string;
	/** Provide arbitrary classes for the option. */
	optionClasses?: string;

	// Snippets ---
	/** Provide a custom arrow icon. */
	arrow?: Snippet;
}
