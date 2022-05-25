<script lang="ts">
    import { mapTableSource } from '$lib/Table/DataTableService';

    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Card from "$lib/Card/Card.svelte";
    import DataTable from "$lib/Table/DataTable.svelte";

    // Local Table
    const tableLocal = {
        search: undefined,
        sort: 'position',
        headings: ['Positions', 'Name', 'Mass', 'Symbol'],
        source: mapTableSource(
            ['position', 'name', 'mass', 'symbol'],
            [
                {position: 6, mass: 12.011, symbol: 'C', name: 'Carbon'},
                {position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen'},
                {position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium'},
                {position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium'},
                {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'}
            ]
        ),
        count: 0
    };

    // Server Table
    const tableServer = { search: undefined, sort: undefined, headings: undefined, count: 0 };
    async function getTableSource(): Promise<any> {
		const http = await fetch('https://jsonplaceholder.typicode.com/user/1/posts');
		const res = await http.json();
        tableServer.headings = Object.keys(res[0]);
        tableServer.sort = 'userId';
        tableServer.count = res.length;
		if (http.ok) { return res; } else { throw new Error(res); }
	}
    let tablePromise: Promise<any> = getTableSource();

    // Selections
    function onSort(event: any): void { console.log('onSort', event.detail); };
    function onSelect(event: any): void { console.log('onSelect', event.detail); }
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
        <h4>Local</h4>
        <Card>
            <DataTable
                headings={tableLocal.headings}
                source={tableLocal.source}
                search={tableLocal.search}
                sort={tableLocal.sort}
                bind:count={tableLocal.count}
                interactive
                on:sorted={onSort}
                on:selected={onSelect}
            >
                <svelte:fragment slot="header"><input type="search" placeholder="Search..." bind:value={tableLocal.search}></svelte:fragment>
                <svelte:fragment slot="footer"><small class="text-xs opacity-50">{tableLocal.count || 0} Elements</small></svelte:fragment>
            </DataTable>
        </Card>
        <h4>Async</h4>
        <Card>
            {#await tablePromise}
                <p>Loading...</p>
            {:then response}
                <DataTable
                    headings={tableServer.headings}
                    source={response}
                    search={tableServer.search}
                    sort={tableServer.sort}
                    bind:count={tableServer.count}
                    interactive
                    on:sorted={onSort}
                >
                    <svelte:fragment slot="header"><input type="search" placeholder="Search..." bind:value={tableServer.search}></svelte:fragment>
                    <svelte:fragment slot="footer"><small class="text-xs opacity-50">{tableServer.count} Posts</small></svelte:fragment>
                </DataTable>
            {:catch error}
                <p style="text-warning-500">{error.message}</p>
            {/await}
        </Card>
    </section>

    <!-- Usage -->
    <!-- <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<DataTable></DataTable>`.trim()}></CodeBlock>
    </section> -->

    <!-- Properties -->
	<!-- <section class="space-y-4">
		<h2>Properties</h2>
		<Table source="{tableProps}"></Table>
	</section> -->
	
	<!-- Slots -->
	<!-- <section class="space-y-4">
		<h2>Slots</h2>
		<Table source="{tableSlots}"></Table>
	</section> -->
    
</div>
