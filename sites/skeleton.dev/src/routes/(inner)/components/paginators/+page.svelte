<script lang="ts">
	import { faker } from '@faker-js/faker';
	// Docshell
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { Paginator, Table, CodeBlock, type PaginationSettings } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldPaginator from '@skeletonlabs/skeleton/components/Paginator/Paginator.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Paginators',
		description: 'Navigate between multiple pages of content.',
		imports: ['Paginator'],
		source: 'components/Paginator',
		components: [{ sveld: sveldPaginator }]
	};
	// Local
	const sourceHeaders: string[] = ['Name', 'Symbol', 'atomic Number'];
	const sourceBody = Array(27)
		.fill(undefined)
		.map(() => Object.values(faker.science.chemicalElement()));

	// Reactive
	let page = {
		offset: 0,
		limit: 3,
		size: sourceBody.length,
		amounts: [1, 2, 3, 5, sourceBody.length]
	} as PaginationSettings;

	// Event Handlers
	function onPageChange(e: CustomEvent): void {
		console.log('Paginator - event:page', e.detail);
	}
	function onAmountChange(e: CustomEvent): void {
		console.log('Paginator - event:amount', e.detail);
	}

	// Reactive
	$: sourceBodySliced = sourceBody.slice(page.offset * page.limit, page.offset * page.limit + page.limit);
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="w-full space-y-4 text-token">
					<Table source={{ head: sourceHeaders, body: sourceBodySliced }} />
					<Paginator bind:settings={page} on:page={onPageChange} on:amount={onAmountChange} />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`const source = [ /* any array of objects */ ];`} />
				<CodeBlock
					language="ts"
					code={`
// PaginatorSettings
let page = {
	offset: 0,
	limit: 5,
	size: source.length,
	amounts: [1,2,5,10],
};
					`}
				/>
				<CodeBlock language="html" code={`<Paginator bind:settings={page}></Paginator>`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4" />
		<div class="space-y-4">
			<h2 class="h2">Client-Side Pagination</h2>
			<!-- prettier-ignore -->
			<p>
				Once your paginator component is setup you'll need to subdivide your local source content. This can be accomplished using Svelte's
				reactive properties paired with the JavaScript <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank" rel="noreferrer">slice</a> method.
			</p>
			<CodeBlock
				language="ts"
				code={`
$: paginatedSource = source.slice(
	page.offset * page.limit,             // start
	page.offset * page.limit + page.limit // end
);`}
			/>
			<CodeBlock
				language="html"
				code={`
<ul>
	{#each paginatedSource as row}
		<li>{row}</li>
	{/each}
</ul>
				`}
			/>
			<p>
				Or combine with the <a href="/components/tables">Table</a> component.
			</p>
			<CodeBlock
				language="ts"
				code={`
let tableHeaders: string[] = ['Positions', 'Name', 'Weight', 'Symbol'];
`}
			/>
			<CodeBlock
				language="html"
				code={`
<Table source={{ head: tableHeaders, body: paginatedSource }} />
				`}
			/>
		</div>
		<div class="space-y-4">
			<h2 class="h2">Server-Side Pagination</h2>
			<p>Use the <code class="code">page</code> and <code class="code">amount</code> events to notify your server of pagination updates.</p>
			<CodeBlock
				language="ts"
				code={`
function onPageChange(e: CustomEvent): void {
	console.log('event:page', e.detail);
}

function onAmountChange(e: CustomEvent): void {
	console.log('event:amount', e.detail);
}
			`}
			/>
			<CodeBlock language="html" code={`<Paginator ... on:page={onPageChange} on:amount={onAmountChange}></Paginator>`} />
		</div>
		<hr />
		<!-- See Also -->
		<section class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-2">
				<h2 class="h2">See Also</h2>
				<p>Utilize a data-driven model to create simple presentational tables.</p>
			</div>
			<a class="btn variant-ghost-surface" href="/components/tables">Table Component &rarr;</a>
		</section>
	</svelte:fragment>
</DocsShell>
