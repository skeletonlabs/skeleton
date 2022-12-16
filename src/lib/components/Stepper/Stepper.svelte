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
	/** Provide artibtary classes for the Back button. */
	export let buttonClassesBack = 'btn-icon btn-ghost-surface';
	/** Provide artibtary classes for the Next button. */
	export let buttonClassesNext = 'btn btn-filled-surface';
	/** Provide artibtary classes for the Complete button. */
	export let buttonClassesComplete = 'btn btn-filled-primary';
	/** Provide a text label for the Back button. */
	export let buttonTextBack = '&uarr;';
	/** Provide a text label for the Next button. */
	export let buttonTextNext = 'Next &darr;';
	/** Provide a text label for the Complete button. */
	export let buttonTextComplete = 'Complete';

	// Context
	setContext('dispatch', dispatch);
	setContext('active', active);
	setContext('length', length);
	setContext('color', color);
	setContext('background', background);
	setContext('buttonClassesBack', buttonClassesBack);
	setContext('buttonClassesNext', buttonClassesNext);
	setContext('buttonClassesComplete', buttonClassesComplete);
	setContext('buttonTextBack', buttonTextBack);
	setContext('buttonTextNext', buttonTextNext);
	setContext('buttonTextComplete', buttonTextComplete);
	setContext('duration', duration);

	// Reactive Classes
	$: classesStepper = `${$$props.class ?? ''}`;
</script>

<div class="stepper {classesStepper}" data-testid="stepper">
	<slot />
</div>
