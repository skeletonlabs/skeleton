<script lang="ts">
	import type { CssClasses } from '$lib';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/** Define variable for live filtering */
	export let searchTerm: string;
	/** Define values for the list */
	export let values: { label: string; value: string }[];

	// Props (styles)
	/** Provide classes or a variant to style the chips. */
	export let hover: CssClasses = 'variant-soft-primary';
	/** Provide classes to set padding styles. */
	export let padding: CssClasses = 'p-1';
	/** Provide classes to set border radius styles. */
	export let rounded: CssClasses = 'rounded-container-token';

	// NOTE: Temporarily here, these will go in a Css files to match conventions for skeleton
	/** Provide classes to set max height styles. */
	export let maxHeight: CssClasses = 'max-h-20';
	/** Provide classes to set values background styles. */
	export let background: CssClasses = 'variant-ringed-primary';

	// Classes
	const cBase = 'cursor-pointer';

	/** Fuzzy filters values based on the search term. Case insensitive. */
	$: filteredValues = () => {
		if (!searchTerm) return [...values];

		return [...values].filter((row) => {
			const rowFormatted = JSON.stringify(row).toLowerCase();

			if (rowFormatted.includes(searchTerm.toLowerCase())) return row;
		});
	};

	function onSelectHandler(selected: { label: string; value: string }): void {
		/** @event {{ event: ClickEvent }} click - When an item is clicked. */
		dispatch('select', { selected });
	}

	// Reactive
	$: classesBase = `${cBase} ${padding} ${rounded} ${$$props.class ?? ''}`;
</script>

<div class="autocomplete {classesBase} {maxHeight} overflow-y-auto {background}">
	{#each filteredValues() as value}
		<div
			class="item hover:{hover} {padding}"
			on:click={() => {
				onSelectHandler(value);
			}}
			on:keypress
		>
			{value.label}
		</div>
	{/each}
</div>
