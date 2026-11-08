<script lang="ts">
	import { Progress, Slider } from "@skeletonlabs/skeleton-svelte";

	let value = $state(50);
</script>

<div class="flex flex-col items-center gap-8">
	<!-- Progress -->
	<Progress {value} class="w-fit items-center">
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
