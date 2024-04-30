<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { TabGroup, Tab, CodeBlock, TabAnchor } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldTabGroup from '@skeletonlabs/skeleton/components/Tab/TabGroup.svelte?raw&sveld';
	import sveldTab from '@skeletonlabs/skeleton/components/Tab/Tab.svelte?raw&sveld';
	import sveldTabAnchor from '@skeletonlabs/skeleton/components/Tab/TabAnchor.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Tabs',
		description: 'Use tabs to quickly switch between different views and pages.',
		imports: ['TabGroup', 'Tab', 'TabAnchor'],
		source: 'packages/skeleton/src/lib/components/Tab',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/',
		components: [
			{ label: 'TabGroup', sveld: sveldTabGroup },
			{ label: 'Tab', sveld: sveldTab, overrideProps: ['active', 'hover', 'flex', 'padding', 'rounded'] },
			{ label: 'TabAnchor', sveld: sveldTabAnchor, overrideProps: ['active', 'hover', 'flex', 'padding', 'rounded'] }
		]
	};

	// Local
	let tabsBasic = 0;
	let tabsFancy = 0;
	let tabsBottomNav = '/books';
	let desc = {
		books: 'A written or printed work consisting of pages glued or sewn together along one side and bound in covers.',
		movies: 'A story or event recorded by a camera as a set of moving images and shown in a theater or on television; a motion picture.',
		tv: 'A system for transmitting visual images and sound to screens, chiefly for entertainment, information, and education.'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<section class="w-full card p-4 text-token">
					<TabGroup>
						<!-- Tabs -->
						<Tab bind:group={tabsBasic} name="books" value={0}>Books</Tab>
						<Tab bind:group={tabsBasic} name="movies" value={1}>Movies</Tab>
						<Tab bind:group={tabsBasic} name="tv" value={2}>Television</Tab>
						<!-- Panel -->
						<svelte:fragment slot="panel">
							{#if tabsBasic === 0}
								<p>{desc.books}</p>
							{:else if tabsBasic === 1}
								<p>{desc.movies}</p>
							{:else if tabsBasic === 2}
								<p>{desc.tv}</p>
							{/if}
						</svelte:fragment>
					</TabGroup>
				</section>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`let tabSet: number = 0;`} />
				<CodeBlock
					language="html"
					code={`
<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label 1)</span>
	</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>(label 2)</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>(label 3)</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			(tab panel 1 contents)
		{:else if tabSet === 1}
			(tab panel 2 contents)
		{:else if tabSet === 2}
			(tab panel 3 contents)
		{/if}
	</svelte:fragment>
</TabGroup>
			`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>We offer two types of Tab components, but recommend you avoiding mixing these to ensure a consistent user experience.</p>
			<h3 class="h3">Tab</h3>
			<p>
				See the featured example above for reference. Maintains an active selection state, which is ideal for quickly switching panel
				content available directly on the page. Please note that using the <code class="code">panel</code> slot is optional, but recommended.
			</p>
			<h3 class="h3">TabAnchor</h3>
			<p>
				Operate as <code class="code">anchor</code> tags, supporting all common attributes. These are recommended for tabbing between route
				pages. Please avoid using <code class="code">target="_blank"</code> as this would be harmful to the expected user experience.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TabGroup class="w-full">
						<TabAnchor href="/" selected>Home</TabAnchor>
						<TabAnchor href="/docs/get-started">Documentation</TabAnchor>
						<TabAnchor href="/blog">Blog</TabAnchor>
					</TabGroup>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>The tab will show an active state when the group and tab <code class="code">value</code> match.</p>
					<CodeBlock
						language="html"
						code={`
<TabGroup>
	<TabAnchor href="/">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<TabAnchor href="/about">(label)</TabAnchor>
	<!-- ... -->
</TabGroup>
					`}
					/>
					<!-- prettier-ignore -->
					<p>
						Use the <a class="anchor" href="https://kit.svelte.dev/docs/modules#$app-stores-page" target="_blank" rel="noreferrer">SvelteKit page store</a> to dynamically highlight the active Tab Anchor state using the <code class="code">selected</code> property.
					</p>
					<CodeBlock language="ts" code={`import { page } from '$app/stores';`} />
					<CodeBlock
						language="html"
						code={`
<TabGroup>
	<TabAnchor href="/" selected={$page.url.pathname === '/'}>Home</TabAnchor>
	<TabAnchor href="/about" selected={$page.url.pathname === '/about'}>About</TabAnchor>
</TabGroup>
						`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Justify</h2>
			<p>
				Use the <code class="code">justify</code> property to adjust tab positions.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TabGroup justify="justify-center" class="w-full">
						<!-- Tabs -->
						<Tab bind:group={tabsFancy} name="books" value={0}>Books</Tab>
						<Tab bind:group={tabsFancy} name="movies" value={1}>Movies</Tab>
						<Tab bind:group={tabsFancy} name="tv" value={2}>Television</Tab>
					</TabGroup>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<TabGroup justify="justify-center">...</TabGroup>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Navigation</h2>
			<p>
				Tabs make a great choice for bottom navigation bars for a responsive <a class="anchor" href="/components/app-rail">App Rail</a> alternative.
				Use Anchor Tabs and customize the styling as desired.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TabGroup
						justify="justify-center"
						active="variant-filled-primary"
						hover="hover:variant-soft-primary"
						flex="flex-1 lg:flex-none"
						rounded=""
						border=""
						class="bg-surface-100-800-token w-full"
					>
						<TabAnchor selected={tabsBottomNav === '/books'} on:click={() => (tabsBottomNav = '/books')}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-book"></i></svelte:fragment>
							Books
						</TabAnchor>
						<TabAnchor selected={tabsBottomNav === '/movies'} on:click={() => (tabsBottomNav = '/movies')}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-film"></i></svelte:fragment>
							Movies
						</TabAnchor>
						<TabAnchor selected={tabsBottomNav === '/television'} on:click={() => (tabsBottomNav = '/television')}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-tv"></i></svelte:fragment>
							Television
						</TabAnchor>
					</TabGroup>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center"><code class="code">Simulated route: {tabsBottomNav}</code></div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<TabGroup 
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full"
>
	<TabAnchor href="/" selected={$page.url.pathname === '/'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<!-- ... -->
</TabGroup>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Using Svelte Stores</h2>
			<!-- prettier-ignore -->
			<p>
				For the standard Tab component, you may optionally choose to use Svelte writable stores to manage the tab state. Note the use of the <code class="code">$</code> sign within the <code class="code">bind:group</code> property. Pair this with Skeleton's <a class="anchor" href="/utilities/local-storage-stores">Local Storage Store</a> for automatic persistence.
			</p>
			<CodeBlock
				language="ts"
				code={`import { writable, type Writable } from 'svelte/store';\n\nconst tabSet: Writable<number> = writable(0);`}
			/>
			<CodeBlock language="ts" code={`<Tab bind:group={$tabSet} name="tab1" value={0}>(label)</Tab>`} />
		</section>
	</svelte:fragment>
</DocsShell>
