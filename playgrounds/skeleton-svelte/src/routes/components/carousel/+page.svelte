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

<!-- autoplay={{ delay: 3000 }} -->
<Carousel slideCount={slides.length} slidesPerPage={3} spacing="16px" loop>
	<Carousel.Control>
		<Carousel.PrevTrigger class="btn-icon preset-filled">&larr;</Carousel.PrevTrigger>
		<!-- <Carousel.AutoplayTrigger>Toggle Autoplay</Carousel.AutoplayTrigger> -->
		<Carousel.NextTrigger class="btn-icon preset-filled">&rarr;</Carousel.NextTrigger>
	</Carousel.Control>
	<Carousel.ItemGroup>
		{#each slides as slide, i}
			<Carousel.Item index={i}>
				<div class="card bg-surface-100-900 p-4 h-full">
					<header>{slide.title}</header>
					<article>{slide.description}</article>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.ItemGroup>
	<Carousel.IndicatorGroup>
		{#each slides as _, i}
			<Carousel.Indicator index={i} />
		{/each}
	</Carousel.IndicatorGroup>
</Carousel>
