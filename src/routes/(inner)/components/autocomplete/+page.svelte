<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Components
	import AccordionGroup from '$lib/components/Accordion/AccordionGroup.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldAccordionGroup from '$lib/components/Accordion/AccordionGroup.svelte?raw&sveld';
	// @ts-expect-error sveld import
	import sveldAccordionItem from '$lib/components/Accordion/AccordionItem.svelte?raw&sveld';
	import Autocomplete from '$lib/components/Autocomplete/Autocomplete.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Autocomplete',
		description: 'Divide content into collapsible sections.',
		imports: ['AccordionGroup', 'AccordionItem'],
		source: 'components/Accordion',
		aria: 'https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion',
		components: [
			{ label: 'AccordionGroup', sveld: sveldAccordionGroup },
			{ label: 'AccordionItem', sveld: sveldAccordionItem, overrideProps: ['hover', 'spacing', 'padding', 'rounded'] }
		],
		keyboard: [
			['<kbd>Tab</kbd>', 'Moves focus to the next focusable element.'],
			['<kbd>Shift + Tab</kbd> ', 'Moves focus to the previous focusable element.'],
			['<kbd>Space</kbd> or <kbd>Enter</kbd>', 'When focus is on the accordion header toggles the collapsable region open/closed.']
		]
	};

	let items = [
		{
			id: 1,
			name: 'Red',
			value: 'RED'
		},
		{
			id: 2,
			name: 'Green',
			value: 'GREEN'
		},
		{
			id: 3,
			name: 'Blue',
			value: 'BLUE'
		},
		{
			id: 4,
			name: 'Yellow',
			value: 'YELLOW'
		},
		{
			id: 5,
			name: 'Gold',
			value: 'GOLD'
		}
	];
	let simpleArr = ['Donkey', 'Cow', 'Llama', 'Pig', 'Horse', 'Chicken'];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<div class="card p-4 space-y-4">
				<p>Single select autocomplete:</p>
				<Autocomplete items={simpleArr} labelField={'name'} valueField={'value'} />
			</div>

			<div class="card p-4 space-y-4">
				<p>Multiple select autocomplete that doesn't allow duplicates:</p>
				<Autocomplete items={simpleArr} labelField={'name'} valueField={'value'} multiple={true} allowDuplicates={false} />
			</div>
			<div class="card p-4 space-y-4">
				<p>Multiple select autocomplete that allows duplicates:</p>
				<Autocomplete items={simpleArr} labelField={'name'} valueField={'value'} multiple={true} allowDuplicates={true} />
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>Autocomplete (work-in-progress)</p>
		<CodeBlock
			language="html"
			code={`
`}
		/>

		<p>
			When you don't want an AccordionItem to auto-collapse the other AccordionItems, just set <code>collapse</code> to <code>false</code>.
		</p>
		<CodeBlock
			language="html"
			code={`
<AccordionGroup collapse={false}>
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
