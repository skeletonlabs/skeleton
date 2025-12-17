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

<div class="space-y-10">
	<!-- autoplay={{ delay: 3000 }} -->
	<Carousel slideCount={slides.length} slidesPerPage={3} slidesPerMove={1} spacing="16px" loop>
		<Carousel.Control class="flex justify-between mb-4">
			<Carousel.PrevTrigger class="btn preset-filled">
				<span>&larr;</span>
				<span>Back</span>
			</Carousel.PrevTrigger>
			<!-- <Carousel.AutoplayTrigger>Toggle Autoplay</Carousel.AutoplayTrigger> -->
			<Carousel.NextTrigger class="btn preset-filled">
				<span>Next</span>
				<span>&rarr;</span>
			</Carousel.NextTrigger>
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

	<Carousel slideCount={slides.length} slidesPerPage={3} slidesPerMove={1} spacing="16px" loop>
		<div class="relative">
			<Carousel.Control class="absolute top-0 left-0 right-0 translate-y-[50%] flex justify-between mb-4">
				<Carousel.PrevTrigger class="btn-icon preset-filled translate-y-[50%] -translate-x-2">
					<span>&larr;</span>
				</Carousel.PrevTrigger>
				<!-- <Carousel.AutoplayTrigger>Toggle Autoplay</Carousel.AutoplayTrigger> -->
				<Carousel.NextTrigger class="btn-icon preset-filled translate-y-[50%] translate-x-2">
					<span>&rarr;</span>
				</Carousel.NextTrigger>
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
		</div>
		<Carousel.IndicatorGroup>
			{#each slides as _, i}
				<Carousel.Indicator index={i} />
			{/each}
		</Carousel.IndicatorGroup>
	</Carousel>
</div>
