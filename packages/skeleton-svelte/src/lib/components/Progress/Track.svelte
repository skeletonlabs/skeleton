<script context="module">
	import { getContext, setContext } from 'svelte';

	const key = 'progress-state';

	type ProgressState = {
		value: number | undefined;
		min: number;
		max: number;
	};

	export function setProgressState(state: ProgressState) {
		setContext(key, state);
	}

	export function getProgressState() {
		return getContext<ProgressState>(key);
	}
</script>

<script lang="ts">
	import type { ProgressTrackProps } from './types.js';

	let {
		value,
		min = 0,
		max = 100,
		// Root
		base = 'bg-black overflow-hidden',
		height = 'h-2',
		rounded = 'rounded',
		classes = ''
	}: ProgressTrackProps = $props();

	setProgressState({
		get value() {
			return value;
		},
		get min() {
			return min;
		},
		get max() {
			return max;
		}
	});

	// Warn when the min value is greater than the max value
	$effect(() => {
		if (min > max) {
			console.warn(`Progress: The min value of ${min} is greater than the max value of ${max}. This can lead to unexpected behavior.`);
		}
	});
</script>

<!-- @component Track -->
<div
	class="{base} {height} {rounded} {classes}"
	role="progressbar"
	aria-valuenow={value}
	aria-valuemin={min}
	aria-valuemax={max}
	data-testid="progress"
>
	<slot />
</div>
