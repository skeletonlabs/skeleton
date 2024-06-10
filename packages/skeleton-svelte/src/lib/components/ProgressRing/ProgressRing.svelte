<script lang="ts">
	import type { ProgressRingProps } from './types.js';

	let {
		value,
		max = 100,
		strokeWidth = 50, // px
		strokeLinecap = 'round',
		labelledby = '',
		// Base (figure)
		base = 'relative',
		size = 'size-32',
		classes = '',
		// Slot
		slotBase = 'absolute top-0 left-0 z-[1] flex justify-center items-center',
		slotClasses = '',
		// SVG
		svgBase = 'absolute top-0 left-0 w-full h-full rounded-full',
		svgClasses = '',
		// Track
		trackBase = 'fill-none',
		trackStroke = 'stroke-surface-200-800',
		trackClasses = '',
		// Meter
		meterBase = 'fill-none',
		meterStroke = 'stroke-primary-500',
		meterTransition = 'transition-[stroke-dashoffset]',
		meterDuration = 'duration-100',
		meterClasses = '',
		// Label
		label,
		labelBase = '',
		labelFill = 'fill-surface-950-50',
		labelFontSize = 96, // px
		labelFontWeight = 'bold',
		labelClasses = '',
		// Snippets
		children
	}: ProgressRingProps = $props();

	// Local
	const baseSize = 512; // px
	const radius: number = baseSize / 2 - strokeWidth / 2;
	let circumference: number = $state(radius);
	let dashoffset: number = $state(calcDashOffset());

	$effect(() => {
		dashoffset = calcDashOffset();
	});

	function calcDashOffset() {
		const _value = value !== undefined ? value : 25;
		const percent = (100 * _value) / max;
		circumference = radius * 2 * Math.PI;
		return circumference - (percent / 100) * circumference;
	}
</script>

<figure
	class="{base} {size} {classes}"
	role="meter"
	aria-labelledby={labelledby}
	aria-valuenow={value || 0}
	aria-valuemin={0}
	aria-valuemax={max}
	aria-valuetext={`${value} / ${max}`}
	data-testid="progress-ring"
>
	<!-- Slot -->
	{#if children}
		<div class="{slotBase} {size} {slotClasses}">
			{@render children()}
		</div>
	{/if}
	<!-- SVG -->
	<svg viewBox="0 0 {baseSize} {baseSize}" class="{svgBase} {svgClasses}" class:animate-spin={value === undefined}>
		<!-- Track -->
		<circle class="{trackBase} {trackStroke} {trackClasses}" stroke-width={strokeWidth} r={radius} cx="50%" cy="50%" />
		<!-- Meter -->
		<circle
			class="{meterBase} {meterStroke} {meterTransition} {meterDuration} {meterClasses}"
			r={radius}
			cx="50%"
			cy="50%"
			stroke-width={strokeWidth}
			stroke-linecap={strokeLinecap}
			stroke-dasharray="{circumference} {circumference}"
			stroke-dashoffset={dashoffset}
			transform="rotate(-90 {baseSize / 2} {baseSize / 2})"
		/>
		<!-- Text -->
		{#if value !== undefined && !children}
			<text
				class="{labelBase} {labelFill} {labelClasses}"
				x="50%"
				y="50%"
				font-size={labelFontSize}
				font-weight={labelFontWeight}
				text-anchor="middle"
				dominant-baseline="central"
			>
				{label ?? `${value}%`}
			</text>
		{/if}
	</svg>
</figure>
