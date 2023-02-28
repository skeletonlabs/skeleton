<script lang="ts">
	// import type { CssClasses } from '$lib';
	// import type { Mode } from '$lib/components/AutoComplete/types';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// Props
	/** The binded input value. */
	export let input: string;
	/** Define values for the list */
	export let options: Record<string, unknown>[];
	/** Provide a whitelist of accepted options. */
	export let whitelist: Record<string, unknown>[] = [...options];
	/**
	 * Define filtering mode: fuzzy, exclude.
	 * @type 'exclude' | 'fuzzy'
	 */
	export let mode: 'exclude' | 'fuzzy' = 'fuzzy';

	// Props (select)
	/** Sets the Element class. Replace for headless mode. */
	export let element = 'select';
	/** Set the height based on number of options. Minimum 2. */
	export let size: number = 4;

	// Classes
	const cBase = 'h-auto';

	// Local
	let selection: Record<string, unknown>;

	function onChange() {
		/** @event {{ selection: Record<string, unknown> }} selection - Fire on option select. */
		dispatch('selection', selection);
	}

	function filterExclude(input: string, whitelist: string): Record<string, unknown>[] {
		return options.filter((row) => {
			const rowFormatted = JSON.stringify(row).toLowerCase();
			if (!rowFormatted.includes(input) && whitelist.includes(input)) return row;
		});
	}

	function filterDefault(input: string, whitelist: string): Record<string, unknown>[] {
		return options.filter((row) => {
			const rowFormatted = JSON.stringify(row).toLowerCase();
			if (rowFormatted.includes(input) && whitelist.includes(input)) return row;
		});
	}

	$: filteredOptions = () => {
		if (!input) return [...options];

		const inputFormatted = input.toLowerCase();
		const whitelistFormatted = JSON.stringify(whitelist).toLowerCase();

		// Filter based on mode
		switch (mode) {
			case 'exclude':
				return filterExclude(inputFormatted, whitelistFormatted);
			default:
				return filterDefault(inputFormatted, whitelistFormatted);
		}

		/* 
		TODO:
		  - Want to include the ability to include "separators" ex: user enters - foo, bar, foobar:
		    list only has fizz, buzz, and fizzbuzz left for the user to pick
		  - Use regex match instead of includes, this should work for the separators as well
		    because it returns and array and I can ignore the separator input in the match
		*/
	};

	// Reactive
	$: classesBase = `${cBase} ${element} ${$$props.class ?? ''}`;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<select
	class="autocomplete {classesBase}"
	{size}
	bind:value={selection}
	{...prunedRestProps}
	on:change={onChange}
	data-testid="auto-complete"
>
	{#each filteredOptions() as v}
		<option class="autocomplete-option" value={v}>{v.label}</option>
	{/each}
</select>
