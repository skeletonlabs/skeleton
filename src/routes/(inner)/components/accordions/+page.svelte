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

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Accordions',
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
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4">
			<AccordionGroup>
				<AccordionItem spacing="space-y-4" open>
					<svelte:fragment slot="lead">
						<div class="w-10 aspect-square flex justify-center items-center">
							<i class="fa-solid fa-house text-3xl" />
						</div>
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
						<Avatar initials="1" background="bg-secondary-500" fill="fill-on-secondary-token" />
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
		<section class="space-y-4">
			<p>A standard AccordionGroup that only allows one AccordionItem to be open at once.</p>
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
		</section>
		<section class="space-y-4">
			<h2>Using Collapse</h2>
			<p>
				If you do not wish for the AccordionItem, set the <code>collapse</code> property to <code>false</code>.
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
		</section>
	</svelte:fragment>
</DocsShell>
