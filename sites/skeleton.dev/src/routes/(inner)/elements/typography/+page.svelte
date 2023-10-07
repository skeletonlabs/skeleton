<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Typography',
		description: 'Provides a variety of globally scoped typographic styles. Keeps common tags styled consistently throughout an app.',
		stylesheetIncludes: ['skeleton', 'typography'],
		source: 'packages/plugin/src/styles/components/typography.css'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Headings -->
		<section class="space-y-4">
			<h2 class="h2">Headings</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="text-center space-y-4">
						<h1 class="h1">Skeleton H1</h1>
						<h2 class="h2" data-toc-ignore>Skeleton H2</h2>
						<h3 class="h3" data-toc-ignore>Skeleton H3</h3>
						<h4 class="h4" data-toc-ignore>Skeleton H4</h4>
						<h5 class="h5" data-toc-ignore>Skeleton H5</h5>
						<h6 class="h6" data-toc-ignore>Skeleton H6</h6>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<h1 class="h1">Skeleton H1</h1>
<h2 class="h2">Skeleton H2</h2>
<h3 class="h3">Skeleton H3</h3>
<h4 class="h4">Skeleton H4</h4>
<h5 class="h5">Skeleton H5</h5>
<h6 class="h6">Skeleton H6</h6>
						`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Paragraph -->
		<section class="space-y-4">
			<h2 class="h2">Paragraph</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<p class="w-full text-center">The quick brown fox jumps over the lazy dog.</p>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>Note that no class is provided for paragraph tags. They inherit the base text styles.</p>
					<CodeBlock language="html" code={`<p>The quick brown fox jumps over the lazy dog.</p>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Anchor -->
		<section class="space-y-4">
			<h2 class="h2">Anchor</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="text-center">
						<a class="anchor" href="https://www.youtube.com/watch?v=XTgFtxHhCQ0" target="_blank" rel="noreferrer">Anchor</a>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<a class="anchor" href="/">Anchor</a>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Blockquote -->
		<section class="space-y-4">
			<h2 class="h2">Blockquote</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<blockquote class="blockquote w-full">
						<!-- cspell:disable -->
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita cupiditate dolores dignissimos maiores doloremque fugiat, dolore
						doloribus nisi, repellendus mollitia nostrum, commodi a minus aperiam deleniti. Velit rerum ut tempora!
						<!-- cspell:enable -->
					</blockquote>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<blockquote class="blockquote">Skeleton</blockquote>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Pre -->
		<section class="space-y-4">
			<h2 class="h2">Pre-formatted Text</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<pre class="pre w-full">The quick brown fox jumps over the lazy dog.</pre>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<pre class="pre">The quick brown fox jumps over the lazy dog.</pre>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Code -->
		<section class="space-y-4">
			<h2 class="h2">Code</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="text-center"><code class="code">.myExampleClass</code></div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<code class="code">.myExampleClass</code>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Keyboard -->
		<section class="space-y-4">
			<h2 class="h2">Keyboard</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="text-center">
						<p>Press <kbd class="kbd">⌘ + C</kbd> to copy.</p>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`Press <kbd class="kbd">⌘ + C</kbd> to copy.`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Ins/Del -->
		<section class="space-y-4">
			<h2 class="h2">Insertion / Deletion</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full">
						<del class="del"><s>Always</s> Gonna Give You Up</del>
						<ins class="ins" cite="https://youtu.be/dQw4w9WgXcQ" datetime="10-31-2022">Never Gonna Give You Up</ins>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<del class="del"><s>Always</s> Gonna Give You Up</del>`} />
					<CodeBlock
						language="html"
						code={`<ins class="ins" cite="https://youtu.be/dQw4w9WgXcQ" datetime="10-31-2022">\n\tNever Gonna Give You Up\n</ins>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
