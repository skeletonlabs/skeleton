<!-- Reference: https://dribbble.com/shots/16221169-Figma-Material-Ui-components-Steppers-and-sliders -->
<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { Writable } from 'svelte/store';

	// Components
	import Button from '$lib/components/Button/Button.svelte';

	// Props
	export let index: number = 0;
	export let locked: boolean = false;

	// Base Classes
	const cBase: string = 'grid grid-cols-[32px_1fr] gap-4';
	const cLine: string = 'w-1 h-full';
	const cLineBackground = 'bg-surface-300 dark:bg-surface-700';
	const cNumeral: string = 'font-bold text-base w-8 h-8 rounded-full flex justify-center items-center';
	const cNumralBackground: string = 'bg-surface-300 dark:bg-surface-700';
	const cDrawer: string = 'ml-1 space-y-4';
	const cNav: string = 'flex items-center space-x-2';

	// Context
	export let dispatch: any = getContext('dispatch');
	export let active: Writable<number> = getContext('active');
	export let length: any = getContext('length');
	export let color: any = getContext('color');
	export let background: any = getContext('background');
	export let buttonBack: any = getContext('buttonBack');
	export let buttonNext: any = getContext('buttonNext');
	export let buttonComplete: any = getContext('buttonComplete');
	export let duration: any = getContext('duration');

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
	$: classesBase = `${cBase} ${$$props.class || ''}`;
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
	<div class="flex flex-col items-center">
		<!-- Numeral -->
		<div class="step-numeral flex-none {classesNumeral}">
			{#if locked}
				🔒
			{:else}
				{@html index < $active ? '&check;' : index + 1}
			{/if}
		</div>
		<!-- Line -->
		{#if !isLastItem}<div class="line {classesLine}" />{/if}
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
				<footer class="step-footer {classesNav}">
					{#if index !== 0}<Button {...buttonBack} on:click={stepPrev}>&uarr;</Button>{/if}
					{#if $active + 1 < length}
						<Button {...buttonNext} on:click={stepNext} disabled={locked}>Next &darr;</Button>
					{:else}
						<Button {...buttonComplete} on:click={onComplete} disabled={locked}>{buttonComplete.text}</Button>
					{/if}
				</footer>
			</div>
		{/if}
	</div>
</div>
