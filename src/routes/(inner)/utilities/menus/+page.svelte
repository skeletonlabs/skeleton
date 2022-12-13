<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import { menu } from '$lib/utilities/Menu/menu';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Menu',
		description: 'Provides quick context menus when you tap the trigger element.',
		imports: ['menu'],
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/menus'],
		source: 'utilities/Menu',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu/',
		parameters: [
			['<code>menu</code>', 'string', '-', '-', 'Accepts the matching menu ID specified in the data attribute.'],
			['<code>fixed</code>', 'boolean', '-', '-', 'When enabled, a fixed origin position can be specified via a menu class.'],
			['<code>interactive</code>', 'boolean', '-', '-', 'When enabled, keeps the menu open while interacting with the contents.'],
			['<code>state</code>', 'function', '-', '-', 'Provide a callback function for detecting menu open/closed state.']
		],
		keyboard: [
			['<kbd>Enter</kbd>', 'When menu button in focus, toggles the menu open/close.'],
			['<kbd>Space</kbd>', 'When menu button in focus, toggles the menu open/close.'],
			['<kbd>Esc</kbd>', 'Close the open menu.'],
			['<kbd>Tab</kbd>', 'Close the open menu.'],
			['<kbd>↑</kbd>', 'Move upwards to the next item in the menu.'],
			['<kbd>↓</kbd>', 'Move downwards to the next item in the menu.']
		]
	};

	// Local
	const exampleLink = '/utilities/menus';

	function log(v: any): void {
		console.log(`You selected anchor link ${v}`);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
			<!-- Dropdown 1 -->
			<span class="relative">
				<button class="btn btn-ghost-surface" use:menu={{ menu: 'basic' }}>Basic</button>
				<!-- on:toggled={eventLogger} -->
				<div class="card p-4 w-64 shadow-xl" data-menu="basic">
					<p>This menu uses default settings. The position will auto-update depending on the trigger's page location.</p>
				</div>
			</span>
			<!-- Dropdown 2 -->
			<span class="relative">
				<button class="btn btn-ghost-surface" use:menu={{ menu: 'interactive', interactive: true }}>Interactive</button>
				<div class="menu-tl card p-4 w-64 shadow-xl" data-menu="interactive">
					<p>This menu will not close when clicking within the menu body due to <code>interactive: true</code>.</p>
				</div>
			</span>
			<!-- Dropdown 3 -->
			<span class="relative">
				<button class="btn btn-ghost-surface" use:menu={{ menu: 'fixed', fixed: true }}>Fixed</button>
				<div class="menu-tl card p-4 w-64 shadow-xl" data-menu="fixed">
					<p>This menus is fixed to the top-right origin point due to <code>fixed: true</code> and <code>.menu-tl</code>.</p>
				</div>
			</span>
			<!-- Dropdown 4 (note: don't add .menu-container here) -->
			<span>
				<button class="btn btn-ghost-surface" use:menu={{ menu: 'position', fixed: true }}>Position</button>
				<div class="absolute top-2 right-2 card p-4 w-64 shadow-xl !bg-primary-500 text-on-primary-token" data-menu="position">
					This menu is arbitrarily positioned in the top-right corner of the page. We've made it a bright color to catch you attention.
				</div>
			</span>
			<!-- Dropdown 5 -->
			<!-- prettier-ignore -->
			<span class="relative">
				<button class="btn btn-ghost-surface" use:menu={{ menu: 'navigation' }}>Navigation</button>
				<nav class="list-nav card p-4 w-40 shadow-xl" data-menu="navigation">
					<ul>
						<li><a href={exampleLink} on:click={()=>{log(1)}}>Home</a></li>
						<li><a href={exampleLink} on:click={()=>{log(2)}}>About</a></li>
						<li><a href={exampleLink} on:click={()=>{log(3)}}>Blog</a></li>
					</ul>
				</nav>
			</span>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
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
			<!-- Menu Styles -->
			<div class="space-y-4">
				<h2>Menu Styles</h2>
				<p>Use <code>.card</code> classes to alter the appearance of the menu element.</p>
				<CodeBlock language="html" code={`<div class="card p-4" data-menu="example">(menu)</div>`} />
				<p>Pair this with Tailwind utility classes to customize the look and feel.</p>
				<CodeBlock language="html" code={`<div class="card p-2 w-64 shadow-xl" data-menu="example">(menu)</div>`} />
				<p>Combine <code>.list-nav</code>, and <code>.card</code> Tailwind Element classes to create a navigation menu.</p>

				<p>
					When <code>.list-nav</code> is applied, links will be styled automatically. To apply the same styles to other elements, such as
					buttons, use the <code>.option</code> Tailwind Elements class, along with any other desired Tailwind utility classes.
				</p>
				<CodeBlock
					language="html"
					code={`
<nav class="list-nav card p-4 w-64 shadow-xl" data-menu="example">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/">About</a></li>
		<li><a href="/">Blog</a></li>
        <li><button class="option w-full">Logout</button></li>
	</ul>
</nav>
				`}
				/>
			</div>
			<!-- Fixed Origin -->
			<div class="space-y-4">
				<h2>Fixed Origin</h2>
				<p>Use <code>fixed: true</code> and apply the desired origin via the <code>menu-[tl|tr|bl|br]</code> class.</p>
				<CodeBlock language="html" code={`<button use:menu={{ menu: 'example', fixed: true }}>Trigger</button>`} />
				<CodeBlock language="html" code={`<div class="menu-tl hidden" data-menu="example">(menu)</div>`} />
			</div>
			<!-- Interactive Menus -->
			<div class="space-y-4">
				<h2>Interactive Menus</h2>
				<p>
					By default menus will self-close when clicking within the menu body. Set <code>interactive: true</code> to alter this behavior.
				</p>
				<CodeBlock language="html" code={`<button use:menu={{ menu: 'example', interactive: true }}>Trigger</button>`} />
			</div>
			<!-- Custom Positioning -->
			<div class="space-y-4">
				<h2>Custom Positioning</h2>
				<p>Remove the wrapping <code>.relative</code> element, set <code>fixed: true</code>, and position the menu with utility classes.</p>
				<CodeBlock language="html" code={`<button use:menu={{ menu: 'example', fixed: true }}>Trigger</button>`} />
				<CodeBlock language="html" code={`<div class="absolute top-2 right-2" data-menu="example">(menu)</div>`} />
			</div>
			<!-- Menu State -->
			<div class="space-y-4">
				<h2>Menu State Handler</h2>
				<p>You can optionally monitor the open/closed state of a menu using <code>state: stateHandler</code></p>
				<CodeBlock language="html" code={`<button use:menu={{ menu: 'example', state: stateHandler }}>Trigger</button>`} />
				<p>
					In this case, <code>stateHandler</code> is a callback function that will update a local variable. We use the <em>if statement</em>
					to match a particular menu on the page.
				</p>
				<CodeBlock
					language="ts"
					code={`
let menuExample: boolean = false;\n
function stateHandler(response: { menu: string; state: boolean }): void {
	if (response.menu === 'example') menuExample = response.state;
}
				`}
				/>
				<p>
					The <code>menu</code> value will match your unique <code>data-menu</code> ID value, while state will be a boolean value
					representing <em>TRUE</em> for open and <em>FALSE</em> for closed.
				</p>
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
