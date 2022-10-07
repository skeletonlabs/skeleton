<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Code Blocks',
		description: 'Displays pre-formatted source code, with optional support for <a href="https://highlightjs.org/" target="_blank">Highlight.js</a> syntax highlighting.',
		imports: ['CodeBlock'],
		stylesheets: ['highlight-js'],
		source: 'utilities/CodeBlock',
		dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }]
	};
	const properties: DocsShellTable[] = [
		{
			label: 'Settings',
			headings: ['Prop', 'Type', 'Values', 'Default', 'Description'],
			source: [
				[
					'<code>language</code>',
					'string',
					'<a href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md" target="_blank">Language Alias</a>',
					'plaintext',
					'Sets a language alias for Highlight.js syntax highlighting.'
				],
				[
					'<code>code</code>',
					'string',
					'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank">Template Literal</a>',
					'-',
					'Provide the code to render. Be mindful to escape as needed!'
				]
			]
		},
		{
			label: 'Styling',
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>background</code>', 'string', 'bg-[#141517]', 'Provided classes to set the background color.'],
				['<code>text</code>', 'string', 'text-sm', 'Provided classes to set the text size.'],
				['<code>color</code>', 'string', 'text-white', 'Provided classes to set the text color.'],
				['<code>rounded</code>', 'string', 'rounded-lg', 'Provided classes to set the border radius.'],
				['<code>buttonCopy</code>', 'string', 'btn btn-sm bg-white/5 hover:bg-white/10', 'Provided classes to set the button styles.']
			]
		}
	];
	const classes: DocsShellTable[] = [
		{
			description: 'Coming soon.'
			// headings: ['Selector', 'Description'],
			// source: [
			// 	['<code>.foo</code>', '...'],
			// 	['<code>.bar</code>', '...']
			// ]
		}
	];
</script>

<DocsShell {settings} {properties} {classes}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card card-body grid grid-cols-1 gap-4">
			<CodeBlock language="html" code={`<p>Hello Skeleton<p>`} />
			<CodeBlock language="css" code={`.skeleton { color: #bada55; }`} />
			<CodeBlock language="typescript" code={`const skeleton: string = 'awesome';`} />
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Install Highlight.js</h2>
			<p><a href="https://highlightjs.org/" target="_blank">Highlight.js</a> is a required depedency to enable syntax highlighting.</p>
			<CodeBlock language="console" code={`npm install highlight.js`} />
		</section>
		<section class="space-y-4">
			<h2>Configure Your Project</h2>
			<p>Apply the following changes to your app's root component (ex: <code>/src/routes/+layout.svelte</code> for SvelteKit).</p>
			<CodeBlock language="typescript" code={`import hljs from 'highlight.js';`} />
			<p>
				Import any <a href="https://github.com/highlightjs/highlight.js/tree/main/src/styles" target="_blank">Highlight.js CSS theme</a> of your choice. Skeleton has provided our custom theme near the
				top of this page.
			</p>
			<CodeBlock language="typescript" code={`import 'highlight.js/styles/github-dark.css';`} />
			<p>Finally, import the CodeBlock's writable store and pass a referenced to Highlight.js.</p>
			<CodeBlock language="typescript" code={`import { storeHighlightJs } from '@brainandbones/skeleton';\n\nstoreHighlightJs.set(hljs);`} />
		</section>
		<section class="space-y-4">
			<h2>Create a Code Block</h2>
			<p>
				Syntax highlighting will appear when a valid <a href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md" target="_blank">language alias</a> is provided to the
				CodeBlock's
				<code>language</code> prop.
			</p>
			<CodeBlock code={'<CodeBlock language="html" code={`<div>This is meta</div>`}></CodeBlock>'} />
		</section>
		<section class="space-y-4">
			<h2>Accessibility</h2>
			<p>
				Uses <code>pre-wrap</code> by default to support keyboard-only navigation. Be mindful of color contrast ratios when customizing the design of this component.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
