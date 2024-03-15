<script lang="ts">
	import type { ProgressProps } from './types.js';

	let {
		value,
		min = 0,
		max = 100,
		// Root
		base = 'bg-surface-100-900',
		height = 'h-2',
		rounded = 'rounded-md',
		classes = '',
		// Meter
		meterBase = 'bg-surface-950-50',
		meterClasses = ''
	}: ProgressProps = $props();

	// Warn when the min value is greater than the max value
	$effect(() => {
		if (min > max) {
			console.warn(`Progress: The min value of ${min} is greater than the max value of ${max}. This can lead to unexpected behavior.`);
		}
	});

	const fillPercentage = $derived.by(() => {
		if (value === undefined) {
			return 0;
		} else {
			const percentage = ((value - min) / (max - min)) * 100;

			// Ensure the percentage is within the bounds of 0 and 100
			return Math.max(Math.min(percentage, 100), 0);
		}
	});
</script>

<!-- @component Represents the progress track -->
<div
	class="{base} {classes}"
	role="progressbar"
	aria-valuenow={value}
	aria-valuemin={min}
	aria-valuemax={max}
	data-testid="progress"
	style:width="{fillPercentage}%"
>
	<!-- @component Represents the progress meter  -->
	<div class="{meterBase} {height} {rounded} {meterClasses}" />
</div>
