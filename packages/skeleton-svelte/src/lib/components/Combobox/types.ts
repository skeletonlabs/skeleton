import type { Snippet } from 'svelte';
import * as combobox from '@zag-js/combobox';

export interface ComboboxProps extends Omit<combobox.Context, 'id' | 'collection'> {
	data?: { label: string; value: string }[];

	// Base ---
	base?: string;
	width?: string;
	classes?: string;

	// Label ---
	labelBase?: string;
	labelText?: string;
	labelClasses?: string;

	// Input Group ---
	inputGroupBase?: string;
	inputGroupInput?: string;
	inputGroupButton?: string;
	inputGroupArrow?: string;
	inputGroupClasses?: string;

	// Content ---
	/** Set base styles for the content. */
	contentBase?: string;
	/** Set background styles for the content. */
	contentBackground?: string;
	/** Provide arbitrary styles for the content. */
	contentClasses?: string;

	// List ---
	/** Set base styles for the list. */
	listBase?: string;
	/** Provide arbitrary styles for the list. */
	listClasses?: string;

	// Option ---
	/** Set base styles for the option. */
	optionBase?: string;
	/** Provide arbitrary styles for the option. */
	optionClasses?: string;

	// Snippets ---
	/** Provide the input label text. */
	label?: Snippet;
	/** Provide a custom arrow icon. */
	arrow?: Snippet;
}
