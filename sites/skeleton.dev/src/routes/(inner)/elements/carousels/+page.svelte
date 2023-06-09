<script lang="ts">
	// DocShell
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Carousel',
		description: 'Create a Carousel using the scroll snap feature from Tailwind.',
		dependencies: [{ label: 'Tailwind Scroll-Snap', url: 'https://tailwindcss.com/docs/scroll-snap-align' }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview background="bg-surface-900">
			<svelte:fragment slot="preview">
				<div class="card p-6 space-y-6">
					<!-- Carousel -->
					<div class="flex gap-6 snap-x snap-mandatory overflow-x-auto scroll-smooth">
						<div class="snap-center shrink-0 w-full" id="image1">
							<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/vjUokUWbFOs/720x405" alt="" />
						</div>
						<div class="snap-center shrink-0 w-full" id="image2">
							<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/1aJuPtQJX_I/720x405" alt="" />
						</div>
						<div class="snap-center shrink-0 w-full" id="image3">
							<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/Jp6O3FFRdEI/720x405" alt="" />
						</div>
						<div class="snap-center shrink-0 w-full" id="image4">
							<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/I3C_eojFVQY/720x405" alt="" />
						</div>
						<div class="snap-center shrink-0 w-full" id="image5">
							<img class="shrink-0 rounded-lg w-full shadow-xl" src="https://source.unsplash.com/s0fXOuyTH1M/720x405" alt="" />
						</div>
					</div>

					<!-- Thumbnails -->
					<div class="flex gap-2 justify-center">
						<a href="#image1" class="w-20 h-16" aria-label="scroll to image1">
							<img class="rounded-lg w-20 h-16 shadow-xl" src="https://source.unsplash.com/vjUokUWbFOs/80x64" alt="" />
						</a>
						<a href="#image2" class="w-20 h-16" aria-label="scroll to image2">
							<img class="rounded-lg w-20 h-16 shadow-xl" src="https://source.unsplash.com/1aJuPtQJX_I/80x64" alt="" />
						</a>
						<a href="#image3" class="w-20 h-16" aria-label="scroll to image3">
							<img class="rounded-lg w-20 h-16 shadow-xl" src="https://source.unsplash.com/Jp6O3FFRdEI/80x64" alt="" />
						</a>
						<a href="#image4" class="w-20 h-16" aria-label="scroll to image4">
							<img class="rounded-lg w-20 h-16 shadow-xl" src="https://source.unsplash.com/I3C_eojFVQY/80x64" alt="" />
						</a>
						<a href="#image5" class="w-20 h-16" aria-label="scroll to image5">
							<img class="rounded-lg w-20 h-16 shadow-xl" src="https://source.unsplash.com/s0fXOuyTH1M/80x64" alt="" />
						</a>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<div class="card p-6 space-y-6">
	<!-- Carousel -->
	<div class="flex gap-6 snap-x snap-mandatory scroll-smooth">
		<div class="snap-center shrink-0 w-full" id="image1">
			<img class="shrink-0 rounded-lg w-full" src="" alt="" />
		</div>
		<div class="snap-center shrink-0 w-full" id="image2">
			<img class="shrink-0 rounded-lg w-full" src="" alt="" />
		</div>
		<div class="snap-center shrink-0 w-full" id="image3">
			<img class="shrink-0 rounded-lg w-full" src="" alt="" />
		</div>
		<div class="snap-center shrink-0 w-full" id="image4">
			<img class="shrink-0 rounded-lg w-full" src="" alt="" />
		</div>
		<div class="snap-center shrink-0 w-full" id="image5">
			<img class="shrink-0 rounded-lg w-full" src="" alt="" />
		</div>
	</div>

	<!-- Thumbnails -->
	<div class="flex gap-2 justify-center">
		<a href="#image1" class="w-20 h-16" aria-label="">
			<img class="rounded-lg w-20 h-16" src="" alt="" />
		</a>
		<a href="#image2" class="w-20 h-16" aria-label="">
			<img class="rounded-lg w-20 h-16" src="" alt="" />
		</a>
		<a href="#image3" class="w-20 h-16" aria-label="">
			<img class="rounded-lg w-20 h-16" src="" alt="" />
		</a>
		<a href="#image4" class="w-20 h-16" aria-label="">
			<img class="rounded-lg w-20 h-16" src="" alt="" />
		</a>
		<a href="#image5" class="w-20 h-16" aria-label="">
			<img class="rounded-lg w-20 h-16" src="" alt="" />
		</a>
	</div>
</div>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>
			Using the TailwindCss classes: <code class="code">snap-x</code>, <code class="code">snap-mandatory</code> and
			<code class="code">snap-center</code> we can create a fully functional Carousel using only HTML and CSS
		</p>
	</svelte:fragment>
</DocsShell>
