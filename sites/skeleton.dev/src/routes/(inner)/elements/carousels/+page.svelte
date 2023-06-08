<script lang="ts">
	// DocShell
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { leftArrow, rightArrow } from './icons';
	import { slide } from 'svelte/transition';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Carousel',
		description: 'Create a Carousel using the scroll snap feature from Tailwind.',
		dependencies: [{ label: 'Tailwind Scroll-Snap', url: 'https://tailwindcss.com/docs/scroll-snap-align' }]
	};

	let carousel: HTMLDivElement;
	let activeImageIndex = 0;

	function scrollToImage(imageIndex: number) {
		activeImageIndex = imageIndex;
		carousel.querySelectorAll('img').item(activeImageIndex).scrollIntoView({
			behavior: 'smooth',
			block: 'nearest'
		});
	}

	function onNextImage() {
		carousel.querySelectorAll('img').item(++activeImageIndex).scrollIntoView({
			behavior: 'smooth',
			block: 'nearest'
		});
	}

	function onPreviousImage() {
		carousel.querySelectorAll('img').item(--activeImageIndex).scrollIntoView({
			behavior: 'smooth',
			block: 'nearest'
		});
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="card p-6 space-y-6">
			<!-- Carousel -->
			<div class="flex gap-6 snap-x snap-mandatory overflow-x-hidden" bind:this={carousel}>
				<div class="snap-center shrink-0 w-full">
					<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/vjUokUWbFOs/720x405" alt="" />
				</div>
				<div class="snap-center shrink-0 w-full">
					<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/1aJuPtQJX_I/720x405" alt="" />
				</div>
				<div class="snap-center shrink-0 w-full">
					<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/Jp6O3FFRdEI/720x405" alt="" />
				</div>
				<div class="snap-center shrink-0">
					<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/I3C_eojFVQY/720x405" alt="" />
				</div>
				<div class="snap-center shrink-0 w-full">
					<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/s0fXOuyTH1M/720x405" alt="" />
				</div>
			</div>

			<!-- Thumbnails -->
			<div class="flex gap-2 justify-center">
				<button
					class="btn-icon w-20 h-16 hover:opacity-100 {activeImageIndex === 0 ? 'opacity-100' : 'opacity-50'}"
					aria-label="image 1 thumbnail"
					on:click={() => scrollToImage(0)}
				>
					<img class="rounded-lg w-20 h-16 shadow-xl" src="https://source.unsplash.com/vjUokUWbFOs/80x64" alt="" />
				</button>
				<button
					class="btn-icon w-20 h-16 hover:opacity-100 {activeImageIndex === 1 ? 'opacity-100' : 'opacity-50'}"
					aria-label="image 2 thumbnail"
					on:click={() => scrollToImage(1)}
				>
					<img class="rounded-lg w-20 h-16 shadow-xl" src="https://source.unsplash.com/1aJuPtQJX_I/80x64" alt="" />
				</button>
				<button
					class="btn-icon w-20 h-16 hover:opacity-100 {activeImageIndex === 2 ? 'opacity-100' : 'opacity-50'}"
					aria-label="image 3 thumbnail"
					on:click={() => scrollToImage(2)}
				>
					<img class="rounded-lg w-20 h-16 shadow-xl" src="https://source.unsplash.com/Jp6O3FFRdEI/80x64" alt="" />
				</button>
				<button
					class="btn-icon w-20 h-16 hover:opacity-100 {activeImageIndex === 3 ? 'opacity-100' : 'opacity-50'}"
					aria-label="image 4 thumbnail"
					on:click={() => scrollToImage(3)}
				>
					<img class="rounded-lg w-20 h-16 shadow-xl" src="https://source.unsplash.com/I3C_eojFVQY/80x64" alt="" />
				</button>
				<button
					class="btn-icon w-20 h-16 hover:opacity-100 {activeImageIndex === 4 ? 'opacity-100' : 'opacity-50'}"
					aria-label="image 5 thumbnail"
					on:click={() => scrollToImage(4)}
				>
					<img class="rounded-lg w-20 h-16 shadow-xl" src="https://source.unsplash.com/s0fXOuyTH1M/80x64" alt="" />
				</button>
			</div>

			<!-- Buttons -->
			<div class="flex gap-2 justify-center">
				<button
					class="btn-icon variant-filled fill-current"
					aria-label="previous"
					disabled={activeImageIndex === 0}
					on:click={onPreviousImage}
				>
					{@html leftArrow}
				</button>
				<button class="btn-icon variant-filled fill-current" aria-label="next" disabled={activeImageIndex === 4} on:click={onNextImage}>
					{@html rightArrow}
				</button>
			</div>
		</div>
	</svelte:fragment>
</DocsShell>
