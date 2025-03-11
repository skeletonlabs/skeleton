<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';

	let value = $state([40]);
</script>

<Slider {value} onValueChange={(e) => (value = e.value)} markers={[25, 50, 75]} />
