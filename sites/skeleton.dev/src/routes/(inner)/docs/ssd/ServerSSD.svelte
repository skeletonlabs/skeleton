<script lang="ts">
import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';

import { CodeBlock, TabGroup, Tab } from '@skeletonlabs/skeleton';

//for tabs
let tabSet = 1;

import Datatable from './server/Datatable.svelte';

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
        Below is a diagram showcasing how the accessory components can be used within 
        <code class="code">&lt;Datatable /&gt;</code>. You can modify the configuration 
        to your liking by adding or removing the accessory components from the 
        <code class="code">&lt;header&gt;</code>,
        <code class="code">&lt;footer&gt;</code>, and
        <code class="code">&lt;thead&gt;</code>.
    </p>

    <img
        src="/src/routes/(inner)/docs/ssd/ssd.webp" 
        alt="flow"
    />

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

    <TabGroup>
        <Tab bind:group={tabSet} name="tab1" value={1}>Search</Tab>
        <Tab bind:group={tabSet} name="tab2" value={2}>Filter</Tab>
        <Tab bind:group={tabSet} name="tab3" value={3}>Sort</Tab>
        <Tab bind:group={tabSet} name="tab4" value={4}>Pagination</Tab>
        <Tab bind:group={tabSet} name="tab5" value={5}>Row Count</Tab>
        <Tab bind:group={tabSet} name="tab6" value={6}>Rows Per Page</Tab>

        <!-- Tab Panels --->
        <svelte:fragment slot="panel">

            <!-- Search -->
            {#if tabSet === 1}
                <h3 class="h3 mb-4" data-toc-ignore>Search</h3>
                <DocsPreview background="neutral">
                    <svelte:fragment slot="preview">
                        <input class="input w-1/2" type="search" placeholder="Search..."/>
                    </svelte:fragment>
                    <svelte:fragment slot="source">
                        <CodeBlock
                        language="ts"
                        code={`
import type { DataHandler } from '@vincjo/datatables/remote';

export let handler: DataHandler;

let value: string;
let timeout: any;

const search = () => {
    handler.search(value);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        handler.invalidate();
    }, 400);
};
                        `}
                    />
                        <CodeBlock
                        language="html"
                        code={`
<input
	class="input-variant-secondary input sm:w-64 w-36"
	type="search"
	placeholder="Search..."
	bind:value
	on:input={search}
/>
                        `}
                    />
                    </svelte:fragment>
                </DocsPreview>

            <!-- Filter -->
            {:else if tabSet === 2}
                <h3 class="h3 mb-4" data-toc-ignore>Filter</h3>
                <DocsPreview background="neutral">
                    <svelte:fragment slot="preview">
                        <input
                        class="input variant-form-material w-1/2"
                        type="text"
                        placeholder="Filter"
                    />
                    </svelte:fragment>
                    <svelte:fragment slot="source">
                        <CodeBlock
                        language="ts"
                        code={`
import type { DataHandler } from '@vincjo/datatables/remote';

export let handler: DataHandler;
export let filterBy: string;

let value: string;
let timeout: any;

const filter = () => {
    handler.filter(value, filterBy);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        handler.invalidate();
    }, 400);
};
                        `}
                    />
                        <CodeBlock
                        language="html"
                        code={`
<th>
	<input
		class="input variant-form-material h-8 text-sm w-full"
		type="text"
		placeholder="Filter"
		bind:value
		on:input={filter}
	/>
</th>
                        `}
                    />
                    </svelte:fragment>
                </DocsPreview>    

            <!-- Sort -->  
            {:else if tabSet === 3}
            <h3 class="h3 mb-4" data-toc-ignore>Sort</h3>
            <DocsPreview background="neutral">
                <svelte:fragment slot="preview">
                    <button class="variant-filled-surface p-2">
                        <div class="flex h-full items-center justify-start gap-x-2 font-bold">
                          Column Name [Click To Sort]
                        </div>
                      </button>
                </svelte:fragment>
                <svelte:fragment slot="source">
                    <CodeBlock
                    language="ts"
                    code={`
import type { DataHandler } from '@vincjo/datatables/remote';

export let handler: DataHandler;
export let orderBy: string;

const sort = handler.getSort();
const update = () => {
    handler.sort(orderBy);
    handler.invalidate();
};
                    `}
                />
                    <CodeBlock
                    language="html"
                    code={`
<th on:click={update} class="cursor-pointer select-none p-2 px-5">
	<div class="flex h-full items-center justify-start gap-x-2">
		<slot />
		[click to sort]
	</div>
</th>
                    `}
                />
                </svelte:fragment>
            </DocsPreview>

            <!-- Pagination -->
            {:else if tabSet === 4}
            <h3 class="h3 mb-4" data-toc-ignore>Pagination</h3>
            <DocsPreview background="neutral">
                <svelte:fragment slot="preview">
                    <section class="btn-group variant-ghost-surface [&>*+*]:border-surface-500">
                        <button type="button" class="hover:variant-soft-primary">
                            <i class="fa-solid fa-arrow-left"></i>
                        </button>
                        <button type="button" class="hover:variant-soft-primary">1</button>
                        <button type="button" class="hover:variant-soft-primary">2</button>
                        <button type="button" class="hover:variant-soft-primary">3</button>
                        <button type="button" class="hover:variant-soft-primary">...</button>
                        <button type="button" class="hover:variant-soft-primary">100</button>
                        <button type="button" class="hover:variant-soft-primary">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </section>
                </svelte:fragment>
                <svelte:fragment slot="source">
                    <CodeBlock
                    language="ts"
                    code={`
import type { DataHandler } from '@vincjo/datatables/remote';

export let handler: DataHandler;

const pageNumber = handler.getPageNumber();
const pageCount = handler.getPageCount();
const pages = handler.getPages({ ellipsis: true });

const setPage = (value: 'previous' | 'next' | number) => {
    handler.setPage(value);
    handler.invalidate();
};
                    `}
                />
                    <CodeBlock
                    language="html"
                    code={`
<!-- Desktop buttons -->
<section class="btn-group variant-ghost-surface [&>*+*]:border-surface-500 h-10 hidden lg:block">
	<button
		type="button"
		class="hover:variant-soft-secondary"
		class:disabled={$pageNumber === 1}
		on:click={() => setPage('previous')}
	>
		←
	</button>
	{#each $pages as page}
		<button
			type="button"
			class="hover:variant-soft-secondary"
			class:active={$pageNumber === page}
			class:ellipse={page === null}
			on:click={() => setPage(page)}
		>
			{page ?? '...'}
		</button>
	{/each}
	<button
		type="button"
		class="hover:variant-soft-secondary"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => setPage('next')}
	>
		→
	</button>
</section>

<!-- Mobile buttons -->
<section class="lg:hidden">
	<button
		type="button"
		class="btn variant-ghost-surface mr-2 mb-2 hover:variant-soft-secondary"
		class:disabled={$pageNumber === 1}
		on:click={() => setPage('previous')}
	>
		←
	</button>
	<button
		type="button"
		class="btn variant-ghost-surface mb-2 hover:variant-soft-secondary"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => setPage('next')}
	>
		→
	</button>
</section>
                    `}
                />
                </svelte:fragment>
            </DocsPreview>   

            <!-- Row Count -->
            {:else if tabSet === 5}
            <h3 class="h3 mb-4" data-toc-ignore>Row Count</h3>
            <DocsPreview background="neutral">
                <svelte:fragment slot="preview">
                    <aside class="text-sm leading-8 mr-6">
                            <b>1</b>
                            - <b>10</b>
                            / <b>100</b>
                    </aside>
                </svelte:fragment>
                <svelte:fragment slot="source">
                    <CodeBlock
                    language="ts"
                    code={`
import type { DataHandler } from '@vincjo/datatables/remote';

export let handler: DataHandler;

const rowCount = handler.getRowCount();
                    `}
                />
                    <CodeBlock
                    language="html"
                    code={`
<aside class="text-sm leading-8 mr-6">
	{#if $rowCount.total > 0}
		<b>{$rowCount.start}</b>
		- <b>{$rowCount.end}</b>
		/ <b>{$rowCount.total}</b>
	{:else}
		No entries found
	{/if}
</aside>
                    `}
                />
                </svelte:fragment>
            </DocsPreview>

            <!-- Rows Per Page -->
            {:else if tabSet === 6}
            <h3 class="h3 mb-4" data-toc-ignore>Rows Per Page</h3>
            <DocsPreview background="neutral">
                <svelte:fragment slot="preview">
                    <aside class="flex place-items-center">
                        Show
                        <select class="select ml-2">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </aside>
                </svelte:fragment>
                <svelte:fragment slot="source">
                    <CodeBlock
                    language="ts"
                    code={`
import type { DataHandler } from '@vincjo/datatables/remote';

export let handler: DataHandler;

const rowsPerPage = handler.getRowsPerPage();
const options = [5, 10, 20, 50, 100];

const setRowsPerPage = () => {
		handler.setPage(1);
		handler.invalidate();
	};
                    `}
                />
                    <CodeBlock
                    language="html"
                    code={`
<aside class="flex place-items-center">
	Show
	<select class="select ml-2" bind:value={$rowsPerPage} on:change={setRowsPerPage}>
		{#each options as option}
			<option value={option}>
				{option}
			</option>
		{/each}
	</select>
</aside>
                    `}
                />
                </svelte:fragment>
            </DocsPreview>   
            {/if}
        </svelte:fragment>
    </TabGroup>
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

<DocsPreview background="neutral">
    <svelte:fragment slot="preview">
        <Datatable />
    </svelte:fragment>
    <svelte:fragment slot="source">
        <CodeBlock
        language="ts"
        code={`
import Search from './Search.svelte';
import ThFilter from './ThFilter.svelte';
import ThSort from './ThSort.svelte';
import RowCount from './RowCount.svelte';
import RowsPerPage from './RowsPerPage.svelte';
import Pagination from './Pagination.svelte';

import data from '$lib/data/data';

import { DataHandler } from '@vincjo/datatables';

const handler = new DataHandler(data, { rowsPerPage: 5 });
const rows = handler.getRows();
        `}
    />
        <CodeBlock
        language="html"
        code={`
<div class=" overflow-x-auto space-y-2">
    <header class="flex justify-between">
        <Search {handler} />
        <RowsPerPage {handler} />
    </header>

    <table class="table table-hover table-compact w-full table-auto">
    <thead>
        <tr>
            <ThSort {handler} orderBy="first_name">First name</ThSort>
            <ThSort {handler} orderBy="last_name">Last name</ThSort>
            <ThSort {handler} orderBy="email">Email</ThSort>
        </tr>
        <tr>
            <ThFilter {handler} filterBy="first_name" />
            <ThFilter {handler} filterBy="last_name" />
            <ThFilter {handler} filterBy="email" />
        </tr>
    </thead>
    <tbody>
        {#each $rows as row}
            <tr>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>{row.email}</td>
            </tr>
        {/each}
    </tbody>
    </table>

    <footer class="flex justify-between">
        <RowCount {handler} />
        <Pagination {handler} />
    </footer>
</div>
        `}
    />
    </svelte:fragment>
</DocsPreview>
</section>