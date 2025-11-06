<script lang="ts">
	import { RatingGroup } from '@skeletonlabs/skeleton-svelte';

	const value = $state(3);
</script>

<RatingGroup count={5} {value}>
	<RatingGroup.Control>
		<RatingGroup.Context>
			{#snippet children(ratingGroup)}
				{#each ratingGroup().items as index (index)}
					<RatingGroup.Item {index} />
				{/each}
			{/snippet}
		</RatingGroup.Context>
	</RatingGroup.Control>
	<RatingGroup.HiddenInput />
</RatingGroup>
