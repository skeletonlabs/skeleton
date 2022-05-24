<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Card from "$lib/Card/Card.svelte";
    import DataTable from "$lib/Table/DataTable.svelte";

    // Table
    let search: any;
    let sort: string = 'position';
    let headings: string[] = ['Positions', 'Mass', 'Symbol', 'Name'];
    let source: any[] = [
        {position: 6, mass: 12.011, symbol: 'C', name: 'Carbon'},
        {position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen'},
        {position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium'},
        {position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium'},
        {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'}
    ]
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Data Tables</h2>
        <p>Generate an interactive table, with search, sort, and pagination support.</p>
        <CodeBlock language="javascript" code={`import { DataTable } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card>
        <DataTable {headings} {source} {search} {sort}>
            <svelte:fragment slot="header">
                <input type="text" bind:value={search} placeholder="Search...">
            </svelte:fragment>
            <svelte:fragment slot="empty">
                <p>Nothing to see here, folks!</p>
            </svelte:fragment>
            <!-- <svelte:fragment slot="tfoot">
                <div class="text-center">(footer)</div>
            </svelte:fragment> -->
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
