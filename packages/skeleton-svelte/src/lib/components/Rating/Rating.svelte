<script lang="ts">
	import type { RatingProps } from './types.js';

	let {
		value = 0,
		max = 5,
		fraction = 1,
		interactive = false,
		single = false,
		// Root
		base = 'flex w-full',
		text = 'text-token',
		fill = 'fill-token',
		justify = 'justify-center',
		spaceX = 'space-x-2',
		classes = '',
		// Item ---
		itemBase = 'w-full',
		itemAspect = 'aspect-[1/1]',
		itemClasses = '',
		// Snippets ---
		emptyIcon,
		fullIcon
	}: RatingProps = $props();
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

{#snippet rating(percentage)}
	<div class="relative">
		{#if percentage < 1}
			{@render empty()}
		{/if}
		{#if percentage > 0}
			<div class="clip absolute left-0 top-0 w-full" style="--clip_value: {100 - percentage * 100}%">
				{@render full()}
			</div>
		{/if}
	</div>
{/snippet}

<div class="{base} {text} {fill} {justify} {spaceX} {classes}" data-testid="rating">
	{#each { length: max } as _, i}
		<div class="{itemBase} {itemAspect} {itemClasses}">
			{@render rating(value - i)}
		</div>
	{/each}
</div>

<style>
	.clip {
		clip-path: inset(0 var(--clip_value) 0 0);
	}
</style>
