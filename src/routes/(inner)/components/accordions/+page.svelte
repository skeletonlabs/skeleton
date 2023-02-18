<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	// Components
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import sveldAccordion from '$lib/components/Accordion/Accordion.svelte?raw&sveld';
	import sveldAccordionItem from '$lib/components/Accordion/AccordionItem.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Accordions',
		description: 'Divide content into collapsible sections.',
		imports: ['Accordion', 'AccordionItem'],
		source: 'components/Accordion',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/accordion/',
		components: [
			{ label: 'Accordion', sveld: sveldAccordion },
			{
				label: 'AccordionItem',
				sveld: sveldAccordionItem,
				overrideProps: ['padding', 'hover', 'rounded', 'regionControl', 'regionPanel', 'regionCaret']
			}
		],
		keyboard: [
			['<kbd>Tab</kbd>', 'Focus the next accordion item.'],
			['<kbd>Shift + Tab</kbd> ', 'Focus the previous accordion item.'],
			['<kbd>Space</kbd> or <kbd>Enter</kbd>', 'Toggles the item panel open or closed.']
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card variant-glass p-4 space-y-4">
			<Accordion autocollapse>
				<AccordionItem open>
					<svelte:fragment slot="lead"><i class="fa-solid fa-book text-xl w-6 text-center" /></svelte:fragment>
					<svelte:fragment slot="summary"><p class="font-bold">Books</p></svelte:fragment>
					<svelte:fragment slot="content">
						<p>This is the content panel for the <strong>books</strong> item.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam odit, temporibus ullam ab enim expedita
							eum officia ipsum, laboriosam, nobis quasi laborum aspernatur reiciendis dignissimos optio sunt distinctio.
						</p>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-film text-xl w-6 text-center" /></svelte:fragment>
					<svelte:fragment slot="summary"><p class="font-bold">Movies</p></svelte:fragment>
					<svelte:fragment slot="content">
						<p>This is the content panel for the <strong>movies</strong> item.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam odit, temporibus ullam ab enim expedita
							eum officia ipsum, laboriosam, nobis quasi laborum aspernatur reiciendis dignissimos optio sunt distinctio.
						</p>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-tv text-xl w-6 text-center" /></svelte:fragment>
					<svelte:fragment slot="summary"><p class="font-bold">Television</p></svelte:fragment>
					<svelte:fragment slot="content">
						<p>This is the content panel for the <strong>television</strong> item.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam odit, temporibus ullam ab enim expedita
							eum officia ipsum, laboriosam, nobis quasi laborum aspernatur reiciendis dignissimos optio sunt distinctio.
						</p>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-gamepad text-xl w-6 text-center" /></svelte:fragment>
					<svelte:fragment slot="summary"><p class="font-bold">Games</p></svelte:fragment>
					<svelte:fragment slot="content">
						<p>This is the content panel for the <strong>games</strong> item.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam odit, temporibus ullam ab enim expedita
							eum officia ipsum, laboriosam, nobis quasi laborum aspernatur reiciendis dignissimos optio sunt distinctio.
						</p>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock
				language="html"
				code={`
<Accordion>
	<AccordionItem open>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<svelte:fragment slot="summary">(summary)</svelte:fragment>
		<svelte:fragment slot="content">(content)</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<svelte:fragment slot="summary">(summary)</svelte:fragment>
		<svelte:fragment slot="content">(content)</svelte:fragment>
	</AccordionItem>
	<!-- ... -->
</Accordion>`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Auto-Collapse Mode</h2>
			<p>Enable the <code>autocollapse</code> setting to limit display to one accordion panel at a time.</p>
			<CodeBlock language="html" code={`<Accordion autocollapse>...</Accordion>`} />
		</section>
		<section class="space-y-4">
			<h2>Open on Load</h2>
			<p>
				Set the visible items on load with <code>open</code>. When using <code>autocollapse</code> mode this is limited to a single item.
			</p>
			<CodeBlock language="html" code={`<AccordionItem open>...</AccordionItem>`} />
		</section>
	</svelte:fragment>
</DocsShell>
