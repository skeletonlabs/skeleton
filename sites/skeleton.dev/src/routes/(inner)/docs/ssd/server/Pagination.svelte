<script lang="ts">
	import type { DataHandler } from '@vincjo/datatables/remote';
	export let handler: DataHandler;

	const pageNumber = handler.getPageNumber();
	const pageCount = handler.getPageCount();
	const pages = handler.getPages({ ellipsis: true });

	const setPage = (value: 'previous' | 'next' | number) => {
		handler.setPage(value);
		handler.invalidate();
	};
</script>

<!-- Desktop buttons -->
<section class="btn-group variant-ghost-surface [&>*+*]:border-surface-500 h-10 hidden lg:block">
	<button
		type="button"
		class="hover:variant-soft-secondary"
		class:disabled={$pageNumber === 1}
		on:click={() => setPage('previous')}
	>
		←
	</button>
	{#each $pages as page}
		<button
			type="button"
			class="hover:variant-soft-secondary"
			class:active={$pageNumber === page}
			class:ellipse={page === null}
			on:click={() => setPage(page)}
		>
			{page ?? '...'}
		</button>
	{/each}
	<button
		type="button"
		class="hover:variant-soft-secondary"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => setPage('next')}
	>
		→
	</button>
</section>

<!-- Mobile buttons -->
<section class="lg:hidden">
	<button
		type="button"
		class="btn variant-ghost-surface mr-2 mb-2 hover:variant-soft-secondary"
		class:disabled={$pageNumber === 1}
		on:click={() => setPage('previous')}
	>
		←
	</button>
	<button
		type="button"
		class="btn variant-ghost-surface mb-2 hover:variant-soft-secondary"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => setPage('next')}
	>
		→
	</button>
</section>
