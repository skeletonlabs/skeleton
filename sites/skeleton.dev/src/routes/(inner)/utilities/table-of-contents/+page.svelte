<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Utilities
	import { ListBox, ListBoxItem, CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldTableOfContents from '@skeletonlabs/skeleton/utilities/TableOfContents/TableOfContents.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Table of Contents',
		description: 'Allows you to quickly navigate the hierarchy of headings for the current page.',
		imports: ['TableOfContents', 'tocCrawler'],
		source: 'components/TableOfContents',
		components: [{ sveld: sveldTableOfContents }]
	};

	// Local
	let value = 0;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview class="hidden xl:block">
			<svelte:fragment slot="preview">
				<p>See example on <strong>page right</strong> &rarr;</p>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<p>Set the action on the element containing headings to catalog. H2-H6 are supported by default.</p>
				<CodeBlock language="ts" code={`import { tocCrawler } from '@skeletonlabs/skeleton';`} />
				<CodeBlock
					language="html"
					code={`
<div use:tocCrawler={{ mode: 'generate' }}>
	<h2>Heading 2</h2>
	<p>...</p>
	<h3>Heading 3</h3>
	<p>...</p>
</div>
				`}
				/>
				<p>Finally, implement the component, which will display the generated list of links.</p>
				<CodeBlock language="html" code={`<TableOfContents />`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- How it Works -->
		<section class="space-y-4">
			<h2 class="h2">How It Works</h2>
			<h3 class="h3">Heading IDs</h3>
			<p>Each heading on the page requires a unique ID that acts as the scroll target for inner-page navigation.</p>
			<CodeBlock language="html" code={`<h2 class="h2" id="how-it-works">How it Works</h2>`} />
			<h3 class="h3">Anchor Links</h3>
			<p>
				The Table of Contents list of links will point to each target ID as shown below. Note the use of <code class="code">#</code>. When
				clicked, the browser will automatically scroll the page to this unique element ID on the page.
			</p>
			<CodeBlock language="html" code={`<a href="#how-it-works">How It Works</a>`} />
		</section>
		<hr />
		<!-- Settings -->
		<section class="space-y-4">
			<h2 class="h2">Settings</h2>
			<h3 class="h3">Automatic IDs</h3>
			<p>
				Set <code class="code">mode: generate</code> for <code class="code">tocCrawler</code> to automatically generate and set unique IDs based
				on the text content of the heading. If an ID has already been set manually, it will be used instead. If this setting is not enabled,
				then you are responsible for implementing all heading IDs.
			</p>
			<CodeBlock language="html" code={`<div use:tocCrawler={{ mode: 'generate' }}>`} />
			<h3 class="h3">Ignore Headings</h3>
			<p>
				To ignore a heading in the target region, simply append a <code class="code">data-toc-ignore</code> attribute.
			</p>
			<CodeBlock language="html" code={`<h2 class="h2" data-toc-ignore>Ignore Me</h2>`} />
			<h3 class="h3">Append Headings</h3>
			<!-- prettier-ignore -->
			<p>Use the Tailwind-provided <a class="anchor" href="https://tailwindcss.com/docs/screen-readers#screen-reader-only-elements" target="_blank" rel="noreferrer">Screen Reader</a> <code class="code">.sr-only</code> class to append an invisible heading.</p>
			<CodeBlock language="html" code={`<h2 class="sr-only">Include Me!</h2>`} />
		</section>
		<hr />
		<!-- Styling -->
		<section class="space-y-4">
			<h2 class="h2">Styling</h2>
			<h3 class="h3">Smooth Scrolling</h3>
			<!-- prettier-ignore -->
			<p>
				Use Tailwind's <a class="anchor" href="https://tailwindcss.com/docs/scroll-behavior" target="_blank">scroll behavior</a> styles to enable smooth scrolling on the scrollable element.
			</p>
			<CodeBlock
				language="html"
				code={`
<!-- If using the App Shell: -->
<AppShell regionPage="scroll-smooth"></AppShell>\n
<!-- If NOT using the App Shell: -->
<body class="scroll-smooth"></body>
			`}
			/>
			<h3 class="h3">Scroll Margin Offset</h3>
			<!-- prettier-ignore -->
			<p>
				Use Tailwind's <a class="anchor" href="https://tailwindcss.com/docs/scroll-margin" target="_blank">scroll margin</a> if you need to offset and account for sticky headers
			</p>
			<blockquote class="blockquote">NOTE: this is not currently supported for Skeleton's App Shell.</blockquote>
			<CodeBlock language="html" code={`<body class="scroll-mt-4"></body>`} />
			<h3 class="h3">Sticky Positioning</h3>
			<!-- prettier-ignore -->
			<p>
				Use Tailwind's <a class="anchor" href="https://tailwindcss.com/docs/position#sticky-positioning-elements" target="_blank" rel="noreferrer">sticky positioning</a> styles to keep the Table of Contents component visible while scrolling.
			</p>
			<CodeBlock language="html" code={`<TableOfContents class="sticky top-10" />`} />
		</section>
	</svelte:fragment>
</DocsShell>
