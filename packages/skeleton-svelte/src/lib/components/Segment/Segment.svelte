<script lang="ts">
	import * as radio from '@zag-js/radio-group';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { SegmentProps } from './types.js';
	import { setSegmentContext } from './context.js';

	const {
		// Root
		base = 'inline-flex items-stretch overflow-hidden',
		background = 'preset-outlined-surface-200-800',
		border = 'p-2',
		gap = 'gap-2',
		padding = '',
		rounded = 'rounded-container',
		width = '',
		classes = '',
		// States
		orientVertical = 'flex-col',
		orientHorizontal = 'flex-row',
		stateDisabled = 'disabled',
		stateReadOnly = 'pointer-events-none',
		// Indicator
		indicatorBase = 'top-[var(--top)] left-[var(--left)] w-[var(--width)] h-[var(--height)]',
		indicatorBg = 'preset-filled',
		indicatorText = 'text-surface-contrast-950 dark:text-surface-contrast-50',
		indicatorRounded = 'rounded',
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
		get orientation() {
			return zagProps.orientation ?? 'horizontal';
		},
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
	const orientationClasses = $derived(service.prop('orientation') === 'vertical' ? orientVertical : orientHorizontal);
	const disabledClasses = $derived(service.prop('disabled') ? stateDisabled : '');
	const readOnlyClasses = $derived(service.prop('readOnly') ? stateReadOnly : '');
</script>

<!-- @component Capture input for a limited set of options. -->

<div
	{...api.getRootProps()}
	class="{base} {orientationClasses} {background} {border} {padding} {gap} {rounded} {width} {disabledClasses} {readOnlyClasses} {classes}"
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
