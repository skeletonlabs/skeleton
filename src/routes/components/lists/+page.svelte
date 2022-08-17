<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import Card from '$lib/Card/Card.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import DataTable from '$lib/Table/DataTable.svelte';
	import List from '$lib/List/List.svelte';
	import ListItem from '$lib/List/ListItem.svelte';

	let navSingle: Writable<string> = writable('A');
	let navMultiple: Writable<string[]> = writable(['A', 'B']);

	const svgHeart: string =
		'<svg class="fill-primary-500 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 400V464C416 490.5 394.5 512 368 512H320V464C320 455.2 312.8 448 304 448C295.2 448 288 455.2 288 464V512H224V464C224 455.2 216.8 448 208 448C199.2 448 192 455.2 192 464V512H144C117.5 512 96 490.5 96 464V400C96 399.6 96 399.3 96.01 398.9C37.48 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0C397.4 0 512 100.3 512 224C512 294.7 474.5 357.8 415.1 398.9C415.1 399.3 416 399.6 416 400V400zM160 192C124.7 192 96 220.7 96 256C96 291.3 124.7 320 160 320C195.3 320 224 291.3 224 256C224 220.7 195.3 192 160 192zM352 320C387.3 320 416 291.3 416 256C416 220.7 387.3 192 352 192C316.7 192 288 220.7 288 256C288 291.3 316.7 320 352 320z"/></svg>';
	const svgEllipsis: string = `<svg class="fill-surface-500 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/></svg>`;

	const tablePropsGroup: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['tag', 'string', 'ul', 'ul | ol | dl | nav', , 'Defines the semantic wrapping element.'],
			[
				'selected',
				'Writable',
				'-',
				'any',
				'Nav tag only. Provide a writable store to maintain list selection.'
			],
			[
				'hover',
				'string',
				'hover:bg-primary-500/10',
				'class',
				'Nav tag only. Provide a class to set hover background color.'
			],
			[
				'highlight',
				'string',
				'!bg-primary-500',
				'class',
				'Nav tag only. Provide a class for highlighted rows. Note this must be use (!) for important.'
			]
		]
	};
	const tablePropsItems: any = {
		headings: ['Prop', 'Type', 'Description'],
		source: [
			['href', 'string', `To create a link, provide an anchor tag.`],
			['value', 'any', `To create a section item, provide a value.`]
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
			['labelledby', 'string', '-', `ID of the element that labels this this.`]
		]
	};
	const tableA11yItem: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['setsize', 'number', '-', `Nav Item only. Define the ARIA setsize value.`],
			['posinset ', 'number', '-', `Nav Item only. Define the ARIA posinset value.`]
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Lists</h1>
		<p class="space-y-4">Lists are continuous, vertical indexes of text options.</p>
		<CodeBlock language="js" code={`import { List, ListItem } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Variations -->
	<section class="space-y-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
			<section class="space-y-4">
				<Card class="space-y-4">
					<h6>Unordered</h6>
					<List tag="ul">
						{#each ['A', 'B', 'C'] as v, i}
							<ListItem tabindex={i}>
								<svelte:fragment slot="lead">{@html svgHeart}</svelte:fragment>
								Item {v}
								<svelte:fragment slot="trail">{@html svgEllipsis}</svelte:fragment>
							</ListItem>
						{/each}
					</List>
				</Card>
			</section>
			<section class="space-y-4">
				<Card class="space-y-4">
					<h6>Ordered</h6>
					<List tag="ol">
						{#each ['A', 'B', 'C'] as v, i}
							<ListItem tabindex={i}>
								<svelte:fragment slot="lead"><div class="circle">{i + 1}</div></svelte:fragment>
								Item {v}
							</ListItem>
						{/each}
					</List>
				</Card>
			</section>
			<section class="space-y-4">
				<Card class="space-y-4">
					<h6>Description</h6>
					<List tag="dl">
						{#each ['A', 'B'] as v, i}
							<ListItem tabindex={i}>
								<svelte:fragment slot="dt">Item {v}</svelte:fragment>
								<svelte:fragment slot="dd"><p>Description for {v}</p></svelte:fragment>
							</ListItem>
						{/each}
					</List>
				</Card>
			</section>
			<section class="space-y-4">
				<Card class="space-y-4">
					<h6>Anchors</h6>
					<List tag="nav" label="Anchor List Example">
						<ListItem href="/">Page A</ListItem>
						<ListItem href="/">Page B</ListItem>
						<ListItem href="/">Page C</ListItem>
					</List>
				</Card>
			</section>
		</div>
	</section>

	<!-- Selection Listbox -->
	<section class="space-y-4">
		<h3>Selection Listbox</h3>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<section class="space-y-4">
				<Card class="space-y-4">
					<h6>Single</h6>
					<List tag="nav" selected={navSingle} label="Single Selection">
						<ListItem value={'A'}>Item A</ListItem>
						<ListItem value={'B'}>Item B</ListItem>
						<ListItem value={'C'}>Item C</ListItem>
					</List>
					<pre>Selected: {$navSingle}</pre>
				</Card>
			</section>
			<section class="space-y-4">
				<Card class="space-y-4">
					<h6>Multiple</h6>
					<List
						tag="nav"
						selected={navMultiple}
						label="Multi-Selection"
						hover="hover:bg-accent-500/10"
						highlight="!bg-accent-500"
					>
						<ListItem value={'A'}>Item A</ListItem>
						<ListItem value={'B'}>Item B</ListItem>
						<ListItem value={'C'}>Item C</ListItem>
					</List>
					<pre>Selected: {$navMultiple}</pre>
				</Card>
			</section>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>Defaults to an unordered list with list item children.</p>
		<CodeBlock
			language="html"
			code={`
<List>
    <ListItem>Item A</ListItem>
    <ListItem>Item B</ListItem>
    <ListItem>Item C</ListItem>
</List>
        `.trim()}
		/>
		<h3>Role and Slot</h3>
		<CodeBlock
			language="html"
			code={`
<List tag="ol">
    <ListItem>
        <svelte:fragment slot="lead">1.</svelte:fragment>
        Item A
    </ListItem>
</List>
        `.trim()}
		/>
		<h3>Description List</h3>
		<CodeBlock
			language="html"
			code={`
<List tag="dl">
    <ListItem>
        <svelte:fragment slot="dt">Item A</svelte:fragment>
        <svelte:fragment slot="dd"><p>Description for A</p></svelte:fragment>
    </ListItem>
</List>
        `.trim()}
		/>
		<h3>Navigation Lists</h3>
		<CodeBlock
			language="html"
			code={`
<List tag="nav">
    <ListItem href="/">Link Example 1</ListItem>
    <ListItem href="/">Link Example 2</ListItem>
</List>
        `.trim()}
		/>
		<h3>Selection Listbox</h3>
		<p>
			Define a writable to store to house the selection state, then apply a value property to each
			child.
		</p>
		<h6>Single Value</h6>
		<CodeBlock language="typescript" code={`const storeSingle: Writable<number> = writable(1);`} />
		<CodeBlock
			language="html"
			code={`
<List tag="nav" selected={storeSingle}"">
    <ListItem value={1}>Selection Example 1</ListItem>
    <ListItem value={2}>Selection Example 2</ListItem>
</List>
        `.trim()}
		/>
		<h6>Multiple Values</h6>
		<CodeBlock
			language="typescript"
			code={`let storeMultiple: Writable<any[]> = writable(['A', 'B']);`}
		/>
		<CodeBlock
			language="html"
			code={`
<List tag="nav" selected={storeMultiple}">
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
		<DataTable headings={tablePropsGroup.headings} source={tablePropsGroup.source} />
		<h3>Nav Item</h3>
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
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/listbox/" target="_blank">ARIA Guidelines</a
			>
		</div>
		<h3>List</h3>
		<DataTable headings={tableA11yList.headings} source={tableA11yList.source} />
		<h3>Items</h3>
		<DataTable headings={tableA11yItem.headings} source={tableA11yItem.source} />
	</section>
</div>

<style lang="postcss">
	.circle {
		@apply bg-primary-500 text-xs w-7 h-7 aspect-square text-center flex justify-center items-center rounded-full;
	}
</style>
