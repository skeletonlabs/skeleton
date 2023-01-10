<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect- error sveld import NOTE: remove the space between hyphen and error - this is to keep svelte-check happy
	// import sveldComp from '$lib/.../Component.svelte?raw&sveld';

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
		// { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
		// { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
		// { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
		// { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
		// { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
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
							<td>{row.weight}</td>
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
		<!-- More Options -->
		<section class="space-y-4">
			<h2>Additional Table Options</h2>
			<div class="card p-4 space-y-4">
				<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
					<p>A simple data-driven table component.</p>
					<a class="btn btn-ghost-surface" href="/components/tables">Tables Component &rarr;</a>
				</div>
				<hr />
				<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
					<p>Powerful template-driven utility features for data tables.</p>
					<a class="btn btn-ghost-surface" href="/utilities/data-tables">Data Table Utilities &rarr;</a>
				</div>
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
