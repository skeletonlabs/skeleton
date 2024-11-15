<script lang="ts">
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import * as zagSwitch from '@zag-js/switch';
	import type { SwitchProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		name = '',
		checked = $bindable(false),
		disabled = $bindable(false),
		compact = $bindable(false),
		// Root (Track)
		base = 'inline-flex items-center gap-4',
		classes = '',
		// State
		stateFocused = '[&>span]:focused',
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
		// Snippets
		children,
		inactiveChild,
		activeChild,
		// ZagProps
		...zagProps
	}: SwitchProps = $props();

	// Zag
	const [snapshot, send] = useMachine(
		zagSwitch.machine({
			id: useId(),
			name,
			onCheckedChange(details) {
				checked = details.checked;
			}
		}),
		{
			context: {
				...zagProps,
				get checked() {
					return checked;
				},
				get disabled() {
					return disabled;
				},
				get compact() {
					return compact;
				}
			}
		}
	);
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
	const rxFocused = $derived(api.focused ? stateFocused : '');
</script>

<!-- @component A control for toggling between checked states. -->

<label {...api.getRootProps()} class="{base} {rxFocused} {classes}" data-testid="switch">
	<!-- Input -->
	<input {...api.getHiddenInputProps()} data-testid="switch-input" />
	<!-- Control -->
	<span
		{...api.getControlProps()}
		class="{controlBase} {rxTrackState} {controlWidth} {controlHeight} {controlPadding} {controlRounded} {controlHover} {rxDisabled}  {controlClasses}"
		data-testid="switch-control"
	>
		<!-- Thumb -->
		<span
			{...api.getThumbProps()}
			class="{thumbBase} {rxThumbState} {thumbRounded} {thumbTransition} {thumbEase} {thumbDuration} {thumbClasses}"
			data-testid="switch-thumb"
		>
			<!-- Icon: Inactive -->
			{#if !checked && inactiveChild}
				<span class={iconInactiveBase} data-testid="switch-icon-inactive">{@render inactiveChild()}</span>
			{/if}
			<!-- Icon: Active -->
			{#if checked && activeChild}
				<span class={iconActiveBase} data-testid="switch-icon-active">{@render activeChild()}</span>
			{/if}
		</span>
	</span>
	<!-- Label -->
	<span {...api.getLabelProps()} class="{labelBase} {labelClasses}" data-testid="switch-label">
		{@render children?.()}
	</span>
</label>
