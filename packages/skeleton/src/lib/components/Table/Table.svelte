<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { tableA11y } from '../..';

	// Types
	import type { CssClasses, TableSource } from '../..';

	const dispatch = createEventDispatcher();

	// Props
	/**
	 * Provide the full set of table source data.
	 * @type {TableSource}
	 */
	export let source: TableSource;
	/** Enables row hover style and `on:selected` event when rows are clicked. */
	export let interactive = false;

	// Props (styles)
	/** Override the Tailwind Element class. Replace this for a headless UI. */
	export let element: CssClasses = 'table';
	/** Provide classes to set the table text size. */
	export let text: CssClasses = '';
	/** Provide classes to set the table text color. */
	export let color: CssClasses = '';
	/** Provide arbitrary classes for the table head. */
	export let regionHead: CssClasses = '';
	/** Provide arbitrary classes for the table head cells. */
	export let regionHeadCell: CssClasses = '';
	/** Provide arbitrary classes for the table body. */
	export let regionBody: CssClasses = '';
	/** Provide arbitrary classes for the table cells. */
	export let regionCell: CssClasses = '';
	/** Provide arbitrary classes for the table foot. */
	export let regionFoot: CssClasses = '';
	/** Provide arbitrary classes for the table foot cells. */
	export let regionFootCell: CssClasses = '';

	// Row Click Handler
	function onRowClick(event: MouseEvent | KeyboardEvent, rowIndex: number): void {
		if (!interactive) return;
		event.preventDefault();
		event.stopPropagation();
		// Prefer meta row info if available, else fallback to body row info
		const rowMetaData = source.meta ? source.meta[rowIndex] : source.body[rowIndex];
		/** @event {rowMetaData} selected - Fires when a table row is clicked. */
		dispatch('selected', rowMetaData);
	}

	// Row Keydown Handler
	function onRowKeydown(event: KeyboardEvent, rowIndex: number): void {
		if (['Enter', 'Space'].includes(event.code)) onRowClick(event, rowIndex);
	}

	// Reactive
	$: classesBase = `${$$props.class || ''}`;
	$: classesTable = `${element} ${text} ${color}`;
</script>

<div class="table-container {classesBase}">
	<!-- Table -->
	<!-- prettier-ignore -->
	<table
		class="{classesTable}"
		class:table-interactive={interactive}
		role="grid"
		use:tableA11y
	>
		<!-- on:keydown={(e) => onTableKeydown(elemTable, e)} -->
		<!-- Head -->
		<thead class="table-head {regionHead}">
			<tr>
				{#each source.head as heading }
					<th class="{regionHeadCell}">{@html heading}</th>
				{/each}
			</tr>
		</thead>
		<!-- Body -->
		<tbody class="table-body {regionBody}">
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
							class="{regionCell}"
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
			<tfoot class="table-foot {regionFoot}">
				<tr>
					{#each source.foot as cell }
						<td class="{regionFootCell}">{@html cell}</td>
					{/each}
				</tr>
			</tfoot>
		{/if}
	</table>
</div>
