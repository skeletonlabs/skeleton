<script lang="ts">
	import * as progress from '@zag-js/progress';
	import { normalizeProps, useMachine } from '@zag-js/svelte';

	import type { ProgressRingProps } from './types.js';

	const {
		label,
		showLabel = false,
		strokeWidth = '10px',
		strokeLinecap = 'round',
		// Root
		base = 'relative',
		size = 'size-32',
		classes = '',
		// Slot
		childrenBase = 'absolute top-0 left-0 z-[1] flex justify-center items-center',
		childrenClasses = '',
		// SVG
		svgBase = 'absolute top-0 left-0 size-full rounded-full',
		svgClasses = '',
		// Track
		trackBase = 'fill-none',
		trackStroke = 'stroke-surface-200-800',
		trackClasses = '',
		// Meter
		meterBase = 'fill-none',
		meterStroke = 'stroke-primary-500',
		meterTransition = 'transition-[stroke-dashoffset] transition-[stroke-dashoffset]',
		meterAnimate = 'animate-ring-indeterminate',
		meterDuration = 'duration-200',
		meterClasses = '',
		// Label
		labelBase = '',
		labelFill = 'fill-surface-950-50',
		labelFontSize = 24, // px
		labelFontWeight = 'bold',
		labelClasses = '',
		// Snippets
		children,
		// Zag
		...zagProps
	}: ProgressRingProps = $props();

	// Zag
	const id = $props.id();
	const service = useMachine(progress.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(progress.connect(service, normalizeProps));

	// Reactive Classes
	const rxAnimCircle = $derived(api.indeterminate ? 'animate-spin' : '');
	const rxAnimMeter = $derived(api.indeterminate ? meterAnimate : '');
</script>

<!-- @component A circular progress bar. -->

<figure {...api.getRootProps()} class="{base} {size} {classes}" data-testid="progress-ring">
	<!-- Children -->
	<div {...api.getLabelProps()} class="{childrenBase} {size} {childrenClasses}" data-testid="progress-ring-children">
		{@render children?.()}
	</div>
	<!-- SVG -->
	<svg
		{...api.getCircleProps()}
		viewBox="0 0 100 100"
		class="{svgBase} {svgClasses} {rxAnimCircle}"
		style="--size:100px;--thickness:{strokeWidth};"
		data-testid="progress-ring-svg"
	>
		<!-- Track -->
		<circle {...api.getCircleTrackProps()} class="{trackBase} {trackStroke} {trackClasses}" data-testid="progress-ring-track" />
		<!-- Meter -->
		<circle
			{...api.getCircleRangeProps()}
			class="{meterBase} {meterStroke} {meterTransition} {meterDuration} {meterClasses} {rxAnimMeter}"
			stroke-linecap={strokeLinecap}
			data-testid="progress-ring-meter"
		/>
		<!-- Label -->
		{#if api.value !== null && !children && showLabel}
			<text
				class="{labelBase} {labelFill} {labelClasses}"
				x="50%"
				y="50%"
				font-size={labelFontSize}
				font-weight={labelFontWeight}
				text-anchor="middle"
				dominant-baseline="central"
				data-testid="progress-label"
			>
				{label ?? api.value}%
			</text>
		{/if}
	</svg>
</figure>
