<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Utilities
	import { TableOfContents, CodeBlock, type TOCLink } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldTableOfContents from '@skeletonlabs/skeleton/utilities/TableOfContents/TableOfContents.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Table of Contents',
		description: 'Allows you to quickly navigate the hierarchy of a page.',
		imports: ['TableOfContents', 'type QueryIndent'],
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
					<div id="mainDemo" class="toc-demo h-64 overflow-y-auto">
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
	<svelte:fragment slot="usage" />
</DocsShell>
