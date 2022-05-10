<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";

    import AccordionGroup from '$lib/Accordion/AccordionGroup.svelte';
    import Accordion from '$lib/Accordion/Accordion.svelte';
    

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['name', '-', '-', '-', '...'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['name', '...'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Accordions</h2>
        <p>Accordions are useful for expanding a section to reveal information.</p>
        <CodeBlock language="javascript" code={`<script>import {Accordion} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <AccordionGroup>
            <Accordion>
                <svelte:fragment slot="label">Label</svelte:fragment>
                <svelte:fragment slot="content">This is content</svelte:fragment>
            </Accordion>

            <Accordion>
                <svelte:fragment slot="label">Label</svelte:fragment>
                <svelte:fragment slot="content">This is content</svelte:fragment>
            </Accordion>
        </AccordionGroup>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<div>UsageExample</div>`.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<Table source="{tableProps}"></Table>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<Table source="{tableSlots}"></Table>
	</section>
    
</div>