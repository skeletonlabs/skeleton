<script lang="ts">
	import { DataTable, Avatar, AccordionGroup, AccordionItem } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	const tablePropsGroup: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['collapse', 'boolean', 'true', 'Enable auto-collapse mode.'],
			['spacing', 'string', 'spacing-y-2', 'Provide classes to set spacing between item rows.']
		]
	};

	const tablePropsItem: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['open', 'boolean', 'false', `Defines the default open state on page load.`],
			['hover', 'string', 'hover:bg-primary-500/10', 'Provide classes to set the hover background color.'],
			['spacing', 'string', 'space-y-0', 'Provide classes to set spacing between title and description elements.'],
			['padding', 'string', 'px-4 py-2', 'Provide classes to set padding for summary and content regions.'],
			['rounded', 'string', 'rounded', 'Provide classes to set summary border radius.']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Required', 'Style Prop', 'Description'],
		source: [
			['lead', '-', 'slotSummary > .summary-lead', 'Allows for an optional leading element, such as an icon.'],
			['summary', '&check;', 'slotSummary', 'Provide the summary details of each item.'],
			['content', '&check;', 'slotContent', 'Provide the content details of each item.']
		]
	};
	const tableA11yItem: any = {
		headings: ['Prop', 'Description'],
		source: [
			['summaryId', 'Provide semantic ID for ARIA summary element.'],
			['contentId', 'Provide semantic ID for ARIA content element.']
		]
	};
	const tableKeys: any = {
		headings: ['Keys', 'Description'],
		source: [
			['<kbd>Tab</kbd>', 'Moves focus to the next focusable element.'],
			['<kbd>Shift + Tab</kbd> ', 'Moves focus to the previous focusable element.'],
			['<kbd>Space</kbd> or <kbd>Enter</kbd>', 'When focus is on the accordion header toggles the collapsable region open/closed.']
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
		<h2 class="sr-only">Examples</h2>
		<div class="card card-body">
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
		</div>
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
						<div class="card card-body"><p>The content for the first element.</p></div>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="lead">
						<Avatar src="https://i.pravatar.cc/?img=5" />
					</svelte:fragment>
					<svelte:fragment slot="summary">
						<h3>Avatar and Heading</h3>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="card card-body"><p>The content for the second element.</p></div>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="lead">
						<Avatar initials="1" background="bg-accent-500" />
					</svelte:fragment>
					<svelte:fragment slot="summary">
						<h3>Numeral and Heading</h3>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="card card-body"><p>The content for the third element.</p></div>
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
`}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<h4>Accordion Group</h4>
		<DataTable headings={tablePropsGroup.headings} source={tablePropsGroup.source} />
		<h4>Accordion Item</h4>
		<DataTable headings={tablePropsItem.headings} source={tablePropsItem.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<h4>Accordion Item</h4>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<div class="flex justify-between items-center">
			<h4>Accordion Item</h4>
			<a href="https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion" target="_blank">ARIA Guidelines</a>
		</div>
		<DataTable headings={tableA11yItem.headings} source={tableA11yItem.source} />
		<h3>Keyboard Interactions</h3>
		<DataTable headings={tableKeys.headings} source={tableKeys.source} />
	</section>
</div>
