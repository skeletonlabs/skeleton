<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Typography',
		description: 'Provides a variety of globally scoped typographic styles. Keeps common tags styled consistently throughout an app.',
		stylesheetIncludes: ['all', 'typography'],
		source: 'styles/typography.css'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Excluding Styles</h2>
			<p>
				Use the <code>.unstyled</code> class to exclude and reset Skeleton's typography styles, then apply new styles as desired.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full text-center">
						<h2 class="unstyled" data-toc-ignore>Unstyled H2</h2>
						<p class="unstyled">Unstyled paragraph element.</p>
						<a href="/" class="unstyled">Unstyled anchor element.</a>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<h2 class="unstyled">Unstyled H2</h2>
<p class="unstyled">Unstyled paragraph element.</p>
<a href="/" class="unstyled">Unstyled anchor element.</a>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3>Tailwind Prose Plugin</h3>
			<!-- prettier-ignore -->
			<p>
				If you're using the <a href="https://tailwindcss.com/docs/typography-plugin" target="_blank" rel="noreferrer">Tailwind Typography plugin</a>, all typography within the <code>.prose</code> class will be auto-excluded, allowing the plugin to handle most styles. Global styles like base text color will remain.
			</p>
		</section>
		<hr />
		<!-- Headings -->
		<div class="space-y-4">
			<h2>Headings</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="text-center space-y-4">
						<h1>Skeleton H1</h1>
						<h2 data-toc-ignore>Skeleton H2</h2>
						<h3 data-toc-ignore>Skeleton H3</h3>
						<h4>Skeleton H4</h4>
						<h5>Skeleton H5</h5>
						<h6>Skeleton H6</h6>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<h1>Skeleton H1</h1>
<h2>Skeleton H2</h2>
<h3>Skeleton H3</h3>
<h4>Skeleton H4</h4>
<h5>Skeleton H5</h5>
<h6>Skeleton H6</h6>
						`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Paragraph -->
		<div class="space-y-4">
			<h2>Paragraph</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<p class="w-full text-center">The quick brown fox jumps over the lazy dog.</p>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<p>The quick brown fox jumps over the lazy dog.</p>`} />
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Anchor -->
		<div class="space-y-4">
			<h2>Anchor</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="text-center">
						<a href="https://www.youtube.com/watch?v=XTgFtxHhCQ0" target="_blank" rel="noreferrer">Anchor</a>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<a href="/">Anchor</a>`} />
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Blockquote -->
		<div class="space-y-4">
			<h2>Blockquote</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<blockquote class="w-full">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita cupiditate dolores dignissimos maiores doloremque fugiat,
						dolore doloribus nisi, repellendus mollitia nostrum, commodi a minus aperiam deleniti. Velit rerum ut tempora!
					</blockquote>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<blockquote>Skeleton</blockquote>`} />
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Pre -->
		<div class="space-y-4">
			<h2>Pre-formatted Text</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<pre class="w-full">The quick brown fox jumps over the lazy dog.</pre>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<pre>The quick brown fox jumps over the lazy dog.</pre>`} />
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Code -->
		<div class="space-y-4">
			<h2>Code</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="text-center"><code>.myExampleClass</code></div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<code>.myExampleClass</code>`} />
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Keyboard -->
		<div class="space-y-4">
			<h2>Keyboard</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="text-center">
						<p>Press <kbd>⌘ + C</kbd> to copy.</p>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`Press <kbd>⌘ + C</kbd> to copy.`} />
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Ins/Del -->
		<div class="space-y-4">
			<h2>Insertion / Deletion</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full">
						<del><s>Always</s> Gonna Give You Up</del>
						<ins cite="https://youtu.be/dQw4w9WgXcQ" datetime="10-31-2022">Never Gonna Give You Up</ins>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<del><s>Always</s> Gonna Give You Up</del>`} />
					<CodeBlock
						language="html"
						code={`<ins cite="https://youtu.be/dQw4w9WgXcQ" datetime="10-31-2022">Never Gonna Give You Up</ins>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
	</svelte:fragment>
</DocsShell>
