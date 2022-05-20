<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Table from "$lib/Table/Table.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['language', 'string', 'html | css | js | ...', 'plaintext', 'Define a language alias: <a href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md" target="_blank">Highlight.js</a>'],
            ['code', 'string', '-', '-', 'Takes a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank">Template Literal</a>. Be sure to escape as needed.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Code Blocks</h1>
        <p>Display blocks of raw source code on the page.</p>
        <CodeBlock language="javascript" code={`import { CodeBlock } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <CodeBlock language="html" code={`<p>Hello Skeleton<p>`}></CodeBlock>
        <CodeBlock language="css" code={`.skeleton { color: #bada55; }`}></CodeBlock>
        <CodeBlock language="typescript" code={`const skeleton: string = 'awesome';`}></CodeBlock>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <p>Codeblocks require <a href="https://highlightjs.org/" target="_blank">Highlight.js</a> to be installed as depedency.</p>
        <h4>Define Highlight.js Theme</h4>
        <p>Add the following to your root <strong>__layout.svelte</strong> component to define a Highlight.js theme.</p>
        <CodeBlock language="js" code={`import 'highlight.js/styles/github-dark.css';`}></CodeBlock>
        <h4>Insert Codeblock</h4>
        <p>Add the following anywhere you want to display a codeblock.</p>
        <CodeBlock language="html" code={'<CodeBlock language="html" code={\`<div>This is meta</div>\`}></CodeBlock>'}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>