<script lang="ts">
	import { Carousel } from '@skeletonlabs/skeleton-svelte';

	const slides = [
		{ title: 'Slide 1', description: 'Auto-advances after 3 seconds.' },
		{ title: 'Slide 2', description: 'Press toggle to pause/resume.' },
		{ title: 'Slide 3', description: 'Loops back to the beginning.' },
	];
</script>

<Carousel slideCount={slides.length} autoplay={{ delay: 3000 }} loop>
	<Carousel.Control>
		<Carousel.PrevTrigger class="btn preset-filled">Prev</Carousel.PrevTrigger>
		<Carousel.AutoplayTrigger class="btn preset-filled">Toggle</Carousel.AutoplayTrigger>
		<Carousel.NextTrigger class="btn preset-filled">Next</Carousel.NextTrigger>
	</Carousel.Control>
	<Carousel.ItemGroup>
		{#each slides as slide, i}
			<Carousel.Item index={i} class="min-w-full">
				<div class="card p-8 text-center">
					<h3 class="text-lg font-bold">{slide.title}</h3>
					<p class="text-surface-600-400">{slide.description}</p>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.ItemGroup>
	<Carousel.IndicatorGroup class="mt-4 flex justify-center">
		{#each slides as _, i}
			<Carousel.Indicator index={i} />
		{/each}
	</Carousel.IndicatorGroup>
</Carousel>
