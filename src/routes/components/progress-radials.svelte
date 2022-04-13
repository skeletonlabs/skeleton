<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/Table/Table.svelte";
    import ProgressRadial from "$lib/Progress/ProgressRadial.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['value', 'number', '-', 'false', 'Set the label text.'],
            ['suffix', 'string', '%', 'false', 'Overwrite the percentage sign in the caption.'],
            ['stroke', 'number', '20', 'false', 'Scalable stroke width. Based on default element size of 256px'],
            ['track', 'string', 'stroke-surface-300 dark:stroke-surface-700', 'false', 'Provide a class to set track color.'],
            ['meter', 'string', 'stroke-black dark:stroke-white', 'false', 'Provide a class to set meter color.'],
            ['text', 'string', 'font-bold text-xs sm:text-sm md:text-md lg:text-lg 2xl:text-2xl', 'false', 'Provide a class to set caption text size.'],
        ],
    };

    // Reactive
    $: props = {
        value: 50,
        max: 100,
        step: 10,
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Progress Radial</h1>
        <p>Displays an radial indicator showing the progress or completion of a task.</p>
        <CodeBlock language="js" code={`<script>import {ProgressRadial} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="space-y-8">
        <div class="md:max-w-[50%] lg:max-w-[33%] mx-auto space-y-8">
            <ProgressRadial value={props.value}></ProgressRadial>
            <input type="range" min="0" max={props.max} step={props.step} bind:value={props.value}>
        </div>
    </Card>
    <section class="space-y-4">
        <h4>Indeterminate</h4>
        <div class="grid grid-cols-4 gap-4">
            <Card class="space-y-4">
                <ProgressRadial stroke={20}></ProgressRadial>
            </Card>
            <Card class="space-y-4">
                <ProgressRadial stroke={50} meter="stroke-primary-500" track="stroke-primary-500/20"></ProgressRadial>
            </Card>
            <Card class="space-y-4">
                <ProgressRadial stroke={100} meter="stroke-accent-500" track="stroke-accent-500/20"></ProgressRadial>
            </Card>
            <Card class="space-y-4">
                <ProgressRadial stroke={200} meter="stroke-warning-500" track="stroke-warning-500/20"></ProgressRadial>
            </Card>
        </div>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<ProgressRadial value={50} stroke={20}></ProgressRadial>`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>