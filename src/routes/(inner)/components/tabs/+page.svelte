<script lang="ts">
	import { writable } from 'svelte/store';
	import { DataTable, Card, Tab, TabGroup } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Stores
	let storeOne = writable('a');
	let storeTwo = writable('a');
	let storeThree = writable('a');

	// Props and Slots
	const tablePropsGroup: any = {
		headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
		source: [
			['selected', 'Writable', '-', '&check;', 'A svelte store to keep track of tab selection.'],
			['justify', 'string', 'justify-start', '-', `Provide classes to set the flex justification. 'justify-start' is best small screens.`],
			['borderWidth', 'string', 'border-b-2', '-', 'Provide classes to set the selected border thickness size. Shared between group and tab.'],
			['borderColor', 'string', 'border-primary-500', '-', 'Provide classes to set the selected border color.'],
			['color', 'string', 'text-primary-500', '-', 'Provide class to set the selecteded text color.'],
			['fill', 'string', 'fill-primary-500', '-', 'Provide classes to set the selected SVG fill color.'],
			['hover', 'string', 'hover:bg-surface-500/10', '-', 'Provide classes to set the unselected hover styles.'],
			['rounded', 'string', 'rounded-tl-lg rounded-tr-lg', '-', 'Provide classes to set the tab border radius styles.']
		]
	};
	const tablePropsItem: any = {
		headings: ['Prop', 'Type', 'Description'],
		source: [['value', 'any', 'The value of each tab.']]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [['lead', 'Provides a leading position, which can be used for icons.']]
	};
	const tableA11yGroup: any = {
		headings: ['Prop', 'Type', 'Required', 'Description'],
		source: [
			['labeledby', 'string', '-', `Provide the ID of the element that describes the group.`],
			['label', 'string', '-', `Defines a semantic label for the group.`]
		]
	};
	const tableA11yTab: any = {
		headings: ['Prop', 'Type', 'Required', 'Description'],
		source: [['label', 'string', '-', `Defines a semantic label for the tab.`]]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Tabs</h1>
		<p>Use tabs to quickly switch between different views.</p>
		<CodeBlock language="javascript" code={`import { TabGroup, Tab } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<Card>
				<svelte:fragment slot="header">
					<TabGroup selected={storeOne}>
						<Tab value="a">Tab A</Tab>
						<Tab value="b">Tab B</Tab>
						<Tab value="c">Tab C</Tab>
					</TabGroup>
				</svelte:fragment>
				{#if $storeOne === 'a'}Content A{/if}
				{#if $storeOne === 'b'}Content B{/if}
				{#if $storeOne === 'c'}Content C{/if}
			</Card>
			<Card>
				<svelte:fragment slot="header">
					<TabGroup selected={storeTwo} justify="justify-start md:justify-end" borderColor="border-accent-500" color="text-accent-500" hover="hover:bg-accent-500/10">
						<Tab value="a">Tab A</Tab>
						<Tab value="b">Tab B</Tab>
						<Tab value="c">Tab C</Tab>
					</TabGroup>
				</svelte:fragment>
				{#if $storeTwo === 'a'}Content A{/if}
				{#if $storeTwo === 'b'}Content B{/if}
				{#if $storeTwo === 'c'}Content C{/if}
			</Card>
		</div>
		<Card>
			<svelte:fragment slot="header">
				<TabGroup selected={storeThree} justify="justify-start md:justify-center" borderColor="border-warning-500" fill="fill-warning-500" color="text-warning-500" hover="hover:bg-warning-500/10">
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
			</svelte:fragment>
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
		</Card>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock
			language="typescript"
			code={`import type { Writable } from "svelte/store";
let storeTab: Writable<string> = writable('a');`}
		/>
		<CodeBlock
			language="html"
			code={`
<TabGroup selected={storeTab} justify="justify-start md:justify-center" highlight="border-accent-500" color="text-accent-500">
    <Tab value="a">Tab A</Tab>
    <Tab value="b">
        <svelte:fragment>{@html icon}</svelte:fragment>
        <span>Tab B</span>
    </Tab>
</TabGroup>
        `.trim()}
		/>
		<CodeBlock
			language="html"
			code={`
<!-- Conditionally display content -->
{#if $storeTab === 'a'}Content A{/if}
{#if $storeTab === 'b'}Content B{/if}
        `.trim()}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<h3>Tab Group</h3>
		<DataTable headings={tablePropsGroup.headings} source={tablePropsGroup.source} />
		<h3>Tab</h3>
		<DataTable headings={tablePropsItem.headings} source={tablePropsItem.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<h3>Tab</h3>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-center">
			<h2>Accessibility</h2>
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/" target="_blank">ARIA Guidelines</a>
		</div>
		<h3>Tab Group</h3>
		<DataTable headings={tableA11yGroup.headings} source={tableA11yGroup.source} />
		<h3>Tab</h3>
		<DataTable headings={tableA11yTab.headings} source={tableA11yTab.source} />
	</section>
</div>
