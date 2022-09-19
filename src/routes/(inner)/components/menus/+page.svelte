<script lang="ts">
	import { DataTable, Menu } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Local
	const exampleLink: string = '/components/menus';

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
	<div class="card card-body flex justify-center space-x-4">
		<!-- Default -->
		<Menu>
			<!-- Slot: Trigger -->
			<button slot="trigger" class="btn btn-ghost">Menu</button>
			<!-- Slot: Content -->
			<div slot="content" class="card w-[200px] shadow-xl overflow-hidden">
				<nav class="list-nav">
					<ul>
						<li><a href={exampleLink}>Item 1</a></li>
						<li><a href={exampleLink}>Item 2</a></li>
					</ul>
				</nav>
			</div>
		</Menu>
		<!-- Select -->
		<Menu origin="tr" select={true}>
			<button slot="trigger" class="btn btn-ghost">Select</button>
			<div slot="content" class="card w-[200px] shadow-xl overflow-hidden">
				<nav class="list-nav">
					<ul>
						<li><a href={exampleLink}>Item 1</a></li>
						<li><a href={exampleLink}>Item 2</a></li>
						<li><a href={exampleLink}>Item 3</a></li>
						<li><a href={exampleLink}>Item 4</a></li>
					</ul>
				</nav>
			</div>
		</Menu>
		<!-- Disabled -->
		<Menu disabled>
			<button slot="trigger" class="btn btn-ghost" disabled>Disabled</button>
			<div slot="content"><!-- (will never show) --></div>
		</Menu>
	</div>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock
			language="html"
			code={`
<Menu select={false} open={false} origin="tl">
    <!-- Slot: Trigger -->
    <button slot="trigger" class="btn btn-ghost">Menu</button>
    <!-- Slot: Content -->
    <div slot="content" class="card w-[200px] shadow-xl overflow-hidden">
		<nav class="list-nav">
			<ul>
				<li><a href={exampleLink}>Item 1</a></li>
				<li><a href={exampleLink}>Item 2</a></li>
			</ul>
		</nav>
	</div>
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
