<script lang="ts">
	import type { ProgressProps } from './types.js';

	let {
		value,
		min = 0,
		max = 100,
		// Root
		base = 'overflow-x-hidden bg-surface-200-800',
		height = 'h-2',
		rounded = 'rounded',
		classes = '',
		// Indicator
		indicatorBase = 'bg-primary-500 h-full',
		indicatorRounded = 'rounded',
		indicatorTransition = 'transition-[width]',
		indicatorClasses = ''
	}: ProgressProps = $props();

	const indeterminate = $derived(value === undefined);
	const fillPercentage = $derived(indeterminate ? 50 : ((value! - min) / (max - min)) * 100);
	const width = $derived(`${fillPercentage}%`);
</script>

<!-- @component Track -->
<div class="{base} {height} {rounded} {classes}">
	<!-- @component Indicator -->
	<div class="{indicatorBase} {indicatorRounded} {indicatorTransition} {indicatorClasses}" class:indeterminate style:width></div>
</div>

<style>
	.indeterminate {
		animation: indeterminate 2s linear infinite;
	}

	@keyframes indeterminate {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(200%);
		}
	}
</style>
