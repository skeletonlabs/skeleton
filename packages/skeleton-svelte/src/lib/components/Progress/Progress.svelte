<script lang="ts">
	import type { ProgressProps } from './types.js';

	let {
		value,
		min = 0,
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
		meterIndeterminateAnim = 'indeterminate',
		meterClasses = ''
	}: ProgressProps = $props();

	const indeterminate = $derived(value === undefined);
	const fillPercentage = $derived(indeterminate ? 50 : ((value! - min) / (max - min)) * 100);
	const width = $derived(`${fillPercentage}%`);

	const rxIndeterminate = $derived(indeterminate ? meterIndeterminateAnim : '');
</script>

<div
	role="progressbar"
	aria-labelledby={ariaLabelledby}
	aria-valuenow={value}
	aria-valuemin={min}
	aria-valuemax={max}
	class="{base} {bg} {height} {rounded} {classes}"
>
	<div class="{meterBase} {meterBg} {meterRounded} {meterTransition} {rxIndeterminate} {meterClasses}" style:width></div>
</div>

<style>
	.indeterminate {
		animation: anim-progress-indeterminate 2s linear infinite;
	}
	@keyframes anim-progress-indeterminate {
		from {
			transform: translateX(-200%);
		}
		to {
			transform: translateX(200%);
		}
	}
</style>
