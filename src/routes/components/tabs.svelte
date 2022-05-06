<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Tab from "$lib/Tab/Tab.svelte";
    import TabGroup from "$lib/Tab/TabGroup.svelte";
    import { writable } from 'svelte/store';

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
    let selected = writable('A');

</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Tabs</h2>
        <p>Describe the component here.</p>
        <CodeBlock language="javascript" code={`<script>import {Tab, TabGroup} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <TabGroup text="text-primary-500" selected={selected} color="border-primary-500">
            <Tab value="A">Item A</Tab>
            <Tab value="B">Item B</Tab>
            <Tab value="C">Item C</Tab>
        </TabGroup>
    </Card>

    <Card class="space-y-4">
        <TabGroup justify="center" text="text-primary-500" selected={selected} color="border-primary-500">
            <Tab value="A">Item A</Tab>
            <Tab value="B">Item B</Tab>
            <Tab value="C">Item C</Tab>
        </TabGroup>
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
