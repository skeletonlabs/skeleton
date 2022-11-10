<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	// Utilities
	import { dataTableCreate } from '$lib/utilities/DataTable/DataTable';
	// import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Data Tables',
		description: 'A set of utility features for creating interactive data tables.',
		imports: ['dataTableCreate'],
		types: ['DataTableModel'],
		source: 'utilities/Table',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/'
		// keyboard: [
		// 	['<kbd>Right Arrow</kbd>', 'Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.'],
		// 	['<kbd>Left Arrow</kbd>', 'Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.'],
		// 	['<kbd>Down Arrow</kbd>', 'Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.'],
		// 	['<kbd>Up Arrow</kbd>', 'Moves focus one cell Up. If focus is on the top cell in the column, focus does not move.'],
		// 	['<kbd>Home</kbd>', 'Moves focus to the first cell in the row that contains focus.'],
		// 	['<kbd>End</kbd>', ' Moves focus to the last cell in the row that contains focus.'],
		// 	['<kbd>Enter</kbd> or <kbd>Space</kbd>', 'Triggers the on:selected event.']
		// ]
	};

	// Local
	const sourceData = [
		{ selected: false, id: 0, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ selected: false, id: 1, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ selected: false, id: 2, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ selected: false, id: 3, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ selected: false, id: 4, name: 'Boron', weight: 10.811, symbol: 'B' },
		{ selected: false, id: 5, name: 'Carbon', weight: 12.0107, symbol: 'C' },
		{ selected: false, id: 6, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
		{ selected: false, id: 7, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
		{ selected: false, id: 8, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
		{ selected: false, id: 9, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
	];

	// Reactive
	$: dataTableModel = {
		search: '',
		sort: '',
		selection: [],
		source: sourceData,
		current: sourceData
	};
	$: dataTableElements = dataTableCreate(dataTableModel);
	$: totalWeight = dataTableModel.current.reduce((accumulator, obj) => accumulator + obj.weight, 0);

	function logToconsole(rowData: any, rowIndex: number): void {
		console.log({ rowData, rowIndex });
	}
</script>

<!--
- search - DONE
- sort - PARTIAL (need toggle,arrow)
- selection - DONE
- pagination
- async support
-->

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<!-- Search Input -->
			<input bind:value={dataTableModel.search} type="search" placeholder="Search..." />

			<!-- Table -->
			<!-- prettier-ignore -->
			<div class="table-container">
				<table class="table table-hover table-sort">
					<thead>
						<tr>
							<th>&nbsp;</th>
							<th on:click={()=>{dataTableModel.sort = 'id'}}>Unique ID</th>
							<th on:click={()=>{dataTableModel.sort = 'symbol'}}>Symbol</th>
							<th on:click={()=>{dataTableModel.sort = 'name'}}>Name</th>
							<th on:click={()=>{dataTableModel.sort = 'weight'}}>Weight</th>
							<th class="table-cell-fit">&nbsp;</th>
						</tr>
					</thead>
					<tbody>
						{#each dataTableElements.current as row, i}
							<tr>
								<!-- Limit to a single selection -->
								<!-- disabled={!row.selected && dataTableModel.selection.length > 0} -->
								<td><input type="checkbox" bind:checked={row.selected} /></td>
								<td>{row.id}</td>
								<td><Avatar initials={row.symbol} background="bg-accent-500" width="w-9" /></td>
								<td><strong>{row.name}</strong></td>
								<td>{row.weight}</td>
								<td class="table-cell-fit">
									<button class="btn btn-ghost-surface btn-sm" on:click={()=>{logToconsole(row,i)}}>Console Log</button>
								</td>
							</tr>
						{/each}
					</tbody>
					<tfoot>
						<tr>
							<td colspan="4" class="text-right">Total Weight</td>
							<td>{totalWeight}</td>
							<td>&nbsp;</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</section>
		<!-- <pre>{JSON.stringify(dataTableModel, null, 2)}</pre> -->
		<pre>{JSON.stringify(dataTableModel.selection, null, 2)}</pre>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>(usage)</p>
		</section>
	</svelte:fragment>
</DocsShell>
