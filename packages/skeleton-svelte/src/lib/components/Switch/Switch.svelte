<script lang="ts">
	import type { SwitchProps } from './types.js';

	let {
		id = '',
		name = '',
		checked = $bindable(false),
		disabled = false,
		compact = false,
		// Root
		base = 'flex cursor-pointer transition duration-200',
		stateInactive = 'preset-filled-surface-200-800',
		stateActive = 'bg-primary-500',
		stateDisabled = 'opacity-50 cursor-not-allowed',
		width = 'w-10',
		height = 'h-6',
		padding = 'p-0.5',
		rounded = 'rounded-full',
		hover = 'hover:brightness-90 dark:hover:brightness-110',
		classes = '',
		// Thumb
		thumbBase = 'aspect-square h-full flex justify-center items-center pointer-events-none',
		thumbStateInactive = 'preset-filled-surface-50-950',
		thumbStateActive = 'bg-surface-50 text-surface-contrast-50',
		thumbRounded = 'rounded-full',
		thumbTranslateX = 'translate-x-4',
		thumbTransition = 'transition',
		thumbEase = 'ease-in-out',
		thumbDuration = 'duration-200',
		thumbClasses = '',
		// Icons
		iconInactiveBase = '',
		iconActiveBase = '',
		// Events
		ontoggle = () => {},
		// Snippets
		inactiveChild,
		activeChild
	}: SwitchProps = $props();

	// Set Compact Mode
	if (compact) {
		base = `${thumbBase} aspect-square `;
		height = width;
		thumbStateInactive = '';
		thumbStateActive = '';
		thumbTranslateX = '';
		padding = '';
	}

	function toggle(event: MouseEvent | TouchEvent) {
		if (disabled) return;
		checked = !checked;
		ontoggle(event);
	}

	const rxTrackState = $derived(checked ? stateActive : stateInactive);
	const rxThumbState = $derived(checked ? `${thumbStateActive} ${thumbTranslateX}` : thumbStateInactive);
	const rxDisabled = $derived(disabled ? stateDisabled : '');
</script>

<!-- Track -->
<button
	class="{base} {rxTrackState} {width} {height} {padding} {rounded} {hover} {rxDisabled} {classes}"
	role="switch"
	aria-checked={checked}
	tabindex="0"
	onclick={toggle}
>
	<!-- Input (note: this is never visible) -->
	<input type="checkbox" {id} {name} bind:checked class="hidden" {disabled} />
	<!-- Thumb -->
	<div class="thumb {thumbBase} {rxThumbState} {thumbRounded} {thumbTransition} {thumbEase} {thumbDuration} {thumbClasses}">
		{#if !checked && inactiveChild}
			<span class={iconInactiveBase}>{@render inactiveChild()}</span>
		{/if}
		{#if checked && activeChild}
			<span class={iconActiveBase}>{@render activeChild()}</span>
		{/if}
	</div>
</button>
