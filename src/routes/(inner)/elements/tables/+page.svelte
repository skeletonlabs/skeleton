<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-ignore
	// import sveldComp from '$lib/.../Component.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Tables',
		description: 'Provides a set of styles for native HTML table elements.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/tables'],
		source: 'styles/elements/tables.css',
		classes: [
			['<code>.table-container</code>', '-', 'Applied to a wrapping parent element to create make your table responsive.'],
			['<code>.table</code>', '-', 'Apply to a native HTML table element to add table styles.'],
			['<code>.table-hover</code>', '-', 'Enables table hover row styles.']
		]
	};

	// Local
	const tableArr = [
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
		{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
		{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
		{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
		{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
		{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
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
			<p>Use a wrapping <code>.table-container</code> element around a table with the class <code>.table</code> applied to create a responsive table.</p>
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
	</svelte:fragment>
</DocsShell>
