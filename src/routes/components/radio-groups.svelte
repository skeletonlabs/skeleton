<script lang="ts">
    import { writable } from "svelte/store";

    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Table from "$lib/Table/Table.svelte";
    import RadioGroup from "$lib/RadioGroup/RadioGroup.svelte";
    import RadioItem from "$lib/RadioGroup/RadioItem.svelte";

    const storeJustify = writable(0);
    const storeLayout = writable('horz');

    const tablePropsGroup: any = {
        columns: ['Prop', 'Type', 'Required', 'Description'],
        data: [
            ['selected', 'Writable', 'true', 'Pass any Svelte store to house the selected state.'],
            ['background', 'string', 'false', `Provide a class to set the selected item's background color.`],
            ['color', 'string', 'false', `Provide a class to set the selected items text color.`],
        ],
    };
    const tablePropsItem: any = {
        columns: ['Prop', 'Type', 'Required', 'Description'],
        data: [
            ['value', 'any', 'true', 'When selected, this value will update the selected state store.'],
        ],
    };
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Radio Groups</h1>
		<p>Capture user feedback limited to small set of options.</p>
		<CodeBlock language="js" code={`<script>import {RadioGroup, RadioItem} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
	</header>

    <!-- Sandbox -->
	<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card class="flex-auto space-y-2 text-center">
            <RadioGroup selected={storeJustify}>
                <RadioItem value={0}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H256C273.7 32 288 46.33 288 64C288 81.67 273.7 96 256 96zM256 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H256C273.7 288 288 302.3 288 320C288 337.7 273.7 352 256 352zM0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192zM416 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480z"/></svg>
                </RadioItem>
                <RadioItem value={1}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M320 96H128C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32H320C337.7 32 352 46.33 352 64C352 81.67 337.7 96 320 96zM416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224zM0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480H32C14.33 480 0 465.7 0 448zM320 352H128C110.3 352 96 337.7 96 320C96 302.3 110.3 288 128 288H320C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352z"/></svg>
                </RadioItem>
                <RadioItem value={2}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 96H192C174.3 96 160 81.67 160 64C160 46.33 174.3 32 192 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96zM416 352H192C174.3 352 160 337.7 160 320C160 302.3 174.3 288 192 288H416C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352zM0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192zM416 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480z"/></svg>
                </RadioItem>
            </RadioGroup>
            <p>selected = {$storeJustify}</p>
        </Card>
        <Card class="flex-auto space-y-2 text-center">
            <RadioGroup background="bg-accent-500" color="text-white" selected={storeLayout}>
                <RadioItem value="horz">Horizontal</RadioItem>
                <RadioItem value="vert">Vertical</RadioItem>
            </RadioGroup>
            <p>selected = {$storeLayout}</p>
        </Card>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <CodeBlock language="js" code={`const storeLayout: Writable<string> = writable('horz');`}></CodeBlock>
        <CodeBlock language="html" code={`<RadioGroup selected={storeLayout} background="bg-accent-500" color="text-white">\n\t<RadioItem value="horz">Horizontal</RadioItem>\n\t<RadioItem value="vert">Vertical</RadioItem>\n</RadioGroup>`}></CodeBlock>
        <CodeBlock language="html" code={`<p>{$storeLayout}</p>`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties</h2>
        <h4>Radio Group</h4>
        <Table source="{tablePropsGroup}"></Table>
        <h4>Radio Item</h4>
        <Table source="{tablePropsItem}"></Table>
    </section>
</div>

<style lang="postcss">
    svg { @apply h-[24px] fill-white; }
</style>