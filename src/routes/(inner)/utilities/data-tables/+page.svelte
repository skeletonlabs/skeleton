<script lang="ts">
	// HTTP response data provided by +page.ts
	import type { PageData } from './$types';
	export let data: PageData;
	const httpPosts = data.posts;

	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import Paginator from '$lib/components/Paginator/Paginator.svelte';
	// Utilities
	import { createDataTableStore, dataTableHandler, tableInteraction, tableA11y } from '$lib/utilities/DataTable/DataTable';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Data Tables',
		description: 'A set of utility features for creating template-driven data tables.',
		imports: ['dataTableHandler'],
		types: ['DataTableModel'],
		source: 'utilities/DataTable',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
		keyboard: [
			[
				'<kbd class="kbd">Right Arrow</kbd>',
				'Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.'
			],
			[
				'<kbd class="kbd">Left Arrow</kbd>',
				'Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.'
			],
			[
				'<kbd class="kbd">Down Arrow</kbd>',
				'Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.'
			],
			['<kbd class="kbd">Up Arrow</kbd>', 'Moves focus one cell Up. If focus is on the top cell in the column, focus does not move.'],
			['<kbd class="kbd">Home</kbd>', 'Moves focus to the first cell in the row that contains focus.'],
			['<kbd class="kbd">End</kbd>', ' Moves focus to the last cell in the row that contains focus.']
			// ['<kbd class="kbd">Enter</kbd> or <kbd class="kbd">Space</kbd>', 'Triggers the on:click event for the current row.']
		]
	};
	const post = httpPosts.pop()!;

	// Store
	const dataTableStore = createDataTableStore(httpPosts, {
		sort: '',
		search: '',
		pagination: { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] }
	});
	dataTableStore.subscribe((model) => dataTableHandler(model));

	// Manual Selection
	dataTableStore.select('id', [1]);

	// Update the source data
	httpPosts.push(post);
	dataTableStore.updateSource(httpPosts);
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<!-- Alert -->
		<aside class="alert variant-ghost-error">
			<i class="fa-solid fa-triangle-exclamation text-4xl animate-pulse" />
			<div class="alert-message">
				<h3 class="h3">Experimental Feature</h3>
				<p>
					This feature currently delisted. It is not feature complete, contains bugs, and is not ready for production use. View the linked
					GitHub ticket if you wish to track the progress of this feature.
				</p>
			</div>
			<div class="alert-message">
				<a href="https://github.com/skeletonlabs/skeleton/issues/538" target="_blank" rel="noreferrer" class="btn variant-filled w-full">
					Track Progress
				</a>
				<!-- <a href="https://svelte-headless-table.bryanmylee.com/" target="_blank" rel="noreferrer" class="btn variant-filled w-full">
					View Alternative
				</a> -->
			</div>
		</aside>

		<section class="card variant-glass">
			<!-- Search Input -->
			<div class="card-header">
				<input class="input" bind:value={$dataTableStore.search} type="search" placeholder="Search Table..." />
			</div>
			<!-- Table -->
			<div class="p-4">
				<div class="table-container">
					<!-- prettier-ignore -->
					<table class="table table-hover" role="grid" use:tableInteraction use:tableA11y>
						<thead on:click={(e) => { dataTableStore.sort(e) }} on:keypress>
							<tr>
								<th><input type="checkbox" on:click={(e) => { dataTableStore.selectAll(e.currentTarget.checked) }} /></th>
								<th data-sort="id">ID</th>
								<th>User</th>
								<th data-sort="title">Title</th>
								<th data-sort="body">Body</th>
								<th class="table-cell-fit"></th>
							</tr>
						</thead>
						<tbody>
							{#each $dataTableStore.filtered as row, rowIndex}
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
										<button class="btn variant-ghost-surface btn-sm" on:click={()=>{console.log(row,rowIndex)}}>Console Log</button>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<div class="card-footer">
				<Paginator bind:settings={$dataTableStore.pagination} />
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Intro -->
		<section class="space-y-4">
			<h2 class="h2">What are Data Tables?</h2>
			<p>
				Within the context of Skeleton, data tables are not a singular feature, but rather a collection of utilities. These utility features
				are opt-in, meaning you can progressively enhance any native HTML table to meet your requirements. This is one of the most complex
				features Skeleton provides, so please read carefully.
			</p>
		</section>

		<hr />
		<!-- Getting Started -->
		<section class="space-y-4">
			<h2 class="h2">Getting Started</h2>
			<p>Let's start by importing all the utility features we'll need. We'll cover each of these in greater detail below.</p>
			<CodeBlock
				language="ts"
				code={`
import {
	// Utilities
	createDataTableStore,
	dataTableHandler,
	// Svelte Actions
	tableInteraction,
	tableA11y
} from '@skeletonlabs/skeleton';`}
			/>
			<!-- prettier-ignore -->
			<p>
				We need data to populate the table. For simplicity, let's create this locally. In a real world app you might fetch this from an
				external API. We demonstrate this in the <a href="https://github.com/skeletonlabs/skeleton/blob/master/src/routes/(inner)/utilities/data-tables/%2Bpage.svelte" target="_blank" rel="noreferrer">example on this page</a>. See the use of <code class="code">PageData</code> in the source.
			</p>
			<CodeBlock
				language="ts"
				code={`
const sourceData = [
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
];`}
			/>
			<p>
				We'll make use of Skeleton's <a href="/elements/tables">table element classes</a> to provide base styles to our native HTML table element.
				These are optional, but recommended.
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
</div>`}
			/>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Data Table Model</h2>
			<p>
				To unlock the power of our data tables, we'll need to create what we'll refer to as a <em>data table model</em>. Create a new Svelte
				writable store with <code class="code">createDataTableStore</code>, then pass the model of our store to the
				<code class="code">dataTableHandler</code> method.
			</p>
			<CodeBlock
				language="ts"
				code={`
const dataTableStore = createDataTableStore(
	// Pass your source data here:
	sourceData,
	// Provide optional settings:
	{
		// The current search term.
		search: '',
		// The current sort key.
		sort: '',
		// Paginator component settings.
		pagination: { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] }
	}
);\n
// This automatically handles search, sort, etc when the model updates.
dataTableStore.subscribe((model) => dataTableHandler(model));`}
			/>
			<p>
				Next, we'll update our table markup to display our model data. Implement matching parent headings and body cells. We'll use an <code
					>#each</code
				>
				loop to generate each table row. Note we use <code class="code">$dataTableStore.filtered</code>
				as our loop source. This represents the data as modified by search, sort, pagination, and more.
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
	{#each $dataTableStore.filtered as row, rowIndex}
		<tr>
			<td>{row.position}</td>
			<td>{row.name}</td>
			<!-- ... --->
		</tr>
	{/each}
</tbody>`}
			/>
		</section>
		<hr />
		<!-- Updating Source -->
		<section class="space-y-4">
			<h2 class="h2">Updating the Source</h2>
			<p>
				To update the content of the data table, just call the <code class="code">dataTableStore.updateSource()</code> method and pass in your
				new source data.
			</p>
			<CodeBlock language="ts" code={`dataTableStore.updateSource(newSourceData)`} />
		</section>
		<!-- Search -->
		<section class="space-y-4">
			<h2 class="h2">Search</h2>
			<p>
				To implement search, bind <code class="code">$dataTableStore.search</code> to any search input. You may add this anywhere as long as
				it has scope of your table model (the store).
			</p>
			<CodeBlock language="html" code={`<input bind:value={$dataTableStore.search} type="search" placeholder="Search..." />`} />
		</section>
		<!-- Sort -->
		<section class="space-y-4">
			<h2 class="h2">Sort</h2>
			<p>
				We'll use the <code class="code">dataTableStore.sort()</code> method to automatically set
				<code class="code">$dataTableStore.sort</code>
				when a table heading is tapped. Add the following click method once to your table's <code class="code">thead</code> element.
			</p>
			<CodeBlock language="html" code={`<thead on:click={(e) => { dataTableStore.sort(e) }} on:keypress>`} />
			<p>
				Add a <code class="code">data-sort="(key)"</code> attribute to each heading you wish to be sortable. Tapping a heading will set the
				<code class="code">$dataTableStore.sort</code>
				value and update the UI. Tapping a heading repeatedly will toggle between <em>ascending</em> and <em>descending</em> sort order.
			</p>
			<CodeBlock
				language="html"
				code={`
<th data-sort="position">Position</th>
<th data-sort="name">Name</th>
<!-- ... -->
			`}
			/>
			<p>
				While sort is working, there's currently no visual UI indicator. To handle this, implement the Svelte Action called <code
					>tableInteraction</code
				>
				to your table element. This will toggle the appropriate CSS classes and show &uarr and &darr; sort arrows.
			</p>
			<CodeBlock language="html" code={`<table ... use:tableInteraction>`} />
		</section>
		<!-- Selection -->
		<section class="space-y-4">
			<h2 class="h2">Selection</h2>
			<h3 class="h3">Per Row</h3>
			<p>To handle row selection, we'll add a new heading column. Keep the comment shown, as we'll replace it in a following step.</p>
			<CodeBlock language="html" code={`<th><!-- selection --></th>`} />
			<p>
				Pair this with a matching table body cell that includes a checkbox input. Append <code class="code">bind:checked</code> to the input
				to extend the row object source data. When checked on/off, the <code class="code">dataTableHandler</code> will automatically
				include/exclude the entire row object in
				<code class="code">$dataTableStore.selection</code>.
			</p>
			<CodeBlock language="html" code={`<td><input type="checkbox" bind:checked={row.dataTableChecked} /></td>`} />
			<p>
				If you wish to visually highlight the row selection, Tailwind Elements includes a semantic class for this. Append this to your table
				body row element.
			</p>
			<CodeBlock language="html" code={`<tr class:table-row-checked={row.dataTableChecked}>`} />
			<h3 class="h3">Pre-Selected</h3>
			<p>
				You may wish to pre-select certain table rows. We've provided a utility method to handle this. Pass in the key to query against, and
				a whitelist of values. Any object that matches the conditions will be selected. Trigger this multiple times for multiple selection
				queries.
			</p>
			<CodeBlock
				language="ts"
				code={`// Selects all objects with a position value of 1 or 2:\ndataTableStore.select('position', [1,2]);`}
			/>
			<h3 class="h3">Select All</h3>
			<p>
				If you wish to add a <em>select all</em> feature, replace <code class="code">{`<th><!-- selection --></th>`}</code> with the following.
			</p>
			<CodeBlock
				language="html"
				code={`<th><input type="checkbox" on:click={(e) => { dataTableStore.selectAll(e.currentTarget.checked) }} /></th>`}
			/>
		</section>
		<!-- Pagination -->
		<section class="space-y-4">
			<h2 class="h2">Pagination</h2>
			<p>
				Please refer to the <a href="/components/paginators">Paginator component</a> to learn more about this feature. For data tables, use
				<code class="code">$dataTableStore.pagination</code> to ensures the model updates reactively. The wrapping <em>if</em> statement is required.
			</p>
			<CodeBlock language="html" code={`{#if $dataTableStore.pagination}<Paginator bind:settings={$dataTableStore.pagination} />{/if}`} />
		</section>
		<!-- A11y -->
		<section class="space-y-4">
			<h2 class="h2">Accessibility</h2>
			<p>
				Since data tables make use of native HTML table elements, you will need to implement accessibility features directly. However, we've
				simplified this by providing a Svelte Action called <code class="code">tableA11y</code>. This implements the required event
				listeners for keyboard interaction. Start by appending <em>role</em> and <em>action</em> to your <em>table</em> element.
			</p>
			<CodeBlock language="html" code={`<table ... role="grid" use:tableA11y>`} />
			<p>
				Implement the <code class="code">aria-rowindex</code> attribute. This starts at <strong>1</strong> and increments per <em>tr</em>
				row. We can utilize the <em>#each</em> loop index value, named <code class="code">rowIndex</code>.
			</p>
			<CodeBlock language="html" code={`<tr ... aria-rowindex={rowIndex + 1}>`} />
			<p>
				Implement three attributes per table body <em>td</em> cell. <code class="code">role</code> and <code class="code">tabindex</code>
				are static, while
				<code class="code">aria-colindex</code>
				starts at <strong>1</strong> and increments per cell.
			</p>
			<CodeBlock
				language="html"
				code={`
<td ... role="gridcell" aria-colindex={1} tabindex="0">...</td>
<td ... role="gridcell" aria-colindex={2} tabindex="0">...</td>
<!-- ... -->`}
			/>
			<p>Reference the <em>Keyboard</em> tab section at the top of this page for a list of available keyboard interactions.</p>
		</section>
		<hr />
		<!-- Reference -->
		<section class="space-y-4">
			<h2 class="h2">View Reference</h2>
			<p>
				If you wish to see a complete data table, we recommend tapping the <em>Doc Source</em> link at the top of this page. This will allow
				you to inspect how the featured example at the top of this page was constructed. This implements every available data table feature.
			</p>
		</section>
		<hr />
		<!-- Simple Table Callout -->
		<section class="grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-4">
				<h2 class="h2">Table Components</h2>
				<p>Looking for a simpler data-driven table component? Visit the Table documentation.</p>
			</div>
			<a class="btn variant-filled-secondary place-self-center" href="/components/tables">View Tables</a>
		</section>
	</svelte:fragment>
</DocsShell>
