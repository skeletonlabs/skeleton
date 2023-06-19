<script lang="ts">
	// DocShell
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock, Ratings, Avatar } from '@skeletonlabs/skeleton';
	import { icons } from './icons';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Scroll Containers',
		description: 'Create a scroll container using Tailwind.'
	};

	// Local
	const products = [
		{
			name: 'Decoration Skulls',
			liked: false,
			imageUrl: 'https://source.unsplash.com/UhE2lwGn-DQ/176x176',
			price: '10$',
			ratingValue: 2.5
		},
		{
			name: 'Dead Mannequin',
			liked: true,
			imageUrl: 'https://source.unsplash.com/qTWbIahyFL0/176x176',
			price: '150$',
			ratingValue: 4
		},
		{
			name: 'Pumpkin',
			liked: false,
			imageUrl: 'https://source.unsplash.com/q5EGoKHQEe8/176x176',
			price: '5$',
			ratingValue: 5
		},
		{
			name: 'Mini Skeletons',
			liked: true,
			imageUrl: 'https://source.unsplash.com/TjREnoQyMQQ/176x176',
			price: '2$',
			ratingValue: 4.5
		},
		{
			name: 'Skeleton Cake',
			liked: false,
			imageUrl: 'https://source.unsplash.com/CBtDiI74mSg/176x176',
			price: '20$',
			ratingValue: 1.5
		},
		{
			name: 'Mermaid',
			liked: false,
			imageUrl: 'https://source.unsplash.com/eQqcz7NWyH4/176x176',
			price: '500$',
			ratingValue: 3
		},
		{
			name: 'Crown',
			liked: false,
			imageUrl: 'https://source.unsplash.com/hVpFBq-PSgQ/176x176',
			price: '99$',
			ratingValue: 1
		},
		{
			name: 'Cool Skeleton',
			liked: false,
			imageUrl: 'https://source.unsplash.com/5ZiGQ-8s_k8/176x176',
			price: '20$',
			ratingValue: 5
		},
		{
			name: 'Skull Wall Decorator',
			liked: true,
			imageUrl: 'https://source.unsplash.com/kIww5ykb898/176x176',
			price: '75$',
			ratingValue: 1.5
		}
	];
	let imageScrollContainer: HTMLDivElement;
	let productsScrollContainer: HTMLDivElement;

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

	function onNextPrevProduct(nextProduct: boolean) {
		let scrollX = 0;
		if (nextProduct) {
			// scroll to start
			if (productsScrollContainer.scrollLeft === productsScrollContainer.scrollWidth - productsScrollContainer.clientWidth) scrollX = 0;
			// scroll to next
			else scrollX = productsScrollContainer.scrollLeft + productsScrollContainer.clientWidth;
		} else {
			// scroll to end
			if (productsScrollContainer.scrollLeft === 0)
				scrollX = productsScrollContainer.clientWidth * productsScrollContainer.childElementCount;
			// scroll to previous
			else scrollX = productsScrollContainer.scrollLeft - productsScrollContainer.clientWidth;
		}
		productsScrollContainer.scroll(scrollX, 0);
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

		<!-- Carousel -->
		<section class="space-y-4">
			<h2 class="h2">Products Carousels</h2>
			<DocsPreview>
				<svelte:fragment slot="preview">
					<div class="grid grid-cols-[auto,1fr,auto] gap-2">
						<button type="button" class="btn-icon btn-icon-lg variant-filled h-14 self-center" on:click={() => onNextPrevProduct(false)}>
							<i class="fa-solid fa-arrow-left" />
						</button>
						<div
							class="flex gap-3 pb-3 snap-x snap-mandatory overflow-x-auto scroll-smooth xl:w-[700px] w-56"
							bind:this={productsScrollContainer}
						>
							<!-- Products -->
							{#each products as product}
								<div class="card shadow-lg p-6 gap-3 variant-filled snap-center shrink-0 flex flex-col items-center relative">
									<button
										type="button"
										class="btn-icon btn-icon-sm variant-filled absolute top-2 right-2 fill-red-600"
										on:click={() => (product.liked = !product.liked)}
									>
										{@html product.liked ? icons.heartFull : icons.heartEmpty}
									</button>
									<img class="w-44 h-44 rounded" src={product.imageUrl} alt="" loading="lazy" />
									<p>{product.name}</p>
									<p>{product.price}</p>
									<Ratings fill="fill-yellow-500" value={product.ratingValue}>
										<svelte:fragment slot="empty">
											{@html icons.starEmpty}
										</svelte:fragment>
										<svelte:fragment slot="half">
											{@html icons.starHalf}
										</svelte:fragment>
										<svelte:fragment slot="full">
											{@html icons.starFull}
										</svelte:fragment>
									</Ratings>
									<button type="button" class="btn variant-ghost-primary"> Add To Cart </button>
								</div>
							{/each}
						</div>
						<button type="button" class="btn-icon btn-icon-lg variant-filled h-14 self-center" on:click={() => onNextPrevProduct(true)}>
							<i class="fa-solid fa-arrow-right" />
						</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let container: HTMLDivElement;

function onNextPrevProduct(nextProduct: boolean) {
	let scrollX = 0;
	if(nextProduct) {
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
<div class="grid grid-cols-[auto,1fr,auto] gap-2">
	<!-- Prev button -->
	<button
		type="button"
		class="btn-icon btn-icon-lg variant-filled h-14 self-center"
		on:click={() => onNextPrevProduct(false)}
	>
		<i class="fa-solid fa-arrow-left" />
	</button>
	<div class="flex gap-3 pb-3 snap-x snap-mandatory overflow-x-auto scroll-smooth xl:w-[700px] w-56"
		bind:this={container}>
		<!-- Products -->
		<div class="card variant-filled shadow-lg p-6 gap-3 snap-center shrink-0 flex flex-col items-center">
			<!-- Product content -->
		</div>
		<!-- ... -->
	</div>
	<!-- Next button -->
	<button
		type="button"
		class="btn-icon btn-icon-lg variant-filled h-14 self-center"
		on:click={() => onNextPrevProduct(true)}
	>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
