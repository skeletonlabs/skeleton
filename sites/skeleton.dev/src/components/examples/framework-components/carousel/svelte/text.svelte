<script lang="ts">
	import { Carousel } from '@skeletonlabs/skeleton-svelte';

	const slides = [
		{ title: 'Slide 1' },
		{ title: 'Slide 2' },
		{ title: 'Slide 3' },
		{ title: 'Slide 4' },
		{ title: 'Slide 5' },
		{ title: 'Slide 6' },
		{ title: 'Slide 7' },
		{ title: 'Slide 8' },
		{ title: 'Slide 9' },
		{ title: 'Slide 10' },
	];
</script>

<Carousel slideCount={slides.length} slidesPerPage={3} spacing="16px" loop>
	<Carousel.Control class="flex justify-between mb-4">
		<Carousel.PrevTrigger class="btn preset-filled">
			<span>&larr;</span>
			<span>Back</span>
		</Carousel.PrevTrigger>
		<Carousel.AutoplayTrigger class="btn preset-tonal">Toggle Autoplay</Carousel.AutoplayTrigger>
		<Carousel.NextTrigger class="btn preset-filled">
			<span>Next</span>
			<span>&rarr;</span>
		</Carousel.NextTrigger>
	</Carousel.Control>
	<Carousel.ItemGroup>
		{#each slides as slide, i}
			<Carousel.Item index={i} class="card bg-surface-100-900 h-50 p-4 flex justify-center items-center">
				{slide.title}
			</Carousel.Item>
		{/each}
	</Carousel.ItemGroup>
	<Carousel.ProgressText class="mt-4 text-center font-bold">
		<Carousel.Context>
			{#snippet children(carousel)}
				<p>Showing {carousel().page + 1} of {carousel().pageSnapPoints.length}</p>
			{/snippet}
		</Carousel.Context>
	</Carousel.ProgressText>
</Carousel>
