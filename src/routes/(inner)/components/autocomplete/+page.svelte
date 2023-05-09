<script lang="ts">
	// Docshell
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Types
	import type { AutocompleteOption } from '$lib/components/Autocomplete/types';
	// Components
	import Autocomplete from '$lib/components/Autocomplete/Autocomplete.svelte';
	import InputChip from '$lib/components/InputChip/InputChip.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
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
		// aria: 'https://www.w3.org/WAI/ARIA/apg/',
		components: [{ sveld: sveldAutocomplete }],
		keyboard: [
			['<kbd class="kbd">Tab</kbd>', 'Select the next autocomplete option.'],
			['<kbd class="kbd">Shift</kbd> + <kbd class="kbd">Tab</kbd>', 'Select the previous autocomplete option.'],
			['<kbd class="kbd">Space</kbd> or <kbd class="kbd">Enter</kbd>', 'Select the current autocomplete option.']
		]
	};

	// Local
	let inputPopupDemo = '';
	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	};

	let inputDemo = '';
	let inputAllowlist = '';
	const flavorOptions: AutocompleteOption[] = [
		{ label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
		{ label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
		{ label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
		{ label: 'Neapolitan', value: 'neapolitan', keywords: 'mix, strawberry, chocolate, vanilla', meta: { healthy: false } },
		{ label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
		{ label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } }
	];
	const flavorAllowlist: string[] = ['neapolitan', 'pineapple', 'peach'];
	let flavorDenylist: string[] = ['vanilla', 'chocolate'];

	// Input Chip
	let inputChip = '';
	let inputChipList: string[] = ['vanilla', 'chocolate'];

	function onDemoSelection(event: any): void {
		console.log(event.detail);
		inputDemo = event.detail.label;
	}

	function onAllowedlistSelect(event: any): void {
		console.log(event.detail);
		inputAllowlist = event.detail.label;
	}

	function onDeniedlistSelect(event: any): void {
		console.log(event.detail);
		flavorDenylist = [event.detail.value];
	}

	function onInputChipSelect(event: any): void {
		console.log('onInputChipSelect', event.detail);
		if (inputChipList.includes(event.detail.value) === false) {
			inputChipList = [...inputChipList, event.detail.value];
			inputChip = '';
		}
	}

	function onPopupDemoSelect(event: any): void {
		inputPopupDemo = event.detail.label;
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="text-token w-full max-w-sm space-y-2">
					<input class="input" type="search" name="ac-demo" bind:value={inputDemo} placeholder="Search..." />
					<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto">
						<Autocomplete bind:input={inputDemo} options={flavorOptions} on:selection={onDemoSelection} />
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<p>Create a variable to hold bind your search value.</p>
				<CodeBlock language="ts" code={`let inputDemo = '';`} />
				<p>Provide an array of objects containing <code class="code">label</code> and <code class="code">value</code> keys.</p>
				<CodeBlock
					language="ts"
					code={`
const flavorOptions: AutocompleteOption[] = [
	{ label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
	{ label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
	{ label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
	{ label: 'Neapolitan', value: 'neapolitan', keywords: 'mix, strawberry, chocolate, vanilla', meta: { healthy: false } },
	{ label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
	{ label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } }
];
				`}
				/>
				<p>Create a selection event handler, to handle the result of the selected value.</p>
				<CodeBlock
					language="ts"
					code={`
function onFlavorSelection(event: any): void {
	inputDemo = event.detail.label;
}
				`}
				/>
				<p>Create your search input and bind the search value.</p>
				<CodeBlock
					language="html"
					code={`<input class="input" type="search" name="demo" bind:value={inputDemo} placeholder="Search..." />`}
				/>
				<p>Implement the autocomplete component.</p>
				<p>
					To style the autocomplete component you can either apply a <code class="code">class</code> tag directly the component and set your
					styles, or you can wrap the component in a <code class="code">div</code> and apply your styles to the
					<code class="code">div</code>
				</p>
				<CodeBlock
					language="html"
					code={`
<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto">
	<Autocomplete bind:input={inputDemo} options={flavorOptions} on:selection={onFlavorSelection} />
</div>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- prettier-ignore -->
		<p>
			The Autocomplete component does not contain it's own input by default. Instead, by using input binding paired with an <code class="code">on:selection</code> event, you may utilize this component alongside any type of input that takes in suggested values.
		</p>
		<section class="space-y-4">
			<h2 class="h2">Data Structure</h2>
			<p>
				You may optionally append <code class="code">keywords</code> to provide additional search terms. As well as
				<code class="code">meta</code>
				to provide arbitrary data - which is not utilizing for filtering. All data option data is returned by
				<code class="code">on:selection</code>, including these.
			</p>
			<CodeBlock
				language="ts"
				code={`
const flavorOptions: AutocompleteOption[] = [
	{ ..., keywords: 'mix, strawberry, chocolate, vanilla' },
	{ ..., meta: { healthy: false } },
];
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Allowed Options</h2>
			<p>Provide a list of values you wish to allow. Only options with a matching value will be displayed.</p>
			<DocsPreview background="neutral" regionFooter="text-center">
				<svelte:fragment slot="preview">
					<div class="text-token w-full max-w-sm space-y-2">
						<input
							class="input autocomplete"
							type="search"
							name="autocomplete-search"
							bind:value={inputAllowlist}
							placeholder="Search..."
						/>
						<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto">
							<Autocomplete
								bind:input={inputAllowlist}
								options={flavorOptions}
								allowlist={flavorAllowlist}
								on:selection={onAllowedlistSelect}
							/>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<span class="text-sm">Allowed</span> <code class="code">[{flavorAllowlist.join(', ')}]</code>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`const flavorAllowlist: string[] = ['neapolitan', 'pineapple', 'peach'];`} />
					<CodeBlock language="html" code={`<Autocomplete ... allowlist={flavorAllowlist} />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Denied Options</h2>
			<p>Provide a list of values you wish to deny. Denied options will be excluded from the list.</p>
			<DocsPreview background="neutral" regionFooter="text-center">
				<svelte:fragment slot="preview">
					<div class="text-token w-full max-w-sm space-y-2">
						<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto">
							<Autocomplete options={flavorOptions} denylist={flavorDenylist} on:selection={onDeniedlistSelect} />
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<span class="text-sm">Denied</span> <code class="code">[{flavorDenylist.join(', ')}]</code>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`let flavorDenylist: string[] = ['vanilla', 'chocolate'];`} />
					<CodeBlock language="html" code={`<Autocomplete ... denylist={flavorDenylist} />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>

		<section class="space-y-4">
			<h2 class="h2">Input Chip</h2>
			<p>We've provided a demo of using Autocomplete alongside a Skeleton Input Chip component below.</p>
			<DocsPreview background="neutral" regionFooter="text-center">
				<svelte:fragment slot="preview">
					<div class="text-token w-full max-w-sm space-y-2">
						<InputChip bind:input={inputChip} bind:value={inputChipList} name="chips" />
						<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto">
							<Autocomplete bind:input={inputChip} options={flavorOptions} denylist={inputChipList} on:selection={onInputChipSelect} />
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`let inputChip = '';`} />
					<CodeBlock language="ts" code={`let inputChipList: string[] = ['vanilla', 'chocolate'];`} />
					<CodeBlock language="html" code={`<InputChip bind:input={inputChip} bind:value={inputChipList} name="chips" />`} />
					<CodeBlock
						language="html"
						code={`
<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto">
	<Autocomplete
		bind:input={inputChip}
		options={flavorOptions}
		denylist={inputChipList}
		on:selection={onInputChipSelect}
	/>
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<section class="space-y-4">
			<h2 class="h2">Popup</h2>
			<p>We've provide a demo of using Autocomplete alongside a Skeleton popup utility below.</p>
			<DocsPreview background="neutral" regionFooter="text-center">
				<svelte:fragment slot="preview">
					<div class="text-token w-full max-w-sm space-y-2">
						<input
							class="input autocomplete"
							type="search"
							name="autocomplete-search"
							bind:value={inputPopupDemo}
							placeholder="Search..."
							use:popup={popupSettings}
						/>
						<div data-popup="popupAutocomplete" class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto">
							<Autocomplete bind:input={inputPopupDemo} options={flavorOptions} on:selection={onPopupDemoSelect} />
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let popupSettings: PopupSettings = {
	event: 'focus-click',
	target: 'popupAutocomplete',
	placement: 'bottom',
};`}
					/>
					<CodeBlock language="ts" code={`let inputPopupDemo: string = '';`} />
					<CodeBlock
						language="html"
						code={`
<input
	class="input autocomplete"
	type="search"
	name="autocomplete-search"
	bind:value={inputPopupDemo}
	placeholder="Search..."
	use:popup={popupSettings}
/>
<div data-popup="popupAutocomplete">
	<Autocomplete
		bind:input={inputPopupDemo}
		options={flavorOptions}
		on:selection={onPopupDemoSelect}
	/>
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
