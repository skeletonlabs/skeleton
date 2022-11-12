<script lang="ts">
	// HTTP response data provided by +page.ts
	import type { PageData } from './$types';
	export let data: PageData;
	let httpPosts = Object.values(data);

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import Paginator from '$lib/components/Paginator/Paginator.svelte';
	// Utilities
	import { type DataTableModel, dataTableCreate, dataTableSelect, dataTableSort, tableA11y } from '$lib/utilities/DataTable/DataTable';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Data Tables',
		description: 'A set of utility features for creating template-driven data tables.',
		// imports: ['dataTableCreate'],
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
		source: httpPosts,
		current: dataTableSelect(httpPosts, 'id', [1]),
		search: '',
		sort: { key: 'id', asc: true },
		selection: [],
		pagination: { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] }
	} as DataTableModel;
	$: dataTableElements = dataTableCreate(dataTableModel);

	function sortHandler(sortBy: string): void {
		if (dataTableModel.sort) dataTableModel.sort.key = sortBy;
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<!-- Search Input -->
			<input bind:value={dataTableModel.search} type="search" placeholder="Search Table..." />
			<!-- Table -->
			<div class="table-container">
				<!-- prettier-ignore -->
				<table class="table table-sort table-hover" role="grid" use:tableA11y>
					<thead use:dataTableSort={sortHandler}>
						<tr>
							<th>
								<!-- <input type="checkbox" /> -->
							</th>
							<th data-sort="id">ID</th>
							<th data-sort="id">User</th>
							<th data-sort="title">Title</th>
							<th data-sort="body">Body</th>
							<th class="table-cell-fit"></th>
						</tr>
					</thead>
					<tbody>
						{#each dataTableElements.current as row, rowIndex}
							<tr class:table-row-selected={row.selected} aria-rowindex={rowIndex + 1}>
								<!-- Cell: Checkbox -->
								<td role="gridcell" aria-colindex={1} tabindex="0">
									<input type="checkbox" bind:checked={row.selected} />
								</td>
								<!-- Cell: ID -->
								<td role="gridcell" aria-colindex={2} tabindex="0">
									<em class="opacity-50">{row.id}</em>
								</td>
								<!-- Cell: User -->
								<td role="gridcell" aria-colindex={3} tabindex="0">
									<Avatar src={`https://i.pravatar.cc/?img=${row.id}`} background="bg-accent-500" width="w-8" />
								</td>
								<!-- Cell: Title -->
								<td role="gridcell" aria-colindex={4} tabindex="0" class="md:!whitespace-normal capitalize">
									{row.title}
								</td>
								<!-- Cell: Body -->
								<td role="gridcell" aria-colindex={5} tabindex="0" class="md:!whitespace-normal">
									{row.body}
								</td>
								<!-- Cell: Actions -->
								<td role="gridcell" aria-colindex={6} tabindex="0" class="table-cell-fit">
									<button class="btn btn-ghost-surface btn-sm" on:click={()=>{console.log(row,rowIndex)}}>Console Log</button>
								</td>
							</tr>
						{/each}
					</tbody>
					<tfoot>
						<tr>
							<td colspan="6">
								{#if dataTableModel.pagination}
									<Paginator bind:settings={dataTableModel.pagination} />
								{/if}
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock language="ts" code={JSON.stringify(dataTableModel.selection, null, 2)} />
			<!-- Limit to a single selection -->
			<!-- disabled={!row.selected && dataTableModel.selection.length > 0} -->
		</section>
	</svelte:fragment>
</DocsShell>
