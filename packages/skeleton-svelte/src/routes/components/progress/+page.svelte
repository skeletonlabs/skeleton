<script lang="ts">
	import Progress from '$lib/components/Progress';
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

<Progress.Track {value} {min} {max}>
	<Progress.Indicator />
</Progress.Track>
