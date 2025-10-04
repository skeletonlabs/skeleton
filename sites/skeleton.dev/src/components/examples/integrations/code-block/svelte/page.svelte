<script lang="ts">
	import CodeBlock from './component.svelte';

	// Source Code
	const exampleConsole = `npx sv create my-skeleton-app`;
	const exampleHtml = `<div class="bg-green-500">Hello World</div>`;
	const exampleCss = `.foobar { background: green; }`;
	const exampleJavascript = `const foo = 'bar';`;
</script>

<div class="p-10 space-y-4">
	<CodeBlock code={exampleConsole} />
	<CodeBlock code={exampleHtml} lang="html" />
	<CodeBlock code={exampleCss} lang="css" />
	<CodeBlock code={exampleJavascript} lang="js" />
</div>
