<script lang="ts">
	import BlocksIcon from '@lucide/svelte/icons/blocks';
	import LayoutTemplateIcon from '@lucide/svelte/icons/layout-template';
	import PaletteIcon from '@lucide/svelte/icons/palette';
	import SparklesIcon from '@lucide/svelte/icons/sparkles';
	import WandIcon from '@lucide/svelte/icons/wand-2';

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
	let carouselIndex = $state(0);
	const slide = $derived(slides[carouselIndex]);
	let carouselInterval: ReturnType<typeof setInterval> | undefined;

	function startCarousel() {
		carouselInterval = setInterval(() => {
			carouselIndex = (carouselIndex + 1) % slides.length;
		}, 5000);
	}

	function setSlide(index: number) {
		carouselIndex = index;
		clearInterval(carouselInterval);
		startCarousel();
	}

	$effect(() => {
		startCarousel();
		return () => clearInterval(carouselInterval);
	});
</script>

<div class="max-w-md space-y-4">
	<div class="preset-filled-primary-500 inline-flex items-center justify-center p-3 rounded-lg">
		<slide.Icon class="size-elem-6xl" />
	</div>
	<h2 class="h3">{slide.title}</h2>
	<p class="opacity-60">{slide.description}</p>
	<div class="flex items-center gap-2">
		{#each slides as _, i (i)}
			<button
				type="button"
				onclick={() => setSlide(i)}
				aria-label="Go to slide {i + 1}"
				aria-current={i === carouselIndex}
				class="size-2 aspect-square rounded-full {i === carouselIndex ? 'preset-filled' : 'preset-tonal'}"
			></button>
		{/each}
	</div>
</div>
