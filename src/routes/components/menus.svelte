<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Menu from '$lib/Menu/Menu.svelte';
    import Button from '$lib/Button/Button.svelte';
    import List from '$lib/List/List.svelte';
    import ListItem from '$lib/List/ListItem.svelte';

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
        <h2>Menu</h2>
        <p>Quick and interactive popup menus.</p>
        <CodeBlock language="javascript" code={`<script>import {Menu} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="flex justify-center space-y-4">

        <Menu origin="tl" visible={false}>
            <!-- Slot: Trigger -->
            <Button variant="filled-primary" slot="trigger" type="button">Menu</Button>
            <!-- Slot: Content -->
            <Card slot="content" background="bg-surface-600 w-[300px] p-[0px] shadow-xl">
                <List role="nav">
                    <ListItem href="/">Foobar</ListItem>
                    <ListItem href="/">Fizzbuzz</ListItem>
                </List>
            </Card>
        </Menu>
        
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<Menu></Menu>`.trim()}></CodeBlock>
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
