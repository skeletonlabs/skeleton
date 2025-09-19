<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';
</script>

<Slider>
	<Slider.Label>Label</Slider.Label>
	<Slider.Control>
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb index={0} data-testid="thumb">
			<Slider.HiddenInput data-testid="hidden-input" />
		</Slider.Thumb>
	</Slider.Control>
	<Slider.MarkerGroup>
		<Slider.Marker value={0} />
	</Slider.MarkerGroup>
</Slider>
