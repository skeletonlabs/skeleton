<script context="module" lang="ts">
	import { writable, derived, type Writable } from 'svelte/store';

	const activeIndex: Writable<number> = writable(0);
	const children: Writable<any> = writable([]);

	let prevIndex: number;
	let prevActiveChild: object;

	const activeChild = derived([activeIndex, children], ([$activeIndex, $children]) => {
		let activeChild: object = $children[$activeIndex];
		if ($activeIndex !== prevIndex) {
			// index changed
			prevIndex = $activeIndex;
		} else {
			// children changed
			if ($children.includes(prevActiveChild) && prevActiveChild !== activeChild) {
				activeIndex.set($children.indexOf(prevActiveChild));
			} else {
				if (!activeChild && $activeIndex > 0) activeIndex.set(($activeIndex -= 1));
			}
		}
		prevActiveChild = activeChild;
		return activeChild;
	});
</script>

<!-- Reference: https://dribbble.com/shots/16221169-Figma-Material-Ui-components-Steppers-and-sliders -->
<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';

	// Props
	export let locked: boolean = false;

	// Context
	export let dispatch: any = getContext('dispatch');
	export let color: any = getContext('color');
	export let background: any = getContext('background');
	export let buttonBack: any = getContext('buttonBack');
	export let buttonNext: any = getContext('buttonNext');
	export let buttonComplete: any = getContext('buttonComplete');
	export let duration: any = getContext('duration');

	// Base Classes
	const cBase: string = 'grid grid-cols-[32px_1fr] gap-4';
	const cLine: string = 'w-1 h-full';
	const cLineBackground = 'bg-surface-300 dark:bg-surface-700';
	const cNumeral: string = 'font-bold text-base w-8 h-8 rounded-full flex justify-center items-center';
	const cNumralBackground: string = 'bg-surface-300 dark:bg-surface-700';
	const cDrawer: string = 'ml-1 space-y-4';
	const cNav: string = 'flex items-center space-x-2';

	// Local
	let childElem: any;

	// Step Handlers
	function stepPrev(): void {
		activeIndex.set($activeIndex - 1);
	}
	function stepNext(): void {
		activeIndex.set($activeIndex + 1);
	}
	function onComplete() {
		dispatch('complete', {});
	}

	// Action: register children (steps) with parent (stepper)
	function register(node: HTMLElement) {
		childElem = node;
		const previousChildIndex: any = $children.indexOf(childElem.previousElementSibling);
		$children = [...$children.slice(0, previousChildIndex + 1), childElem, ...$children.slice(previousChildIndex + 1)];
		return {
			destroy: () => ($children = $children.filter((c: any) => c !== childElem))
		};
	}

	// Reactive
	// Step state handling
	$: isFirstStep = childElem === $children[0];
	$: isLastStep = childElem === $children[$children.length - 1];
	$: ownIndex = $children.indexOf(childElem);
	$: isActiveStep = childElem === $activeChild;
	// Base
	$: classesBase = `${cBase} ${$$props.class || ''}`;
	// Timeline (line)
	$: classesLineBackgroundColor = ownIndex < $activeIndex ? `${background}` : `${cLineBackground}`;
	$: classesLineBackground = !isLastStep ? `${classesLineBackgroundColor}` : '';
	$: classesLine = `${cLine} ${classesLineBackground}`;
	// Timeline (numeral)
	$: classesNumeralBackground = $activeIndex <= $activeIndex ? `${color} ${background}` : `${cNumralBackground}`;
	$: classesNumeral = `${cNumeral} ${classesNumeralBackground}`;
	// Content Drawer
	$: classesDrawerPadding = !isLastStep ? 'pb-10' : '0';
	$: classesDrawer = `${cDrawer} ${classesDrawerPadding}`;
	// Content Nav
	$: classesNav = `${cNav}`;
</script>

<div class="step {classesBase}" data-testid="step" use:register>
	<!-- Timeline -->
	<div class="flex flex-col items-center">
		<!-- Numeral -->
		<div class="step-numeral flex-none {classesNumeral}">
			{#if locked}
				🔒
			{:else}
				{@html ownIndex < $activeIndex ? '&check;' : ownIndex + 1}
			{/if}
		</div>
		<!-- Line -->
		{#if !isLastStep}<div class="line {classesLine}" />{/if}
	</div>
	<!-- Content -->
	<div class="step-content {classesDrawer}">
		<!-- Slot: Header -->
		<header class="step-header"><slot name="header"><h4>Step {ownIndex + 1}</h4></slot></header>
		{#if isActiveStep}
			<div class="step-body space-y-4" transition:slide|local={{ duration }}>
				<!-- Slot: Default -->
				<slot />
				<!-- Nav -->
				<footer class="step-footer {classesNav}">
					{#if !isFirstStep}<button class="btn {buttonBack}" on:click={stepPrev}>&uarr;</button>{/if}
					{#if !isLastStep}
						<button class="btn {buttonNext}" on:click={stepNext} disabled={locked}>Next &darr;</button>
					{:else}
						<button class="btn {buttonComplete}" on:click={onComplete} disabled={locked}>Complete</button>
					{/if}
				</footer>
			</div>
		{/if}
	</div>
</div>
