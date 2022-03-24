<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import ProgressBar from "$lib/Progress/ProgressBar.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Description'],
        data: [
            ['label', 'string', '-', 'Set the label text.'],
            ['max', 'number', '-', 'Describes the maximum amount the bar represents.'],
            ['value', 'number', '-', 'Specifies the amount completed.'],
            ['color', 'string', 'var(--color-accent-500)', 'Define an RGB color or CSS variable.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Progress Bar</h1>
        <p>Allows you to implement a native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress" target="_blank">HTML Progress</a> element, extended with Skeleton themes.</p>
    </header>

    <!-- Examples -->
    <section class="space-y-4">
        <Card class="space-y-4">
            <ProgressBar value={50} max={100} />
            <ProgressBar label="Indeterminate" />
            <ProgressBar label="Determinate: 0/100" value={0} max={100} />
            <ProgressBar label="Determinate: 25/100" value={25} max={100} />
        </Card>
        <h4>Coloring</h4>
        <Card class="space-y-4">
            <ProgressBar label="CSS Variable: `var(--color-primary-500)`" value={50} max={100} color="var(--color-primary-500)" />
            <ProgressBar label="RGB Value: `255 255 255`" value={75} max={100} color="255 255 255" />
        </Card>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Usage</h2>
        <CodeBlock language="js" code={`<script>import {ProgressBar} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
        <CodeBlock language="html" code={`<ProgressBar />`}></CodeBlock>
        <CodeBlock language="html" code={`<ProgressBar label="Indeterminate" />`}></CodeBlock>
        <CodeBlock language="html" code={`<ProgressBar label="Determinate: 25/100" value={25} max={100} />`}></CodeBlock>
        <CodeBlock language="html" code={`<ProgressBar label="CSS Variable: primary" value={50} max={100} color="var(--color-primary-500)" />`}></CodeBlock>
        <CodeBlock language="html" code={`<ProgressBar label="RGB Value: White" value={75} max={100} color="255 255 255" />`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>
