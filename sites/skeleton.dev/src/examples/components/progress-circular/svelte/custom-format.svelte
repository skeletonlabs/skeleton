<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<Progress class="items-center w-fit">
	<Progress.Circle --size="4rem" --thickness="0.5rem">
		<Progress.CircleTrack />
		<Progress.CircleRange />
	</Progress.Circle>
	<Progress.ValueText>
		<Progress.Context>
			{#snippet children(progress)}
				{progress().value} of {progress().max}
			{/snippet}
		</Progress.Context>
	</Progress.ValueText>
</Progress>
