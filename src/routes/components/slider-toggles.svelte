<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
import SliderToggle from "$lib/SliderToggle/SliderToggle.svelte";
    import Table from "$lib/Table/Table.svelte";

    // Props
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required' , 'Description'],
        data: [
            ['checked', 'boolean', 'true | false', 'false' , 'Bind this value to the checked state'],
            ['color', 'class', 'bg-accent-500', 'false', 'Provide a class to set the active color.'],
            ['offLabel', 'string', '-', 'false', 'Provide a string for the inner off-label.'],
            ['onLabel', 'string', '-', 'false', 'Provide a string for the inner on-label.'],
            ['textColor', 'string', 'bg-surface-900', 'false', 'Set the color of the inner label text'],
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
        <p>Display a toggle switch with labels and custom colors.</p>
        <CodeBlock language="javascript" code={`<script>import {ToggleSwitch} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </heading>

    <!-- Examples -->
    <section class="space-y-4">
        <Card class="space-y-4">      
            
        </Card>

        <h4>Default</h4>
        <Card class="flex justify-center space-x-2">
            <SliderToggle></SliderToggle>    
        </Card>

        <h4>Custom Colors</h4>
        <Card class="flex justify-center space-x-2">
            <SliderToggle checked color="bg-warning-400"></SliderToggle>
            <SliderToggle checked color="bg-primary-400"></SliderToggle>
            <SliderToggle checked color="bg-blue-400"></SliderToggle>
            <SliderToggle checked color="bg-orange-400"></SliderToggle>
            <SliderToggle checked color="bg-yellow-400"></SliderToggle>    
        </Card>

        <h4>Inner Labels</h4>
        <Card class="flex justify-center space-x-2">
            <SliderToggle onLabel="|" offLabel='O'></SliderToggle>
            <SliderToggle onLabel="ON" offLabel='OFF'></SliderToggle>     
        </Card>

        <h4>Sizes</h4>
        <Card class="flex justify-center space-x-2 flex items-center">
            <SliderToggle size="xs"></SliderToggle>
            <SliderToggle size="sm"></SliderToggle>
            <SliderToggle size="md"></SliderToggle>
            <SliderToggle size="lg"></SliderToggle>
            <SliderToggle size="xl"></SliderToggle>
        </Card>

        <h4>Outer Label (Slot)</h4>
        <Card class="flex justify-center space-x-2 flex items-center">
            <SliderToggle size="lg" bind:checked>{checked ? `${onMessage}` : `${offMessage}`}</SliderToggle>
        </Card>
        

        <h4>Positioning</h4>
        <section class="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
            
        </section>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<SliderToggle size="lg" offLabel="OFF" onLabel="ON" color="bg-primary-500"></SliderToggle>`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>