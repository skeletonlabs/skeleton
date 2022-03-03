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

<h2 class="text-3xl font-bold mb-4">Dividers</h2>

<Card>
    <h2 class="text-base font-bold mb-4">Default</h2>
    <Divider class="pb-4" />
    <h2 class="text-base font-bold mb-4">Dashed</h2>
    <Divider display="dashed" class="pb-4" />
    <h2 class="text-base font-bold mb-4">Dotted</h2>
    <Divider display="dotted" class="pb-4" />
    <h2 class="text-base font-bold mb-4">Weight</h2>
    <Divider weight="{2}" class="pb-4" />
    <Divider weight="{4}" class="pb-4" />
    <Divider weight="{8}" class="pb-4" />
    <h2 class="text-base font-bold mb-4">Combined</h2>
    <Divider weight="{4}" display="dashed" class="pb-4" />
    <Divider weight="{8}" display="dotted" class="pb-4" />
    <h2 class="text-base font-bold mb-4">Vertical</h2>
    <div class="h-[100px] flex justify-evenly items-center">
        <div>CONTENT X</div>
        <Divider orientation="v" />
        <div>CONTENT Y</div>
    </div>
</Card>

<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">{`import {divider} from '@brainandbones/skeleton';\n\n<Divider weight="{4}" display="dashed" />`}</CodeBlock>

<!-- Properties -->
<h3 class="text-2xl font-bold my-4">Properties</h3>
<Table source="{tableProps}"></Table>
