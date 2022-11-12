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
								<tr class:table-row-checked={row.dataTableChecked} aria-rowindex={rowIndex + 1}>
									<td role="gridcell" aria-colindex={1} tabindex="0">
										<input type="checkbox" bind:checked={row.dataTableChecked} />
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
		<!-- Debugging -->
		<!-- <pre>{JSON.stringify($dataTableModel.selection, null, 2)}</pre> -->
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Intro -->
		<section class="space-y-4">
			<h2>What is a Data Table?</h2>
			<p>
				Data tables are not a singular feature, but rather a collection of utility methods. Most features are opt-in, so you can
				progressively enhance any native HTML table to meet your requirements. Read the instruction below to learn how to implement each
				feature.
			</p>
		</section>
		<hr />
		<!-- Getting Started -->
		<section class="space-y-4">
			<h2>Getting Started</h2>
			<p>Let's start by importing all the utility features. We've cover each of these in detail below.</p>
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
				We'll need data to populate the table. For simplicity, let's create this locally. In a real world app you might fetch this from an
				external API.
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
				We'll make use of a few Tailwind Element <a href="/elements/tables">table classes</a> to provide base styles to our native HTML table
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
				To unlock the power of our data tables, we'll need to create a data table model. Create Svelte writable store, if you're using
				Typescript set the type to <code>DataTableModel</code>, then pass the store to the <code>dataTableHandler</code> method.
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
				Now we need to display our table data on our page. Add each each desired heading, paired with a matching body cell value. We'll use
				a <em>foreach</em> loop to iterate each table body row. Note we use <code>$dataTableModel.filtered</code> as our loop source. This shows
				the results filtered by search, sort, pagination, etc.
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
				To implement search, bind <code>$dataTableModel.search</code> to any search input. You can place this input anywhere on the page.
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
				Add <code>data-sort="(key)"</code> to each heading you wish to be sortable. Tapping a heading will set to the sort value and update
				the UI. Tapping the heading repeatedly will toggle between <em>ascending</em> and <em>descending</em> sort order.
			</p>
			<CodeBlock language="html" code={`<th data-sort="position">Position</th>`} />
			<p>
				While sort is working, we're lacking a visual UI indicator. To handle this, implement a multi-purpose Svelte Action called <code
					>dataTableInteraction</code
				>. This adds the appropriate CSS classes and shows &uarr and &darr; sort arrows.
			</p>
			<CodeBlock language="html" code={`<table ... use:dataTableInteraction>`} />
		</section>
		<!-- Selection -->
		<section class="space-y-4">
			<h2>Selection</h2>
			<h3>Per Row</h3>
			<p>To handle row selection, we'll add a new heading. Keep the comment, as we'll replace it in a following step.</p>
			<CodeBlock language="html" code={`<th><!-- selection --></th>`} />
			<p>
				Pair this with a matching table body cell that includes a checkbox input. Append <code>bind:dataTableChecked</code> to the input to
				extend row object soure data. When checked on/off, the <code>dataTableHandler</code> will automatically include/exclude the entire
				row object in
				<code>$dataTableModel.selection</code>.
			</p>
			<CodeBlock language="html" code={`<td><input type="checkbox" bind:checked={row.dataTableChecked} /></td>`} />
			<p>
				If you wish to visually highlight the row selection, Tailwind Elements includes a semantic class for this. Append this to your table
				body row element.
			</p>
			<CodeBlock language="html" code={`<tr class:table-row-checked={row.dataTableChecked}>`} />
			<h3>Pre-Selected</h3>
			<p>
				In some instances you may wish to pre-select certain table rows. We've provided a utility method to handle this. Pass your model,
				the key to query against, and a whitelist of values. Any object that matches these conditions will be selected. Trigger this
				multiple times for multipe selection queries.
			</p>
			<CodeBlock
				language="ts"
				code={`// Select all objects with a position value of 1 or 2:\ndataTableSelect(dataTableModel, 'position', [1,2]);`}
			/>
			<h3>Select All</h3>
			<p>
				If you wish to add a <em>select all</em> feature, add the following checkbox input to your table heading. This replaces
				<code>{`<th><!-- selection --></th>`}</code>.
			</p>
			<CodeBlock language="html" code={`<th><input type="checkbox" on:click={(e) => { dataTableSelectAll(e, dataTableModel) }} /></th>`} />
		</section>
		<!-- Pagination -->
		<section class="space-y-4">
			<h2>Pagination</h2>
			<p>
				For brevity, we'll refer to the <a href="/components/paginators">Paginators component</a> to learn more about this feature. Use
				<code>$dataTableModel.pagination</code> for providing data table pagination settings. This ensures the model updates reactively.
				Note the use of the wrapping <em>if</em> statement.
			</p>
			<CodeBlock language="html" code={`{#if $dataTableModel.pagination}<Paginator bind:settings={$dataTableModel.pagination} />{/if}`} />
		</section>
		<!-- A11y -->
		<section class="space-y-4">
			<h2>Accessibility</h2>
			<p>
				Since data tables make use of native HTML table elements, it will be up to you to implement accessibility features. However, we've
				simplified this by providing a Svelte Action called <code>tableA11y</code>. This implements the required event listeners for
				keyboard interaction. Start by appending <em>role</em> and <em>action</em> to your <em>table</em> element.
			</p>
			<CodeBlock language="html" code={`<table ... role="grid" use:tableA11y>`} />
			<p>
				Implment the <code>aria-rowindex</code> attribute. This starts at <strong>1</strong> and increments per <em>tr</em> row. We can
				utilize the <em>foreach</em> loop index value, named <code>rowIndex</code>.
			</p>
			<CodeBlock language="html" code={`<tr ... aria-rowindex={rowIndex + 1}>`} />
			<p>
				Implement three attributes per table body <em>td</em> cell. <code>role</code> and <code>tabindex</code> are fixed, while
				<code>aria-colindex</code>
				starts at <strong>1</strong> and increments per cell.
			</p>
			<CodeBlock
				language="html"
				code={`
<td ... role="gridcell" aria-colindex={1} tabindex="0">...</td>
<td ... role="gridcell" aria-colindex={2} tabindex="0">...</td>
<!-- ... -->
			`}
			/>
			<p>Reference the <em>Keyboard</em> tab section at the top of this page for available interactions.</p>
		</section>
		<hr />
		<!-- Reference -->
		<section class="space-y-4">
			<h2>View Reference</h2>
			<p>
				If you wish to see a complete data table, we recommend tapping the <em>Doc Source</em> link at the top of this page. This will allow
				you to inspect how the featured example at the top of this page was constructed. This implements every available data table feature.
			</p>
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
