<script lang="ts">
	import { Carousel } from '@skeletonlabs/skeleton-svelte';

	const slides = [
		{ title: 'Item 1', description: 'First item' },
		{ title: 'Item 2', description: 'Second item' },
		{ title: 'Item 3', description: 'Third item' },
		{ title: 'Item 4', description: 'Fourth item' },
		{ title: 'Item 5', description: 'Fifth item' },
		{ title: 'Item 6', description: 'Sixth item' },
	];
</script>

<Carousel slideCount={slides.length} slidesPerPage={3}>
	<Carousel.Control>
		<Carousel.PrevTrigger class="btn preset-filled">Prev</Carousel.PrevTrigger>
		<Carousel.NextTrigger class="btn preset-filled">Next</Carousel.NextTrigger>
	</Carousel.Control>
	<Carousel.ItemGroup class="gap-4">
		{#each slides as slide, i}
			<Carousel.Item index={i} class="min-w-[calc(33.333%-0.67rem)]">
				<div class="card p-4 text-center">
					<h3 class="font-bold">{slide.title}</h3>
					<p class="text-sm text-surface-600-400">{slide.description}</p>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.ItemGroup>
</Carousel>
