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

    // Usage
    $: props = {
        determinate: true,
        label: 'Label',
        value: 50,
        max: 100,
        height: 'h-2',
        color: 'bg-accent-500',
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Progress Bar</h1>
        <p>Displays an indicator showing the completion or progress of a task.</p>
        <CodeBlock language="js" code={`<script>import {ProgressBar} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

     <!-- Usage -->
     <section>
        <div class="grid grid-cols-[2fr,1fr] gap-4 mb-4">
            <!-- <div class="bg-black/50 rounded-xl flex justify-center items-center p-8"> -->
            <Card class="space-y-4 flex justify-center items-center">
                <div class="w-[75%]">
                    <svelte:component
                        this={ProgressBar}
                        label={props.label}
                        value={props.determinate ? props.value : undefined}
                        max={props.max}
                        height={props.height}
                        color={props.color}
                    />
                </div>
            </Card>
            <Card class="space-y-4">
                <h4>Options</h4>
                <select name="determinate" id="determinate" bind:value={props.determinate}>
                    <option value={true}>Determinate</option>
                    <option value={false}>Indeterminate</option>
                </select>
                {#if props.determinate}
                <div class="flex space-x-4">
                    <input type="range" id="volume" name="volume" min="0" max={props.max} step="10" bind:value={props.value}>
                    <p class="text-sm w-12">{props.value}%</p>
                </div>
                {/if}
                <input type="text" bind:value={props.label} placeholder="Label">
                <select name="height" id="height" bind:value={props.height}>
                    <option value={'h-2'}>Height 2</option>
                    <option value={'h-4'}>Height 4</option>
                    <option value={'h-6'}>Height 6</option>
                </select>
                <select name="color" id="color" bind:value={props.color}>
                    <option value={'bg-accent-500'}>Color Accent</option>
                    <option value={'bg-primary-500'}>Color Primary</option>
                    <option value={'bg-warning-500'}>Color Warning</option>
                </select>
            </Card>
        </div>
        <CodeBlock language="html" code={`<ProgressBar label="${props.label}" value={${props.determinate ? props.value : undefined}} max={${props.max}} height="${props.height}" color="${props.color}" />`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>

