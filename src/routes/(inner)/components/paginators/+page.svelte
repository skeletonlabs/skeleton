<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Paginator from '$lib/components/Paginator/Paginator.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-ignore
	import sveldPaginator from '$lib/components/Paginator/Paginator.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Paginators',
		description: 'Navigate between multiple pages of content.',
		imports: ['Paginator'],
		source: 'components/Paginator',
		sveld: [{ source: sveldPaginator }]
	};
	// const properties: DocsShellTable[] = [
	// 	{
	// 		label: 'Settings',
	// 		headings: ['Prop', 'Type', 'Default', 'Description'],
	// 		source: [
	// 			['<code>offset</code>', 'number', '0', 'Index of the first list item to display.'],
	// 			['<code>limit</code>', 'number', '5', 'Current number of items to display.'],
	// 			['<code>size</code>', 'number', '10', 'The total size (length) of your source content.'],
	// 			['<code>amounts</code>', 'number[]', '[1,5,10,50,100]', 'List of amounts available to the select input.']
	// 		]
	// 	},
	// 	{
	// 		label: 'Styling',
	// 		headings: ['Prop', 'Type', 'Default', 'Description'],
	// 		source: [
	// 			['<code>justify</code>', 'string', 'justify-between', 'Provide classes to set flexbox justification.'],
	// 			['<code>text</code>', 'string', 'text-xs', 'Provide classes to style page info text.'],
	// 			['<code>select</code>', 'string', '-', 'Provide arbitrary classes to style the select input.'],
	// 			['<code>buttons</code>', 'string', `btn-filled`, 'Provide arbitrary casses to style the buttons.']
	// 		]
	// 	}
	// ];
	// const events: DocsShellTable[] = [
	// 	{
	// 		headings: ['Name', 'Description'],
	// 		source: [
	// 			['<code>on:amount</code>', 'Fires when the amount selection input changes. Provides the selected amount value.'],
	// 			['<code>on:page</code>', 'Fires when the next/back buttons are pressed. Provides the new offset value.']
	// 		]
	// 	}
	// ];

	// Local
	const content: any = {
		headings: ['Positions', 'Name', 'Weight', 'Symbol'],
		source: [
			{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
			{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
			{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
			{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
			{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
			{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
			{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
			{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
			{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
			{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
		]
	};
	const page: any = {
		offset: 0,
		limit: 5,
		size: content.source.length,
		amounts: [1, 2, 5, content.source.length]
	};

	// Event Handlers
	function onPageChange(e: any): void {
		console.log('Paginator - event:page', e.detail);
	}
	function onAmountChange(e: any): void {
		console.log('Paginator - event:amount', e.detail);
	}

	// Reactive
	$: contentSliced = content.source.slice(page.offset * page.limit, page.offset * page.limit + page.limit);
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<DataTable headings={content.headings} source={contentSliced} />
			<div class="col-span-2 card card-body space-y-4">
				<Paginator bind:offset={page.offset} bind:limit={page.limit} bind:size={page.size} bind:amounts={page.amounts} on:page={onPageChange} on:amount={onAmountChange} />
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<CodeBlock
				language="typescript"
				code={`
const page: any = {
	offset: 0,
	limit: 5,
	size: source.length,
	amounts: [1,2,5,10],
};`}
			/>
			<CodeBlock
				language="html"
				code={`
<Paginator
	bind:offset={page.offset}
	bind:limit={page.limit}
	bind:size={page.size}
	bind:amounts={page.amounts}
	on:page={onPageChange}
	on:amount={onAmountChange}
></Paginator>`}
			/>
		</div>
		<div class="space-y-4">
			<h2>Utilizing Pagination</h2>
			<p>
				Once your paginator component is setup you'll need to limit your content. This can be accomplished with the JavaScript <a
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
					target="_blank">slice</a
				> method. See a minimal example below.
			</p>
			<CodeBlock language="typescript" code={`const source: any[] = [ /* any array of objects */ ]`} />
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
