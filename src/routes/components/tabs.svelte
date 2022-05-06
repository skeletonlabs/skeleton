<script lang="ts">
    import { writable } from 'svelte/store';

    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Tab from "$lib/Tab/Tab.svelte";
    import TabGroup from "$lib/Tab/TabGroup.svelte";

    let icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" /><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>`;
    
    // Stores
    let storeOne = writable('a');
    let storeTwo = writable('a');
    let storeThree = writable('a');

    // Props and Slots
    const tablePropsGroup: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['selected', 'writable', '-', 'true', 'A svelte store to keep track of tab selection.'],
            ['justify', 'class', 'justify-start', 'false', 'Provide a class to set the flex justification.'],
            ['highlight', 'class', 'border-primary-500', 'false', 'Provide a class to set the highlighted border color.'],
            ['color', 'class', 'text-primary-500', 'false', 'Provide class to set the label text color'],
        ],
    };
    const tablePropsItem: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['value', 'any', '-', 'true', 'Sets the tab group state value when selected.'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['lead', 'Provides a leading slot.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Tabs</h2>
        <p>Describe the component here.</p>
        <CodeBlock language="javascript" code={`<script>import {TabGroup, Tab} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <section class="space-y-4">
        <!-- Left -->
        <Card class="space-y-4">
            <TabGroup selected={storeOne}>
                <Tab value="a">Tab A</Tab>
                <Tab value="b">Tab B</Tab>
                <Tab value="c">Tab C</Tab>
            </TabGroup>
            <div>
                {#if $storeOne === 'a'}<section>Content A</section>{/if}
                {#if $storeOne === 'b'}<section>Content B</section>{/if}
                {#if $storeOne === 'c'}<section>Content C</section>{/if}
            </div>
        </Card>
        <!-- Center -->
        <h4>Customized</h4>
        <Card class="space-y-4">
            <TabGroup selected={storeTwo} justify="justify-center" highlight="border-accent-500" color="text-accent-500">
                <Tab value="a">Tab A</Tab>
                <Tab value="b">Tab B</Tab>
                <Tab value="c">Tab C</Tab>
            </TabGroup>
            <div>
                {#if $storeTwo === 'a'}<section>Content A</section>{/if}
                {#if $storeTwo === 'b'}<section>Content B</section>{/if}
                {#if $storeTwo === 'c'}<section>Content C</section>{/if}
            </div>
        </Card>
        <!-- Right -->
        <Card class="space-y-4">
            <TabGroup selected={storeThree} justify="justify-end" highlight="border-warning-500" color="text-warning-500">
                <Tab value="a">
                    <svelte:fragment slot="lead">{@html icon}</svelte:fragment>
                    Books
                </Tab>
                <Tab value="b">
                    <svelte:fragment slot="lead">{@html icon}</svelte:fragment>
                    Movies
                </Tab>
                <Tab value="c">
                    <svelte:fragment slot="lead">{@html icon}</svelte:fragment>
                    Television
                </Tab>
            </TabGroup>
            <div>
                {#if $storeThree === 'a'}
                    <section>
                        <h4>Books</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </section>
                {/if}
                {#if $storeThree === 'b'}
                    <section>
                        <h4>Movies</h4>
                        <p>Nisl nunc mi ipsum faucibus vitae aliquet nec. Ac ut consequat semper viverra nam libero justo laoreet. Nec sagittis aliquam malesuada.</p>
                    </section>
                {/if}
                {#if $storeThree === 'c'}
                    <section>
                        <h4>Television</h4>
                        <p>Ut sem viverra aliquet eget sit. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Vulputate enim nulla aliquet porttitor.</p>
                    </section>
                {/if}
            </div>
        </Card>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="js" code={`let storeValue = writable('a');`}></CodeBlock>
        <CodeBlock language="html" code={`
<TabGroup selected={storeValue} justify="justify-center" highlight="border-accent-500" color="text-accent-500">
    <Tab value="a">Tab A</Tab>
    <Tab value="b">Tab B</Tab>
    <Tab value="c">Tab C</Tab>
</TabGroup>
<div>
    {#if $storeTwo === 'a'}<section>Content A</section>{/if}
    {#if $storeTwo === 'b'}<section>Content B</section>{/if}
    {#if $storeTwo === 'c'}<section>Content C</section>{/if}
</div>
        `.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
        <h4>Tab Group</h4>
		<Table source="{tablePropsGroup}"></Table>
        <h4>Tab</h4>
		<Table source="{tablePropsItem}"></Table>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
        <h4>Tab</h4>
		<Table source="{tableSlots}"></Table>
	</section>
    
</div>
