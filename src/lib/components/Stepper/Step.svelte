<!-- Reference: https://dribbble.com/shots/16221169-Figma-Material-Ui-components-Steppers-and-sliders -->
<script lang="ts">
	// Slots
	/**
	 * @slot header - Override the auto-generated heading with your own value. Typically a step title.
	 */

	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { Writable } from 'svelte/store';

	// Props
	/** Indicates the step index value. Should start with 0 (zero) */
	export let index: number = 0;
	/** When enabled, a lock icon appears and Next button is disabled, preventing progress. */
	export let locked: boolean = false;

	// Base Classes
	const cBase: string = 'grid grid-cols-[32px_1fr] gap-4';
	const cLine: string = 'w-1 h-full';
	const cLineBackground = 'bg-surface-300-600-token';
	const cNumeral: string = 'font-bold text-base w-8 h-8 rounded-full flex justify-center items-center';
	const cNumralBackground: string = 'bg-surface-300-600-token';
	const cDrawer: string = 'ml-1 space-y-4';
	const cNav: string = 'flex items-center space-x-2';

	// Context
	export let dispatch: any = getContext('dispatch');
	export let active: Writable<number> = getContext('active');
	//AUDIT provide override details as per AccordionItem for items below?
	export let length: number = getContext('length');
	export let color: string = getContext('color');
	export let background: string = getContext('background');
	export let buttonBack: string = getContext('buttonBack');
	export let buttonNext: string = getContext('buttonNext');
	export let buttonComplete: string = getContext('buttonComplete');
	export let duration: number = getContext('duration');

	// Step Handlers
	function stepPrev(): void {
		active.set($active - 1);
	}
	function stepNext(): void {
		active.set($active + 1);
	}
	function onComplete() {
		dispatch('complete', {});
	}

	// Reactive
	$: isLastItem = index === length - 1;
	// Base
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	// Timeline (line)
	$: classesLineBackgroundColor = index < $active ? `${background}` : `${cLineBackground}`;
	$: classesLineBackground = !isLastItem ? `${classesLineBackgroundColor}` : '';
	$: classesLine = `${cLine} ${classesLineBackground}`;
	// Timeline (numeral)
	$: classesNumeralBackground = index <= $active ? `${color} ${background}` : `${cNumralBackground}`;
	$: classesNumeral = `${cNumeral} ${classesNumeralBackground}`;
	// Content Drawer
	$: classesDrawerPadding = !isLastItem ? 'pb-10' : '0';
	$: classesDrawer = `${cDrawer} ${classesDrawerPadding}`;
	// Content Nav
	$: classesNav = `${cNav}`;
</script>

<div class="step {classesBase}" data-testid="step">
	<!-- Timeline -->
	<div class="step-timeline flex flex-col items-center">
		<!-- Numeral -->
		<div class="step-numeral flex-none {classesNumeral}">
			{#if locked}
				🔒
			{:else}
				{@html index < $active ? '&check;' : index + 1}
			{/if}
		</div>
		<!-- Line -->
		{#if !isLastItem}<div class="step-line {classesLine}" />{/if}
	</div>
	<!-- Content -->
	<div class="step-content {classesDrawer}">
		<!-- Slot: Header -->
		<header class="step-header"><slot name="header"><h4>Step {index + 1}</h4></slot></header>
		{#if index === $active}
			<div class="step-body space-y-4" transition:slide|local={{ duration }}>
				<!-- Slot: Default -->
				<slot />
				<!-- Nav -->
				<footer class="step-navigation {classesNav}">
					{#if index !== 0}<button class="btn {buttonBack}" on:click={stepPrev}>&uarr;</button>{/if}
					{#if $active + 1 < length}
						<button class="btn {buttonNext}" on:click={stepNext} disabled={locked}>Next &darr;</button>
					{:else}
						<button class="btn {buttonComplete}" on:click={onComplete} disabled={locked}>Complete</button>
					{/if}
				</footer>
			</div>
		{/if}
	</div>
</div>
