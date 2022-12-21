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
			['<code>.card-glass-[color]</code>', 'primary | secondary | tertiary | warning | surface', 'A semi-transparent glass variation.']
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<!-- Glass -->
			<div class="card p-4 card-glass-secondary text-center">Glass</div>
			<!-- Colors -->
			<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
				<div class="card p-4 !bg-primary-500 text-on-primary-token text-center">Primary</div>
				<div class="card p-4 !bg-secondary-500 text-on-secondary-token text-center">Secondary</div>
				<div class="card p-4 !bg-tertiary-500 text-on-tertiary-token text-center">Tertiary</div>
				<div class="card p-4 !bg-success-500 text-on-success-token text-center">Success</div>
				<div class="card p-4 !bg-warning-500 text-on-warning-token text-center">Warning</div>
				<div class="card p-4 !bg-error-500 text-on-error-token text-center">Error</div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<!-- Minimal -->
				<div class="card p-4 flex justify-center items-center"><span>Minimal</span></div>
				<!-- Detailed -->
				<a class="card overflow-hidden" href="https://www.skeleton.dev/">
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
			<p>Include the <code>.p-4</code> class to apply some basic styles, such as padding.</p>
			<CodeBlock language="html" code={`<div class="card p-4">Skeleton</div>`} />
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
