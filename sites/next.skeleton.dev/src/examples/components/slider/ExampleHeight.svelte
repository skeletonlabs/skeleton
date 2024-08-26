<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';

	let value = $state([40]);
</script>

<section class="w-full space-y-8">
	<Slider name="value" bind:value height="h-1" />
	<Slider name="value" bind:value height="h-6" thumbSize="size-8" />
</section>
