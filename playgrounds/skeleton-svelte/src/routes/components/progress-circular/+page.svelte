<script lang="ts">
	import { ProgressCircular } from '@skeletonlabs/skeleton-svelte';
</script>

<ProgressCircular>
	<ProgressCircular.Label>Label</ProgressCircular.Label>
	<ProgressCircular.Circle --size="50px" --thickness="5px">
		<ProgressCircular.Track />
		<ProgressCircular.Range />
	</ProgressCircular.Circle>
	<ProgressCircular.ValueText />
</ProgressCircular>
