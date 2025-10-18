<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';
</script>

<Slider defaultValue={[50]}>
	<Slider.Label>Label</Slider.Label>
	<Slider.Control>
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb index={0}>
			<Slider.HiddenInput />
		</Slider.Thumb>
	</Slider.Control>
	<Slider.MarkerGroup>
		<Slider.Marker value={25} />
		<Slider.Marker value={50} />
		<Slider.Marker value={75} />
	</Slider.MarkerGroup>
</Slider>
