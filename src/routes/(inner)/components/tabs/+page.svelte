<script lang="ts">
	import { writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-ignore
	import sveldTabGroup from '$lib/components/Tab/TabGroup.svelte?raw&sveld';
	// @ts-ignore
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
		sveld: [
			{ label: 'TabGroup', source: sveldTabGroup },
			{ label: 'Tab', source: sveldTab }
		],
		classes: [
			{
				source: [
					['<code>.tab-group</code>', 'The parent element.'],
					['<code>.tab-group-list</code>', 'The ul list element.']
				]
			},
			{
				source: [
					['<code>.tab</code>', 'The parent element.'],
					['<code>.tab-lead</code>', 'The tab lead region.'],
					['<code>.tab-label</code>', 'The tab label element.']
				]
			}
		]
	};
	// const properties: DocsShellTable[] = [
	// 	{
	// 		label: 'TabGroup',
	// 		headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
	// 		source: [
	// 			['<code>selected</code>', 'Writable', '-', '&check;', 'A svelte store to keep track of tab selection.'],
	// 			['<code>rail</code>', 'boolean', 'true', '-', 'Toggless the bottom border below the tabs.'],
	// 			['<code>justify</code>', 'string', 'justify-start', '-', `Provide classes to set the flex justification. 'justify-start' is best small screens.`],
	// 			['<code>borderWidth</code>', 'string', 'border-b-2', '-', 'Provide classes to set the selected border thickness size. Shared between group and tab.'],
	// 			['<code>borderColor</code>', 'string', 'border-primary-500', '-', 'Provide classes to set the selected border color.'],
	// 			['<code>color</code>', 'string', 'text-primary-500', '-', 'Provide class to set the selected text color.'],
	// 			['<code>fill</code>', 'string', 'fill-primary-500', '-', 'Provide classes to set the selected SVG fill color.'],
	// 			['<code>hover</code>', 'string', 'bg-hover-token', '-', 'Provide classes to set the unselected hover styles.'],
	// 			['<code>rounded</code>', 'string', 'rounded-tl-container-token rounded-tr-container-token', '-', 'Provide classes to set the tab border radius styles.']
	// 		]
	// 	},
	// 	{
	// 		label: 'Tab',
	// 		headings: ['Prop', 'Type', 'Description'],
	// 		source: [['<code>value</vcode>', 'any', 'The value of each tab.']]
	// 	}
	// ];
	// const slots: DocsShellTable[] = [
	// 	{
	// 		label: 'TabGroup',
	// 		headings: ['Name', 'Description'],
	// 		source: [['<code>default</code>', 'Accepts a step of Tab components.']]
	// 	},
	// 	{
	// 		label: 'Tab',
	// 		headings: ['Name', 'Description'],
	// 		source: [
	// 			['<code>lead</code>', 'Provides a leading position, which can be used for icons.'],
	// 			['<code>default</code>', 'Provide the Tab label contents.']
	// 		]
	// 	}
	// ];
	// const a11y: DocsShellTable[] = [
	// 	{
	// 		label: 'TabGroup',
	// 		headings: ['Prop', 'Type', 'Required', 'Description'],
	// 		source: [
	// 			['<code>labeledby</code>', 'string', '-', `Provide the ID of the element that describes the group.`],
	// 			['<code>label</code>', 'string', '-', `Defines a semantic label for the group.`]
	// 		]
	// 	},
	// 	{
	// 		label: 'Tab',
	// 		headings: ['Prop', 'Type', 'Required', 'Description'],
	// 		source: [['<code>label</code>', 'string', '-', `Defines a semantic label for the tab.`]]
	// 	},
	// 	{
	// 		label: 'Keyboard Interactions',
	// 		headings: ['Keys', 'Description'],
	// 		source: [
	// 			['<kbd>Tab</kbd>', 'Moves focus to the next focusable Tab.'],
	// 			['<kbd>Shift + Tab</kbd> ', 'Moves focus to the previous focusable Tab.'],
	// 			['<kbd>Home</kbd>', 'Moves focus to the first tab.'],
	// 			['<kbd>End</kbd>', 'Moves focus to the last tab.'],
	// 			['<kbd>Space</kbd> or <kbd>Enter</kbd>', 'Activates the tab if it was not activated automatically on focus.']
	// 		]
	// 	}
	// ];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<h2 class="sr-only">Examples</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="card card-body space-y-4">
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
				<div class="card card-body space-y-4">
					<TabGroup selected={storeTwo} justify="justify-start md:justify-end" borderColor="border-accent-500" color="text-accent-500" hover="hover:bg-accent-500/10">
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
			<div class="card card-body space-y-4">
				<TabGroup selected={storeThree} justify="justify-start md:justify-center" borderColor="border-ternary-500" fill="fill-ternary-500" color="text-ternary-500" hover="hover:bg-ternary-500/10">
					<Tab value="a">
						<svelte:fragment slot="lead">
							<SvgIcon name="book" fill="fill-inherit" class="!block" />
						</svelte:fragment>
						Books
					</Tab>
					<Tab value="b">
						<svelte:fragment slot="lead">
							<SvgIcon name="clapperboard" fill="fill-inherit" class="!block" />
						</svelte:fragment>
						Movies
					</Tab>
					<Tab value="c">
						<svelte:fragment slot="lead">
							<SvgIcon name="tv" fill="fill-inherit" class="!block" />
						</svelte:fragment>
						Television
					</Tab>
				</TabGroup>
				<div>
					{#if $storeThree === 'a'}
						<h3>Books</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					{/if}
					{#if $storeThree === 'b'}
						<h3>Movies</h3>
						<p>Nisl nunc mi ipsum faucibus vitae aliquet nec. Ac ut consequat semper viverra nam libero justo laoreet. Nec sagittis aliquam malesuada.</p>
					{/if}
					{#if $storeThree === 'c'}
						<h3>Television</h3>
						<p>Ut sem viverra aliquet eget sit. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Vulputate enim nulla aliquet porttitor.</p>
					{/if}
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock language="typescript" code={`import { writable, type Writable } from "svelte/store";`} />
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
