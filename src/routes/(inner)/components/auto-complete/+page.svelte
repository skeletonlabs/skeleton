<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import AutoComplete from '$lib/components/AutoComplete/AutoComplete.svelte';

	import sveldAutoComplete from '$lib/components/AutoComplete/AutoComplete.svelte?raw&sveld';

	type ValidValues = { label: string; value: string }[];

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Auto Complete',
		description: 'Provide auto complete through fuzzy searching from a set of values.',
		imports: ['AutoComplete'],
		types: ['Template'],
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/forms'],
		source: 'components/AutoComplete',
		components: [{ sveld: sveldAutoComplete }]
	};

	// Local
	let inputValue = '';
	let anythingList: ValidValues = [
		{ label: 'Foo', value: 'foo' },
		{ label: 'Bar', value: 'bar' },
		{ label: 'FooBar', value: 'foobar' },
		{ label: 'Fizz', value: 'fizz' },
		{ label: 'Buzz', value: 'buzz' },
		{ label: 'FizzBuzz', value: 'FizzBuzz' }
	];

	function onValueSelect(event: CustomEvent): void {
		inputValue = event.detail.selected.label;
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<div class="page-container">
		<label class="label" for="fuzzy-search">
			<h3>Via Input</h3>
			<input class="input" type="search" name="fuzzy-search" bind:value={inputValue} placeholder="Begin typing to filter..." />
		</label>
		<AutoComplete bind:searchTerm={inputValue} values={anythingList} on:select={onValueSelect} />
	</div>
</DocsShell>
