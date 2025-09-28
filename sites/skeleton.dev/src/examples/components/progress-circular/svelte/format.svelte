<script lang="ts">
	import { ProgressCircular } from '@skeletonlabs/skeleton-svelte';
</script>

<ProgressCircular formatOptions={{ style: 'decimal' }}>
	<ProgressCircular.Circle --size="4rem" --thickness="0.5rem">
		<ProgressCircular.Track />
		<ProgressCircular.Range />
	</ProgressCircular.Circle>
	<ProgressCircular.ValueText />
</ProgressCircular>
