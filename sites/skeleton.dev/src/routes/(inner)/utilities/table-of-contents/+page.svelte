<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Utilities
	import { CodeBlock, TableOfContents } from '@skeletonlabs/skeleton';
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
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="card p-4 text-token"><TableOfContents /></div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<p>Set the <code class="code">tocCrawler</code> action on the element with headings to catalog. Supports H2-H6 by default.</p>
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
				<p>Implement the Table of Contents component, which displays the generated list of links.</p>
				<CodeBlock language="html" code={`<TableOfContents />`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- How it Works -->
		<section class="space-y-4">
			<h2 class="h2">How It Works</h2>
			<!-- Heading IDs -->
			<h3 class="h3">Heading IDs</h3>
			<p>Each page heading requires a unique ID that acts as the scroll target for inner-page navigation.</p>
			<CodeBlock language="html" code={`<h2 class="h2" id="how-it-works">How it Works</h2>`} />
			<!-- Anchor Links -->
			<h3 class="h3">Anchor Links</h3>
			<p>
				Each link within the Table of Contents then points to the matching target ID as shown below. Note the use of the <code class="code"
					>#</code
				>. When clicked, the browser will automatically scroll so that the targeted element is at the top of the visible screen.
			</p>
			<CodeBlock language="html" code={`<a href="#how-it-works">How It Works</a>`} />
		</section>
		<hr />
		<!-- Settings -->
		<section class="space-y-4">
			<h2 class="h2">Settings</h2>
			<!-- Automatic IDs -->
			<h3 class="h3">Automatic IDs</h3>
			<p>
				Set <code class="code">mode: generate</code> to enable <code class="code">tocCrawler</code> to automatically generate and set unique
				IDs for all headings that are descendents of the element the action is applied to.
			</p>
			<CodeBlock language="html" code={`<div use:tocCrawler={{ mode: 'generate' }}>`} />
			<p>See the example below. Note this <u>will not</u> overwrite IDs you have set manually.</p>
			<CodeBlock
				language="html"
				code={`
<!-- Before: -->
<h2 class="h2">Title One</h2>
<h2 class="h2" id="my-custom-id">Title Two</h2>\n
<!-- After: -->
<h2 class="h2" id="title-one">Title One</h2>
<h2 class="h2" id="my-custom-id">Title Two</h2>
			`}
			/>
			<!-- Prefixes and Suffixes -->
			<h3 class="h3">Prefixes and Suffixes</h3>
			<!-- prettier-ignore -->
			<p>
				We recommend setting a custom heading (per the instruction above) if a conflict is found within your page. However, you may also hardcode a <code class="code">prefix</code> or <code class="code">suffix</code> to all generated IDs as follows:
			</p>
			<CodeBlock
				language="html"
				code={`
<div use:tocCrawler={{ mode: 'generate', prefix: 'foo', suffix: 'bar' }}>\n
<!-- Ex: foo-title-one-bar -->
<!-- Ex: foo-title-two-bar -->
			`}
			/>
			<!-- Ignore Headings -->
			<h3 class="h3">Ignore Headings</h3>
			<p>
				To ignore a heading in the target region, append a <code class="code">data-toc-ignore</code> attribute. The crawler will skip this.
			</p>
			<CodeBlock language="html" code={`<h2 class="h2" data-toc-ignore>Ignore Me</h2>`} />
			<!-- Invisible Headings -->
			<h3 class="h3">Invisible Headings</h3>
			<!-- prettier-ignore -->
			<p>Use the Tailwind-provided <a class="anchor" href="https://tailwindcss.com/docs/screen-readers#screen-reader-only-elements" target="_blank" rel="noreferrer">Screen Reader</a> <code class="code">.sr-only</code> class to append an invisible heading.</p>
			<CodeBlock language="html" code={`<h2 class="sr-only">Include Me!</h2>`} />
			<!-- Keyed Updates -->
			<h3 class="h3">Keyed Updates</h3>
			<p>
				In some situations you may want to force the crawler action to update on demand. Use the <code class="code">key</code> parameter and
				pass a value that will be modified. This operates similar to Svelte's
				<a class="anchor" href="https://svelte.dev/tutorial/key-blocks" target="_blank">key blocks</a>.
			</p>
			<CodeBlock language="ts" code={`const tabIndex = 0;`} />
			<CodeBlock language="html" code={`<div use:tocCrawler={{ key: tabIndex }}>`} />
			<!-- Active on Scroll -->
			<h3 class="h3">Active on Scroll</h3>
			<p>
				The <code class="code">tocCrawler</code> action can automatically select the top visible heading when you supply a
				<code class="code">scrollTarget</code> element. That being the element that handles scrolling for the page. By default, this is set
				to target the <code class="code">body</code> element. When using the Skeleton App Shell, designate
				<code class="code">scrollTarget: '#page'</code> element as shown below. To disable this feature, set
				<code class="code">scrollTarget: ''</code>.
			</p>
			<blockquote class="blockquote">
				NOTE: depending on your page layout, the page may not scroll low enough to activate the final links in the list.
			</blockquote>
			<CodeBlock language="html" code={`<div use:tocCrawler={{ scrollTarget: '#page' }}>`} />
		</section>
		<hr />
		<!-- Styling -->
		<section class="space-y-4">
			<h2 class="h2">Styling</h2>
			<!-- Smooth Scrolling -->
			<h3 class="h3">Smooth Scrolling</h3>
			<!-- prettier-ignore -->
			<p>
				Use Tailwind's <a class="anchor" href="https://tailwindcss.com/docs/scroll-behavior" target="_blank">scroll behavior</a> styles to enable smooth scrolling on the scrollable element.
			</p>
			<blockquote class="blockquote">
				Make considerations for the <a class="anchor" href="/docs/transitions#reduced-motion">Reduced Motion</a> settings for proper accessability.
			</blockquote>
			<CodeBlock
				language="html"
				code={`
<!-- If using the App Shell: -->
<AppShell regionPage="scroll-smooth"></AppShell>\n
<!-- If NOT using the App Shell: -->
<body class="scroll-smooth"></body>
			`}
			/>
			<!-- Scroll Margin -->
			<h3 class="h3">Scroll Margin</h3>
			<!-- prettier-ignore -->
			<p>
				Use Tailwind's <a class="anchor" href="https://tailwindcss.com/docs/scroll-margin" target="_blank">scroll margin</a> styles if you need to offset for sticky headers
			</p>
			<blockquote class="blockquote">NOTE: not currently supported for Skeleton's App Shell.</blockquote>
			<CodeBlock language="html" code={`<body class="scroll-mt-[100px]"></body>`} />
			<!-- Sticky Positioning -->
			<h3 class="h3">Sticky Positioning</h3>
			<!-- prettier-ignore -->
			<p>
				Use Tailwind's <a class="anchor" href="https://tailwindcss.com/docs/position#sticky-positioning-elements" target="_blank" rel="noreferrer">sticky positioning</a> styles to keep the Table of Contents component visible while scrolling.
			</p>
			<CodeBlock language="html" code={`<TableOfContents class="sticky top-10" />`} />
		</section>
	</svelte:fragment>
</DocsShell>
