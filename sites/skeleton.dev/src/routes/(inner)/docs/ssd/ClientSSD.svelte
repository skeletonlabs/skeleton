<script lang="ts">
    import Datatable from './client/Datatable.svelte';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';

	import { CodeBlock, TabGroup, Tab } from '@skeletonlabs/skeleton';

	//for tabs
	let tabSet = 1;
    // for sort preview
    let clickState = 0;
</script>

<h2 class="h2" data-toc-ignore>Client</h2>

<!-- Loading Data -->
<section class="space-y-4">
    <h3 class="h3">1. Loading Data</h3>

    <p>Let's add some fake data to the <code class="code">data.ts</code> file. 
    The full dataset can be found <a class="anchor" href="https://vincjo.fr/datatables/tutorial/html-table" target="_blank">here, under the data tab.</a> 
    </p>

    <CodeBlock
    language="ts"
    code={`
export default [
	{ id: 1, first_name: 'Tobie', last_name: 'Vint', email: 'tvint0@fotki.com' },
	{ id: 2, first_name: 'Zacharias', last_name: 'Cerman', email: 'zcerman1@sciencedirect.com' },
	{ id: 3, first_name: 'Gérianna', last_name: 'Bunn', email: 'gbunn2@foxnews.com' },
	{ id: 4, first_name: 'Bee', last_name: 'Saurin', email: 'bsaurin3@live.com' },
	{ id: 5, first_name: 'Méyère', last_name: 'Granulette', email: 'mgranul4@yellowbook.com' }
	// ...
];
    `}
/>
</section>

<!-- Setup SSD -->
<section class="space-y-4">
    <h3 class="h3">2. Setup SSD</h3>
    <p>In the <code class="code">Datatable.svelte</code> file, add the imports for your data and DataHandler from SSD,
    then initialize handler and rows.</p>
    <CodeBlock
    language="ts"
    code={`
import data from '$lib/data/data';

import { DataHandler } from '@vincjo/datatables';

const handler = new DataHandler(data, { rowsPerPage: 5 });
const rows = handler.getRows();
    `}
/>

    <p>Configure the markup to match your dataset.</p>

    <CodeBlock
    language="html"
    code={`
<div class="overflow-x-auto space-y-2">
    <table class="table table-hover table-compact w-full table-auto">
        <thead>
            <tr>
                <td>First name</td>
                <td>Last name</td>
                <td>Email</td>
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
				<!-- <ThSort {handler} orderBy="first_name">First name</ThSort>
				<ThSort {handler} orderBy="last_name">Last name</ThSort>
				<ThSort {handler} orderBy="email">Email</ThSort> -->
			</tr>
			<tr>
				<!-- <ThFilter {handler} filterBy="first_name" />
				<ThFilter {handler} filterBy="last_name" />
				<ThFilter {handler} filterBy="email" /> -->
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
import type { DataHandler } from '@vincjo/datatables';

export let handler: DataHandler;

let value: string;
                        `}
                    />
                        <CodeBlock
                        language="html"
                        code={`
<input
	class="input sm:w-64 w-36"
	type="search"
	placeholder="Search..."
	bind:value
	on:input={() => handler.search(value)}
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
import type { DataHandler } from '@vincjo/datatables';

export let handler: DataHandler;
export let filterBy: string;

let value: string;
                        `}
                    />
                        <CodeBlock
                        language="html"
                        code={`
<th>
	<input
		class="input variant-form-material"
		type="text"
		placeholder="Filter"
		bind:value
		on:input={() => {
			if (filterBy) {
				handler.filter(value, filterBy);
			}
		}}
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
                    <button on:click="{() => clickState = (clickState + 1) % 3}" class="variant-filled-surface p-2">
                        <div class="flex h-full items-center justify-start gap-x-2 font-bold">
                          Column Name
                          {#if clickState === 0}
                            <i class="fa-solid fa-sort"></i>
                          {:else if clickState === 1}
                            <i class="fa-solid fa-sort-up"></i>
                          {:else}
                            <i class="fa-solid fa-sort-down"></i>
                          {/if}
                        </div>
                      </button>
                </svelte:fragment>
                <svelte:fragment slot="source">
                    <CodeBlock
                    language="ts"
                    code={`
import type { DataHandler } from '@vincjo/datatables';

export let handler: DataHandler;
export let orderBy: string;

const sorted = handler.getSort();
                    `}
                />
                    <CodeBlock
                    language="html"
                    code={`
<th on:click={() => handler.sort(orderBy)} class="cursor-pointer select-none">
	<div class="flex h-full items-center justify-start gap-x-2">
		<slot />
		{#if $sorted.identifier === orderBy}
			{#if $sorted.direction === 'asc'}
				<i class="fa-solid fa-sort-up"></i>
			{:else if $sorted.direction === 'desc'}
				<i class="fa-solid fa-sort-down"></i>
			{/if}
		{:else}
			<i class="fa-solid fa-sort"></i>
		{/if}
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
import type { DataHandler } from '@vincjo/datatables';

export let handler: DataHandler;

const pageNumber = handler.getPageNumber();
const pageCount = handler.getPageCount();
const pages = handler.getPages({ ellipsis: true });
                    `}
                />
                    <CodeBlock
                    language="html"
                    code={`
<!-- Desktop buttons -->
<section class="btn-group variant-ghost-surface [&>*+*]:border-surface-500 hidden lg:block">
	<button
		type="button"
		class="hover:variant-soft-primary"
		class:disabled={$pageNumber === 1}
		on:click={() => handler.setPage('previous')}
	>
		<i class="fa-solid fa-arrow-left"></i>
	</button>
	{#each $pages as page}
		<button
			type="button"
			class="hover:variant-soft-primary"
			class:active={$pageNumber === page}
			class:ellipse={page === null}
			on:click={() => handler.setPage(page)}
		>
			{page ?? '...'}
		</button>
	{/each}
	<button
		type="button"
		class="hover:variant-soft-primary"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => handler.setPage('next')}
	>
		<i class="fa-solid fa-arrow-right"></i>
	</button>
</section>

<!-- Mobile buttons -->
<section class="lg:hidden">
	<button
		type="button"
		class="btn variant-ghost-surface mr-2 mb-2 hover:variant-soft-primary"
		class:disabled={$pageNumber === 1}
		on:click={() => handler.setPage('previous')}
	>
		<i class="fa-solid fa-arrow-left"></i>
	</button>
	<button
		type="button"
		class="btn variant-ghost-surface mb-2 hover:variant-soft-primary"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => handler.setPage('next')}
	>
		<i class="fa-solid fa-arrow-right"></i>
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
import type { DataHandler } from '@vincjo/datatables';

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
import type { DataHandler } from '@vincjo/datatables';

export let handler: DataHandler;

const rowsPerPage = handler.getRowsPerPage();
const options = [5, 10, 20, 50, 100];
                    `}
                />
                    <CodeBlock
                    language="html"
                    code={`
<aside class="flex place-items-center">
	Show
	<select class="select ml-2" bind:value={$rowsPerPage}>
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