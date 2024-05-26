<script lang="ts">
	import type { RatingProps } from './types.js';

	let {
		value = $bindable(0),
		max = 5,
		interactive = false,
		fraction = 1,
		// Root
		base = 'flex',
		width = 'w-full',
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
		onmousedown = () => {},
		onkeydown = () => {},
		// Snippets ---
		iconEmpty,
		iconFull
	}: RatingProps = $props();

	function onRatingMousedown(event: MouseEvent, order: number) {
		const ratingRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
		const fractionWidth = ratingRect.width / fraction;
		const left = event.clientX - ratingRect.left;
		let selectedFraction = Math.floor(left / fractionWidth) + 1;

		if (getComputedStyle(figureElement).direction === 'rtl') selectedFraction = fraction - selectedFraction + 1;

		value = order + selectedFraction / fraction;
		onmousedown(event, value);
	}

	function onRatingKeydown(event: KeyboardEvent) {
		const rtl = getComputedStyle(figureElement).direction === 'rtl';
		switch (event.key) {
			case 'ArrowLeft':
				rtl ? increaseValue() : decreaseValue();
				break;
			case 'ArrowRight':
				rtl ? decreaseValue() : increaseValue();
				break;
		}
		onkeydown(event);
	}

	function refreshFocus() {
		const buttons = figureElement.querySelectorAll('button');
		// focus on the correct button depending on the new value.
		buttons[Math.max(0, Math.ceil(value - 1))].focus();
	}

	function increaseValue() {
		value = Math.min(max, value + 1 / fraction);
		refreshFocus();
	}

	function decreaseValue() {
		value = Math.max(0, value - 1 / fraction);
		refreshFocus();
	}

	let figureElement: HTMLElement;

	// Dynamic Classes
	const rxEmptyInteractive = $derived(interactive ? emptyInteractive : emptyStatic);
	const rxFullInteractive = $derived(interactive ? fullInteractive : fullStatic);

	// Use the latest rating or 0 if not available, ignoring fractions
	let focusedButtonIndex = $derived(Math.max(0, Math.ceil(value - 1)));

	$effect(() => {
		if (getComputedStyle(figureElement).direction === 'rtl') {
			emptyBase = emptyBase.replace('clip-left', 'clip-right');
			fullBase = fullBase.replace('clip-right', 'clip-left');
		} else {
			emptyBase = emptyBase.replace('clip-right', 'clip-left');
			fullBase = fullBase.replace('clip-left', 'clip-right');
		}
	});
</script>

<figure class="{base} {width} {text} {fill} {justify} {spaceX} {classes}" data-testid="rating" bind:this={figureElement}>
	{#each { length: max } as _, i}
		<button
			class="{buttonBase} {buttonPosition} {buttonAspect} {buttonClasses}"
			class:pointer-events-none={!interactive}
			tabindex={interactive && i === focusedButtonIndex ? 0 : -1}
			onmousedown={(event: MouseEvent) => interactive ? onRatingMousedown(event, i) : undefined}
			onkeydown={(event: KeyboardEvent) => interactive ? onRatingKeydown(event) : undefined}
			type="button"
		>
			<!-- Icon: Empty -->
			<span class="{emptyBase} {rxEmptyInteractive} {emptyClasses}" style="--clip_value: {(value - i) * 100}%">
				{#if iconEmpty}
					{@render iconEmpty()}
				{/if}
			</span>
			<!-- Icon: Full -->
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
