<script lang="ts">
	import { DataTable, Card, Paginator } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Content
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
	$: contentSliced = content.source.slice(page.offset * page.limit, page.offset * page.limit + page.limit);
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

	// Props
	// prettier-ignore
	const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Description'],
        source: [
            ['offset', 'number', '0', 'Index of the first list item to display.'],
            ['limit', 'number', '5', 'Current number of items to display.'],
            ['size', 'number', '10', 'The total size (length) of your source content.'],
            ['amounts', 'number[]', '[1,5,10,50,100]', 'List of amounts available to the select input.'],
        ],
    };
	// prettier-ignore
	const tablePropsDesign: any = {
        headings: ['Prop', 'Type', 'Default', 'Description'],
        source: [
            ['justify', 'string', 'justify-between', 'Provide classes to set flexbox justification.'],
            ['text', 'string', 'text-xs', 'Provide classes to style page context text.'],
            ['select', 'string', '-', 'Provide arbitrary classes to style the select input.'],
            ['buttons', 'string', `btn-ghost`, 'Provide any desired <a href="/tailwind/buttons">Button element</a> classes.'],
        ],
    };

	// Events
	const tableEvents: any = {
		headings: ['Name', 'Description'],
		source: [
			['amount', 'Fires when the amount selection input changes. Provides the selected amount value.'],
			['page', 'Fires when the next/back buttons are pressed. Provides the new offset value.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Paginators</h1>
		<p>Navigate between multiple pages of content.</p>
		<CodeBlock language="javascript" code={`import { Paginator } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="grid grid-cols-1 xl:grid-cols-2 gap-4">
		<Card slotBody="space-y-4">
			<h4>List Pagination</h4>
			<nav class="list-nav">
				<ul>
					{#each contentSliced as e, i}
						<li>
							<a href="/components/paginators">
								<span>{i + 1}</span>
								<span class="flex-auto">
									{e.name}
								</span>
								<span>{e.symbol}</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<Paginator bind:offset={page.offset} bind:limit={page.limit} bind:size={page.size} bind:amounts={page.amounts} on:page={onPageChange} on:amount={onAmountChange} />
		</Card>
		<Card slotBody="space-y-4">
			<h4>Table Pagination</h4>
			<DataTable headings={content.headings} source={contentSliced} />
			<Paginator bind:offset={page.offset} bind:limit={page.limit} bind:size={page.size} bind:amounts={page.amounts} on:page={onPageChange} on:amount={onAmountChange} />
		</Card>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock
			language="typescript"
			code={`
const page: any = {
    offset: 0,
    limit: 5,
    size: source.length
    amounts: [1,2,5,10],
};
        `.trim()}
		/>
		<CodeBlock
			language="typescript"
			code={`
function onPageChange(e: any): void { console.log('event:page', e.detail); }
function onAmountChange(e: any): void { console.log('event:amount', e.detail); }
        `.trim()}
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
></Paginator>
        `.trim()}
		/>
		<h3>Utilizing Pagination</h3>
		<p>
			Once your paginator component is setup you'll need to limit your content. This can be accomplished with the JavaScript <a
				href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
				target="_blank">slice</a
			> method. See a minimal example below.
		</p>
		<CodeBlock language="typescript" code={`const source: any[] = [ /* any array of objects */ ]`.trim()} />
		<CodeBlock
			language="typescript"
			code={`
$: sourcePaginated = source.slice(
    page.offset * page.limit, // start
    page.offset * page.limit + page.limit // end
);
        `.trim()}
		/>
		<CodeBlock
			language="html"
			code={`
<ul>
    {#each sourcePaginated as row}
    <li>{row}</li>
    {/each}
</ul>
        `.trim()}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
		<DataTable headings={tablePropsDesign.headings} source={tablePropsDesign.source} />
	</section>

	<!-- Events -->
	<section class="space-y-4">
		<h2>Events</h2>
		<DataTable headings={tableEvents.headings} source={tableEvents.source} />
	</section>
</div>
