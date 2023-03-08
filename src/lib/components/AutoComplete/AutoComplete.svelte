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
	/** Set the height of the list*/
	//export let height = 'h-36';
	//export let size = filteredOptions().length <= 4 ? filteredOptions.length : 4;

	// Classes
	const cBase = 'h-36';

	// Local
	//let selection: Record<string, unknown>;

	function onSelection(selection: Record<string, unknown>) {
		/** @event {{ selection: Record<string, unknown> }} selection - Fire on option select. */
		dispatch('selection', { selection });
	}
	
	function isMatch(obj: Record<string, unknown>){
		const keys = Object.keys(obj);
		let matched = false;

		keys.forEach(key => {
			const stringyValue = JSON.stringify(obj[key]);
			matched = stringyValue.includes(input);
		});

		return matched;
	}

	function filterDefault(input: string, whitelist: Record<string, unknown>[]): Record<string, unknown>[] {
		return options.filter((row) => {
			/** Searching using options instead of row, so it doesn't matter what kind of KvP naming convetion is used. */
			if(options.some(isMatch) && whitelist.some(isMatch)){
				/** Stringify adds "" to the start and end of the new string. Those add difficulty to the search, so we remove them. */
				const stringyValue = JSON.stringify(row.value).replaceAll('"', "");
				/** 
				 * Grabs the first set of chars, that match the length of the input
				 * this prevents things like 'bar' matching 'bar' and 'foobar' when it should
				 * only match 'bar'.
				 */
				if(stringyValue.substring(0, input.length) === input) return row;
			}
		});
	}

	function filterExclude(input: string, whitelist: Record<string, unknown>[]): Record<string, unknown>[] {
		return options.filter((row) => {
			/** Return rows that don't match input, or return nothing if nothing matches. */
			if (options.some(isMatch) && whitelist.some(isMatch)){
				/** Stringify adds "" to the start and end of the new string. Those add difficulty to the search, so we remove them. */
				const stringyValue = JSON.stringify(row.value).replaceAll('"', '');
				
				if(!stringyValue.includes(input) || stringyValue.substring(input.length) !== "")
					return row;
			} 
			else return [];
		});
	}

	$: filteredOptions = () =>{
		if (!input) return [...options];

		const inputFormatted = input.toLowerCase();

		// Filter based on mode
		switch (mode) {
			case 'exclude':
				return filterExclude(inputFormatted, whitelist);
			default:
				return filterDefault(inputFormatted, whitelist);
		}

		/* 
		TODO:
		  - Want to include the ability to include "separators" ex: user enters - foo, bar, foobar:
		    list only has fizz, buzz, and fizzbuzz left for the user to pick
		  - Use regex match instead of includes, this should work for the separators as well
		    because it returns and array and I can ignore the separator input in the match
		*/
	}

	// Reactive
	$: classesBase = `${cBase} ${element} ${$$props.class ?? ''}`;
	$: reactiveSize = filteredOptions().length < 4 ? filteredOptions.length : 4;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<div 
	class="autocomplete overflow-y-auto {classesBase}"
	{...prunedRestProps}
	role="listbox"
	data-testid="auto-complete"
>
	{#each filteredOptions() as v, index}
		<div
			class="autocomplete-option px-1.5 py-1 rounded-full hover:variant-filled-primary"
			role="option"
			aria-selected={input === v.value ? true : false}
			aria-autocomplete="list"
			tabindex="-1"
			on:click={()=> onSelection(v)}
			on:keypress
		>
			<span class="pl-2 !text-base !text-current">
				{v.label}
			</span>
		</div>
	{/each}
</div>

<!-- <select
	class="autocomplete {classesBase}"
	size={$$props.size ?? reactiveSize}
	bind:value={selection}
	{...prunedRestProps}
	on:change={onChange}
	data-testid="auto-complete"
>
	<option class="contents" value="default" disabled={true}></option>

	{#each filteredOptions() as v}
		<option class="autocomplete-option" value={v}>{v.label}</option>
	{/each}
</select> -->