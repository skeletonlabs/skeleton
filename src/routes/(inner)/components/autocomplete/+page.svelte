<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import Autocomplete from '$lib/components/Autocomplete/Autocomplete.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Popups
	// import { popup } from '$lib/utilities/Popup/popup';
	// import type { PopupSettings } from '$lib/utilities/Popup/types';
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
	// let popupSettings: PopupSettings = {
	// 	event: 'click',
	// 	target: 'popupAutocomplete',
	// 	placement: 'bottom',
	// 	// Close on click:
	// 	closeQuery: '.autocomplete-option'
	// };

	/** Values for basic example */
	let searchValue = '';

	let anythingList: Record<string, unknown>[] = [
		{ label: 'Foo', value: 'foo' },
		{ label: 'Bar', value: 'bar' },
		{ label: 'FooBar', value: 'foobar' },
		{ label: 'Fizz', value: 'fizz' },
		{ label: 'Buzz', value: 'buzz' },
		{ label: 'FizzBuzz', value: 'fizzbuzz' }
	];

	/** Values for whitelist example */
	let flavorSearchValue = '';

	let flavorList:Record<string, unknown>[] = [
		{ label: 'Vanilla', value: ' vanilla'},
		{ label: 'Chocolate', value: 'chocolate'},
		{ label: 'Strawberry', value: 'strawberry'},
		{ label: 'Neapolitan', value: 'neapolitan'},
	]

	let flavorWhitelist:Record<string, unknown>[] = [
		{ label: 'Strawberry', value: 'strawberry'},
		{ label: 'Neapolitan', value: 'neapolitan'},
	];


	/** On selection event to set value. */
	function onSelectionDefault(event: any): void {
		searchValue = event.detail.selection.label;
	}

	function onSelectionFlavors(event: any): void {
		flavorSearchValue = event.detail.selection.label;
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<!-- IMPORTANT: remove `space` when re-enabling popup -->
				<div class="text-token w-[280px] space-y-2">
					<!-- Input -->
					<!-- use:popup={popupSettings} -->
					<input
						class="input autocomplete"
						type="search"
						name="autocomplete-search"
						bind:value={searchValue}
						placeholder="Begin typing to filter..."
					/>
					<!-- Autocomplete -->
					<!-- data-popup="popupAutocomplete" -->
					<Autocomplete
						bind:input={searchValue}
						mode="fuzzy"
						options={anythingList}
						on:selection={onSelectionDefault}
						class="card w-[280px] p-2 max-h-48 overflow-y-auto"
					/>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="html" code={`
					<Autocomplete bind:input={searchValue} mode="fuzzy" options={anythingList} on:selection={onSelection} />
				`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Whitelist -->
	<section class="space-y-4">
		<h2>Whitelist Values</h2>
		<p>
			You can provide an array of strings to use as a whitelist. Only whitelisted items will be matched with the items in your list. If a value is entered that is not apart of the whitelist it will not filter that item.
		</p>
		<DocsPreview>
			<svelte:fragment slot="preview">
				<!-- IMPORTANT: remove `space` when re-enabling popup -->
				<div class="text-token w-[280px] space-y-2">
					<!-- Input -->
					<!-- use:popup={popupSettings} -->
					<input
						class="input autocomplete"
						type="search"
						name="autocomplete-search"
						bind:value={flavorSearchValue}
						placeholder="Begin typing to filter..."
					/>
				<Autocomplete
						bind:input={flavorSearchValue}
						mode="fuzzy"
						whitelist={flavorWhitelist}
						options={flavorList}
						on:selection={onSelectionFlavors}
						class="card w-[280px] p-2 max-h-48 overflow-y-auto"
					/>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`
				let flavorList = [ 
	{ label: 'Strawberry', value: 'strawberry'}, 
	{ label: 'Neopolitan', value: 'neopolitan'}
]
				`} />
				<CodeBlock language="html" code={`<Autocomplete ... whitelist={flavorWhitelist} />`} />
			</svelte:fragment>
		</DocsPreview>
		</section>

		<section class="space-y-4">
			<h2>Fuzzy Filtering</h2>
			<p>
				Fuzzy filtering provides the ability for you to filter through your list of values with a case-insensitive search.
				This is set via the <code>mode</code> by setting it to <code>fuzzy</code> or not specifying the mode at all, as its default filtering mode is fuzzy.
			</p>
			<CodeBlock language="html" code={`
				<Autocomplete ... mode="fuzzy"/>
			`} />
		</section>
		<section class="space-y-4">
			<h2>Exclude Filtering</h2>
			<p>
				Exclude filtering will filter out the values currently input into the <code>input</code> field and only display items currently not written in.
				As opposed to the fuzzy filtering where it's list will shrink when matching to the item input.
			</p>
			<CodeBlock language="html" code={`
				<Autocomplete ... mode="exclude"/>
			`} />
		</section>
	</svelte:fragment>
</DocsShell>
