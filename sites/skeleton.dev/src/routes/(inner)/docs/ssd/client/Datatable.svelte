<script lang="ts">
	//Import local datatable components
	import Search from './Search.svelte';
    import ThFilter from './ThFilter.svelte';
	import ThSort from './ThSort.svelte';
	import RowCount from './RowCount.svelte';
    import RowsPerPage from './RowsPerPage.svelte';
	import Pagination from './Pagination.svelte';

	//Load local data
	import data from './data';

	//Import handler from SSD
	import { DataHandler } from '@vincjo/datatables';

	//Init data handler
	const handler = new DataHandler(data, { rowsPerPage: 5 });
	const rows = handler.getRows();
</script>

<div class=" overflow-x-auto space-y-2">
	<header class="flex justify-between">
		<Search {handler} />
		<RowsPerPage {handler} />
	</header>

	<table class="table table-hover table-compact w-full table-auto">
		<thead>
			<tr>
				<ThSort {handler} orderBy="first_name">First name</ThSort>
				<ThSort {handler} orderBy="last_name">Last name</ThSort>
				<ThSort {handler} orderBy="email">Email</ThSort>
			</tr>
			<tr>
				<ThFilter {handler} filterBy="first_name" />
				<ThFilter {handler} filterBy="last_name" />
				<ThFilter {handler} filterBy="email" />
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.first_name}</td>
					<td>{row.last_name}</td>
					<td>{row.email}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<footer class="flex justify-between">
		<RowCount {handler} />
		<Pagination {handler} />
	</footer>
</div>
