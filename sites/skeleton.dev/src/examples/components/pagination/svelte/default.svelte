<script>
	import { faker } from '@faker-js/faker';
	import { Pagination } from '@skeletonlabs/skeleton-svelte';

	const users = Array.from({ length: 500 }, (_, i) => ({
		id: i + 1,
		name: faker.person.fullName(),
		email: faker.internet.email(),
		country: faker.location.country(),
	}));

	const pageSize = 10;
	let page = $state(1);

	const start = $derived((page - 1) * pageSize);
	const end = $derived(start + pageSize);
	const data = $derived(users.slice(start, end));
</script>

<div class="grid gap-2 w-full place-items-center">
	<table class="table table-auto">
		<thead>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Email</th>
				<th>Country</th>
			</tr>
		</thead>
		<tbody>
			{#each data as user}
				<tr>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{user.country}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<Pagination count={users.length} {pageSize} {page} onPageChange={(e) => (page = e.detail.page)}>
		<Pagination.PrevTrigger>Prev</Pagination.PrevTrigger>
		<Pagination.Context>
			{#snippet children(pagination)}
				{#each pagination.pages as p, i}
					{#if p.type === 'page'}
						<Pagination.Item {...p}>
							{p.value}
						</Pagination.Item>
					{:else}
						<Pagination.Ellipsis {i}>…</Pagination.Ellipsis>
					{/if}
				{/each}
			{/snippet}
		</Pagination.Context>
		<Pagination.NextTrigger>Next</Pagination.NextTrigger>
	</Pagination>
</div>
