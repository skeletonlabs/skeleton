<script lang="ts">
	import { faker } from '@faker-js/faker';
	// Docshell
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	import { variants } from '$docs/components/DocsPreview/options';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Logo Clouds',
		description: 'Provides a grid for presenting a set of logos, brands, or sponsors.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/logo-clouds'],
		source: 'styles/elements/logo-clouds.css',
		classes: [
			['<code class="code">.logo-cloud</code>', '-', 'Apply to a wrapping block element around a set of logos.'],
			['<code class="code">.logo-item</code>', '-', 'Apply to each logo child element.']
		]
	};

	// Local
	let currentVariant = 'bg-initial';
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<section class="w-full">
					<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-0.5">
						<a class="logo-item {currentVariant}" href="https://twitch.com/" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-twitch text-2xl" />
							<span>Twitch</span>
						</a>
						<a class="logo-item {currentVariant}" href="https://youtube.com/" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-youtube text-2xl" />
							<span>YouTube</span>
						</a>
						<a class="logo-item {currentVariant}" href="https://vimeo.com/" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-vimeo text-2xl" />
							<span>Vimeo</span>
						</a>
					</div>
				</section>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="flex justify-center gap-4">
					<select bind:value={currentVariant} class="select w-auto">
						{#each variants as vSet}
							<optgroup label={vSet.label}>
								{#each vSet.list as v}
									<option value={v}>{v}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
	<a class="logo-item" href="/">
		<span>(icon)</span>
		<span>Skeleton</span>
	</a>
	<a class="logo-item" href="/">
		<span>(icon)</span>
		<span>Skeleton</span>
	</a>
	<!-- ... -->
</div>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Styling -->
		<section class="space-y-4">
			<h2 class="h2">Multiple Rows</h2>
			<!-- prettier-ignore -->
			<p>
				Use the <a class="anchor" href="https://tailwindcss.com/docs/grid-template-columns" target="_blank" rel="noreferrer">Tailwind column and gap classes</a> to adjust column amount and gap spacing.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<section class="w-full">
						<div class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-0.5">
							<a href="/elements/logo-clouds" class="logo-item capitalize">{faker.company.bsBuzz()}</a>
							<a href="/elements/logo-clouds" class="logo-item capitalize">{faker.company.bsBuzz()}</a>
							<a href="/elements/logo-clouds" class="logo-item capitalize">{faker.company.bsBuzz()}</a>
							<a href="/elements/logo-clouds" class="logo-item capitalize">{faker.company.bsBuzz()}</a>
							<a href="/elements/logo-clouds" class="logo-item capitalize">{faker.company.bsBuzz()}</a>
							<a href="/elements/logo-clouds" class="logo-item capitalize">{faker.company.bsBuzz()}</a>
							<a href="/elements/logo-clouds" class="logo-item capitalize">{faker.company.bsBuzz()}</a>
							<a href="/elements/logo-clouds" class="logo-item capitalize">{faker.company.bsBuzz()}</a>
						</div>
					</section>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<div class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-0.5">
	<a href="/elements/logo-clouds" class="logo-item">HR Solutions</a>
	<a href="/elements/logo-clouds" class="logo-item">Acme Theaters</a>
	<a href="/elements/logo-clouds" class="logo-item">Cruisin' Cuisine</a>
	<a href="/elements/logo-clouds" class="logo-item">Arcane Security</a>
	<a href="/elements/logo-clouds" class="logo-item">Stark Industries</a>
	<a href="/elements/logo-clouds" class="logo-item">Gekko & Co.</a>
	<a href="/elements/logo-clouds" class="logo-item">Acme Corp.</a>
	<a href="/elements/logo-clouds" class="logo-item">Wonka Inc.</a>
</div>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Styling -->
		<section class="space-y-4">
			<h2 class="h2">Styling Items</h2>
			<!-- prettier-ignore -->
			<p>Use <a class="anchor" href="https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants" target="_blank" rel="noreferrer">Tailwind's arbitrary variant syntax</a> to customize the <code class="code">.logo-item</code> styles. Tailwind classes and variants are supported.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<section class="w-full">
						<div class="logo-cloud [&>.logo-item]:variant-filled-secondary grid-cols-1 lg:!grid-cols-3 gap-0.5">
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
					</section>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="logo-cloud [&>.logo-item]:bg-red-500">...</div>`} />
					<CodeBlock language="html" code={`<div class="logo-cloud [&>.logo-item]:variant-filled-secondary">...</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
