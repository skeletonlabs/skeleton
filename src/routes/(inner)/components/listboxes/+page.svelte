<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';

	// Stores
	let navSingle: Writable<number> = writable(1);
	let navMultiple: Writable<string[]> = writable(['A', 'B']);

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Listboxes',
		description: 'Interactive listboxes that maintain selection state.',
		imports: ['ListBox', 'ListBoxItem'],
		source: 'components/ListBox'
	};
	const properties: DocsShellTable[] = [
		{
			label: 'ListBox',
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>selected</code>', 'writable(any) | writable(any[])', 'writable(undefined)', 'Provide a writable store to maintain list selection.'],
				['<code>space</code>', 'string', 'space-y-1', 'Provide classes to set vertical item spacing.'],
				['<code>height</code>', 'string', '-', 'Provide to set scrollable listbox region height.'],
				['<code>regionLabel</code>', 'string', '-', 'Provide arbitrary classes to the label element.'],
				['<code>regionList</code>', 'string', '-', 'Provide arbitrary classes to the scrollable listbox element.'],
				// Items
				['<code>accent</code>', 'string', '!bg-active-token', `Provide classes to set the item selected background.`],
				['<code>padding</code>', 'string', 'px-4 py-3', `Provide classes to set the item padding styles.`],
				['<code>rounded</code>', 'string', 'rounded-token', `Provide classes to set the item border radius styles.`],
				['<code>hover</code>', 'string', 'bg-hover-token', `Provide classes to set the item hover background color.`]
			]
		},
		{
			label: 'ListBoxItem',
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>accent</code>', 'string', '(inherit)', `Provide classes to set the selected element background.`],
				['<code>padding</code>', 'string', '(inherit)', `Provide classes to set the padding styles.`],
				['<code>rounded</code>', 'string', '(inherit)', `Provide classes to set the border radius styles.`],
				['<code>hover</code>', 'string', '(inherit)', `Provide classes to set hover background color.`]
			]
		}
	];
	const classes: DocsShellTable[] = [
		{
			description: 'Coming soon.'
			// headings: ['Selector', 'Description'],
			// source: [
			// 	['<code>.foo</code>', '...'],
			// 	['<code>.bar</code>', '...']
			// ]
		}
	];
	const slots: DocsShellTable[] = [
		{
			label: 'ListBox',
			headings: ['Name', 'Description'],
			source: [['<code>default</code>', 'Accepts a set of ListBoxItem components.']]
		},
		{
			label: 'ListBoxItem',
			headings: ['Name', 'Description'],
			source: [
				['<code>lead</code>', 'Positioned on the left of each row item.'],
				['<code>trail</code>', 'Positioned on the right of each row item.']
			]
		}
	];
	const a11y: DocsShellTable[] = [
		{
			aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
			label: 'ListBox',
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>label</code>', 'string', '-', `Define a semantic ARIA label.`],
				['<code>labelId</code>', 'string', '-', `Set automatically based on the label text, but can be overwritten.`]
			]
		},
		{
			label: 'ListBoxItem',
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [['<code>id</code>', 'string', '-', 'Define a unique and semantic identifier for the item.']]
		}
	];
</script>

<DocsShell {settings} {properties} {classes} {slots} {a11y}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<!-- Single -->
			<div class="card card-body space-y-4">
				<ListBox selected={navSingle} label="Single Selection">
					<ListBoxItem value={1}>Item 1</ListBoxItem>
					<ListBoxItem value={2}>Item 2</ListBoxItem>
					<ListBoxItem value={3}>Item 3</ListBoxItem>
				</ListBox>
				<p class="text-center">Selected: <code>{$navSingle}</code></p>
			</div>
			<!-- Multiple -->
			<div class="card card-body space-y-4">
				<ListBox selected={navMultiple} label="Multi-Selection" hover="hover:bg-accent-500/10" accent="!bg-accent-500">
					<ListBoxItem value={'A'}>Item A</ListBoxItem>
					<ListBoxItem value={'B'}>Item B</ListBoxItem>
					<ListBoxItem value={'C'}>Item C</ListBoxItem>
				</ListBox>
				<p class="text-center">Selected: <code>{$navMultiple}</code></p>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Single Value</h2>
			<p>Define a writable store with a <u>singular</u> value of any type, then add a <code>value</code> prop to each child.</p>
			<CodeBlock language="typescript" code={`const storeSingle: Writable<number> = writable(1);`} />
			<CodeBlock
				language="html"
				code={`
<ListBox selected="{storeSingle}" label="Single Selection">
	<ListBoxItem value={1}>Selection Example 1</ListBoxItem>
	<ListBoxItem value={2}>Selection Example 2</ListBoxItem>
</ListBox>
			`.trim()}
			/>
		</section>
		<section class="space-y-4">
			<h2>Multiple Values</h2>
			<p>Create a writable with an <u>array</u> of values.</p>
			<CodeBlock language="typescript" code={`let storeMultiple: Writable<any[]> = writable(['A', 'B']);`} />
			<CodeBlock
				language="html"
				code={`
<ListBox selected={storeMultiple} label="Multi-Selection">
	<ListBoxItem value={'A'}>Item A</ListBoxItem>
	<ListBoxItem value={'B'}>Item B</ListBoxItem>
	<ListBoxItem value={'C'}>Item C</ListBoxItem>
</ListBox>
			`.trim()}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
