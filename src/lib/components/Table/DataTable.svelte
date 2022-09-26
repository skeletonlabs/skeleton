<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { sortAsc, sortDesc } from './DataTableService';

	const dispatch = createEventDispatcher();

	// Props
	export let headings: any[] = [];
	export let source: any[] = [];
	export let search: any = '';
	export let sort: string = '';
	export let count: number = source.length;
	export let interactive: boolean = false;
	export let async: boolean = false;
	// Props: Design
	export let header: string = 'bg-surface-50 dark:bg-surface-700';
	export let body: string = 'bg-surface-200 dark:bg-surface-800';
	export let text: string = 'text-sm';
	export let color: string | undefined = '';
	export let hover: string = 'hover:bg-primary-500/10';
	// A11y
	export let labelledby: string | undefined = '';
	export let describedby: string | undefined = '';

	// Local
	let elemTable: HTMLElement;
	let sourceUnfiltered: any[] = [...source]; // clone
	let sorted: any = { by: sort, asc: false };

	// Base Classes
	const cBase: string = 'space-y-4';
	const cBaseWrapper: string = 'overflow-x-auto w-full rounded-lg border-[1px] border-surface-500/10 border-inset';
	const cBaseTable: string = 'w-full overflow-hidden table-auto';
	const cBaseEmpty: string = 'p-4 text-center';
	// ---
	const cBaseHead: string = '';
	const cBaseHeadRow: string = 'capitalize font-medium text-left';
	const cBaseHeadCol: string = `p-3 py-4 whitespace-nowrap cursor-pointer`;
	// ---
	const cBaseBody: string = '';
	const cBaseBodyRow: string = 'border-t border-surface-500/10 even:bg-black/[4%]';
	const cBaseBodyCol: string = 'p-3 font-medium whitespace-nowrap md:whitespace-normal';

	function headKeyByIndex(i: number): string {
		return Object.keys(source[0])[i];
	}

	function onHeadSelect(i: number) {
		const column: string = headKeyByIndex(i);
		dispatch('sorted', column);
		async ? (sorted.by = column) : localSort(column);
	}

	function onRowSelect(r: Object) {
		if (interactive === true) {
			dispatch('selected', r);
		}
	}

	// Sort
	function localSort(column: string): void {
		if (!source.length) return;
		// If same column, toggle asc/desc
		if (column === sorted.by) {
			sorted.asc = !sorted.asc;
			sorted.asc ? sortAscending(column) : sortDescending(column);
			// If new column, sort asc
		} else {
			sorted.asc = true;
			sortAscending(column);
		}
		// Update states
		sorted.by = column;
		updateRowCount();
	}

	function sortAscending(key: string): void {
		source = sortAsc(source, key);
	}

	function sortDescending(key: string): void {
		source = sortDesc(source, key);
	}

	// Search
	function localSearch(): void {
		if (async) return;
		source = sourceUnfiltered.filter((row) => {
			const match: boolean = JSON.stringify(Object.values(row)).toLowerCase().includes(search.toLowerCase());
			if (match) return row;
		});
		updateRowCount();
	}

	// Count
	function updateRowCount(): void {
		count = source.length;
	}

	// A11y Input Handler
	// prettier-ignore
	function onKeyDown(event: KeyboardEvent): void {
		// Arrow Keys
		const hotKeys: string[] = ['ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'Home', 'End'];
		if (hotKeys.includes(event.code)) {
			event.preventDefault();
			// prettier-ignore
			switch (event.code) {
				case 'ArrowUp': setActiveCell(0, -1); break;
				case 'ArrowDown': setActiveCell(0, 1); break;
				case 'ArrowLeft': setActiveCell(-1, 0); break;
				case 'ArrowRight': setActiveCell(1, 0); break;
				case 'Home': jumpToOuterColumn('first'); break;
				case 'End': jumpToOuterColumn('last'); break;
				default: break;
			}
		}
	}
	function setActiveCell(x: number, y: number): void {
		// Focused Element
		const focusedElem: Element | null = document.activeElement;
		if (!focusedElem || !focusedElem.parentElement || !focusedElem.parentElement.ariaRowIndex || !focusedElem.ariaColIndex) return;
		const focusedElemRowIndex: number = parseInt(focusedElem.parentElement.ariaRowIndex);
		const focusedElemColIndex: number = parseInt(focusedElem.ariaColIndex);
		// Target Element
		const targetRowElement: HTMLElement | null = elemTable.querySelector(`[aria-rowindex="${focusedElemRowIndex + y}"]`);
		if (targetRowElement !== null) {
			const targetColElement: HTMLElement | null = targetRowElement.querySelector(`[aria-colindex="${focusedElemColIndex + x}"]`);
			if (targetColElement !== null) {
				targetColElement.focus();
			}
		}
	}
	function getTargetElem(): HTMLElement | null {
		// Focused Element
		const focusedElem: Element | null = document.activeElement;
		if (!focusedElem || !focusedElem.parentElement || !focusedElem.parentElement.ariaRowIndex) return null;
		const focusedElemRowIndex: number = parseInt(focusedElem.parentElement.ariaRowIndex);
		// Return Target Element
		return elemTable.querySelector(`[aria-rowindex="${focusedElemRowIndex}"]`);
	}

	function jumpToOuterColumn(type: 'first' | 'last' = 'first'): void {
		const targetRowElement = getTargetElem();
		if (targetRowElement === null) return;
		const lastIndex: number = targetRowElement.children.length - 1;
		const selected = type === 'first' ? 1 : lastIndex;
		const targetColElement: HTMLElement | null = targetRowElement.querySelector(`[aria-colindex="${selected}"]`);
		if (targetColElement === null) return;
		targetColElement.focus();
	}

	// On Prop Change
	$: if (sort) {
		localSort(sort);
	}
	$: if (search || search === '') {
		localSearch();
	}

	// Reactive Classes
	$: classesBase = `${cBase} ${$$props.class || ''}`;
	$: classesTable = `${cBaseTable} ${text} ${color}`;
	$: classesHeader = `${cBaseHead} ${header}`;
	$: classesHeadCol = `${cBaseHeadCol} ${hover}`;
	$: classesBody = `${cBaseBody} ${body}`;
	$: cRowInteractive = interactive ? `${hover} cursor-pointer` : '';
	$: classesBodyRoll = `${cBaseBodyRow} ${cRowInteractive}`;
</script>

<div class="data-table {classesBase}" data-testid="data-table">
	<!-- Header -->
	{#if $$slots.header}<header class="table-header"><slot name="header" /></header>{/if}

	<!-- Wrapper -->
	<div class="table-wrapper {cBaseWrapper}">
		<!-- Table -->
		<table
			bind:this={elemTable}
			class="table {classesTable}"
			on:keydown={onKeyDown}
			role="grid"
			aria-labelledby={labelledby}
			aria-describedby={describedby}
			aria-colcount={headings.length}
			aria-rowcount={source.length}
		>
			<!-- Head -->
			<thead class="table-head {classesHeader}">
				<!-- Head -->
				<tr class="table-head-row {cBaseHeadRow}">
					{#each headings as head, i}
						<th
							class="table-head-col {classesHeadCol}"
							scope="col"
							on:click={() => {
								onHeadSelect(i);
							}}
							role="columnheader"
						>
							{@html head}
							<span class="inline-block w-3 text-center ml-1 opacity-50">
								{#if headKeyByIndex(i) === sorted.by}
									{@html sorted.asc ? '&darr;' : '&uarr;'}
								{/if}
							</span>
						</th>
					{/each}
				</tr>
			</thead>

			<!-- Body -->
			<tbody class="table-body {classesBody}">
				{#if source.length > 0}
					{#each source as row, rowIndex}
						<tr
							class="table-body-row {classesBodyRoll}"
							on:click={() => {
								onRowSelect(row);
							}}
							aria-rowindex={rowIndex + 1}
						>
							{#each Object.values(row) as cell, colIndex}
								<td class="table-body-col {cBaseBodyCol}" role="gridcell" aria-colindex={colIndex + 1} tabindex={colIndex === 0 ? 0 : -1}>{@html cell}</td>
							{/each}
						</tr>
					{/each}
				{:else}
					<!-- Empty -->
					<tr
						><td colspan={headings.length} class="table-empty {cBaseEmpty}">
							{#if $$slots.empty}<slot name="empty" />{:else}No results available.{/if}
						</td></tr
					>
				{/if}
			</tbody>
		</table>
	</div>

	<!-- Footer -->
	{#if $$slots.footer}<footer class="table-footer"><slot name="footer" /></footer>{/if}
</div>
