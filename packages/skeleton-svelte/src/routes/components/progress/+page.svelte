<script lang="ts">
	import Progress from '$lib/components/Progress/Progress.svelte';
	let value = $state(50);
	let min = $state(0);
	let max = $state(100);
</script>

<h1 class="h1">Progress</h1>

<h2 class="h2">Controls</h2>

<label class="label">
	<span class="label-text">Value</span>
	<input class="input" type="number" bind:value />
</label>

<label>
	<span class="label-text">Min</span>
	<input class="input" type="number" bind:value={min} />
</label>

<label>
	<span class="label-text">Max</span>
	<input class="input" type="number" bind:value={max} />
</label>

<h2 class="h2">Examples</h2>

<h3 class="h3">Height</h3>

<h4 class="h4">Default (h-2)</h4>

<Progress {value} {min} {max} />

<h4 class="h4">h-4</h4>

<Progress {value} {min} {max} height="h-4" />

<h4 class="h4">h-8</h4>

<Progress {value} {min} {max} height="h-8" />

<h3 class="h3">Rounded</h3>

<h4 class="h4">Default (rounded)</h4>

<Progress {value} {min} {max} />

<h4 class="h4">rounded-sm</h4>

<Progress {value} {min} {max} rounded="rounded-sm" indicatorRounded="rounded-sm" />

<h4 class="h4">rounded-none</h4>

<Progress {value} {min} {max} rounded="rounded-none" indicatorRounded="rounded-none" />

<h3 class="h3">Colors</h3>

<h4 class="h4">Default (bg-primary-500)</h4>

<Progress {value} {min} {max} />

<h4 class="h4">bg-secondary-500</h4>

<Progress {value} {min} {max} indicatorClasses="bg-secondary-500" />

<h4 class="h4">bg-tertiary-500</h4>

<Progress {value} {min} {max} indicatorClasses="bg-tertiary-500" />

<h3 class="h3">Indeterminate</h3>

<h4 class="h4">Default (indeterminate)</h4>

<Progress {min} {max} />

<h4 class="h4">custom-indeterminate</h4>

<Progress {min} {max} indicatorIndeterminateAnimation="custom-indeterminate" />

<style lang="postcss">
	:global(.custom-indeterminate) {
		animation: custom-indeterminate 2s linear infinite;
	}
	@keyframes custom-indeterminate {
		from {
			transform: translateX(200%);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
