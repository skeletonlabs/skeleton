<script lang="ts">
	// HTTP response data provided by +page.ts
	import type { PageData } from './$types';
	export let data: PageData;
	let httpPosts = Object.values(data);

	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import Paginator from '$lib/components/Paginator/Paginator.svelte';
	// Utilities
	import {
		type DataTableModel,
		dataTableHandler,
		dataTableSelect,
		dataTableSelectAll,
		dataTableSort,
		dataTableInteraction,
		tableA11y
	} from '$lib/utilities/DataTable/DataTable';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Data Tables',
		description: 'A set of utility features for creating template-driven data tables.',
		imports: ['dataTableHandler'],
		types: ['DataTableModel'],
		source: 'utilities/Table',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
		keyboard: [
			['<kbd>Right Arrow</kbd>', 'Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.'],
			['<kbd>Left Arrow</kbd>', 'Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.'],
			['<kbd>Down Arrow</kbd>', 'Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.'],
			['<kbd>Up Arrow</kbd>', 'Moves focus one cell Up. If focus is on the top cell in the column, focus does not move.'],
			['<kbd>Home</kbd>', 'Moves focus to the first cell in the row that contains focus.'],
			['<kbd>End</kbd>', ' Moves focus to the last cell in the row that contains focus.']
			// ['<kbd>Enter</kbd> or <kbd>Space</kbd>', 'Triggers the on:click event for the current row.']
		]
	};

	// Store
	const dataTableModel: Writable<DataTableModel> = writable({
		source: httpPosts,
		filtered: httpPosts,
		selection: [],
		search: '',
		sort: '',
		pagination: { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] }
	});
	dataTableModel.subscribe((v) => dataTableHandler(v));

	// Manual Selection
	dataTableSelect(dataTableModel, 'id', [1]);
</script>

<!--
TODO:
- [X] Search sould be case-insensitive
- [X] Recreate dataTableSelect() - query select on load 
- [/] Use a11y action to apply role/aria tags - not possible
- [X] Implement sort asc/dsc toggle
- [X] Clean up CSS and responsive styles
- [X] Test combined filtering for edge cases
- [ ] Doc Usage/Code inline
      - Enable action CSS for desc arrow
	  - Rename `checked` to something unique `dtChecked`
Next Update:
- [ ] Select all checkbox using indeterminate: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
-->

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card !bg-accent-500/5">
			<!-- Search Input -->
			<div class="card-header">
				<input bind:value={$dataTableModel.search} type="search" placeholder="Search Table..." />
			</div>
			<!-- Table -->
			<div class="card-body">
				<div class="table-container">
					<!-- prettier-ignore -->
					<table class="table table-hover" role="grid" use:dataTableInteraction use:tableA11y>
						<thead on:click={(e) => { dataTableSort(e, dataTableModel) }} on:keypress>
							<tr>
								<th><input type="checkbox" on:click={(e) => { dataTableSelectAll(e, dataTableModel) }} /></th>
								<th data-sort="id">ID</th>
								<th>User</th>
								<th data-sort="title">Title</th>
								<th data-sort="body">Body</th>
								<th class="table-cell-fit"></th>
							</tr>
						</thead>
						<tbody>
							{#each $dataTableModel.filtered as row, rowIndex}
								<tr class:table-row-checked={row.checked} aria-rowindex={rowIndex + 1}>
									<td role="gridcell" aria-colindex={1} tabindex="0">
										<input type="checkbox" bind:checked={row.checked} />
									</td>
									<td role="gridcell" aria-colindex={2} tabindex="0">
										<em class="opacity-50">{row.id}</em>
									</td>
									<td role="gridcell" aria-colindex={3} tabindex="0">
										<Avatar src={`https://i.pravatar.cc/?img=${row.id}`} width="w-8" />
									</td>
									<td role="gridcell" aria-colindex={4} tabindex="0" class="md:!whitespace-normal capitalize">
										{row.title}
									</td>
									<td role="gridcell" aria-colindex={5} tabindex="0" class="md:!whitespace-normal">
										{row.body}
									</td>
									<td role="gridcell" aria-colindex={6} tabindex="0" class="table-cell-fit">
										<button class="btn btn-ghost-surface btn-sm" on:click={()=>{console.log(row,rowIndex)}}>Console Log</button>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<div class="card-footer">
				{#if $dataTableModel.pagination}<Paginator bind:settings={$dataTableModel.pagination} />{/if}
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<!-- Limit to a single selection -->
	<!-- disabled={!row.selected && dataTableModel.selection.length > 0} -->
	<svelte:fragment slot="usage">
		<!-- Intro -->
		<section class="space-y-4">
			<h2>What is a Data Table?</h2>
			<p>
				Data tables are not a singular feature, but rather a collection of a set of utilities. Most features are opt-in, so you can
				progressively enhance native HTML tables until you meet the requirements for your project. It's recommended you read the usage
				guidance instructions below step-by-step.
			</p>
		</section>
		<hr />
		<!-- Getting Started -->
		<section class="space-y-4">
			<h2>Getting Started</h2>
			<p>Let's start by importing all the utility features we're going to use. We've cover each of these in detail below.</p>
			<CodeBlock
				language="ts"
				code={`
import {
	type DataTableModel,
	dataTableHandler,
	dataTableSelect,
	dataTableSelectAll,
	dataTableSort,
	dataTableInteraction,
	tableA11y
} from '$lib/utilities/DataTable/DataTable';
			`}
			/>
			<p>
				We'll need data to populate the table. In most cases this may be fetched from an HTTP source. But for simplicity, let's create this
				locally.
			</p>
			<CodeBlock
				language="ts"
				code={`
const sourceData = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
	{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
	{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
	{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
	{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
	{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];
			`}
			/>
			<p>
				We'll make use of a few Tailwind Element <a href="/elements/tables">table classes</a> to provide basic styles to our native HTML table
				element.
			</p>
			<CodeBlock
				language="html"
				code={`
	<div class="table-container">
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Heading 1</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Cell 1</td>
			</tr>
		</tbody>
	</table>
	</div>
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Data Table Model</h2>
			<p>
				To unlock the power of our data tables, we'll need to create a data table model. For this, we'll combine a Svelte writable store set
				to the <code>DataTableModel</code> type, as well as provide our store data to the <code>dataTableHandler</code>.
			</p>
			<CodeBlock
				language="ts"
				code={`
const dataTableModel: Writable<DataTableModel> = writable({
	// The original unfiltered source data.
	source: sourceData,
	// The filtered source data, shown in UI.
	filtered: sourceData,
	// An array of selected row objects.
	selection: [],
	// The current search term.
	search: '',
	// The current sort key.
	sort: '',
	// The Pagination component settings.
	pagination: { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] }
});\n
// Automatically handles search, sort, etc when the model updates.
dataTableModel.subscribe((v) => dataTableHandler(v));
			`}
			/>
			<p>
				Let's update our table to display our current model data. Add each heading you wish to display, then pair the matching body cell
				values within a <em>foreach</em> loop. Note we use <code>$dataTableModel.filtered</code> instead of <em>source</em>.
			</p>
			<CodeBlock
				language="ts"
				code={`
<thead>
	<tr>
		<th>Position</th>
		<th>Name</th>
		<!-- ... --->
	</tr>
</thead>
<tbody>
	{#each $dataTableModel.filtered as row, rowIndex}
		<tr>
			<td>{row.position}</td>
			<td>{row.name}</td>
			<!-- ... --->
		</tr>
	{/each}
</tbody>
			`}
			/>
		</section>
		<hr />
		<!-- Search -->
		<section class="space-y-4">
			<h2>Search</h2>
			<p>
				To implement search, bind <code>$dataTableModel.search</code> to a search input value. You can place this input anywhere on the page.
			</p>
			<CodeBlock language="html" code={`<input bind:value={$dataTableModel.search} type="search" placeholder="Search..." />`} />
		</section>
		<!-- Sort -->
		<section class="space-y-4">
			<h2>Sort</h2>
			<p>
				We'll use <code>dataTableSort</code> to automatically set <code>$dataTableModel.sort</code> when a table heading is tapped. Add the following
				to your table head element.
			</p>
			<CodeBlock language="html" code={`<thead on:click={(e) => { dataTableSort(e, dataTableModel) }}>`} />
			<p>
				Let's indicate which headings are sortable and their related source key name. Add <code>data-sort</code> to each heading you wish to
				be sortable. When a heading is tapped the model sort value is set to the value provided here. Tapping the heading repeatedly will
				toggle <em>ascending</em> and <em>descending</em> sort for that column.
			</p>
			<CodeBlock language="html" code={`<th data-sort="position">Position</th>`} />
			<p>
				While sort is functionally working, we're lacking a visual indactor in the table UI. To handle this, we've provided a multi-purpose
				Svelte Action called <code>dataTableInteraction</code>. Let's add this to our table element to add the appropriate CSS classes for
				up/down sort arrows.
			</p>
			<CodeBlock language="html" code={`<table ... use:dataTableInteraction>`} />
		</section>
		<!-- Selection -->
		<section class="space-y-4">
			<h2>Selection</h2>
			<h3>Per Row</h3>
			<p>To handle row selection, we'll add a new heading.</p>
			<CodeBlock language="html" code={`<th><!-- selection --></th>`} />
			<p>
				As well as a matching table body cell with a checkbox input. We'll use the <em>bind:checked</em> to extend our source objects with a
				new key called <code>checked</code>. When checked on/off, <code>dataTableHandler</code> will include/exclude the entire row object
				in <code>$dataTableModel.selection</code>.
			</p>
			<CodeBlock language="html" code={`<td><input type="checkbox" bind:checked={row.checked} /></td>`} />
			<p>
				If you wish to visually highlight the row selection, Tailwind Elements includes a class for this. Append this to your table body row
				element.
			</p>
			<CodeBlock language="html" code={`<tr class:table-row-checked={row.checked}>`} />
			<h3>Pre-Selected</h3>
			<p>
				In some instances you may wish to pre-select certain table rows. You can update your row object to include <code>checked:true</code
				>. Otherwise we've provided a utility method for handling this. Pass your model, the key to query against, and a whitelist of
				values. Any object that matches these conditions will be selected.
			</p>
			<CodeBlock
				language="ts"
				code={`// Select all objects with a position value of 1 or 2:\ndataTableSelect(dataTableModel, 'position', [1,2]);`}
			/>
			<h3>Select All</h3>
			<p>
				Finally, in some cases it can be useful to offer a <em>select all</em> feature. Let's start by adding a special checkbox to our
				table heading. Note this will replace the our previously placeholder comment of <code>{`<th><!-- selection --></th>`}</code>.
			</p>
			<CodeBlock language="html" code={`<th><input type="checkbox" on:click={(e) => { dataTableSelectAll(e, dataTableModel) }} /></th>`} />
		</section>
		<!-- Pagination -->
		<section class="space-y-4">
			<h2>Pagination</h2>
			<p>
				For brevity, we'll refer to the <a href="/components/paginators">Paginators component</a> instruction to get started. Note that for
				data tables we'll use <code>$dataTableModel.pagination</code> for settings. We recommend the use of a wrapping <em>if</em> statement.
			</p>
			<CodeBlock language="html" code={`{#if $dataTableModel.pagination}<Paginator bind:settings={$dataTableModel.pagination} />{/if}`} />
		</section>
		<!-- A11y -->
		<section class="space-y-4">
			<h2>Accessibility</h2>
			<p>
				Since data tables make use of native HTML table elements, it will be up to you to implement accessibility features. However, we've
				simplified this by providing a Svelte Action called <code>tableA11y</code>. This implements keyboard interaction event listeners.
				Start by appending the <em>role</em> and <em>action</em> to your <em>table</em> element.
			</p>
			<CodeBlock language="html" code={`<table ... role="grid" use:tableA11y>`} />
			<p>
				Implment the <code>aria-rowindex</code> attribute. This starts at <strong>1</strong> and increments per <em>tr</em> row. We can
				utilize the <em>foreach</em> loop index value, named <code>rowIndex</code>.
			</p>
			<CodeBlock language="html" code={`<tr ... aria-rowindex={rowIndex + 1}>`} />
			<p>
				Implement three attributes per table body <em>td</em> cell. The <code>role</code> and <code>tabindex</code> are fixed, while
				<code>aria-colindex</code>
				starts at <strong>1</strong> and increments per cell.
			</p>
			<CodeBlock
				language="html"
				code={`
<td ... role="gridcell" aria-colindex={1} tabindex="0">Cell 1</td>
<td ... role="gridcell" aria-colindex={2} tabindex="0">Cell 2</td>
<!-- ... -->
			`}
			/>
			<p>Reference the <em>Keyboard</em> tab section at the top of this page for available interactions.</p>
		</section>
		<hr />
		<!-- Simple Table Callout -->
		<section class="grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-4">
				<h2>Table Components</h2>
				<p>Looking for a simpler data-driven table component? Visit the Table documentation.</p>
			</div>
			<a class="btn btn-filled-accent place-self-center" href="/components/tables">View Tables</a>
		</section>
	</svelte:fragment>
</DocsShell>
