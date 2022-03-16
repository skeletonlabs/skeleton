<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Table from "$lib/_Table/Table.svelte";
    import CodeBlock from "$lib/_CodeBlock/CodeBlock.svelte";

    const codeHtml: string = `<div>\n\t<p>Hello World</p>\n<div>`;
    const codeCss: string = `a { color: #bada55; }`;
    const codeJs: string = `const foo: string = 'bar';`;

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['language', 'string', 'html|css|js|...', 'plaintext', 'Adds a "language-{x}" class for Highlight, Prism, etc.'],
            ['code', 'string', '-', 'null', 'Takes a <a class="underline" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank">Template Literal</a>. Escape as needed!'],
        ],
    };
</script>

<div class="space-y-4">

    <!-- Header -->
    <header>
        <h2 class="text-3xl font-bold mb-4">Code Blocks</h2>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <!-- HTML -->
        <section>
            <h2 class="text-base font-bold mb-4">HTML</h2>
            <CodeBlock language="html" code={codeHtml}></CodeBlock>
        </section>
        <!-- CSS -->
        <section>
            <h2 class="text-base font-bold mb-4">CSS</h2>
            <CodeBlock language="css" code={codeCss}></CodeBlock>
        </section>
        <!-- Typescript -->
        <section>
            <h2 class="text-base font-bold mb-4">Typescript</h2>
            <CodeBlock language="typescript" code={codeJs}></CodeBlock>
        </section>
    </Card>

    <!-- Properties -->
    <h3 class="text-2xl font-bold my-4">Properties</h3>
    <Table source="{tableProps}"></Table>

</div>