<script lang="ts">
	//Import local datatable components
	import Search from './Search.svelte';
    import ThFilter from './ThFilter.svelte';
	import ThSort from './ThSort.svelte';
	import RowCount from './RowCount.svelte';
    import RowsPerPage from './RowsPerPage.svelte';
	import Pagination from './Pagination.svelte';

	//Load remote data
	import { reload } from './api';

	//Import handler & Types from SSD remote
	import { DataHandler } from '@vincjo/datatables/remote';
	import type { State, Row } from '@vincjo/datatables/remote';

	//Init data handler - SERVER
	const handler = new DataHandler<Row>([], { rowsPerPage: 5, totalRows: 200 });
	const rows = handler.getRows();

	handler.onChange((state: State) => reload(state));
	handler.invalidate();
</script>

<div class=" overflow-x-auto space-y-2">
	<header class="flex justify-between">
		<Search {handler} />
		<RowsPerPage {handler} />
	</header>
	<table class="table table-hover table-compact w-full table-auto">
		<thead>
			<tr>
				<ThSort {handler} orderBy="id">ID</ThSort>
				<ThSort {handler} orderBy="title">Title</ThSort>
				<ThSort {handler} orderBy="completed">Completed</ThSort>
			</tr>
			<tr>
				<ThFilter {handler} filterBy="id" />
				<ThFilter {handler} filterBy="title" />
				<ThFilter {handler} filterBy="completed" />
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.id}</td>
					<td>{row.title}</td>
					<td>{row.completed ? '✅' : '❌'}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<footer class="flex justify-between">
		<RowCount {handler} />
		<Pagination {handler} />
	</footer>
</div>
