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
		// Snippets
		children,
		...zagProps
	}: ProgressProps = $props();

	// Machine
	const [snapshot, send] = useMachine(
		progress.machine({
			id: useId()
		}),
		{ context: zagProps }
	);

	// API
	const api = $derived(progress.connect(snapshot, send, normalizeProps));
</script>

<!-- @component An indicator showing the progress or completion of a task -->

<div {...api.getRootProps()}>
	{#if children}
		<div {...api.getLabelProps()}>{@render children(api.value)}</div>
	{/if}
	<div class="{base} {bg} {width} {height} {rounded} {classes}" {...api.getTrackProps()}>
		<div
			class="{meterBase} {meterBg} {meterRounded} {meterTransition} {api.indeterminate ? meterAnimate : ''} {meterClasses}"
			{...api.getRangeProps()}
		></div>
	</div>
</div>
