<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';

	// Props
	export let visible: boolean = false;
	export let position: string = 'top';
	export let background: string = 'bg-black dark:bg-white';
	export let color: string = 'text-white dark:text-black';
	export let width: string = 'w-auto';
	export let whitespace: string = 'whitespace-nowrap';
	export let rounded: string = 'rounded';
	export let duration: number = 100; // ms
	// Props (slots)
	export let popup: string | undefined = '';
	export let message: string | undefined = '';
	export let arrow: string | undefined = '';
	export let content: string | undefined = '';

	// Base Styles
	const cBaseTooltip: string = 'relative inline-flex justify-center items-center';
	const cBasePopup: string = 'flex absolute z-10 drop-shadow';
	const cBaseMessage: string = 'text-xs px-3 py-2';
	const cBaseArrow: string = 'h-2 w-2 -rotate-45';

	// Set Position
	let cPosition: string;
	function setPosition(): void {
		// prettier-ignore
		switch (position) {
			case 'left': cPosition = 'left-0 -translate-x-full flex-row items-center'; break;
			case 'right': cPosition = 'right-0 translate-x-full flex-row-reverse items-center'; break;
			case 'bottom': cPosition = 'bottom-0 translate-y-full flex-col-reverse items-center'; break;
			default: cPosition = 'top-0 -translate-y-full flex-col items-center'; // top
		}
	}
	setPosition(); // init

	// Set Arrow Position
	let cArrowPosition: string;
	function setArrowPosition(): void {
		// prettier-ignore
		switch (position) {
			case 'left': cArrowPosition = 'translate-x-[-50%]'; break;
			case 'right': cArrowPosition = 'translate-x-[50%]'; break;
			case 'bottom': cArrowPosition = 'translate-y-[50%]'; break;
			default: cArrowPosition = 'translate-y-[-50%]'; // top
		}
	}
	setArrowPosition(); // init

	// A11y Input Handler
	function onKeyDown(event: any): void {
		if (visible && event.code === 'Escape') {
			visible = false;
		}
	}

	// Handle mouse events
	function onMouseEnter(): void {
		visible = true;
	} // show
	function onMouseLeave(): void {
		visible = false;
	} // hide

	afterUpdate(() => {
		setPosition();
		setArrowPosition();
	});

	// Reactive Classes
	$: classesBase = `${cBaseTooltip} ${$$props.class || ''}`;
	$: classesPopup = `${cBasePopup} ${cPosition} ${popup}`;
	$: classesMessage = `${cBaseMessage} ${background} ${color} ${width} ${whitespace} ${rounded} ${message}`;
	$: classesArrow = `${cBaseArrow} ${cArrowPosition} ${background} ${arrow}`;
	$: classesContent = `${content}`;
</script>
<svelte:window on:keydown={onKeyDown} />
<div class="tooltip {classesBase}" data-testid="tooltip" role="tooltip">
	<!-- Popup -->
	{#if $$slots.message && visible}
		<div class="tooltip-popup {classesPopup}" data-testid="popup" in:fade={{ duration }} out:fade={{ duration }}>
			<div class="tooltip-message {classesMessage}" data-testid="message"><slot name="message" /></div>
			<div class="tooltip-arrow {classesArrow}" data-testid="arrow" />
		</div>
	{/if}

	<!-- Slot: Content -->
	{#if $$slots.content}
		<div class="tooltip-content {classesContent}" data-testid="content" on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
			<slot name="content" />
		</div>
	{/if}
</div>
