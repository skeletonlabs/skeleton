<script lang="ts">
	import { writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldTabGroup from '$lib/components/Tab/TabGroup.svelte?raw&sveld';
	// @ts-expect-error sveld import
	import sveldTab from '$lib/components/Tab/Tab.svelte?raw&sveld';

	let storeOne = writable('a');
	let storeTwo = writable('a');
	let storeThree = writable('a');

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
			{ label: 'Tab', sveld: sveldTab, overrideProps: ['borderWidth', 'borderColor', 'color', 'fill', 'hover', 'rounded'] }
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<h2 class="sr-only">Examples</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="card p-4 space-y-4">
					<TabGroup selected={storeOne}>
						<Tab value="a">Tab A</Tab>
						<Tab value="b">Tab B</Tab>
						<Tab value="c">Tab C</Tab>
					</TabGroup>
					<div>
						{#if $storeOne === 'a'}Content A{/if}
						{#if $storeOne === 'b'}Content B{/if}
						{#if $storeOne === 'c'}Content C{/if}
					</div>
				</div>
				<div class="card p-4 space-y-4">
					<TabGroup
						selected={storeTwo}
						justify="justify-start md:justify-end"
						borderColor="border-secondary-500"
						color="text-secondary-500"
						hover="hover:bg-secondary-500/10"
					>
						<Tab value="a">Tab A</Tab>
						<Tab value="b">Tab B</Tab>
						<Tab value="c">Tab C</Tab>
					</TabGroup>
					<div>
						{#if $storeTwo === 'a'}Content A{/if}
						{#if $storeTwo === 'b'}Content B{/if}
						{#if $storeTwo === 'c'}Content C{/if}
					</div>
				</div>
			</div>
			<div class="card p-4 space-y-4">
				<TabGroup
					selected={storeThree}
					justify="justify-start md:justify-center"
					borderColor="border-tertiary-500"
					fill="fill-tertiary-500"
					color="text-tertiary-500"
					hover="hover:bg-tertiary-500/10"
				>
					<Tab value="a">
						<svelte:fragment slot="lead">
							<i class="fa-solid fa-book" />
						</svelte:fragment>
						Books
					</Tab>
					<Tab value="b">
						<svelte:fragment slot="lead">
							<i class="fa-solid fa-clapperboard" />
						</svelte:fragment>
						Movies
					</Tab>
					<Tab value="c">
						<svelte:fragment slot="lead">
							<i class="fa-solid fa-tv" />
						</svelte:fragment>
						Television
					</Tab>
				</TabGroup>
				<div>
					{#if $storeThree === 'a'}
						<h3>Books</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					{/if}
					{#if $storeThree === 'b'}
						<h3>Movies</h3>
						<p>
							Nisl nunc mi ipsum faucibus vitae aliquet nec. Ac ut consequat semper viverra nam libero justo laoreet. Nec sagittis aliquam
							malesuada.
						</p>
					{/if}
					{#if $storeThree === 'c'}
						<h3>Television</h3>
						<p>
							Ut sem viverra aliquet eget sit. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Vulputate enim nulla aliquet
							porttitor.
						</p>
					{/if}
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock language="typescript" code={`import { writable, type Writable } from 'svelte/store';`} />
			<CodeBlock language="typescript" code={`const storeTab: Writable<string> = writable('a');`} />
			<CodeBlock
				language="html"
				code={`
<TabGroup selected={storeTab}>
	<Tab value="a">(labelA)</Tab>
	<Tab value="b">(labelB)</Tab>
</TabGroup>

<!-- Conditionally display content -->
{#if $storeTab === 'a'}Content A{/if}
{#if $storeTab === 'b'}Content B{/if}`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
