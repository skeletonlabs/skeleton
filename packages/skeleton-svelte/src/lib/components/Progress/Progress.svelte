<script lang="ts">
	import type { ProgressProps } from './types.js';

	let {
		value,
		min = 0,
		max = 100,
		// Root
		base = 'bg-surface-100-900',
		height = 'h-2',
		rounded = 'rounded-token',
		classes = '',
		// Meter
		meterBase = 'bg-surface-950-50',
		meterClasses = ''
	}: ProgressProps = $props();

	function calculatePercentage() {
		if (value === undefined) {
			return 0;
		} else {
			const percentage = ((value - min) / (max - min)) * 100;

			// Return a percentage between 0 and 100 when the value is outside the range
			if (percentage > 100) {
				return 100;
			} else if (percentage < 0) {
				return 0;
			} else {
				return percentage;
			}
		}
	}

	const fillPercentage = $derived.by(calculatePercentage);
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
