<script lang="ts">
	import type { ProgressProps } from './types.js';

	let {
		value,
		max = 100,
		ariaLabelledby = '',
		// Root
		base = 'overflow-x-hidden',
		bg = 'bg-surface-200-800',
		height = 'h-2',
		rounded = 'rounded',
		classes = '',
		// Meter
		meterBase = 'h-full',
		meterBg = 'bg-primary-500',
		meterRounded = 'rounded',
		meterTransition = 'transition-[width]',
		meterAnimate = 'animate-indeterminate',
		meterClasses = ''
	}: ProgressProps = $props();

	$effect(() => {
		if (max < 0) {
			console.warn('The max prop should be greater than or equal to 0');
		}
	});

	const indeterminate = $derived(value === undefined);
	const fillPercentage = $derived(indeterminate ? 50 : ((value! - 0) / (max - 0)) * 100);
	const width = $derived(`${fillPercentage}%`);

	const rxIndeterminate = $derived(indeterminate ? meterAnimate : '');
</script>

<!-- @component An indicator showing the progress or completion of a task -->

<div
	role="progressbar"
	aria-labelledby={ariaLabelledby}
	aria-valuenow={value}
	aria-valuemin={0}
	aria-valuemax={max}
	class="{base} {bg} {height} {rounded} {classes}"
>
	<div class="{meterBase} {meterBg} {meterRounded} {meterTransition} {rxIndeterminate} {meterClasses}" style:width></div>
</div>
