<script lang="ts">
	import { stringify } from "postcss";
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
		const inputFormatted = input.toLowerCase();
		let matched = false;

		keys.forEach((key) => {
			const stringyValue = JSON.stringify(obj[key]).replaceAll('"','').toLowerCase();
			matched = stringyValue.includes(inputFormatted);
		});

		return matched;
	}

	function filter(input: string, whitelist: Record<string, unknown>[], mode?: string): Record<string, unknown>[] {
		return options.filter((row) => {
			/** Searching using options instead of row, so it doesn't matter what kind of KvP naming convetion is used. */
			if(options.some(isMatch) && whitelist.some(isMatch)){
				const keys = Object.keys(row);
				let matched = false;
	
				keys.map((key) => {
					/** Stringify adds "" to the start and end of the new string. Those add difficulty to the search, so we remove them. */
					const value = JSON.stringify(row[key]).replaceAll('"','').toLowerCase();
	
					switch (mode) {
						case 'exclude':
							/** Prevents matching when words from letters that aren't at from the start of the string to the inputs length */
							if(value.substring(0, input.length) !== input || value.substring(input.length) !== '') 
								matched = true;
						break;
						default:
							/** Prevents matching when words from letters that aren't at from the start of the string to the inputs length */
							if(value.substring(0, input.length) === input) 
								matched = true;
						break;
					}
					
				});
	
				if(matched) return row;
			}
		});	
	}

	//NOTE: Chris - I feel like we can remove these individual functions? I have the functionality so similar for filtering, the only difference is if the conditional check that determines when it needs returned.
	// function filterDefault(input: string, whitelist: Record<string, unknown>[]): Record<string, unknown>[] {
	// 	return options.filter((row) => {
	// 		/** Searching using options instead of row, so it doesn't matter what kind of KvP naming convetion is used. */
	// 		if(options.some(isMatch) && whitelist.some(isMatch)){
	// 			const keys = Object.keys(row);
	// 			let matched = false;
	
	// 			keys.map((key) => {
	// 				/** Stringify adds "" to the start and end of the new string. Those add difficulty to the search, so we remove them. */
	// 				const value = JSON.stringify(row[key]).replaceAll('"','').toLowerCase();
	
	// 				/**
	// 				 * Grabs the first set of chars, that match the length of the input
	// 				 * this prevents things like 'bar' matching 'bar' and 'foobar' when it should
	// 				 * only match 'bar'.
	// 				*/
	// 				if(value.substring(0, input.length) === input) matched = true;
	// 			});
	
	// 			if(matched) return row;
	// 		}
	// 	});
	// }
	
	// function filterExclude(input: string, whitelist: Record<string, unknown>[]): Record<string, unknown>[] {
	// 	return options.filter((row) => {
	// 		/** Searching using options instead of row, so it doesn't matter what kind of KvP naming convetion is used. */
	// 		if (options.some(isMatch) && whitelist.some(isMatch)) {
	// 			const keys = Object.keys(row);
	// 			let matched = false;
	
	// 			keys.map((key) => {
	// 				/** Stringify adds "" to the start and end of the new string. Those add difficulty to the search, so we remove them. */
	// 				const value = JSON.stringify(row[key]).replaceAll('"','').toLowerCase();
	
	// 				/**
	// 				 * Grabs the first set of chars, that match the length of the input
	// 				 * this prevents things like 'bar' matching 'bar' and 'foobar' when it should
	// 				 * only match 'bar'.
	// 				*/
	// 				if(value.substring(0, input.length) !== input || value.substring(input.length) !== '') matched = true;
	// 			});
	
	// 			if(matched) return row;
	// 		} else return [];
	// 	});
	// }

	$: filteredOptions = () => {
		if (!input) return [...options];
		const inputFormatted = input.toLowerCase();

		return filter(inputFormatted, whitelist, mode);
	};

	// Reactive
	$: classesSelect = `${cSelect} ${element} ${$$props.class ?? ''}`;
	$: classesOption = `${cOption} ${maxHeight}`;

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
