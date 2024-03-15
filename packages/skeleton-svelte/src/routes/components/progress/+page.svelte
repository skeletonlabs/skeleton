<script lang="ts">
	import Progress from '$lib/components/Progress/Progress.svelte';
	let value = $state(0);
</script>

<input class="input" type="number" bind:value />

<Progress {value} />
