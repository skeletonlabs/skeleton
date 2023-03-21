<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// Types
	import type { AutocompleteOption } from './types';

	// Props
	/* Bind the search input value */
	export let input: string;
	/**
	 * Define values for the list
	 * @type {AutocompleteOption[]}
	 */
	export let options: AutocompleteOption[] = [];
	/**
	 * Provide whitelisted values
	 * @type {unknown[]}
	 */
	export let whitelist: unknown[] = [];
	/**
	 * Controls the display of filtered results.
	 * @type {'include' | 'exclude'}
	 */
	export let mode: 'include' | 'exclude' = 'include';
	/** Provide a HTML markup to display when no match is found. */
	export let emptyState: string = 'No Results Found.';
	// Props (region)
	/** Provide arbitrary classes to nav element. */
	export let regionNav: string = '';
	/** Provide arbitrary classes to each list. */
	export let regionList: string = 'list-nav';
	/** Provide arbitrary classes to each list item. */
	export let regionItem: string = '';
	/** Provide arbitrary classes to each button. */
	export let regionButton: string = 'w-full';

	// If whitelist is populated then filter options
	// Whitelist should include ONLY values
	if (whitelist.length) options = options.filter((option: AutocompleteOption) => whitelist.includes(option.value));

	function searchResults(): AutocompleteOption[] {
		// Create a local copy of options
		let _options = [...options];
		// Filter options
		_options = _options.filter((option: AutocompleteOption) => {
			// Format the input search value
			const inputFormatted = input.toLowerCase().trim();
			// Format the option object into a string of values
			const optionsFormatted = JSON.stringify(Object.values(option).map((o) => o.toLocaleLowerCase()));
			// Return results based on mode
			if (mode === 'include' && optionsFormatted.includes(inputFormatted)) return option;
			if (mode === 'exclude' && !optionsFormatted.includes(inputFormatted)) return option;
		});
		return _options;
	}

	function onSelection(option: AutocompleteOption) {
		/** @event {AutocompleteOption} selection - Fire on option select. */
		dispatch('selection', option);
	}

	// Filtered Options
	$: optionsFiltered = input ? searchResults() : options;

	// Reactive
	$: classsesBase = `${$$props.class ?? ''}`;
	$: classesNav = `${regionNav}`;
	$: classesList = `${regionList}`;
	$: classesItem = `${regionItem}`;
	$: classesButton = `${regionButton}`;
</script>

<div class="autocomplete {classsesBase}" data-testid="autocomplete">
	{#if optionsFiltered.length > 0}
		<nav class="autocomplete-nav {classesNav}">
			<ul class="autocomplete-list {classesList}">
				{#each optionsFiltered as option}
					<li class="autocomplete-item {classesItem}">
						<button class="autocomplete-button {classesButton}" type="button" on:click={() => onSelection(option)} on:click on:keypress>
							{@html option.label}
						</button>
					</li>
				{/each}
			</ul>
		</nav>
	{:else}
		<div>{emptyState}</div>
	{/if}
</div>
