<script lang="ts">
	import { Carousel } from '@skeletonlabs/skeleton-svelte';

	const slides = [
		{ title: 'Slide 1', description: 'First slide content goes here. This is a sample carousel slide.' },
		{ title: 'Slide 2', description: 'Second slide content. Demonstrates the carousel navigation.' },
		{ title: 'Slide 3', description: 'Third slide content. Use indicators to jump to any slide.' },
		{ title: 'Slide 4', description: 'Fourth slide content. Autoplay feature available.' },
		{ title: 'Slide 5', description: 'Fifth and final slide. Try the prev/next controls.' },
	];
</script>

<Carousel slideCount={slides.length} autoplay={{ delay: 3000 }} loop>
	<Carousel.Control>
		<Carousel.PrevTrigger>Prev</Carousel.PrevTrigger>
		<Carousel.AutoplayTrigger>Toggle Autoplay</Carousel.AutoplayTrigger>
		<Carousel.NextTrigger>Next</Carousel.NextTrigger>
	</Carousel.Control>
	<Carousel.ItemGroup>
		{#each slides as slide, i}
			<Carousel.Item index={i}>
				{slide.description}
			</Carousel.Item>
		{/each}
	</Carousel.ItemGroup>
	<Carousel.IndicatorGroup>
		{#each slides as _, i}
			<Carousel.Indicator index={i} />
		{/each}
	</Carousel.IndicatorGroup>
</Carousel>
