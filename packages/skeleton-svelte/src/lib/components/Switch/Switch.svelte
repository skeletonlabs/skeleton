<script lang="ts">
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import * as zagSwitch from '@zag-js/switch';
	import type { SwitchProps } from './types.js';
	import { useId } from '$lib/internal/uuid.js';

	let {
		name = '',
		checked = $bindable(false),
		disabled = $bindable(false),
		compact = $bindable(false),
		// Root (Track)
		base = 'inline-flex items-center gap-4',
		classes = '',
		// Control
		controlBase = 'cursor-pointer transition duration-200',
		controlInactive = 'preset-filled-surface-200-800',
		controlActive = 'preset-filled-primary-500',
		controlDisabled = 'opacity-50 cursor-not-allowed',
		controlWidth = 'w-10',
		controlHeight = 'h-6',
		controlPadding = 'p-0.5',
		controlRounded = 'rounded-full',
		controlHover = 'hover:brightness-90 dark:hover:brightness-110',
		controlClasses = '',
		// Thumb
		thumbBase = 'right-0 aspect-square h-full flex justify-center items-center text-right cursor-pointer',
		thumbInactive = 'preset-filled-surface-50-950',
		thumbActive = 'bg-surface-50 text-surface-contrast-50',
		thumbRounded = 'rounded-full',
		thumbTranslateX = 'translate-x-4 rtl:-translate-x-4',
		thumbTransition = 'transition',
		thumbEase = 'ease-in-out',
		thumbDuration = 'duration-200',
		thumbClasses = '',
		// Label
		labelBase = '',
		labelClasses = '',
		// Icons
		iconInactiveBase = 'pointer-events-none',
		iconActiveBase = 'pointer-events-none',
		// Events
		onchange = () => {},
		// Snippets
		children,
		inactiveChild,
		activeChild
	}: SwitchProps = $props();

	// Zag
	const [snapshot, send] = useMachine(
		// @ts-expect-error - Report this to Zag
		zagSwitch.machine({
			id: useId(),
			name,
			disabled,
			checked,
			onCheckedChange(details) {
				checked = details.checked;
				onchange(details.checked);
			}
		})
	);
	// @ts-expect-error - Report this to Zag
	const api = $derived(zagSwitch.connect(snapshot, send, normalizeProps));

	// Set Compact Mode
	if (compact) {
		controlBase = thumbBase;
		// Removes the height class
		controlHeight = '';
		// Thumb inherits track styles
		thumbInactive = controlInactive;
		thumbActive = controlActive;
		// Remove X-axis translate
		thumbTranslateX = '';
		// Remove padding
		controlPadding = '';
	}

	const rxTrackState = $derived(api.checked ? controlActive : controlInactive);
	const rxThumbState = $derived(api.checked ? `${thumbActive} ${thumbTranslateX}` : thumbInactive);
	const rxDisabled = $derived(api.disabled ? controlDisabled : '');
</script>

<label {...api.getRootProps()} class="{base} {classes}" data-testid="switch">
	<!-- Input -->
	<input {...api.getHiddenInputProps()} />
	<!-- Control -->
	<span
		{...api.getControlProps()}
		class="{controlBase} {rxTrackState} {controlWidth} {controlHeight} {controlPadding} {controlRounded} {controlHover} {rxDisabled}  {controlClasses}"
	>
		<!-- Thumb -->
		<span
			{...api.getThumbProps()}
			class="{thumbBase} {rxThumbState} {thumbRounded} {thumbTransition} {thumbEase} {thumbDuration} {thumbClasses}"
		>
			<!-- Icon: Inactive -->
			{#if !checked && inactiveChild}
				<span class={iconInactiveBase}>{@render inactiveChild()}</span>
			{/if}
			<!-- Icon: Active -->
			{#if checked && activeChild}
				<span class={iconActiveBase}>{@render activeChild()}</span>
			{/if}
		</span>
	</span>
	<!-- Label -->
	<span {...api.getLabelProps()} class="{labelBase} {labelClasses}">
		{@render children?.()}
	</span>
</label>
