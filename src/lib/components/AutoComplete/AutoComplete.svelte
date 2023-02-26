<script lang="ts">
	import type { CssClasses } from '$lib';
	import type { Mode } from '$lib/components/AutoComplete/types';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// Props
	/** Define variable for live filtering */
	export let searchTerm: string;
	/** Define values for the list */
	export let values: Record<string, unknown>[];
	/** Provide a whitelist of accepted values. */
	export let whitelist: Record<string, unknown>[] = [...values];
	/**
	 * Define mode for determining how filtering works: fuzzy, exclude.
	 * @type {Mode}
	 */
	export let mode: Mode = 'fuzzy';

	// Props (styles)
	/** Provide classes to set padding styles. */
	export let padding: CssClasses = 'p-2';
	/** Provide classes to set border radius styles. */
	export let rounded: CssClasses = 'rounded-container-token';
	/** Provide classes to set max height styles. */
	export let maxHeight: CssClasses = 'max-h-[100px]';

	// Props (items)
	/** Provide classes or a variant to style the hover. */
	export let itemHover: CssClasses = 'variant-soft-primary';
	/** Provide classes to set values background styles. */
	export let background: CssClasses = 'variant-ringed-primary';
	/** Provide classes to set values for overflow styles. */
	export let overflowY: CssClasses = 'overflow-y-auto';

	// Classes
	const cBase = 'cursor-pointer';

	function onSelectHandler(selected: Record<string, unknown>): void {
		/** @event {{ event: ClickEvent }} click - When an item is clicked. */
		dispatch('select', { selected });
	}

	$: filteredValues = () => {
		if (!searchTerm) return [...values];

		//TODO: Want to include the ability to include "separators" ex: user enters - foo, bar, foobar:
		//		list only has fizz, buzz, and fizzbuzz left for the user to pick
		//TODO: Use regex match instead of includes, this should work for the separators as well because it returns and array and I can ignore the separator value in the match
		if (mode === 'exclude') {
			return values.filter((row) => {
				const rowFormatted = JSON.stringify(row).toLowerCase();
				const whiteListFormatted = JSON.stringify(whitelist).toLowerCase();

				if (!rowFormatted.includes(searchTerm.toLowerCase()) && whiteListFormatted.includes(searchTerm.toLowerCase())) return row;
			});
		} else {
			return values.filter((row) => {
				const rowFormatted = JSON.stringify(row).toLowerCase();
				const whiteListFormatted = JSON.stringify(whitelist).toLowerCase();

				if (rowFormatted.includes(searchTerm.toLowerCase()) && whiteListFormatted.includes(searchTerm.toLowerCase())) return row;
			});
		}
	};

	// Reactive
	$: classesBase = `${cBase} ${padding} ${rounded} ${maxHeight} ${overflowY} ${background} ${$$props.class ?? ''}`;
</script>

<div class="autocomplete list {classesBase} hidden" data-autocomplete="autocomplete" data-testid="auto-complete">
	{#each filteredValues() as value, index}
		<div
			tabindex="0"
			class="autocomplete-item flex-auto hover:{itemHover} focus:{itemHover}"
			on:click={() => {
				onSelectHandler(value);
			}}
			on:keypress
		>
			{value.label}
		</div>
	{/each}
</div>
