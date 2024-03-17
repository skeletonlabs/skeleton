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

<Progress {value} {min} {max} />

<Progress {value} {min} {max} height="h-4" />

<Progress {value} {min} {max} height="h-8" />

<h3>Rounded</h3>

<Progress {value} {min} {max} />

<Progress {value} {min} {max} rounded="rounded-sm" indicatorRounded="rounded-sm" />

<Progress {value} {min} {max} rounded="rounded-none" indicatorRounded="rounded-none" />

<h3>Colors</h3>

<Progress {value} {min} {max} />

<Progress {value} {min} {max} indicatorClasses="bg-secondary-500" />

<Progress {value} {min} {max} indicatorClasses="bg-tertiary-500" />

<h3>Indeterminate</h3>

<Progress {min} {max} />
