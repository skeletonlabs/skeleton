<script lang="ts">
	import * as slider from '@zag-js/slider';
	import { normalizeProps, useMachine } from '@zag-js/svelte';

	import type { SliderProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		value = $bindable([0]),
		height = 'h-1.5',
		// Root ---
		base = 'w-full',
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
		materRounded = 'rounded-container',
		meterClasses = '',
		// Thumb ---
		thumbBase = 'ring-inset transition-scale duration-100 ease-in-out',
		thumbSize = 'size-8 md:size-5',
		thumbBg = 'bg-surface-50-950',
		thumbRingSize = 'ring-2',
		thumbRingColor = 'ring-surface-950-50',
		thumbRounded = 'rounded-full',
		thumbScale = 'hover:scale-125',
		thumbCursor = 'hover:cursor-pointer',
		thumbClasses = '',
		// State
		stateDisabled = 'disabled',
		stateReadOnly = 'cursor-not-allowed',
		// Zag
		...zagProps
	}: SliderProps = $props();

	// Zag
	const [snapshot, send] = useMachine(
		slider.machine({
			id: useId(),
			onValueChange(details) {
				value = details.value;
			}
		}),
		{
			context: {
				...zagProps,
				get value() {
					return value;
				}
			}
		}
	);
	const api = $derived(slider.connect(snapshot, send, normalizeProps));

	// Reactive
	const rxDisabled = $derived(snapshot.context.disabled ? stateDisabled : '');
	const rxReadOnly = $derived(snapshot.context.readOnly ? stateReadOnly : `${thumbScale} ${thumbCursor}`);
</script>

<div {...api.getRootProps()} class="{base} {height} {rxDisabled} {classes}" data-testid="slider">
	<!-- Control -->
	<div {...api.getControlProps()} class="{controlBase} {controlClasses}" data-testid="slider-control">
		<!-- Track -->
		<div {...api.getTrackProps()} class="{trackBase} {trackBg} {height} {trackRounded} {trackClasses}" data-testid="slider-track">
			<!-- Meter -->
			<div {...api.getRangeProps()} class="{meterBase} {height} {meterBg} {materRounded} {meterClasses}" data-testid="slider-meter"></div>
		</div>
		<!-- NOTE: this div centers thumbs vertically -->
		<div class={height} style="display: flex; align-items: center; transform: translateY(-100%);" data-testid="slider-thumb-wrapper">
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
</div>
