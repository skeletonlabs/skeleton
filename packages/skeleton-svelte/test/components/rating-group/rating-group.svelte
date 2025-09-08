<script lang="ts">
	import { RatingGroup } from '../../../src/index';
</script>

<RatingGroup count={3} data-testid="root">
	<RatingGroup.Label data-testid="label">Label</RatingGroup.Label>
	<RatingGroup.Control data-testid="control">
		{#each Array.from({ length: 5 }), index}
			<RatingGroup.Item {index} data-testid="item-{index}" />
		{/each}
	</RatingGroup.Control>
	<RatingGroup.HiddenInput data-testid="hidden-input" />
</RatingGroup>
