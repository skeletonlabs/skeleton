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

{#snippet rating(percentage)}
	<div class="relative">
		{#if percentage < 1}
			{#if emptyIcon}
				{@render emptyIcon()}
			{/if}
		{/if}
		{#if percentage > 0}
			<div class="clip absolute left-0 top-0 w-full" style="--clip_value: {100 - percentage * 100}%">
				{#if fullIcon}
					{@render fullIcon()}
				{/if}
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
