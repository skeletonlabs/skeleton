<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';

	let value = $state(75);
</script>

<Progress {value}>
	<Progress.Label>{value}%</Progress.Label>
	<Progress.Track>
		<Progress.Range />
	</Progress.Track>
</Progress>
