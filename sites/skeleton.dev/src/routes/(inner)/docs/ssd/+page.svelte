<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';

	import { CodeBlock, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	//For radio toggle
	let value: number = 0;

	//Local Components
	import Client from './ClientSSD.svelte';
	import Server from './ServerSSD.svelte';
	import Datatable from './client/Datatable.svelte';

</script>

<LayoutPage>
	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Svelte Simple Datatables</h1>
		<p>
			This guide will show you how to create a 
			<code class="code">&lt;Datatable /&gt;</code>
			component with
			<a class="anchor" href="https://vincjo.fr/datatables/home" target="_blank">Svelte Simple Datatables</a> 
			and style it with Skeleton's Tailwind classes.
		</p>
	</header>

	<hr />

	<!-- SSD Explanation -->
	<section class="space-y-4">
		<p>
			<a class="anchor" href="https://vincjo.fr/datatables/home" target="_blank">Svelte Simple Datatables (SSD)</a> 
			is a headless library for creating datatable components with Svelte. It provides an API to dynamically 
			interact with iterable data on the client-side to filter, paginate, sort, and select data. It can handle 
			server-side data processing, supports Typescript, and has no dependencies.
		</p>
	</section>

	<!-- Intro -->
	<section class="space-y-4">
		<h2 class="h2">Introduction</h2>

		<aside class="alert variant-ghost-warning">
			<i class="fa-solid fa-triangle-exclamation text-4xl" />
			<div class="alert-message" data-toc-ignore>
				<p>
					Skeleton has a
					<code class="code">&lt;Table /&gt;</code>
					<a class="anchor" href="https://www.skeleton.dev/components/tables" target="_blank">component;</a> 
					however,  this should be used only as a simple way to present data, and <strong>is not a data table.</strong>
				</p>
			</div>
		</aside>

		<p>
			We will use SSD to create a 
			<code class="code">&lt;Datatable /&gt;</code>
			from a native HTML
			<code class="code">&lt;table&gt;</code>
			which we can then style with Skeleton's
			<a class="anchor" href="https://www.skeleton.dev/elements/tables" target="_blank">native HTML table styles.</a> 
		</p>

		<p>
			We will then create accessory components to search, filter, sort, and paginate the  
			<code class="code">&lt;Datatable /&gt;.</code> Below is an example of what we will be building.
		</p>

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

import data from './data';

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

	<!-- Getting Started -->
	<section class="space-y-4">
		<h2 class="h2">Getting Started</h2>
		
		<h3 class="h3">Install SSD</h3>

		<p>
			Add SSD to your Skeleton Sveltekit project by running the command below.
		</p>

		<CodeBlock
		language="shell"
		code={`
npm i -D @vincjo/datatables
		`}
	/>

		<h3 class="h3">Project Structure</h3>

		<p>
			Create the following files in your project.
		</p>
		<CodeBlock
		language="shell"
		code={`
src
├── lib
|	├── data
|	|	└── data.ts / api.ts
|	└── components
|	    ├── Pagination.svelte
|	    ├── Search.svelte
|	    ├── RowCount.svelte
|	    ├── RowsPerPage.svelte
|	    ├── ThFilter.svelte
|	    └── ThSort.svelte
└── routes
	├── Datatable.svelte
	└── +page.svelte
`}
	/>

		<dl class="list-dl">
			<div>
				<span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"/></span>
				<span class="flex-auto">
					<dt><code class="code">/lib/data</code></dt>
					<dd>Create <code class="code">data.ts</code> if you are loading data from the client 
						or <code class="code">api.ts</code> if your data is coming from the server. 
						This will be explained further on, but for now just create the blank Typescript file.
					</dd>
				</span>
			</div>
			<div>
				<span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"/></span>
				<span class="flex-auto">
					<dt><code class="code">/lib/components</code></dt>
					<dd>All of the files in this directory will be used for accessory components.</dd>
				</span>
			</div>
			<div>
				<span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"/></span>
				<span class="flex-auto">
					<dt><code class="code">/routes/Datatable.svelte</code></dt>
					<dd>
						This file will contain the
						<code class="code">&lt;Datatable /&gt;</code>
						component, the associated logic, and render the accessory components.
					</dd>
				</span>
			</div>
			<div>
				<span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"/></span>
				<span class="flex-auto">
					<dt><code class="code">/routes/+page.svelte</code></dt>
					<dd>
						This is where we'll render and access the
						<code class="code">&lt;Datatable /&gt;</code>
						component in this example. 
					</dd>
				</span>
			</div>
		</dl>
	</section>

	<!-- Creating the Components -->
	<section class="space-y-4">
		<h2 class="h2">Creating the Components</h2>

		<p>
			Your components will need to be configured slightly differently 
			depending on whether the data is coming from the server or the client.
			You can toggle between the two guides below.
		</p>

		<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
			<RadioItem bind:group={value} name="justify" value={0}>Client</RadioItem>
			<RadioItem bind:group={value} name="justify" value={1}>Server</RadioItem>
		</RadioGroup>

		<hr />

		{#if value === 0}
			<Client />
		{:else if value === 1}
			<Server />
		{/if}
	</section>

	<hr />

	<!-- Responsive Design -->
	<section class="space-y-4">
		<h2 class="h2">Responsive Design</h2>

		<p>
			We can use standard responsive web design techniques to make the components display properly on all devices. 
			The <code class="code">&lt;Datatable /&gt;</code>
			and accessory components in this example are wrapped up in a single 
			<code class="code">&lt;div&gt;</code>. 
			Tailwind classes are then applied as necessary to different elements. 
		</p>

		<p>
			The <code class="code">&lt;Pagination /&gt;</code>
			component provides an example of how we can apply different UI elements for different screen sizes. 
		</p>
	</section>

	<!-- Componentization -->
	<section class="space-y-4">

		<h2 class="h2">Componentization</h2>

		<aside class="alert variant-ghost-warning">
			<i class="fa-solid fa-triangle-exclamation text-4xl" />
			<div class="alert-message" data-toc-ignore>
				<p>
					The Skeleton team does not plan to maintain or provide first party support for a SSD component. 
				</p>
			</div>
		</aside>

		<p>
			To reuse the <code class="code">&lt;Datatable /&gt;</code> component
			throughout your app, you can,
		</p>
		
		<ol class="list space-y-2">
			<li>
				<span class="badge-icon p-4 variant-soft-primary">1</span>
				<span class="flex-auto">Duplicate the file and update the DataHandler Methods from SSD, or,</span>
			</li>
			<li>
				<span class="badge-icon p-4 variant-soft-primary">2</span>
				<span class="flex-auto">Export the appropriate props and build your own reusable component.</span>
			</li>
		</ol>
	</section>
</LayoutPage>
