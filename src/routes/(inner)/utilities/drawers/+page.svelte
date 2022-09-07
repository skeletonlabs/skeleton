<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import { Button, Card, DataTable, Drawer } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

	// Drawer Example
	const storeDrawer: Writable<boolean> = writable(false);
	let position: string = 'left';
	function trigger(p: string): void {
		position = p;
		setTimeout(() => {
			storeDrawer.set(true);
		}, 100);
	}

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Required', 'Description'],
		source: [
			['open', 'Writable(boolean)', 'writable(false)', 'boolean', '&check;', 'Provide a store to manage visible state.'],
			['position', 'string', 'left', 'left | right | top | bottom', '-', 'Set the anchor position.'],
			['duration', 'number', '150', 'milliseconds', '-', 'Define the Svelte transition animation duration.']
		]
	};
	const tablePropsBackdrop: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['bgBackdrop', 'string', 'bg-surface-400/70 dark:bg-surface-900/70', 'Provide classes to set the backdrop background color'],
			['display', 'string', '-', 'Provide a class to set the display (ex: <code>lg:hidden</code>)'],
			['blur', 'string', 'backdrop-blur-sm', 'Provide a class to set the blur style.']
		]
	};
	const tablePropsDrawer: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['bgDrawer', 'string', 'bg-surface-100 dark:bg-surface-800', 'Provide a class to set the drawer background color.'],
			['border', 'string', '-', 'Provide a class to set border color.'],
			['rounded', 'string', '-', 'Provide a class to set border radius.'],
			['width', 'string', '(based on position)', 'Provide a class to override the width.'],
			['height', 'string', '(based on position)', 'Provide a class to override the height.'],
			['margin', 'string', '-', 'Provide classes to set margins.']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [['default', 'Provide your Drawer content here.']]
	};
	const tableA11y: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['labelledby', 'string', '-', 'Provide an ID of the element labeling the drawer.'],
			['describedby', 'string', '-', 'Provide an ID of the element describing the drawer.']
		]
	};
</script>

<section class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Drawers</h1>
		<p>Displays an overlay panel that attaches to any side of the screen.</p>
		<CodeBlock language="javascript" code={`import { Drawer } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<Card>
		<div class="w-0 h-0">
			<Drawer open={storeDrawer} {position}>
				<div class="w-full h-full flex justify-center items-center">
					<div class="text-center">
						<h4>Drawer: <span class="capitalize">{position}</span></h4>
						<p>Tap outside the drawer to close.</p>
					</div>
				</div>
			</Drawer>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[600px] mx-auto">
			<Button
				variant="ghost-primary"
				on:click={() => {
					trigger('left');
				}}>Left</Button
			>
			<Button
				variant="ghost-primary"
				on:click={() => {
					trigger('right');
				}}>Right</Button
			>
			<Button
				variant="ghost-primary"
				on:click={() => {
					trigger('top');
				}}>Top</Button
			>
			<Button
				variant="ghost-primary"
				on:click={() => {
					trigger('bottom');
				}}>Bottom</Button
			>
		</div>
	</Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>Create a <a href="https://svelte.dev/tutorial/writable-stores" target="_blank">Svelte writable store</a> to manage the state of the drawer.</p>
		<CodeBlock
			language="typescript"
			code={`
import { writable, type Writable } from 'svelte/store';
const storeDrawer: Writable<boolean> = writable(false);
        `.trim()}
		/>
		<p>Implement the Drawer component, passing the store reference. For best results implement in your app's root layout for global scope.</p>
		<CodeBlock
			language="html"
			code={`
<Drawer open={storeDrawer} position="left">
	(contents)
</Drawer>
        `.trim()}
		/>
		<p>Set the store value to <code>true</code> or <code>false</code> to open or close the Drawer.</p>
		<CodeBlock language="typescript" code={`const drawerOpen: any = () => { storeDrawer.set(true) };`} />
		<CodeBlock language="typescript" code={`const drawerClose: any = () => { storeDrawer.set(false) };`} />
		<p>Implement the trigger methods on any interactive element. Note that you can always close the Drawer by tapping the backdrop or pressing <em>ESC</em> on your keyboard.</p>
		<CodeBlock language="html" code={`<Button variant="filled-primary" on:click={drawerOpen}>Open</Button>`} />
		<CodeBlock language="html" code={`<Button variant="filled-primary" on:click={drawerClose}>Close</Button>`} />
		<h2>Pairing with App Shell</h2>
		<p>Place the Drawer above and outside the App Shell in your root layout. This will prevent content shifting as the drawer opens.</p>
		<CodeBlock
			language="html"
			code={`
<Drawer></Drawer>
<AppShell></AppShell>
		`.trim()}
		/>
	</section>
	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
		<h4>Backdrop</h4>
		<DataTable headings={tablePropsBackdrop.headings} source={tablePropsBackdrop.source} />
		<h4>Drawer</h4>
		<DataTable headings={tablePropsDrawer.headings} source={tablePropsDrawer.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-center">
			<h2>Accessibility</h2>
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/" target="_blank">ARIA Guidelines</a>
		</div>
		<DataTable headings={tableA11y.headings} source={tableA11y.source} />
	</section>
</section>
