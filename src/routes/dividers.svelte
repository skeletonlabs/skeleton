<script lang="ts">
    import Divider from "$lib/Divider/Divider.svelte";
    // Docs
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['weight', 'number', '1, 2, 4, 8', '1', 'Define the thickness.'],
            ['display', 'string', 'solid | dashed | dotted', 'solid', 'Visual display style.'],
            ['orientation', 'string', 'h | v', 'h', 'Horizontal or vertical.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Dividers</h1>
        <p>Horizontal or vertical rules for sectioning your content.</p>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <h4>Default</h4>
        <Divider />
        <h4>Dashed</h4>
        <Divider display="dashed" />
        <h4>Dotted</h4>
        <Divider display="dotted" />
        <h4>Weight</h4>
        <Divider weight="{2}" />
        <Divider weight="{4}" />
        <Divider weight="{8}" />
        <h4>Combined</h4>
        <Divider weight="{4}" display="dashed" />
        <Divider weight="{8}" display="dotted" />
        <h4>Vertical</h4>
        <div class="h-[100px] flex justify-evenly items-center">
            <div>CONTENT X</div>
            <Divider orientation="v" />
            <div>CONTENT Y</div>
        </div>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Usage</h2>
        <CodeBlock language="html" code={`<script>import {divider} from '@brainandbones/skeleton';</\script>\n\n<Divider weight={4} display="dashed" />`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>
