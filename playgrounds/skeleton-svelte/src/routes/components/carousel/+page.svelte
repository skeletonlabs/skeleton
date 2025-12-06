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

<div class="space-y-8">
	<section class="space-y-4">
		<h2 class="text-xl font-bold">Basic Carousel</h2>
		<Carousel slideCount={slides.length} class="w-full max-w-2xl">
			<Carousel.Control class="mb-4">
				<Carousel.PrevTrigger class="btn preset-filled">Prev</Carousel.PrevTrigger>
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
	</section>

	<section class="space-y-4">
		<h2 class="text-xl font-bold">Multiple Slides Per Page</h2>
		<Carousel slideCount={slides.length} slidesPerPage={2} class="w-full max-w-4xl">
			<Carousel.Control class="mb-4">
				<Carousel.PrevTrigger class="btn preset-filled">Prev</Carousel.PrevTrigger>
				<Carousel.NextTrigger class="btn preset-filled">Next</Carousel.NextTrigger>
			</Carousel.Control>
			<Carousel.ItemGroup class="gap-4">
				{#each slides as slide, i}
					<Carousel.Item index={i} class="min-w-[calc(50%-0.5rem)]">
						<div class="card p-8 text-center">
							<h3 class="text-lg font-bold">{slide.title}</h3>
							<p class="text-surface-600-400">{slide.description}</p>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.ItemGroup>
			<Carousel.IndicatorGroup class="mt-4 flex justify-center">
				{#each { length: Math.ceil(slides.length / 2) } as _, i}
					<Carousel.Indicator index={i} />
				{/each}
			</Carousel.IndicatorGroup>
		</Carousel>
	</section>

	<section class="space-y-4">
		<h2 class="text-xl font-bold">With Autoplay</h2>
		<Carousel slideCount={slides.length} autoplay={{ delay: 3000 }} loop class="w-full max-w-2xl">
			<Carousel.Control class="mb-4">
				<Carousel.PrevTrigger class="btn preset-filled">Prev</Carousel.PrevTrigger>
				<Carousel.AutoplayTrigger class="btn preset-filled">Toggle Autoplay</Carousel.AutoplayTrigger>
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
	</section>
</div>
