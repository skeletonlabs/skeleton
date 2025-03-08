<script lang="ts">
	import * as slider from '@zag-js/slider';
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import type { SliderProps } from './types.js';

	const {
		markers = [],
		height = 'h-1.5',
		// Root ---
		base = 'w-full bg-green',
		spaceY = '',
		classes = '',
		// Control ---
		controlBase = '',
		controlClasses = '',
		// Track ---
		trackBase = 'overflow-hidden',
		trackBg = 'bg-surface-200-800',
		trackRounded = 'rounded-full',
		trackClasses = '',
		// Meter ---
		meterBase = '',
		meterBg = 'bg-surface-950-50',
		meterRounded = 'rounded-container',
		meterClasses = '',
		// Thumb ---
		thumbBase = 'ring-inset transition-scale duration-100 ease-in-out',
		thumbSize = 'size-8 md:size-5',
		thumbBg = 'bg-surface-50-950',
		thumbRingSize = 'ring-2',
		thumbRingColor = 'ring-surface-950-50',
		thumbRounded = 'rounded-full',
		thumbCursor = 'hover:cursor-pointer',
		thumbClasses = '',
		// Markers ---
		markersBase = '',
		markersClasses = '',
		// Mark ---
		markBase = '',
		markText = 'text-[10px]',
		markOpacity = 'opacity-50',
		markClasses = '',
		// State ---
		stateDisabled = 'disabled',
		stateReadOnly = 'cursor-not-allowed',
		// Children ---
		mark,
		// Zag ---
		...zagProps
	}: SliderProps = $props();

	// Zag
	const id = $props.id();
	const service = useMachine(slider.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(slider.connect(service, normalizeProps));

	// Reactive
	const rxDisabled = $derived(service.prop('disabled') ? stateDisabled : '');
	const rxReadOnly = $derived(service.prop('readOnly') ? stateReadOnly : thumbCursor);
</script>

<div {...api.getRootProps()} class="{base} {height} {spaceY} {rxDisabled} {classes}" data-testid="slider">
	<!-- Control -->
	<div {...api.getControlProps()} class="{controlBase} {controlClasses}" data-testid="slider-control">
		<!-- Track -->
		<div {...api.getTrackProps()} class="{trackBase} {trackBg} {height} {trackRounded} {trackClasses}" data-testid="slider-track">
			<!-- Meter -->
			<div {...api.getRangeProps()} class="{meterBase} {height} {meterBg} {meterRounded} {meterClasses}" data-testid="slider-meter"></div>
		</div>
		<!-- NOTE: this div centers thumbs vertically -->
		<div class={height} style="display: flex; align-items: center; transform: translateY(-100%);" data-testid="slider-thumb-wrapper">
			<!-- Disabled: skipping this so we can match Zag implementation. -->
			<!-- eslint-disable @typescript-eslint/no-unused-vars -->
			{#each api.value as _, index}
				<div {...api.getThumbProps({ index })}>
					<!-- Thumb -->
					<div
						class="{thumbBase} {thumbSize} {thumbBg} {thumbRingSize} {thumbRingColor} {thumbRounded} {rxReadOnly} {thumbClasses}"
						data-testid="slider-thumb"
					></div>
					<!-- Hidden Input(s) -->
					<input {...api.getHiddenInputProps({ index })} data-testid="slider-input" />
				</div>
			{/each}
		</div>
	</div>
	<!-- Markers -->
	{#if markers.length > 0}
		<div {...api.getMarkerGroupProps()} class="{markersBase} {markersClasses}" data-testid="slider-markers">
			{#each markers as value}
				<!-- Mark -->
				<span {...api.getMarkerProps({ value })} class="{markBase} {markText} {markOpacity} {markClasses}" data-testid="slider-mark">
					{#if mark}
						{@render mark(value)}
					{:else}
						{value}
					{/if}
				</span>
			{/each}
		</div>
	{/if}
</div>
