<script lang="ts">
	import AutoComplete from '$lib/components/AutoComplete/AutoComplete.svelte';
	import { autoComplete } from '$lib/components/AutoComplete/autoComplete';
	import type { AutocompleteSettings } from '$lib/components/AutoComplete/types';

	// Local
	let inputValue = '';
	let anythingList: Record<string, unknown>[] = [
		{ label: 'Foo', value: 'Foo' },
		{ label: 'Bar', value: 'Bar' },
		{ label: 'FooBar', value: 'FooBar' },
		{ label: 'Fizz', value: 'Fizz' },
		{ label: 'Buzz', value: 'Buzz' },
		{ label: 'FizzBuzz', value: 'FizzBuzz' }
	];

	let actionSettings = {
		event: 'click',
		target: 'autocomplete'
	} satisfies AutocompleteSettings;

	let whitelist = [
		{ label: 'Foo', value: 'Foo' },
		{ label: 'Bar', value: 'Bar' }
	];

	//Maybe add this into the actions as well?
	function onValueSelect(event: CustomEvent) {
		inputValue = event.detail.selected.label;
	}
</script>

<div class="page-container">
	<label class="label" for="autocomplete-search">
		<h3>Via Input</h3>
		<input
			class="input autocomplete"
			use:autoComplete={actionSettings}
			type="search"
			name="autocomplete-search"
			bind:value={inputValue}
			placeholder="Begin typing to filter..."
		/>
		<AutoComplete bind:searchTerm={inputValue} values={anythingList} mode="fuzzy" on:select={onValueSelect} />
	</label>
</div>
