<script lang="ts">
	import * as progress from '@zag-js/progress';
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import type { ProgressProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	// Props
	let {
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
		trackRounded = 'rounded',
		trackClasses = '',
		// Meter
		meterBase = 'h-full w-full',
		meterBg = 'bg-surface-950-50',
		meterRounded = 'rounded',
		meterTransition = 'transition-[width]',
		meterAnimate = 'animate-progress-indeterminate',
		meterClasses = '',
		// Snippets
		children,
		// Zag
		...zagProps
	}: ProgressProps = $props();

	// Zag
	const [state, send] = useMachine(
		progress.machine({
			id: useId()
		}),
		{ context: zagProps }
	);
	const api = $derived(progress.connect(state, send, normalizeProps));

	// Reactive
	const rxIndeterminate = $derived(state.context.isIndeterminate ? meterAnimate : '');
</script>

<!-- @component A linear progress bar. -->

<figure {...api.getRootProps()} class="{base} {height} {width} {classes}" data-testid="progress">
	<!-- Label -->
	{#if children}
		<div {...api.getLabelProps()} class="{labelBase} {labelText} {labelClasses}">{@render children()}</div>
	{/if}
	<!-- Track -->
	<div {...api.getTrackProps()} class="{trackBase} {trackBg} {trackRounded} {trackClasses}">
		<!-- Meter -->
		<div {...api.getRangeProps()} class="{meterBase} {meterBg} {meterRounded} {meterTransition} {rxIndeterminate} {meterClasses}"></div>
	</div>
</figure>
