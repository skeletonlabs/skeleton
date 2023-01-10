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
				<a class="logo-item" href="https://twitch.com/" target="_blank" rel="noreferrer">
					<i class="fa-brands fa-twitch text-2xl" />
					<span>Twitch</span>
				</a>
				<a class="logo-item" href="https://youtube.com/" target="_blank" rel="noreferrer">
					<i class="fa-brands fa-youtube text-2xl" />
					<span>YouTube</span>
				</a>
				<a class="logo-item" href="https://vimeo.com/" target="_blank" rel="noreferrer">
					<i class="fa-brands fa-vimeo text-2xl" />
					<span>Vimeo</span>
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
		<span>(icon)</span>
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
			<h2>Creating Links</h2>
			<p>Usings support anchor tags for links.</p>
			<CodeBlock
				language="html"
				code={`
<a class="logo-item" href="/">Skeleton</a>
`}
			/>
		</div>
		<!-- Icons -->
		<div class="space-y-4">
			<h2>Using Icons</h2>
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
