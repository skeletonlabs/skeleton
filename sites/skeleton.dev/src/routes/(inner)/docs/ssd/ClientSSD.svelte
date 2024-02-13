<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<div class="space-y-4">
	<!-- Loading Data -->
	<section class="space-y-4">
		<h3 class="h3" data-toc-ignore>1. Loading Data</h3>
		<p>
			To begin, let's add fake dataset in <code class="code">/src/lib/static/data.ts</code>. View a full reference
			<a class="anchor" href="https://vincjo.fr/datatables/tutorial/html-table" target="_blank"> under the data tab.</a>
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

	<!-- The Datatable Component -->
	<section class="space-y-4">
		<h3 class="h3" data-toc-ignore>2. The Datatable Component</h3>
		<p>
			Create the new Datatable component in <code class="code">/src/lib/comonents/Datatable.svelte</code>, import your custom dataset, as
			well as the
			<code class="code">DataHandler</code> from Svelte Simple Datatables. Then, intialize the <code class="code">handler</code> and
			<code class="code">rows</code>.
		</p>
		<CodeBlock
			language="ts"
			code={`
import { DataHandler } from '@vincjo/datatables';
import data from '$lib/static/data';

const handler = new DataHandler(data, { rowsPerPage: 5 });
const rows = handler.getRows();
        `}
		/>
		<p>Take care to configure your the markup to match the dataset.</p>
		<CodeBlock
			language="html"
			code={`
<div class="table-container space-y-4">
    <table class="table table-hover table-compact table-auto w-full">
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
    <table class="table table-hover table-compact table-auto w-full ">
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
		<p>
			For brevity, find the full source code for <code class="code">&lt;Datatable /&gt;</code> and all accessory components on GitHub.
		</p>
		<div class="card variant-glass p-4 py-10 flex justify-center items-center gap-4">
			<a
				class="btn variant-filled"
				href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/client/Datatable.svelte"
				target="_blank"
			>
				<i class="fa-brands fa-github" />
				<span>Datatable</span>
			</a>
			<a
				class="btn variant-filled"
				href="https://github.com/skeletonlabs/skeleton-datatables-integration/tree/main/src/lib/components/client"
				target="_blank"
			>
				<i class="fa-brands fa-github" />
				<span>Accessories</span>
			</a>
		</div>
	</section>

	<!-- NOTE: step 4 is outside this component -->
</div>
