<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Props
	/** The checked state of the input element. */
	export let checked = false;
	/** Sets the size of the component.
	 * @type {'sm' | 'md' | 'lg'}
	 */
	export let size = 'md';
	/** Provide classes to set the checked state color. */
	export let accent = 'bg-secondary-500';
	/** Provide classes to set the border width styles. */
	export let borderWidth = 'border-0';
	/** Provide classes to set the border color styles. */
	export let borderColor = 'border-surface-300-600-token';
	/** Provide classes to set border radius styles. */
	export let rounded = 'rounded-full';

	// A11y
	/** Provide a semantic label. */
	export let label = '';

	// Base Styles
	const cBase = 'inline-block';
	const cLabel = 'unstyled flex items-center';
	const cTrack = 'flex transition-all duration-[200ms] cursor-pointer';
	const cThumb = 'w-[50%] h-full scale-[0.7] transition-all duration-[200ms] shadow-lg';

	// Set track size
	let trackSize: string;
	// prettier-ignore
	switch (size) {
		case 'sm': trackSize = 'w-12 h-6'; break;
		case 'lg': trackSize = 'w-20 h-10'; break;
		default: trackSize = 'w-16 h-8';
	}

	// A11y Input Handlers
	function onKeyDown(event: any): void {
		// Enter/Space to toggle element
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			/** @event {{ event }} keyup Fires when the component is focused and key is pressed. */
			dispatch('keyup', event);
			event.target.firstChild.click();
		}
	}

	// Interactive
	$: cTrackAccent = checked ? accent : 'bg-surface-200-700-token cursor-pointer';
	$: cThumbBackground = checked ? 'bg-white' : 'bg-white/50';
	$: cThumbPos = checked ? 'translate-x-full' : '';

	// Reactive Classes
	$: classesDisabled = $$props.disabled === true ? 'opacity-50' : 'hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer';
	$: classesBase = `${cBase} ${classesDisabled}`;
	$: classesLabel = `${cLabel} ${$$props.class ?? ''}`;
	$: classesTrack = `${cTrack} ${borderWidth} ${borderColor} ${rounded} ${trackSize} ${cTrackAccent}`;
	$: classesThumb = `${cThumb} ${rounded} ${cThumbBackground} ${cThumbPos}`;

	// Prune $$restProps to avoid overwriting $$props.class
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<div
	id={label}
	class="slide-toggle {classesBase}"
	data-testid="slide-toggle"
	on:keydown={onKeyDown}
	role="switch"
	aria-label={label}
	aria-checked={checked}
	tabindex="0"
>
	<label class="slide-toggle-label {classesLabel}">
		<!-- Hidden Input -->
		<input
			type="checkbox"
			class="slide-toggle-input hidden"
			bind:checked
			on:click
			on:keydown
			on:keyup
			on:keypress
			on:mouseover
			on:change
			on:focus
			on:blur
			{...prunedRestProps()}
			disabled={$$props.disabled}
		/>
		<!-- Slider Track/Thumb -->
		<div class="slide-toggle-track {classesTrack}" class:cursor-not-allowed={$$props.disabled}>
			<div class="slide-toggle-thumb {classesThumb}" class:cursor-not-allowed={$$props.disabled} />
		</div>
		<!-- Label -->
		{#if $$slots.default}<div class="slide-toggle-text ml-3"><slot /></div>{/if}
	</label>
</div>
