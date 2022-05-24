<script lang="ts">
    import { afterUpdate, createEventDispatcher } from "svelte";
    import { sortTableAscending } from "./DataTableService";

    // Event Handler
    const dispatch = createEventDispatcher();

    // Props
    export let headings: any[] = [];
    export let source: any[] = [];
    export let search: any = '';
    export let sort: string = '';
    export let select: boolean = false;
    // Props: Design
    export let hover: string = 'hover:bg-primary-500/10 cursor-pointer';
    // Props: Dev
    export let debug: boolean = false;

    // Local
    let filteredSource: any[] = source;

    // Base Classes
    const cBase: string = 'space-y-4';
    const cBaseWrapper: string = 'overflow-x-auto w-full';
    const cBaseTable: string = 'w-full rounded-lg overflow-hidden table-auto';
    const cBaseLoading: string = 'text-center p-4 rounded-lg opacity-30';
    // ---
    const cBaseHead: string = 'bg-surface-50 dark:bg-surface-700';
    const cBaseHeadRow: string = 'capitalize text-xs font-medium text-left text-surface-900 dark:text-surface-50';
    const cBaseHeadCol: string = 'p-3 whitespace-nowrap cursor-pointer';
    // ---
    const cBaseBody: string = '';
    const cBaseBodyRow: string = 'border-t border-surface-500/30 even:bg-surface-500/[5%]';
    const cBaseBodyCol: string = 'p-3 text-sm font-medium text-surface-900 whitespace-nowrap md:whitespace-normal dark:text-white';

    // Lookup Column Key
    function findColumnKeyByIndex(i: number): string {
        if (!source.length) return;
        return Object.keys(source[0])[i];
    }

    // Search Handler
    function searchHandler(): void {
        if (!source.length) return;
        if (search === undefined) { search = ''; }
        filteredSource = source.filter(row => {
            const matchCondition: boolean = JSON.stringify(Object.values(row)).toLowerCase().includes(search.toLowerCase());
            if (matchCondition) { return row; }
        });
    }

    // Sort Handler
    // https://www.javascripttutorial.net/javascript-array-sort/
    function sortHandler(column: string): void {
        if (!source.length || !filteredSource.length || !sort) return; 
        sortTableAscending(filteredSource, column);
    }

    // Selection Handlers
    function onHeadSelect(headIndex: number): void {
        if (!source.length) return;
        if (Object.keys(source[0]).includes(sort) !== true) return;
        sort = findColumnKeyByIndex(headIndex); // triggers afterUpdate()
        dispatch('sort', sort);
    }
    function onRowSelect(row: Object): void {
        if (!select) return;
        dispatch('select', row);
    }

    // After Prop Update
    afterUpdate(() => {
        searchHandler();
        sortHandler(sort);
    })

    // Reactive Classes
    $: cRowHover = select ? hover : '';
    $: classesBodyRoll = `${cBaseBodyRow} ${cRowHover}`;
</script>

<div class="data-table {cBase} {$$props.class}" data-testid="data-table">
    {#if source.length > 0}

        <!-- Header -->
        {#if $$slots.header}<header class="table-header"><slot name="header" /></header>{/if}

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
                            <span class="inline-block w-3 text-center ml-1 opacity-50">
                                {#if findColumnKeyByIndex(i) === sort}&darr;{/if}
                            </span>
                        </th>
                        {/each}
                    </tr>
                </thead>

                <!-- Body -->
                <tbody class="table-body {cBaseBody}">
                    {#if filteredSource.length > 0}

                        {#each filteredSource as row, i}
                        <tr class="table-body-row {classesBodyRoll}" on:click={() => { onRowSelect(row) }}>
                            {#each Object.values(row) as cell}
                            <td class="table-body-col {cBaseBodyCol}">{@html cell}</td>
                            {/each}
                        </tr>
                        {/each}

                    {:else}

                        <!-- No Search Results -->
                        <tr><td colspan={headings.length} class="pt-4 text-center">
                            <span>"<strong>{search}</strong>" was not found</span>
                        </td></tr>

                    {/if}
                </tbody>

            </table>

        </div>

        <!-- Footer -->
        {#if $$slots.footer}<footer class="table-footer"><slot name="footer" /></footer>{/if}

    {:else}

        <!-- Loading -->
        {#if $$slots.loading}<slot name="loading" />{:else}<div class="{cBaseLoading}">Loading...</div>{/if}

    {/if}
</div>

{#if debug}
<pre>search: {search}</pre>
<pre>sort: {JSON.stringify(sort, null, 2)}</pre>
<pre>headings: {JSON.stringify(headings, null, 2)}</pre>
<pre>filteredSource: {JSON.stringify(filteredSource, null, 2)}</pre>
<pre>source: {JSON.stringify(source, null, 2)}</pre>
{/if}
