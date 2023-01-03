<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error
	import sveldTableOfContents from '$lib/components/TableOfContents/TableOfContents.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Table of Contents',
		description: 'Allows you to quickly navigate the hierarchy of headings for the current page.',
		imports: ['TableOfContents'],
		source: 'components/TableOfContents',
		components: [{ sveld: sveldTableOfContents }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Add the component to a page, set the target property, then a list of links will be auto-generated based on available HTML headings.
			</p>
			<CodeBlock language="html" code={`<TableOfContents target="#toc-target" />`} />
			<CodeBlock
				language="html"
				code={`
<!-- NOTE: this can be the body element, App Shell #page, etc. -->
<main>
	<!-- The region to scan for heading elements. -->
	<div id="toc-target">
		<h2>Heading<h2>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
		<h3>Subheading<h3>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
	</div>
</main>
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2>How It Works</h2>
			<h3>Key Props</h3>
			<p>The following props are critical to how this operates.</p>
			<div class="table-container">
				<table class="table table-hover">
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
							<td><code>target</code></td>
							<td>"#page-content"</td>
							<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="_blank" rel="noreferrer">Query selector</a> for the element to scan for headings.</td>
						</tr>
						<tr>
							<td><code>allowedHeadings</code></td>
							<td>'h2, h3'</td>
							<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="_blank" rel="noreferrer">Query selector</a> for the allowed headings. From H2-H6.</td>
						</tr>
					</tbody>
				</table>
			</div>
			<h3>Heading IDs</h3>
			<p>
				The component will scan the target region and query all matching headings. If a heading has an <code>ID</code> set, that will be used
				as the scroll target, otherwise an ID will be auto-generated and assigned.
			</p>
			<h3>Click to Scroll</h3>
			<p>
				When a link is clicked, the scrollable parent container will be scrolled using the JavaScript <code>scrollIntoView</code> method. This
				will smoothly scroll the container element to the heading with the matching ID.
			</p>
		</section>
		<section class="space-y-4">
			<h2>Ignore a Heading</h2>
			<p>
				By default, the Table of Contents creates links for <u>all headings</u> within the target region. If you wish to ignore certain headings,
				add the following data attribute to that heading.
			</p>
			<CodeBlock language="html" code={`<h2 data-toc-ignore>Ignore Me!</h2>`} />
		</section>
		<section class="space-y-4">
			<h2>Screen Reader Headings</h2>
			<!-- prettier-ignore -->
			<p>If you wish to include a section link that's not visibly shown within the target element, use <a href="https://tailwindcss.com/docs/screen-readers#screen-reader-only-elements" target="_blank" rel="noreferrer">Screen Reader</a> <code>.sr-only</code> class from Tailwind.</p>
			<CodeBlock language="html" code={`<h2 class="sr-only">Include Me!</h2>`} />
		</section>
		<section class="space-y-4">
			<h2>Sticky Positioning</h2>
			<!-- prettier-ignore -->
			<p>See Tailwind's documentation on <a href="https://tailwindcss.com/docs/position#sticky-positioning-elements" target="_blank" rel="noreferrer">sticky positioning</a> if you wish to keep the Table of Contents component visible during scrolling.</p>
		</section>
	</svelte:fragment>
</DocsShell>
