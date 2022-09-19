<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';

	let navSingle: Writable<number> = writable(1);
	let navMultiple: Writable<string[]> = writable(['A', 'B']);

	const tablePropsList: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['selected', 'string', 'writable(undefined)', 'any | any[]', 'Provide a writable store to maintain list selection.'],
			['space', 'string', 'space-y-1', 'class', 'Provide classes to set vertical item spacing.'],
			['height', 'string', '-', 'class', 'Provide to set scrollable listbox region height.'],
			['regionLabel', 'string', '-', 'class', 'Provide arbitrary classes to the label element.'],
			['regionList', 'string', '-', 'class', 'Provide arbitrary classes to the scrollable listbox element.']
		]
	};
	const tablePropsItems: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['accent', 'string', '!bg-primary-500', `Provide classes to set the selected element background.`],
			['padding', 'string', 'px-4 py-3', `Provide classes to set the padding styles.`],
			['rounded', 'string', 'rounded', `Provide classes to set the border radius styles.`]
		]
	};
	const slotsItems: any = {
		headings: ['Name', 'Description'],
		source: [
			['lead', 'Positioned on the left of each row item.'],
			['trail', 'Positioned on the right of each row item.']
		]
	};
	const tableA11yList: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['label', 'string', '-', `Define a semantic ARIA label.`],
			['labelId', 'string', '-', `Set automatically based on the label text, but can be overwritten.`]
		]
	};
	const tableA11yItem: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [['id', 'string', '-', 'Define a unique and semantic identifier for the item.']]
	};
</script>

<div class="space-y-8">
	<!-- Alert -->
	<Alert>
		<svelte:fragment slot="lead">
			<span class="text-2xl">⚠️</span>
		</svelte:fragment>
		<span>Basic lists are available via the <strong>List</strong> Tailwind Elements.</span>
		<svelte:fragment slot="trail">
			<a href="/tailwind/lists" class="btn btn-ghost">View Lists</a>
		</svelte:fragment>
	</Alert>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Listboxes</h1>
		<p class="space-y-4">Interactive listboxes that maintain selection state.</p>
		<CodeBlock language="js" code={`import { Listbox, ListBoxItem } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<section class="space-y-4">
				<div class="card card-body space-y-4">
					<ListBox selected={navSingle} label="Single Selection">
						<ListBoxItem value={1}>Item 1</ListBoxItem>
						<ListBoxItem value={2}>Item 2</ListBoxItem>
						<ListBoxItem value={3}>Item 3</ListBoxItem>
					</ListBox>
					<p class="text-center">Selected: <code>{$navSingle}</code></p>
				</div>
			</section>
			<section class="space-y-4">
				<div class="card card-body space-y-4">
					<ListBox selected={navMultiple} label="Multi-Selection" hover="hover:bg-accent-500/10" accent="!bg-accent-500">
						<ListBoxItem value={'A'}>Item A</ListBoxItem>
						<ListBoxItem value={'B'}>Item B</ListBoxItem>
						<ListBoxItem value={'C'}>Item C</ListBoxItem>
					</ListBox>
					<p class="text-center">Selected: <code>{$navMultiple}</code></p>
				</div>
			</section>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>Define a writable store to house the selection state, then apply a value property to each child.</p>
		<h6>Single Value</h6>
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
		<h6>Multiple Values</h6>
		<CodeBlock language="typescript" code={`let storeMultiple: Writable<any[]> = writable(['A', 'B']);`} />
		<CodeBlock
			language="html"
			code={`
<ListBox selected={storeMultiple}" label="Multi-Selection">
    <ListBoxItem value={'A'}>Item A</ListBoxItem>
    <ListBoxItem value={'B'}>Item B</ListBoxItem>
    <ListBoxItem value={'C'}>Item C</ListBoxItem>
</ListBox>
        `.trim()}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<h3>Listbox</h3>
		<DataTable headings={tablePropsList.headings} source={tablePropsList.source} />
		<h3>Listbox Item</h3>
		<p>These properties can be set on the parent to affect all child items.</p>
		<DataTable headings={tablePropsItems.headings} source={tablePropsItems.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={slotsItems.headings} source={slotsItems.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-end">
			<h2>Accessibility</h2>
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/listbox/" target="_blank">ARIA Guidelines</a>
		</div>
		<h3>Listbox</h3>
		<DataTable headings={tableA11yList.headings} source={tableA11yList.source} />
		<h3>Listbox Item</h3>
		<DataTable headings={tableA11yItem.headings} source={tableA11yItem.source} />
	</section>
</div>
