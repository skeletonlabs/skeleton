<script lang="ts">
	// DocShell
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';

	// Data
	import { movies } from './movies';

	// Components
	import { CodeBlock } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Scroll Containers',
		description: 'Create scrolling containers using the scroll snap features from Tailwind.'
	};

	// Options
	const snapOptions = ['snap-start', 'snap-end', 'snap-center', 'snap-align-none'];
	let currentSnap = snapOptions[0];

	// Carousel ---

	let elemCarousel: HTMLDivElement;
	const unsplashIds = ['vjUokUWbFOs', '1aJuPtQJX_I', 'Jp6O3FFRdEI', 'I3C_eojFVQY', 's0fXOuyTH1M', 'z_X0PxmBuIQ'];

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}

	// Multi-Column ---

	let elemMovies: HTMLDivElement;

	function multiColumnLeft(): void {
		let x = elemMovies.scrollWidth;
		if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
		elemMovies.scroll(x, 0);
	}

	function multiColumnRight(): void {
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) x = elemMovies.scrollLeft + elemMovies.clientWidth;
		elemMovies.scroll(x, 0);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionPreview="text-token" regionViewport="!p-0" regionFooter="text-center">
			<svelte:fragment slot="preview">
				<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
					{#each { length: 8 } as _, i}
						<div class="{currentSnap} shrink-0 card py-20 w-40 md:w-80 text-center">{i + 1}</div>
					{/each}
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
	{#each Array.from({ length: 8 }) as _, i}
		<div class="${currentSnap} shrink-0 card py-20 w-40 md:w-80 text-center">{i + 1}</div>
	{/each}
</div>
`}
				/>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="flex justify-between items-center gap-4">
					<select bind:value={currentSnap} class="select w-auto">
						{#each snapOptions as o}
							<option value={o}>{o}</option>
						{/each}
					</select>
					<p>Scroll left or right to demo snapping.</p>
				</div>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Tailwind References -->
		<section class="space-y-4">
			<h2 class="h2">Tailwind References</h2>
			<p>Use the following links to learn more about Tailwind's scroll behavior and snap features.</p>
			<div class="table-container">
				<table class="table">
					<thead>
						<tr>
							<th>Feature</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><a class="anchor" href="https://tailwindcss.com/docs/scroll-behavior" target="_blank">scroll-behavior</a></td>
							<td>Controls the scroll behavior of an element.</td>
						</tr>
						<tr>
							<td><a class="anchor" href="https://tailwindcss.com/docs/scroll-margin" target="_blank">scroll-margin</a></td>
							<td>Controls the scroll offset around items in a snap container.</td>
						</tr>
						<tr>
							<td><a class="anchor" href="https://tailwindcss.com/docs/scroll-padding" target="_blank">scroll-padding</a></td>
							<td>Controls an element's scroll offset within a snap container.</td>
						</tr>
						<tr>
							<td><a class="anchor" href="https://tailwindcss.com/docs/scroll-snap-align" target="_blank">scroll-snap-align</a></td>
							<td>Controls the scroll snap alignment of an element.</td>
						</tr>
						<tr>
							<td><a class="anchor" href="https://tailwindcss.com/docs/scroll-snap-stop" target="_blank">scroll-snap-stop</a></td>
							<td>Controls whether you can skip past possible snap positions.</td>
						</tr>
						<tr>
							<td><a class="anchor" href="https://tailwindcss.com/docs/scroll-snap-type" target="_blank">scroll-snap-type</a></td>
							<td>Controls how strictly snap points are enforced in a snap container.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Carousel -->
		<section class="space-y-4">
			<h2 class="h2">Carousels</h2>
			<p>
				Using Scroll Containers, we can create a fully functional carousel, complete with thumbnail selection. This introduces javascript
				logic to control the carousel navigation on demand.
			</p>
			<DocsPreview regionPreview="grid grid-cols-1 gap-4" background="neutral">
				<svelte:fragment slot="preview">
					<!-- Carousel -->
					<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
						<!-- Button: Left -->
						<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
							<i class="fa-solid fa-arrow-left" />
						</button>
						<!-- Full Images -->
						<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
							{#each unsplashIds as unsplashId}
								<img
									class="snap-center w-[1024px] rounded-container-token"
									src="https://source.unsplash.com/{unsplashId}/1024x768"
									alt={unsplashId}
									loading="lazy"
								/>
							{/each}
						</div>
						<!-- Button: Right -->
						<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
							<i class="fa-solid fa-arrow-right" />
						</button>
					</div>
					<!-- Thumbnails -->
					<div class="card p-4 grid grid-cols-6 gap-4">
						{#each unsplashIds as unsplashId, i}
							<button type="button" on:click={() => carouselThumbnail(i)}>
								<img
									class="rounded-container-token"
									src="https://source.unsplash.com/{unsplashId}/256x256"
									alt={unsplashId}
									loading="lazy"
								/>
							</button>
						{/each}
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<h2 class="h2">Carousel</h2>
					<CodeBlock
						language="ts"
						code={`
let elemCarousel: HTMLDivElement;
const unsplashIds = ['vjUokUWbFOs', '1aJuPtQJX_I', 'Jp6O3FFRdEI', 'I3C_eojFVQY', 's0fXOuyTH1M', 'z_X0PxmBuIQ'];
					`}
					/>
					<CodeBlock
						language="ts"
						code={`
function carouselLeft(): void {
	const x =
		elemCarousel.scrollLeft === 0
			? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
			: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
	elemCarousel.scroll(x, 0);
}
					`}
					/>
					<CodeBlock
						language="ts"
						code={`

function carouselRight(): void {
	const x =
		elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0 // loop
			: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
	elemCarousel.scroll(x, 0);
}
					`}
					/>
					<CodeBlock
						language="html"
						code={`
<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each unsplashIds as unsplashId}
			<img
				class="snap-center w-[1024px] rounded-container-token"
				src="https://source.unsplash.com/{unsplashId}/1024x768"
				alt={unsplashId}
				loading="lazy"
			/>
		{/each}
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>
`}
					/>
					<h2 class="h2">Carousel Thumbnails</h2>
					<CodeBlock
						language="ts"
						code={`
function carouselThumbnail(index: number) {
	elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
}
				`}
					/>
					<CodeBlock
						language="html"
						code={`
<div class="card p-4 grid grid-cols-6 gap-4">
	{#each unsplashIds as unsplashId, i}
		<button type="button" on:click={() => carouselThumbnail(i)}>
			<img
				class="rounded-container-token"
				src="https://source.unsplash.com/{unsplashId}/256x256"
				alt={unsplashId}
				loading="lazy"
			/>
		</button>
	{/each}
</div>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<!-- Multi-Column -->
		<section class="space-y-4">
			<h2 class="h2">Multi-Column</h2>
			<DocsPreview background="neutral" regionFooter="text-center">
				<svelte:fragment slot="preview">
					<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
						<!-- Button: Left -->
						<button type="button" class="btn-icon variant-filled" on:click={multiColumnLeft}>
							<i class="fa-solid fa-arrow-left" />
						</button>
						<!-- Carousel -->
						<div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
							{#each movies as movie}
								<a href={movie.url} target="_blank" class="shrink-0 w-[28%] snap-start">
									<img
										class="rounded-container-token hover:brightness-125"
										src={movie.imageUrl}
										alt={movie.name}
										title={movie.name}
										loading="lazy"
									/>
								</a>
							{/each}
						</div>
						<!-- Button-Right -->
						<button type="button" class="btn-icon variant-filled" on:click={multiColumnRight}>
							<i class="fa-solid fa-arrow-right" />
						</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let elemMovies: HTMLDivElement;

function multiColumnLeft(): void {
	let x = elemMovies.scrollWidth;
	if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
	elemMovies.scroll(x, 0);
}

function multiColumnRight(): void {
	let x = 0;
	// -1 is used because different browsers use different methods to round scrollWidth pixels.
	if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) x = elemMovies.scrollLeft + elemMovies.clientWidth;
	elemMovies.scroll(x, 0);
}
					`}
					/>
					<CodeBlock
						language="html"
						code={`
<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	<!-- Carousel -->
	<div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
		{#each moviesData.movies as movie}
			<a href={movie.url} target="_blank" class="shrink-0 w-[28%] snap-start">
				<img
					class="rounded-container-token hover:brightness-125"
					src={movie.imageUrl}
					alt={movie.name}
					title={movie.name}
					loading="lazy"
				/>
			</a>
		{/each}
	</div>
	<!-- Button-Right -->
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnRight}>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>
					`}
					/>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<a class="btn btn-sm variant-soft" href="https://www.themoviedb.org/" target="_blank">Attribution: TMDB</a>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
