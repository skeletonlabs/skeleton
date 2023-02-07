<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Tables',
		description: 'Provides a set of styles for native HTML table elements.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/tables'],
		source: 'styles/elements/tables.css',
		classes: [
			['<code>.table-container</code>', '-', 'Apply to a wrapping parent element to enable responsive scrolling.'],
			['<code>.table</code>', '-', 'Apply to a native HTML table element to add table styles.'],
			['<code>.table-compact</code>', '-', 'Apply to the native HTML element to set shorter row spacing.'],
			['<code>.table-comfortable</code>', '-', 'Apply to the native HTML element to set taller row spacing.'],
			['<code>.table-hover</code>', '-', 'Apply to a table element to enable a subtle hover effect on rows.'],
			['<code>.table-interactive</code>', '-', 'Apply to a table element to enable visible hover effect and pointer cursor.'],
			['<code>.table-sort-asc</code>', '-', 'Apply to a table heading cell to add down arrow indicating ascending sort.'],
			['<code>.table-sort-dsc</code>', '-', 'Apply to a table heading cell to add up arrow indicating desending sort.'],
			['<code>.table-row-checked</code>', '-', 'Apply to a table body row to indicate selection state.'],
			['<code>.table-cell-fit</code>', '-', 'Apply to a table cell to auto-fit to the content widths.']
		]
	};

	// Local
	const tableArr = [
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
	];
	const totalWeight = tableArr.reduce((accumulator, obj) => accumulator + obj.weight, 0);
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="table-container">
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
					{#each tableArr as row}
						<tr>
							<td>{row.position}</td>
							<td>{row.name}</td>
							<td>{row.symbol}</td>
							<td><span class="badge variant-soft-primary">{row.weight}</span></td>
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr>
						<th colspan="3">Total Weight</th>
						<td>{totalWeight}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<p>
				Wrap a <code>.table-container</code> element around any native HTML table with the <code>.table</code> class applied to create a responsive
				table.
			</p>
			<CodeBlock
				language="html"
				code={`
<div class="table-container">
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
		</div>
		<hr />
		<!-- Options -->
		<section class="space-y-4">
			<h2>Options</h2>
			<!-- Row Spacing -->
			<h3>Row Spacing</h3>
			<p>
				Apply classes <code>.table-compact</code> or <code>.table-comfortable</code> to the <em>table</em> for tighter or looser row spacing.
			</p>
			<CodeBlock language="html" code={`<table class="table-compact">...</table>`} />
			<!-- Hover Styles -->
			<h3>Hover Styles</h3>
			<p>
				Apply the <code>.table-hover</code> class to add a subtle hover style which can be helpful when scanning data horizontally. You can
				also use the
				<code>.table-interactive</code> class if the table rows is intended to be interactive on click. Avoid using both classes at the same
				time.
			</p>
			<CodeBlock language="html" code={`<table class="table-interactive">...</table>`} />
			<!-- Row Checked -->
			<h3>Row Checked</h3>
			<p>Apply to a table body row to indicate an active selection state.</p>
			<CodeBlock language="html" code={`<tr class=".table-row-checked">...</tr>`} />
			<!-- Fit Cell Width -->
			<h3>Fit Cell Width</h3>
			<p>
				Use the <code>.table-cell-fit</code> class on a cell element to fit the cell to the content widths. This can be useful for small columns
				that contain elements such as avatars or IDs. Be sure to apply to both the table header and table cell.
			</p>
			<CodeBlock language="html" code={`<th class="table-cell-fit">Avatar</th>`} />
			<CodeBlock language="html" code={`<td class="table-cell-fit">(avatar)</td>`} />
			<!-- Sorting -->
			<h3>Sorting</h3>
			<p>Classes for sorting ascending or descending are available. Apply these to the table head elements.</p>
			<CodeBlock language="html" code={`<th class="table-sort-asc">Skeleton</th>`} />
			<CodeBlock language="html" code={`<th class="table-sort-dsc">Skeleton</th>`} />
		</section>
		<!-- See Also -->
		<section class="space-y-4">
			<h2>See Also</h2>
			<div class="card p-4 space-y-4">
				<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
					<p>A simple data-driven table component.</p>
					<a class="btn variant-ghost-surface" href="/components/tables">Tables Component &rarr;</a>
				</div>
				<!-- CHRIS: delisted until further notice -->
				<!-- <hr />
				<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
					<p>Powerful template-driven utility features for data tables.</p>
					<a class="btn variant-ghost-surface" href="/utilities/data-tables">Data Table Utilities &rarr;</a>
				</div> -->
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
