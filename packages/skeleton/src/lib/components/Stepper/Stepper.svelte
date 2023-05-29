<script lang="ts">
	import { createEventDispatcher, setContext } from 'svelte';
	import { type Writable, writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	// Types
	import type { CssClasses } from '../..';

	// Event Dispatcher
	const dispatchParent = createEventDispatcher();

	// Props
	/** Provide classes to style the stepper header gap. */
	export let gap: CssClasses = 'gap-4';

	// Props (stepper)
	/** Provide the verbiage that represents "Step". */
	export let stepTerm = 'Step';
	/** Provide classes to style the stepper header badges. */
	export let badge: CssClasses = 'variant-filled-surface';
	/** Provide classes to style the stepper header active step badge. */
	export let active: CssClasses = 'variant-filled';
	/** Provide classes to style the stepper header border. */
	export let border: CssClasses = 'border-surface-400-500-token';
	/** Provide the initially selected step*/
	export let start = 0;

	// Props (step)
	/** Set the justification for the step navigation buttons. */
	export let justify: CssClasses = 'justify-between';

	// Button (back)
	/** Provide arbitrary classes to style the back button. */
	export let buttonBack: CssClasses = 'variant-ghost';
	/** Set the type of the back button. */
	export let buttonBackType: 'submit' | 'reset' | 'button' = 'button';
	/** Provide the HTML label content for the back button. */
	export let buttonBackLabel = '&larr; Back';

	// Button (next)
	/** Provide arbitrary classes to style the next button. */
	export let buttonNext: CssClasses = 'variant-filled';
	/** Set the type of the next button. */
	export let buttonNextType: 'submit' | 'reset' | 'button' = 'button';
	/** Provide the HTML label content for the next button. */
	export let buttonNextLabel = 'Next &rarr;';

	// Button (complete)
	/** Provide arbitrary classes to style the complete button. */
	export let buttonComplete: CssClasses = 'variant-filled-primary';
	/** Set the type of the complete button. */
	export let buttonCompleteType: 'submit' | 'reset' | 'button' = 'button';
	/** Provide the HTML label content for the complete button. */
	export let buttonCompleteLabel = 'Complete';

	// Props (regions)
	/** Provide arbitrary classes to the stepper header region. */
	export let regionHeader: CssClasses = '';
	/** Provide arbitrary classes to the stepper content region. */
	export let regionContent: CssClasses = '';

	// Stores
	let state: Writable<any> = writable({ current: start, total: 0 });

	// Context
	setContext('state', state);
	setContext('dispatchParent', dispatchParent);
	setContext('stepTerm', stepTerm);
	setContext('gap', gap);
	setContext('justify', justify);
	// ---
	setContext('buttonBack', buttonBack);
	setContext('buttonBackType', buttonBackType);
	setContext('buttonBackLabel', buttonBackLabel);
	// ---
	setContext('buttonNext', buttonNext);
	setContext('buttonNextType', buttonNextType);
	setContext('buttonNextLabel', buttonNextLabel);
	// ---
	setContext('buttonComplete', buttonComplete);
	setContext('buttonCompleteType', buttonCompleteType);
	setContext('buttonCompleteLabel', buttonCompleteLabel);

	// Classes
	const cBase = 'space-y-4';
	const cHeader = 'flex items-center border-t mt-[15px]';
	const cHeaderStep = '-mt-[15px] transition-all duration-300';
	const cContent = '';

	// State
	$: isActive = (step: number) => step === $state.current;
	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesHeader = `${cHeader} ${border} ${gap} ${regionHeader}`;
	$: classesHeaderStep = `${cHeaderStep}`;
	$: classesBadge = (step: number) => (isActive(step) ? active : badge);
	$: classesContent = `${cContent} ${regionContent}`;
</script>

<div class="stepper {classesBase}" data-testid="stepper">
	<!-- Header -->
	{#if $state.total}
		<header class="stepper-header {classesHeader}" transition:fade|local={{ duration: 100 }}>
			{#each Array.from(Array($state.total).keys()) as step}
				<div class="stepper-header-step {classesHeaderStep}" class:flex-1={isActive(step)}>
					<span class="badge {classesBadge(step)}">{isActive(step) ? `${stepTerm} ${step + 1}` : step + 1}</span>
				</div>
			{/each}
		</header>
	{/if}
	<!-- Content -->
	<div class="stepper-content {classesContent}">
		<slot />
	</div>
</div>
