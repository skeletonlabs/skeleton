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
		itemBase = 'w-full',
		itemAspect = 'aspect-[1/1]',
		itemClasses = '',
		// Snippets ---
		emptyIcon,
		fullIcon
	}: RatingProps = $props();

	let hoverValue = $state(0);
	let hovering = $state(false);
	let lastSelectedFraction = $state(1);

	function onRatingClick(event: Event, order: number) {
		// handling mouse
		if (event instanceof PointerEvent) {
			const ratingRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
			console.log(event);
			const fractionWidth = ratingRect.width / fraction;
			const left = event.clientX - ratingRect.left;
			lastSelectedFraction = Math.floor(left / fractionWidth) + 1;
		}
		// handling keyboard
		else {
		}
		value = order + lastSelectedFraction / fraction;
	}

	function onRatingHover(event: Event, order: number) {
		// handling mouse
		if (event instanceof MouseEvent) {
			const ratingRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
			const fractionWidth = ratingRect.width / fraction;
			const left = event.clientX - ratingRect.left;
			lastSelectedFraction = Math.floor(left / fractionWidth) + 1;
		}
		// handling keyboard
		else {
		}
		hovering = true;
		hoverValue = order + lastSelectedFraction / fraction;
	}

	function onRatingLeave() {
		hovering = false;
	}
</script>

{#snippet rating(order, percentage)}
	{#if interactive}
		<button
			type="button"
			class="relative h-full w-full"
			onclick={(event) => onRatingClick(event, order)}
			onmousemove={(event) => onRatingHover(event, order)}
			onmousedown={(event) => onRatingHover(event, order)}
			onfocus={(event) => onRatingHover(event, order)}
		>
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
		<div class="relative">
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

<div
	role="group"
	class="{base} {text} {fill} {justify} {spaceX} {classes}"
	data-testid="rating"
	onmouseleave={onRatingLeave}
	onblur={onRatingLeave}
>
	{#each { length: max } as _, i}
		<div class="{itemBase} {itemAspect} {itemClasses}">
			{@render rating(i, hovering ? hoverValue - i : value - i)}
		</div>
	{/each}
</div>

<style>
	.clip-left {
		clip-path: inset(0 0 0 var(--clip_value));
	}
	.clip-right {
		clip-path: inset(0 var(--clip_value) 0 0);
	}
</style>
