<script lang="ts">
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Tables
	const tableClasses: any = {
		headings: ['Class', 'Description'],
		source: [
			['<code>.card</code>', 'Adds basic card styling to any block element.'],
			['<code>.card-header</code>', 'The header region of the card.'],
			['<code>.card-body</code>', 'The body region of the card.'],
			['<code>.card-footer</code>', 'The footer region of the card.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Cards</h1>
		<p>Automatically included in <code>all.css</code> and <code>elements.css</code>. This <a href="/guides/styling">stylesheet</a> provides container elements that wrap and separate content.</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/cards.css';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<!-- Colors -->
		<div class="grid md:grid-cols-3 gap-4">
			<div class="card !bg-primary-500 text-white centerContent">Primary</div>
			<div class="card !bg-accent-500 text-white centerContent">Accent</div>
			<div class="card !bg-warning-500 text-white centerContent">Warning</div>
		</div>
		<!-- Columns -->
		<div class="grid md:grid-cols-2 gap-4">
			<!-- Minimal -->
			<div class="card card-body centerContent"><span>Minimal</span></div>
			<!-- Detailed -->
			<a class="card overflow-hidden" href="https://skeleton.brainandbonesllc.com/">
				<!-- Header -->
				<header>
					<img src="https://source.unsplash.com/random/1280x540?skeleton" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
				</header>
				<!-- Body -->
				<div class="card-body space-y-4">
					<h6 class="text-primary-500">Announcements</h6>
					<h3>Skeleton is Awesome!</h3>
					<article class="text-surface-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias
						cum expedita architecto itaque quae rem.
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

	<!-- Usage -->
	<section class="space-y-8">
		<div class="space-y-4">
			<h2>Usage</h2>
			<p>Include the <code>.card-body</code> class to apply some basic styles, such as padding.</p>
			<CodeBlock language="html" code={`<div class="card card-body">Skeleton</div>`} />
		</div>
		<!-- Headers and Footers -->
		<div class="space-y-4">
			<h4>Headers and Footers</h4>
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
			<h4>Global Styles</h4>
			<p>Use your global stylesheet to update all instances of this element.</p>
			<CodeBlock language="css" code={`.card { @apply rounded-none; }`} />
		</div>
	</section>

	<!-- Classes -->
	<section class="space-y-4">
		<h2>Classes</h2>
		<DataTable headings={tableClasses.headings} source={tableClasses.source} />
	</section>
</div>

<style lang="postcss">
	.centerContent {
		@apply flex justify-center items-center min-h-[100px];
	}
</style>
