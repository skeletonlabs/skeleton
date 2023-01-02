<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldCodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Code Blocks',
		description:
			'Displays pre-formatted source code, with optional support for <a href="https://highlightjs.org/" target="_blank" rel="noreferrer">Highlight.js</a> syntax highlighting.',
		imports: ['CodeBlock'],
		stylesheets: ['highlight-js'],
		source: 'utilities/CodeBlock',
		components: [{ sveld: sveldCodeBlock }],
		dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 grid grid-cols-1 gap-4">
			<CodeBlock language="html" code={`<p>Hello Skeleton<p>`} />
			<CodeBlock language="css" code={`.skeleton { color: #bada55; }`} />
			<CodeBlock language="typescript" code={`const skeleton: string = 'awesome';`} />
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Install Highlight.js</h2>
			<p>
				<a href="https://highlightjs.org/" target="_blank" rel="noreferrer">Highlight.js</a> is a required dependency to enable syntax highlighting.
			</p>
			<CodeBlock language="console" code={`npm install highlight.js`} />
		</section>
		<section class="space-y-4">
			<h2>Configure Your Project</h2>
			<p>Apply the following changes to your app's root component (ex: <code>/src/routes/+layout.svelte</code> for SvelteKit).</p>
			<CodeBlock language="typescript" code={`import hljs from 'highlight.js';`} />
			<p>
				Import any <a href="https://github.com/highlightjs/highlight.js/tree/main/src/styles" target="_blank" rel="noreferrer"
					>Highlight.js CSS theme</a
				> of your choice. Skeleton has provided our custom theme near the top of this page.
			</p>
			<CodeBlock language="typescript" code={`import 'highlight.js/styles/github-dark.css';`} />
			<p>Finally, import the CodeBlock's writable store and pass a referenced to Highlight.js.</p>
			<CodeBlock language="typescript" code={`import { storeHighlightJs } from '@skeletonlabs/skeleton';\n\nstoreHighlightJs.set(hljs);`} />
		</section>
		<section class="space-y-4">
			<h2>Create a Code Block</h2>
			<p>
				Syntax highlighting will appear when a valid <a
					href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md"
					target="_blank"
					rel="noreferrer">language alias</a
				>
				is provided to the CodeBlock's
				<code>language</code> prop.
			</p>
			<CodeBlock code={'<CodeBlock language="html" code={`<div>This is meta</div>`}></CodeBlock>'} />
		</section>
		<section class="space-y-4">
			<h2>Accessibility</h2>
			<p>
				Uses <code>pre-wrap</code> by default to support keyboard-only navigation. Be mindful of color contrast ratios when customizing the design
				of this component.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
