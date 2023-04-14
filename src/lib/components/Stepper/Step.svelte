<!-- Reference: https://dribbble.com/shots/16221169-Figma-Material-Ui-components-Steppers-and-sliders -->
<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	// Types
	import type { CssClasses } from '$lib';

	// Props
	export let locked = false;

	// Props (regions)
	/** Provide arbitrary classes to the step header region. */
	export let regionHeader: CssClasses = '';
	/** Provide arbitrary classes to the step content region. */
	export let regionContent: CssClasses = '';
	/** Provide arbitrary classes to the step navigation region. */
	export let regionNavigation: CssClasses = '';

	// Context
	export let state: Writable<any> = getContext('state');
	export let dispatchParent: any = getContext('dispatchParent');
	export let stepTerm: string = getContext('stepTerm');
	export let gap: CssClasses = getContext('gap');
	export let justify: CssClasses = getContext('justify');
	export let buttonBack: CssClasses = getContext('buttonBack');
	export let buttonBackType: 'submit' | 'reset' | 'button' = getContext('buttonBackType');
	export let buttonBackLabel: string = getContext('buttonBackLabel');
	export let buttonNext: CssClasses = getContext('buttonNext');
	export let buttonNextType: 'submit' | 'reset' | 'button' = getContext('buttonNextType');
	export let buttonNextLabel: string = getContext('buttonNextLabel');
	export let buttonComplete: CssClasses = getContext('buttonComplete');
	export let buttonCompleteType: 'submit' | 'reset' | 'button' = getContext('buttonCompleteType');
	export let buttonCompleteLabel: string = getContext('buttonCompleteLabel');

	// Register step on init (keep these paired)
	const stepIndex = $state.total;
	$state.total++;

	// Classes
	const cBase = 'space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cContent = 'space-y-4';
	const cNavigation = 'flex';

	async function onNext() {
		// Allows any forms to submit before the Step is removed from the DOM:
		// https://github.com/skeletonlabs/skeleton/issues/1328
		await new Promise((resolve) => setTimeout(resolve));

		if (locked) return;
		$state.current++;
		/** @event { $state } next - Fires when the NEXT button is pressed per step.  */
		dispatchParent('next', { step: stepIndex, state: $state });
		dispatchParent('step', { step: stepIndex, state: $state });
	}
	function onBack() {
		$state.current--;
		/** @event { $state } back - Fires when the BACK button is pressed per step.  */
		dispatchParent('back', { step: stepIndex, state: $state });
		dispatchParent('step', { step: stepIndex, state: $state });
	}
	function onComplete() {
		/** @event { $state } complete - Fires when the COMPLETE button is pressed.  */
		dispatchParent('complete', { step: stepIndex, state: $state });
	}

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesHeader = `${cHeader} ${regionHeader}`;
	$: classesContent = `${cContent} ${regionContent}`;
	$: classesNavigation = `${cNavigation} ${justify} ${gap} ${regionNavigation}`;

	// Unregister step on destroy
	onDestroy(() => {
		$state.total--;
	});
</script>

{#if stepIndex === $state.current}
	<div class="step {classesBase}" data-testid="step">
		<!-- Slot: Header -->
		<header class="step-header {classesHeader}">
			<slot name="header">{stepTerm} {stepIndex + 1}</slot>
		</header>
		<!-- Slot: Default -->
		<div class="step-content {classesContent}">
			<slot>({stepTerm} {stepIndex + 1} Content)</slot>
		</div>
		<!-- Navigation -->
		{#if $state.total > 1}
			<div class="step-navigation {classesNavigation}" transition:fade|local={{ duration: 100 }}>
				<button type={buttonBackType} class="btn {buttonBack}" on:click={onBack} disabled={$state.current === 0}
					>{@html buttonBackLabel}</button
				>
				{#if stepIndex < $state.total - 1}
					<button type={buttonNextType} class="btn {buttonNext}" on:click={onNext} disabled={locked}>
						{#if locked}
							<svg class="w-3 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path
									d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
								/>
							</svg>
						{/if}
						<span>{@html buttonNextLabel}</span>
					</button>
				{:else}
					<button type={buttonCompleteType} class="btn {buttonComplete}" on:click={onComplete} disabled={locked}>
						{@html buttonCompleteLabel}
					</button>
				{/if}
			</div>
		{/if}
	</div>
{/if}
