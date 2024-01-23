<script lang="ts">
	import type { DataHandler } from '@vincjo/datatables';
	export let handler: DataHandler;
	const pageNumber = handler.getPageNumber();
	const pageCount = handler.getPageCount();
	const pages = handler.getPages({ ellipsis: true });
</script>

<!-- Desktop buttons -->
<section class="btn-group variant-ghost-surface [&>*+*]:border-surface-500 hidden lg:block">
	<button
		type="button"
		class="hover:variant-soft-primary"
		class:disabled={$pageNumber === 1}
		on:click={() => handler.setPage('previous')}
	>
		<i class="fa-solid fa-arrow-left"></i>
	</button>
	{#each $pages as page}
		<button
			type="button"
			class="hover:variant-soft-primary"
			class:active={$pageNumber === page}
			class:ellipse={page === null}
			on:click={() => handler.setPage(page)}
		>
			{page ?? '...'}
		</button>
	{/each}
	<button
		type="button"
		class="hover:variant-soft-primary"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => handler.setPage('next')}
	>
		<i class="fa-solid fa-arrow-right"></i>
	</button>
</section>

<!-- Mobile buttons -->
<section class="lg:hidden">
	<button
		type="button"
		class="btn variant-ghost-surface mr-2 mb-2 hover:variant-soft-primary"
		class:disabled={$pageNumber === 1}
		on:click={() => handler.setPage('previous')}
	>
		<i class="fa-solid fa-arrow-left"></i>
	</button>
	<button
		type="button"
		class="btn variant-ghost-surface mb-2 hover:variant-soft-primary"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => handler.setPage('next')}
	>
		<i class="fa-solid fa-arrow-right"></i>
	</button>
</section>
