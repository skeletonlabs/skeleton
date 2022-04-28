<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import SlideToggle from "$lib/SlideToggle/SlideToggle.svelte";
    import Table from "$lib/Table/Table.svelte";

    let checkedValue: boolean = false;

    // Props
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required' , 'Description'],
        data: [
            ['checked', 'boolean', 'false', 'false' , 'Bind this value to track the checked state.'],
            ['accent', 'class', 'bg-accent-500', 'false', 'Provide a class to set the active color.'],
            ['size', 'string', 'md', 'false', 'Provide a size with sm|md|lg.'],
        ],
    };
</script>

<div class="space-y-8">
    
    <!-- Heading -->
    <heading class="space-y-4">
        <h1>Slide Toggle</h1>
        <p>Add a slide toggle switch with custom colors and sizes to capture input from a user.</p>
        <CodeBlock language="javascript" code={`<script>import {SlideToggle} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </heading>

    <!-- Examples -->
    <section class="space-y-4">

        <h4>Colors</h4>
        <Card class="flex justify-center">
            <div class="grid grid-rows-2 grid-cols-3 gap-4">
                <SlideToggle size="md" accent="bg-warning-400" checked></SlideToggle>
                <SlideToggle size="md" accent="bg-primary-400" checked></SlideToggle>
                <SlideToggle size="md" accent="bg-blue-400" checked></SlideToggle>
                <SlideToggle size="md" accent="bg-orange-400" checked></SlideToggle>
                <SlideToggle size="md" accent="bg-yellow-400" checked></SlideToggle>
                <SlideToggle size="md" accent="bg-purple-400" checked></SlideToggle>
            </div>    
        </Card>

        <h4>Sizes</h4>
        <Card class="flex justify-center space-x-2 flex items-center">
            <SlideToggle size="sm"></SlideToggle>
            <SlideToggle size="md"></SlideToggle>
            <SlideToggle size="lg"></SlideToggle>
        </Card>

        <h4>Label Slot</h4>
        <Card class="flex space-x-2 flex justify-center">
            <SlideToggle size="md" bind:checkedValue>
                <p class="w-[90px]">{checkedValue ? 'Checked' : 'Unchecked'}</p>
            </SlideToggle>    
        </Card>

        <h4>Disabled</h4>
        <Card class="flex justify-center space-x-2 flex items-center">
            <SlideToggle size="lg" disabled></SlideToggle>
        </Card>
        
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="js" code={`<script lang="ts">\n  let checked: boolean = false;\n</\script>`}></CodeBlock>
        <CodeBlock language="html" code={`<SlideToggle bind:checkedValue size="lg" accent="bg-primary-500">{labelText}</SlideToggle>`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>