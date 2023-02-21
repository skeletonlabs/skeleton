<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import sveldAppBar from '$lib/components/AppBar/AppBar.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Bar',
		description: 'A header element for the top of your page layout. Pairs well with the <a href="/components/app-shell">App Shell</a>.',
		imports: ['AppBar'],
		source: 'components/AppBar',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
		components: [{ sveld: sveldAppBar }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="space-y-4">
			<AppBar>
				<svelte:fragment slot="lead">
					<i class="fa-solid fa-arrow-left text-2xl" />
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<i class="fa-solid fa-paperclip text-xl" />
					<i class="fa-regular fa-calendar text-xl" />
					<i class="fa-solid fa-circle-user text-xl" />
				</svelte:fragment>
				<svelte:fragment slot="headline">
					<h1>Headline</h1>
				</svelte:fragment>
			</AppBar>
			<!-- --- -->
			<AppBar>
				<svelte:fragment slot="lead">
					<i class="fa-solid fa-arrow-left text-2xl" />
				</svelte:fragment>
				<h2>Title</h2>
				<svelte:fragment slot="trail">
					<i class="fa-solid fa-paperclip text-xl" />
					<i class="fa-regular fa-calendar text-xl" />
					<i class="fa-solid fa-circle-user text-xl" />
				</svelte:fragment>
			</AppBar>
			<!-- --- -->
			<AppBar>
				<h2>Title</h2>
			</AppBar>
			<!-- --- -->
			<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
				<svelte:fragment slot="lead">
					<i class="fa-solid fa-bars text-2xl" />
				</svelte:fragment>
				<h2>Title</h2>
				<svelte:fragment slot="trail">
					<i class="fa-solid fa-circle-user text-3xl" />
				</svelte:fragment>
			</AppBar>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Configurations</h2>
			<p>App Bars can be generated with a number of different configurations by mixing and matching available slots and props.</p>
			<h3>Two Rows and Headline</h3>
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
			<h3>Single Row and Title</h3>
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
			<h3>Barebones</h3>
			<CodeBlock language="html" code={`<AppBar>(title)</AppBar>`} />
		</section>
		<section class="space-y-4">
			<h2>Using Grid Layout</h2>
			<!-- prettier-ignore -->
			<p>
				The main row utilizes a grid-base layout. Utilize Tailwind's <a href="https://tailwindcss.com/docs/grid-column" target="_blank" rel="noreferrer">grid column</a> utility classes to control column width. Then use
				<a href="https://tailwindcss.com/docs/place-content" target="_blank" rel="noreferrer">place settings</a> to adjust the placement of the slot contents.
			</p>
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
			<p>The example above provides an even three columns layout with the title centered and actions right-aligned.</p>
		</section>
	</svelte:fragment>
</DocsShell>
