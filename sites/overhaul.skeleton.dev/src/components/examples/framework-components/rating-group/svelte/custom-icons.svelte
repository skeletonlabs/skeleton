<script lang="ts">
	import { BoneIcon, SkullIcon } from '@lucide/svelte';
	import { RatingGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<RatingGroup count={3}>
	<RatingGroup.Control>
		<RatingGroup.Context>
			{#snippet children(ratingGroup)}
				{#each ratingGroup().items as index (index)}
					<RatingGroup.Item {index}>
						{#snippet empty()}
							<BoneIcon />
						{/snippet}
						{#snippet full()}
							<SkullIcon />
						{/snippet}
					</RatingGroup.Item>
				{/each}
			{/snippet}
		</RatingGroup.Context>
	</RatingGroup.Control>
	<RatingGroup.HiddenInput />
</RatingGroup>
