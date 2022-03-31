<script lang="ts">
    import Divider from "$lib/Divider/Divider.svelte";
    // Docs
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['variant', 'string', 'solid | dashed | dotted', 'solid', 'Visual style.'],
            ['weight', 'number', '1, 2, 4, 8', '1', 'Define the thickness.'],
            ['orientation', 'string', 'h | v', 'h', 'Horizontal or vertical.'],
        ],
    };

    $: props = {
        variant: 'solid',
        weight: 1,
        orientation: 'h'
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Dividers</h1>
        <p>Horizontal or vertical rules for sectioning your content.</p>
        <CodeBlock language="javascript" code={`<script>import {Divider} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Sandbox -->
    <section class="space-y-4">
        <div class="space-y-4 lg:space-y-0 lg:grid grid-cols-[2fr,1fr] gap-2">
            <!-- Example -->
			<Card class="space-y-4 flex justify-center items-center">
                <div class="w-[75%] h-[100px] flex justify-evenly items-center">
                    <svelte:component
                        this={Divider}
                        variant={props.variant}
                        weight={props.weight}
                        orientation={props.orientation}
                    />
                </div>
            </Card>
            <!-- Options -->
            <Card class="space-y-4">
                <!-- Variant -->
				<label>
                    <span>Variant</span>
                    <select name="variant" id="variant" bind:value={props.variant}>
                        <option value="solid">Solid</option>
                        <option value="dashed">Dashed</option>
                        <option value="dotted">Dotted</option>
                    </select>
                </label>
                <!-- Weight -->
				<label>
                    <span>Weight</span>
                    <select name="weight" id="weight" bind:value={props.weight}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                    </select>
                </label>
                <!-- Orientation -->
				<label>
                    <span>Orientation</span>
                    <select name="orientation" id="orientation" bind:value={props.orientation}>
                        <option value="h">Horizontal</option>
                        <option value="v">Vertical</option>
                    </select>
                </label>
            </Card>
        </div>
        <CodeBlock language="html" code={`<Divider variant="${props.variant}" weight=${props.weight} orientation=${props.orientation} />`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>
