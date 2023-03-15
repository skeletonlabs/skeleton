<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import Autocomplete from '$lib/components/Autocomplete/Autocomplete.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Popups
	import { popup } from '$lib/utilities/Popup/popup';
	import type { PopupSettings } from '$lib/utilities/Popup/types';
	// Sveld
	import sveldAutocomplete from '$lib/components/Autocomplete/Autocomplete.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Autocomplete',
		description: 'Displays a list of suggested options.',
		imports: ['Autocomplete'],
		// types: ['Template'],
		source: 'components/Autocomplete',
		aria: 'https://www.w3.org/WAI/ARIA/apg/',
		components: [{ sveld: sveldAutocomplete }]
	};

	// Local
	let popupSettings: PopupSettings = {
		event: 'click',
		target: 'popupAutocomplete',
		placement: 'bottom',
		// Close on click:
		closeQuery: '.autocomplete-option'
	};
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
		console.log(event);
		searchValue = event.detail.selection.label;
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="text-token w-[280px]">
					<!-- Input -->
					<input
						class="input autocomplete"
						type="search"
						name="autocomplete-search"
						bind:value={searchValue}
						placeholder="Begin typing to filter..."
						use:popup={popupSettings}
					/>
					<!-- Autocomplete -->
					<div class="w-[280px]" data-popup="popupAutocomplete">
						<Autocomplete bind:input={searchValue} mode="fuzzy" options={anythingList} on:selection={onSelection} />
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="html" code={`(code snippet)`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Title 1</h2>
			<p>Describe how to use the feature.</p>
			<CodeBlock language="html" code={`(code)`} />
		</section>
		<section class="space-y-4">
			<h2>Title 2</h2>
			<p>Describe how to use the feature.</p>
			<CodeBlock language="html" code={`(code)`} />
		</section>
	</svelte:fragment>
</DocsShell>
