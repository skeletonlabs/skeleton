<script lang="ts">
	import AutoComplete from '$lib/components/AutoComplete/AutoComplete.svelte';

	type ValidValues = { label: string; value: string }[];

	// Local
	let inputValue = '';
	let anythingList: ValidValues = [
		{ label: 'Foo', value: 'Foo' },
		{ label: 'Bar', value: 'Bar' },
		{ label: 'FooBar', value: 'FooBar' },
		{ label: 'Fizz', value: 'Fizz' },
		{ label: 'Buzz', value: 'Buzz' },
		{ label: 'FizzBuzz', value: 'FizzBuzz' }
	];

	let whitelist = [{label: "Foo", value: "Foo"}, {label: "Bar", value: "Bar"}]

	function onValueSelect(event: CustomEvent): void {
		inputValue = event.detail.selected.label;
	}
</script>

<div class="page-container">
	<label class="label" for="autocomplete-search">
		<h3>Via Input</h3>
		<input class="input" type="search" name="autocomplete-search" bind:value={inputValue} placeholder="Begin typing to filter..." />
		<AutoComplete bind:searchTerm={inputValue} values={anythingList} mode="exclude" on:select={onValueSelect} />
	</label>
</div>
