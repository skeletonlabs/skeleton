<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import type { DataTableModel } from '$lib/utilities/DataTable/types';

	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	// Utilities
	import { dataTableCreate, dataTableSelect, dataTableSort, dataTableSelectAll } from '$lib/utilities/DataTable/DataTable';
	// import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Data Tables',
		description: 'A set of utility features for creating interactive data tables.',
		imports: ['dataTableCreate'],
		types: ['DataTableModel'],
		source: 'utilities/Table',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
		keyboard: [
			['<kbd>Right Arrow</kbd>', 'Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.'],
			['<kbd>Left Arrow</kbd>', 'Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.'],
			['<kbd>Down Arrow</kbd>', 'Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.'],
			['<kbd>Up Arrow</kbd>', 'Moves focus one cell Up. If focus is on the top cell in the column, focus does not move.'],
			['<kbd>Home</kbd>', 'Moves focus to the first cell in the row that contains focus.'],
			['<kbd>End</kbd>', ' Moves focus to the last cell in the row that contains focus.'],
			['<kbd>Enter</kbd> or <kbd>Space</kbd>', 'Triggers the on:click event for the current row.']
		]
	};

	// Reactive
	$: dataTableModel = {
		search: '',
		sort: { key: '', asc: true },
		selection: [],
		source: [],
		current: []
	} as DataTableModel;
	$: dataTableElements = dataTableCreate(dataTableModel);

	// TODO: move to SvelteKit Load function
	async function getTableSource(): Promise<any> {
		const http = await fetch('https://jsonplaceholder.typicode.com/user/1/posts');
		const res = await http.json();
		if (http.ok) return res;
		throw new Error(res);
	}
	let asyncTableSource = getTableSource().then((res) => {
		// Select rows by query method
		res = dataTableSelect(res, 'id', [1]);
		// Insert response data into the table model
		dataTableModel.source = res;
		dataTableModel.current = res;
	});

	function sortHandler(sortBy: string): void {
		dataTableModel.sort.key = sortBy;
	}
</script>

<!--
- [X] search
- [X] sort
- [X] selection
- [X] async
- [ ] a11y
- [ ] pagination
- [ ] responsive styling (fixed/fluid cell width)
-->

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			{#await asyncTableSource}
				<p class="card card-body text-center">Loading Table...</p>
			{:then _}
				<!-- Search Input -->
				<input bind:value={dataTableModel.search} type="search" placeholder="Search Table..." />
				<!-- Table -->
				<div class="table-container">
					<!-- prettier-ignore -->
					<table class="table table-sort table-hover">
						<thead use:dataTableSort={sortHandler}>
							<tr>
								<th>
									<input type="checkbox" on:change={(e) => { dataTableElements = dataTableSelectAll(e, dataTableElements) }} />
								</th>
								<th data-sort="id">ID</th>
								<th data-sort="id">User</th>
								<th data-sort="title">Title</th>
								<th data-sort="body">Body</th>
								<th class="table-cell-fit"></th>
							</tr>
						</thead>
						<tbody>
							{#each dataTableElements.current as row, i}
								<tr class:table-row-selected={row.selected}>
									<td><input type="checkbox" bind:checked={row.selected} /></td>
									<td><em class="opacity-50">{row.id}</em></td>
									<td><Avatar src={`https://i.pravatar.cc/?img=${row.id}`} background="bg-accent-500" width="w-8" /></td>
									<td class="md:!whitespace-normal capitalize">{row.title}</td>
									<td class="md:!whitespace-normal">{row.body}</td>
									<td class="table-cell-fit">
										<button class="btn btn-ghost-surface btn-sm" on:click={()=>{console.log(row,i)}}>Console Log</button>
									</td>
								</tr>
							{/each}
						</tbody>
						<tfoot>
							<tr>
								<th colspan="5" class="text-right">Posts</th>
								<th>{dataTableElements.current.length}</th>
							</tr>
						</tfoot>
					</table>
				</div>
			{/await}
		</section>
		<!-- <pre>model: {JSON.stringify(dataTableModel, null, 2)}</pre> -->
		<!-- <pre>selection: {JSON.stringify(dataTableModel.selection, null, 2)}</pre> -->
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>(usage)</p>

			<!-- Limit to a single selection -->
			<!-- disabled={!row.selected && dataTableModel.selection.length > 0} -->
		</section>
	</svelte:fragment>
</DocsShell>
