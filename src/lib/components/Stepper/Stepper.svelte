<script lang="ts">
	import { createEventDispatcher, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	// Event Dispacher
	const dispatch = createEventDispatcher();

	// Props
	export let active: Writable<number> = writable(0);
	export let length: number = 0;
	export let duration: number = 200;
	// Props (timeline)
	export let color: string = 'text-white';
	export let background: string = 'bg-accent-500';
	// Props (buttons)
	export let buttonBack: string = 'btn-ghost';
	export let buttonNext: string = 'btn-filled';
	export let buttonComplete: string = 'btn-filled-primary';

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
