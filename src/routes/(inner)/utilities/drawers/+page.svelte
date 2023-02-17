<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

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

	function trigger(position: 'left' | 'top' | 'right' | 'bottom'): void {
		const s: DrawerSettings = { id: 'demo', position };
		drawerStore.open(s);
	}
	function triggerStyled(): void {
		const s: DrawerSettings = {
			id: 'demo',
			// Property Overrides
			position: 'right',
			bgDrawer: 'bg-purple-900 text-white',
			bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
			width: 'w-[280px] md:w-[480px]',
			padding: 'p-4',
			rounded: 'rounded-xl',
			// Metadata
			meta: 'Styled Drawer'
		};
		drawerStore.open(s);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="card p-4 text-center space-y-4">
			<p>Select a drawer option to preview.</p>
			<!-- prettier-ignore -->
			<div class="flex justify-center gap-4">
				<button class="btn-icon variant-filled" on:click={() => { trigger('right'); }}>
					<i class="fa-solid fa-arrow-left"></i>
				</button>
				<button class="btn-icon variant-filled" on:click={() => { trigger('left'); }}>
					<i class="fa-solid fa-arrow-right"></i>
				</button>
				<button class="btn-icon variant-filled" on:click={() => { trigger('bottom'); }}>
					<i class="fa-solid fa-arrow-up"></i>
				</button>
				<button class="btn-icon variant-filled" on:click={() => { trigger('top'); }}>
					<i class="fa-solid fa-arrow-down"></i>
				</button>
				<button class="col-span-2 btn variant-filled" on:click={() => { triggerStyled(); }}>Styled</button>
			</div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- prettier-ignore -->
		<aside class="alert alert-message variant-ghost-warning">
			<p>
				This feature uses a <a href="https://en.wikipedia.org/wiki/Singleton_pattern" target="_blank" rel="noreferrer">Singleton pattern</a>. Meaning you should aim to implement a <u>single instance of the component per project</u>, but it will remain globally scoped
				and reusable via a Svelte writable store. Do not reimplement this component for each route page.
			</p>
		</aside>
		<section class="space-y-4">
			<p>Implement a single instance of the drawer component in your app's root layout.</p>
			<CodeBlock language="html" code={`<Drawer />\n\n<!-- (If present, place the <Drawer> above the <AppShell>) -->`} />
			<p>
				The Drawer component will listen for updates to the Svelte store called <code>drawerStore</code> and displays the visible UI on screen
				when opened.
			</p>
		</section>
		<section class="space-y-4">
			<h2>Drawer Store</h2>
			<p>
				Provides an interface to control the drawer component's state and settings. Import this anywhere you wish to control the Drawer.
			</p>
			<CodeBlock language="ts" code={`import { drawerStore } from '@skeletonlabs/skeleton';`} />
			<h3>Open</h3>
			<p>Use the store's <code>open()</code> method to show the drawer.</p>
			<CodeBlock
				language="ts"
				code={`
function drawerOpen(): void {
	drawerStore.open();
}
			`}
			/>
			<h3>Close</h3>
			<p>Use the store's <code>close()</code> method to hide the drawer.</p>
			<CodeBlock
				language="ts"
				code={`
function drawerClose(): void {
	drawerStore.close();
}
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Drawer Contents</h2>
			<p>
				Create a new object of type <code>DrawerSettings</code>, supply a unique <code>id</code>, then pass these settings on
				<code>open()</code>.
			</p>
			<CodeBlock
				language="ts"
				code={`
function drawerOpen(): void {
	const settings: DrawerSettings = { id: 'example-1' };
	drawerStore.open(settings);
}
			`}
			/>
			<p>
				Within the default slot of your Drawer component, setup conditional statements based on the value of <code>$drawerStore.id</code>.
			</p>
			<CodeBlock
				language="html"
				code={`
<Drawer>
	{#if $drawerStore.id === 'example-1'}
		(show 'example-1' contents)
	{:else if $drawerStore.id === 'example-2'}
		(show 'example-2' contents)
	{:else}
		(fallback contents)
	{/if}
</Drawer>
			`}
			/>
			<!-- prettier-ignore -->
			<p>
				If you have a lot of content, consider abstracting this portion of your layout to a local component. See how we <a href="https://github.com/skeletonlabs/skeleton/blob/master/src/docs/DocsNavigation/DocsDrawer.svelte" target="_blank" rel="noreferrer">use this technique</a>.
			</p>
		</section>
		<section class="space-y-4">
			<h2>Passing Metadata</h2>
			<p>
				If you need to pass abitrary metadata, create a <code>meta</code> object within <code>DrawerSettings</code>. Then use
				<code>$drawerStore.meta</code> to retreive this.
			</p>
			<CodeBlock
				language="ts"
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
			<h3>Global Styles</h3>
			<p>You may adjust global styles via your Drawer component properties, just like any other component.</p>
			<h3>Per-Instance Styles</h3>
			<p>
				If you wish to override property values per drawer instance, you may pass key/value pairs of each property directly within <code
					>DrawerSettings</code
				>. See the <em>Props</em> tab near the top of this page for a full list of available properties.
			</p>
			<CodeBlock
				language="ts"
				code={`
function drawerOpenStyled(): void {
	const settings: DrawerSettings = {
		id: 'example-3',
		// Provide your property overrides:
		bgDrawer: 'bg-purple-900 text-white',
		bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
		width: 'w-[280px] md:w-[480px]',
		padding: 'p-4',
		rounded: 'rounded-xl',
	};
	drawerStore.open(settings);
}
				`}
			/>
		</section>
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2>Background Animation</h2>
				<span class="badge variant-filled-warning">Advanced</span>
			</div>
			<p>
				To animate the contents behind your drawer while it's open, first create a reactive property based on the state of the Drawer.
				Implement a Tailwind <em>translate</em> class when the drawer is open.
			</p>
			<CodeBlock language="ts" code={`$: positionClasses = $drawerStore.open ? 'translate-x-[50%]' : '';`} />
			<p>
				Then apply your the value for this proper to the wrapping page element, such as the <em>App Shell</em> or a <em>main</em> element.
			</p>
			<CodeBlock language="html" code={`<AppShell class="transition-transform {positionClasses}">...</AppShell>`} />
			<CodeBlock language="html" code={`<main class="transition-transform {positionClasses}">...</main>`} />
			<p>For best results, bu sure to take into account the Drawer position as well via <code>$drawerStore.position</code>.</p>
		</section>
		<section class="space-y-4">
			<h2>Accessibility</h2>
			<!-- prettier-ignore -->
			<p>Skeleton <u>does not</u> provide a means to disable the backdrop's click to close feature, as we feel this would be harmful to accessability. We recommend viewing the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/" target="_blank" rel="noreferrer">ARIA guidelines</a> if you wish to learn more about modal accessability.</p>
		</section>
	</svelte:fragment>
</DocsShell>
