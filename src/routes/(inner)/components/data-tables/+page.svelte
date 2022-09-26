<script lang="ts">
	import { mapTableSource } from '$lib/components/Table/DataTableService';
	import { writable, type Writable } from 'svelte/store';

	import { DataTable, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	let tabExample: Writable<string> = writable('local');

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

	// Props
	// prettier-ignore
	const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        source: [
            {prop: 'headings', type: 'string[]', default: '[]', req: '&check;', desc: 'Provide a list of table headings.'},
            {prop: 'source', type: 'any[]', default: '[]', req: '&check;', desc: 'Provide the table body content.'},
            {prop: 'async', type: 'boolean', default: 'false', req: '-', desc: 'Disables search/sort within the component, allowing for server-side pagination.'},
            {prop: 'search', type: 'any', default: '-', req: '-', desc: 'Provide a term for local fuzzy search within the compoonent.'},
            {prop: 'sort', type: 'string', default: '-', req: '-', desc: 'Defines the sort key value.'},
            {prop: 'count', type: 'number', default: '(source length)', req: '-', desc: 'When using async mode, use this to get a count of rows.'},
            {prop: 'interactive', type: 'boolean', default: 'false', req: '-', desc: 'Enables row hover and selection features.'},
        ],
    }
	// prettier-ignore
	const tablePropStyles: any = {
        headings: ['Prop', 'Type', 'Default', 'Description'],
        source: [
            {prop: 'header', type: 'string', default: 'bg-surface-50 dark:bg-surface-700', desc: 'Provide classes to set the table header background color.'},
            {prop: 'body', type: 'string', default: 'bg-surface-200 dark:bg-surface-800', desc: 'Provide classes to set the table body background color.'},
            {prop: 'text', type: 'string', default: 'text-sm', desc: 'Provide classes to set the table text size.'},
            {prop: 'color', type: 'string', default: '-', desc: 'Provide classes to set the table text color.'},
            {prop: 'hover', type: 'string', default: 'hover:bg-primary-500/10', desc: 'Provide classes to set the hover background color.'},
        ],
    }

	// Events
	const tableEvents: any = {
		headings: ['Name', 'Description'],
		source: [
			{
				name: 'sorted',
				desc: 'Fires when a table heading is selected for sorting. Contains a key name reference.'
			},
			{
				name: 'selected',
				desc: 'If interactive enabled, fires when a row is selected. Contains the complete row data.'
			}
		]
	};

	// Slots
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [
			{
				name: 'header',
				desc: 'Dislays above the table. Useful for embedding search and filter inputs.'
			},
			{
				name: 'empty',
				desc: 'Overrides the default "no results found" message when the table is empty.'
			},
			{ name: 'footer', desc: 'Displays below the table. Useful for embedding pagination.' }
		]
	};

	// A11y
	const tableA11y: any = {
		headings: ['Prop', 'Required', 'Description'],
		source: [
			['labelledby', '-', `Provide the ID of the element that labels the table.`],
			['describedby', '-', `Provide the ID of the element that describes the table.`]
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Data Tables</h1>
		<p>Interactive table with support for search, sort, and pagination.</p>
		<CodeBlock language="javascript" code={`import { DataTable } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<h2 class='sr-only'>Examples</h2>
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
					<svelte:fragment slot="footer"><pre class="text-center">Count: {tableLocal.source.length} Items</pre></svelte:fragment>
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
						<svelte:fragment slot="footer"><pre class="text-center">Count: {tableServer.count} Posts</pre></svelte:fragment>
					</DataTable>
				{:catch error}
					<p style="text-center text-warning-500">{error.message}</p>
				{/await}
			{/if}
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<TabGroup selected={tabExample}>
			<Tab value="local">Local</Tab>
			<Tab value="async">Async</Tab>
		</TabGroup>
		<!-- Tab: Local -->
		{#if $tabExample === 'local'}
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
			<h3>Fully Featured</h3>
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
		{/if}
		<!-- Tab: Async -->
		{#if $tabExample === 'async'}
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
		{/if}
		<p>Handle events for sort and row selection. These are enabled for the demos at the top of the page. View your browser's console log during interaction.</p>
		<CodeBlock
			language="typescript"
			code={`
function onSort(event: any): void { console.log('event:onSort', event.detail); }
function onSelect(event: any): void { console.log('event:onSelect', event.detail); }
            `}
		/>
	</section>

	<!-- Extras -->
	<!-- TODO: document the table service -->

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
		<DataTable headings={tablePropStyles.headings} source={tablePropStyles.source} />
	</section>

	<!-- Events -->
	<section class="space-y-4">
		<h2>Events</h2>
		<DataTable headings={tableEvents.headings} source={tableEvents.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-center">
			<h2>Accessibility</h2>
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/grid/" target="_blank">ARIA Guidelines</a>
		</div>
		<DataTable headings={tableA11y.headings} source={tableA11y.source} />
	</section>
</div>
