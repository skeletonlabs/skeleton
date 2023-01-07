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
				'<code>.card-glass-[color]</code>',
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
				<!-- Colors -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<div class="card !bg-primary-500 p-4 text-on-primary-token">primary</div>
					<div class="card !bg-secondary-500 p-4 text-on-secondary-token">secondary</div>
					<div class="card !bg-tertiary-500 p-4 text-on-tertiary-token">tertiary</div>
					<div class="card !bg-success-500 p-4 text-on-success-token">success</div>
					<div class="card !bg-warning-500 p-4 text-on-warning-token">warning</div>
					<div class="card !bg-error-500 p-4 text-on-error-token">error</div>
					<div class="card !bg-surface-500 p-4 text-on-surface-token">surface</div>
				</div>
				<!-- Glass -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<div class="card card-glass-primary p-4">glass-primary</div>
					<div class="card card-glass-secondary p-4">glass-secondary</div>
					<div class="card card-glass-tertiary p-4">glass-tertiary</div>
					<div class="card card-glass-success p-4">glass-success</div>
					<div class="card card-glass-warning p-4">glass-warning</div>
					<div class="card card-glass-error p-4">glass-error</div>
					<div class="card card-glass-surface p-4">glass-surface</div>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<CodeBlock language="html" code={`<div class="card p-4">Basic</div>`} />
			<CodeBlock language="html" code={`<a href="/" class="card p-4">Link</div>`} />
		</div>
		<div class="space-y-4">
			<h2>Styles</h2>
			<p>Background color styling.</p>
			<CodeBlock language="html" code={`<div class="card !bg-primary-500 text-on-primary-token p-4">primary</div>`} />
			<p>Glass background styling. These are semi-transparent with a slight blur effect.</p>
			<CodeBlock language="html" code={`<div class="card card-glass-primary p-4">glass-primary</div>`} />
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
