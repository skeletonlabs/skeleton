<script lang="ts">
	import Bone from '@lucide/svelte/icons/bone';
	import Skull from '@lucide/svelte/icons/skull';
	import { RatingGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<RatingGroup count={5}>
	<RatingGroup.Control>
		<RatingGroup.Context>
			{#snippet children(ratingGroup)}
				{#each ratingGroup().items as index (index)}
					<RatingGroup.Item {index}>
						{#snippet empty()}
							<Bone />
						{/snippet}
						{#snippet full()}
							<Skull />
						{/snippet}
					</RatingGroup.Item>
				{/each}
			{/snippet}
		</RatingGroup.Context>
	</RatingGroup.Control>
	<RatingGroup.HiddenInput />
</RatingGroup>
