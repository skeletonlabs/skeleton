<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';

	let value = $state([40]);
</script>

<section class="w-full space-y-4">
	<p>Disabled</p>
	<Slider name="value" bind:value disabled />
	<p>Read-Only</p>
	<Slider name="value" bind:value readOnly />
</section>
