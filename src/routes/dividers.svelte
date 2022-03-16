<script lang="ts">
    import Divider from "$lib/Divider/Divider.svelte";
    // Docs
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/_CodeBlock/CodeBlock.svelte';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['weight', 'number', '1, 2, 4, 8', '1', 'Define the thickness.'],
            ['display', 'string', 'solid | dashed | dotted', 'solid', 'Visual display style.'],
            ['orientation', 'string', 'h | v', 'h', 'Horizontal or vertical.'],
        ],
    };
</script>

<div class="space-y-4">

    <h2 class="text-3xl font-bold">Dividers</h2>

    <Card class="space-y-4">
        <h2 class="text-base font-bold">Default</h2>
        <Divider />
        <h2 class="text-base font-bold">Dashed</h2>
        <Divider display="dashed" />
        <h2 class="text-base font-bold">Dotted</h2>
        <Divider display="dotted" />
        <h2 class="text-base font-bold">Weight</h2>
        <Divider weight="{2}" />
        <Divider weight="{4}" />
        <Divider weight="{8}" />
        <h2 class="text-base font-bold">Combined</h2>
        <Divider weight="{4}" display="dashed" />
        <Divider weight="{8}" display="dotted" />
        <h2 class="text-base font-bold">Vertical</h2>
        <div class="h-[100px] flex justify-evenly items-center">
            <div>CONTENT X</div>
            <Divider orientation="v" />
            <div>CONTENT Y</div>
        </div>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h3 class="text-2xl font-bold">Usage</h3>
        <CodeBlock
            language="html"
            code={`<script>import {divider} from '@brainandbones/skeleton';</\script>\n\n<Divider weight={4} display="dashed" />`}
        ></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h3 class="text-2xl font-bold">Properties</h3>
        <Table source="{tableProps}"></Table>
    </section>

</div>
