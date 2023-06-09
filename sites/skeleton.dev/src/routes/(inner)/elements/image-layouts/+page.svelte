<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Utilities
	import { CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	// import sveldComp from '@skeletonlabs/skeleton/.../Component.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Image Layouts',
		description: 'Various layouts for displaying images.'
		// imports: ['Template'],
		// types: ['Template'],
		// stylesheetIncludes: ['all', 'elements'],
		// stylesheets: ['elements/template'],
		// source: 'components/Template',
		// aria: 'https://www.w3.org/WAI/ARIA/apg/'
		// dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }],
		// components: [{sveld: sveldComp}],
		// classes: [
		// 	['<code class="code">.foo</code>', '-', '...'],
		// 	['<code class="code">.bar</code>', '-', '...']
		// ],
		// keyboard: [
		// 	['<code class="code">foo</code>', '-', '-', '-', '...'],
		// 	['<code class="code">bar</code>', '-', '-', '-', '...']
		// ]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<section class="grid grid-cols-2 md:grid-cols-3 gap-4">
					<div>
						<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/YOErFW8AfkI/300x300" alt="" />
					</div>
					<div>
						<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/s0fXOuyTH1M/300x300" alt="" />
					</div>
					<div>
						<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/CKZQ6g_FB2Q/300x300" alt="" />
					</div>
					<div>
						<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/VYuJLsF4XQQ/300x300" alt="" />
					</div>
					<div>
						<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/01D-_OtB8wQ/300x300" alt="" />
					</div>
					<div>
						<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/eP2zYflRoNY/300x300" alt="" />
					</div>
					<div>
						<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/z_X0PxmBuIQ/300x300" alt="" />
					</div>
					<div>
						<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/1SEH8qv-Obo/300x300" alt="" />
					</div>
					<div>
						<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/c64AB11j-po/300x300" alt="" />
					</div>
				</section>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<section class="grid grid-cols-2 md:grid-cols-3 gap-4">
	<div>
		<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/YOErFW8AfkI/128x128" alt="">
	</div>
	<div>
		<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/CKZQ6g_FB2Q/128x128" alt="">
	</div>
	<div>
		<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/YOErFW8AfkI/128x128" alt="">
	</div>
<section>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2 class="h2">Masonry Gallery</h2>
			<p>Show the images inside a masonry grid layouts with multiple columns.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<section class="grid grid-cols-2 md:grid-cols-4 gap-2">
						<div class="grid gap-4">
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/YOErFW8AfkI" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/s0fXOuyTH1M" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/tQ4fEcKfB1g" alt="" />
							</div>
						</div>
						<div class="grid gap-4">
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/SMvOSlgThHA" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/azE50UpJDP0" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/CKZQ6g_FB2Q" alt="" />
							</div>
						</div>
						<div class="grid gap-4">
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/UhE2lwGn-DQ" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/VYuJLsF4XQQ" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/twVS-YjQn9Y" alt="" />
							</div>
						</div>
						<div class="grid gap-4">
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/EkW1r_eDjRs" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/QDc-OQU9hFk" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/QK_VtGYQV_U" alt="" />
							</div>
						</div>
					</section>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<section class="grid grid-cols-2 md:grid-cols-4 gap-2">
	<div class="grid gap-4">
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/YOErFW8AfkI" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/s0fXOuyTH1M" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/tQ4fEcKfB1g" alt="" />
		</div>
	</div>
	<div class="grid gap-4">
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/SMvOSlgThHA" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/azE50UpJDP0" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/CKZQ6g_FB2Q" alt="" />
		</div>
	</div>
	<div class="grid gap-4">
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/UhE2lwGn-DQ" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/VYuJLsF4XQQ" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/twVS-YjQn9Y" alt="" />
		</div>
	</div>
	<div class="grid gap-4">
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/EkW1r_eDjRs" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/QDc-OQU9hFk" alt="" />
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/QK_VtGYQV_U" alt="" />
		</div>
	</div>

</section>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- <section class="space-y-4">
			<h2 class="h2">Featured image</h2>
			<p>Used to feature the most important image and show a row of pictures below.</p>
			<DocsPreview>
				<svelte:fragment slot="preview">
					<div class="grid gap-4">
						<div>
							<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/CKZQ6g_FB2Q/500x500" alt="" />
						</div>
						<div class="grid grid-cols-5 gap-4">
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/YOErFW8AfkI/128x128" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/s0fXOuyTH1M/128x128" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/ZalgcsKeUeA/128x128" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/VYuJLsF4XQQ/128x128" alt="" />
							</div>
							<div>
								<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/KNj1iaqGDus/128x128" alt="" />
							</div>
						</div>

						<div />
					</div></svelte:fragment
				>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`

<div class="grid grid-cols-2 md:grid-cols-2 gap-2">
	<div class="grid gap-4">
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/YOErFW8AfkI" alt="">
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/s0fXOuyTH1M" alt="">
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/ZalgcsKeUeA" alt="">
		</div>
	</div>
	<div class="grid gap-4">
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/z_X0PxmBuIQ" alt="">
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/VYuJLsF4XQQ" alt="">
		</div>
		<div>
			<img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/CKZQ6g_FB2Q" alt="">
		</div>
	</div>
<div>



	`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section> -->
		<section class="space-y-4">
			<h2 class="h2">Attribution</h2>
			<p>
				Image layout markup and styles provided courtesy
				<a class="anchor" href="https://flowbite.com/" target="_blank" rel="noreferrer">Flowbite</a>. Please
				<a class="anchor" href="https://www.skeleton.dev/blog/skeleton-plus-flowbite" target="_blank" rel="noreferrer">view our guide</a>
				to learn more about integrating Flowbite elements and blocks in your Skeleton projects.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
