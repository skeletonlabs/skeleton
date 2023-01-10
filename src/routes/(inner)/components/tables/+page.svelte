<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

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

	// @ts-expect-error sveld import
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
			['<kbd>Right Arrow</kbd>', 'Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.'],
			['<kbd>Left Arrow</kbd>', 'Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.'],
			['<kbd>Down Arrow</kbd>', 'Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.'],
			['<kbd>Up Arrow</kbd>', 'Moves focus one cell Up. If focus is on the top cell in the column, focus does not move.'],
			['<kbd>Home</kbd>', 'Moves focus to the first cell in the row that contains focus.'],
			['<kbd>End</kbd>', ' Moves focus to the last cell in the row that contains focus.'],
			['<kbd>Enter</kbd> or <kbd>Space</kbd>', 'Triggers the on:selected event.']
		]
	};

	// Local
	const sourceData = [
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
		// { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
		// { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
		// { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
		// { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
		// { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
	];
	const totalWeight = sourceData.reduce((accumulator, obj) => accumulator + obj.weight, 0);

	// Table Simple
	const tableSimple: TableSource = {
		head: ['Symbol', 'Name', 'Weight'],
		body: tableMapperValues(sourceData, ['symbol', 'name', 'weight']),
		meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'weight']),
		foot: ['Total', '', `<code>${totalWeight}</code>`]
	};

	// On Row Selected
	function onSelected(meta: any): void {
		console.log(meta.detail);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<Table source={tableSimple} interactive={true} on:selected={onSelected} />
			<div class="text-sm text-center">View your browser console when selecting a row above.</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Tab: Table -->
		<section class="space-y-4">
			<p>
				First we need a set of source data. This can start as either an array of objects, or an array of arrays. For this example we'll use
				the former.
			</p>
			<CodeBlock
				language="typescript"
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
				Create a <code>TableSource</code> object that houses all of our table information. Note we're using the
				<code>tableMapperValues()</code> method to prune and map our data between the body and meta values. We cover the use of this method
				in the <em>Table Utilities</em> section below.
			</p>
			<CodeBlock
				language="typescript"
				code={`
const tableSimple: TableSource = {
	// A list of heading labels.
	head: ['Name', 'Symbol', 'Weight'],
	// The data visibly shown in your table body UI.
	body: tableMapperValues(sourceData, ['name', 'symbol', 'weight']),
	// Optional: The data returned when interactive is enabled and a row is clicked.
	meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'weight']),
	// Optional: A list of footer labels.
	foot: ['Total', '', '<code>${totalWeight}</code>']
};
			`}
			/>
			<p>
				Finally, we pass our table source data to the component for display. The <code>interactive</code> prop is optional, but indicates
				the table is interactive, and will provide <code>meta</code> data via the <code>on:selected</code> event when a row is clicked clicked.
			</p>
			<CodeBlock language="html" code={`<Table source={tableSimple} interactive={true} on:selected={mySelectionHandler} />`} />
		</section>
		<!-- Table Utilities -->
		<section class="space-y-4">
			<h2>Table Utilities</h2>
			<p>The following utility methods allow you to format your source data for use within a Table component.</p>
			<TabGroup selected={storeService}>
				<Tab value="tableMapperValues">Mapper Values</Tab>
				<Tab value="tableSourceMapper">Source Mapper</Tab>
				<Tab value="tableSourceValues">Source Values</Tab>
				<!-- <Tab value="tableCellFormatter">Cell Formatter</Tab> -->
			</TabGroup>
			<CodeBlock language="ts" code={`import { ${$storeService} } from '@skeletonlabs/skeleton';>`} />
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
					Returns an array of array values from an array of objects. This is the desired format for <code>TableSource</code> <em>body</em>
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
				<!-- DISABLED: see comments in utils.ts -->
				<!-- {else if $storeService === 'tableCellFormatter'}
				<p>Table cells can accept HTML via template literals. This method allows wrapping HTML tags arround a particular object value.</p>
				<CodeBlock
					language="ts"
					code={`
tableCellFormatter(sourceData, 'weight', 'em', 'opacity-50');\n
// [
//	{ position: 1, name: 'Hydrogen', weight: '<em class="opacity-50">1.0079</em>', symbol: 'H' },
//	{ position: 2, name: 'Helium', weight: '<em class="opacity-50">4.0026</em>', symbol: 'He' },
//	...
// ]
`}
				/> -->
			{/if}
		</section>
		<hr />
		<!-- Data Table Callout -->
		<section class="grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-4">
				<h2>Data Tables</h2>
				<p>Need a fully featured data table with powerful features like selection and sort? See data tables.</p>
			</div>
			<a class="btn btn-filled-secondary place-self-center" href="/utilities/data-tables">Data Tables</a>
		</section>
	</svelte:fragment>
</DocsShell>
