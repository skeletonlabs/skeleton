<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	// @ts-ignore
	import docsAccordionGroup from '$lib/components/Accordion/AccordionGroup.svelte?raw&sveld';
	// @ts-ignore
	import docsAccordionItem from '$lib/components/Accordion/AccordionItem.svelte?raw&sveld';

	// console.log({ docsAccordionGroup, docsAccordionItem });

	// Components
	import AccordionGroup from '$lib/components/Accordion/AccordionGroup.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Accordions',
		description: 'Divide content into collapsible sections.',
		imports: ['AccordionGroup', 'AccordionItem'],
		source: 'components/Accordion',
		sveld: [
			{ label: 'AccordionGroup', docs: docsAccordionGroup },
			{ label: 'AccordionItem', docs: docsAccordionItem }
		],
		classes: [
			{
				label: 'AccordionGroup',
				source: [['<code>.accordian-group</code>', 'The parent element.']]
			},
			{
				label: 'AccordionGroup',
				source: [
					['<code>.accordion-item</code>', 'The parent element.'],
					['<code>.accordion-summary</code>', 'The HTML summary element.'],
					['<code>.accordion-summary-lead</code>', 'The summary lead.'],
					['<code>.accordion-summary-text</code>', 'The summary text.'],
					['<code>.accordion-summary-caret</code>', 'The summary caret.'],
					['<code>.accordion-content</code>', 'The accordion content region.']
				]
			}
		],
		ariaApg: 'https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion',
		keyboard: [
			['<kbd>Tab</kbd>', 'Moves focus to the next focusable element.'],
			['<kbd>Shift + Tab</kbd> ', 'Moves focus to the previous focusable element.'],
			['<kbd>Space</kbd> or <kbd>Enter</kbd>', 'When focus is on the accordion header toggles the collapsable region open/closed.']
		]
	};
	const slots: DocsShellTable[] = [
		{
			label: 'AccordionGroup',
			headings: ['Name', 'Description'],
			source: [['<code>default</code>', 'Accepts a set of Tab components.']]
		},
		{
			label: 'AccordionItem',
			headings: ['Name', 'Required', 'Description'],
			source: [
				['<code>lead</code>', '-', 'Allows for an optional leading element, such as an icon.'],
				['<code>summary</code>', '&check;', 'Provide the summary details of each item.'],
				['<code>content</code>', '&check;', 'Provide the content details of each item.']
			]
		}
	];
</script>

<DocsShell {settings} {slots}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card card-body">
			<AccordionGroup>
				<AccordionItem spacing="space-y-4" open>
					<svelte:fragment slot="lead">
						<SvgIcon name="skull" width="w-10" height="h-10" fill="fill-primary-500" />
					</svelte:fragment>
					<svelte:fragment slot="summary">
						<h3>Icon Heading</h3>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<p>The content for the first element.</p>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="lead">
						<Avatar src="https://i.pravatar.cc/?img=5" />
					</svelte:fragment>
					<svelte:fragment slot="summary">
						<h3>Avatar Heading</h3>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<p>The content for the second element.</p>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem spacing="space-y-4">
					<svelte:fragment slot="lead">
						<Avatar initials="1" background="bg-accent-500" />
					</svelte:fragment>
					<svelte:fragment slot="summary">
						<h3>Numeral Heading</h3>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<p>The content for the third element.</p>
					</svelte:fragment>
				</AccordionItem>
			</AccordionGroup>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<CodeBlock
			language="html"
			code={`
<AccordionGroup>
	<!-- Open -->
	<AccordionItem open>
		<svelte:fragment slot="lead">(lead)</svelte:fragment>
		<svelte:fragment slot="summary">(summary)</svelte:fragment>
		<svelte:fragment slot="content">(content)</svelte:fragment>
	</AccordionItem>
	<!-- Closed -->
	<AccordionItem>
		<svelte:fragment slot="summary">(summary)</svelte:fragment>
		<svelte:fragment slot="content">(content)</svelte:fragment>
	</AccordionItem>
</AccordionGroup>`}
		/>
	</svelte:fragment>
</DocsShell>
