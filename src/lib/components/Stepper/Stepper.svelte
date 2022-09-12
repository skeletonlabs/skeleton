<script lang="ts">
	import { createEventDispatcher, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	// Event Dispacher
	const dispatch = createEventDispatcher();

	// Props
	export let active: Writable<number> = writable(0);
	export let length: number = 0;
	// Props (timeline)
	export let color: string = 'text-white';
	export let background: string = 'bg-accent-500 text-white';
	// Props (buttons)
	export let buttonBack: any | undefined = undefined;
	export let buttonNext: any | undefined = undefined;
	export let buttonComplete: any | undefined = undefined;

	// Button deafult attributes
	let defaultButtonBack: any = { variant: 'ring' };
	let defaultButtonNext: any = { variant: 'filled' };
	let defaultButtonComplete: any = { variant: 'filled-primary', text: 'Complete' };

	// Merge button defaults with prop overrides
	let mergedButtonBack: any = Object.assign(defaultButtonBack, buttonBack);
	let mergedButtonNext: any = Object.assign(defaultButtonNext, buttonNext);
	let mergedButtonComplete: any = Object.assign(defaultButtonComplete, buttonComplete);

	// Context
	setContext('dispatch', dispatch);
	setContext('active', active);
	setContext('length', length);
	setContext('color', color);
	setContext('background', background);
	setContext('buttonBack', mergedButtonBack);
	setContext('buttonNext', mergedButtonNext);
	setContext('buttonComplete', mergedButtonComplete);

	// Reactive Classes
	$: classesStepper = `${$$props.class || ''}`;
</script>

<div class="stepper {classesStepper}" data-testid="stepper">
	<slot />
</div>
