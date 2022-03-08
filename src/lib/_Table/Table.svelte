<!-- NOTE: this is a temporary substitute until a DateTable component can be created -->

<script lang="ts">
    export let source: any;
</script>

{#if source}
<table class="table-basic">
    <thead>
        <!-- Head -->
        <tr>
            {#each source.columns as column}
            <th scope="col">{column}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        <!-- Rows -->
        {#each source.data as row}
        <tr>
            <!-- Cells -->
            {#each row as cell, i}
            <td class:opacity-50="{i > 0}">
                {@html cell}
            </td>
            {/each}
        </tr>
        {/each}
    </tbody>
</table>
{/if}

<style lang="postcss">
    table { @apply w-full rounded overflow-hidden table-auto; }
    table thead { @apply bg-surface-50 dark:bg-surface-700; }
    table thead th { @apply py-3 px-6 text-xs font-medium text-left text-surface-700 uppercase dark:text-surface-400; }
    table tbody tr { @apply bg-white border-t dark:bg-surface-800 dark:border-surface-700; }
    table tbody td { @apply py-4 px-6 text-sm font-medium text-surface-900 whitespace-nowrap dark:text-white; }
</style>
