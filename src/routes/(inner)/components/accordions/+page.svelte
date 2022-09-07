<script lang="ts">
	import { DataTable, Card, Avatar, AccordionGroup, AccordionItem } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

	const tablePropsGroup: any = {
		headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
		source: [
			['collapse', 'boolean', 'true', '-', 'When TRUE, only one item will show at a time.'],
			['spacing', 'class', 'spacing-y-2', '-', 'Provide a class to set spacing between item rows.']
		]
	};

	const tablePropsItem: any = {
		headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
		source: [
			['open', 'boolean', 'false', '-', `Use this to define which item is open on page load.`],
			['hover', 'string', 'hover:bg-primary-500/10', '-', 'Provide a class to set the hover background color.'],
			['spacing', 'string', 'space-y-0', '-', 'Provide a class to set spacing between title and description elements.'],
			['padding', 'string', 'px-4 py-2', '-', 'Provide a class to set padding for summary and content regions.'],
			['rounded', 'string', 'rounded', '-', 'Provide a class to set summary border radius.']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Required', 'Description'],
		source: [
			['lead', '-', 'Allows for an optional leading element, such as an icon.'],
			['summary', '&check;', 'Provide the summary details of each item.'],
			['content', '&check;', 'Provide the content details of each item.']
		]
	};
	const tableA11yItem: any = {
		headings: ['Prop', 'Required', 'Description'],
		source: [
			['summaryId', '-', `Provide a semantic ID for for the items summary element.`],
			['contentId', '-', `Provide a semantic ID for for the items content element.`]
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Accordions</h1>
		<p>Divide content into collapsible sections.</p>
		<CodeBlock language="javascript" code={`import { AccordionGroup, AccordionItem } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<Card>
			<AccordionGroup>
				<AccordionItem open>
					<svelte:fragment slot="summary">Does Skeleton come with an Accordion component?</svelte:fragment>
					<svelte:fragment slot="content">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary">What else do I need to know to build awesome web apps?</svelte:fragment>
					<svelte:fragment slot="content">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary">What is the weather like today?</svelte:fragment>
					<svelte:fragment slot="content">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
					</svelte:fragment>
				</AccordionItem>
			</AccordionGroup>
		</Card>
		<!-- Customized -->
		<h3>Customized</h3>
		<section class="border border-surface-500/10 p-2 rounded-xl space-y-4">
			<AccordionGroup>
				<AccordionItem spacing="space-y-4" open>
					<svelte:fragment slot="lead">
						<SvgIcon name="skull" width="w-8" height="h-8" fill="fill-primary-500" />
					</svelte:fragment>
					<svelte:fragment slot="summary">
						<h3>Icon and Heading</h3>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<Card><p>The content for the first element.</p></Card>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="lead"><Avatar size="sm" src="https://i.pravatar.cc/" /></svelte:fragment>
					<svelte:fragment slot="summary">
						<h3>Avatar and Heading</h3>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<Card><p>The content for the second element.</p></Card>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="lead">
						<Avatar initials="1" size="sm" background="bg-accent-500" />
					</svelte:fragment>
					<svelte:fragment slot="summary">
						<h3>Numeral and Heading</h3>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<Card><p>The content for the third element.</p></Card>
					</svelte:fragment>
				</AccordionItem>
			</AccordionGroup>
		</section>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock
			language="html"
			code={`
<AccordionGroup>
    <AccordionItem open>
        <svelte:fragment slot="summary">Summary 1</svelte:fragment>
        <svelte:fragment slot="content"><p>Content 1</p></svelte:fragment>
    </AccordionItem>
    <AccordionItem>
        <svelte:fragment slot="summary">Summary 2</svelte:fragment>
        <svelte:fragment slot="content"><p>Content 2</p></svelte:fragment>
    </AccordionItem>
    <AccordionItem>
        <svelte:fragment slot="summary">Summary 3</svelte:fragment>
        <svelte:fragment slot="content"><p>Content 3</p></svelte:fragment>
    </AccordionItem>
</AccordionGroup>
`.trim()}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<h3>Group</h3>
		<DataTable headings={tablePropsGroup.headings} source={tablePropsGroup.source} />
		<h3>Item</h3>
		<DataTable headings={tablePropsItem.headings} source={tablePropsItem.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<div class="flex justify-between items-center">
			<h3>Item</h3>
			<a href="https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion" target="_blank">ARIA Guidelines</a>
		</div>
		<DataTable headings={tableA11yItem.headings} source={tableA11yItem.source} />
	</section>
</div>
