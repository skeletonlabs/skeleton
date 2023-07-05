<script lang="ts">
	import { fly } from 'svelte/transition';
	import { elasticInOut } from 'svelte/easing';
	import { onDestroy } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';

	// Event Dispatcher
	const dispatch = createEventDispatcher();

	// Props (actions)
	/** Provide the array of values to tick through. */
	export let values: unknown[] = Array.from(Array(101).keys());
	/** Specify the values array should tick backwards. */
	export let direction: 'forward' | 'backward' | 'random' = 'forward';
	/** Specify how often in milliseconds the value should update. */
	export let interval: number = 1500;
	/** Select items by index from the values array. */
	export let index: number = direction === 'backward' ? values.length - 1 : 0;

	// Props (styles)
	/** Provide classes to set background styles. */
	export let background: CssClasses = '';
	/** Provide classes to set font color styles. */
	export let color: CssClasses = '';
	/** Provide classest to set the font weight style. */
	export let weight: CssClasses = '';
	/** Provide classes to set counter height. */
	export let height: CssClasses = 'h-6';
	/** Provide classes to set counter width. */
	export let width: CssClasses = '';
	/** Provide classes to set padding style. */
	export let padding: CssClasses = '';
	/** Provide classes to set border styles. */
	export let border: CssClasses = '';
	/** Provide classes to set rounded style. */
	export let rounded: CssClasses = '';
	/** Provide classes to set shadow styles. */
	export let shadow: CssClasses = '';

	// Props (regions)
	export let regionInner: CssClasses = '';

	// Props (transition) - DEPRECATED: we'll use this temporarily
	export let duration = 200;

	// Base Classes
	const cBase = `inline-block`;
	const cInner = 'overflow-hidden flex flex-col items-center';

	// Local
	const easing = elasticInOut;
	let transitionInterval: ReturnType<typeof setInterval>;

	transitionInterval = setInterval(() => {
		switch (direction) {
			case 'random':
				index = Math.floor(Math.random() * (values.length - 1));
				break;
			case 'backward':
				index = index === 0 || index < 0 ? values.length - 1 : index - 1;
				break;
			default: // forward
				index = index === values.length - 1 || index > values.length - 1 ? 0 : index + 1;
				break;
		}
		/** @event {{ index: number, value: unknown }} tick - Fires when the interval ticks. */
		dispatch('tick', { index, value: values[index] });
	}, interval);

	// State
	$: current = values[index];
	// Reactive
	$: classesBase = [cBase, background, color, weight, padding, height, width, border, rounded, shadow, $$props.class ?? ''].join(' ');
	$: classesInner = `${cInner} ${regionInner}`;

	// Lifecycle
	onDestroy(() => {
		clearInterval(transitionInterval);
	});
</script>

<span class={classesBase} data-testid="counter">
	<span class={classesInner}>
		{#key current}
			<span in:fly={{ y: 100, duration, delay: duration, easing }} out:fly={{ y: -100, duration, easing }}>
				<slot {current}>{@html current}</slot>
			</span>
		{/key}
	</span>
</span>
