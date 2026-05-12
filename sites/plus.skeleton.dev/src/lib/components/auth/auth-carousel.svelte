<script lang="ts">
	import BlocksIcon from '@lucide/svelte/icons/blocks';
	import LayoutTemplateIcon from '@lucide/svelte/icons/layout-template';
	import PaletteIcon from '@lucide/svelte/icons/palette';
	import SparklesIcon from '@lucide/svelte/icons/sparkles';
	import WandIcon from '@lucide/svelte/icons/wand-2';
	import { Carousel } from '@skeletonlabs/skeleton-svelte';

	const slides = [
		{
			Icon: PaletteIcon,
			title: 'The design layer for Skeleton.',
			description: 'Themes, presets, mesh gradients, UI blocks, and templates — everything you need to ship a beautiful Skeleton app.',
		},
		{
			Icon: WandIcon,
			title: 'Presets for every surface.',
			description: 'A curated library of presets keeps spacing, color, and typography consistent across every screen you build.',
		},
		{
			Icon: SparklesIcon,
			title: 'Mesh gradients on demand.',
			description: 'Generate vibrant, customizable mesh gradients to add depth and atmosphere to any layout in seconds.',
		},
		{
			Icon: BlocksIcon,
			title: 'Production-ready UI blocks.',
			description: 'Drop in headers, heroes, pricing sections, and more — assembled from Skeleton primitives and ready to ship.',
		},
		{
			Icon: LayoutTemplateIcon,
			title: 'Full app templates.',
			description: 'Kickstart your next project with complete templates — fully themed, responsive, and styled with Skeleton.',
		},
	];
</script>

<Carousel slideCount={slides.length} slidesPerPage={1} loop autoplay>
	<Carousel.ItemGroup>
		{#each slides as slide, i}
			<Carousel.Item index={i} class="space-y-4 p-4 flex flex-col items-start">
				<div class="preset-filled-primary-500 inline-flex items-center justify-center p-3 rounded-lg">
					<slide.Icon class="size-6" />
				</div>

				<h2 class="h3">{slide.title}</h2>
				<p class="opacity-60">{slide.description}</p>
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
