<script lang="ts">
	import type { SwitchProps } from './types.js';

	let {
		id = '',
		name = '',
		checked = false,
		disabled = false,
		// Root
		base = 'flex cursor-pointer transition duration-200',
		stateInactive = 'bg-surface-200-800',
		stateActive = 'bg-primary-500',
		stateDisabled = 'opacity-50 cursor-not-allowed',
		width = 'w-10',
		height = 'h-6',
		padding = 'p-0.5',
		rounded = 'rounded-full',
		hover = 'hover:brightness-90 dark:hover:brightness-110',
		classes = '',
		// Thumb
		thumbBase = 'aspect-square h-full flex justify-center items-center',
		thumbStateInactive = 'preset-filled-surface-50-950',
		thumbStateActive = 'bg-surface-50 text-surface-contrast-50',
		thumbRounded = 'rounded-full',
		thumbTranslateX = 'translate-x-4',
		thumbTransition = 'transition-transform',
		thumbDuration = 'duration-200',
		thumbClasses = '',
		// Snippets
		inactiveChild,
		activeChild
	}: SwitchProps = $props();

	function onToggle() {
		if (disabled) return;
		checked = !checked;
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
	onclick={onToggle}
>
	<!-- Hidden Input -->
	<input type="checkbox" {id} {name} bind:checked class="hidden" {disabled} />
	<!-- Thumb -->
	<div class="thumb {thumbBase} {rxThumbState} {thumbRounded} {thumbTransition} {thumbDuration} {thumbClasses}">
		{#if !checked && inactiveChild}<span>{@render inactiveChild()}</span>{/if}
		{#if checked && activeChild}<span>{@render activeChild()}</span>{/if}
	</div>
</button>
