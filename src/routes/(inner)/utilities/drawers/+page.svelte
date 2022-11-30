<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

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
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/',
		components: [{ sveld: sveldDrawer }],
		keyboard: [['<kbd>Esc</kbd>', ' Closes the drawer.']]
	};

	function trigger(position: string): void {
		const s: DrawerSettings = { id: 'demo', position };
		drawerStore.open(s);
	}
	function triggerStyled(): void {
		const s: DrawerSettings = {
			id: 'demo',
			position: 'left',
			bgDrawer: 'bg-primary-500',
			bgBackdrop: 'bg-primary-500/50',
			meta: 'Styled Drawer'
		};
		drawerStore.open(s);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="card card-body text-center space-y-4">
			<p>Select a drawer to preview.</p>
			<!-- prettier-ignore -->
			<div class="flex justify-center items-center space-x-2 sm:space-x-4">
				<button class="btn-icon btn-ghost-surface" on:click={() => { trigger('right'); }}>&larr;</button>
				<button class="btn-icon btn-ghost-surface" on:click={() => { trigger('left'); }}>&rarr;</button>
				<button class="btn-icon btn-ghost-surface" on:click={() => { trigger('bottom'); }}>&uarr;</button>
				<button class="btn-icon btn-ghost-surface" on:click={() => { trigger('top'); }}>&darr;</button>
				<button class="btn btn-ghost-surface" on:click={() => { triggerStyled(); }}>Styled</button>
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
			<p>This contains the drawer's current state and settings.</p>
			<CodeBlock language="typescript" code={`import { drawerStore } from '@skeletonlabs/skeleton';`} />
		</section>
		<section class="space-y-4">
			<h2>Open</h2>
			<p>To open the drawer, use the store's <code>open()</code> method to make the drawer visible.</p>
			<CodeBlock
				language="typescript"
				code={`
function drawerOpen(): void {
	drawerStore.open();
}
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Close</h2>
			<p>To close the drawer, use the store's <code>close()</code> method to hide the drawer.</p>
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
			<p>If you wish to modify the contents of your drawer, set a unique <code>id</code> per drawer instance.</p>
			<CodeBlock
				language="typescript"
				code={`
function drawerOpen(): void {
	const settings: DrawerSettings = { id: 'example-1' };
	drawerStore.open(settings);
}
			`}
			/>
			<!-- prettier-ignore -->
			<p>Then, conditionally update your drawer's default slot content via <code>$drawerStore.id</code>. We <a href="https://github.com/skeletonlabs/skeleton/blob/master/src/docs/DocsNavigation/DocsDrawer.svelte" target="_blank" rel="noreferrer">use this technique</a> for the Skeleton documentation site.</p>
			<CodeBlock
				language="html"
				code={`
<Drawer>
	{#if $drawerStore.id === 'example-1'}
		<p>(show 'example-1' contents)</p>
	{:else if $drawerStore.id === 'example-2'}
		<p>(show 'example-2' contents)</p>
	{:else}
		<p>(fallback contents)</p>
	{/if}
</Drawer>
			`}
			/>
			<p>
				If you need abitrary metadata, use the <code>meta</code> key and pass your custom data. Use <code>$drawerStore.meta</code> to retreive
				this.
			</p>
			<CodeBlock
				language="typescript"
				code={`
function drawerOpen(): void {
	const settings: DrawerSettings = {
		id: 'example-2',
		meta: { foo: 'bar', fizz: 'buzz', age: 40 }
	};
	drawerStore.open(settings);
}
		`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Styling</h2>
			<p>
				In most cases we recommend setting the default styles via the Drawer component props. However, you may override each prop value per
				drawer instance by passing a key/value pair as shown below. See the <em>Props</em> tab near the top of this page for a full list of available
				keys.
			</p>
			<CodeBlock
				language="typescript"
				code={`
function drawerOpenStyled(): void {
	const settings: DrawerSettings = {
		id: 'demo',
		// Provide your prop overrides
		position: 'right',
		bgBackdrop: 'bg-green-500/70',
		bgDrawer: 'bg-red-500'
	};
	drawerStore.open(settings);
}
				`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
