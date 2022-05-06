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
            ['selected', 'writable', '-', 'true', 'A svelte store to keep track of tab selection.'],
            ['color', 'class', 'border-surface-300 dark:border-surface-700', 'false', 'Provide a border highlight color.'],
            ['text', 'class', '-', 'false', 'Provide a text and icon highlight color.'],
            ['justify', 'string', 'left', 'false', 'Provide left, center for different alignments.'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['lead', 'Provides a leading slot.'],
        ],
    };
    let storeA = writable('A');
    let storeB = writable('A');
    let icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
  <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>`

</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Tabs</h2>
        <p>Use tabs to switch between different views within a page.</p>
        <CodeBlock language="javascript" code={`<script>import {Tab, TabGroup} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <TabGroup text="text-yellow-500" selected={storeA} color="border-yellow-500">
            <Tab value="A">Item A<svelte:fragment slot="lead">{@html icon}</svelte:fragment></Tab>
            <Tab value="B">Item B<svelte:fragment slot="lead">{@html icon}</svelte:fragment></Tab>
            <Tab value="C">Item C<svelte:fragment slot="lead">{@html icon}</svelte:fragment></Tab>
        </TabGroup>

        {#if $storeA == 'A'}
        <h3>Current Tab: A</h3>
        {/if}
        {#if $storeA == 'B'}
        <h3>Current Tab: B</h3>
        {/if}
        {#if $storeA == 'C'}
        <h3>Current Tab: C</h3>
        {/if}
    </Card>

    <Card class="space-y-4">
        <TabGroup justify="center" selected={storeB} color="border-accent-500">
            <Tab value="A">Item A</Tab>
            <Tab value="B">Item B</Tab>
            <Tab value="C">Item C</Tab>
        </TabGroup>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<TabGroup selected={selected} color="border-primary-500 text="text-primary-500">\n    <Tab>The Helm</Tab>\n</TabGroup>`.trim()}></CodeBlock>
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
