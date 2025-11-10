<script lang="ts">
	import { Progress, Slider } from '@skeletonlabs/skeleton-svelte';

	let value = $state(75);
</script>

<div class="w-full space-y-8">
	<!-- Progress -->
	<Progress {value} class="grid grid-cols-[auto_1fr] items-center gap-4">
		<Progress.Label class="text-sm">{value}%</Progress.Label>
		<Progress.Track>
			<Progress.Range />
		</Progress.Track>
	</Progress>

	<!-- Controls -->
	<Slider class="w-32 mx-auto" value={[value]} onValueChange={(e) => (value = e.value[0])} step={10}>
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
