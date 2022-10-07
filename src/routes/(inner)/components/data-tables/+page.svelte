<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import { mapTableSource } from '$lib/components/Table/DataTableService';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Stores
	let tabExample: Writable<string> = writable('local');

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Data Tables',
		description: 'Interactive table with support for search, sort, and pagination.',
		imports: ['DataTable'],
		source: 'components/Table'
	};
	const properties: DocsShellTable[] = [
		{
			label: 'Settings',
			headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
			source: [
				['<code>headings</code>', 'string[]', '[]', '&check;', 'Provide a list of table headings.'],
				['<code>source</code>', 'any[]', '[]', '&check;', 'Provide the table body content.'],
				['<code>async</code>', 'boolean', 'false', '-', 'Disables search/sort within the component, allowing for server-side pagination.'],
				['<code>search</code>', 'any', '-', '-', 'Provide a term for local fuzzy search within the compoonent.'],
				['<code>sort</code>', 'string', '-', '-', 'Defines the sort key value.'],
				['<code>count</code>', 'number', '(source length)', '-', 'When using async mode, use this to get a count of rows.'],
				['<code>interactive</code>', 'boolean', 'false', '-', 'Enables row hover and selection features.']
			]
		},
		{
			label: 'Styling',
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>header</code>', 'string', 'bg-surface-50 dark:bg-surface-700', 'Provide classes to set the table header background color.'],
				['<code>body</code>', 'string', 'bg-surface-200 dark:bg-surface-800', 'Provide classes to set the table body background color.'],
				['<code>text</code>', 'string', 'text-sm', 'Provide classes to set the table text size.'],
				['<code>color</code>', 'string', '-', 'Provide classes to set the table text color.'],
				['<code>hover</code>', 'string', 'hover:bg-primary-500/10', 'Provide classes to set the hover background color.']
			]
		}
	];
	const events: DocsShellTable[] = [
		{
			headings: ['Name', 'Description'],
			source: [
				['<code>on:sorted</code>', 'Fires when a table heading is selected for sorting. Contains a key name reference.'],
				['<code>on:selected</code>', 'If interactive enabled, fires when a row is selected. Contains the complete row data.']
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
			headings: ['Name', 'Description'],
			source: [
				['<code>header</code>', 'Dislays above the table. Useful for embedding search and filter inputs.'],
				['<code>empty</code>', 'Overrides the default "no results found" message when the table is empty.'],
				['<code>footer</code>', 'Displays below the table. Useful for embedding pagination.']
			]
		}
	];
	const a11y: DocsShellTable[] = [
		{ aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/' },
		{
			headings: ['Prop', 'Required', 'Description'],
			source: [
				['<code>labelledby</code>', '-', `Provide the ID of the element that labels the table.`],
				['<code>describedby</code>', '-', `Provide the ID of the element that describes the table.`]
			]
		},
		{
			label: 'Keyboard Interactions',
			description: 'Begin focus by tabbing into the table, then use any of the following interactions.',
			headings: ['Keys', 'Description'],
			source: [
				['<kbd>Right Arrow</kbd>', 'Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.'],
				['<kbd>Left Arrow</kbd>', 'Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.'],
				['<kbd>Down Arrow</kbd>', 'Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.'],
				['<kbd>Up Arrow</kbd>', 'Moves focus one cell Up. If focus is on the top cell in the column, focus does not move.'],
				['<kbd>Home</kbd>', 'Moves focus to the first cell in the row that contains focus.'],
				['<kbd>End</kbd>', ' Moves focus to the last cell in the row that contains focus.']
			]
		}
	];

	// Local Table
	const staticArr: any = [
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
		{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
		{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
		{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
		{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
		{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
	];
	const tableLocal: any = {
		search: undefined,
		sort: 'position',
		headings: ['Positions', 'Name', 'Weight', 'Symbol'],
		source: mapTableSource(['position', 'name', 'weight', 'symbol'], staticArr)
	};

	// Server Table
	const tableServer: any = { search: undefined, sort: undefined, headings: undefined, count: 0 };
	async function getTableSource(): Promise<any> {
		const http = await fetch('https://jsonplaceholder.typicode.com/user/1/posts');
		const res = await http.json();
		tableServer.headings = Object.keys(res[0]);
		tableServer.sort = 'userId';
		if (http.ok) {
			return res;
		} else {
			throw new Error(res);
		}
	}
	let tablePromise: Promise<any> = getTableSource();

	// Selections
	function onSort(event: any): void {
		console.log('event:onSort', event.detail);
	}
	function onSelect(event: any): void {
		console.log('event:onSelect', event.detail);
	}
</script>

<DocsShell {settings} {properties} {events} {classes} {slots} {a11y}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<TabGroup selected={tabExample}>
				<Tab value="local">Local</Tab>
				<Tab value="async">Async</Tab>
			</TabGroup>
			{#if $tabExample === 'local'}<p>Render a table using data that is client-side only.</p>{/if}
			{#if $tabExample === 'async'}<p>
					Render a table using asycronous data, such as an HTTP call to an API. The example below fetches data from <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSON Placeholder</a>
				</p>{/if}
			<div class="card card-body space-y-4">
				<!-- Tab: Local -->
				{#if $tabExample === 'local'}
					<DataTable headings={tableLocal.headings} bind:source={tableLocal.source} search={tableLocal.search} sort={tableLocal.sort} interactive on:sorted={onSort} on:selected={onSelect}>
						<svelte:fragment slot="header"><input type="search" placeholder="Search..." bind:value={tableLocal.search} /></svelte:fragment>
						<svelte:fragment slot="footer">
							<div class="text-center"><code>Count: {tableLocal.source.length} Items</code></div>
						</svelte:fragment>
					</DataTable>
				{/if}
				<!-- Tab: Async -->
				{#if $tabExample === 'async'}
					{#await tablePromise}
						<p class="text-center">Loading...</p>
					{:then response}
						<DataTable
							headings={tableServer.headings}
							source={response}
							search={tableServer.search}
							sort={tableServer.sort}
							bind:count={tableServer.count}
							interactive
							on:sorted={onSort}
							on:selected={onSelect}
						>
							<svelte:fragment slot="header"><input type="search" placeholder="Search..." bind:value={tableServer.search} /></svelte:fragment>
							<svelte:fragment slot="footer">
								<div class="text-center"><code>Count: {tableServer.count} Posts</code></div>
							</svelte:fragment>
						</DataTable>
					{:catch error}
						<p style="text-center text-warning-500">{error.message}</p>
					{/await}
				{/if}
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<TabGroup selected={tabExample}>
			<Tab value="local">Local</Tab>
			<Tab value="async">Async</Tab>
		</TabGroup>
		<!-- Tab: Local -->
		{#if $tabExample === 'local'}
			<div class="space-y-4">
				<p>Ensure your heading and source keys are defined in the same order left-to-right. Note that source values support stringified HTML.</p>
				<CodeBlock
					language="typescript"
					code={`
const headings: string[] = ['Positions', 'Name', 'Weight', 'Symbol'];
const source: any[] = [
    { position: 1, name: '<strong class="text-red">Hydrogen</strong>', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
];
            `}
				/>
				<CodeBlock
					language="html"
					code={`
<DataTable {headings} {source}></DataTable>
            `}
				/>
			</div>
			<div class="space-y-4">
				<h2>Search, Sort, and Pagination</h2>
				<p>The example below includes search, sort, and item count. Note that source is binding to provide item count.</p>
				<CodeBlock
					language="typescript"
					code={`
const tableLocal: any = {
    search: undefined,
    sort: 'position',
    headings: ['Positions', 'Name', 'Weight', 'Symbol'],
    source: [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ]
};
            `}
				/>
				<CodeBlock
					language="html"
					code={`
<DataTable
    headings={tableLocal.headings}
    bind:source={tableLocal.source}
    search={tableLocal.search}
    sort={tableLocal.sort}
    interactive
    on:sorted={onSort}
    on:selected={onSelect}
>
    <svelte:fragment slot="header"><input type="search" placeholder="Search..." bind:value={tableLocal.search}></svelte:fragment>
    <svelte:fragment slot="footer">{tableLocal.source.length} Items</svelte:fragment>
</DataTable>
            `}
				/>
			</div>
		{/if}
		<!-- Tab: Async -->
		{#if $tabExample === 'async'}
			<div class="space-y-4">
				<p>Scaffold the table data similar to a local table.</p>
				<CodeBlock
					language="typescript"
					code={`
const tableServer: any = { search: undefined, sort: undefined, headings: undefined, count: 0 };
            `}
				/>
				<p>Fetch API data from a server, then map headings and the default sort value.</p>
				<CodeBlock
					language="typescript"
					code={`
async function getTableSource(): Promise<any> {
    const http = await fetch('https://jsonplaceholder.typicode.com/user/1/posts');
    const res = await http.json();
    tableServer.headings = Object.keys(res[0]);
    tableServer.sort = 'userId';
    if (http.ok) { return res; } else { throw new Error(res); }
}
let tablePromise: Promise<any> = getTableSource();
            `}
				/>
				<p>Use Svelte await blocks to handle loading, complete, and error states. Please ensure you bind 'count' to handle item count.</p>
				<CodeBlock
					language="html"
					code={`
{#await tablePromise}
    <p class="text-center">Loading...</p>
{:then response}
    <DataTable
        headings={tableServer.headings}
        source={response}
        search={tableServer.search}
        sort={tableServer.sort}
        bind:count={tableServer.count}
        interactive
        on:sorted={onSort}
        on:selected={onSelect}
    >
        <svelte:fragment slot="header"><input type="search" placeholder="Search..." bind:value={tableServer.search}></svelte:fragment>
        <svelte:fragment slot="footer">{tableServer.count} Posts</svelte:fragment>
    </DataTable>
{:catch error}
    <p style="text-center text-warning-500">{error.message}</p>
{/await}
            `}
				/>
				<p>If you prefer to use server-side search and sort, enable the 'async' property. This disables local search and sort within the component.</p>
				<CodeBlock
					language="html"
					code={`
<!-- (await/then) -->
<DataTable
    headings={tableServer.headings}
    source={response}
    bind:count={tableServer.count}
    async
></DataTable>
<!-- (error) -->
            `}
				/>
			</div>
		{/if}
		<div class="space-y-4">
			<h2>Table Mapper Service</h2>
			<p>
				We've provided a utility service for remapping data from a object to an array. The first parameter is the keys, which also defines the order. The second parameter is the object you wish to
				map.
			</p>
			<CodeBlock language="typescript" code={`import { mapTableSource } from '@brainandbones/skeleton/components/Table/DataTableService';`} />
			<CodeBlock
				language="typescript"
				code={`
const sourceObject: any = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
];
const mappedSource: string[] = mapTableSource(['position', 'name', 'weight', 'symbol'], sourceObject)
			`}
			/>
		</div>
	</svelte:fragment>
</DocsShell>
