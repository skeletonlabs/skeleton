<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	import { variants } from '$lib/components/DocsPreview/options';
	// Components
	import { Avatar, CodeBlock } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Cards',
		description: 'Provides container elements that wrap and separate content',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/cards'],
		source: 'styles/elements/cards.css',
		classes: [
			['<code class="code">.card</code>', '-', 'Adds basic card styling to any block element.'],
			['<code class="code">.card-header</code>', '-', 'The header region of the card.'],
			['<code class="code">.card-footer</code>', '-', 'The footer region of the card.'],
			['<code class="code">.card-hover</code>', '-', 'Provides an animated hover effect.'],
			[
				'<code class="code">.variant-glass-[color]</code>',
				'primary | secondary | tertiary | success | warning | error | surface',
				'A semi-transparent glass variation.'
			]
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
				<div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4">
					<!-- Minimal -->
					<div class="card {currentVariant} p-4 flex justify-center items-center"><span>Minimal</span></div>
					<!-- Detailed -->
					<a class="card {currentVariant} card-hover overflow-hidden" href="/elements/cards">
						<header>
							<img src="https://source.unsplash.com/vjUokUWbFOs/400x175" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
						</header>
						<div class="p-4 space-y-4">
							<h6 class="h6">Announcements</h6>
							<h3 class="h3" data-toc-ignore>Skeleton is Awesome!</h3>
							<article>
								<p>
									<!-- cspell:disable -->
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore
									sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
									<!-- cspell:enable -->
								</p>
							</article>
						</div>
						<hr class="opacity-50" />
						<footer class="p-4 flex justify-start items-center space-x-4">
							<Avatar src="https://source.unsplash.com/YOErFW8AfkI/32x32" width="w-8" />
							<div class="flex-auto flex justify-between items-center">
								<h6 class="font-bold">By Alex</h6>
								<small>On {new Date().toLocaleDateString()}</small>
							</div>
						</footer>
					</a>
				</div>
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
				<CodeBlock language="html" code={`<div class="card p-4">Basic</div>`} />
				<CodeBlock language="html" code={`<a href="/" class="card p-4">Link</a>`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2 class="h2">Headers and Footers</h2>
			<p>Segment your card using the included <code class="code">.card-header</code> and <code class="code">.card-footer</code> classes.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full text-token">
						<div class="card">
							<header class="card-header">
								<div class="card variant-soft p-4 text-center">Header</div>
							</header>
							<section class="p-4">
								<div class="card variant-soft p-4 text-center">Content</div>
							</section>
							<footer class="card-footer">
								<div class="card variant-soft p-4 text-center">Footer</div>
							</footer>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<div class="card">
	<header class="card-header">(header)</header>
	<section class="p-4">(content)</section>
	<footer class="card-footer">(footer)</footer>
</div>
				`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Interactive</h2>
			<p>Anchor cards have an inherent hover style. Add <code class="code">.card-hover</code> to provide an additional 3D hover effect.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full text-token">
						<a class="block card card-hover p-4 text-center" href="/elements/cards">Hover Me!</a>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<a class="block card card-hover p-4" href="/elements/cards">Hover Me!</a>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
