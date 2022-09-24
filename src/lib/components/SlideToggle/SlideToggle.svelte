<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Props
	export let checked: boolean = false;
	export let accent: string = 'bg-accent-500';
	export let size: string = 'md';
	// A11y
	export let label: string | undefined = '';

	// Base Styles
	const cBase: string = 'inline-block';
	const cLabel: string = 'flex items-center';
	const cTrack: string = 'flex rounded-full transition-all duration-[200ms] hover:brightness-110 cursor-pointer';
	const cThumb: string = 'w-[50%] h-full scale-[0.7] rounded-full cursor-pointer transition-all duration-[200ms] shadow-lg';

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
			dispatch('keyup', event);
			event.target.click();
		}
	}

	// Interactive
	$: cTrackAccent = checked ? accent : 'bg-surface-400 dark:bg-surface-700 cursor-pointer';
	$: cThumbBackground = checked ? 'bg-white' : 'bg-white/50';
	$: cThumbPos = checked ? 'translate-x-full' : '';

	// Reactive Classes
	$: classesBase = `${cBase}`;
	$: classesLabel = `${cLabel} ${$$props.class || ''}`;
	$: classesTrack = `${cTrack} ${trackSize} ${cTrackAccent}`;
	$: classesThumb = `${cThumb} ${cThumbBackground} ${cThumbPos}`;

	// Prune $$restProps to avoid overwriting $$props.class
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<div
	id={label}
	class="slide-toggle {classesBase}"
	class:opacity-30={$$props.disabled}
	data-testid="slide-toggle"
	on:keydown={onKeyDown}
	role="switch"
	aria-label={label}
	aria-checked={checked}
	tabindex="0"
>
	<label class="slide-toggle-label {classesLabel}">
		<!-- Hidden Input -->
		<input type="checkbox" class="hidden" bind:checked on:click on:mouseover on:focus on:blur {...prunedRestProps()} disabled={$$props.disabled} />
		<!-- Slider Track/Thumb -->
		<div class="slide-toggle-track {classesTrack}" class:cursor-not-allowed={$$props.disabled}>
			<div class="slide-toggle-humb {classesThumb}" class:cursor-not-allowed={$$props.disabled} />
		</div>
		<!-- Label -->
		{#if $$slots.default}<div class="slide-toggle-label ml-3"><slot /></div>{/if}
	</label>
</div>
