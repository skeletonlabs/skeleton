<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Button from '$lib/Button/Button.svelte';
    import List from '$lib/List/List.svelte';
    import ListItem from '$lib/List/ListItem.svelte';
    import Menu from '$lib/Menu/Menu.svelte';

    // Tables and Slots
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Values', 'Description'],
        data: [
            ['select', 'boolean', 'false', 'true | false', 'When select is true, inner clicks will close the menu.'],
            ['open', 'boolean', 'false', 'true | false', 'Default menu visiblity when the component initilizes.'],
            ['origin', 'string', 'tl (top-left)', 'tl | tr | bl | br', 'Abbreviation describing where the menu content anchors to the trigger element.'],
            ['duration', 'number', '100', 'any', 'Open/close fade animation duration. Setting zero disables animation.'],
            ['disabled', 'boolean', 'false', 'true | false', 'Sets disabled state.'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['trigger', 'The element that toggles the menu when clicked. Works best with a button component.'],
            ['content', 'The contents of the menu. Pairs well with styled Card and ListGroup components.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Menu</h2>
        <p>Quick context menus provided when clicking a trigger element.</p>
        <CodeBlock language="javascript" code={`import { Menu } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card>
        <div class="flex justify-center space-x-4">
            <!-- Default -->
            <Menu>
                <!-- Slot: Trigger -->
                <Button slot="trigger" variant="ghost-primary" type="button">Menu</Button>
                <!-- Slot: Content -->
                <Card slot="content" background="bg-surface-300 dark:bg-surface-700" class="w-[200px] p-[0px] shadow-xl overflow-hidden">
                    <List role="nav">
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                    </List>
                </Card>
            </Menu>
            <!-- Select -->
            <Menu select={true} origin="tr">
                <Button slot="trigger" variant="ghost-accent" type="button">Select</Button>
                <Card slot="content" background="bg-surface-300 dark:bg-surface-700" class="w-[200px] p-[0px] shadow-xl overflow-hidden">
                    <List role="nav">
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 3</ListItem>
                        <ListItem>Item 4</ListItem>
                        <ListItem>Item 5</ListItem>
                        <ListItem href="/">Navigate</ListItem>
                    </List>
                </Card>
            </Menu>
            <!-- Disabled -->
            <Menu disabled>
                <Button slot="trigger" variant="ghost-warning" type="button" disabled>Disabled</Button>
                <div slot="content"><!-- (will never show) --></div>
            </Menu>
        </div>
    </Card>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`
<Menu select={false} open={false} origin="tl">
    <!-- Slot: Trigger -->
    <Button slot="trigger" variant="ghost-primary" type="button">Menu</Button>
    <!-- Slot: Content -->
    <Card slot="content" background="bg-surface-300 dark:bg-surface-700" class="w-[200px] p-[0px] shadow-xl overflow-hidden">
        <List role="nav">
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
        </List>
    </Card>
</Menu>
        `.trim()}></CodeBlock>
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
