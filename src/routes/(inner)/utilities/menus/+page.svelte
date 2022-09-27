<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import { menu } from '$lib/utilities/Menu/menu';

	// Local
	const exampleLink: string = '/actions/menus';
	const log = (v: any) => {
		console.log(`You selected anchor link ${v}`);
	};

	// Tables
	const tableClasses: any = {
		headings: ['Name', 'Description'],
		source: [
			['<code>.menu-container</code>', 'Apply to the element wrapping your trigger and menu.'],
			['<code>.menu</code>', 'Apply to your desired menu element.'],
			['<code>.menu-tl</code>', 'Sets the menu origin to top-left.'],
			['<code>.menu-tr</code>', 'Sets the menu origin to top-right.'],
			['<code>.menu-bl</code>', 'Sets the menu origin to bottom-left.'],
			['<code>.menu-br</code>', 'Sets the menu origin to bottom-right.']
		]
	};
	const tableDataAttr: any = {
		headings: ['Name', 'Description'],
		source: [['<code>data-menu-[menuId]</code>', 'Creates a unique identifier on your desired menu element.']]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Menu</h1>
		<p>Styles automatically included in <code>all.css</code> and <code>elements.css</code>. Provides quick context menus when you tap the trigger element.</p>
		<CodeBlock language="javascript" code={`import '@brainandbones/skeleton/styles/elements/menus.css';`} />
		<CodeBlock language="javascript" code={`import { menu } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<h2 class="sr-only">Examples</h2>
	<div class="card card-body flex justify-between">
		<!-- Dropdown 1 -->
		<span class="menu-container">
			<button class="btn btn-ghost" use:menu={{ target: '1' }}>Menu 1</button>
			<div class="menu hidden card card-body w-64 shadow-xl" data-menu-1>
				<p>This menu is uses default settings and will auto-updated the origin based on the button's page position.</p>
			</div>
		</span>
		<!-- Dropdown 2 -->
		<span class="menu-container">
			<button class="btn btn-ghost" use:menu={{ target: '2', fixed: true }}>Menu 2</button>
			<div class="card card-body w-64 shadow-xl menu-tl hidden" data-menu-2>
				<p>This menu position will remain fixed no matter what, due to <code>fixed: true</code> and <code>.menu-tl</code>.</p>
			</div>
		</span>
		<!-- Dropdown 3 -->
		<!-- prettier-ignore -->
		<span class="menu-container">
			<button class="btn btn-ghost" use:menu={{ target: '3' }}>Menu 3</button>
			<nav class="menu hidden list-nav card p-4 w-64 shadow-xl space-y-4" data-menu-3>
				<p>You'll see a <code>console.log</code> message when choosing a navigation link.</p>
				<ul>
					<li><a href={exampleLink} on:click={() => {log(1)}}>Link 1</a></li>
					<li><a href={exampleLink} on:click={() => {log(2)}}>Link 2</a></li>
					<li><a href={exampleLink} on:click={() => {log(3)}}>Link 3</a></li>
				</ul>
			</nav>
		</span>
	</div>

	<!-- Usage -->
	<section class="space-y-8">
		<div class="space-y-4">
			<h2>Usage</h2>
			<p>Makes use of both Tailwind Element and a Skeleton-provided Action.</p>
			<CodeBlock
				language="html"
				code={`
<!-- Create a wrapping element with class .menu-container -->
<span class="menu-container">

	<!-- Trigger: add 'use:menu' and provide a target ID matching your menu's data attribute -->
	<button use:menu={{ target: 'example' }}>Trigger</button>

	<!-- Menu: add .menu and .hidden classes, then set a matching 'data-menu-[targetId]' attribute -->
	<div class="menu hidden" data-menu-example>(menu)</div>
	
</span>
			`}
			/>
		</div>
		<hr />
		<!-- Menu Styling -->
		<div class="space-y-4">
			<h4>Menu Element Styling</h4>
			<p>Apply the <code>.card</code> class to provide a card-like appearance.</p>
			<CodeBlock language="html" code={`<div class="menu hidden card" data-menu-example>(menu)</div>`} />
			<p>Pair this with other abitrary classes to fully customize the look and feel.</p>
			<CodeBlock language="html" code={`<div class="menu hidden card p-4 w-64 shadow-xl" data-menu-example>(menu)</div>`} />
			<p>Combine the <code>.menu</code>, <code>.list-nav</code>, and <code>.card</code> Tailwind Element classes to create a navigation menu.</p>
			<CodeBlock
				language="html"
				code={`
<nav class="menu hidden list-nav card p-4 w-64 shadow-xl space-y-4" data-menu-example>
	<ul>
		<li><a href="/">Link 1</a></li>
		<li><a href="/">Link 2</a></li>
		<li><a href="/">Link 3</a></li>
	</ul>
</nav>
			`}
			/>
		</div>
		<hr />
		<!-- Auto Mode -->
		<div class="space-y-4">
			<h4>Fixed Origin</h4>
			<p>The origin is set automatically by default, however if you wish to apply a fixed origin for your menu, add <code>fixed: true</code> to your action parameters.</p>
			<CodeBlock language="html" code={`<button use:menu={{ target: 'example', fixed: true }}>Trigger</button>`} />
			<p>Then change the menu element class from <code>menu</code> to <code>menu-[tl|tr|bl|br]</code>.</p>
			<CodeBlock language="html" code={`<div class="menu-tl hidden" data-menu-example>(menu)</div>`} />
		</div>
	</section>

	<!-- Classes -->
	<section class="space-y-4">
		<h2>Classes</h2>
		<DataTable headings={tableClasses.headings} source={tableClasses.source} />
	</section>

	<!-- Data Attributes -->
	<section class="space-y-4">
		<h2>Data Attributes</h2>
		<DataTable headings={tableDataAttr.headings} source={tableDataAttr.source} />
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
