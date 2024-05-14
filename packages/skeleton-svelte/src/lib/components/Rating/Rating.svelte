<script lang="ts">
	import type { RatingProps } from './types.js';

	let {
		value = $bindable(0),
		max = 5,
		interactive = false,
		fraction = 1,
		// Root
		base = 'flex w-full',
		text = 'text-token',
		fill = 'fill-token',
		justify = 'justify-center',
		spaceX = 'space-x-2',
		classes = '',
		// Item ---
		itemBase = 'w-full h-full',
		itemPosition = 'relative',
		itemAspect = 'aspect-square',
		itemClasses = '',
		// Snippets ---
		iconEmpty: emptyIcon,
		iconFull: fullIcon
	}: RatingProps = $props();

	function onRatingClick(event: Event, order: number) {
		let selectedFraction = 1;
		// handling mouse
		if (event instanceof PointerEvent) {
			const ratingRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
			const fractionWidth = ratingRect.width / fraction;
			const left = event.clientX - ratingRect.left;
			selectedFraction = Math.floor(left / fractionWidth) + 1;
		}
		// handling keyboard
		else {
		}
		value = order + selectedFraction / fraction;
	}
</script>

{#snippet rating(order, percentage)}
	{#if interactive}
		<button type="button" class="{itemBase} {itemPosition} {itemAspect} {itemClasses}" onclick={(event) => onRatingClick(event, order)}>
			<div class="clip-left absolute left-0 top-0 flex h-full w-full items-center justify-center" style="--clip_value: {percentage * 100}%">
				{#if emptyIcon}
					{@render emptyIcon()}
				{/if}
			</div>
			<div
				class="clip-right absolute left-0 top-0 flex h-full w-full items-center justify-center"
				style="--clip_value: {100 - percentage * 100}%"
			>
				{#if fullIcon}
					{@render fullIcon()}
				{/if}
			</div>
		</button>
	{:else}
		<div class="{itemBase} {itemPosition} {itemAspect} {itemClasses}">
			<div class="clip-left absolute left-0 top-0 w-fit" style="--clip_value: {percentage * 100}%">
				{#if emptyIcon}
					{@render emptyIcon()}
				{/if}
			</div>
			<div class="clip-right absolute left-0 top-0 w-fit" style="--clip_value: {100 - percentage * 100}%">
				{#if fullIcon}
					{@render fullIcon()}
				{/if}
			</div>
		</div>
	{/if}
{/snippet}

<figure class="{base} {text} {fill} {justify} {spaceX} {classes}" data-testid="rating">
	{#each { length: max } as _, i}
		{@render rating(i, value - i)}
	{/each}
</figure>

<style>
	.clip-left {
		clip-path: inset(0 0 0 var(--clip_value));
	}
	.clip-right {
		clip-path: inset(0 var(--clip_value) 0 0);
	}
</style>
