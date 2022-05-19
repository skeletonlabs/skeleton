<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Table from "$lib/Table/Table.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";

    const codeHtml: string = `<div>\n\t<p>Hello World</p>\n<div>`;
    const codeCss: string = `a { color: #bada55; }`;
    const codeJs: string = `const foo: string = 'bar';`;

    const codeUsage: string = `
// Implement in root scope, such as __layout.svelte
import { onMount, afterUpdate } from 'svelte';
import hljs from 'highlight.js'; 
import 'highlight.js/styles/github-dark.css'; // set theme
onMount(hljs.highlightAll); // on load
afterUpdate(hljs.highlightAll); // on route change
    `.trim();

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['language', 'string', 'html | css | js | ...', 'plaintext', 'Your language alias: <a href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md" target="_blank">Highlight.js</a>, <a href="https://prismjs.com/#supported-languages" target="_blank">Prism.js</a>. Sets a "languages-{alias}" class.'],
            ['code', 'string', '-', 'null', 'Takes a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank">Template Literal</a>. Remember to escape as needed.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Code Blocks</h1>
        <p>Display blocks of raw source code on the page.</p>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <!-- HTML -->
        <h4>HTML</h4>
        <CodeBlock language="html" code={codeHtml}></CodeBlock>
        <!-- CSS -->
        <h4>CSS</h4>
        <CodeBlock language="css" code={codeCss}></CodeBlock>
        <!-- Typescript -->
        <h4>Typescript</h4>
        <CodeBlock language="typescript" code={codeJs}></CodeBlock>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="javascript" code={`import {CodeBlock} from '@brainandbones/skeleton';`}></CodeBlock>
        <CodeBlock language="html" code={`<CodeBlock language="html" code={\`<div>Meta</div>\`}></CodeBlock>`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>