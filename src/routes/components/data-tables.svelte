<script lang="ts">
    import { onMount } from 'svelte';

    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Card from "$lib/Card/Card.svelte";
    import DataTable from "$lib/Table/DataTable.svelte";

    // Table
    let search: any;
    let sort: string;
    let headings: string[];
    let source: any[];
    
    // Local Example
    sort = 'position';
    headings = ['Positions', 'Mass', 'Symbol', 'Name'];
    source = [
        {position: 6, mass: 12.011, symbol: 'C', name: 'Carbon'},
        {position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen'},
        {position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium'},
        {position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium'},
        {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'}
    ];

    // Local Example (w/ timeout)
    // sort = 'position';
    // headings = ['Positions', 'Mass', 'Symbol', 'Name'];
    // setTimeout(() => {
    //     source = [
    //         {position: 6, mass: 12.011, symbol: 'C', name: 'Carbon'},
    //         {position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen'},
    //         {position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium'},
    //         {position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium'},
    //         {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'}
    //     ];
    // }, 2000);

    // HTTP Example
    // https://jsonplaceholder.typicode.com/guide/
    // onMount(async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/user/1/posts');
    //     const data = await response.json();
    //     sort = 'userId';
    //     headings = Object.keys(data[0]);
    //     source = data;
    // });

    // Row Selection
    // let rowSelection: any;
    // function onSelect(event: any): void { rowSelection = event.detail; }
    function onSelect(event: any): void { console.log(event.detail); }

    // Sort
    // let sortSelection: any;
    // function onSort(event: any): void { sortSelection = event.detail; };
    function onSort(event: any): void { console.log(event.detail); };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Data Tables</h2>
        <p>Generate an interactive table, with search, sort, and pagination support.</p>
        <CodeBlock language="javascript" code={`import { DataTable } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <!-- <pre>sorted: {sortSelection ? JSON.stringify(sortSelection, null, 2) : sort}</pre> -->
        <!-- <pre>selected: {rowSelection ? JSON.stringify(rowSelection, null, 2) : 'None'}</pre> -->
        <DataTable {headings} {source} {search} {sort} select on:select={onSelect} on:sort={onSort}>
            <svelte:fragment slot="header">
                <input type="search" placeholder="Search..." bind:value={search}>
            </svelte:fragment>
            <!-- <svelte:fragment slot="loading"><p class="text-center">Loading table contents...</p></svelte:fragment> -->
            <!-- <svelte:fragment slot="footer"><p class="text-center">(pagination)</p></svelte:fragment> -->
        </DataTable>
    </Card>

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
