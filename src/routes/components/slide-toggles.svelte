<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import SlideToggle from "$lib/SlideToggle/SlideToggle.svelte";
    import Table from "$lib/Table/Table.svelte";

    // Props
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required' , 'Description'],
        data: [
            ['checked', 'boolean', 'true | false', 'false' , 'Bind this value to the checked state'],
            ['color', 'class', 'bg-accent-500', 'false', 'Provide a class to set the active color.'],
            ['size', 'string', 'sm', 'false', 'Set the size between sm, md or lg'],
        ],
    };

    let offMessage = 'Slide to agree to terms!';
    let onMessage = 'Thanks for agreeing!';
    let checked;

</script>

<div class="space-y-8">
    
    <!-- Heading -->
    <heading class="space-y-4">
        <h1>Toggle Switch</h1>
        <p>Display a slide toggle switch with inner labels, custom colors and- or sizes.</p>
        <CodeBlock language="javascript" code={`<script>import {SlideToggle} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </heading>

    <!-- Examples -->
    <section class="space-y-4">

        <h4>Colors</h4>
        <Card class="flex justify-center space-x-2">
            <SlideToggle checked color="bg-warning-400"></SlideToggle>
            <SlideToggle checked color="bg-primary-400"></SlideToggle>
            <SlideToggle checked color="bg-blue-400"></SlideToggle>
            <SlideToggle checked color="bg-orange-400"></SlideToggle>
            <SlideToggle checked color="bg-yellow-400"></SlideToggle>    
        </Card>

        <h4>Sizes</h4>
        <Card class="flex justify-center space-x-2 flex items-center">

            <SlideToggle size="sm"></SlideToggle>
            <SlideToggle size="md"></SlideToggle>
            <SlideToggle size="lg"></SlideToggle>
        </Card>

        <h4>Label Slot</h4>
        <Card class="flex justify-center space-x-2 flex items-center">
            <SlideToggle size="lg" bind:checked>{checked ? `${onMessage}` : `${offMessage}`}</SlideToggle>
        </Card>
        
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="js" code={`<script>\n  let checked;\n</\script>`}></CodeBlock>
        <CodeBlock language="html" code={`<SlideToggle bind:checked size="lg" color="bg-primary-500">{labelText}</SlideToggle>`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>