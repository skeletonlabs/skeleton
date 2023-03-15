<script lang="ts">
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
	/** xxx */
	export let maxHeight = `max-h-[200px]`;

	// Classes
	const cSelect = 'overflow-y-auto';
	const cOption = 'px-1.5 py-1 rounded-full hover:variant-filled-primary';

	// Local
	//let selection: Record<string, unknown>;

	function onSelection(selection: Record<string, unknown>) {
		/** @event {{ selection: Record<string, unknown> }} selection - Fire on option select. */
		dispatch('selection', { selection });
	}

	function isMatch(obj: Record<string, unknown>) {
		const keys = Object.keys(obj);
		let matched = false;
		keys.forEach((key) => {
			const stringyValue = JSON.stringify(obj[key]);
			matched = stringyValue.includes(input);
		});
		return matched;
	}

	function filterDefault(input: string, whitelist: Record<string, unknown>[]): Record<string, unknown>[] {
		return options.filter((row) => {
			/** Searching using options instead of row, so it doesn't matter what kind of KvP naming convetion is used. */
			if (options.some(isMatch) && whitelist.some(isMatch)) {
				/** Stringify adds "" to the start and end of the new string. Those add difficulty to the search, so we remove them. */
				const stringyValue = JSON.stringify(row.value).replaceAll('"', '');
				/**
				 * Grabs the first set of chars, that match the length of the input
				 * this prevents things like 'bar' matching 'bar' and 'foobar' when it should
				 * only match 'bar'.
				 */
				if (stringyValue.substring(0, input.length) === input) return row;
			}
		});
	}

	function filterExclude(input: string, whitelist: Record<string, unknown>[]): Record<string, unknown>[] {
		return options.filter((row) => {
			/** Return rows that don't match input, or return nothing if nothing matches. */
			if (options.some(isMatch) && whitelist.some(isMatch)) {
				/** Stringify adds "" to the start and end of the new string. Those add difficulty to the search, so we remove them. */
				const stringyValue = JSON.stringify(row.value).replaceAll('"', '');

				if (!stringyValue.includes(input) || stringyValue.substring(input.length) !== '') return row;
			} else return [];
		});
	}

	$: filteredOptions = () => {
		if (!input) return [...options];
		const inputFormatted = input.toLowerCase();
		// Filter based on mode
		switch (mode) {
			case 'exclude':
				return filterExclude(inputFormatted, whitelist);
			default:
				return filterDefault(inputFormatted, whitelist);
		}
	};

	// Reactive
	$: classesSelect = `${cSelect} ${element} ${$$props.class ?? ''}`;
	$: classesOption = `${cOption} ${maxHeight}`;
	// $: reactiveSize = filteredOptions().length < 4 ? filteredOptions.length : 4;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<div
	class="autocomplete overflow-y-auto {classesSelect}"
	{...prunedRestProps}
	role="listbox"
	aria-autocomplete="list"
	data-testid="autocomplete"
>
	{#each filteredOptions() as v}
		<div
			class="autocomplete-option {classesOption}"
			role="option"
			aria-selected={input === v.value ? true : false}
			tabindex="-1"
			on:click={() => onSelection(v)}
			on:keypress
		>
			<span class="pl-2 !text-base !text-current">
				{v.label}
			</span>
		</div>
	{/each}
</div>
