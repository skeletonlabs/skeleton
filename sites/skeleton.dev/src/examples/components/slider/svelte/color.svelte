<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="space-y-8 w-full">
	<Slider defaultValue={[50]}>
		<Slider.Control>
			<Slider.Track>
				<Slider.Range class="bg-primary-500" />
			</Slider.Track>
			<Slider.Thumb index={0}>
				<Slider.HiddenInput />
			</Slider.Thumb>
		</Slider.Control>
	</Slider>

	<Slider defaultValue={[50]}>
		<Slider.Control>
			<Slider.Track>
				<Slider.Range class="bg-secondary-500" />
			</Slider.Track>
			<Slider.Thumb index={0}>
				<Slider.HiddenInput />
			</Slider.Thumb>
		</Slider.Control>
	</Slider>

	<Slider defaultValue={[50]}>
		<Slider.Control>
			<Slider.Track>
				<Slider.Range class="bg-tertiary-500" />
			</Slider.Track>
			<Slider.Thumb index={0}>
				<Slider.HiddenInput />
			</Slider.Thumb>
		</Slider.Control>
	</Slider>
</div>
