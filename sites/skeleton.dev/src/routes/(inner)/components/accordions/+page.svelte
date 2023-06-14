<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	// Utilities
	import { CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldAccordion from '@skeletonlabs/skeleton/components/Accordion/Accordion.svelte?raw&sveld';
	import sveldAccordionItem from '@skeletonlabs/skeleton/components/Accordion/AccordionItem.svelte?raw&sveld';

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
				overrideProps: ['disabled', 'padding', 'hover', 'rounded', 'regionControl', 'regionPanel', 'regionCaret']
			}
		],
		keyboard: [
			['<kbd class="kbd">Tab</kbd>', 'Focus the next accordion item.'],
			['<kbd class="kbd">Shift + Tab</kbd> ', 'Focus the previous accordion item.'],
			['<kbd class="kbd">Space</kbd> or <kbd class="kbd">Enter</kbd>', 'Toggles the item panel open or closed.']
		]
	};

	// Local
	const loremIpsum =
		// cspell:disable-next-line
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam odit, temporibus ullam ab enim expedita eum officia ipsum, laboriosam, nobis quasi laborum aspernatur reiciendis dignissimos optio sunt distinctio.';
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionFooter="text-center">
			<svelte:fragment slot="preview">
				<Accordion autocollapse class="card p-4 text-token">
					<AccordionItem open>
						<svelte:fragment slot="lead"><i class="fa-solid fa-skull text-xl w-6 text-center" /></svelte:fragment>
						<svelte:fragment slot="summary"><p class="font-bold">What is Día de los Muertos?</p></svelte:fragment>
						<svelte:fragment slot="content">
							<!-- prettier-ignore -->
							<p>
								While Halloween and Day of the Dead occur nearly in tandem and share similar customs (candy, face painting, and community gathering), the two are not related. Halloween has ancient Celtic roots, while Day of the Dead has its own origins that date back to the Indigenous people of Mexico and Central America.
							</p>
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="lead"><i class="fa-solid fa-clock text-xl w-6 text-center" /></svelte:fragment>
						<svelte:fragment slot="summary"><p class="font-bold">When did it begin?</p></svelte:fragment>
						<svelte:fragment slot="content">
							<!-- prettier-ignore -->
							<p>
								Roughly 3000 years ago, amongst the Aztec, Toltec, and Mayans, death and the dead were seen as a natural part of life that should be honored and celebrated, rather than mourned. In particular, the Nahua people of central Mexico believed the deceased traveled on a years-long journey to Chicunamictlán, the Land of the Dead. The living would provide supplies, such as food and water to aid them on the trek. This practice inspired the modern tradition of creating altars —known as ofrendas— at their homes, in addition to leaving offerings at the gravesites of loved ones.
							</p>
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="lead"><i class="fa-solid fa-calendar text-xl w-6 text-center" /></svelte:fragment>
						<svelte:fragment slot="summary"><p class="font-bold">When is it celebrated?</p></svelte:fragment>
						<svelte:fragment slot="content">
							<!-- prettier-ignore -->
							<p>
								Once the Spanish colonized Mexico in the 16th century, their own Catholic views on the dead influenced Mexican customs. Día de los Muertos was originally celebrated in the summer months. The holiday came to fall on November 1 and November 2 to align with All Saints Day and All Souls Day.
							</p>
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="lead"><i class="fa-solid fa-gift text-xl w-6 text-center" /></svelte:fragment>
						<svelte:fragment slot="summary"><p class="font-bold">What are ofrendas?</p></svelte:fragment>
						<svelte:fragment slot="content">
							<!-- prettier-ignore -->
							<p>
								To beckon spirits back into the Land of the Living for the festivities, revelers create makeshift altars, or ofrendas, at their homes and at the gravesites of their deceased loved ones. Families gather at the site to eat, tell stories, and even clean the graves.
							</p>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<a
					class="btn variant-soft"
					href="https://www.oprahdaily.com/life/a37259063/day-of-the-dead-facts-history/"
					target="_blank"
					rel="noreferrer"
				>
					Information Source
				</a>
			</svelte:fragment>
			<svelte:fragment slot="source">
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
</Accordion>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4" />
		<section class="space-y-4">
			<h2 class="h2">Auto-Collapse Mode</h2>
			<p>Enable the <code class="code">autocollapse</code> setting to limit display to one accordion panel at a time.</p>
			<CodeBlock language="html" code={`<Accordion autocollapse>...</Accordion>`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Open on Load</h2>
			<p>
				Set the visible items on load with <code class="code">open</code>. When using <code class="code">autocollapse</code> mode, this is limited
				to a single item.
			</p>
			<CodeBlock language="html" code={`<AccordionItem open>...</AccordionItem>`} />
		</section>
	</svelte:fragment>
</DocsShell>
