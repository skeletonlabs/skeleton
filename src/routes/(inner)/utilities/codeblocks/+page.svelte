<script lang="ts">
	import { Card, DataTable } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// prettier-ignore
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Values', 'Default', 'Description'],
		source: [
			[ 'language', 'string', 'html | css | js | ...', 'plaintext', 'Sets a language alias: <a href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md" target="_blank">Highlight.js</a>' ],
			[ 'code', 'string', '-', '-', 'Takes a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank">Template Literal</a>. Be mindful to escape as needed.' ],
			['background', 'string', '(class)', 'bg-neutral-900', 'Provide a CSS class to define the background color.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Code Blocks</h1>
		<p>
			Displays pre-formatted source code, with optional support for <a href="https://highlightjs.org/" target="_blank">Highlight.js</a> syntax highlighting.
		</p>
		<CodeBlock language="javascript" code={`import { CodeBlock } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<Card slotBody="space-y-4">
		<CodeBlock language="html" code={`<p>Hello Skeleton<p>`} />
		<CodeBlock language="css" code={`.skeleton { color: #bada55; }`} />
		<CodeBlock language="typescript" code={`const skeleton: string = 'awesome';`} />
	</Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Setup Highlight.js</h2>
		<p>If you wish to enable syntax highlighting, install <a href="https://highlightjs.org/" target="_blank">Highlight.js</a> as a depedency.</p>
		<CodeBlock language="console" code={`npm install highlight.js`} />
		<p>Add the <u>following three imports</u> to your app's root component (ex: <code>/src/routes/+layout.svelte</code> for SvelteKit).</p>
		<CodeBlock language="typescript" code={`import hljs from 'highlight.js';`} />
		<p>Import any <a href="https://github.com/highlightjs/highlight.js/tree/main/src/styles" target="_blank">Highlight.js CSS theme</a> of your choice.</p>
		<CodeBlock language="typescript" code={`import 'highlight.js/styles/github-dark.css';`} />
		<p>Finally, import the CodeBlock's writable store and pass a referenced to Highlight.js.</p>
		<CodeBlock language="typescript" code={`import { storeHighlightJs } from '@brainandbones/skeleton';\nstoreHighlightJs.set(hljs);`} />
		<p>
			This will trigger highlighting only when a supported <a href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md" target="_blank">language alias</a> is provided to the
			CodeBlock's <code>language</code> prop.
		</p>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h3>Usage</h3>
		<p>Add the following anywhere you wish to display a codeblock.</p>
		<CodeBlock code={'<CodeBlock language="html" code={`<div>This is meta</div>`}></CodeBlock>'} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>
			Uses <code>pre-wrap</code> by default to support keyboard-only navigation. Be mindful of color contrast ratios when customizing theme and background color.
		</p>
	</section>
</div>
