<script lang="ts">
	import { RatingGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<RatingGroup count={5} dir="rtl">
	<RatingGroup.Control>
		{#each Array.from({ length: 5 }), index}
			<RatingGroup.Item index={index + 1} />
		{/each}
	</RatingGroup.Control>
	<RatingGroup.HiddenInput />
</RatingGroup>
