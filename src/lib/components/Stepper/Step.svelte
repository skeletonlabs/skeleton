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
	export let index = 0;
	/** When enabled, a lock icon appears and Next button is disabled, preventing progress. */
	export let locked = false;

	// Base Classes
	const cBase = 'grid grid-cols-[32px_1fr] gap-4';
	const cLine = 'w-1 h-full';
	const cLineBackground = 'bg-surface-300-600-token';
	const cNumeral = 'font-bold text-base w-8 h-8 rounded-full flex justify-center items-center';
	const cNumralBackground = 'bg-surface-300-600-token';
	const cDrawer = 'ml-1 space-y-4';
	const cNav = 'flex items-center space-x-2';

	// Context
	export let dispatch: any = getContext('dispatch');
	export let active: Writable<number> = getContext('active');
	export let length: number = getContext('length');
	export let duration: number = getContext('duration');
	// Context (overrides)
	export let color: string = getContext('color');
	export let background: string = getContext('background');
	export let buttonClassesBack: string = getContext('buttonClassesBack');
	export let buttonClassesNext: string = getContext('buttonClassesNext');
	export let buttonClassesComplete: string = getContext('buttonClassesComplete');
	export let buttonTextBack: string = getContext('buttonTextBack');
	export let buttonTextNext: string = getContext('buttonTextNext');
	export let buttonTextComplete: string = getContext('buttonTextComplete');

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
				<svg class="fill-token w-3 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
					/>
				</svg>
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
					{#if index !== 0}
						<button class={buttonClassesBack} on:click={stepPrev}>
							{@html buttonTextBack}
						</button>
					{/if}
					{#if $active + 1 < length}
						<button class={buttonClassesNext} on:click={stepNext} disabled={locked}>
							{@html buttonTextNext}
						</button>
					{:else}
						<button class={buttonClassesComplete} on:click={onComplete} disabled={locked}>
							{@html buttonTextComplete}
						</button>
					{/if}
				</footer>
			</div>
		{/if}
	</div>
</div>
