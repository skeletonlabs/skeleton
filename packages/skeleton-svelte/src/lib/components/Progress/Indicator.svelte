<script lang="ts">
	import { getProgressState } from './Track.svelte';
	import type { ProgressIndicatorProps } from './types.js';

	let {
		indeterminate = false,
		base = 'bg-surface-950-50',
		height = 'h-2',
		rounded = 'rounded',
		classes = ''
	}: ProgressIndicatorProps = $props();

	const progressState = getProgressState();

	const fillPercentage = $derived.by(() => {
		if (progressState.value === undefined) {
			return 0;
		} else {
			const percentage = ((progressState.value - progressState.min) / (progressState.max - progressState.min)) * 100;

			// Ensure the percentage is within the bounds of 0 and 100
			return Math.max(Math.min(percentage, 100), 0);
		}
	});

	const width = $derived(`${fillPercentage}%`);

	const indeterminateClasses = $derived.by(() => {
		if (!indeterminate) {
			return '';
		} else if (indeterminate && typeof indeterminate === 'string') {
			return indeterminate;
		} else {
			return 'indeterminate';
		}
	});
</script>

<div class="{base} {height} {rounded} {classes} {indeterminateClasses}" style:width></div>

<style lang="postcss">
	.indeterminate {
		animation: indeterminate 1s infinite linear;
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
