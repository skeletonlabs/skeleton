<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut, elasticInOut } from 'svelte/easing';
	import { onDestroy } from 'svelte';

	// Types
	import type { CssClasses, Transition, TransitionFunction } from '../..';

	// Props (actions)
	/** Provide the array of values to tick through. */
	export let values: any[] = [];
	/** Bind to the current value of the counter. */
	export let currentValue: any = '';
	/** Specify the values array should tick backwards. */
	export let direction: 'forward' | 'backward' | 'random' = 'forward';
	/** Select items by index from the values array. */
	export let index: number = direction === 'backward' ? values.length - 1 : 0;
	/** Specify how often in milliseconds the value should update. */
	export let interval: number = 1500;

	// Props (transitions)
	/** Provide the svelte transition to use when values move in. */
	export let transition: Transition | undefined = undefined;
	/** Provide the svelte transition to use when values move in. */
	export let transitionIn: Transition | undefined = undefined;
	/** Provide the svelte transition to use when values move out. */
	export let transitionOut: Transition | undefined = undefined;

	// Props (styles)
	/** Provide classes to set background styles. */
	export let background: CssClasses = '';
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

	// Base Classes
	let cBase = `inline-block ${background}`;
	let cInner = 'overflow-hidden flex flex-col';

	// Reactive Classes
	$: classesBase = `${cBase} ${padding} ${height} ${width} ${border} ${rounded} ${shadow} ${$$props.class ?? ''}`;
	$: classesInner = `${cInner}`;
	// $: classesContent = `${background}`;

	let transitionInterval: any,
		tIn: TransitionFunction = fly,
		tInProps: any = { y: 100, duration: 100, delay: 100, easing: elasticInOut },
		tOut: TransitionFunction = fly,
		tOutProps: any = { y: -100, duration: 100, easing: elasticInOut };

	$: currentValue = values[index];
	$: {
		if (transition) {
			tIn = transition.transition;
			tInProps = transition.props;
			tOut = transition.transition;
			tOutProps = transition.props;
		}
		if (transitionIn) {
			tIn = transitionIn.transition;
			tInProps = transitionIn.props;
		}
		if (transitionOut) {
			tOut = transitionOut.transition;
			tOutProps = transitionOut.props;
		}
	}

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

	onDestroy(() => clearInterval(transitionInterval));
</script>

<span class={classesBase}>
	<span class={classesInner}>
		{#key currentValue}
			<span in:tIn={tInProps} out:tOut={tOutProps}>
				<slot {currentValue}>
					{currentValue}
				</slot>
			</span>
		{/key}
	</span>
</span>
