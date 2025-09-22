<script lang="ts" module>
	import { faker } from '@faker-js/faker';

	const users = Array.from({ length: 500 }, (_, i) => ({
		id: i + 1,
		name: faker.person.fullName(),
		email: faker.internet.email(),
		country: faker.location.country(),
	}));

	const PAGE_SIZE = 10;
</script>

<script>
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { Pagination } from '@skeletonlabs/skeleton-svelte';

	let page = $state(1);

	const start = $derived((page - 1) * PAGE_SIZE);
	const end = $derived(start + PAGE_SIZE);
	const data = $derived(users.slice(start, end));

	$inspect(page);
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

	<Pagination count={users.length} pageSize={PAGE_SIZE} {page} onPageChange={(event) => (page = event.page)}>
		<Pagination.PrevTrigger>
			<ArrowLeftIcon class="size-4" />
		</Pagination.PrevTrigger>
		<Pagination.Context>
			{#snippet children(pagination)}
				{#each pagination().pages as page, index (page)}
					{#if page.type === 'page'}
						<Pagination.Item {...page}>
							{page.value}
						</Pagination.Item>
					{:else}
						<Pagination.Ellipsis {index}>&#8230;</Pagination.Ellipsis>
					{/if}
				{/each}
			{/snippet}
		</Pagination.Context>
		<Pagination.NextTrigger>
			<ArrowRightIcon class="size-4" />
		</Pagination.NextTrigger>
	</Pagination>
</div>
