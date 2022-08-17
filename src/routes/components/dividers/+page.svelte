<script lang="ts">
    import { writable, type Writable } from "svelte/store";

    import Card from "$lib/Card/Card.svelte";
    import DataTable from "$lib/Table/DataTable.svelte";
    import RadioGroup from "$lib/Radio/RadioGroup.svelte";
    import RadioItem from "$lib/Radio/RadioItem.svelte";
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Divider from "$lib/Divider/Divider.svelte";

    const storeVariant: Writable<string> = writable('solid');
    const storeWeight: Writable<number> = writable(2);
    const storeOrientation: Writable<string> = writable('h');

    const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
        source: [
            ['variant', 'string', 'solid', 'solid | dashed | dotted', 'Defines the visual display styling.'],
            ['weight', 'number', '1', '1 | 2 | 4 | 8', 'Defines the thickness of the divider.'],
            ['orientation', 'string', 'h', 'h | v', 'Switches between horizontal/vertical layout.'],
        ],
    };

    $: props = {
        variant: $storeVariant,
        weight: $storeWeight,
        orientation: $storeOrientation
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Dividers</h1>
        <p>Horizontal or vertical rules for sectioning your content.</p>
        <CodeBlock language="javascript" code={`import { Divider } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Sandbox -->
    <section class="space-y-4">
        <div class="space-y-4 xl:space-y-0 xl:grid grid-cols-[2fr,1fr] gap-2">
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
                <div>
                    <legend>Variant</legend>
                    <RadioGroup selected={storeVariant} background="bg-accent-500" color="text-white" width="w-full">
                        <RadioItem value="solid">Solid</RadioItem>
                        <RadioItem value="dashed">Dashed</RadioItem>
                        <RadioItem value="dotted">Dotted</RadioItem>
                    </RadioGroup>
                </div>
                <!-- Weight -->
                <div>
                    <legend>Weight</legend>
                    <RadioGroup selected={storeWeight} background="bg-accent-500" color="text-white" width="w-full">
                        <RadioItem value={1}>1</RadioItem>
                        <RadioItem value={2}>2</RadioItem>
                        <RadioItem value={4}>4</RadioItem>
                        <RadioItem value={8}>8</RadioItem>
                    </RadioGroup>
                </div>
                <!-- Orientation -->
                <div>
                    <legend>Orientation</legend>
                    <RadioGroup selected={storeOrientation} background="bg-accent-500" color="text-white" width="w-full">
                        <RadioItem value="h">Horizontal</RadioItem>
                        <RadioItem value="v">Vertical</RadioItem>
                    </RadioGroup>
                </div>
            </Card>
        </div>
        <CodeBlock language="html" code={`<Divider variant="${props.variant}" weight={${props.weight}} orientation="${props.orientation}" />`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <DataTable headings="{tableProps.headings}" source="{tableProps.source}"></DataTable>
    </section>

    <!-- Accessibility -->
    <section class="space-y-4">
        <h2>Accessibility</h2>
        <p>Uses a horizontal rule <code>hr</code> tag, which has an inherit <code>role="seperator"</code>.</p>
    </section>

</div>
