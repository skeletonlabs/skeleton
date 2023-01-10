<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Typography',
		description: 'Provides common typographical element styles',
		stylesheetIncludes: ['all', 'typography'],
		source: 'styles/typography.css'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>Use the <code>.unstyled</code> class to exclude these styles for an individual element.</p>
		<div class="space-y-4">
			<!-- Headings -->
			<h2>Headings</h2>
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
			<div class="card p-4 space-y-6">
				<h1>Skeleton H1</h1>
				<h2 data-toc-ignore>Skeleton H2</h2>
				<h3 data-toc-ignore>Skeleton H3</h3>
				<h4>Skeleton H4</h4>
				<h5>Skeleton H5</h5>
				<h6>Skeleton H6</h6>
			</div>
		</div>
		<!-- Paragraph -->
		<div class="space-y-4">
			<h2>Paragraph</h2>
			<CodeBlock language="html" code={`<p>The quick brown fox jumps over the lazy dog.</p>`} />
			<div class="card p-4 text-center"><p>The quick brown fox jumps over the lazy dog.</p></div>
		</div>
		<!-- Anchor -->
		<div class="space-y-4">
			<h2>Anchor</h2>
			<CodeBlock language="html" code={`<a href="/">Anchor</a>`} />
			<div class="card p-4 text-center space-x-4">
				<a href="https://www.youtube.com/watch?v=XTgFtxHhCQ0" target="_blank" rel="noreferrer">Anchor</a>
			</div>
		</div>
		<!-- Blockquote -->
		<div class="space-y-4">
			<h2>Blockquote</h2>
			<CodeBlock language="html" code={`<blockquote>Skeleton</blockquote>`} />
			<div class="card p-4">
				<blockquote class="max-w-[480px] mx-auto">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita cupiditate dolores dignissimos maiores doloremque fugiat,
					dolore doloribus nisi, repellendus mollitia nostrum, commodi a minus aperiam deleniti. Velit rerum ut tempora!
				</blockquote>
			</div>
		</div>
		<!-- Pre -->
		<div class="space-y-4">
			<h2>Pre-formatted Text</h2>
			<CodeBlock language="html" code={`<pre>The quick brown fox jumps over the lazy dog.</pre>`} />
			<div class="card p-4">
				<pre class="max-w-[480px] mx-auto">The quick brown fox jumps over the lazy dog.</pre>
			</div>
		</div>
		<!-- Code -->
		<div class="space-y-4">
			<h2>Code</h2>
			<CodeBlock language="html" code={`<code>.myExampleClass</code>`} />
			<div class="card p-4 text-center"><code>.myExampleClass</code></div>
		</div>
		<!-- Keyboard -->
		<div class="space-y-4">
			<h2>Keyboard</h2>
			<CodeBlock language="html" code={`<kbd>Shift + ⌘</kbd>`} />
			<div class="card p-4 text-center"><kbd>Shift + ⌘</kbd></div>
		</div>
		<!-- Ins/Del -->
		<div class="space-y-4">
			<h2>Insertion / Deletion</h2>
			<CodeBlock language="html" code={`<del><s>Always</s> Gonna Give You Up</del>`} />
			<CodeBlock language="html" code={`<ins cite="https://youtu.be/dQw4w9WgXcQ" datetime="10-31-2022">Never Gonna Give You Up</ins>`} />
			<div>
				<del><s>Always</s> Gonna Give You Up</del>
				<ins cite="https://youtu.be/dQw4w9WgXcQ" datetime="10-31-2022">Never Gonna Give You Up</ins>
			</div>
		</div>
	</svelte:fragment>
</DocsShell>
