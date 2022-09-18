<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { DataTable, Card, List, ListItem } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

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
	<!-- Header -->
	<header class="space-y-4">
		<h1>Listboxes</h1>
		<p class="space-y-4">Interactive listboxes that maintain selection state.</p>
		<CodeBlock language="js" code={`import { List, ListItem } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<section class="space-y-4">
				<Card slotBody="space-y-4">
					<List selected={navSingle} label="Single Selection">
						<ListItem value={1}>Item 1</ListItem>
						<ListItem value={2}>Item 2</ListItem>
						<ListItem value={3}>Item 3</ListItem>
					</List>
					<p class="text-center">Selected: <code>{$navSingle}</code></p>
				</Card>
			</section>
			<section class="space-y-4">
				<Card slotBody="space-y-4">
					<List selected={navMultiple} label="Multi-Selection" hover="hover:bg-accent-500/10" accent="!bg-accent-500">
						<ListItem value={'A'}>Item A</ListItem>
						<ListItem value={'B'}>Item B</ListItem>
						<ListItem value={'C'}>Item C</ListItem>
					</List>
					<p class="text-center">Selected: <code>{$navMultiple}</code></p>
				</Card>
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
<List selected="{storeSingle}" label="Single Selection">
    <ListItem value={1}>Selection Example 1</ListItem>
    <ListItem value={2}>Selection Example 2</ListItem>
</List>
        `.trim()}
		/>
		<h6>Multiple Values</h6>
		<CodeBlock language="typescript" code={`let storeMultiple: Writable<any[]> = writable(['A', 'B']);`} />
		<CodeBlock
			language="html"
			code={`
<List selected={storeMultiple}" label="Multi-Selection">
    <ListItem value={'A'}>Item A</ListItem>
    <ListItem value={'B'}>Item B</ListItem>
    <ListItem value={'C'}>Item C</ListItem>
</List>
        `.trim()}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<h3>List Group</h3>
		<DataTable headings={tablePropsList.headings} source={tablePropsList.source} />
		<h3>List Item</h3>
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
		<h3>List</h3>
		<DataTable headings={tableA11yList.headings} source={tableA11yList.source} />
		<h3>List Item</h3>
		<DataTable headings={tableA11yItem.headings} source={tableA11yItem.source} />
	</section>
</div>
