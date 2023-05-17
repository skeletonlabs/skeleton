<script lang="ts">
	import { faker } from '@faker-js/faker';
	// Docshell
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock, TabGroup, Tab } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Tables',
		description: 'Provides a set of styles for native HTML table elements.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/tables'],
		source: 'styles/elements/tables.css',
		classes: [
			['<code class="code">.table-container</code>', '-', 'Apply to a wrapping parent element to enable responsive scrolling.'],
			['<code class="code">.table</code>', '-', 'Apply to a native HTML table element to add table styles.'],
			['<code class="code">.table-compact</code>', '-', 'Apply to the native HTML element to set shorter row spacing.'],
			['<code class="code">.table-comfortable</code>', '-', 'Apply to the native HTML element to set taller row spacing.'],
			['<code class="code">.table-hover</code>', '-', 'Apply to a table element to enable a subtle hover effect on rows.'],
			[
				'<code class="code">.table-interactive</code>',
				'-',
				'Apply to a table element to enable a visible hover effect and pointer cursor.'
			],
			['<code class="code">.table-sort-asc</code>', '-', 'Apply to a table heading cell to add a down arrow indicating ascending sort.'],
			['<code class="code">.table-sort-dsc</code>', '-', 'Apply to a table heading cell to add an up arrow indicating descending sort.'],
			['<code class="code">.table-row-checked</code>', '-', 'Apply to a table body row to indicate selection state.'],
			['<code class="code">.table-cell-fit</code>', '-', 'Apply to a table cell to auto-fit to the content widths.']
		]
	};

	// Local
	let tabSet = 0;
	const tableArr = Array(5)
		.fill(undefined)
		.map(() => faker.science.chemicalElement());
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="table-container text-token">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>Name</th>
								<th>Symbol</th>
								<th>Atomic Number</th>
							</tr>
						</thead>
						<tbody>
							{#each tableArr as row}
								<tr>
									<td>{row.name}</td>
									<td>{row.symbol}</td>
									<td><span class="badge variant-soft-primary">{row.atomicNumber}</span></td>
								</tr>
							{/each}
						</tbody>
						<tfoot>
							<tr>
								<th colspan="2">Total Elements</th>
								<td>{tableArr.length} Elements</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Position</th>
				<th>Name</th>
				<th>Symbol</th>
				<th>Weight</th>
			</tr>
		</thead>
		<tbody>
			{#each tableArr as row, i}
				<tr>
					<td>{row.position}</td>
					<td>{row.name}</td>
					<td>{row.symbol}</td>
					<td>{row.weight}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3">Calculated Total Weight</th>
				<td>{totalWeight}</td>
			</tr>
		</tfoot>
	</table>
</div>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>
			Wrap a <code class="code">.table-container</code> element around any native HTML table with the <code class="code">.table</code> class
			applied to create a responsive table.
		</p>
		<!-- Options -->
		<section class="space-y-4">
			<h2 class="h2">Options</h2>
			<TabGroup regionPanel="space-y-4">
				<Tab bind:group={tabSet} name="tab1" value={0}>Spacing</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>Hover</Tab>
				<Tab bind:group={tabSet} name="tab3" value={2}>Selection</Tab>
				<Tab bind:group={tabSet} name="tab3" value={3}>Fit Width</Tab>
				<Tab bind:group={tabSet} name="tab3" value={4}>Sorting</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						<!-- Spacing -->
						<p>
							Apply classes <code class="code">.table-compact</code> or <code class="code">.table-comfortable</code> to the <em>table</em> for
							tighter or looser row spacing.
						</p>
						<CodeBlock language="html" code={`<table class="table-compact">...</table>`} />
					{:else if tabSet === 1}
						<!-- Hover -->
						<p>
							Apply the <code class="code">.table-hover</code> class to add a subtle hover style which can be helpful when scanning data
							horizontally. You can also use the <code class="code">.table-interactive</code> class if the table rows is intended to be interactive
							on click. Avoid using both classes.
						</p>
						<CodeBlock language="html" code={`<table class="table-hover">...</table>`} />
						<CodeBlock language="html" code={`<table class="table-interactive">...</table>`} />
					{:else if tabSet === 2}
						<!-- Selection -->
						<p>Apply the <code class="code">.table-row-checked</code> class to a table body row to indicate an active selection state.</p>
						<CodeBlock language="html" code={`<tr class="table-row-checked">...</tr>`} />
					{:else if tabSet === 3}
						<!-- Fit -->
						<p>
							Use the <code class="code">.table-cell-fit</code> class on a cell element to fit the cell to the content widths. This can be useful
							for small columns that contain elements such as avatars or IDs. Be sure to apply to both the table header and table cell.
						</p>
						<CodeBlock language="html" code={`<th class="table-cell-fit">Avatar</th>`} />
						<CodeBlock language="html" code={`<td class="table-cell-fit">(avatar)</td>`} />
					{:else if tabSet === 4}
						<!-- Sorting -->
						<p>
							Apply <code class="code">.table-sort-asc</code> or <code class="code">.table-sort-dsc</code> to the <em>table head</em> elements
							to sort by ascending or descending order respectively.
						</p>
						<CodeBlock language="html" code={`<th class="table-sort-asc">Skeleton</th>`} />
						<CodeBlock language="html" code={`<th class="table-sort-dsc">Skeleton</th>`} />
					{/if}
				</svelte:fragment>
			</TabGroup>
		</section>
		<!-- See Also -->
		<section class="space-y-4">
			<h2 class="h2">See Also</h2>
			<div class="card p-4 space-y-4">
				<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
					<p>A simple data-driven table component.</p>
					<a class="btn variant-ghost-surface" href="/components/tables">Tables Component &rarr;</a>
				</div>
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
