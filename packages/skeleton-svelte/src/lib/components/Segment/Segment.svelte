<script lang="ts">
	import * as radio from '@zag-js/radio-group';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { SegmentControl } from './types.js';
	import { setSegmentContext } from './context.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		value = $bindable(''),
		orientation = 'horizontal',
		// Root
		base = 'inline-flex items-stretch overflow-hidden',
		background = 'preset-outlined-surface-200-800',
		border = 'p-2',
		gap = 'gap-2',
		padding = '',
		rounded = 'rounded-container',
		width = '',
		classes = '',
		// Indicator
		indicatorBase = 'top-[var(--top)] left-[var(--left)] w-[var(--width)] h-[var(--height)]',
		indicatorBg = 'preset-filled',
		indicatorText = 'text-surface-contrast-950 dark:text-surface-contrast-50',
		indicatorRounded = 'rounded',
		indicatorClasses = '',
		// Snippets
		children,
		// Zag
		...zagProps
	}: SegmentControl = $props();

	// Zag
	const [snapshot, send] = useMachine(
		radio.machine({
			id: useId(),
			get value() {
				return $state.snapshot(value);
			},
			onValueChange(details) {
				value = details.value;
			},
			orientation
		}),
		{ context: zagProps }
	);
	const api = $derived(radio.connect(snapshot, send, normalizeProps));

	// Set Context
	setSegmentContext({
		get api() {
			return api;
		},
		get indicatorText() {
			return indicatorText;
		}
	});

	// Reactive
	const rxOrientation = $derived(snapshot.context.orientation === 'vertical' ? 'flex-col' : 'flex-row');
</script>

<div
	{...api.getRootProps()}
	class="{base} {rxOrientation} {background} {border} {padding} {gap} {rounded} {width} {classes}"
	data-testid="segment"
>
	<!-- Indicator -->
	<div {...api.getIndicatorProps()} class="{indicatorBase} {indicatorBg} {indicatorRounded} {indicatorClasses}"></div>
	<!-- Items -->
	{@render children?.()}
</div>
