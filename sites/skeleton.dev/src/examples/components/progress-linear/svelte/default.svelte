<script lang="ts">
	import { ProgressLinear } from '@skeletonlabs/skeleton-svelte';

	let value = $state(75);
</script>

<ProgressLinear {value}>
	<ProgressLinear.Label>{value}%</ProgressLinear.Label>
	<ProgressLinear.Track>
		<ProgressLinear.Range />
	</ProgressLinear.Track>
</ProgressLinear>
