<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Table from "$lib/_Table/Table.svelte";
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

<div class="space-y-4">

    <!-- Header -->
    <header class="space-y-4">
        <h2 class="text-3xl font-bold">Code Blocks</h2>
        <p class="text-base text-surface-400">Display blocks of raw code with optional support for syntax highlighting.</p>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <!-- HTML -->
        <h2 class="text-base font-bold">HTML</h2>
        <CodeBlock language="html" code={codeHtml}></CodeBlock>
        <!-- CSS -->
        <h2 class="text-base font-bold">CSS</h2>
        <CodeBlock language="css" code={codeCss}></CodeBlock>
        <!-- Typescript -->
        <h2 class="text-base font-bold">Typescript</h2>
        <CodeBlock language="typescript" code={codeJs}></CodeBlock>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h3 class="text-2xl font-bold">Usage</h3>
        <CodeBlock language="javascript" code={`<script>import {CodeBlock} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
        <CodeBlock language="html" code={`<CodeBlock language="html" code={\`<div>Meta</div>\`}></CodeBlock>`}></CodeBlock>
    </section>

    <!-- Syntax Highlighting -->
    <section class="space-y-4">
        <h3 class="text-2xl font-bold">Syntax Highlighting</h3>
        <p class="text-base text-surface-400">Syntax highlighting can be enabled by installing either <a href="https://highlightjs.org/" target="_blank">Highlight.js</a> or <a href="https://prismjs.com/" target="_blank">Prism.js</a>. Then, folow the directions below.</p>
        <h2 class="text-base font-bold">Highlight.js</h2>
        <CodeBlock language="typescript" code={codeUsage}></CodeBlock>
        <h2 class="text-base font-bold">Prism.js</h2>
        <CodeBlock language="typescript" code={`...`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h3 class="text-2xl font-bold">Properties</h3>
        <Table source="{tableProps}"></Table>
    </section>

</div>