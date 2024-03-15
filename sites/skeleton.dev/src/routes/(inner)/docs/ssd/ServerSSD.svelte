<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<div class="space-y-4">
	<!-- SSR -->
	<section class="space-y-4">
		<aside class="alert variant-ghost-warning">
			<i class="fa-solid fa-triangle-exclamation text-4xl" />
			<div class="alert-message" data-toc-ignore>
				<p>
					When using SvelteKit SSR, make sure to utilize <code class="code">@vincjo/datatables/remote</code>.
				</p>
			</div>
		</aside>
		<p>
			By utilizing <code class="code">/remote</code>, this provides two additional functions - Promise-based rows, as well as an invalidate
			function.
		</p>
		<CodeBlock
			language="ts"
			code={`
onChange: (state: State) => Promise\`<Row[]>\`  
invalidate: () => void
    `}
		/>
	</section>

	<!-- Loading Data -->
	<section class="space-y-4">
		<h3 class="h3" data-toc-ignore>1. Loading Data</h3>
		<p>
			For data, we'll use <a class="anchor" href="https://jsonplaceholder.typicode.com/" target="_blank">JSON Placeholder</a> to act as a
			mock API and allow for RESTful calls. In a real world application, we would recommend using
			<a href="https://kit.svelte.dev/docs/load" target="_blank" class="anchor">SvelteKit load functions</a>. However, for this guide, we'll
			implement a simple help function in <code class="code">/src/lib/api.ts</code>.
		</p>
		<CodeBlock
			language="ts"
			code={`
import type { State } from '@vincjo/datatables/remote';

export const reload = async (state: State) => {
	const response = await fetch(\`https://jsonplaceholder.typicode.com/todos?$\{getParams(state)}\`);
	return response.json();
};

const getParams = (state: State) => {
	const { pageNumber, rowsPerPage, sort, filters, search } = state;

	let params = \`_page=$\{pageNumber}\`;

	if (rowsPerPage) {
		params += \`&_limit=$\{rowsPerPage}\`;
	}
	if (sort) {
		params += \`&_sort=$\{sort.orderBy}&_order=$\{sort.direction}\`;
	}
	if (filters) {
		params += filters.map(({ filterBy, value }) => \`&$\{filterBy}=$\{value}\`).join();
	}
	if (search) {
		params += \`&q=$\{search}\`;
	}
	return params;
};
    `}
		/>
		<p>This will return data in the following structure.</p>
		<CodeBlock
			language="json"
			code={`
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
	// ...
]
    `}
		/>
	</section>

	<!-- The Datatable Component -->
	<section class="space-y-4">
		<h3 class="h3" data-toc-ignore>2. The Datatable Component</h3>

		<p>
			Create the new Datatable component in <code class="code">/src/lib/components/Datatable.svelte</code>. Import
			<code class="code">reload</code>
			from <code class="code">api.ts</code>. Then import <code class="code">DataHandler</code> and the
			<code class="code">State</code>
			and <code class="code">Row</code> types from <code class="code">/remote</code>. When initializing handler and rows, you can use
			<code class="code">rowsPerPage</code>
			and <code class="code">totalRows</code> in order to limit the number of API calls. Finally, we'll use
			<code class="code">/remote</code> from Svelte Simple Datatables, as well as <code class="code">reload</code> from
			<code class="code">api.ts</code> to handle state.
		</p>
		<CodeBlock
			language="ts"
			code={`
import { reload } from '$lib/data/api';

import { DataHandler } from '@vincjo/datatables/remote';
import type { State, Row } from '@vincjo/datatables/remote';

const handler = new DataHandler<Row>([], { rowsPerPage: 5, totalRows: 200 });
const rows = handler.getRows();

handler.onChange((state: State) => reload(state));
handler.invalidate();
    `}
		/>
		<p>Take care to configure your the markup to match the API's data structure.</p>
		<CodeBlock
			language="html"
			code={`
<div class="table-container space-y-4">
    <table class="table table-hover table-compact table-auto w-full">
        <thead>
            <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Completed</td>
            </tr>
        </thead>
        <tbody>
            {#each $rows as row}
                <tr>
					<td>{row.id}</td>
					<td>{row.title}</td>
					<!-- check or x-mark -->
					<td>{@html row.completed ? '&check;' : '&#x2715;'}</td>
				</tr>
            {/each}
        </tbody>
    </table>
</div>
    `}
		/>
	</section>

	<!-- Accessory Components -->
	<section class="space-y-4">
		<h3 class="h3" data-toc-ignore>3. Accessory Components</h3>
		<p>Let's create, import, and add our new accessory components. Note that these will not yet be functional.</p>
		<CodeBlock
			language="ts"
			code={`
import Search from '$lib/components/Search.svelte';
import ThFilter from '$lib/components/ThFilter.svelte';
import ThSort from '$lib/components/ThSort.svelte';
import RowCount from '$lib/components/RowCount.svelte';
import RowsPerPage from '$lib/components/RowsPerPage.svelte';
import Pagination from '$lib/components/Pagination.svelte';
    `}
		/>
		<CodeBlock
			language="html"
			code={`
<div class=" overflow-x-auto space-y-2">
    <header class="flex justify-between gap-4">
		<!-- <Search {handler} /> -->
		<!-- <RowsPerPage {handler} /> -->
	</header>
	<table class="table table-hover table-compact table-auto w-full">
		<thead>
			<tr>
				<!-- <ThSort {handler} orderBy="id">ID</ThSort>
				<ThSort {handler} orderBy="title">Title</ThSort>
				<ThSort {handler} orderBy="completed">Completed</ThSort> -->
			</tr>
			<tr>
				<!-- <ThFilter {handler} filterBy="id" />
				<ThFilter {handler} filterBy="title" />
				<ThFilter {handler} filterBy="completed" /> -->
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.id}</td>
					<td>{row.title}</td>
					<!-- check or x-mark -->
					<td>{@html row.completed ? '&check;' : '&#x2715;'}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<footer class="flex justify-between">
		<!-- <RowCount {handler} /> -->
		<!-- <Pagination {handler} /> -->
	</footer>
</div>
    `}
		/>
		<p>
			For brevity, find the full source code for <code class="code">&lt;Datatable /&gt;</code> and all accessory components on GitHub.
		</p>
		<div class="card variant-glass p-4 py-10 flex justify-center items-center gap-4">
			<a
				class="btn variant-filled"
				href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/server/Datatable.svelte"
				target="_blank"
			>
				<i class="fa-brands fa-github" />
				<span>Datatable</span>
			</a>
			<a
				class="btn variant-filled"
				href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/server"
				target="_blank"
			>
				<i class="fa-brands fa-github" />
				<span>Accessories</span>
			</a>
		</div>
	</section>

	<!-- NOTE: step 4 is outside this component -->
</div>
