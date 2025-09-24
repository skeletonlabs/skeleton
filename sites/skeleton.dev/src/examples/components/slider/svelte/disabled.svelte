<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';
</script>

<Slider defaultValue={[50]} class="w-full" disabled>
	<Slider.Control>
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb index={0}>
			<Slider.HiddenInput />
		</Slider.Thumb>
	</Slider.Control>
</Slider>
