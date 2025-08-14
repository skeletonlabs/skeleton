<script lang="ts">
	import * as radio from '@zag-js/radio-group';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { SegmentProps } from './types.js';
	import { setSegmentContext } from './context.js';

	const {
		// Root
		base = 'inline-flex items-stretch overflow-hidden',
		background = 'preset-outlined-surface-200-800',
		border = '',
		gap = 'gap-2',
		padding = 'p-2',
		rounded = 'rounded-container',
		width = '',
		classes = '',
		// States
		orientVertical = 'flex-col items-stretch',
		orientHorizontal = 'flex-row',
		stateDisabled = 'disabled',
		stateReadOnly = 'pointer-events-none',
		// Indicator
		indicatorBase = 'top-[var(--top)] left-[var(--left)] w-[var(--width)] h-[var(--height)]',
		indicatorBg = 'preset-filled',
		indicatorText = 'text-surface-contrast-950 dark:text-surface-contrast-50',
		indicatorRounded = 'rounded-base',
		indicatorClasses = '',
		// Label
		labelledby = '',
		// Snippets
		children,
		// Zag
		...zagProps
	}: SegmentProps = $props();

	// Zag
	const id = $props.id();
	const service = useMachine(radio.machine, () => ({
		id: id,
		orientation: zagProps.orientation ?? 'horizontal',
		...zagProps
	}));
	const api = $derived(radio.connect(service, normalizeProps));

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
	const rxOrientation = $derived(service.prop('orientation') === 'vertical' ? orientVertical : orientHorizontal);
	const rxDisabled = $derived(service.prop('disabled') ? stateDisabled : '');
	const rxReadOnly = $derived(service.prop('readOnly') ? stateReadOnly : '');
</script>

<!-- @component Capture input for a limited set of options. -->

<div
	{...api.getRootProps()}
	class="{base} {rxOrientation} {background} {border} {padding} {gap} {rounded} {width} {rxDisabled} {rxReadOnly} {classes}"
	aria-labelledby={labelledby}
	data-testid="segment"
>
	<!-- Indicator -->
	<div
		{...api.getIndicatorProps()}
		class="{indicatorBase} {indicatorBg} {indicatorRounded} {indicatorClasses}"
		data-testid="segment-indicator"
	></div>
	<!-- Items -->
	{@render children?.()}
</div>
