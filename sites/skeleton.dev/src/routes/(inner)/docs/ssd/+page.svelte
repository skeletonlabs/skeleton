<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	import { CodeBlock, TabGroup, Tab } from '@skeletonlabs/skeleton';

	// Tabs
	let tabSelected = 'client';

	//Local Components
	import Client from './ClientSSD.svelte';
	import Server from './ServerSSD.svelte';
</script>

<LayoutPage>
	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Svelte Simple Datatables</h1>
		<p>
			The following guide will cover the basics of integrating Skeleton and <a
				class="anchor"
				href="https://vincjo.fr/datatables/home"
				target="_blank">Svelte Simple Datatables</a
			>.
		</p>
	</header>

	<hr />

	<!-- SSD Explanation -->
	<section class="space-y-4">
		<p class="text-xl">
			<a class="anchor" href="https://vincjo.fr/datatables/home" target="_blank">Svelte Simple Datatables</a>
			is a headless library for creating datatable components with Svelte. It provides a simple API to dynamically interact with iterable data
			on the client-side, allowing you to filter, paginate, sort, and select data. It can handle server-side data processing, supports Typescript,
			and has no other required dependencies.
		</p>
	</section>

	<!-- Intro -->
	<section class="space-y-4">
		<h2 class="h2">Introduction</h2>
		<p>
			Skeleton provides a simple <a class="anchor" href="/components/tables">Table Component</a> for implementing tabular data for
			presentational purposes. However, this lacks more powerful features, such as search, sort, and filter. This is where Svelte Simple
			Datatables comes in. To integrate this, we'll opt for Skeleton's
			<a class="anchor" href="/elements/tables">Table Elements</a>, which provided themed styles to native HTML tables. The end result will
			be a new <code class="code">&lt;Datatable /&gt;</code> component, which you may use directly in your own application.
		</p>

		<img
			class="rounded-lg"
			src="https://raw.githubusercontent.com/skeletonlabs/skeleton-datatables-integration/main/static/themes.gif"
			alt="themed datatables"
		/>

		<p>
			Additionally, we'll also create a number of accessory components to handle search, filter, sort, and pagination features. These
			smaller components will help augment and extend the overall datatable component.
		</p>

		<img
			src="https://raw.githubusercontent.com/skeletonlabs/skeleton-datatables-integration/main/static/components.png"
			alt="accessory components diagram"
		/>
	</section>

	<!-- Starter Template -->
	<section class="space-y-4">
		<h2 class="h2">Starter Template</h2>
		<p>If you're looking for a quick start or reference project, please refer to our opinionated template on GitHub.</p>
		<div class="card variant-glass p-4 py-10 text-center">
			<a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton-datatables-integration" target="_blank">
				<i class="fa-brands fa-github"></i>
				<span>View Starter Template</span>
				<i class="fa-solid fa-up-right-from-square"></i>
			</a>
		</div>
	</section>

	<!-- Getting Started -->
	<section class="space-y-4">
		<h2 class="h2">Getting Started</h2>
		<h3 class="h3">Install Dependencies</h3>
		<p>Add Svelte Simple Datables to your Skeleton project by running the following command.</p>
		<CodeBlock
			language="shell"
			code={`
npm i @vincjo/datatables
		`}
		/>

		<h3 class="h3">Project Structure</h3>
		<p>Next, let's plan out our overall project structure.</p>
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
				<span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"></i></span>
				<span class="flex-auto">
					<dt><code class="code">/lib/data</code></dt>
					<dd>
						Create <code class="code">data.ts</code> if you are loading data from the client or <code class="code">api.ts</code> if your data
						is coming from the server. This will be explained further on, but for now just create the blank Typescript file.
					</dd>
				</span>
			</div>
			<div>
				<span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"></i></span>
				<span class="flex-auto">
					<dt><code class="code">/lib/components</code></dt>
					<dd>All of the files in this directory will be used for accessory components.</dd>
				</span>
			</div>
			<div>
				<span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"></i></span>
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
				<span class="badge-icon p-4 variant-soft-primary"><i class="fa-solid fa-code"></i></span>
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
		<p>Each component will need to be configured based on the scope. Select your preference below.</p>
		<TabGroup>
			<Tab bind:group={tabSelected} name="tabClient" value="client">Client-Based</Tab>
			<Tab bind:group={tabSelected} name="tabServer" value="server">Server-Based</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSelected === 'client'}
					<Client />
				{:else if tabSelected === 'server'}
					<Server />
				{/if}
			</svelte:fragment>
		</TabGroup>
		<!-- Import Datatable -->
		<section class="space-y-4">
			<h3 class="h3" data-toc-ignore>4. Import Datatable Component</h3>
			<p>
				With our Datatable component now complete, let's import and add it to our <code class="code">+page.svelte</code>.
			</p>
			<CodeBlock language="ts" code={`import Datatable from '$lib/components/Datatable.svelte';`} />
			<CodeBlock language="html" code={`<Datatable />`} />
		</section>
	</section>

	<!-- Responsive Design -->
	<section class="space-y-4">
		<h2 class="h2">Responsive Design</h2>
		<p>
			To ensure our datatables are visible on all screen sizes, make sure to utilize <a
				class="anchor"
				href="https://tailwindcss.com/docs/responsive-design"
				target="_blank">Tailwind's responsive design</a
			>
			best practices. You can also utilize the Tailwind Element <a href="/elements/tables" class="anchor">.table-container</a> class, which should
			be applied to a wrapping element.
		</p>
	</section>

	<hr />

	<!-- Attribution -->
	<section class="space-y-4">
		<h2 class="h2">Attribution</h2>
		<p>
			This guide has been provided courtesy of <a href="https://github.com/kmalloy24" class="anchor">Kyle Malloy</a>, username
			<code class="code">@spacecup</code> on Skeleton's Discord server.
		</p>
	</section>
</LayoutPage>
