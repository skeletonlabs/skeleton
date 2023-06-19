<script lang="ts">
	// DocShell
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock, Avatar } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Scroll Containers',
		description: 'Create a scroll container using Tailwind.'
	};

	// Local
	let scrollContainer: HTMLDivElement;
	let isScrollAtStart = true;
	let isScrollAtEnd = false;

	function onThumbnailClick(index: number) {
		scrollContainer.scroll(scrollContainer.clientWidth * index, 0);
	}
	function onNextPrevImage(nextImage: boolean) {
		const scrollAmount = nextImage ? scrollContainer.clientWidth : -scrollContainer.clientWidth;
		scrollContainer.scrollBy(scrollAmount, 0);
	}
	function updateButtonStates() {
		isScrollAtStart = scrollContainer.scrollLeft === 0;
		isScrollAtEnd = scrollContainer.scrollLeft === (scrollContainer.scrollWidth - scrollContainer.clientWidth);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview background="bg-surface-900">
			<svelte:fragment slot="preview">
				<div class="gap-6 flex snap-x snap-mandatory overflow-x-auto scroll-smooth">
					<div
						class="card variant-ghost-primary text-on-primary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32"
					>
						(Content)
					</div>
					<div
						class="card variant-ghost-primary text-on-primary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32"
					>
						(Content)
					</div>
					<div
						class="card variant-ghost-primary text-on-primary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32"
					>
						(Content)
					</div>
					<div
						class="card variant-ghost-primary text-on-primary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32"
					>
						(Content)
					</div>
					<div
						class="card variant-ghost-primary text-on-primary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32"
					>
						(Content)
					</div>
					<div
						class="card variant-ghost-primary text-on-primary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32"
					>
						(Content)
					</div>
					<div
						class="card variant-ghost-primary text-on-primary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32"
					>
						(Content)
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<div class="flex gap-6 snap-x snap-mandatory overflow-x-auto scroll-smooth">
	<div class="snap-center shrink-0">
		(Content)
	</div>
	<!-- ... -->
</div>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Carousel -->
		<section class="space-y-4">
			<h2 class="h2">Carousels</h2>
			<p>Using the scroll container, we can create fully functional carousels</p>
			<DocsPreview>
				<svelte:fragment slot="preview">
					<div class="card p-6 space-y-6 relative w-96 md:w-full">
						<div
							class="flex gap-6 pb-2 snap-x snap-mandatory overflow-x-auto scroll-smooth"
							bind:this={scrollContainer}
							on:scroll={updateButtonStates}
						>
							<!-- Images -->
							<div class="snap-center shrink-0 w-full">
								<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/vjUokUWbFOs/720x405" alt="" />
							</div>
							<div class="snap-center shrink-0 w-full">
								<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/1aJuPtQJX_I/720x405" alt="" />
							</div>
							<div class="snap-center shrink-0 w-full">
								<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/Jp6O3FFRdEI/720x405" alt="" />
							</div>
							<div class="snap-center shrink-0 w-full">
								<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/I3C_eojFVQY/720x405" alt="" />
							</div>
							<div class="snap-center shrink-0 w-full">
								<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/s0fXOuyTH1M/720x405" alt="" />
							</div>
							<div class="snap-center shrink-0 w-full">
								<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/QDc-OQU9hFk/720x405" alt="" />
							</div>
							<div class="snap-center shrink-0 w-full">
								<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/2BOFizfc438/720x405" alt="" />
							</div>
							<div class="snap-center shrink-0 w-full">
								<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/q5EGoKHQEe8/720x405" alt="" />
							</div>

							<!-- Next, Prev buttons -->
							<button
								type="button"
								class="btn-icon btn-icon-lg variant-filled absolute left-0 bottom-1/2"
								disabled={isScrollAtStart}
								on:click={() => onNextPrevImage(false)}
							>
								<i class="fa-solid fa-arrow-left" />
							</button>
							<button
								type="button"
								class="btn-icon btn-icon-lg variant-filled absolute right-0 bottom-1/2"
								disabled={isScrollAtEnd}
								on:click={() => onNextPrevImage(true)}
							>
								<i class="fa-solid fa-arrow-right" />
							</button>
						</div>

						<!-- Thumbnails -->
						<div class="flex md:justify-center py-2 gap-2 snap-x snap-mandatory overflow-x-auto scroll-smooth">
							<button type="button" class="btn p-0 snap-center rounded-none" aria-label="scroll to image1" on:click={() => onThumbnailClick(0)}>
								<Avatar src="https://source.unsplash.com/vjUokUWbFOs/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button type="button" class="btn p-0 snap-center rounded-none" aria-label="scroll to image2" on:click={() => onThumbnailClick(1)}>
								<Avatar src="https://source.unsplash.com/1aJuPtQJX_I/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button type="button" class="btn p-0 snap-center rounded-none" aria-label="scroll to image3" on:click={() => onThumbnailClick(2)}>
								<Avatar src="https://source.unsplash.com/Jp6O3FFRdEI/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button type="button" class="btn p-0 snap-center rounded-none" aria-label="scroll to image4" on:click={() => onThumbnailClick(3)}>
								<Avatar src="https://source.unsplash.com/I3C_eojFVQY/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button type="button" class="btn p-0 snap-center rounded-none" aria-label="scroll to image5" on:click={() => onThumbnailClick(4)}>
								<Avatar src="https://source.unsplash.com/s0fXOuyTH1M/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button type="button" class="btn p-0 snap-center rounded-none" aria-label="scroll to image6" on:click={() => onThumbnailClick(5)}>
								<Avatar src="https://source.unsplash.com/QDc-OQU9hFk/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button type="button" class="btn p-0 snap-center rounded-none" aria-label="scroll to image7" on:click={() => onThumbnailClick(6)}>
								<Avatar src="https://source.unsplash.com/2BOFizfc438/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button type="button" class="btn p-0 snap-center rounded-none" aria-label="scroll to image8" on:click={() => onThumbnailClick(7)}>
								<Avatar src="https://source.unsplash.com/q5EGoKHQEe8/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let scrollContainer: HTMLDivElement;
let isScrollAtStart = true;
let isScrollAtEnd = false;

function onThumbnailClick(index: number) {
	scrollContainer.scroll(scrollContainer.clientWidth * index, 0);
}
function onNextPrevImage(nextImage: boolean) {
	const scrollAmount = nextImage ? scrollContainer.clientWidth : -scrollContainer.clientWidth;
	scrollContainer.scrollBy(scrollAmount, 0);
}
function updateButtonStates() {
	isScrollAtStart = scrollContainer.scrollLeft === 0;
	isScrollAtEnd = scrollContainer.scrollLeft === (scrollContainer.scrollWidth 
		- scrollContainer.clientWidth);
}
					`}
					/>
					<CodeBlock
						language="html"
						code={`
	<div class="card p-6 space-y-6 relative w-96 md:w-full">
	<div class="flex gap-6 pb-2 snap-x snap-mandatory overflow-x-auto scroll-smooth"
		bind:this={scrollContainer}
		on:scroll={updateButtonStates}>
		<!-- Images -->
		<div class="snap-center shrink-0 w-full">
			<img class="shrink-0 rounded-lg w-full shadow-xl" src="" alt="" />
		</div>
		<!-- ... -->

		<!-- Next, Prev buttons -->
		<button
			type="button"
			class="btn-icon btn-icon-lg variant-filled absolute left-0 bottom-1/2"
			disabled={isScrollAtStart}
			on:click={() => onNextPrevImage(false)}
		>
			<i class="fa-solid fa-arrow-left" />
		</button>
		<button
			type="button"
			class="btn-icon btn-icon-lg variant-filled absolute right-0 bottom-1/2"
			disabled={isScrollAtEnd}
			on:click={() => onNextPrevImage(true)}
		>
			<i class="fa-solid fa-arrow-right" />
		</button>
	</div>
	
	<!-- Thumbnails -->
	<div class="flex md:justify-center pb-2 gap-2 snap-x snap-mandatory overflow-x-auto scroll-smooth">
		<button type="button" class="btn p-0 snap-center" on:click={() => onThumbnailClick(0)}>
			<Avatar src="" width="w-16" rounded="rounded-lg"/>
		</button>
		<button type="button" class="btn p-0 snap-center rounded-none" on:click={() => onThumbnailClick(1)}>
			<Avatar src="" width="w-16" rounded="rounded-lg"/>
		</button>
		<!-- ... -->
	</div>
</div>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
