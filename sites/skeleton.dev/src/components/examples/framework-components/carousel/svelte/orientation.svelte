<script lang="ts">
	import { Carousel } from "@skeletonlabs/skeleton-svelte";

	const slides = [
		{ title: "Slide 1" },
		{ title: "Slide 2" },
		{ title: "Slide 3" },
		{ title: "Slide 4" },
		{ title: "Slide 5" },
		{ title: "Slide 6" },
		{ title: "Slide 7" },
		{ title: "Slide 8" },
		{ title: "Slide 9" },
		{ title: "Slide 10" },
	];
</script>

<Carousel
	slideCount={slides.length}
	slidesPerPage={3}
	spacing="16px"
	loop
	orientation="vertical"
	autoSize
>
	<Carousel.Control class="mb-4 flex justify-between">
		<Carousel.PrevTrigger class="btn preset-filled">
			<span>&larr;</span>
			<span>Back</span>
		</Carousel.PrevTrigger>
		<Carousel.AutoplayTrigger class="btn preset-tonal">Toggle Autoplay</Carousel.AutoplayTrigger
		>
		<Carousel.NextTrigger class="btn preset-filled">
			<span>Next</span>
			<span>&rarr;</span>
		</Carousel.NextTrigger>
	</Carousel.Control>
	<Carousel.ItemGroup class="h-80">
		{#each slides as slide, i}
			<Carousel.Item
				index={i}
				class="card bg-surface-100-900/90 flex h-32 items-center justify-center p-4"
			>
				{slide.title}
			</Carousel.Item>
		{/each}
	</Carousel.ItemGroup>
	<Carousel.IndicatorGroup>
		<Carousel.Context>
			{#snippet children(carousel)}
				{#each carousel().pageSnapPoints as _, index}
					<Carousel.Indicator {index} />
				{/each}
			{/snippet}
		</Carousel.Context>
	</Carousel.IndicatorGroup>
</Carousel>
