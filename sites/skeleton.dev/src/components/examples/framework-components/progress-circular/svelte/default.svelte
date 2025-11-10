<script lang="ts">
	import { Progress, Slider } from '@skeletonlabs/skeleton-svelte';

	let value = $state(50);
</script>

<div class="flex flex-col gap-8 items-center">
	<!-- Progress -->
	<Progress {value} class="items-center w-fit">
		<Progress.Label>Progress</Progress.Label>
		<Progress.Circle>
			<Progress.CircleTrack />
			<Progress.CircleRange />
		</Progress.Circle>
		<Progress.ValueText />
	</Progress>

	<!-- Control -->
	<Slider class="w-full" value={[value]} onValueChange={(e) => (value = e.value[0])} step={10}>
		<Slider.Control>
			<Slider.Track>
				<Slider.Range class="bg-transparent" />
			</Slider.Track>
			<Slider.Thumb index={0}>
				<Slider.HiddenInput />
			</Slider.Thumb>
		</Slider.Control>
	</Slider>
</div>
