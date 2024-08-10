<script lang="ts">
	import * as progress from '@zag-js/progress';
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import type { ProgressProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	// Props
	let {
		// Root
		base = 'overflow-x-hidden',
		bg = 'bg-surface-200-800',
		width = 'w-full',
		height = 'h-2',
		rounded = 'rounded',
		classes = '',
		// Meter
		meterBase = 'h-full',
		meterBg = 'bg-surface-950-50',
		meterRounded = 'rounded',
		meterTransition = 'transition-[width]',
		meterAnimate = 'animate-indeterminate',
		meterClasses = '',
		// Label
		labelBase = 'text-sm',
		labelClasses = '',
		// Snippets
		label,
		// Zag
		...zagProps
	}: ProgressProps = $props();

	// Machine
	const [state, send] = useMachine(
		progress.machine({
			id: useId()
		}),
		{ context: zagProps }
	);

	// API
	const api = $derived(progress.connect(state, send, normalizeProps));

	// Reactive
	const rxIndeterminate = $derived(state.context.isIndeterminate ? meterAnimate : '');
</script>

<!-- @component A linear progress bar. -->

<div {...api.getRootProps()}>
	<!-- Label -->
	{#if label}
		<div class="{labelBase} {labelClasses}" {...api.getLabelProps()}>{@render label()}</div>
	{/if}
	<!-- Track -->
	<div class="{base} {bg} {width} {height} {rounded} {classes}" {...api.getTrackProps()}>
		<!-- Meter -->
		<div class="{meterBase} {meterBg} {meterRounded} {meterTransition} {rxIndeterminate} {meterClasses}" {...api.getRangeProps()}></div>
	</div>
</div>
