<script lang="ts">
	import type { SwitchProps } from './types.js';

	let {
		id = '',
		name = '',
		checked = $bindable(false),
		disabled = false,
		compact = false,
		// Aria
		labelledby = undefined,
		describedby = undefined,
		// Root (Track)
		base = 'cursor-pointer transition duration-200',
		stateInactive = 'preset-filled-surface-200-800',
		stateActive = 'preset-filled-primary-500',
		stateDisabled = 'opacity-50 cursor-not-allowed',
		width = 'w-10',
		height = 'h-6',
		padding = 'p-0.5',
		rounded = 'rounded-full',
		hover = 'hover:brightness-90 dark:hover:brightness-110',
		classes = '',
		// Thumb
		thumbBase = 'right-0 aspect-square h-full flex justify-center items-center text-right',
		thumbInactive = 'preset-filled-surface-50-950',
		thumbActive = 'bg-surface-50 text-surface-contrast-50',
		thumbRounded = 'rounded-full',
		thumbTranslateX = 'translate-x-4',
		thumbTransition = 'transition',
		thumbEase = 'ease-in-out',
		thumbDuration = 'duration-200',
		thumbClasses = '',
		// Icons
		iconInactiveBase = 'pointer-events-none',
		iconActiveBase = 'pointer-events-none',
		// Events
		onchange = () => {},
		// Snippets
		inactiveChild,
		activeChild
	}: SwitchProps = $props();

	// Set Compact Mode
	if (compact) {
		base = thumbBase;
		// Removes the height class
		height = '';
		// Thumb inherits track styles
		thumbInactive = stateInactive;
		thumbActive = stateActive;
		// Remove X-axis translate
		thumbTranslateX = '';
		// Remove padding
		padding = '';
	}

	function toggle() {
		if (disabled) return;
		checked = !checked;
		onchange(checked);
	}

	const rxTrackState = $derived(checked ? stateActive : stateInactive);
	const rxThumbState = $derived(checked ? `${thumbActive} ${thumbTranslateX}` : thumbInactive);
	const rxDisabled = $derived(disabled ? stateDisabled : '');
</script>

<!-- Track -->
<button
	type="button"
	class="{base} {rxTrackState} {width} {height} {padding} {rounded} {hover} {rxDisabled} {classes}"
	role="switch"
	aria-checked={checked}
	aria-labelledby={labelledby}
	aria-describedby={describedby}
	tabindex="0"
	onclick={toggle}
	data-testid="switch"
>
	<!-- Hidden Input - true: 'on', false: null -->
	{#if checked}<input type="hidden" {id} {name} value="on" {disabled} />{/if}
	<!-- Thumb -->
	<div class="{thumbBase} {rxThumbState} {thumbRounded} {thumbTransition} {thumbEase} {thumbDuration} {thumbClasses}">
		{#if !checked && inactiveChild}
			<span class={iconInactiveBase}>{@render inactiveChild()}</span>
		{/if}
		{#if checked && activeChild}
			<span class={iconActiveBase}>{@render activeChild()}</span>
		{/if}
	</div>
</button>
