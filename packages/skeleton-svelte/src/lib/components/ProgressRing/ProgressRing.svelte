<script lang="ts">
	import * as progress from '@zag-js/progress';
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import type { ProgressRingProps } from './types.js';

	let {
		label,
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
	const [snapshot, send] = useMachine(progress.machine({ id: useId() }), { context: zagProps });
	const api = $derived(progress.connect(snapshot, send, normalizeProps));

	// Reactive Classes
	const rxAnimCircle = $derived(api.indeterminate && 'animate-spin');
	const rxAnimMeter = $derived(api.indeterminate && meterAnimate);
</script>

<figure {...api.getRootProps()} class="{base} {size} {classes}">
	<!-- Children -->
	<div {...api.getLabelProps()} class="{childrenBase} {size} {childrenClasses}">
		{@render children?.()}
	</div>
	<!-- SVG -->
	<svg {...api.getCircleProps()} class="{svgBase} {svgClasses} {rxAnimCircle}" style="--size:100%;--thickness:{strokeWidth};">
		<!-- Track -->
		<circle {...api.getCircleTrackProps()} class="{trackBase} {trackStroke} {trackClasses}" />
		<!-- Meter -->
		<circle
			{...api.getCircleRangeProps()}
			class="{meterBase} {meterStroke} {meterTransition} {meterDuration} {meterClasses} {rxAnimMeter}"
			stroke-linecap={strokeLinecap}
		/>
		<!-- Label -->
		{#if api.value !== null && !children}
			<text
				class="{labelBase} {labelFill} {labelClasses}"
				x="50%"
				y="50%"
				font-size={labelFontSize}
				font-weight={labelFontWeight}
				text-anchor="middle"
				dominant-baseline="central"
			>
				{label ?? api.value}%
			</text>
		{/if}
	</svg>
</figure>
