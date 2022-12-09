<script lang="ts">
	import { createEventDispatcher, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	// Event Dispacher
	const dispatch = createEventDispatcher();

	// Props
	/** Provide a writable(number) which stores the actively selected step. Starts at 0.
	 * @type { writable(number)}
	 */
	export let active: Writable<number> = writable(0);
	/** Provide a count of the total number of Steps (children). */
	export let length: number = 0;
	/** Set the Svelte transition duration. */
	export let duration: number = 200;
	/** Set the stepper to be horizontal instead of vertical. */
	export let horizontal: boolean = false;
	/** Provide classes to set rounded style of the step index numbers. */
	export let rounded: string = 'rounded-full';
	/** Allow navigation by clicking on headers or step numbers.
	 * @type {'enabled' | 'disabled' | 'unlocked'}
	 */
	export let navigateOnClick: string = 'disabled';

	// Props (timeline)
	/** Provide classes to set the numeral text color. */
	export let color: string = 'text-white';
	/** Provide classes to set the timeline background color. */
	export let background: string = 'bg-accent-500';

	// Props (buttons)
	/** Provide <a href="https://www.skeleton.dev/elements/buttons">Button</a> classes. */
	export let buttonBack: string = 'btn-ghost-surface';
	/** Provide <a href="https://www.skeleton.dev/elements/buttons">Button</a> classes. */
	export let buttonNext: string = 'btn-filled-surface';
	/** Provide <a href="https://www.skeleton.dev/elements/buttons">Button</a> classes. */
	export let buttonComplete: string = 'btn-filled-primary';
	
	// horizontalStore is used to make the horizontal stepper dynamicaly switch between vertical and horizontal orientation
	let horizontalStore: Writable<boolean> = writable(horizontal);

	// Context
	setContext('dispatch', dispatch);
	setContext('active', active);
	setContext('length', length);
	setContext('horizontal', horizontalStore);
	setContext('rounded', rounded);
	setContext('navigateOnClick', navigateOnClick);
	setContext('color', color);
	setContext('background', background);
	setContext('buttonBack', buttonBack);
	setContext('buttonNext', buttonNext);
	setContext('buttonComplete', buttonComplete);
	setContext('duration', duration);

	// Reactive Classes
	$: classesStepper = `${$$props.class ?? ''}`;

	// Define dynamic horizontal behaviour
	let stepperWidth: number;
	let horizontalStepper: HTMLElement;
	let children: HTMLCollection;
	let breakpoint: number;

	$: if ($horizontalStore && horizontalStepper && stepperWidth) {
		// Whenever the stepperWidth changes we check if any of the step numerals are at a different height from the first numeral. If yes, we memorize the width at which this happened and we convert the stepper to a vertical one.
		children = horizontalStepper.children;

		let currOffset: number;

		for (let i = 0; i < children.length; i++) {
			const child = <HTMLElement>children.item(i);

			if (child?.classList.contains('step-timeline')) {
				if (i === 0) {
					currOffset = child.offsetTop;
					continue;
				} else if (child.offsetTop != currOffset!) {
					breakpoint = stepperWidth;
					$horizontalStore = false;
					break;
				}
			}
		}
	}

	$: if (horizontal && !$horizontalStore && stepperWidth && stepperWidth > breakpoint) {
		// If the stepper width is resized and is again greater than the width at which it was switch to vertical orientation, we switch it back to the horizontal orientation.
		$horizontalStore = true;
	}
</script>

{#if $horizontalStore}
	<div class="stepper flex flex-wrap justify-center" bind:clientWidth={stepperWidth} bind:this={horizontalStepper}>
		<slot />
	</div>
{:else}
	<div class="stepper {classesStepper}" data-testid="stepper" bind:clientWidth={stepperWidth}>
		<slot />
	</div>
{/if}
