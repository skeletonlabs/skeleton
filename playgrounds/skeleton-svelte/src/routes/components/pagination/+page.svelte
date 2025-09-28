<script lang="ts">
	import { Pagination } from '@skeletonlabs/skeleton-svelte';
</script>

<Pagination count={5000} pageSize={10}>
	<Pagination.PrevTrigger>Prev</Pagination.PrevTrigger>
	<Pagination.Context>
		{#snippet children(pagination)}
			{#each pagination().pages as page, index (page)}
				{#if page.type === 'page'}
					<Pagination.Item {...page}>{page.value}</Pagination.Item>
				{:else}
					<Pagination.Ellipsis {index}>&#8230;</Pagination.Ellipsis>
				{/if}
			{/each}
		{/snippet}
	</Pagination.Context>
	<Pagination.NextTrigger>Next</Pagination.NextTrigger>
</Pagination>
