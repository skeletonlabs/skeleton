<script lang="ts">
import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<h2 class="h2" data-toc-ignore>Server</h2>

<!-- SSR -->
<section class="space-y-4">
    <aside class="alert variant-ghost-warning">
        <i class="fa-solid fa-triangle-exclamation text-4xl" />
        <div class="alert-message" data-toc-ignore>
            <p>
                When using SSR, imports come from <code class="code">@vincjo/datatables/remote</code>.
            </p>
        </div>
    </aside>

    <p>
        <code class="code">/remote</code> provides 2 additional functions:
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
    <h3 class="h3">1. Loading Data</h3>

    <p>
        Lets load some fake to-do data from the
        <a class="anchor" href="https://jsonplaceholder.typicode.com/" target="_blank">JSON Placeholder</a> API. 
        It looks like this...
    </p>

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

    <p>
        We'll need some API helper functions to call this data and have SSD handle it. 
        So lets add the following code to <code class="code">api.ts</code>.
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

</section>

<!-- Setup SSD -->
<section class="space-y-4">
    <h3 class="h3">2. Setup SSD</h3>

    <p>In the <code class="code">Datatable.svelte</code> file, import <code class="code">reload</code> from <code class="code">api.ts</code>.
    Then import DataHandler and the types for State and Row from <code class="code">/remote</code>.
    When initializing handler and rows, you can use <code class="code">rowsPerPage</code> & <code class="code">totalRows</code> to limit the API calls.
    The last two lines of code use the two new functions from <code class="code">/remote</code> and the <code class="code">reload</code> function from <code class="code">api.ts</code> to handle state.
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

    <p>
        Lastly, configure the markup to match the API's data structure.
    </p>

    <CodeBlock
    language="html"
    code={`
<div class="overflow-x-auto space-y-2">
    <table class="table table-hover table-compact w-full table-auto">
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
					<td>{row.completed ? '✅' : '❌'}</td>
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
    <h3 class="h3">3. Add Accessory Components</h3>

    <p>
        You can modify the configuration 
        of the accessory components to your liking by adding or removing them from the 
        <code class="code">&lt;header&gt;</code>,
        <code class="code">&lt;footer&gt;</code>, and
        <code class="code">&lt;thead&gt;</code>.
    </p>

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
	<header class="flex justify-between">
		<!-- <Search {handler} /> -->
		<!-- <RowsPerPage {handler} /> -->
	</header>
	<table class="table table-hover table-compact w-full table-auto">
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
					<td>{row.completed ? '✅' : '❌'}</td>
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

    	<!-- Accessory Components Link -->
		<p>You can find the code for each accessory component at the link below.</p>
		<div class="card variant-glass p-4 py-10 text-center">
			<a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/server" target="_blank">
				<i class="fa-brands fa-github" />
				<span>Accessory Components</span>
				<i class="fa-solid fa-up-right-from-square" />
			</a>
		</div>

</section>

<!-- Import Datatable -->
<section class="space-y-4">
    <h3 class="h3">4. Import Datatable Component</h3>
    <p>Call your new <code class="code">&lt;Datatable /&gt;</code> component into <code class="code">+page.svelte</code> and you are good to go!</p>
    <CodeBlock
    language="ts"
    code={`
	import Datatable from './Datatable.svelte';
    `}
/>
    <CodeBlock
    language="html"
    code={`
<Datatable />
    `}
/>

	<!-- Datatable Component Link -->
    <p>You can find the code for the final <code class="code">&lt;Datatable /&gt;</code> component at the link below.</p>
    <div class="card variant-glass p-4 py-10 text-center">
        <a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/server/Datatable.svelte" target="_blank">
            <i class="fa-brands fa-github" />
            <span>&lt;Datatable /&gt;</span>
            <i class="fa-solid fa-up-right-from-square" />
        </a>
    </div>

</section>