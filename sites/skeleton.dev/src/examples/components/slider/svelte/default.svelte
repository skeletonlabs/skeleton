<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';
</script>

<Slider class="w-full">
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
		<Slider.Marker value={0} />
		<Slider.Marker value={25} />
		<Slider.Marker value={50} />
		<Slider.Marker value={75} />
		<Slider.Marker value={100} />
	</Slider.MarkerGroup>
</Slider>
