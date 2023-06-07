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
		source: 'components/Tab',
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
						<TabAnchor href="https://github.com/skeletonlabs/skeleton" target="_blank">Skeleton - Github</TabAnchor>
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
	<Tab bind:group={tabSet} name="tab1" value={0}>(label)</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>(label)</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>(label)</Tab>
	<TabAnchor href="https://github.com/skeletonlabs/skeleton" target="_blank">
		Skeleton - Github
	</TabAnchor>
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
		<!-- Tabs -->
		<section class="space-y-4">
			<h2 class="h2">Tabs</h2>
			<p>We offer two types of tabs below. Consider mixing and matching these as needed.</p>
			<h3 class="h3">Tab</h3>
			<p>
				These tabs utilize native radio groups to control state. Bind a shared <code class="code">group</code>
				value, then provide a unique <code class="code">value</code> per tab. Please note that using the <code class="code">panel</code> slot
				is optional.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TabGroup>
						<Tab bind:group={tabsBasic} name="tab" value={4} title="Tab">
							<svelte:fragment slot="lead"><i class="fa-solid fa-image text-2xl" /></svelte:fragment>
							<span>Tab</span>
						</Tab>
					</TabGroup>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>The tab will show an active state when the group and tab <code class="code">value</code> match.</p>
					<CodeBlock language="ts" code={`let tabSet: number = 0;`} />
					<CodeBlock
						language="html"
						code={`
<Tab bind:group={tabSet} name="tab1" value={0} title="Tab">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<span>Tab</span>
</Tab>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">TabAnchor</h3>
			<p>
				These tabs operate as <code class="code">anchor</code> tags, supporting <em>href, target, rel</em>, and more. Use these when you
				wish to link to a new page when this tab is clicked.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<TabGroup>
						<TabAnchor href="/" target="_blank" title="Anchor">
							<svelte:fragment slot="lead"><i class="fa-solid fa-image text-2xl" /></svelte:fragment>
							<span>Anchor</span>
						</TabAnchor>
					</TabGroup>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>The tab will show an active state when the group and tab <code class="code">value</code> match.</p>
					<CodeBlock
						language="html"
						code={`
<TabAnchor href="/" target="_blank" title="Anchor">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<span>Anchor</span>
</TabAnchor>
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
			<h2 class="h2">Page State</h2>
			<!-- prettier-ignore -->
			<p>
				Using the <a class="anchor" href="https://kit.svelte.dev/docs/modules#$app-stores-page" target="_blank" rel="noreferrer">SvelteKit page store</a>, you can dynamically highlight the active tab based on it's path.
			</p>
			<CodeBlock language="ts" code={`import { page } from '$app/stores';`} />
			<CodeBlock
				language="html"
				code={`
<TabGroup>
	<TabAnchor href="/" selected={$page.url.pathname === '/'}>(icon)</TabAnchor>
	<TabAnchor href="/about" selected={$page.url.pathname === '/about'}>(icon)</TabAnchor>
</TabGroup>
`}
			/>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Navigation</h2>
			<p>
				Tabs make a good choice for custom navigation bars alongside an <a class="anchor" href="/components/app-shell">App Shell</a> or within
				a page, and has flexible styling.
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
							<svelte:fragment slot="lead"><i class="fa-solid fa-book" /></svelte:fragment>
							Books
						</TabAnchor>
						<TabAnchor selected={tabsBottomNav === '/movies'} on:click={() => (tabsBottomNav = '/movies')}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-film" /></svelte:fragment>
							Movies
						</TabAnchor>
						<TabAnchor selected={tabsBottomNav === '/television'} on:click={() => (tabsBottomNav = '/television')}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-tv" /></svelte:fragment>
							Television
						</TabAnchor>
					</TabGroup>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center"><code class="code">Simulated route:</code> {tabsBottomNav}</div>
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
		(label))
	</TabAnchor>
	<!-- ... -->
</TabGroup>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Using Svelte Stores</h2>
			<p>
				You may optionally choose to use Svelte writable stores to control your tab group state. Note the use of the <code class="code"
					>$</code
				>
				sign within the <code class="code">bind:group</code> property. Pair this with Skeleton's
				<a class="anchor" href="/utilities/local-storage-stores">Local Storage Store</a> for automatic persistence.
			</p>
			<CodeBlock
				language="ts"
				code={`import { writable, type Writable } from 'svelte/store';\n\nconst tabSet: Writable<number> = writable(0);`}
			/>
			<CodeBlock language="ts" code={`<Tab bind:group={$tabSet} name="tab1" value={0}>(label)</Tab>`} />
		</section>
	</svelte:fragment>
</DocsShell>
