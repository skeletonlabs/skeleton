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

	// Classes
	const cBase = 'list-nav';
	const cButton = 'w-full';

	function onSelection(selection: Record<string, unknown>) {
		/** @event {{ selection: Record<string, unknown> }} selection - Fire on option select. */
		dispatch('selection', { selection });
	}

	function isMatch(obj: Record<string, unknown>) {
		const inputFormatted = input.toLowerCase();
		let matched = false;
		Object.values(obj).forEach((objValue) => {
			const stringyValue = JSON.stringify(objValue).replaceAll('"', '').toLowerCase();
			matched = stringyValue.includes(inputFormatted);
		});
		return matched;
	}

	function filter(input: string, whitelist: Record<string, unknown>[], mode?: string): Record<string, unknown>[] {
		return options.filter((row) => {
			/** Searching using options instead of row, so it doesn't matter what kind of KvP naming convetion is used. */
			if (options.some(isMatch) && whitelist.some(isMatch)) {
				const keys = Object.keys(row);
				let matched = false;

				keys.map((key) => {
					/** Stringify adds "" to the start and end of the new string. Those add difficulty to the search, so we remove them. */
					const value = JSON.stringify(row[key]).replaceAll('"', '').toLowerCase();

					switch (mode) {
						case 'exclude':
							/** Prevents matching when words from letters that aren't at from the start of the string to the inputs length */
							if (value.substring(0, input.length) !== input || value.substring(input.length) !== '') matched = true;
							break;
						default:
							/** Prevents matching when words from letters that aren't at from the start of the string to the inputs length */
							if (value.substring(0, input.length) === input) matched = true;
							break;
					}
				});

				if (matched) return row;
			}
		});
	}

	$: filteredOptions = () => {
		if (!input) return [...options];
		const inputFormatted = input.toLowerCase();
		return filter(inputFormatted, whitelist, mode);
	};

	// Reactive
	$: classesSelect = `${cBase} ${$$props.class ?? ''}`;
	$: classesOption = `${cButton}`;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<nav class="autocomplete {classesSelect}" data-testid="autocomplete">
	<ul role="listbox" aria-autocomplete="list">
		{#each filteredOptions() as v}
			<li>
				<button
					class="autocomplete-option {classesOption}"
					role="option"
					aria-selected={input === v.value}
					tabindex="0"
					on:click={() => onSelection(v)}
					on:click
					on:keypress
				>
					{@html v.label}
				</button>
			</li>
		{/each}
	</ul>
</nav>
