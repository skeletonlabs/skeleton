<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import { menu } from '$lib/utilities/Menu/menu';

	// Local
	const exampleLink: string = '/utilities/menus';
	const log = (v: any) => {
		console.log(`You selected anchor link ${v}`);
	};

	// Tables
	const tableDataAttr: any = {
		headings: ['Name', 'Description'],
		source: [['<code>data-menu="{menuId}"</code>', 'Provide a unique identifier for the menu element to link it to the trigger.']]
	};
	const tableActionParams: any = {
		headings: ['Key', 'Type', 'Required', 'Description'],
		source: [
			['menu', 'string', '&check;', 'Accepts the matching menu ID specified in the data attribute.'],
			['fixed', 'boolean', '-', 'When enabled, a fixed origin position can be specified via a class.'],
			['interactive', 'boolean', '-', 'When enabled, allows interaction within the menu without closing it.']
		]
	};
	const tableClasses: any = {
		headings: ['Selector', 'Required', 'Description'],
		source: [
			['<code>[data-menu]</code>', '&check;', 'Automatically applies menu styles.'],
			['<code>.menu-tl</code>', '-', 'Specifies a fixed origin position of top-left.'],
			['<code>.menu-tr</code>', '-', 'Specifies a fixed origin position of top-right.'],
			['<code>.menu-bl</code>', '-', 'Specifies a fixed origin position of bottom-left.'],
			['<code>.menu-br</code>', '-', 'Specifies a fixed origin position of bottom-right.']
		]
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
	<div class="card card-body flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
		<!-- Dropdown 1 -->
		<span class="relative">
			<button class="btn btn-ghost" use:menu={{ menu: 'basic' }}>basic</button>
			<div class="card card-body w-64 shadow-xl" data-menu="basic">
				<p>This menu is uses default settings and will auto-updated the origin based on the button's page position.</p>
			</div>
		</span>
		<!-- Dropdown 2 -->
		<span class="relative">
			<button class="btn btn-ghost" use:menu={{ menu: 'interactive', interactive: true }}>interactive</button>
			<div class="menu-tl card card-body w-64 shadow-xl" data-menu="interactive">
				<p>This menu does not close when clicking the contents due to <code>interactive: false</code>.</p>
			</div>
		</span>
		<!-- Dropdown 3 -->
		<span class="relative">
			<button class="btn btn-ghost" use:menu={{ menu: 'fixed', fixed: true }}>fixed</button>
			<div class="menu-tl card card-body w-64 shadow-xl" data-menu="fixed">
				<p>This menu position will remain fixed no matter what, due to <code>fixed: true</code> and <code>.menu-tl</code>.</p>
			</div>
		</span>
		<!-- Dropdown 4 (note: don't add .menu-container here) -->
		<span>
			<button class="btn btn-ghost" use:menu={{ menu: 'anywhere', fixed: true }}>anywhere</button>
			<div class="absolute top-2 right-2 card p-4 w-64 shadow-xl !bg-primary-500" data-menu="anywhere">
				<p>This menu will appear in an absolute location on the page.</p>
			</div>
		</span>
		<!-- Dropdown 5 -->
		<!-- prettier-ignore -->
		<span class="relative">
			<button class="btn btn-ghost" use:menu={{ menu: 'navigation' }}>navigation</button>
			<nav class="list-nav card p-4 w-64 shadow-xl space-y-4" data-menu="navigation">
				<p>This menu will auto-close when selecting a link and log a value via <code>console.log</code>.</p>
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
			<p>Makes use of both Tailwind Element styles and a Svelte Action.</p>
			<CodeBlock
				language="html"
				code={`
<!-- Use a wrapping .relative class to confine the menu -->
<span class="relative">

	<!-- Trigger: add 'use:menu' and provide a menu ID matching your menu's data attribute -->
	<button use:menu={{ menu: 'example' }}>Trigger</button>

	<!-- Menu: set a matching 'data-menu-[menuId]' attribute -->
	<div data-menu="example">(menu)</div>
	
</span>
			`}
			/>
		</div>
		<hr />
		<!-- Menu Styling -->
		<div class="space-y-4">
			<h4>Menu Element Styling</h4>
			<p>Apply the <code>.card</code> class to provide a card-like appearance.</p>
			<CodeBlock language="html" code={`<div class="menu hidden card" data-menu="example">(menu)</div>`} />
			<p>Pair this with other abitrary classes to fully customize the look and feel.</p>
			<CodeBlock language="html" code={`<div class="menu hidden card p-4 w-64 shadow-xl" data-menu="example">(menu)</div>`} />
			<p>Combine the <code>.menu</code>, <code>.list-nav</code>, and <code>.card</code> Tailwind Element classes to create a navigation menu.</p>
			<CodeBlock
				language="html"
				code={`
<nav class="menu hidden list-nav card p-4 w-64 shadow-xl space-y-4" data-menu="example">
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
		<!-- Fixed Origin -->
		<div class="space-y-4">
			<h4>Fixed Origin</h4>
			<p>Use <code>fixed: true</code> and apply the desired origin via a <code>menu-[tl|tr|bl|br]</code> class.</p>
			<CodeBlock language="html" code={`<button use:menu={{ menu: 'example', fixed: true }}>Trigger</button>`} />
			<CodeBlock language="html" code={`<div class="menu-tl hidden" data-menu="example">(menu)</div>`} />
		</div>
		<!-- Interactive Menus -->
		<div class="space-y-4">
			<h4>Interactive Menus</h4>
			<p>By default menus will self-close when clicking within the menu body. Disable this with <code>interactive: true</code>.</p>
			<CodeBlock language="html" code={`<button use:menu={{ menu: 'example', interactive: true }}>Trigger</button>`} />
		</div>
		<!-- Abitrary Position -->
		<div class="space-y-4">
			<h4>Abitrary Position</h4>
			<p>Remove the wrapping <code>.relative</code> element, set <code>fixed: true</code>, and apply your positioning classes to the menu.</p>
			<CodeBlock language="html" code={`<button use:menu={{ menu: 'example', fixed: true }}>Trigger</button>`} />
			<CodeBlock language="html" code={`<div class="absolute top-2 right-2" data-menu="example">(menu)</div>`} />
		</div>
	</section>

	<!-- Data Attributes -->
	<section class="space-y-4">
		<h2>Data Attributes</h2>
		<DataTable headings={tableDataAttr.headings} source={tableDataAttr.source} />
	</section>

	<!-- Action Params -->
	<section class="space-y-4">
		<h2>Action Params</h2>
		<DataTable headings={tableActionParams.headings} source={tableActionParams.source} />
	</section>

	<!-- Classes -->
	<section class="space-y-4">
		<h2>Classes</h2>
		<DataTable headings={tableClasses.headings} source={tableClasses.source} />
	</section>
</div>
