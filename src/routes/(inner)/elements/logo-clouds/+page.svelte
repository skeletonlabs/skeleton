<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Logo Clouds',
		description: 'Provides a grid for presenting a set of logos, brands, or sponsors.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/logo-clouds'],
		source: 'styles/elements/logo-clouds.css',
		classes: [
			['<code>.logo-cloud</code>', '-', 'Apply to a wrapping block element around a set of logos.'],
			['<code>.logo-item</code>', '-', 'Apply to each logo child element.']
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 gap-4">
			<!-- Links -->
			<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
				<a class="logo-item" href="https://svelte.dev/" target="_blank" rel="noreferrer">
					<span><SvgIcon name="svelte" width="w-8" height="h-8" /></span>
					<span>Svelte</span>
				</a>
				<a class="logo-item" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
					<span><SvgIcon name="tailwind" width="w-6" height="h-6" /></span>
					<span>Tailwind</span>
				</a>
				<a class="logo-item" href="https://github.com/" target="_blank" rel="noreferrer">
					<span><SvgIcon name="github" width="w-6" height="h-6" /></span>
					<span>Github</span>
				</a>
			</div>
			<!-- Multi-Row -->
			<div class="logo-cloud grid-cols-1 lg:grid-cols-4 gap-1">
				<div class="logo-item">HR Solutions</div>
				<div class="logo-item">Acme Theaters</div>
				<div class="logo-item">Cruisin' Cuisine</div>
				<div class="logo-item">Arcane Security</div>
				<div class="logo-item">Stark Industries</div>
				<div class="logo-item">Gekko & Co.</div>
				<div class="logo-item">Acme Corp.</div>
				<div class="logo-item">Wonka Inc.</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<p>Logo clouds provide a styled grid wrapper element. Ensure you provided the desired column and gap classes.</p>
			<CodeBlock
				language="html"
				code={`
<div class="logo-cloud grid-cols-1 lg:grid-cols-4 gap-1">
	<div class="logo-item">
		<span>&hearts;</span>
		<span>HR Solutions</span>
	</div>
	<div class="logo-item">Acme Theaters</div>
	<div class="logo-item">Cruisin' Cuisine</div>
	<div class="logo-item">Arcane Security</div>
	<div class="logo-item">Stark Industries</div>
	<div class="logo-item">Gekko & Co.</div>
	<div class="logo-item">Acme Corp.</div>
	<div class="logo-item">Wonka Inc.</div>
</div>
`}
			/>
		</div>
		<!-- Links -->
		<div class="space-y-4">
			<h2>Logo Item Links</h2>
			<p>Logo Items support anchor tags for links.</p>
			<CodeBlock
				language="html"
				code={`
<a class="logo-item" href="/">Skeleton</a>
`}
			/>
		</div>
		<!-- Icons -->
		<div class="space-y-4">
			<h2>Logo Item Icons</h2>
			<p>Wrap child elements in span tags and they will space as expected.</p>
			<CodeBlock
				language="html"
				code={`
<div class="logo-item">
	<span>💀</span>
	<span>Skeleton</span>
</div>
`}
			/>
		</div>
	</svelte:fragment>
</DocsShell>
