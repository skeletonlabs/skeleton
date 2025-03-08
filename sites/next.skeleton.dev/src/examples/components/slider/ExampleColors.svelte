<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';

	let value = $state([40]);
</script>

<section class="w-full space-y-8">
	<Slider {value} onValueChange={(e) => (value = e.value)} meterBg="bg-primary-500" thumbRingColor="ring-primary-500" />
	<Slider {value} onValueChange={(e) => (value = e.value)} meterBg="bg-secondary-500" thumbRingColor="ring-secondary-500" />
	<Slider {value} onValueChange={(e) => (value = e.value)} meterBg="bg-tertiary-500" thumbRingColor="ring-tertiary-500" />
</section>
