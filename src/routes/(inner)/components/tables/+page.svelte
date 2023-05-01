<script lang="ts">
	import { faker } from '@faker-js/faker';
	import { writable, type Writable } from 'svelte/store';
	// Docs
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Types
	import type { TableSource } from '$lib/components/Table/types';
	// Utils
	import { tableMapperValues } from '$lib/components/Table/utils';
	// Components
	import Table from '$lib/components/Table/Table.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldTable from '$lib/components/Table/Table.svelte?raw&sveld';

	// Stores
	let storeService: Writable<string> = writable('tableMapperValues');

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Tables',
		description: 'Utilize a data-driven model to create simple presentational tables.',
		imports: ['Table'],
		types: ['TableSource'],
		source: 'components/Table',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
		components: [{ sveld: sveldTable }],
		keyboard: [
			[
				'<kbd class="kbd">Right Arrow</kbd>',
				'Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.'
			],
			[
				'<kbd class="kbd">Left Arrow</kbd>',
				'Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.'
			],
			[
				'<kbd class="kbd">Down Arrow</kbd>',
				'Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.'
			],
			['<kbd class="kbd">Up Arrow</kbd>', 'Moves focus one cell Up. If focus is on the top cell in the column, focus does not move.'],
			['<kbd class="kbd">Home</kbd>', 'Moves focus to the first cell in the row that contains focus.'],
			['<kbd class="kbd">End</kbd>', ' Moves focus to the last cell in the row that contains focus.'],
			['<kbd class="kbd">Enter</kbd> or <kbd class="kbd">Space</kbd>', 'Triggers the on:selected event.']
		]
	};

	// Local
	const sourceData: any = Array(5)
		.fill(undefined)
		.map(() => faker.science.chemicalElement());

	// Table Simple
	const tableSimple: TableSource = {
		head: ['Symbol', 'Name', 'Number'],
		body: tableMapperValues(sourceData, ['symbol', 'name', 'atomicNumber']),
		meta: tableMapperValues(sourceData, ['name', 'symbol', 'atomicNumber']),
		foot: ['Total Elements', '', `<span class="badge variant-soft-primary">${sourceData.length} Elements</span>`]
	};

	// On Row Selected
	function onSelected(meta: any): void {
		console.log('on:selected', meta);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<Table source={tableSimple} interactive={true} on:selected={onSelected} text="text-token" />
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<p class="block text-center">Try viewing your console log when tapping a row.</p>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<p>First, you'll need a set of source data.</p>
				<CodeBlock
					language="ts"
					code={`
const sourceData = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];
				`}
				/>
				<p>
					Create a <code class="code">TableSource</code> object. use <code class="code">body: tableMapperValues(sourceData)</code> to map the
					data.
				</p>
				<CodeBlock
					language="ts"
					code={`
const tableSimple: TableSource = {
	// A list of heading labels.
	head: ['Name', 'Symbol', 'Weight'],
	// The data visibly shown in your table body UI.
	body: tableMapperValues(sourceData, ['name', 'symbol', 'weight']),
	// Optional: The data returned when interactive is enabled and a row is clicked.
	meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'weight']),
	// Optional: A list of footer labels.
	foot: ['Total', '', '<code class="code">${sourceData.length}</code>']
};
				`}
				/>
				<p>Finally, we pass our table source data to the component for display.</p>
				<CodeBlock language="html" code={`<Table source={tableSimple} />`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2 class="h2">Interactive Mode</h2>
			<p>
				Use the <code class="code">interactive</code> to make the table interactive. When a row is clicked,
				<code class="code">on:selected</code>
				will pass the row's
				<code class="code">meta</code> value.
			</p>
			<CodeBlock language="html" code={`<Table ... interactive={true} on:selected={mySelectionHandler} />`} />
		</section>
		<!-- Table Utilities -->
		<section class="space-y-4">
			<h2 class="h2">Table Utilities</h2>
			<p>The following utility methods allow you to format your source data for use within a Table component.</p>
			<TabGroup>
				<Tab bind:group={$storeService} name="tableMapperValues" value="tableMapperValues">Mapper Values</Tab>
				<Tab bind:group={$storeService} name="tableSourceMapper" value="tableSourceMapper">Source Mapper</Tab>
				<Tab bind:group={$storeService} name="tableSourceValues" value="tableSourceValues">Source Values</Tab>
			</TabGroup>
			<CodeBlock language="ts" code={`import { ${$storeService} } from '@skeletonlabs/skeleton';`} />
			{#if $storeService === 'tableMapperValues'}
				<!-- Table Mapper Values -->
				<p>
					Combines Source Mapper and Source Values methods to handle both operations at once. This allows you to use the same source object,
					but format differently between display (body) and selected response (meta). It's recommended to use this in most use cases.
				</p>
				<CodeBlock
					language="ts"
					code={`
tableMapperValues(sourceData, ['name', 'symbol', 'weight'])\n
//	[
//		['Hydrogen', 'H', '1.0079'],
//		['Helium', 'He', '4.0026'],
//		...
//	]
				`}
				/>
			{:else if $storeService === 'tableSourceMapper'}
				<!-- Source Mapper -->
				<p>Allows you to both whitelist object keys and map the order of display.</p>
				<CodeBlock
					language="ts"
					code={`
tableSourceMapper(sourceData, ['name', 'symbol', 'weight']);\n
//[
//		{ name: 'Hydrogen', symbol: 'H', weight: '1.0079' },
//		{ name: 'Helium', symbol: 'He', weight: '4.0026' },
//		...
//]
					`}
				/>
			{:else if $storeService === 'tableSourceValues'}
				<!-- Source Values -->
				<p>
					Returns an array of array values from an array of objects. This is the desired format for <code class="code">TableSource</code>
					<em>body</em>
					and <em>meta</em>.
				</p>
				<CodeBlock
					language="ts"
					code={`
tableSourceValues(sourceData);\n
//[
//		[ 1, 'Hydrogen', '1.0079', 'H' ],
//		[ 2, 'Helium', '4.0026', 'He' ],
//		...
//]
`}
				/>
			{/if}
		</section>
		<!-- <hr /> -->
		<!-- Data Table Callout -->
		<!-- CHRIS: delisted until further notice -->
		<!-- <section class="grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-4">
				<h2 class="h2">Data Tables</h2>
				<p>Need a fully featured data table with powerful features like selection and sort? See data tables.</p>
			</div>
			<a class="btn variant-filled-secondary place-self-center" href="/utilities/data-tables">Data Tables</a>
		</section> -->
	</svelte:fragment>
</DocsShell>
