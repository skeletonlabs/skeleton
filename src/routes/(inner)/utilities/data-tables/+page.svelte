<script lang="ts">
	// HTTP response data provided by +page.ts
	import type { PageData } from './$types';
	export let data: PageData;
	let httpPosts = Object.values(data);

	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import Paginator from '$lib/components/Paginator/Paginator.svelte';
	// Utilities
	// prettier-ignore
	import {
		type DataTableModel,
		dataTableHandler,
		dataTableSelect,
		dataTableSelectAll,
		dataTableSorter,
		dataTableInteraction,
		tableA11y
	} from '$lib/utilities/DataTable/DataTable';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Data Tables',
		description: 'A set of utility features for creating template-driven data tables.',
		imports: ['dataTableHandler'],
		types: ['DataTableModel'],
		source: 'utilities/Table',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
		keyboard: [
			['<kbd>Right Arrow</kbd>', 'Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.'],
			['<kbd>Left Arrow</kbd>', 'Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.'],
			['<kbd>Down Arrow</kbd>', 'Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.'],
			['<kbd>Up Arrow</kbd>', 'Moves focus one cell Up. If focus is on the top cell in the column, focus does not move.'],
			['<kbd>Home</kbd>', 'Moves focus to the first cell in the row that contains focus.'],
			['<kbd>End</kbd>', ' Moves focus to the last cell in the row that contains focus.']
			// ['<kbd>Enter</kbd> or <kbd>Space</kbd>', 'Triggers the on:click event for the current row.']
		]
	};

	// Store
	const dataTableModel: Writable<DataTableModel> = writable({
		source: httpPosts,
		filtered: httpPosts,
		selection: [],
		search: '',
		sort: '',
		pagination: { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] }
	});
	dataTableModel.subscribe((v) => dataTableHandler(v));

	// Manual Selection
	dataTableSelect(dataTableModel, 'id', [1]);
</script>

<!--
TODO:
- [X] Search sould be case-insensitive
- [X] Recreate dataTableSelect() - query select on load 
- [/] Use a11y action to apply role/aria tags - not possible
- [X] Implement sort asc/dsc toggle
- [X] Clean up CSS and responsive styles
- [X] Test combined filtering for edge cases
- [ ] Doc Usage/Code inline

Next Update:
- [ ] Select all checkbox using indeterminate: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
-->

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card !bg-accent-500/5">
			<!-- Search Input -->
			<div class="card-header">
				<input bind:value={$dataTableModel.search} type="search" placeholder="Search Table..." />
			</div>
			<!-- Table -->
			<div class="card-body">
				<div class="table-container">
					<!-- prettier-ignore -->
					<table class="table table-hover" role="grid" use:dataTableInteraction use:tableA11y>
						<thead on:click={(e) => { dataTableSorter(e, dataTableModel) }} on:keypress>
							<tr>
								<th><input type="checkbox" on:click={(e) => { dataTableSelectAll(e, dataTableModel) }} /></th>
								<th data-sort="id">ID</th>
								<th>User</th>
								<th data-sort="title">Title</th>
								<th data-sort="body">Body</th>
								<th class="table-cell-fit"></th>
							</tr>
						</thead>
						<tbody>
							{#each $dataTableModel.filtered as row, rowIndex}
								<tr class:table-row-checked={row.checked} aria-rowindex={rowIndex + 1}>
									<td role="gridcell" aria-colindex={1} tabindex="0">
										<input type="checkbox" bind:checked={row.checked} />
									</td>
									<td role="gridcell" aria-colindex={2} tabindex="0">
										<em class="opacity-50">{row.id}</em>
									</td>
									<td role="gridcell" aria-colindex={3} tabindex="0">
										<Avatar src={`https://i.pravatar.cc/?img=${row.id}`} background="bg-accent-500" width="w-8" />
									</td>
									<td role="gridcell" aria-colindex={4} tabindex="0" class="md:!whitespace-normal capitalize">
										{row.title}
									</td>
									<td role="gridcell" aria-colindex={5} tabindex="0" class="md:!whitespace-normal">
										{row.body}
									</td>
									<td role="gridcell" aria-colindex={6} tabindex="0" class="table-cell-fit">
										<button class="btn btn-ghost-surface btn-sm" on:click={()=>{console.log(row,rowIndex)}}>Console Log</button>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<div class="card-footer">
				{#if $dataTableModel.pagination}<Paginator bind:settings={$dataTableModel.pagination} />{/if}
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock language="ts" code={JSON.stringify($dataTableModel.selection, null, 2)} />
			<!-- Limit to a single selection -->
			<!-- disabled={!row.selected && dataTableModel.selection.length > 0} -->
		</section>
	</svelte:fragment>
</DocsShell>
