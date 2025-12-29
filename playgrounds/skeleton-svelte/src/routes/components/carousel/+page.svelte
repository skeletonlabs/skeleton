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
	<header>
		<h1 class="h1">Carousel</h1>
	</header>

	<div class="space-y-4">
		<h2 class="h2">Default</h2>
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
	</div>

	<section class="space-y-4">
		<h2 class="h2">Overlap</h2>
		<Carousel slideCount={slides.length} slidesPerPage={4} spacing="16px" padding="48px" autoSize loop>
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
						<Carousel.Item index={i} class="card bg-surface-100-900 h-50 aspect-square p-4 flex justify-center items-center">
							{slide.title}
						</Carousel.Item>
					{/each}
				</Carousel.ItemGroup>
			</div>
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
	</section>

	<section class="space-y-4">
		<h2 class="h2">Orientation</h2>
		<Carousel slideCount={slides.length} slidesPerPage={3} spacing="16px" loop orientation="vertical" autoSize>
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
			<Carousel.ItemGroup class="h-80">
				{#each slides as slide, i}
					<Carousel.Item index={i} class="card bg-surface-100-900/90 h-32 p-4 flex justify-center items-center">
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
	</section>
</div>
