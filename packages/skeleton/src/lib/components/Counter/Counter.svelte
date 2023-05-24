<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onDestroy, onMount } from 'svelte';

	// Types
	import type { CssClasses, Transition, TransitionFunction } from '../..';

	// Props (actions)
	/** Provide the array of values to tick through. */
	export let values: any[] = [];
	/** Bind to the current value of the counter. */
	export let currentValue: any;
	/** Specify the values array should tick backwards. */
	export let direction: 'forward' | 'backward' | 'random' = 'forward';
	/** Select items by index from the values array. */
	export let index: number = direction === 'backward' ? values.length - 1 : 0;
	/** Specify how often in milliseconds the value should update. */
	export let interval: number = 1500;

	// Props (transitions)
	/** Provide the svelte transition to use when values move in. */
	export let transition: Transition | undefined;
	/** Provide the svelte transition to use when values move in. */
	export let transitionIn: Transition | undefined;
	/** Provide the svelte transition to use when values move out. */
	export let transitionOut: Transition | undefined;

	// Props (styles)
	/** Provide classes to set background styles. */
	export let background: CssClasses = 'bg-surface-400-500-token';
	/** Provide classes to set counter height. */
	export let height: CssClasses = 'h-8';
	/** Provide classes to set counter width. */
	export let width: CssClasses = 'w-24';
	/** Provide classes to set border styles. */
	export let border: CssClasses = '';
	/** Provide classes to set rounded style. */
	export let rounded: CssClasses = 'rounded-token';
	/** Provide classes to set shadow styles. */
	export let shadow: CssClasses = '';
	/** Provide classes to set cursor styles. */
	export let cursor: CssClasses = '';

	// Base Classes
	let cBase = 'flex flex-col text-surface-50 font-semibold justify-center items-center overflow-hidden isolate';

	// Reactive Classes
	$: classesBase = `${cBase} ${background} ${height} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ''}`;

	// Utility Functions
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}

	let transitionInterval: any, tIn: TransitionFunction, tInProps: any, tOut: TransitionFunction, tOutProps: any;

	$: currentValue = values[index];

	$: {
		tIn = fly;
		tInProps = { y: 100, duration: 100, delay: 100 };
		tOut = fly;
		tOutProps = { y: -100, duration: 100 };

		if (transitionIn) {
			tIn = transitionIn.transition;
			tInProps = transitionIn.props;
		}
		if (transitionOut) {
			tOut = transitionOut.transition;
			tOutProps = transitionOut.props;
		}
		if (transition) {
			tIn = transition.transition;
			tInProps = transition.props;
			tOut = transition.transition;
			tOutProps = transition.props;
		}
	}

	onMount(() => {
		transitionInterval = setInterval(() => {
			switch (direction) {
				case 'forward':
					if (index === values.length - 1 || index > values.length - 1) {
						index = 0;
					} else {
						index = index + 1;
					}
					break;

				case 'backward':
					if (index === 0 || index < 0) {
						index = values.length - 1;
					} else {
						index = index - 1;
					}
					break;

				case 'random':
					index = Math.floor(Math.random() * (values.length - 1));
					break;
			}
		}, interval);
	});

	onDestroy(() => {
		clearInterval(transitionInterval);
	});
</script>

<div class={classesBase} {...prunedRestProps()}>
	{#key currentValue}
		<p class="text-center" in:tIn={tInProps} out:tOut={tOutProps}>{currentValue}</p>
	{/key}
</div>
