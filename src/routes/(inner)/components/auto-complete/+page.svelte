<script lang="ts">
	import AutoComplete from '$lib/components/AutoComplete/AutoComplete.svelte';
	// import { autoComplete } from '$lib/components/AutoComplete/autoComplete';
	// import type { AutocompleteSettings } from '$lib/components/AutoComplete/types';

	// let actionSettings = {
	// 	event: 'click',
	// 	target: 'autocomplete'
	// } satisfies AutocompleteSettings;

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
		{ label: 'Foo', value: 'Foo' },
		{ label: 'Bar', value: 'Bar' }
	];

	function onSelection(event: any): void {
		// console.log('selection', event.detail);
		searchValue = event.detail.value;
	}
</script>

<div class="page-container">
	<label class="label space-y-2" for="autocomplete-search">
		<h3>Via Input</h3>
		<!-- use:autoComplete={actionSettings} -->
		<input
			class="input autocomplete"
			type="search"
			name="autocomplete-search"
			bind:value={searchValue}
			placeholder="Begin typing to filter..."
		/>
		<AutoComplete bind:input={searchValue} options={anythingList} on:selection={onSelection} />
	</label>
</div>
