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
	export let length = 0;
	/** Set the Svelte transition duration. */
	export let duration = 200;

	// Props (timeline)
	/** Provide classes to set the numeral text color. */
	export let color = 'text-white';
	/** Provide classes to set the timeline background color. */
	export let background = 'bg-accent-500';

	// Props (buttons)
	/** Provide <a href="https://www.skeleton.dev/elements/buttons">Button</a> classes. */
	export let buttonBack = 'btn-ghost-surface';
	/** Provide <a href="https://www.skeleton.dev/elements/buttons">Button</a> classes. */
	export let buttonNext = 'btn-filled-surface';
	/** Provide <a href="https://www.skeleton.dev/elements/buttons">Button</a> classes. */
	export let buttonComplete = 'btn-filled-primary';

	// Context
	setContext('dispatch', dispatch);
	setContext('active', active);
	setContext('length', length);
	setContext('color', color);
	setContext('background', background);
	setContext('buttonBack', buttonBack);
	setContext('buttonNext', buttonNext);
	setContext('buttonComplete', buttonComplete);
	setContext('duration', duration);

	// Reactive Classes
	$: classesStepper = `${$$props.class ?? ''}`;
</script>

<div class="stepper {classesStepper}" data-testid="stepper">
	<slot />
</div>
