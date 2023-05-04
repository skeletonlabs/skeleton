<script lang="ts">
	// Docs
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldAppBar from '$lib/components/AppBar/AppBar.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Bar',
		description:
			'A header element for the top of your page layout. Pairs well with the <a class="anchor" href="/components/app-shell">App Shell</a>.',
		imports: ['AppBar'],
		source: 'components/AppBar',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
		components: [{ sveld: sveldAppBar }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionViewport="!text-current">
			<svelte:fragment slot="preview">
				<AppBar class="w-full">
					<svelte:fragment slot="lead">
						<i class="fa-solid fa-arrow-left text-2xl" />
					</svelte:fragment>
					<svelte:fragment slot="trail">
						<i class="fa-solid fa-paperclip text-xl" />
						<i class="fa-regular fa-calendar text-xl" />
						<i class="fa-solid fa-circle-user text-xl" />
					</svelte:fragment>
					<svelte:fragment slot="headline">
						<h1 class="h1">Headline</h1>
					</svelte:fragment>
				</AppBar>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<AppBar>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
	<svelte:fragment slot="headline">(headline)</svelte:fragment>
</AppBar>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>App Bars can be generated with a number of different configurations by mixing and matching available slots and props.</p>
		<!-- Single Row and Title -->
		<section class="space-y-4">
			<h2 class="h2">Single Row and Title</h2>
			<DocsPreview background="neutral" regionViewport="!text-current">
				<svelte:fragment slot="preview">
					<AppBar class="w-full">
						<svelte:fragment slot="lead">
							<i class="fa-solid fa-arrow-left text-2xl" />
						</svelte:fragment>
						<h2 class="h2" data-toc-ignore>Title</h2>
						<svelte:fragment slot="trail">
							<i class="fa-solid fa-paperclip text-xl" />
							<i class="fa-regular fa-calendar text-xl" />
							<i class="fa-solid fa-circle-user text-xl" />
						</svelte:fragment>
					</AppBar>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<AppBar>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Barebones -->
		<section class="space-y-4">
			<h2 class="h2">Barebones</h2>
			<DocsPreview background="neutral" regionViewport="!text-current">
				<svelte:fragment slot="preview">
					<AppBar class="w-full"><h2 class="h2" data-toc-ignore>Title</h2></AppBar>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<AppBar>(title)</AppBar>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Using Grid Layout</h2>
			<!-- prettier-ignore -->
			<p>
				The main row utilizes a grid-based layout. Utilize Tailwind's <a class="anchor" href="https://tailwindcss.com/docs/grid-column" target="_blank" rel="noreferrer">grid column</a> utility classes to control column width. Then use
				<a class="anchor" href="https://tailwindcss.com/docs/place-content" target="_blank" rel="noreferrer">place settings</a> to adjust the placement of the slot contents.
			</p>
			<DocsPreview background="neutral" regionViewport="!text-current">
				<svelte:fragment slot="preview">
					<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" class="w-full">
						<svelte:fragment slot="lead">
							<i class="fa-solid fa-bars text-2xl" />
						</svelte:fragment>
						<h2 class="h2" data-toc-ignore>Title</h2>
						<svelte:fragment slot="trail">
							<i class="fa-solid fa-circle-user text-3xl" />
						</svelte:fragment>
					</AppBar>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<p>The example above provides an even three column layout with the title centered and actions right-aligned.</p>
		</section>
	</svelte:fragment>
</DocsShell>
