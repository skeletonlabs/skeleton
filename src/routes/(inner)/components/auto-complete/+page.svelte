<script lang="ts">
	import { storeOnboardMethod } from '$docs/stores/stores';
	import AutoComplete from '$lib/components/AutoComplete/AutoComplete.svelte';

	// Local
	let searchValue = '';
	
	let anythingList: Record<string, unknown>[] = [
		{ label: 'Foo', value: 'foo' },
		{ label: 'Bar', value: 'bar' },
		{ label: 'FooBar', value: 'foobar' },
		{ label: 'Fizz', value: 'fizz' },
		{ label: 'Buzz', value: 'buzz' },
		{ label: 'FizzBuzz', value: 'fizzbuzz' }
	];

	let whitelist = [
		{ label: 'Foo', value: 'foo' },
		{ label: 'Bar', value: 'bar' }
	];

	function onSelection(event: any): void {
		console.log(event)
		searchValue = event.detail.selection.label;
	}
</script>


<div class="page-container">
	<label class="label space-y-2" for="autocomplete-search">
		<h3>Via Input</h3>
		<input
			class="input autocomplete"
			type="search"
			name="autocomplete-search"
			bind:value={searchValue}
			placeholder="Begin typing to filter..."
		/>
		<AutoComplete bind:input={searchValue} mode="fuzzy" options={anythingList} on:selection={onSelection} />
	</label>
</div>
