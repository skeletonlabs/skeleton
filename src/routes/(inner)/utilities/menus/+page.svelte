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
	const tableDataAttr = {
		headings: ['Name', 'Description'],
		source: [['<code>data-menu="{menuId}"</code>', 'Provide a unique identifier for the menu element. This pairs with <code>menu</code> action param.']]
	};
	const tableActionParams = {
		headings: ['Key', 'Type', 'Required', 'Description'],
		source: [
			['menu', 'string', '&check;', 'Accepts the matching menu ID specified in the data attribute.'],
			['fixed', 'boolean', '-', 'When enabled, a fixed origin position can be specified via a menu class.'],
			['interactive', 'boolean', '-', 'When enabled, keeps the menu open while interacting with the contents.']
		]
	};
	const tableClasses = {
		headings: ['Class', 'Description'],
		source: [
			// ['<code>[data-menu]</code>', 'Automatically applies menu styles.'],
			['<code>.menu-tl</code>', 'Specifies a fixed origin position of top-left.'],
			['<code>.menu-tr</code>', 'Specifies a fixed origin position of top-right.'],
			['<code>.menu-bl</code>', 'Specifies a fixed origin position of bottom-left.'],
			['<code>.menu-br</code>', 'Specifies a fixed origin position of bottom-right.']
		]
	};
	const tableKeyboard = {
		headings: ['Keys', 'Description'],
		source: [
			['<kbd>Enter</kbd>', 'When menu button in focus, toggles the menu open/close.'],
			['<kbd>Space</kbd>', 'When menu button in focus, toggles the menu open/close.'],
			['<kbd>Esc</kbd>', 'Close the open menu.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Menu</h1>
		<p>Provides quick context menus when you tap the trigger element.</p>
		<CodeBlock language="javascript" code={`import { menu } from '@brainandbones/skeleton';`} />
		<CodeBlock language="javascript" code={`// Included in 'all.css' and 'elements.css'\nimport '@brainandbones/skeleton/styles/elements/menus.css';`} />
	</header>

	<!-- Examples -->
	<h2 class="sr-only">Examples</h2>
	<div class="card card-body flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
		<!-- Dropdown 1 -->
		<span class="relative">
			<button class="btn btn-ghost" use:menu={{ menu: 'basic' }}>Basic</button>
			<div class="card card-body w-64 shadow-xl" data-menu="basic">
				<p>This menu uses default settings. The position will auto-update depending on the trigger's page location.</p>
			</div>
		</span>
		<!-- Dropdown 2 -->
		<span class="relative">
			<button class="btn btn-ghost" use:menu={{ menu: 'interactive', interactive: true }}>Interactive</button>
			<div class="menu-tl card card-body w-64 shadow-xl" data-menu="interactive">
				<p>This menu will not close when clicking within the menu body due to <code>interactive: true</code>.</p>
			</div>
		</span>
		<!-- Dropdown 3 -->
		<span class="relative">
			<button class="btn btn-ghost" use:menu={{ menu: 'fixed', fixed: true }}>Fixed</button>
			<div class="menu-tl card card-body w-64 shadow-xl" data-menu="fixed">
				<p>This menus is fixed to the top-right origin point due to <code>fixed: true</code> and <code>.menu-tl</code>.</p>
			</div>
		</span>
		<!-- Dropdown 4 (note: don't add .menu-container here) -->
		<span>
			<button class="btn btn-ghost" use:menu={{ menu: 'position', fixed: true }}>Position</button>
			<div class="absolute top-2 right-2 card p-4 w-64 shadow-xl !bg-primary-500" data-menu="position">
				<p>This menu is arbitrarily positioned in the top-right corner of the page. We've made it a bright color to catch you attention.</p>
			</div>
		</span>
		<!-- Dropdown 5 -->
		<!-- prettier-ignore -->
		<span class="relative">
			<button class="btn btn-ghost" use:menu={{ menu: 'navigation' }}>Navigation</button>
			<nav class="list-nav card p-4 w-40 shadow-xl" data-menu="navigation">
				<ul>
					<li><a href={exampleLink} on:click={()=>{log(1)}}>Home</a></li>
					<li><a href={exampleLink} on:click={()=>{log(2)}}>About</a></li>
					<li><a href={exampleLink} on:click={()=>{log(3)}}>Blog</a></li>
				</ul>
			</nav>
		</span>
	</div>

	<!-- Usage -->
	<section class="space-y-8">
		<div class="space-y-4">
			<h2>Usage</h2>
			<p>Menus make use of both Tailwind Element styles as well as a Svelte Action. Below is a basic example with minimal styles.</p>
			<CodeBlock
				language="html"
				code={`
<!-- Use a wrapping .relative class to confine the menu position -->
<span class="relative">

	<!-- Trigger: apply the 'use:menu' action and supply the unique menu ID -->
	<button use:menu={{ menu: 'example' }}>Trigger</button>

	<!-- Menu: set a matching 'data-menu-[menuId]' attribute -->
	<div data-menu="example">(menu)</div>
	
</span>
			`}
			/>
		</div>
		<hr />
		<!-- Menu Styles -->
		<div class="space-y-4">
			<h3>Menu Styles</h3>
			<p>Use <code>.card</code> classes to alter the appearance of the menu element.</p>
			<CodeBlock language="html" code={`<div class="card card-body" data-menu="example">(menu)</div>`} />
			<p>Pair this with Tailwind utility classes to customize the look and feel.</p>
			<CodeBlock language="html" code={`<div class="card p-2 w-64 shadow-xl" data-menu="example">(menu)</div>`} />
			<p>Combine <code>.list-nav</code>, and <code>.card</code> Tailwind Element classes to create a navigation menu.</p>
			<CodeBlock
				language="html"
				code={`
<nav class="list-nav card p-4 w-64 shadow-xl" data-menu="example">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/">About</a></li>
		<li><a href="/">Blog</a></li>
	</ul>
</nav>
			`}
			/>
		</div>
		<hr />
		<!-- Fixed Origin -->
		<div class="space-y-4">
			<h4>Fixed Origin</h4>
			<p>Use <code>fixed: true</code> and apply the desired origin via the <code>menu-[tl|tr|bl|br]</code> class.</p>
			<CodeBlock language="html" code={`<button use:menu={{ menu: 'example', fixed: true }}>Trigger</button>`} />
			<CodeBlock language="html" code={`<div class="menu-tl hidden" data-menu="example">(menu)</div>`} />
		</div>
		<!-- Interactive Menus -->
		<div class="space-y-4">
			<h4>Interactive Menus</h4>
			<p>By default menus will self-close when clicking within the menu body. Set <code>interactive: true</code> to alter this behavior.</p>
			<CodeBlock language="html" code={`<button use:menu={{ menu: 'example', interactive: true }}>Trigger</button>`} />
		</div>
		<!-- Custom Positioning -->
		<div class="space-y-4">
			<h4>Custom Positioning</h4>
			<p>Remove the wrapping <code>.relative</code> element, set <code>fixed: true</code>, and position the menu with utility classes.</p>
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
			The attribute <code>role="menu"</code> will be applied to the menu automatically. However, please review the
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/menu/" target="_blank">menus guidelines</a> for handling menu bars or menu items.
		</p>
	</section>

	<!-- Keyboard Interactions -->
	<section class="space-y-4">
		<h2>Keyboard Interactions</h2>
		<DataTable headings={tableKeyboard.headings} source={tableKeyboard.source} />
	</section>
</div>
