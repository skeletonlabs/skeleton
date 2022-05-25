<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { sortAscNumber, sortDescNumber, sortAscString, sortDescString } from "./DataTableService";

    const dispatch = createEventDispatcher();

    // Props
    export let headings: any[] = [];
    export let source: any[] = [];
    export let search: any = '';
    export let sort: string = '';
    export let count: number = source.length;
    export let interactive: boolean = false;
    export let server: boolean = false;
    // Props: Design
    export let hover: string = 'hover:bg-primary-500/10';

    // Local
    let sourceUnfiltered: any[] = [...source]; // clone
    let sorted: any = {by: sort, asc: false};

    // Base Classes
    const cBase: string = 'space-y-4';
    const cBaseWrapper: string = 'overflow-x-auto w-full';
    const cBaseTable: string = 'w-full rounded-lg overflow-hidden table-auto';
    // ---
    const cBaseHead: string = 'bg-surface-50 dark:bg-surface-700';
    const cBaseHeadRow: string = 'capitalize text-xs font-medium text-left text-surface-900 dark:text-surface-50';
    const cBaseHeadCol: string = 'p-3 whitespace-nowrap cursor-pointer';
    // ---
    const cBaseBody: string = '';
    const cBaseBodyRow: string = 'border-t border-surface-500/30 even:bg-surface-500/[5%]';
    const cBaseBodyCol: string = 'p-3 text-sm font-medium text-surface-900 whitespace-nowrap md:whitespace-normal dark:text-white';

    function headKeyByIndex(i: number): string {
        return Object.keys(source[0])[i];
    }

    function onHeadSelect(i: number) {
        const column: string = headKeyByIndex(i);
        dispatch('sorted', column);
        server ? sorted.by = column : localSort(column);
    }

    function onRowSelect(r: Object) {
        if (interactive === true) { dispatch('selected', r); }
    }

    // Sort
    function localSort(column: string): void {
        if (!source.length) return;
        // If same column, toggle asc/desc
        if (column === sorted.by) {
            sorted.asc = !sorted.asc;
            sorted.asc ? sortAsc(column) : sortDesc(column);
        // If new column, sort asc
        } else {
            sorted.asc = true;
            sortAsc(column);
        }
        // Update states
        sorted.by = column;
        count = source.length;
    }

        function sortAsc(key: string): void {
            source = typeof source[0][key] === 'number' ? sortAscNumber(source, key) : sortAscString(source, key);
        }
        
        function sortDesc(key: string): void {
            source = typeof source[0][key] === 'number' ? sortDescNumber(source, key) : sortDescString(source, key);
        }

    // Search
    function localSearch(): void {
        if (server) return;
        source = sourceUnfiltered.filter(row => {
            const match: boolean = JSON.stringify(Object.values(row)).toLowerCase().includes(search.toLowerCase());
            if (match) return row;
        });
        count = source.length;
    }

    // On Prop Change
    $: if (sort) { localSort(sort); }
    $: if (search || search === '') { localSearch(); }

    // Reactive Classes
    $: cRowInteractive = interactive ? `${hover} cursor-pointer` : '';
    $: classesBodyRoll = `${cBaseBodyRow} ${cRowInteractive}`;
</script>

<div class="data-table {cBase} {$$props.class}" data-testid="data-table">

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
                            {#if headKeyByIndex(i) === sorted.by}&darr;{/if}
                        </span>
                    </th>
                    {/each}
                </tr>
            </thead>

            <!-- Body -->
            <tbody class="table-body {cBaseBody}">
                {#if source.length > 0}

                    {#each source as row, i}
                    <tr class="table-body-row {classesBodyRoll}" on:click={() => { onRowSelect(row) }}>
                        {#each Object.values(row) as cell}
                        <td class="table-body-col {cBaseBodyCol}">{@html cell}</td>
                        {/each}
                    </tr>
                    {/each}

                {:else}

                    <!-- No Search Results -->
                    <tr><td colspan={headings.length} class="pt-4 text-center">No results to display.</td></tr>

                {/if}
            </tbody>

        </table>

    </div>

    <!-- Footer -->
    {#if $$slots.footer}<footer class="table-footer"><slot name="footer" /></footer>{/if}

</div>
