<script lang="ts">
	import Progress from '$lib/components/Progress/Progress.svelte';
	let value = $state(50);
	let min = $state(0);
	let max = $state(100);
</script>

<label>
	Value
	<input class="input" type="number" bind:value />
</label>

<label>
	Min
	<input class="input" type="number" bind:value={min} />
</label>

<label>
	Max
	<input class="input" type="number" bind:value={max} />
</label>

<h2>Examples</h2>

<h3>Height</h3>

<h4>Default (h-2)</h4>

<Progress {value} {min} {max} />

<h4>h-4</h4>

<Progress {value} {min} {max} height="h-4" />

<h4>h-8</h4>

<Progress {value} {min} {max} height="h-8" />

<h3>Rounded</h3>

<h4>Default (rounded)</h4>

<Progress {value} {min} {max} />

<h4>rounded-sm</h4>

<Progress {value} {min} {max} rounded="rounded-sm" indicatorRounded="rounded-sm" />

<h4>rounded-none</h4>

<Progress {value} {min} {max} rounded="rounded-none" indicatorRounded="rounded-none" />

<h3>Colors</h3>

<h4>Default (bg-primary-500)</h4>

<Progress {value} {min} {max} />

<h4>bg-secondary-500</h4>

<Progress {value} {min} {max} indicatorClasses="bg-secondary-500" />

<h4>bg-tertiary-500</h4>

<Progress {value} {min} {max} indicatorClasses="bg-tertiary-500" />

<h3>Indeterminate</h3>

<h4>Default (indeterminate)</h4>

<Progress {min} {max} />

<h4>custom-indeterminate</h4>

<Progress {min} {max} indicatorIndeterminateAnimation="custom-indeterminate" />

<style lang="postcss">
	h1 {
		@apply text-3xl font-bold;
	}
	h2 {
		@apply text-2xl font-bold;
	}
	h3 {
		@apply text-xl font-bold;
	}
	h4 {
		@apply text-lg font-bold;
	}

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
