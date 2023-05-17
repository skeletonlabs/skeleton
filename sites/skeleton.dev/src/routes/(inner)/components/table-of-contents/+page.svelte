<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Utilities
	import { ListBox, ListBoxItem, CodeBlock } from '@skeletonlabs/skeleton';
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
	let value = 0;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="card p-4 text-token rounded-container-token w-96">
					<p class="font-bold pb-4 ml-4">On This Page</p>
					<ListBox active="variant-filled-primary" hover="hover:bg-primary-hover-token" class="pointer-events-none">
						<ListBoxItem group={value} name="toc" value={0}>Demo</ListBoxItem>
						<ListBoxItem group={value} name="toc" value={1}>How It Works</ListBoxItem>
						<ListBoxItem group={value} name="toc" value={2} class="ml-4">Key Props</ListBoxItem>
						<ListBoxItem group={value} name="toc" value={3} class="ml-4">...</ListBoxItem>
						<ListBoxItem group={value} name="toc" value={4}>Ignore a Heading</ListBoxItem>
						<ListBoxItem group={value} name="toc" value={5}>...</ListBoxItem>
					</ListBox>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<p class="w-full text-center">Please note the example above is simulated.</p>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="html" code={`<TableOfContents target="#toc-target" />`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>Add the component to a page, set the target property, then a list of links will be auto-generated based on HTML headings.</p>
		<section class="space-y-4">
			<h2 class="h2">How It Works</h2>
			<h3 class="h3">Key Props</h3>
			<p>The following props are critical to how this operates.</p>
			<div class="table-container">
				<table class="table">
					<thead>
						<tr>
							<th>Property</th>
							<th>Example</th>
							<th>Description</th>
						</tr>
					</thead>
					<!-- prettier-ignore -->
					<tbody>
						<tr>
							<td><code class="code">scrollParent</code></td>
							<td>"#page"</td>
							<td><a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="_blank" rel="noreferrer">Query selector</a> for the scrollable page element.</td>
						</tr>
						<tr>
							<td><code class="code">target</code></td>
							<td>"#page"</td>
							<td><a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="_blank" rel="noreferrer">Query selector</a> for the element to scan for headings.</td>
						</tr>
						<tr>
							<td><code class="code">allowedHeadings</code></td>
							<td>'h2, h3'</td>
							<td><a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="_blank" rel="noreferrer">Query selector</a> for the allowed headings. From H2-H6.</td>
						</tr>
					</tbody>
				</table>
			</div>
			<h3 class="h3">Heading IDs</h3>
			<p>
				The component will scan the target region and query all matching headings. If a heading has an <code class="code">ID</code> set, that
				will be used as the scroll target, otherwise an ID will be auto-generated and assigned.
			</p>
			<h3 class="h3">Click to Scroll</h3>
			<p>
				When a link is clicked, the scrollable parent container will be scrolled using the JavaScript <code class="code"
					>scrollIntoView</code
				> method. This will smoothly scroll the container element to the heading with the matching ID.
			</p>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Ignore a Heading</h2>
			<p>
				By default, the Table of Contents creates links for <em>all headings</em> within the target region. If you wish to ignore certain headings,
				add the following data attribute to that heading.
			</p>
			<CodeBlock language="html" code={`<h2 class="h2" data-toc-ignore>Ignore Me!</h2>`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Screen Reader Headings</h2>
			<!-- prettier-ignore -->
			<p>If you wish to include a section link that's not visibly shown within the target element, use <a class="anchor" href="https://tailwindcss.com/docs/screen-readers#screen-reader-only-elements" target="_blank" rel="noreferrer">Screen Reader</a> <code class="code">.sr-only</code> class from Tailwind.</p>
			<CodeBlock language="html" code={`<h2 class="sr-only">Include Me!</h2>`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Sticky Positioning</h2>
			<!-- prettier-ignore -->
			<p>See Tailwind's documentation on <a class="anchor" href="https://tailwindcss.com/docs/position#sticky-positioning-elements" target="_blank" rel="noreferrer">sticky positioning</a> if you wish to keep the Table of Contents component visible during scrolling.</p>
		</section>
	</svelte:fragment>
</DocsShell>
