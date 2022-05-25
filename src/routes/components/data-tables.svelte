<script lang="ts">
    import { mapTableSource } from '$lib/Table/DataTableService';
    import { writable, type Writable } from 'svelte/store';

    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Card from "$lib/Card/Card.svelte";
    import TabGroup from '$lib/Tab/TabGroup.svelte';
    import Tab from '$lib/Tab/Tab.svelte';
    import DataTable from "$lib/Table/DataTable.svelte";

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
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
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
		if (http.ok) { return res; } else { throw new Error(res); }
	}
    let tablePromise: Promise<any> = getTableSource();

    // Selections
    function onSort(event: any): void { console.log('event:onSort', event.detail); }
    function onSelect(event: any): void { console.log('event:onSelect', event.detail); }

    // Props
    const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        source: [
            {prop: 'headings', type: 'any[]', default: '[]', req: '&check;', desc: 'Define the table head column labels.'},
            {prop: 'source', type: 'any[]', default: '[]', req: '&check;', desc: 'Provide the table source data. This is reactive for local data.'},
            {prop: 'async', type: 'boolean', default: 'false', req: '-', desc: 'When enabled, allows for server-side search/sort instead of local.'},
            {prop: 'search', type: 'any', default: '-', req: '-', desc: 'Provides fuzzy search for the provided value. This is reactive.'},
            {prop: 'sort', type: 'string', default: '-', req: '-', desc: 'Defines the current sort key value. This is reactive.'},
            {prop: 'count', type: 'number', default: '(source length)', req: '-', desc: 'If server enabled, provides count of filtered results. Useful for pagination.'},
            {prop: 'interactive', type: 'boolean', default: 'false', req: '-', desc: 'Enables row hover styles and selection event.'},
        ],
    }
    const tablePropStyles: any = {
        headings: ['Prop', 'Type', 'Default', 'Description'],
        source: [
            {prop: 'header', type: 'string', default: 'bg-surface-50 dark:bg-surface-700', desc: 'Provide a class to set the table header background color.'},
            {prop: 'body', type: 'string', default: 'bg-surface-200 dark:bg-surface-800', desc: 'Provide a class to set the table body background color.'},
            {prop: 'text', type: 'string', default: 'text-sm', desc: 'Provide a class to set the table text size.'},
            {prop: 'hover', type: 'string', default: 'hover:bg-primary-500/10', desc: 'When interactive enabled, set the row hover color.'},
        ],
    }

    // Events
    const tableEvents: any = {
        headings: ['Name', 'Description'],
        source: [
            {name: 'sorted', desc: 'Fires when a table heading is selected for sorting. Contains a key name reference.'},
            {name: 'selected', desc: 'If interactive enabled, fires when a row is selected. Contains the complete row object.'},
        ],
    }

    // Slots
    const tableSlots: any = {
        headings: ['Name', 'Description'],
        source: [
            {name: 'header', desc: 'Dislays above the table. Useful for embedding filter and search inputs.'},
            {name: 'empty', desc: 'Displays in place of the table when there are no items to display.'},
            {name: 'footer', desc: 'Displays below the table. Useful for embedding page count, pagination, etc.'},
        ],
    }
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Data Tables</h2>
        <p>Interactive table with support for search, sort, and pagination.</p>
        <CodeBlock language="javascript" code={`import { DataTable } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>
    
    <!-- Examples -->
    <section class="space-y-4">
        <TabGroup selected={tabExample}>
            <Tab value="local">Local</Tab>
            <Tab value="async">Async</Tab>
        </TabGroup>
        {#if $tabExample === 'local'}<p>Render a table using simple local data.</p>{/if}
        {#if $tabExample === 'async'}<p>Render a table using asycronous data, usually obtained via an HTTP network call. Example data provided by <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSON Placeholder</a></p>{/if}
        <Card class="space-y-4">
            <!-- Tab: Local -->
            <!--
                header="bg-green-500"
                body="bg-green-700"
                text="text-lg"
                hover="hover:bg-sky-500/50"
            -->
            {#if $tabExample === 'local'}
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
                    <svelte:fragment slot="footer"><small class="text-xs opacity-50">{tableLocal.source.length} Items</small></svelte:fragment>
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
                        <svelte:fragment slot="header"><input type="search" placeholder="Search..." bind:value={tableServer.search}></svelte:fragment>
                        <svelte:fragment slot="footer"><small class="text-xs opacity-50">{tableServer.count} Posts</small></svelte:fragment>
                    </DataTable>
                {:catch error}
                    <p style="text-center text-warning-500">{error.message}</p>
                {/await}
            {/if}
        </Card>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <!-- Tab: Local -->
        {#if $tabExample === 'local'}
            <CodeBlock language="typescript" code={`
const tableLocal: any = {
    search: undefined,
    sort: 'position',
    headings: ['Positions', 'Name', 'Mass', 'Symbol'],
    source: [
        {position: 6, mass: 12.011, symbol: 'C', name: 'Carbon'},
        {position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen'},
        {position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium'},
        {position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium'},
        {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'}
    ]
};
            `.trim()}></CodeBlock>
            <CodeBlock language="html" code={`
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
    <svelte:fragment slot="footer"><small class="text-xs opacity-50">{tableLocal.source.length} Items</small></svelte:fragment>
</DataTable>
            `.trim()}></CodeBlock>
        {/if}
        <!-- Tab: Async -->
        {#if $tabExample === 'async'}
            <p>Scaffold the table data similar to a local table.</p>
            <CodeBlock language="typescript" code={`
const tableServer: any = { search: undefined, sort: undefined, headings: undefined, count: 0 };
            `.trim()}></CodeBlock>
            <p>Fetch API data from a server, then map headings and the default sort value.</p>
            <CodeBlock language="typescript" code={`
async function getTableSource(): Promise<any> {
    const http = await fetch('https://jsonplaceholder.typicode.com/user/1/posts');
    const res = await http.json();
    tableServer.headings = Object.keys(res[0]);
    tableServer.sort = 'userId';
    if (http.ok) { return res; } else { throw new Error(res); }
}
let tablePromise: Promise<any> = getTableSource();
            `.trim()}></CodeBlock>
            <p>Use Svelte await blocks to handle loading, complete, and error states. Please ensure you bind 'count' to handle item count.</p>
            <CodeBlock language="html" code={`
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
        <svelte:fragment slot="footer"><small class="text-xs opacity-50">{tableServer.count} Posts</small></svelte:fragment>
    </DataTable>
{:catch error}
    <p style="text-center text-warning-500">{error.message}</p>
{/await}
            `.trim()}></CodeBlock>
        {/if}
            <p>Below are example event handlers.</p>
            <CodeBlock language="typescript" code={`
function onSort(event: any): void { console.log('event:onSort', event.detail); }
function onSelect(event: any): void { console.log('event:onSelect', event.detail); }
            `.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} ></DataTable>
		<DataTable headings={tablePropStyles.headings} source={tablePropStyles.source} ></DataTable>
	</section>
    
    <!-- Events -->
	<section class="space-y-4">
		<h2>Events</h2>
		<DataTable headings={tableEvents.headings} source={tableEvents.source} ></DataTable>
	</section>
    
    <!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} ></DataTable>
	</section>
    
    <!-- Extras -->
	<!-- TODO: document the table service -->
	
</div>
