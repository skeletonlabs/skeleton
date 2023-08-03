<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Utilities
	import { TableOfContents, CodeBlock, type TOCLink, crawl, tocStore } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldTableOfContents from '@skeletonlabs/skeleton/utilities/TableOfContents/TableOfContents.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Table of Contents',
		description: 'Allows you to quickly navigate the hierarchy of a page.',
		imports: ['TableOfContents', 'type TOCLink'],
		source: 'utilities/TableOfContents',
		components: [{ sveld: sveldTableOfContents }],
		transitionIn: 'fade',
		transitionOut: 'fade'
	};

	// Local
	const links: TOCLink[] = [
		{ href: '#h2', text: 'h2' },
		{ href: '#h3', text: 'h3', indent: 'ml-3' },
		{ href: '#h4', text: 'h4', indent: 'ml-6' },
		{ href: '#h5', text: 'h5', indent: 'ml-9' },
		{ href: '#h6', text: 'h6', indent: 'ml-12' }
	];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="card p-4 text-token rounded-container-token w-full grid grid-cols-2 gap-4">
					<div id="mainDemo" class="h-64 overflow-y-auto">
						<h2 class="h2">
							H2
							<a id="h2"><span class="hidden">permalink</span></a>
						</h2>
						<div class="flex flex-col gap-4 m-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
						<h3 class="h3">
							H3
							<a id="h3"><span class="hidden">permalink</span></a>
						</h3>
						<div class="flex flex-col gap-4 m-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
						<h4 class="h4">
							H4
							<a id="h4"><span class="hidden">permalink</span></a>
						</h4>
						<div class="flex flex-col gap-4 m-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
						<h5 class="h5">
							H5
							<a id="h5"><span class="hidden">permalink</span></a>
						</h5>
						<div class="flex flex-col gap-4 m-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
						<h6 class="h6">
							H6
							<a id="h6"><span class="hidden">permalink</span></a>
						</h6>
						<div class="flex flex-col gap-4 m-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
					</div>
					<TableOfContents target="#mainDemo" scrollParent="#mainDemo" {links} />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="ts"
					code={`
const links: TOCLink[] = [
	{ href: '#h2', text: 'h2' },
	{ href: '#h3', text: 'h3', indent: 'ml-3' },
	{ href: '#h4', text: 'h4', indent: 'ml-6' },
	{ href: '#h5', text: 'h5', indent: 'ml-9' },
	{ href: '#h6', text: 'h6', indent: 'ml-12' }
];
					`}
				/>
				<CodeBlock
					language="html"
					code={`
<TableOfContents target='#demo' scrollParent='#demo' links={links}/>
<div id="demo">
	<!-- ... -->
</div>
				`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Manual Permalinks -->
		<section class="space-y-4">
			<h2 class="h2">Manual Permalinks</h2>
			<p>The Table-Of-Contents is added to a page by following these steps:</p>
			<h3 class="h3">Prepare Permalinks</h3>
			<p>start by adding permalinks to where the links should point to.</p>
			<CodeBlock
				language="html"
				code={`
<h2 class="h2">Some title</h2>

<!-- after adding the permalink -->
<h2 class="h2">
	Some title
	<a id="title1" class="permalink"><span class="hidden">permalink</span></a>
</h2>

<!--...-->
				`}
			/>
			<p>Note: the hidden span is added to suppress the a11y warning.</p>
			<h3 class="h3">Create links</h3>
			<p>The TOC expects a list of links that reference to the permalinks.</p>
			<CodeBlock
				language="ts"
				code={`
const links: TOCLink[] = [
	{ href: '#h2', text: 'h2' },
	//...
];
				`}
			/>
			<h3 class="h3">Add TOC</h3>
			<p>Add the TOC component.</p>
			<p>
				Note: make sure to add the <code class="code">target</code> and <code class="code">scrollParent</code> so highlighting the active element
				works as expected.
			</p>
			<CodeBlock
				language="html"
				code={`
<TableOfContents target='#demo' scrollParent='#demo' links={links}/>
				`}
			/>
		</section>
		<!-- Generate Permalinks -->
		<section class="space-y-4">
			<h2 class="h2">Generate Permalinks</h2>
			<p>Using the action <code class="code">crawl</code> you can auto-generate permalinks for headings <code class="code">h2-h6</code>.</p>
			<p>
				The generated Links are then saved to the <code class="code">tocStore</code> which can be used to supply the TOC with the needed links.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="card p-4 text-token rounded-container-token w-full grid grid-cols-2 gap-4">
						<div id="autoDemo" class="h-64 overflow-y-auto" use:crawl={true}>
							<h2 id="autoDemo2" class="h2">AutoDemo2</h2>
							<div class="flex flex-col gap-4 m-4">
								<div class="placeholder animate-pulse" />
								<div class="placeholder animate-pulse" />
							</div>
							<h3 id="AutoDemo3" class="h3">AutoDemo3</h3>
							<div class="flex flex-col gap-4 m-4">
								<div class="placeholder animate-pulse" />
								<div class="placeholder animate-pulse" />
							</div>
							<h4 id="AutoDemo4" class="h4">AutoDemo4</h4>
							<div class="flex flex-col gap-4 m-4">
								<div class="placeholder animate-pulse" />
								<div class="placeholder animate-pulse" />
							</div>
							<h5 id="AutoDemo5" class="h5">AutoDemo5</h5>
							<div class="flex flex-col gap-4 m-4">
								<div class="placeholder animate-pulse" />
								<div class="placeholder animate-pulse" />
							</div>
							<h6 id="AutoDemo6" class="h6">AutoDemo6</h6>
							<div class="flex flex-col gap-4 m-4">
								<div class="placeholder animate-pulse" />
								<div class="placeholder animate-pulse" />
							</div>
						</div>
						<TableOfContents target="#autoDemo" scrollParent="#autoDemo" links={$tocStore} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>Note: every heading must have a unique <code class="code">id</code>, these id's are then used as the id of the permalink.</p>
					<p>Note: the param <code class="code">true</code> indicate that the crawler should generate the links not only scan them.</p>
					<CodeBlock
						language="html"
						code={`
<div id="autoDemo" use:crawl={true}>
	<h2 id="autoDemo2" class="h2">
		AutoDemo2
	</h2>
	<!--...-->
</div>
<TableOfContents target="#autoDemo" scrollParent="#autoDemo" links={$tocStore}/>
						`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">Ignore auto-generated headings</h3>
			<p>
				all headings with the data attribute <code class="code">data-toc-ignore</code> are ignored when auto-generating or scanning permalinks.
			</p>
			<CodeBlock
				language="html"
				code={`
<h2 id="ignoredHeading" class="h2" data-toc-ignore>
	AutoDemo2
</h2>
				`}
			/>
		</section>
		<!-- Scan Permalinks -->
		<section class="space-y-4">
			<h2 class="h2">Scan Permalinks</h2>
			<p>You can only scan for permalinks (instead of generating them) by passing false to the <code class="code">crawl</code> action.</p>
			<CodeBlock
				language="html"
				code={`
<div id="scanDemo" use:crawl={false}>
	<h2 class="h2">
		AutoDemo2
		<a id="scanDemo2" class="permalink"><span class="hidden">permalink</span></a>
	</h2>
	<!--...-->
</div>
<TableOfContents target="#scanDemo" scrollParent="#scanDemo" links={$tocStore}/>
						`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
