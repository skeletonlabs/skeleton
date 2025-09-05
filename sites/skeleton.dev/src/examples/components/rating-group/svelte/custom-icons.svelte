<script lang="ts">
	import { RatingGroup } from '@skeletonlabs/skeleton-svelte';
	import Bone from '@lucide/svelte/icons/bone';
	import Skull from '@lucide/svelte/icons/skull';
</script>

<RatingGroup count={5}>
	<RatingGroup.Control>
		{#each Array.from({ length: 5 }), index}
			<RatingGroup.Item index={index + 1}>
				{#snippet empty()}
					<Bone />
				{/snippet}
				{#snippet full()}
					<Skull />
				{/snippet}
			</RatingGroup.Item>
		{/each}
	</RatingGroup.Control>
	<RatingGroup.HiddenInput />
</RatingGroup>
