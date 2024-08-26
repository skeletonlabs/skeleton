<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';

	let value = $state([40]);
	let valueMulti = $state([40, 60]);
</script>

<section class="w-full space-y-8">
	<Slider bind:value dir="rtl" />
	<Slider bind:value={valueMulti} dir="rtl" />
</section>
