<script lang="ts">
	import * as progress from '@zag-js/progress';
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import type { ProgressProps } from './types.js';

	// Props
	const {
		// Root
		base = 'flex items-center gap-4',
		height = 'h-2',
		width = 'w-full',
		classes = '',
		// Label
		labelBase = 'whitespace-nowrap',
		labelText = 'text-xs',
		labelClasses = '',
		// Track
		trackBase = 'h-full w-full overflow-x-hidden',
		trackBg = 'bg-surface-200-800',
		trackRounded = 'rounded-base',
		trackClasses = '',
		// Meter
		meterBase = 'h-full w-full',
		meterBg = 'bg-surface-950-50',
		meterRounded = 'rounded-base',
		meterTransition = 'transition-[width]',
		meterAnimate = 'animate-progress-indeterminate',
		meterClasses = '',
		// Snippets
		children,
		// Zag
		...zagProps
	}: ProgressProps = $props();

	// Zag
	const id = $props.id();
	const service = useMachine(progress.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(progress.connect(service, normalizeProps));

	// Reactive
	const rxIndeterminate = $derived(api.indeterminate ? meterAnimate : '');
</script>

<!-- @component A linear progress bar. -->

<figure {...api.getRootProps()} class="{base} {height} {width} {classes}" data-testid="progress">
	<!-- Label -->
	{#if children}
		<div {...api.getLabelProps()} class="{labelBase} {labelText} {labelClasses}" data-testid="progress-label">{@render children()}</div>
	{/if}
	<!-- Track -->
	<div {...api.getTrackProps()} class="{trackBase} {trackBg} {trackRounded} {trackClasses}" data-testid="progress-track">
		<!-- Meter -->
		<div
			{...api.getRangeProps()}
			class="{meterBase} {meterBg} {meterRounded} {meterTransition} {rxIndeterminate} {meterClasses}"
			data-testid="progress-meter"
		></div>
	</div>
</figure>
