<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Button from "$lib/Button/Button.svelte";
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

    // Usage
    $: props = {
        label: 'Label',
        value: 50,
        max: 100,
        height: 'h-2',
    };
    $: codeBlock = `<ProgressBar label="${props.label}" value={${props.value}} max={${props.max}} height="${props.height}" />`;

    // Interactions
    function add(): void { props.value += 10; }
    function remove(): void { props.value -= 10; }
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Progress Bar</h1>
        <p>Displays an indicator showing the completion or progress of a task.</p>
        <CodeBlock language="js" code={`<script>import {ProgressBar} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <section class="space-y-4">
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

     <!-- Usage (interactive) -->
     <section>
        <div class="grid grid-cols-[2fr,1fr] gap-4 mb-4">
            <!-- <div class="bg-black/50 rounded-xl flex justify-center items-center p-8"> -->
            <Card class="space-y-4 flex justify-center items-center">
                <div class="w-[75%]">
                    <svelte:component
                        this={ProgressBar}
                        label={props.label}
                        value={props.value}
                        max={props.max}
                        height={props.height}
                    />
                </div>
            </Card>
            <Card class="space-y-4">
                <h4>Options</h4>
                <div class="grid grid-cols-2 gap-4">
                    <Button display="filled" on:click={remove}>Less</Button>
                    <Button display="filled" on:click={add}>More</Button>
                </div>
                <input type="text" bind:value={props.label} placeholder="Label">
                <select name="height" id="height" bind:value={props.height}>
                    <option value={'h-2'}>Height 2</option>
                    <option value={'h-4'}>Height 4</option>
                    <option value={'h-6'}>Height 6</option>
                </select>
            </Card>
        </div>
        <CodeBlock language="js" code={codeBlock}></CodeBlock>
    </section>

    <!-- Usage -->
    <!-- <section class="space-y-4">
        <h2 class="text-2xl font-bold">Usage</h2>
        <CodeBlock language="html" code={`<ProgressBar />`}></CodeBlock>
        <CodeBlock language="html" code={`<ProgressBar label="Indeterminate" />`}></CodeBlock>
        <CodeBlock language="html" code={`<ProgressBar label="Determinate: 50/100" value={50} max={100} />`}></CodeBlock>
        <CodeBlock language="html" code={`<ProgressBar label="Primary" value={50} max={100} color="bg-primary-500" />`}></CodeBlock>
        <CodeBlock language="html" code={`<ProgressBar label="Height 1" value={50} max={100} height="h-1" />`}></CodeBlock>
    </section> -->

    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>

