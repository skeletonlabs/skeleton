<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldDrawer from '@skeletonlabs/skeleton/utilities/Drawer/Drawer.svelte?raw&sveld';

	// Drawer Utils
	import { drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';

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
		keyboard: [['<kbd class="kbd">Esc</kbd>', ' Closes the drawer.']]
	};

	function trigger(position: 'left' | 'top' | 'right' | 'bottom'): void {
		const s: DrawerSettings = { id: 'demo', position };
		drawerStore.open(s);
	}
	function triggerStyled(): void {
		const drawerSettings: DrawerSettings = {
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
		drawerStore.open(drawerSettings);
	}
	function triggerMetadata(): void {
		const drawerSettings: DrawerSettings = {
			id: 'demo',
			position: 'left',
			// Metadata
			meta: 'Metadata Received!'
		};
		drawerStore.open(drawerSettings);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="lead">
				<p class="w-full text-center">Select a drawer example to preview.</p>
			</svelte:fragment>
			<svelte:fragment slot="preview">
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
					</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<p>Implement a single instance of the drawer component in your app's root layout above the App Shell (if present).</p>
				<CodeBlock language="html" code={`<Drawer />\n\n<!-- <AppShell>...</AppShell> -->`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- prettier-ignore -->
		<aside class="alert alert-message variant-ghost-warning">
			<p>
				This feature uses the <a class="anchor" href="https://en.wikipedia.org/wiki/Singleton_pattern" target="_blank" rel="noreferrer">Singleton pattern</a>, meaning you should aim to implement a <u>single instance of the component per project</u>, but it will remain globally scoped
				and reusable via a Svelte writable store. Do not reimplement this component for each route page.
			</p>
		</aside>
		<section class="space-y-4">
			<h2 class="h2">Drawer Store</h2>
			<p>Import this anywhere you wish to control the Drawer. Provides an interface to control the drawer component.</p>
			<h3 class="h3">Open</h3>
			<CodeBlock language="ts" code={`drawerStore.open();`} />
			<h3 class="h3">Close</h3>
			<CodeBlock language="ts" code={`drawerStore.close();`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Passing Metadata</h2>
			<p>
				To pass arbitrary metadata, create a <code class="code">meta</code> object within <code class="code">DrawerSettings</code>. Then use
				<code class="code">$drawerStore.meta</code> to retrieve this.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<button class="col-span-2 btn variant-filled" on:click={triggerMetadata}>Metadata Example</button>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const drawerSettings: DrawerSettings = {
	id: 'example-2',
	meta: { foo: 'bar', fizz: 'buzz', age: 40 }
};
drawerStore.open(drawerSettings);
`}
					/>
					<p>To retrieve this data, use:</p>
					<CodeBlock language="html" code={`<div>{$drawerStore.meta}</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Styling</h2>
			<p>
				For global styles, apply changes via props directly to the Modal component. However, you may also override styles per drawer
				instance via the <code class="code">DrawerSettings</code>.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<button class="col-span-2 btn variant-filled" on:click={triggerStyled}>Styled Drawer</button>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>Pass property values as key/value pairs as shown below.</p>
					<CodeBlock
						language="ts"
						code={`
const drawerSettings: DrawerSettings = {
	id: 'example-3',
	// Provide your property overrides:
	bgDrawer: 'bg-purple-900 text-white',
	bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
	width: 'w-[280px] md:w-[480px]',
	padding: 'p-4',
	rounded: 'rounded-xl',
};
drawerStore.open(drawerSettings);
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Handling Contents</h2>
			<p>
				Create a new <code class="code">DrawerSettings</code> object, supply a unique <code class="code">id</code>, then pass these settings
				on
				<code class="code">drawerStore.open()</code>.
			</p>
			<CodeBlock
				language="ts"
				code={`
const settings: DrawerSettings = { id: 'example-1' };
drawerStore.open(settings);
`}
			/>
			<p>
				Within the default slot of your Drawer component, setup conditional statements based on the value of <code class="code"
					>$drawerStore.id</code
				>.
			</p>
			<CodeBlock
				language="html"
				code={`
<Drawer>
	{#if $drawerStore.id === 'example-1'}
		<!-- (show 'example-1' contents) -->
	{:else if $drawerStore.id === 'example-2'}
		<!-- (show 'example-2' contents) -->
	{:else}
		<!-- (fallback contents) -->
	{/if}
</Drawer>
`}
			/>
		</section>
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2 class="h2">Background Animation</h2>
				<span class="badge variant-filled-warning">Advanced</span>
			</div>
			<p>
				To animate the contents behind your drawer while it's open, first create a reactive property based on the state of the Drawer. Then
				implement a Tailwind <em>translate</em> class when the drawer is open.
			</p>
			<CodeBlock language="ts" code={`$: positionClasses = $drawerStore.open ? 'translate-x-[50%]' : '';`} />
			<p>
				Then apply this value to the proper wrapping page element, such as the <em>App Shell</em> or a <em>main</em> element.
			</p>
			<CodeBlock language="html" code={`<AppShell class="transition-transform {positionClasses}">...</AppShell>`} />
			<CodeBlock language="html" code={`<main class="transition-transform {positionClasses}">...</main>`} />
			<p>For best results, be sure to take into account the Drawer position as well via <code class="code">$drawerStore.position</code>.</p>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Accessibility</h2>
			<!-- prettier-ignore -->
			<p>Skeleton <u>does not</u> provide a means to disable the backdrop's click to close feature, as this would be harmful to accessibility. View the <a class="anchor" href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/" target="_blank" rel="noreferrer">ARIA APG guidelines</a> to learn more about modal accessibility.</p>
		</section>
		<!-- SvelteKit SSR Warning -->
		<!-- prettier-ignore -->
		<section class="space-y-4">
			<h2 class="h2">SvelteKit SSR Warning</h2>
			<div class="space-y-4">
				<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
					<p>There are known security risks when using Svelte writable stores within SvelteKit load functions.</p>
					<a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton/wiki/SvelteKit-SSR-Warning" target="_blank" rel="noreferrer">Details &rarr;</a>
				</div>
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
