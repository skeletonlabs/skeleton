<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
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

	<!-- Accessory Components Link -->
		<p>You can find the code for each accessory component at the link below.</p>
		<div class="card variant-glass p-4 py-10 text-center">
			<a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/client" target="_blank">
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
        <a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/client/Datatable.svelte" target="_blank">
            <i class="fa-brands fa-github" />
            <span>&lt;Datatable /&gt;</span>
            <i class="fa-solid fa-up-right-from-square" />
        </a>
    </div>

</section>