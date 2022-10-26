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
			['<code>.card-body</code>', '-', 'The body region of the card.'],
			['<code>.card-footer</code>', '-', 'The footer region of the card.']
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<!-- Colors -->
			<div class="card card-body !bg-primary-500 text-white text-center">Primary</div>
			<div class="card card-body !bg-accent-500 text-white text-center">Accent</div>
			<div class="card card-body !bg-ternary-500 text-white text-center">Ternary</div>
			<div class="card card-body !bg-warning-500 text-white text-center">Warning</div>
			<!-- Minimal -->
			<div class="md:col-span-2 card card-body flex justify-center items-center"><span>Minimal</span></div>
			<!-- Detailed -->
			<a class="md:col-span-2 card overflow-hidden" href="https://skeleton.brainandbonesllc.com/">
				<!-- Header -->
				<header>
					<img src="https://source.unsplash.com/random/1280x540?skeleton" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
				</header>
				<!-- Body -->
				<div class="card-body space-y-4">
					<h6 class="text-primary-500">Announcements</h6>
					<h3>Skeleton is Awesome!</h3>
					<article>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure
							molestias cum expedita architecto itaque quae rem.
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
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<p>Include the <code>.card-body</code> class to apply some basic styles, such as padding.</p>
			<CodeBlock language="html" code={`<div class="card card-body">Skeleton</div>`} />
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
    <div class="card-body">(body)</div>
    <footer class="card-footer">(footer)</footer>
</div>
            `.trim()}
			/>
		</div>
		<!-- Global Styles -->
		<div class="space-y-4">
			<h2>Global Styles</h2>
			<p>Use your global stylesheet to update all instances of this element.</p>
			<CodeBlock language="css" code={`.card { @apply rounded-none; }`} />
		</div>
	</svelte:fragment>
</DocsShell>
