<script lang="ts">
	// DocShell
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	import * as moviesData from './movies.json';
	// Components
	import { CodeBlock, Avatar } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Scroll Containers',
		description: "Create a scroll container that snaps to it's content using TailwindCss"
	};

	// Local
	let imageScrollContainer: HTMLDivElement;
	let moviesScrollContainer: HTMLDivElement;

	function onThumbnailClick(index: number) {
		imageScrollContainer.scroll(imageScrollContainer.clientWidth * index, 0);
	}
	function onNextPrevImage(nextImage: boolean) {
		let scrollX = 0;
		if (nextImage) {
			// scroll to start
			if (imageScrollContainer.scrollLeft === imageScrollContainer.scrollWidth - imageScrollContainer.clientWidth) scrollX = 0;
			// scroll to next
			else scrollX = imageScrollContainer.scrollLeft + imageScrollContainer.clientWidth;
		} else {
			// scroll to end
			if (imageScrollContainer.scrollLeft === 0) scrollX = imageScrollContainer.clientWidth * imageScrollContainer.childElementCount;
			// scroll to previous
			else scrollX = imageScrollContainer.scrollLeft - imageScrollContainer.clientWidth;
		}
		imageScrollContainer.scroll(scrollX, 0);
	}

	function onNextPrevMovie(nextMovie: boolean) {
		let scrollX = 0;
		if (nextMovie) {
			// scroll to start
			if (moviesScrollContainer.scrollLeft === moviesScrollContainer.scrollWidth - moviesScrollContainer.clientWidth) scrollX = 0;
			// scroll to next
			else scrollX = moviesScrollContainer.scrollLeft + moviesScrollContainer.clientWidth;
		} else {
			// scroll to end
			if (moviesScrollContainer.scrollLeft === 0) scrollX = moviesScrollContainer.clientWidth * moviesScrollContainer.childElementCount;
			// scroll to previous
			else scrollX = moviesScrollContainer.scrollLeft - moviesScrollContainer.clientWidth;
		}
		moviesScrollContainer.scroll(scrollX, 0);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionFooter="text-center">
			<svelte:fragment slot="preview">
				<div class="gap-6 flex snap-x snap-mandatory overflow-x-auto scroll-smooth">
					<div class="card variant-filled text-on-secondary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32">
						(Content)
					</div>
					<div class="card variant-filled text-on-secondary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32">
						(Content)
					</div>
					<div class="card variant-filled text-on-secondary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32">
						(Content)
					</div>
					<div class="card variant-filled text-on-secondary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32">
						(Content)
					</div>
					<div class="card variant-filled text-on-secondary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32">
						(Content)
					</div>
					<div class="card variant-filled text-on-secondary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32">
						(Content)
					</div>
					<div class="card variant-filled text-on-secondary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32">
						(Content)
					</div>
					<div class="card variant-filled text-on-secondary-token snap-center shrink-0 w-40 md:w-80 flex justify-center items-center h-32">
						(Content)
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<p>Scroll left or right to see snapping effect.</p>
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
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="card p-6 space-y-6 relative w-96 md:w-full">
						<div class="flex gap-6 pb-2 snap-x snap-mandatory overflow-x-auto scroll-smooth" bind:this={imageScrollContainer}>
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
								on:click={() => onNextPrevImage(false)}
							>
								<i class="fa-solid fa-arrow-left" />
							</button>
							<button
								type="button"
								class="btn-icon btn-icon-lg variant-filled absolute right-0 bottom-1/2"
								on:click={() => onNextPrevImage(true)}
							>
								<i class="fa-solid fa-arrow-right" />
							</button>
						</div>

						<!-- Thumbnails -->
						<div class="flex md:justify-center py-2 gap-2 snap-x snap-mandatory overflow-x-auto scroll-smooth">
							<button
								type="button"
								class="btn p-0 snap-center rounded-none"
								aria-label="scroll to image1"
								on:click={() => onThumbnailClick(0)}
							>
								<Avatar src="https://source.unsplash.com/vjUokUWbFOs/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button
								type="button"
								class="btn p-0 snap-center rounded-none"
								aria-label="scroll to image2"
								on:click={() => onThumbnailClick(1)}
							>
								<Avatar src="https://source.unsplash.com/1aJuPtQJX_I/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button
								type="button"
								class="btn p-0 snap-center rounded-none"
								aria-label="scroll to image3"
								on:click={() => onThumbnailClick(2)}
							>
								<Avatar src="https://source.unsplash.com/Jp6O3FFRdEI/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button
								type="button"
								class="btn p-0 snap-center rounded-none"
								aria-label="scroll to image4"
								on:click={() => onThumbnailClick(3)}
							>
								<Avatar src="https://source.unsplash.com/I3C_eojFVQY/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button
								type="button"
								class="btn p-0 snap-center rounded-none"
								aria-label="scroll to image5"
								on:click={() => onThumbnailClick(4)}
							>
								<Avatar src="https://source.unsplash.com/s0fXOuyTH1M/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button
								type="button"
								class="btn p-0 snap-center rounded-none"
								aria-label="scroll to image6"
								on:click={() => onThumbnailClick(5)}
							>
								<Avatar src="https://source.unsplash.com/QDc-OQU9hFk/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button
								type="button"
								class="btn p-0 snap-center rounded-none"
								aria-label="scroll to image7"
								on:click={() => onThumbnailClick(6)}
							>
								<Avatar src="https://source.unsplash.com/2BOFizfc438/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
							<button
								type="button"
								class="btn p-0 snap-center rounded-none"
								aria-label="scroll to image8"
								on:click={() => onThumbnailClick(7)}
							>
								<Avatar src="https://source.unsplash.com/q5EGoKHQEe8/720x405" width="w-16" rounded="rounded-lg" loading="lazy" />
							</button>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let container: HTMLDivElement;

function onThumbnailClick(index: number) {
	container.scroll(container.clientWidth * index, 0);
}
function onNextPrevImage(nextImage: boolean) {
	let scrollX = 0;
	if(nextImage) {
		// scroll to start
		if(container.scrollLeft === container.scrollWidth - container.clientWidth) 
			scrollX = 0;
		// scroll to next
		else scrollX = container.scrollLeft + container.clientWidth;
	} else {
		// scroll to end
		if(container.scrollLeft === 0)
			scrollX = container.clientWidth * container.childElementCount;
		// scroll to previous
		else scrollX = container.scrollLeft - container.clientWidth;
	}
	container.scroll(scrollX, 0);
}
					`}
					/>
					<CodeBlock
						language="html"
						code={`
<div class="card p-6 space-y-6 relative w-96 md:w-full">
	<div class="flex gap-6 pb-2 snap-x snap-mandatory overflow-x-auto scroll-smooth"
		bind:this={container}>
		<!-- Images -->
		<div class="snap-center shrink-0 w-full">
			<img class="shrink-0 rounded-lg w-full shadow-xl" src="" alt="" />
		</div>
		<!-- ... -->

		<!-- Next, Prev buttons -->
		<button
			type="button"
			class="btn-icon btn-icon-lg variant-filled absolute left-0 bottom-1/2"
			on:click={() => onNextPrevImage(false)}
		>
			(icon)
		</button>
		<button
			type="button"
			class="btn-icon btn-icon-lg variant-filled absolute right-0 bottom-1/2"
			on:click={() => onNextPrevImage(true)}
		>
			(icon)
		</button>
	</div>
	
	<!-- Thumbnails -->
	<div class="flex md:justify-center pb-2 gap-2 snap-x snap-mandatory overflow-x-auto scroll-smooth">
		<button type="button" class="btn p-0 snap-center" on:click={() => onThumbnailClick(0)}>
			<img class="w-16 rounded-lg" src="" alt="" />
		</button>
		<button type="button" class="btn p-0 snap-center rounded-none" 
			on:click={() => onThumbnailClick(1)}>
			<img class="w-16 rounded-lg" src="" alt="" />
		</button>
		<!-- ... -->
	</div>
</div>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<!-- Multi Column Carousel -->
		<section class="space-y-4">
			<h2 class="h2">Multi column carousels</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="grid grid-cols-[auto,1fr,auto] gap-1 xl:w-[715px] lg:w-[490px] w-72">
						<!-- Prev Button -->
						<button type="button" class="btn-icon xl:btn-icon-lg variant-filled self-center" on:click={() => onNextPrevMovie(false)}>
							<i class="fa-solid fa-arrow-left" />
						</button>
						<!-- Movies -->
						<div class="flex p-2 px-1 gap-3 snap-x snap-mandatory overflow-x-auto scroll-smooth" bind:this={moviesScrollContainer}>
							{#each moviesData.movies as movie}
								<a
									class="card shadow-lg variant-filled p-2 gap-3 snap-start lg:snap-start lg:scroll-ml-1 shrink-0 flex flex-col w-[188px]
									items-center cursor-pointer hover:variant-filled-secondary"
									href={movie.url}
									target="_blank"
								>
									<img class="w-44 h-60 rounded" src={movie.imageUrl} alt="" loading="lazy" />
									<p class="text-center">{movie.name}</p>
								</a>
							{/each}
						</div>
						<!-- Next Button -->
						<button type="button" class="btn-icon xl:btn-icon-lg variant-filled self-center" on:click={() => onNextPrevMovie(true)}>
							<i class="fa-solid fa-arrow-right" />
						</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let container: HTMLDivElement;

function onNextPrevMovie(nextMovie: boolean) {
	let scrollX = 0;
	if (nextMovie) {
		// scroll to start
		if (container.scrollLeft === container.scrollWidth - container.clientWidth) scrollX = 0;
		// scroll to next
		else scrollX = container.scrollLeft + container.clientWidth;
	} else {
		// scroll to end
		if (container.scrollLeft === 0) scrollX = container.clientWidth * container.childElementCount;
		// scroll to previous
		else scrollX = container.scrollLeft - container.clientWidth;
	}
	container.scroll(scrollX, 0);
}
					`}
					/>
					<CodeBlock
						language="html"
						code={`
<div class="grid grid-cols-[auto,1fr,auto] gap-1 xl:w-[715px] lg:w-[490px] w-72">
	<!-- Prev Button -->
	<button type="button" class="btn-icon xl:btn-icon-lg variant-filled self-center" 
		on:click={() => onNextPrevMovie(false)}>
		(icon)
	</button>
	<!-- Movies -->
	<div class="flex p-2 px-1 gap-3 snap-x snap-mandatory overflow-x-auto scroll-smooth" 
		bind:this={container}>
		{#each movies as movie}
			<a class="card shadow-lg variant-filled p-2 gap-3 snap-start lg:snap-start lg:scroll-ml-1 
				shrink-0 flex flex-col w-[188px] items-center 
				cursor-pointer hover:variant-filled-secondary" href={movie.url}	target="_blank">
				<img class="w-44 h-60 rounded" src={movie.imageUrl} alt="" />
				<p class="text-center">{movie.name}</p>
			</a>
		{/each}
	</div>
	<!-- Next Button -->
	<button type="button" class="btn-icon xl:btn-icon-lg variant-filled self-center" 
		on:click={() => onNextPrevMovie(true)}>
		(icon)
	</button>
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
