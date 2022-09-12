<!-- Reference: https://dribbble.com/shots/16221169-Figma-Material-Ui-components-Steppers-and-sliders -->
<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';

	// Components
	import Button from '$lib/components/Button/Button.svelte';

	// Props
	export let index: number = 0;

	// Base Classes
	const cStep: string = 'grid grid-cols-[18px_1fr] gap-4';
	const cLine: string = 'w-1 h-full';
	const cLineBackground = 'bg-surface-300 dark:bg-surface-700';
	const cNumeral: string = 'font-bold text-base w-8 h-8 rounded-full flex justify-center items-center';
	const cNumralBackground: string = 'bg-surface-300 dark:bg-surface-700';
	const cDrawer: string = 'ml-4 space-y-4';
	const cNav: string = 'flex items-center space-x-2';

	// Context
	export let dispatch: any = getContext('dispatch');
	export let active: any = getContext('active');
	export let length: any = getContext('length');
	export let color: any = getContext('color');
	export let background: any = getContext('background');
	export let buttonBack: any = getContext('buttonBack');
	export let buttonNext: any = getContext('buttonNext');
	export let buttonComplete: any = getContext('buttonComplete');

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
	// Step
	$: classesStep = `${cStep} ${$$props.class || ''}`;
	// Timeline (line)
	$: classesLineBackgroundColor = index < $active ? `${background}` : `${cLineBackground}`;
	$: classesLineBackground = !isLastItem ? `${classesLineBackgroundColor}` : '';
	$: classesLine = `${cLine} ${classesLineBackground}`;
	// Timeline (numeral)
	$: classesNumeralBackground = index <= $active ? `${color} ${background}` : `${cNumralBackground}`;
	$: classesNumeral = `${cNumeral} ${classesNumeralBackground}`;
	// Content Drawer
	$: classesDrawerHeight = !isLastItem ? 'min-h-[56px]' : '';
	$: classesDrawer = `${cDrawer} ${classesDrawerHeight}`;
	// Content Nav
	$: classesNavPadding = !isLastItem ? 'py-4' : 'pt-4';
	$: classesNav = `${cNav} ${classesNavPadding}`;
</script>

<div class="step {classesStep}" data-testid="step">
	<!-- Timeline -->
	<div class="flex flex-col items-center">
		<!-- Numeral -->
		<div class="step-numeral flex-none {classesNumeral}">
			{@html index < $active ? '&check;' : index + 1}
		</div>
		<!-- Line -->
		{#if !isLastItem}<div class="line {classesLine}" />{/if}
	</div>
	<!-- Content -->
	<div class={classesDrawer}>
		<!-- Slot: Header -->
		<header><slot name="header"><h4>Step {index + 1}</h4></slot></header>
		{#if index === $active}
			<div transition:slide|local={{ duration: 100 }}>
				<!-- Slot: Default -->
				<slot />
				<!-- Nav -->
				<footer class={classesNav}>
					{#if index !== 0}<Button {...buttonBack} on:click={stepPrev}>&uarr;</Button>{/if}
					{#if $active + 1 < length}
						<Button {...buttonNext} on:click={stepNext}>Next &darr;</Button>
					{:else}
						<Button {...buttonComplete} on:click={onComplete}>{buttonComplete.text}</Button>
					{/if}
				</footer>
			</div>
		{/if}
	</div>
</div>
