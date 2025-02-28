<script lang="ts">
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import * as zagSwitch from '@zag-js/switch';
	import type { SwitchProps } from './types.js';

	const {
		compact = false,
		// Root (Track)
		base = 'inline-flex items-center gap-4',
		classes = '',
		// State
		stateFocused = 'data-[focus-visible]:focused',
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
	const id = $props.id();
	const service = useMachine(zagSwitch.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(zagSwitch.connect(service, normalizeProps));

	const rxControlBase = $derived(compact ? thumbBase : controlBase);
	const rxControlHeight = $derived(compact ? '' : controlHeight);
	const rxControlPadding = $derived(compact ? '' : controlPadding);
	const rxThumbInactive = $derived(compact ? controlInactive : thumbInactive);
	const rxThumbActive = $derived(compact ? controlActive : thumbActive);
	const rxThumbTranslateX = $derived(compact ? '' : thumbTranslateX);

	const rxTrackState = $derived(api.checked ? controlActive : controlInactive);
	const rxThumbState = $derived(api.checked ? `${rxThumbActive} ${rxThumbTranslateX}` : rxThumbInactive);
	const rxDisabled = $derived(api.disabled ? controlDisabled : '');
	const rxFocused = $derived(api.focused ? stateFocused : '');
</script>

<!-- @component A control for toggling between checked states. -->

<label {...api.getRootProps()} class="{base} {classes}" data-testid="switch">
	<!-- Input -->
	<input {...api.getHiddenInputProps()} data-testid="switch-input" />
	<!-- Control -->
	<span
		{...api.getControlProps()}
		class="{rxControlBase} {rxTrackState} {rxFocused} {controlWidth} {rxControlHeight} {rxControlPadding} {controlRounded} {controlHover} {rxDisabled} {controlClasses}"
		data-testid="switch-control"
	>
		<!-- Thumb -->
		<span
			{...api.getThumbProps()}
			class="{thumbBase} {rxThumbState} {thumbRounded} {thumbTransition} {thumbEase} {thumbDuration} {thumbClasses}"
			data-testid="switch-thumb"
		>
			<!-- Icon: Inactive -->
			{#if !api.checked && inactiveChild}
				<span class={iconInactiveBase} data-testid="switch-icon-inactive">{@render inactiveChild()}</span>
			{/if}
			<!-- Icon: Active -->
			{#if api.checked && activeChild}
				<span class={iconActiveBase} data-testid="switch-icon-active">{@render activeChild()}</span>
			{/if}
		</span>
	</span>
	<!-- Label -->
	{#if children}
		<span {...api.getLabelProps()} class="{labelBase} {labelClasses}" data-testid="switch-label">
			{@render children()}
		</span>
	{/if}
</label>
