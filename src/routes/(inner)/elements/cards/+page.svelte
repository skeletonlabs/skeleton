<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Cards',
		description: 'Provides container elements that wrap and separate content',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/cards'],
		source: 'styles/elements/cards.css',
		classes: [
			['<code>.card</code>', '-', 'Adds basic card styling to any block element.'],
			['<code>.card-header</code>', '-', 'The header region of the card.'],
			['<code>.card-footer</code>', '-', 'The footer region of the card.'],
			['<code>.card-hover</code>', '-', 'Provides an animated hover effect.'],
			[
				'<code>.variant-glass-[color]</code>',
				'primary | secondary | tertiary | success | warning | error | surface',
				'A semi-transparent glass variation.'
			]
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<!-- Minimal -->
				<div class="card p-4 flex justify-center items-center"><span>Minimal</span></div>
				<!-- Detailed -->
				<a class="card card-hover overflow-hidden" href="https://www.skeleton.dev/">
					<!-- Header -->
					<header>
						<img src="https://source.unsplash.com/random/1280x540?skeleton" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
					</header>
					<!-- Body -->
					<div class="p-4 space-y-4">
						<h6 class="text-primary-500">Announcements</h6>
						<h3>Skeleton is Awesome!</h3>
						<article>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur
								tempore sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
							</p>
						</article>
					</div>
					<hr />
					<!-- Footer -->
					<footer class="p-4 flex justify-start items-center space-x-4">
						<Avatar src="https://i.pravatar.cc/160?img=5" />
						<div class="flex-auto flex justify-between items-center">
							<h6 class="font-bold">By Alex</h6>
							<small>On {new Date().toLocaleDateString()}</small>
						</div>
					</footer>
				</a>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<p>Both block elements and anchors are supported.</p>
			<CodeBlock language="html" code={`<div class="card p-4">Basic</div>`} />
			<CodeBlock language="html" code={`<a href="/" class="card p-4">Link</a>`} />
		</div>
		<div class="space-y-4">
			<h2>Hover Effect</h2>
			<p>Anchor cards have an inherent hover style. Add <code>.card-hover</code> to provide a 3D hover effect.</p>
			<CodeBlock language="html" code={`<div class="card card-hover p-4">Hover</div>`} />
		</div>
		<div class="space-y-4">
			<h2>Variants</h2>
			<p>Supports all standard variant styles via <code>.variant-[style]-[color]</code>.</p>
			<CodeBlock language="html" code={`<div class="card variant-filled-primary p-4">Skeleton</div>`} />
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
				<!-- filled -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Filled</p>
					<div class="card variant-filled-primary p-4">primary</div>
					<div class="card variant-filled-secondary p-4">secondary</div>
					<div class="card variant-filled-tertiary p-4">tertiary</div>
					<div class="card variant-filled-success p-4">success</div>
					<div class="card variant-filled-warning p-4">warning</div>
					<div class="card variant-filled-error p-4">error</div>
					<div class="card variant-filled-surface p-4">surface</div>
				</div>
				<!-- soft -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Soft</p>
					<div class="card variant-soft-primary p-4">primary</div>
					<div class="card variant-soft-secondary p-4">secondary</div>
					<div class="card variant-soft-tertiary p-4">tertiary</div>
					<div class="card variant-soft-success p-4">success</div>
					<div class="card variant-soft-warning p-4">warning</div>
					<div class="card variant-soft-error p-4">error</div>
					<div class="card variant-soft-surface p-4">surface</div>
				</div>
				<!-- ringed -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Ringed</p>
					<div class="card variant-ringed-primary p-4">primary</div>
					<div class="card variant-ringed-secondary p-4">secondary</div>
					<div class="card variant-ringed-tertiary p-4">tertiary</div>
					<div class="card variant-ringed-success p-4">success</div>
					<div class="card variant-ringed-warning p-4">warning</div>
					<div class="card variant-ringed-error p-4">error</div>
					<div class="card variant-ringed-surface p-4">surface</div>
				</div>
				<!-- ghost -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Ghost</p>
					<div class="card variant-ghost-primary p-4">primary</div>
					<div class="card variant-ghost-secondary p-4">secondary</div>
					<div class="card variant-ghost-tertiary p-4">tertiary</div>
					<div class="card variant-ghost-success p-4">success</div>
					<div class="card variant-ghost-warning p-4">warning</div>
					<div class="card variant-ghost-error p-4">error</div>
					<div class="card variant-ghost-surface p-4">surface</div>
				</div>
			</div>
			<!-- glass -->
			<div class="space-y-4">
				<h3>Glass</h3>
				<p>
					The <em>glass</em> variant provides a tinted and blurred glass-like effect. Recommended when overlapping a background image.
				</p>
				<div
					class="grid grid-cols-3 gap-4 p-4 rounded-container-token text-center text-xs font-bold bg-cover bg-center"
					style="background-image: url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e')"
				>
					<div class="card variant-glass-primary p-4 shadow !text-white">primary</div>
					<div class="card variant-glass-secondary p-4 shadow !text-white">secondary</div>
					<div class="card variant-glass-tertiary p-4 shadow !text-white">tertiary</div>
					<div class="card variant-glass-success p-4 shadow !text-white">success</div>
					<div class="card variant-glass-warning p-4 shadow !text-white">warning</div>
					<div class="card variant-glass-error p-4 shadow !text-white">error</div>
					<div class="col-span-3 card variant-glass-surface p-4 shadow !text-white">surface</div>
				</div>
			</div>
		</div>
		<!-- Headers and Footers -->
		<div class="space-y-4">
			<h2>Headers and Footers</h2>
			<p>If you wish the split the card into regions, use the following structure.</p>
			<CodeBlock
				language="html"
				code={`
<div class="card">
	<header class="card-header">(header)</header>
	<div class="p-4">(body)</div>
	<footer class="card-footer">(footer)</footer>
</div>
`}
			/>
		</div>
	</svelte:fragment>
</DocsShell>
