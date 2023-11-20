<script lang="ts">
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	import sveldCodeBlock from '@skeletonlabs/skeleton/utilities/CodeBlock/CodeBlock.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Code Blocks',
		description:
			'Displays pre-formatted source code, with optional support for <a href="https://highlightjs.org/" target="_blank" rel="noreferrer">Highlight.js</a> syntax highlighting.',
		imports: ['CodeBlock'],
		stylesheets: ['highlight-js'],
		source: 'packages/skeleton/src/lib/utilities/CodeBlock',
		components: [{ sveld: sveldCodeBlock }],
		dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="w-full space-y-4">
					<CodeBlock language="html" code={`<div>This is meta</div>`} />
					<CodeBlock language="css" code={`.skeleton { color: #bada55; }`} />
					<CodeBlock language="ts" code={`const skeleton: string = 'awesome';`} />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="html" code={`<CodeBlock language="html" code={\`<div>This is meta</div>\`}></CodeBlock>`} />
				<CodeBlock language="html" code={`<CodeBlock language="css" code={\`.skeleton { color: #bada55; }\`}></CodeBlock>`} />
				<CodeBlock language="html" code={`<CodeBlock language="ts" code={\`const skeleton: string = 'awesome';\`}></CodeBlock>`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2 class="h2">Install Highlight.js</h2>
			<p>
				<a class="anchor" href="https://highlightjs.org/" target="_blank" rel="noreferrer">Highlight.js</a> is a required dependency to enable
				syntax highlighting.
			</p>
			<CodeBlock language="shell" code={`npm install highlight.js`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Configure Your Project</h2>
			<p>
				To reduce your bundle size, we'll only import and register select languages for (ex: HTML, CSS, JS, TS). Please refer to the
				<a href="https://highlightjs.org/#usage" class="anchor" target="_blank">Highlight.js usage guide</a> for more instruction.
			</p>
			<CodeBlock
				language="ts"
				code={`
import hljs from 'highlight.js/lib/core';\n
// Import each language module you require
import xml from 'highlight.js/lib/languages/xml'; // for HTML
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import shell from 'highlight.js/lib/languages/shell';\n
// Register each imported language module
hljs.registerLanguage('xml', xml); // for HTML
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('shell', shell);
			`}
			/>
			<p>
				Import any <a
					class="anchor"
					href="https://github.com/highlightjs/highlight.js/tree/main/src/styles"
					target="_blank"
					rel="noreferrer">Highlight.js CSS theme</a
				> of your choice.
			</p>
			<CodeBlock language="ts" code={`import 'highlight.js/styles/github-dark.css';`} />
			<p>Finally, import the CodeBlock's writable store and pass a referenced to Highlight.js.</p>
			<CodeBlock language="ts" code={`import { storeHighlightJs } from '@skeletonlabs/skeleton';\n\nstoreHighlightJs.set(hljs);`} />
			<p>
				If you are using <a class="anchor" href="/docs/purgecss" target="_blank">PurgeCSS</a>, safelist the imported classes in
				<code class="code">vite.config.ts</code> so that they will not be removed during the build.
			</p>
			<CodeBlock
				language="ts"
				code={`
import { purgeCss } from 'vite-plugin-tailwind-purgecss';\n
const config: UserConfig = {
	plugins: [
		sveltekit(),
		purgeCss({
			safelist: {
				// any selectors that begin with "hljs-" will not be purged
				greedy: [/^hljs-/],
			},
		}),
	],
};
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Line Numbers</h2>
			<!-- prettier-ignore -->
			<p>
				Adding the <code class="code">lineNumbers</code> property will add line numbers to the displayed code. Supports up to 1000 lines of code.
			</p>
			<CodeBlock lineNumbers language="html" code={`<p>\n\tThe quick brown fox jumped over the lazy dog.\n</p>`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Language</h2>
			<!-- prettier-ignore -->
			<p>
				Syntax highlighting will appear when a valid <a class="anchor" href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md" target="_blank" rel="noreferrer">language alias</a> is provided to the Code Block's <code class="code">language</code> property. For common web languages we recommend the shorthand values: <code class="code">html</code>, <code class="code">css</code>, <code class="code">js</code>, <code class="code">ts</code>, and <code class="code">shell</code>.
			</p>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Accessibility</h2>
			<p>
				Uses <code class="code">pre-wrap</code> by default to support keyboard-only navigation. Please be mindful of color contrast ratios when
				customizing the design of your Code Block components.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
