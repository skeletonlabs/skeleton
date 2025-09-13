<script lang="ts">
	import { RatingGroup } from '@/index';
</script>

<RatingGroup count={3} data-testid="root">
	<RatingGroup.Label data-testid="label">Label</RatingGroup.Label>
	<RatingGroup.Control data-testid="control">
		<RatingGroup.Context>
			{#snippet children(ratingGroup)}
				{#each ratingGroup().items as index (index)}
					<RatingGroup.Item data-testid="item-{index}" {index} />
				{/each}
			{/snippet}
		</RatingGroup.Context>
	</RatingGroup.Control>
	<RatingGroup.HiddenInput data-testid="hidden-input" />
</RatingGroup>
