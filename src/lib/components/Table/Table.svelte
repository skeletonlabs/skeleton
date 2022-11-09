<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { TableSource } from '$lib/components/Table/types';
	import { onTableKeydown } from '$lib/components/Table/utils-a11y';

	const dispatch = createEventDispatcher();

	// Props
	/**
	 * Provide the table source data.
	 * @type {TableSource}
	 */
	export let source: TableSource;
	/** Adds row hover style and enables row click handler. */
	export let interactive: boolean = false;

	// Local
	let elemTable: HTMLElement;

	// Row Click Handler
	function onRowClick(event: MouseEvent | KeyboardEvent, rowIndex: number): void {
		if (!interactive || !source.meta) return;
		event.preventDefault();
		event.stopPropagation();
		/** @event {Meta} selected - Fires when a table row is clicked. */
		dispatch('selected', source.meta[rowIndex]);
	}

	// Row Keydown Handler
	function onRowKeydown(event: KeyboardEvent, rowIndex: number): void {
		if (['Enter', 'Space'].includes(event.code)) onRowClick(event, rowIndex);
	}
</script>

<div class="table-simple">
	<!-- Container -->
	<div class="table-container">
		<!-- Table -->
		<!-- prettier-ignore -->
		<table
			bind:this={elemTable}
			class="table"
			class:table-hover={interactive}
			role="grid"
			on:keydown={(e) => onTableKeydown(elemTable, e)}
		>
			<!-- Head -->
			<thead>
				<tr>
					{#each source.head as heading, i}
						<th>{@html heading}</th>
					{/each}
				</tr>
			</thead>
			<!-- Body -->
			<tbody>
				{#each source.body as row, rowIndex}
					<!-- Row -->
					<!-- prettier-ignore -->
					<tr
                        on:click={(e) => { onRowClick(e, rowIndex); }}
                        on:keydown={(e) => { onRowKeydown(e, rowIndex); }}
                        aria-rowindex={rowIndex + 1}
                    >
						{#each row as cell, cellIndex}
                            <!-- Cell -->
                            <!-- prettier-ignore -->
							<td
                                role="gridcell"
                                aria-colindex={cellIndex + 1}
                                tabindex={cellIndex === 0 ? 0 : -1}
                            >
                                {@html cell ? cell : '-'}
                            </td>
						{/each}
					</tr>
				{/each}
			</tbody>
			<!-- Foot -->
			{#if source.foot}
				<tfoot>
					<tr>
						{#each source.foot as cell, i}
							<td>{@html cell}</td>
						{/each}
					</tr>
				</tfoot>
			{/if}
		</table>
	</div>
</div>
