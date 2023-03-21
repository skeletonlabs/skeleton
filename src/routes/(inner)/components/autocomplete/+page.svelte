<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Types
	import type { AutocompleteOption } from '$lib/components/Autocomplete/types';
	// Components
	import Autocomplete from '$lib/components/Autocomplete/Autocomplete.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldAutocomplete from '$lib/components/Autocomplete/Autocomplete.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Autocomplete',
		description: 'Displays a list of suggested options.',
		imports: ['Autocomplete'],
		types: ['AutocompleteOption'],
		source: 'components/Autocomplete',
		aria: 'https://www.w3.org/WAI/ARIA/apg/',
		components: [{ sveld: sveldAutocomplete }]
	};

	// Demo: Featured
	let demoSearch = '';
	const demoOptions: AutocompleteOption[] = [
		{ label: 'Foo', value: 'foo' },
		{ label: 'Bar', value: 'bar' },
		{ label: 'FooBar', value: 'foobar' },
		{ label: 'Fizz', value: 'fizz' },
		{ label: 'Buzz', value: 'buzz' },
		{ label: 'FizzBuzz', value: 'fizzbuzz' }
	];

	// Demo: Flavors
	let flavorSearch = '';
	const flavorOptions: AutocompleteOption[] = [
		{ label: 'Vanilla', value: ' vanilla' },
		{ label: 'Chocolate', value: 'chocolate' },
		{ label: 'Strawberry', value: 'strawberry' },
		{ label: 'Neapolitan', value: 'neapolitan' }
	];
	const flavorWhitelist: string[] = ['strawberry', 'neapolitan'];

	function onDemoSelection(event: any): void {
		demoSearch = event.detail.label;
	}

	function onFlavorSelection(event: any): void {
		flavorSearch = event.detail.label;
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="text-token w-96 space-y-2">
					<input class="input" type="search" name="ac-demo" bind:value={demoSearch} placeholder="Search..." />
					<Autocomplete
						bind:input={demoSearch}
						options={demoOptions}
						class="card w-96 p-4 max-h-48 overflow-y-auto"
						on:selection={onDemoSelection}
					/>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<p>Create a variable to hold bind your search value.</p>
				<CodeBlock language="ts" code={`let demoSearch = '';`} />
				<p>Provide an array of objects containing <code>label</code> and <code>value</code> keys.</p>
				<CodeBlock
					language="ts"
					code={`
const demoOptions: AutocompleteOption[] = [
	{ label: 'Foo', value: 'foo' },
	{ label: 'Bar', value: 'bar' },
	{ label: 'FooBar', value: 'foobar' },
	{ label: 'Fizz', value: 'fizz' },
	{ label: 'Buzz', value: 'buzz' },
	{ label: 'FizzBuzz', value: 'fizzbuzz' }
];
				`}
				/>
				<p>Create a selection event handler, to handle the result of the selected value.</p>
				<CodeBlock
					language="ts"
					code={`
function onDemoSelection(event: any): void {
	demoSearch = event.detail.selection.label;
}
				`}
				/>
				<p>Create your search input and bind the search value.</p>
				<CodeBlock
					language="html"
					code={`<input class="input" type="search" name="demo" bind:value={demoSearch} placeholder="Search..." />`}
				/>
				<p>Implement the autocomplete component.</p>
				<CodeBlock language="html" code={`<Autocomplete bind:input={demoSearch} options={demoOptions} on:selection={onDemoSelection} />`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Whitelist -->
		<section class="space-y-4">
			<h2>Whitelist</h2>
			<p>Provide a list of values you wish to whitelist. Only options with a matching value will be displayed.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="text-token w-96 space-y-2">
						<input class="input autocomplete" type="search" name="autocomplete-search" bind:value={flavorSearch} placeholder="Search..." />
						<Autocomplete
							bind:input={flavorSearch}
							options={flavorOptions}
							whitelist={flavorWhitelist}
							class="card w-96 p-4 max-h-48 overflow-y-auto"
							on:selection={onFlavorSelection}
						/>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const flavorOptions: AutocompleteOption[] = [
	{ label: 'Vanilla', value: ' vanilla' },
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Neapolitan', value: 'neapolitan' }
];
					`}
					/>
					<CodeBlock language="ts" code={`const flavorWhitelist: string[] = ['strawberry', 'neapolitan'];`} />
					<CodeBlock language="html" code={`<Autocomplete ... options={flavorOptions} whitelist={flavorWhitelist} />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>

		<section class="space-y-4">
			<h2>Mode</h2>
			<p>
				By default the autocomplete will filter the list of options to only those that include the search value. Use the <code>exclude</code
				> mode to only show options which do not match the search value.
			</p>
			<CodeBlock
				language="html"
				code={`
				<Autocomplete ... mode="exclude"/>
			`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
