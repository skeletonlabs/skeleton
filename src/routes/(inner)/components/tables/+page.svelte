<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Types
	import type { TableSource } from '$lib/components/Table/types';

	// Utils
	import { mapper, setOrder, getValues, cellFormatter } from '$lib/components/Table/utils';

	// Components
	import Table from '$lib/components/Table/Table.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-ignore
	import sveldTable from '$lib/components/Table/Table.svelte?raw&sveld';
	// @ts-ignore
	import sveldDataTable from '$lib/components/Table/DataTable.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Tables',
		description: 'Generate tables with optional support for search, sort, and pagination.',
		imports: ['Table', 'DataTable'],
		types: ['TableSource'],
		source: 'components/Table',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
		components: [
			{ label: 'Table', sveld: sveldTable },
			{ label: 'DataTable', sveld: sveldDataTable, overrideProps: ['hover', 'spacing', 'padding', 'rounded'] }
		],
		keyboard: [
			['<kbd>Right Arrow</kbd>', 'Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.'],
			['<kbd>Left Arrow</kbd>', 'Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.'],
			['<kbd>Down Arrow</kbd>', 'Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.'],
			['<kbd>Up Arrow</kbd>', 'Moves focus one cell Up. If focus is on the top cell in the column, focus does not move.'],
			['<kbd>Home</kbd>', 'Moves focus to the first cell in the row that contains focus.'],
			['<kbd>End</kbd>', ' Moves focus to the last cell in the row that contains focus.'],
			['<kbd>Enter</kbd> or <kbd>Space</kbd>', 'Triggers the on:selected event.']
		]
	};

	// Local
	const elementsArr = [
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
	const totalWeight = elementsArr.reduce((accumulator, obj) => accumulator + obj.weight, 0);

	// Cell Formatting
	cellFormatter(elementsArr, 'position', '<span class="opacity-50">', '</span>');
	cellFormatter(elementsArr, 'weight', '<code>', '</code>');

	// Table Simple
	const tableSimple: TableSource = {
		head: ['Name', 'Symbol', 'Weight'],
		body: mapper(['name', 'symbol', 'weight'], elementsArr),
		meta: mapper(['position', 'name', 'symbol', 'weight'], elementsArr),
		foot: ['Total', '', `<code>${totalWeight}</code>`]
	};

	// On Row Selected
	function onSelected(meta: any): void {
		console.log(meta.detail);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<Table source={tableSimple} interactive={true} on:selected={onSelected} />
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Table</h2>
			<CodeBlock
				language="typescript"
				code={`
const tableSimple: TableSource = {
	head: ['Name', 'Symbol', 'Weight'],
	body: [ ['Hydrogen', '1.0079', 'H'], /* ... */ ],
	meta: [ ['1', 'Hydrogen', '1.0079', 'H'], /* ... */ ],
	foot: ['Total', '', '112,9696']
};
		`}
			/>
			<CodeBlock language="html" code={`<Table source={tableSimple} interactive={true} />`} />
		</section>
	</svelte:fragment>
</DocsShell>
