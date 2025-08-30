<script lang="ts">
	import { RatingGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<RatingGroup count={3} data-testid="root">
	<RatingGroup.Label data-testid="label">Label</RatingGroup.Label>
	<RatingGroup.Control data-testid="control">
		<RatingGroup.Context>
			{#snippet children(ctx)}
				{#each ctx.api.items as index (index)}
					<RatingGroup.Item {index} data-testid="item-{index}">Item</RatingGroup.Item>
				{/each}
			{/snippet}
		</RatingGroup.Context>
	</RatingGroup.Control>
	<RatingGroup.HiddenInput data-testid="hidden-input" />
</RatingGroup>
