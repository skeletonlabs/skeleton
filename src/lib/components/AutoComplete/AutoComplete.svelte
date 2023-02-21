<script lang="ts">
	import type { CssClasses } from '$lib';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/** Define variable for live filtering */
	export let searchTerm: string;
	/** Define values for the list */
	export let values: { label: string; value: string }[];
	/**
	 * Provide a whitelist of accepted values.
	 * Defaults to all values provided by the user.
	 * @type {{ label: string, value: string }[]}
	 */
	export let whitelist: { label: string, value: string }[] = [...values];
	/** Define mode for determining how filtering works: fuzzy, exclude (takes search string of CVS and excludes them from the list)*/
	export let mode: string;

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

	/** Fuzzy filters values based on the search term. Case insensitive. */
	$: filteredValues = () => {
		const filterable = [...values];
		if (!searchTerm) return [...values];

		if(mode === "exclude"){
			return [...filterable.filter((row) => {
				const rowFormatted = JSON.stringify(row).toLowerCase();
	
				if(!rowFormatted.includes(searchTerm.toLowerCase())) return row;
			})];
		}
		else{
			return filterable.filter((row) => {
					const rowFormatted = JSON.stringify(row).toLowerCase();
		
					if (rowFormatted.includes(searchTerm.toLowerCase())) return row;
			});
		}
	};

	function onSelectHandler(selected: { label: string; value: string }): void {
		/** @event {{ event: ClickEvent }} click - When an item is clicked. */
		dispatch('select', { selected });
	}

	// Reactive
	$: classesBase = `${cBase} ${padding} ${rounded} ${maxHeight} ${overflowY} ${background} ${$$props.class ?? ''}`;
</script>

<div class="autocomplete list {classesBase}">
	{#each filteredValues() as value}
		<div
			class="autocomplete-item flex-auto hover:{itemHover}"
			on:click={() => {
				onSelectHandler(value);
			}}
			on:keypress
		>
			{value.label}
		</div>
	{/each}
</div>
