<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import ProgressBar from "$lib/Progress/ProgressBar.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Description'],
        data: [
            ['label', 'string', '-', 'Set the label text.'],
            ['value', 'number', '-', 'Specifies the amount completed.'],
            ['max', 'number', '-', 'Maximum amount the bar represents.'],
            ['color', 'string', 'bg-accent-500', 'Provide a class to set background color.'],
            ['height', 'string', 'h-2', 'Provide a class to set height.'],
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
        <h4>Default</h4>
        <Card class="space-y-4">
            <ProgressBar value={50} max={100} />
        </Card>
        <h4>Labeled</h4>
        <Card class="space-y-4">
            <ProgressBar label="Indeterminate" />
            <ProgressBar label="Determinate: 0%" value={0} max={100} />
            <ProgressBar label="Determinate: 50%" value={50} max={100} />
            <ProgressBar label="Determinate: 100%" value={100} max={100} />
        </Card>
        <h4>Colors</h4>
        <Card class="space-y-4">
            <ProgressBar label="Neutral" value={50} max={100} color="bg-surface-800 dark:bg-surface-50" />
            <ProgressBar label="Primary" value={50} max={100} color="bg-primary-500" />
            <ProgressBar label="Warning" value={50} max={100} color="bg-warning-500" />
        </Card>
        <h4>Height</h4>
        <Card class="space-y-4">
            <ProgressBar label="Height 1" value={50} max={100} height="h-1" />
            <ProgressBar label="Height 10" value={80} max={100} height="h-10" />
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
        <CodeBlock language="html" code={`<ProgressBar label="Height 1" value={50} max={100} height="h-1" />`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>
