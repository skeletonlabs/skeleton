<script lang="ts">
	import { RatingGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<RatingGroup count={5}>
	<RatingGroup.Label>Rate us:</RatingGroup.Label>
	<RatingGroup.Control>
		{#each Array.from({ length: 5 }), index}
			<RatingGroup.Item index={index + 1} />
		{/each}
	</RatingGroup.Control>
	<RatingGroup.HiddenInput />
</RatingGroup>
