<!--
TODO:
- Search - DONE
- Sort - DONE
- Pagination
-->

<script lang="ts">
    import { afterUpdate } from "svelte";

    // Props
    export let headings: any[];
    export let source: any[];
    export let search: any;
    export let sort: string;
    export let debug: boolean = false;

    // Local
    let filteredSource: any[] = source;
    let sorted: any = {by: sort, prior: ''};

    // Base Classes
    const cBaseWrapper: string = 'overflow-y-auto w-full';
    const cBaseTable: string = 'w-full rounded overflow-hidden table-auto';
    // ---
    const cBaseHead: string = 'bg-surface-50 dark:bg-surface-700';
    const cBaseHeadRow: string = '';
    const cBaseHeadCol: string = 'py-4 px-6 text-xs font-medium text-left text-surface-900 dark:text-surface-50 cursor-pointer';
    // ---
    const cBaseBody: string = '';
    const cBaseBodyRow: string = 'border-t border-surface-500/30 even:bg-surface-500/[5%] hover:bg-surface-500/20';
    const cBaseBodyCol: string = 'py-4 px-6 text-sm font-medium text-surface-900 whitespace-nowrap dark:text-white';
    // ---
    const cBaseFoot: string = '';

    function findColumnKeyByIndex(i: number): string {
        if (!source.length) return; 
        return Object.keys(source[0])[i];
    }

    // Search Handler
    function searchHandler(): void {
        if (!source.length) return;
        if (search === undefined) { filteredSource = source; return; }
        filteredSource = source.filter(row => {
            const matchCondition: boolean = JSON.stringify(Object.values(row)).toLowerCase().includes(search.toLowerCase());
            if (matchCondition) { return row; }
        });
    }

    // Sort Handler - https://www.javascripttutorial.net/javascript-array-sort/
    function sortHandler(column: string): void {
        if (!source.length) return; 
        sorted.by = column;
        filteredSource = filteredSource.sort((x, y) => {
            // Sort ASC
            switch (typeof x[sorted.by]) {
                case ('number'):
                    return x[sorted.by] - y[sorted.by];
                default:
                    let a = x[sorted.by].toString().toUpperCase(),
                        b = y[sorted.by].toString().toUpperCase();
                    return a == b ? 0 : a > b ? 1 : -1;
            }
            // TODO: add DESC toggle sort
        });
    }

    // Selection Handlers
    function onHeadSelect(headIndex: number): void {
        if (!source.length) return; 
        sortHandler(findColumnKeyByIndex(headIndex));
    }
    function onRowSelect(row: Object): void {
        // TODO: dispatch on:select event
        console.log(row);
    }

    // On Onit
    searchHandler();
    sortHandler(sorted.by);

    // After Prop Update
    afterUpdate(() => {
        searchHandler();
        sortHandler(sorted.by);
    })
</script>

{#if debug === false}

<!-- Header -->
{#if $$slots.header}
<header class="table-header"><slot name="header" /></header>
{/if}

<!-- Wrapper -->
<div class="table-wrapper {cBaseWrapper}">

    <!-- Table -->
    <table class="table {cBaseTable}">

        <!-- Head -->
        <thead class="table-head {cBaseHead}">
            <!-- Head -->
            <tr class="table-head-row {cBaseHeadRow}">
                {#each headings as head, i}
                <th class="table-head-col {cBaseHeadCol}" scope="col" on:click={() => { onHeadSelect(i) }}>
                    {@html head}
                    <span class="inline-block w-4 text-center ml-1 opacity-50">
                        {#if findColumnKeyByIndex(i) === sorted.by}&darr;{/if}
                    </span>
                </th>
                {/each}
            </tr>
        </thead>

        <!-- Body -->
        {#if source.length > 0}

        <!-- Populated State -->
        <tbody class="table-body {cBaseBody}">
            {#each filteredSource as row, i}
            <tr class="table-body-row {cBaseBodyRow}" on:click={() => { onRowSelect(row) }}>
                {#each Object.values(row) as cell}
                <td class="table-body-col {cBaseBodyCol}">{@html cell}</td>
                {/each}
            </tr>
            {/each}
        </tbody>

        {:else}

        <!-- Empty State -->
        <tbody>
            <tr>
                <td colspan={headings.length} class="text-center pt-4 px-4 opacity-50">
                    {#if $$slots.empty}<slot name="empty" />{:else}No results available.{/if}
                </td>
            </tr>
        </tbody>

        {/if}

        <!-- Foot -->
        {#if $$slots.tfoot}
        <tfoot class="tBaseFoot {cBaseFoot}">
            <tr><td colspan={headings.length} class="pt-4"><slot name="tfoot" /></td></tr>
        </tfoot>
        {/if}

    </table>

</div>

{:else}

<pre>search: {search}</pre>
<pre>sorted: {JSON.stringify(sorted, null, 2)}</pre>
<pre>headings: {JSON.stringify(headings, null, 2)}</pre>
<pre>filteredSource: {JSON.stringify(filteredSource, null, 2)}</pre>
<pre>source: {JSON.stringify(source, null, 2)}</pre>

{/if}