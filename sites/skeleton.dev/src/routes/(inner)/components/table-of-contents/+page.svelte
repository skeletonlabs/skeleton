<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Utilities
	import { TableOfContents, CodeBlock, type QueryIndent } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldTableOfContents from '@skeletonlabs/skeleton/components/TableOfContents/TableOfContents.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Table of Contents',
		description: 'Allows you to quickly navigate the hierarchy of headings for the current page.',
		imports: ['TableOfContents'],
		source: 'components/TableOfContents',
		components: [{ sveld: sveldTableOfContents }]
	};

	// Local
	const includeDemoList: QueryIndent[] = [
		{ query: 'span', indentClass: 'ml-3' },
		{ query: '.classExample', indentClass: 'ml-6' },
		{ query: '#idExample', indentClass: 'ml-9' }
	];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="card p-4 text-token rounded-container-token w-full grid grid-cols-2 gap-4">
					<div id="mainDemo" class="toc-demo h-64 overflow-y-auto">
						<h2 class="h2">H2</h2>
						<div class="flex flex-col gap-4 my-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
						<h3 class="h3">H3</h3>
						<div class="flex flex-col gap-4 my-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
						<h4 class="h4">H4</h4>
						<div class="flex flex-col gap-4 my-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
						<h5 class="h5">H5</h5>
						<div class="flex flex-col gap-4 my-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
						<h6 class="h6">H6</h6>
						<div class="flex flex-col gap-4 my-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
					</div>
					<TableOfContents target="#mainDemo" scrollParent="#mainDemo" />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<TableOfContents target='#demo' scrollParent='#demo'/>
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
		<!--TODO: Add target, scrollParent section-->
		<section class="space-y-4">
			<!-- Include Elements -->
			<h2 class="h2">Include Elements</h2>
			<p>The prop <code class="code">IncludeList</code> defines all elements to include and their indentation.</p>
			<p>Note: provide only a <em>single</em> <code class="code">selector query</code> per object.</p>
			<DocsPreview regionPreview="w-full grid grid-cols-2 gap-4" background="neutral">
				<svelte:fragment slot="preview">
					<div id="includeDemo" class="toc-demo h-64 overflow-y-auto">
						<span>type Example</span>
						<div class="flex flex-col gap-4 my-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
						<p class="classExample">classExample</p>
						<div class="flex flex-col gap-4 my-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
						<div id="idExample">ID Example</div>
						<div class="flex flex-col gap-4 my-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
						<div>Not included Example</div>
						<div class="flex flex-col gap-4 my-4">
							<div class="placeholder animate-pulse" />
							<div class="placeholder animate-pulse" />
						</div>
					</div>
					<TableOfContents target="#includeDemo" scrollParent="#includeDemo" includeList={includeDemoList} />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const includedElements: QueryIndent[] = [
	{ query: 'span', indentClass: 'ml-3' },
	{ query: '.classExample', indentClass: 'ml-6' },
	{ query: '#idExample', indentClass: 'ml-9'}
];
					`}
					/>
					<CodeBlock
						language="html"
						code={`
<div id="page">
	<span>type Example</span>
	<p class="classExample">classExample</p>
	<p id="idExample">ID Example</p>
	<p>Not included Example</p>
</div>
<TableOfContents includeList={includedElements}/>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<hr />
	</svelte:fragment>
</DocsShell>
