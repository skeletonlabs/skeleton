<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import SlideToggle from "$lib/SlideToggle/SlideToggle.svelte";
    import DataTable from "$lib/Table/DataTable.svelte";

    let checkedValue: boolean = false;

    // Props
    const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Required' , 'Description'],
        source: [
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
        <CodeBlock language="javascript" code={`import { SlideToggle } from '@brainandbones/skeleton';`}></CodeBlock>
    </heading>

    <!-- Examples -->
    <section class="space-y-4">
        <h4>Colors</h4>
        <Card class="flex justify-center">
            <div class="grid grid-cols-3 gap-4">
                <SlideToggle size="md" accent="bg-primary-400" checked></SlideToggle>
                <SlideToggle size="md" accent="bg-warning-400" checked></SlideToggle>
                <SlideToggle size="md" accent="bg-accent-400" checked></SlideToggle>
                <SlideToggle size="md" accent="bg-blue-400" checked></SlideToggle>
                <SlideToggle size="md" accent="bg-orange-400" checked></SlideToggle>
                <SlideToggle size="md" accent="bg-yellow-400" checked></SlideToggle>
            </div>    
        </Card>
        <h4>Sizes</h4>
        <Card>
            <div class="flex justify-center items-center space-x-4">
                <SlideToggle size="sm"></SlideToggle>
                <SlideToggle size="md"></SlideToggle>
                <SlideToggle size="lg"></SlideToggle>
            </div>
        </Card>
        <h4>Label Slot</h4>
        <Card class="text-center">
            <SlideToggle size="md" bind:checked={checkedValue}>
                <p class="w-[90px]">{checkedValue ? 'Checked' : 'Unchecked'}</p>
            </SlideToggle>    
        </Card>
        <h4>Disabled</h4>
        <Card class="text-center">
            <SlideToggle size="lg" disabled></SlideToggle>
        </Card>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="typescript" code={`let myValue: boolean = false;`}></CodeBlock>
        <CodeBlock language="html" code={`<SlideToggle bind:checked={myValue} size="lg" accent="bg-primary-500">{labelText}</SlideToggle>`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <DataTable headings="{tableProps.headings}" source="{tableProps.source}"></DataTable>
    </section>

</div>