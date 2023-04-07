<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	const dispatch = createEventDispatcher();

	// Types
	import type { AutocompleteOption } from './types';

	// Props
	/**
	 * Bind the input value.
	 * @type {unknown}
	 */
	export let input: unknown = undefined;
	/**
	 * Define values for the list
	 * @type {AutocompleteOption[]}
	 */
	export let options: AutocompleteOption[] = [];
	/** Provide a HTML markup to display when no match is found. */
	export let emptyState: string = 'No Results Found.';
	/** Set the animation duration. Use zero to disable. */
	export let duration: number = 200;
	// Props (region)
	/** Provide arbitrary classes to nav element. */
	export let regionNav: string = '';
	/** Provide arbitrary classes to each list. */
	export let regionList: string = 'list-nav';
	/** Provide arbitrary classes to each list item. */
	export let regionItem: string = '';
	/** Provide arbitrary classes to each button. */
	export let regionButton: string = 'w-full';
	/** Provide arbitrary classes to empty message. */
	export let regionEmpty: string = 'text-center';

	// DEPRICATED:
	/**
	 * DEPRICATED: use allowlist instead
	 * @type {unknown[]}
	 */
	export let whitelist: unknown[] = [];
	/**
	 * DEPRICATED: use denylist instead
	 * @type {unknown[]}
	 */
	export let blacklist: unknown[] = [];

	// REPLACEMENTS:
	/**
	 * Provide allowlist values
	 * @type {unknown[]}
	 */
	export let allowlist: unknown[] = whitelist;
	/**
	 * Provide denylist values
	 * @type {unknown[]}
	 */
	export let denylist: unknown[] = blacklist;

	// Local
	let listedOptions = options;

	// Allowed Options
	function filterByAllowed(): void {
		if (!allowlist.length) return;
		listedOptions = [...options].filter((option: AutocompleteOption) => allowlist.includes(option.value));
	}

	// Denied Options
	function filterByDenied(): void {
		if (!denylist.length) return;
		const toBlacklist = new Set(denylist);
		listedOptions = [...options].filter((option: AutocompleteOption) => !toBlacklist.has(option.value));
	}

	function filterOptions(): AutocompleteOption[] {
		// Create a local copy of options
		let _options = [...listedOptions];
		// Filter options
		_options = _options.filter((option: AutocompleteOption) => {
			// Format the input search value
			const inputFormatted = String(input).toLowerCase().trim();
			// Format the option
			let optionFormatted = JSON.stringify([option.label, option.value, option.keywords]).toLowerCase();
			// Check Match
			if (optionFormatted.includes(inputFormatted)) return option;
		});
		return _options;
	}

	function onSelection(option: AutocompleteOption) {
		/** @event {AutocompleteOption} selection - Fire on option select. */
		dispatch('selection', option);
	}

	// DEPRICATED:
	$: if (whitelist) {
		allowlist = whitelist;
		filterByAllowed();
	}
	$: if (blacklist) {
		denylist = blacklist;
		filterByDenied();
	}
	// REPLACEMENTS:
	$: if (allowlist) filterByAllowed();
	$: if (denylist) filterByDenied();
	$: optionsFiltered = input ? filterOptions() : listedOptions;
	// Reactive
	$: classsesBase = `${$$props.class ?? ''}`;
	$: classesNav = `${regionNav}`;
	$: classesList = `${regionList}`;
	$: classesItem = `${regionItem}`;
	$: classesButton = `${regionButton}`;
	$: classesEmtpy = `${regionEmpty}`;
</script>

<div class="autocomplete {classsesBase}" data-testid="autocomplete">
	{#if optionsFiltered.length > 0}
		<nav class="autocomplete-nav {classesNav}">
			<ul class="autocomplete-list {classesList}">
				{#each optionsFiltered as option, i (option)}
					<li class="autocomplete-item {classesItem}" animate:flip={{ duration }} transition:slide|local={{ duration }}>
						<button class="autocomplete-button {classesButton}" type="button" on:click={() => onSelection(option)} on:click on:keypress>
							{@html option.label}
						</button>
					</li>
				{/each}
			</ul>
		</nav>
	{:else}
		<div class="autocomplete-empty {classesEmtpy}">{emptyState}</div>
	{/if}
</div>
