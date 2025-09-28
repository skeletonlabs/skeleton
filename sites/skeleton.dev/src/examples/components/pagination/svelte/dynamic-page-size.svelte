<script lang="ts" module>
	import { faker } from '@faker-js/faker';

	const users = Array.from({ length: 500 }, (_, i) => ({
		id: i + 1,
		name: faker.person.fullName(),
		email: faker.internet.email(),
		country: faker.location.country(),
	}));
</script>

<script>
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { Pagination } from '@skeletonlabs/skeleton-svelte';

	let page = $state(1);
	let pageSize = $state(10);

	const start = $derived((page - 1) * pageSize);
	const end = $derived(start + pageSize);
	const data = $derived(users.slice(start, end));
</script>

<div class="grid gap-4 w-full place-items-center">
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

	<div class="flex justify-between items-center gap-4 w-full">
		<label class="label">
			<span class="label-text sr-only">Page Size</span>
			<select class="select" value={pageSize} onchange={(e) => (pageSize = Number(e.currentTarget.value))}>
				<option value="5">5</option>
				<option value="10">10</option>
				<option value="20">20</option>
			</select>
		</label>
		<Pagination count={users.length} {pageSize} {page} onPageChange={(event) => (page = event.page)}>
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
</div>
