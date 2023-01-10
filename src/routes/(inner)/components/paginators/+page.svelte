<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Paginator from '$lib/components/Paginator/Paginator.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import type { PaginationSettings } from '$lib/components/Paginator/types';

	// @ts-expect-error sveld import
	import sveldPaginator from '$lib/components/Paginator/Paginator.svelte?raw&sveld';

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
	const sourceHeaders: string[] = ['Positions', 'Name', 'Weight', 'Symbol'];
	const sourceBody: any = [
		[1, 'Hydrogen', 1.0079, 'H'],
		[2, 'Helium', 4.0026, 'He'],
		[3, 'Lithium', 6.941, 'Li'],
		[4, 'Beryllium', 9.0122, 'Be'],
		[5, 'Boron', 10.811, 'B'],
		[6, 'Carbon', 12.0107, 'C'],
		[7, 'Nitrogen', 14.0067, 'N'],
		[8, 'Oxygen', 15.9994, 'O'],
		[9, 'Fluorine', 18.9984, 'F'],
		[10, 'Neon', 20.1797, 'Ne']
	];

	// Reactive
	$: page = {
		offset: 0,
		limit: 5,
		size: sourceBody.length,
		amounts: [1, 2, 5, sourceBody.length]
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
		<section class="space-y-4">
			<Table
				source={{
					head: sourceHeaders,
					body: sourceBodySliced
				}}
			/>
			<div class="col-span-2 card p-4 space-y-4">
				<Paginator bind:settings={page} on:page={onPageChange} on:amount={onAmountChange} />
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<CodeBlock
				language="typescript"
				code={`
$: page = {
	offset: 0,
	limit: 5,
	size: sourceData.length,
	amounts: [1,2,5,10],
};`}
			/>
			<CodeBlock language="html" code={`<Paginator bind:settings={page} on:page={onPageChange} on:amount={onAmountChange}></Paginator>`} />
		</div>
		<div class="space-y-4">
			<h2>Reactive Slicing</h2>
			<p>
				Once your paginator component is setup you'll need to limit your content. This can be accomplished with the JavaScript <a
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
					target="_blank"
					rel="noreferrer">slice</a
				> method. See a minimal example below.
			</p>
			<CodeBlock language="typescript" code={`const source = [ /* any array of objects */ ]`} />
			<CodeBlock
				language="typescript"
				code={`
$: sourcePaginated = source.slice(
	page.offset * page.limit, // start
	page.offset * page.limit + page.limit // end
);`}
			/>
			<CodeBlock
				language="html"
				code={`
<ul>
	{#each sourcePaginated as row}
		<li>{row}</li>
	{/each}
</ul>`}
			/>
		</div>
	</svelte:fragment>
</DocsShell>
