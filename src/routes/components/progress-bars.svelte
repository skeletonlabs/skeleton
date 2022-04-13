<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/Table/Table.svelte';
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import ProgressBar from "$lib/Progress/ProgressBar.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['label', 'string', '-', 'false', 'Set the label text.'],
            ['value', 'number', '-', 'false', 'Specifies the amount completed.'],
            ['max', 'number', '10', 'false', 'Maximum amount the bar represents.'],
            ['color', 'string', 'bg-accent-500', 'false', 'Provide a class to set background color.'],
            ['height', 'string', 'h-2', 'false', 'Provide a class to set height.'],
        ],
    };

    // Usage
    $: props = {
        determinate: true,
        label: 'Progress Bar',
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
        <p>Displays an indicator showing the progress or completion of a task.</p>
        <CodeBlock language="js" code={`<script>import {ProgressBar} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

     <!-- Sandbox -->
     <section class="space-y-4">
        <div class="space-y-4 xl:space-y-0 xl:grid grid-cols-[2fr,1fr] gap-2">
            <!-- Example -->
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
            <!-- Options -->
            <Card class="space-y-4">
                <!-- Label -->
                <label>
                    <span>Label</span>
                    <input type="text" bind:value={props.label} placeholder="Label">
                </label>
                <!-- Value -->
                <div>
                    <legend>Value</legend>
                    <div class="mt-2 space-y-2">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" checked name="radio-display" bind:group={props.determinate} value={true} />
                                <p class="ml-2">Determinate</p>
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" name="radio-display" bind:group={props.determinate} value={false} />
                                <p class="ml-2">Indeterminate (no value)</p>
                            </label>
                        </div>
                    </div>
                </div>
                <!-- Amount -->
                {#if props.determinate}
                    <div class="flex items-center space-x-4">
                        <input type="range" id="amount" name="amount" min="0" max={props.max} step="10" bind:value={props.value}>
                        <p class="text-sm w-12">{props.value}%</p>
                    </div>
                {/if}
                <!-- Height -->
                <label>
                    <span>Height</span>
                    <select name="height" id="height" bind:value={props.height}>
                        <option value={'h-2'}>h-2</option>
                        <option value={'h-4'}>h-4</option>
                        <option value={'h-6'}>h-6</option>
                    </select>
                </label>
                <!-- Color -->
                <label>
                    <span>Color</span>
                    <select name="color" id="color" bind:value={props.color}>
                        <option value={'bg-primary-500'}>bg-primary-500</option>
                        <option value={'bg-accent-500'}>bg-accent-500</option>
                        <option value={'bg-warning-500'}>bg-warning-500</option>
                    </select>
                </label>
            </Card>
        </div>
        <CodeBlock language="html" code={`<ProgressBar label="${props.label}" ${props.determinate ? `value={${props.value}}` : ''} max={${props.max}} height="${props.height}" color="${props.color}" />`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>

