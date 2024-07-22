<script lang="ts">
	import type { RatingProps } from './types.js';

	let {
		value = $bindable(0),
		max = 5,
		interactive = false,
		step = 1,
		// Root
		base = 'flex',
		width = 'w-full',
		justify = 'justify-center',
		spaceX = 'space-x-2',
		classes = '',
		// Item ---
		buttonBase = 'w-full h-full',
		buttonPosition = 'relative',
		buttonAspect = 'aspect-square',
		buttonClasses = '',
		// Icon Empty ---
		emptyBase = 'absolute left-0 top-0 flex items-center justify-center',
		emptyClip = '[clip-path:inset(0_0_0_var(--clipValue))] rtl:[clip-path:inset(0_var(--clipValue)_0_0)]',
		emptyInteractive = 'size-full',
		emptyStatic = 'w-fit',
		emptyClasses = '',
		// Icon Full ---
		fullBase = 'absolute left-0 top-0 flex items-center justify-center',
		fullClip = '[clip-path:inset(0_var(--clipValue)_0_0)] rtl:[clip-path:inset(0_0_0_var(--clipValue))]',
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
		const fractionWidth = ratingRect.width / step;
		const left = event.clientX - ratingRect.left;
		let selectedFraction = Math.floor(left / fractionWidth) + 1;

		if (getComputedStyle(figureElement).direction === 'rtl') selectedFraction = step - selectedFraction + 1;

		value = order + selectedFraction / step;
		onmousedown(event, value);
	}

	// https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio-rating/#kbd_label
	function onRatingKeydown(event: KeyboardEvent) {
		const rtl = getComputedStyle(figureElement).direction === 'rtl';
		if (['ArrowLeft', 'ArrowUp'].includes(event.key)) {
			event.preventDefault();
			rtl ? increaseValue() : decreaseValue();
		}
		if (['ArrowRight', 'ArrowDown'].includes(event.key)) {
			event.preventDefault();
			rtl ? decreaseValue() : increaseValue();
		}
		onkeydown(event);
	}

	function refreshFocus() {
		const buttons = figureElement.querySelectorAll('button');
		// focus on the correct button depending on the new value.
		buttons[Math.max(0, Math.ceil(value - 1))]?.focus();
	}

	function increaseValue() {
		value = Math.min(max, value + 1 / step);
		refreshFocus();
	}

	function decreaseValue() {
		value = Math.max(0, value - 1 / step);
		refreshFocus();
	}

	let figureElement: HTMLElement;

	// Dynamic Classesclip-path: inset(0 var(--clip_value) 0 0)
	const rxEmptyInteractive = $derived(interactive ? emptyInteractive : emptyStatic);
	const rxFullInteractive = $derived(interactive ? fullInteractive : fullStatic);

	// Use the latest rating or 0 if not available, ignoring fractions
	let focusedButtonIndex = $derived(Math.max(0, Math.ceil(value - 1)));
</script>

<figure class="{base} {width} {justify} {spaceX} {classes}" data-testid="rating" bind:this={figureElement}>
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
			<span class="{emptyBase} {emptyClip} {rxEmptyInteractive} {emptyClasses}" style="--clipValue: {(value - i) * 100}%">
				{#if iconEmpty}
					{@render iconEmpty()}
				{/if}
			</span>
			<!-- Icon: Full -->
			<span class="{fullBase} {fullClip} {rxFullInteractive} {fullClasses}" style="--clipValue: {100 - (value - i) * 100}%">
				{#if iconFull}
					{@render iconFull()}
				{/if}
			</span>
		</button>
	{/each}
</figure>
