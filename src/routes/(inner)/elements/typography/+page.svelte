<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';

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
		<!-- Opt-In -->
		<section class="card variant-ghost-warning p-4 space-y-4">
			<div class="flex items-center space-x-2">
				<h2 class="h2">Opt-In Typography</h2>
				<span class="badge variant-filled-warning">New in v1.5+</span>
			</div>
			<p>Please review the new changes for Skeleton's typography system.</p>
			<Accordion autocollapse>
				<AccordionItem open>
					<svelte:fragment slot="lead"><i class="fa-solid fa-square-check text-xl w-6 text-center" /></svelte:fragment>
					<svelte:fragment slot="summary">
						<h3 class="h3" data-toc-ignore>What does opt-in mean?</h3>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<p>
							Starting Skeleton <u>v1.5+</u> we've introduced a new opt-in typography system that will replace the on-by-default system of prior
							versions. This allows you to choose which elements receive Skeleton's typography via utility classes, similar to Skeleton's form
							styles.
						</p>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-square-check text-xl w-6 text-center" /></svelte:fragment>
					<svelte:fragment slot="summary">
						<h3 class="h3" data-toc-ignore>Simplified CSS Selectors</h3>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<!-- prettier-ignore -->
						<p>The opt-in utility class approach introduces much simpler CSS selectors for each element. We no longer have to maintain <code class="code">.unstyled</code> and <code class="code">.prose</code> exemptions. This makes it much easier for you to target global typography overrides for each particular element in your global stylesheet.
						</p>
						<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
							<div class="space-y-4">
								<p class="font-bold">v1.2.5 and Lower</p>
								<small>Provided via <code class="code">all.css</code>.</small>
								<CodeBlock
									language="css"
									code={`
h1:not(.unstyled):is(:not(.prose *)) {\n\t/* ... */\n}
h2:not(.unstyled):is(:not(.prose *)) {\n\t/* ... */\n}
h3:not(.unstyled):is(:not(.prose *)) {\n\t/* ... */\n}
								`}
								/>
							</div>
							<div class="space-y-4">
								<p class="font-bold">v1.5+</p>
								<small>Provided via <code class="code">skeleton.css</code>.</small>
								<CodeBlock
									language="css"
									code={`
.h1 { /* ... */ }
.h2 { /* ... */ }
.h3 { /* ... */ }
								`}
								/>
							</div>
						</div>
						<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
							<div class="space-y-4">
								<p class="font-bold">v1.2.5 and Lower</p>
								<small>Provided via <code class="code">all.css</code>.</small>
								<CodeBlock
									language="css"
									code={`
a:not(.unstyled):not(.permalink):is(:not(.prose *)):not(.btn):not(.btn-icon):not(.app-bar a):not(.logo-item):not(a.card):not(.list-nav a) {\n\t/* ... */\n}
								`}
								/>
							</div>
							<div class="space-y-4">
								<p class="font-bold">v1.5+</p>
								<small>Provided via <code class="code">skeleton.css</code>.</small>
								<CodeBlock language="css" code={`.anchor { /* ... */ }`} />
							</div>
						</div>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-truck-moving text-xl w-6 text-center" /></svelte:fragment>
					<svelte:fragment slot="summary">
						<h3 class="h3" data-toc-ignore>Migration Guide</h3>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<!-- prettier-ignore -->
						<p>Skeleton strives for backwards compatability, and as such we've provided a simple migration path to allow you to ease into the changes. Open your root layout <code class="code">/src/routes/+layout.svelte</code> and replace the legacy <code class="code">all.css</code> stylesheet with the following.</p>
						<CodeBlock language="js" code={`import '@skeletonlabs/skeleton/styles/skeleton.css';`} />
						<p>You may then begin to appending the respective class per each typographic element as shown on this page.</p>
						<h4 class="h4">Skeleton v2.x+</h4>
						<p>
							In the next major point release Skeleton will drop <code class="code">all.css</code> in favor of
							<code class="code">skeleton.css</code> and allow only the opt-in system. To prepare for this change we recommend migrating as soon
							as possible.
						</p>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</section>
		<hr />
		<!-- Headings -->
		<section class="space-y-4">
			<h2 class="h2">Headings</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="text-center space-y-4">
						<h1 class="h1">Skeleton H1</h1>
						<h2 class="h2" data-toc-ignore>Skeleton H2</h2>
						<h3 class="h3" data-toc-ignore>Skeleton H3</h3>
						<h4 class="h4">Skeleton H4</h4>
						<h5 class="h5">Skeleton H5</h5>
						<h6 class="h6">Skeleton H6</h6>
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

		<hr />

		<!-- Tailwind Typography - Prose -->
		<section class="space-y-4">
			<h2 class="h2">Using the Tailwind Plugin</h2>
			<!-- prettier-ignore -->
			<p>Tailwind provides an <a class="anchor" href="https://tailwindcss.com/docs/typography-plugin" target="_blank" rel="noreferrer">official plugin</a> to automatically style HTML you do not control, such as CMS or blog content. Follow Tailwind's official instructions to install and configure this plugin within your project. You may then <a class="anchor" href="https://tailwindcss.com/docs/typography-plugin#element-modifiers" target="_blank" rel="noreferrer">set or adjust the modifiers for each element</a>. Skeleton provides a few default adaptive theme styles for common prose elements, such as: headings, paragraphs, and anchors. See the instruction provided below.</p>
			<p class="font-bold">Method 1: Inline Utility Classes:</p>
			<CodeBlock language="html" code={`<article class="prose lg:prose-xl prose-code:bg-purple-500"></article>`} />
			<p class="font-bold">Method 2: Global Stylesheet Overrides</p>
			<CodeBlock language="html" code={`<article class="prose lg:prose-xl"></article>`} />
			<CodeBlock
				language="css"
				code={`
/* Set the following in /src/app.postcss */

.prose {
	/* Modifying the H1 tag modifiers */
	@apply prose-h1:text-3xl prose-h1:md:text-5xl;

	/* Modifying the CODE element modifiers */
	@apply prose-code:bg-purple-500;
}
			`}
			/>
			<p>
				When overriding existing styles you may need to use <code class="code">!</code> to set <em>important</em>, such as
				<code class="code">prose-code:!bg-purple-500</code>
			</p>
		</section>
		<hr />
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2 class="h2">Excluding Styles</h2>
				<span class="badge variant-filled-warning">Deprecated</span>
			</div>
			<div class="alert variant-ghost-warning">
				<!-- prettier-ignore -->
				<p>This exemption class is only relevant when using on-by-default typography rather than the opt-in system. This is slated for deprecation and will be dropped in Skeleton v2.x+.</p>
			</div>
			<p>
				Use the <code class="code">.unstyled</code> class to exclude and reset Skeleton's on-by-default typography styles, then apply new styles
				as desired.
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
		</section>
	</svelte:fragment>
</DocsShell>
