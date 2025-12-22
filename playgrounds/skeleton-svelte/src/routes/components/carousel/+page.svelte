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

<div class="space-y-10">
	<Carousel slideCount={slides.length} slidesPerPage={3} spacing="16px" loop>
		<Carousel.Control class="flex justify-between mb-4">
			<Carousel.PrevTrigger class="btn preset-filled">
				<span>&larr;</span>
				<span>Back</span>
			</Carousel.PrevTrigger>
			<Carousel.AutoplayTrigger class="btn preset-filled">Toggle Autoplay</Carousel.AutoplayTrigger>
			<Carousel.NextTrigger class="btn preset-filled">
				<span>Next</span>
				<span>&rarr;</span>
			</Carousel.NextTrigger>
		</Carousel.Control>
		<Carousel.ItemGroup>
			{#each slides as slide, i}
				<Carousel.Item index={i}>
					<div class="card bg-surface-100-900 h-50 p-4 flex justify-center items-center">
						<span>{slide.title}</span>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.ItemGroup>
		<Carousel.IndicatorGroup>
			<Carousel.Context>
				{#snippet children(carousel)}
					{#each carousel().pageSnapPoints, index}
						<Carousel.Indicator {index} />
					{/each}
				{/snippet}
			</Carousel.Context>
		</Carousel.IndicatorGroup>
	</Carousel>

	<Carousel slideCount={slides.length} slidesPerPage={4} spacing="16px" padding="48px" loop>
		<div class="relative">
			<Carousel.Control>
				<Carousel.PrevTrigger class="btn-icon preset-filled rounded-full absolute top-[50%] left-0 translate-y-[-50%]">
					<span>&larr;</span>
				</Carousel.PrevTrigger>
				<Carousel.NextTrigger class="btn-icon preset-filled rounded-full absolute top-[50%] right-0 translate-y-[-50%]">
					<span>&rarr;</span>
				</Carousel.NextTrigger>
			</Carousel.Control>
			<Carousel.ItemGroup>
				{#each slides as slide, i}
					<Carousel.Item index={i}>
						<div class="card bg-surface-100-900 h-50 p-4 flex justify-center items-center">
							<span>{slide.title}</span>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.ItemGroup>
		</div>
		<Carousel.IndicatorGroup>
			<Carousel.Context>
				{#snippet children(carousel)}
					{#each carousel().pageSnapPoints, index}
						<Carousel.Indicator {index} />
					{/each}
				{/snippet}
			</Carousel.Context>
		</Carousel.IndicatorGroup>
	</Carousel>
</div>
