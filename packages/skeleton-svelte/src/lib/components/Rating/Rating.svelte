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
		buttonBase = 'w-full h-full',
		buttonPosition = 'relative',
		buttonAspect = 'aspect-square',
		buttonClasses = '',
		// Icon Empty ---
		emptyBase = 'clip-left absolute left-0 top-0 flex items-center justify-center',
		emptyInteractive = 'size-full',
		emptyStatic = 'w-fit',
		emptyClasses = '',
		// Icon Full ---
		fullBase = 'clip-right absolute left-0 top-0 flex items-center justify-center',
		fullInteractive = 'size-full',
		fullStatic = 'w-fit',
		fullClasses = '',
		// Events
		onclick = () => {},
		// Snippets ---
		iconEmpty,
		iconFull
	}: RatingProps = $props();

	function onRatingClick(event: Event, order: number) {
		let selectedFraction = 1;
		// Handle Mouse Events
		if (event instanceof PointerEvent) {
			const ratingRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
			const fractionWidth = ratingRect.width / fraction;
			const left = event.clientX - ratingRect.left;
			selectedFraction = Math.floor(left / fractionWidth) + 1;
			value = order + selectedFraction / fraction;
			onclick(event, value);
		}
		// Handle Keyboard Events
		else {
			/* ... */
		}
	}

	// Dynamic Classes
	const rxEmptyInteractive = $derived(interactive ? emptyInteractive : emptyStatic);
	const rxFullInteractive = $derived(interactive ? fullInteractive : fullStatic);
</script>

<figure class="{base} {text} {fill} {justify} {spaceX} {classes}" data-testid="rating">
	{#each { length: max } as _, i}
		<button
			class="{buttonBase} {buttonPosition} {buttonAspect} {buttonClasses}"
			class:pointer-events-none={!interactive}
			onclick={(event: MouseEvent | PointerEvent) => interactive ? onRatingClick(event, i) : undefined}
		>
			<span class="{emptyBase} {rxEmptyInteractive} {emptyClasses}" style="--clip_value: {(value - i) * 100}%">
				{#if iconEmpty}
					{@render iconEmpty()}
				{/if}
			</span>
			<span class="{fullBase} {rxFullInteractive} {fullClasses}" style="--clip_value: {100 - (value - i) * 100}%">
				{#if iconFull}
					{@render iconFull()}
				{/if}
			</span>
		</button>
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
