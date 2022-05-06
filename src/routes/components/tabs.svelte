<script lang="ts">
    import { writable } from 'svelte/store';

    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Tab from "$lib/Tab/Tab.svelte";
    import TabGroup from "$lib/Tab/TabGroup.svelte";

    let selected = writable('a');

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
        <h2>Tabs</h2>
        <p>Describe the component here.</p>
        <CodeBlock language="javascript" code={`<script>import {TabGroup, Tab} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <section class="space-y-4">
        <!-- Left -->
        <Card class="space-y-4">
            <TabGroup {selected}>
                <Tab value="a">Tab A</Tab>
                <Tab value="b">Tab B</Tab>
                <Tab value="c">Tab C</Tab>
            </TabGroup>
            <div>
                {#if $selected === 'a'}<section>Content A</section>{/if}
                {#if $selected === 'b'}<section>Content B</section>{/if}
                {#if $selected === 'c'}<section>Content C</section>{/if}
            </div>
        </Card>
        <!-- Center -->
        <Card class="space-y-4">
            <TabGroup {selected} justify="justify-center" highlight="border-accent-500" color="text-accent-500" >
                <Tab value="a">Tab A</Tab>
                <Tab value="b">Tab B</Tab>
                <Tab value="c">Tab C</Tab>
            </TabGroup>
            <div>
                {#if $selected === 'a'}<section>Content A</section>{/if}
                {#if $selected === 'b'}<section>Content B</section>{/if}
                {#if $selected === 'c'}<section>Content C</section>{/if}
            </div>
        </Card>
        <!-- Right -->
        <Card class="space-y-4">
            <TabGroup {selected} justify="justify-end" highlight="border-warning-500" color="text-warning-500" >
                <Tab value="a">Books</Tab>
                <Tab value="b">Movies</Tab>
                <Tab value="c">Television</Tab>
            </TabGroup>
            <div>
                {#if $selected === 'a'}
                    <section>
                        <h4>Books</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </section>
                {/if}
                {#if $selected === 'b'}
                    <section>
                        <h4>Movies</h4>
                        <p>Nisl nunc mi ipsum faucibus vitae aliquet nec. Ac ut consequat semper viverra nam libero justo laoreet. Nec sagittis aliquam malesuada.</p>
                    </section>
                {/if}
                {#if $selected === 'c'}
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
