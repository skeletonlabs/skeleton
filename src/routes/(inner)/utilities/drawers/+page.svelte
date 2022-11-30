<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import Drawer from '$lib/utilities/Drawer/Drawer.svelte';

	// @ts-expect-error sveld import
	import sveldDrawer from '$lib/utilities/Drawer/Drawer.svelte?raw&sveld';

	// Drawer Utils
	import { drawerStore } from '$lib/utilities/Drawer/stores';
	import type { DrawerSettings } from '$lib/utilities/Drawer/types';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Drawers',
		description: 'Displays an overlay panel that attaches to any side of the screen.',
		imports: ['Drawer', 'drawerStore'],
		types: ['DrawerSettings'],
		source: 'utilities/Drawer',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/modalmodal/',
		components: [{ sveld: sveldDrawer }],
		keyboard: [['<kbd>Esc</kbd>', ' Closes the drawer.']]
	};

	function trigger(position: string): void {
		const s: DrawerSettings = { open: true, id: 'demo', position };
		drawerStore.set(s);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="card card-body text-center space-y-4">
			<p>Select a drawer to preview.</p>
			<!-- prettier-ignore -->
			<div class="flex justify-center items-center space-x-4">
				<button class="btn-icon btn-ghost-surface" on:click={() => { trigger('right'); }}>&larr;</button>
				<button class="btn-icon btn-ghost-surface" on:click={() => { trigger('left'); }}>&rarr;</button>
				<button class="btn-icon btn-ghost-surface" on:click={() => { trigger('bottom'); }}>&uarr;</button>
				<button class="btn-icon btn-ghost-surface" on:click={() => { trigger('top'); }}>&darr;</button>
			</div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Import and add a single instance of the Drawer component in your app's root layout. We recommend only adding this <u>ONCE</u> per app
				since it exists in global scope.
			</p>
			<CodeBlock language="html" code={`<Drawer />`} />
		</section>
		<section class="space-y-4">
			<h2>Drawer Store</h2>
			<p>The Drawer Store contains the drawer's current state and settings.</p>
			<CodeBlock language="typescript" code={`import { drawerStore } from '@skeletonlabs/skeleton';`} />
		</section>
		<section class="space-y-4">
			<h2>Open</h2>
			<p>To open the drawer, pass your drawer settings to the drawer store.</p>
			<CodeBlock
				language="typescript"
				code={`
function drawerOpen(): void {
	const settings: DrawerSettings = { open: true };
	drawerStore.set(settings);
}
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Close</h2>
			<p>
				To close the drawer, use the <code>close()</code> method on the store. This will set <code>open</code> to
				<em>false</em>.
			</p>
			<CodeBlock
				language="typescript"
				code={`
function drawerClose(): void {
	drawerStore.close();
}
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Handling Contents</h2>
			<p>You may modify the contents of the drawer by providing an <code>id</code> setting.</p>
			<CodeBlock
				language="typescript"
				code={`
function drawerOpen(): void {
	const settings: DrawerSettings = { open: true, id: 'foo' };
	drawerStore.set(settings);
}
			`}
			/>
			<CodeBlock
				language="html"
				code={`
<Drawer>
	{#if $drawerStore.id === 'foo'}
		(show 'foo' contents)
	{:else if $drawerStore.id === 'bar'}
		(show 'bar' contents)
	{:else}
		(no matching id, show fallback contents)
	{/if}
</Drawer>
			`}
			/>
			<!-- prettier-ignore -->
			<p>
				We <a href="https://github.com/skeletonlabs/skeleton/blob/dev/src/docs/DocsNavigation/DocsDrawer.svelte" target="_blank" rel="noreferrer">use this technique</a> for this documentation site.
			</p>
		</section>
		<section class="space-y-4">
			<h2>Styling</h2>
			<p>
				Use the component prop values to set default styles. However, you may provide valid prop values as a key/value pairs when opening
				the drawer.
			</p>
			<CodeBlock
				language="typescript"
				code={`
function drawerOpenStyled(): void {
	const settings: DrawerSettings = {
		open: true,
		// Override any prop setting
		position: 'right',
		bgBackdrop: 'bg-green-500/70',
		bgDrawer: 'bg-red-500'
		// ...
	};
	drawerStore.set(settings);
}
				`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
