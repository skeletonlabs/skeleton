<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import DataTable from "$lib/Table/DataTable.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Button from '$lib/Button/Button.svelte';
    import List from '$lib/List/List.svelte';
    import NavItem from '$lib/List/NavItem.svelte';
    import Menu from '$lib/Menu/Menu.svelte';

    // Tables and Slots
    const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
        source: [
            ['select', 'boolean', 'false', 'true | false', 'When select is true, inner clicks will close the menu.'],
            ['open', 'boolean', 'false', 'true | false', 'Default menu visiblity when the component initilizes.'],
            ['origin', 'string', 'tl (top-left)', 'tl | tr | bl | br', 'Abbreviation describing where the menu content anchors to the trigger element.'],
            ['duration', 'number', '100', 'any', 'Open/close fade animation duration. Setting zero disables animation.'],
            ['disabled', 'boolean', 'false', 'true | false', 'Sets disabled state.'],
        ],
    };
    const tableSlots: any = {
        headings: ['Name', 'Description'],
        source: [
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
                        <NavItem>Item 1</NavItem>
                        <NavItem>Item 2</NavItem>
                    </List>
                </Card>
            </Menu>
            <!-- Select -->
            <Menu select={true} origin="tr">
                <Button slot="trigger" variant="ghost-accent" type="button">Select</Button>
                <Card slot="content" background="bg-surface-300 dark:bg-surface-700" class="w-[200px] p-[0px] shadow-xl overflow-hidden">
                    <List role="nav">
                        <NavItem>Item 1</NavItem>
                        <NavItem>Item 2</NavItem>
                        <NavItem>Item 3</NavItem>
                        <NavItem>Item 4</NavItem>
                        <NavItem>Item 5</NavItem>
                        <NavItem href="/">Navigate</NavItem>
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
            <NavItem href="/">Item 1</NavItem>
            <NavItem href="/">Item 2</NavItem>
            <NavItem href="/">Item 3</NavItem>
        </List>
    </Card>
</Menu>
        `.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
        <DataTable headings="{tableProps.headings}" source="{tableProps.source}"></DataTable>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
        <DataTable headings="{tableSlots.headings}" source="{tableSlots.source}"></DataTable>
	</section>
    
</div>
