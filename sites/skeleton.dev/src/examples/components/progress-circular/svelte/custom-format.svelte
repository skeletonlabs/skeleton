<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<Progress
	class="items-center w-fit"
	translations={{
		value(details) {
			return `${details.value} of ${details.max}`;
		},
	}}
>
	<Progress.Circle --size="4rem" --thickness="0.5rem">
		<Progress.CircleTrack />
		<Progress.CircleRange />
	</Progress.Circle>
	<Progress.ValueText />
</Progress>
