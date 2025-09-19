<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';
</script>

<Slider data-testid="root">
	<Slider.Label data-testid="label" />
	<Slider.ValueText data-testid="value-text" />
	<Slider.Control data-testid="control">
		<Slider.Track data-testid="track">
			<Slider.Range data-testid="range" />
		</Slider.Track>
		<Slider.Thumb index={0} data-testid="thumb">
			<Slider.HiddenInput data-testid="hidden-input" />
		</Slider.Thumb>
	</Slider.Control>
	<Slider.MarkerGroup data-testid="marker-group">
		<Slider.Marker value={0} data-testid="marker" />
	</Slider.MarkerGroup>
</Slider>
