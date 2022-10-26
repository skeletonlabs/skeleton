<script lang="ts">
	//Slots
	/**
	 * @slot empty - Overrides the default "no results found" message when the table is empty.
	 * @slot footer - Displays below the table. Useful for embedding pagination.
	 * @slot header - Dislays above the table. Useful for embedding search and filter inputs.
	 */

	import { createEventDispatcher } from 'svelte';
	import { sortAsc, sortDesc } from './DataTableService';

	const dispatch = createEventDispatcher();

	// Props
	/**
	 * Provide a list of table headings.
	 * @type {string[]}
	 */
	export let headings: string[] = [];
	/**
	 * Provide the table body content.
	 * @type {any[]}
	 */
	export let source: any[] = [];
	/** Provide a term for local fuzzy search within the compoonent. */
	export let search: string = '';
	/** Defines the sort key value. */
	export let sort: string = '';
	/** When using async mode, use this to get a count of rows. */
	export let count: number = source.length;
	/** Enables row hover and selection features. */
	export let interactive: boolean = false;
	/** Disables search/sort within the component, allowing for server-side pagination. */
	export let async: boolean = false;

	// Props (styles)
	/** Provide classes to set the table header background color. */
	export let header: string = 'bg-surface-200-700-token';
	/** Provide classes to set the table body background color. */
	export let body: string = 'bg-surface-100-800-token';
	/** Provide classes to set the table text size. */
	export let text: string = 'text-sm';
	/** Provide classes to set the table text color. */
	export let color: string = '';
	/** Provide classes to set the hover background color. */
	export let hover: string = 'bg-hover-token';

	// Props (a11y)
	/** Provide the ID of the element that labels the table. */
	export let labelledby: string = '';
	/** Provide the ID of the element that describes the table. */
	export let describedby: string = '';

	// Local
	let elemTable: HTMLElement;
	let sourceUnfiltered: any[] = [...source]; // clone
	let sorted: any = { by: sort, asc: false };

	// Base Classes
	const cBase: string = 'space-y-4';
	const cBaseWrapper: string = 'overflow-x-auto w-full rounded-container-token border-[1px] border-neutral-900/5 dark:border-neutral-50/5 border-inset';
	const cBaseTable: string = 'w-full overflow-hidden table-auto';
	const cBaseEmpty: string = 'p-4 text-center';
	// ---
	const cBaseHead: string = '';
	const cBaseHeadRow: string = 'capitalize font-medium text-left';
	const cBaseHeadCol: string = `p-3 py-4 whitespace-nowrap cursor-pointer`;
	// ---
	const cBaseBody: string = '';
	const cBaseBodyRow: string = 'border-t border-neutral-900/5 dark:border-neutral-50/5 even:bg-black/[2%]';
	const cBaseBodyCol: string = 'p-3 font-medium whitespace-nowrap md:whitespace-normal';

	function headKeyByIndex(i: number): string {
		return Object.keys(source[0])[i];
	}

	function onHeadSelect(i: number) {
		const column: string = headKeyByIndex(i);
		/** @event {{ headKeyIndex: number }} sorted - Fires a table column is sorted. */
		dispatch('sorted', column);
		async ? (sorted.by = column) : localSort(column);
	}

	function onRowSelect(r: Object) {
		if (interactive === true) {
			/** @event {{ row: Object }} selected - Fires when a table row is clicked. */
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
		const lastIndex: number = targetRowElement.children.length;
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
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
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
