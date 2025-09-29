<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<Progress class="items-center w-fit">
	<Progress.Label>Label</Progress.Label>
	<Progress.Circle>
		<Progress.CircleTrack />
		<Progress.CircleRange />
	</Progress.Circle>
	<Progress.ValueText />
</Progress>
