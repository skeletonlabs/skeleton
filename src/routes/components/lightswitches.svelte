<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/Table/Table.svelte';
    import LightSwitch from "$lib/LightSwitch/LightSwitch.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Required', 'Description'],
        data: [
            ['origin', 'string', '(class)', 'origin-top-left', 'false', 'Provide a class to define the menu origin.'],
            ['align', 'string', '(class)', 'left-0', 'false', 'Provide a class to define the menu alignment.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Lightswitch</h2>
        <p>Allows users to toggle their preferred theme preference between light/dark/system.</p>
        <CodeBlock language="javascript" code={`<script>import {LightSwitch} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="text-center py-10 overflow-visible">
        <LightSwitch />
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<LightSwitch origin="origin-top-left" align="left-0" />`}></CodeBlock>
    </section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>
</div>
