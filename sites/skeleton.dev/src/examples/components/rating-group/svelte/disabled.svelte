<script lang="ts">
	import { RatingGroup } from '@skeletonlabs/skeleton-svelte';
	import StarIcon from '@lucide/svelte/icons/star';
</script>

<RatingGroup count={5} disabled={true}>
	<RatingGroup.Control>
		<RatingGroup.Context>
			{#snippet children(ctx)}
				{#each ctx.api.items as index (index)}
					<RatingGroup.Item {index}>
						<RatingGroup.ItemContext>
							{#snippet children(ctx)}
								{#if ctx.itemState.highlighted}
									<StarIcon fill="currentColor" />
								{:else}
									<StarIcon />
								{/if}
							{/snippet}
						</RatingGroup.ItemContext>
					</RatingGroup.Item>
				{/each}
			{/snippet}
		</RatingGroup.Context>
	</RatingGroup.Control>
	<RatingGroup.HiddenInput />
</RatingGroup>
