<script lang="ts">
	import { DataTable, Card, Button, List, ListItem, Menu } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Tables and Slots
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['select', 'boolean', 'false', 'true | false', 'When enabled, clicks within the menu will close it.'],
			['open', 'boolean', 'false', 'true | false', 'Sets menu visibility.'],
			['origin', 'string', 'auto', 'auto | tl | tr | bl | br', 'Abbreviation describing where the menu content anchors to the trigger element.'],
			['duration', 'number', '100', 'integer', 'Open/close fade animation duration. Setting 0 (zero) disables animation.'],
			['disabled', 'boolean', 'false', 'true | false', 'Sets menu to disabled state.']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [
			['trigger', 'The element that toggles the menu when clicked. Pairs well with a button component.'],
			['content', 'The contents of the menu. Pairs well with styled Card and List.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Menu</h1>
		<p>Quick context menus provided when clicking a trigger element.</p>
		<CodeBlock language="javascript" code={`import { Menu } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<Card body="flex justify-center space-x-4">
		<!-- Default -->
		<Menu>
			<!-- Slot: Trigger -->
			<Button slot="trigger" variant="ghost-primary" type="button">Menu</Button>
			<!-- Slot: Content -->
			<Card slot="content" background="bg-surface-300 dark:bg-surface-700" class="w-[200px] p-[0px] shadow-xl overflow-hidden">
				<List tag="nav">
					<ListItem>Item 1</ListItem>
					<ListItem>Item 2</ListItem>
				</List>
			</Card>
		</Menu>
		<!-- Select -->
		<Menu origin="tr" select={true}>
			<Button slot="trigger" variant="ghost-accent" type="button">Select</Button>
			<Card slot="content" background="bg-surface-300 dark:bg-surface-700" class="w-[200px] p-[0px] shadow-xl overflow-hidden">
				<List tag="nav">
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
	</Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock
			language="html"
			code={`
<Menu select={false} open={false} origin="tl">
    <!-- Slot: Trigger -->
    <Button slot="trigger" variant="ghost-primary" type="button">Menu</Button>
    <!-- Slot: Content -->
    <Card slot="content" background="bg-surface-300 dark:bg-surface-700" class="w-[200px] p-[0px] shadow-xl overflow-hidden">
        <List tag="nav">
            <ListItem href="/">Item 1</ListItem>
            <ListItem href="/">Item 2</ListItem>
            <ListItem href="/">Item 3</ListItem>
        </List>
    </Card>
</Menu>
        `.trim()}
		/>
	</section>

	<!-- Notes -->
	<section class="space-y-4">
		<h3>Auto Origin Positioning</h3>
		<p>
			The menu defaults to <code>origin: "auto"</code>. This will attempt to keep the menu visible on-screen at all times. Specifically on window resize or when the parent element is scrolled.
		</p>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-end">
			<h2>Accessibility</h2>
			<nav class="flex space-x-4">
				<span>ARIA</span>
				<a href="https://www.w3.org/WAI/ARIA/apg/patterns/menu/" target="_blank">Menu</a>
				<a href="https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/" target="_blank">Button</a>
			</nav>
		</div>
		<p>
			See the <a href="/components/list">List component</a> accessibility options if you wish to embed a List within your Menu.
		</p>
	</section>
</div>
