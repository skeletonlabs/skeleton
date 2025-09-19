<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';
</script>

<Slider data-testid="root">
	<Slider.Label data-testid="label" />
	<Slider.Control data-testid="control">
		<Slider.Track data-testid="track">
			<Slider.Range data-testid="range" />
		</Slider.Track>
	</Slider.Control>
	<Slider.Context>
		{#snippet children(slider)}
			{#each slider.value as _, index (index)}
				<Slider.Thumb {index} data-testid={`thumb-${index}`}>
					<Slider.HiddenInput data-testid={`hidden-input-${index}`} />
				</Slider.Thumb>
			{/each}
		{/snippet}
	</Slider.Context>
	<Slider.MarkerGroup data-testid="marker-group">
		<Slider.Marker value={0} data-testid="marker" />
	</Slider.MarkerGroup>
</Slider>
