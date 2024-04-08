<script lang="ts">
	import type { RatingProps } from './types.js';

	let { emptyIcon, fullIcon }: RatingProps = $props();
</script>

{#snippet empty()}
	{#if emptyIcon}
		{@render emptyIcon()}
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-star"
			><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg
		>
	{/if}
{/snippet}

{#snippet full()}
	{#if fullIcon}
		{@render fullIcon()}
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-star"
		>
			<polygon
				points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
				fill="currentColor"
			/>
		</svg>
	{/if}
{/snippet}

{#snippet rating()}
	<div class="relative">
		{@render empty()}
		<div class="full-icon absolute left-0 top-0 w-full">
			{@render full()}
		</div>
	</div>
{/snippet}

<style>
	.full-icon {
		clip-path: inset(0 50% 0 0);
	}
</style>
