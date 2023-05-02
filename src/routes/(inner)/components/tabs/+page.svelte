<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldTabGroup from '$lib/components/Tab/TabGroup.svelte?raw&sveld';
	import sveldTab from '$lib/components/Tab/Tab.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Tabs',
		description: 'Use tabs to quickly switch between different views.',
		imports: ['TabGroup', 'Tab'],
		source: 'components/Tab',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/',
		components: [
			{ label: 'TabGroup', sveld: sveldTabGroup },
			{ label: 'Tab', sveld: sveldTab, overrideProps: ['active', 'hover', 'flex', 'padding', 'rounded'] }
		]
	};

	// Local
	let tabsBasic: number = 0;
	let tabsFancy: number = 0;
	let tabsBottomNav: number = 0;
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
	<Tab bind:group={tabSet} name="tab1" value={0}>(label)</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>(label)</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>(label)</Tab>
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
			<p>
				Tabs utilize native radio groups to control state. Bind a shared <code class="code">group</code>
				value, then provide a unique <code class="code">value</code> per tab. Please note that using the <code class="code">panel</code> slot
				is optional.
			</p>
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
						<Tab bind:group={tabsBottomNav} name="books" value={0}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-book" /></svelte:fragment>
							Books
						</Tab>
						<Tab bind:group={tabsBottomNav} name="movies" value={1}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-film" /></svelte:fragment>
							Movies
						</Tab>
						<Tab bind:group={tabsBottomNav} name="tv" value={2}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-tv" /></svelte:fragment>
							Television
						</Tab>
					</TabGroup>
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
	<Tab bind:group={tabsBottomNav} name="books" value={0}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		(label))
	</Tab>
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
