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
		source: 'packages/skeleton/src/lib/components/Paginator',
		components: [{ sveld: sveldPaginator }]
	};

	// Local
	const sourceHeaders: string[] = ['Name', 'Symbol', 'atomic Number'];
	const sourceBody = Array(27)
		.fill(undefined)
		.map(() => Object.values(faker.science.chemicalElement()));

	// Reactive
	let paginationSettings = {
		page: 0,
		limit: 3,
		size: sourceBody.length,
		amounts: [1, 2, 3, 5, sourceBody.length]
	} satisfies PaginationSettings;

	// Demo options
	let state = {
		firstLast: false,
		previousNext: true
	};
	function toggle(key: keyof typeof state): void {
		state[key] = !state[key];
	}

	// Event Handlers
	function onPageChange(e: CustomEvent): void {
		console.log('Paginator - event:page', e.detail);
	}
	function onAmountChange(e: CustomEvent): void {
		console.log('Paginator - event:amount', e.detail);
	}

	// Reactive
	$: sourceBodySliced = sourceBody.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	);
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="w-full space-y-4 text-token">
					<Table source={{ head: sourceHeaders, body: sourceBodySliced }} />
					<Paginator
						bind:settings={paginationSettings}
						on:page={onPageChange}
						on:amount={onAmountChange}
						showFirstLastButtons={state.firstLast}
						showPreviousNextButtons={state.previousNext}
					/>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`const source = [ /* any array of objects */ ];`} />
				<CodeBlock
					language="ts"
					code={`
let paginationSettings = {
	page: 0,
	limit: 5,
	size: source.length,
	amounts: [1,2,5,10],
} satisfies PaginationSettings;
					`}
				/>
				<CodeBlock
					language="html"
					code={`
<Paginator
	bind:settings={paginationSettings}
	showFirstLastButtons="{${state.firstLast}}"
	showPreviousNextButtons="{${state.previousNext}}"
/>
`}
				/>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<!-- prettier-ignore -->
				<div class="flex justify-center gap-4">
					<button
						class="btn btn-sm {state.firstLast ? 'variant-filled' : 'variant-soft'}"
						on:click={() => { toggle('firstLast'); }}
					>
						First &amp; Last
					</button>
					<button
						class="btn btn-sm {state.previousNext ? 'variant-filled' : 'variant-soft'}"
						on:click={() => { toggle('previousNext'); }}
					>
						Previous &amp; Next
					</button>
				</div>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2 class="h2">Numeric Row</h2>
			<!-- prettier-ignore -->
			<p>
				Use <code class="code">showNumerals</code> to replace the text information with a row of buttons that allow you to quickly navigate pages. We recommend a small <code class="code">maxNumerals</code> amount if you plan to support mobile devices with limited screen real estate.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full space-y-4 text-token">
						<Table source={{ head: sourceHeaders, body: sourceBodySliced }} />
						<Paginator bind:settings={paginationSettings} on:page={onPageChange} on:amount={onAmountChange} showNumerals />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<Paginator ... showNumerals maxNumerals={1}></Paginator>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
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
	paginationSettings.page * paginationSettings.limit,
	paginationSettings.page * paginationSettings.limit + paginationSettings.limit
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
				Or combine with the <a class="anchor" href="/components/tables">Table</a> component.
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
		</section>
		<section class="space-y-4">
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
		</section>
		<section class="space-y-4">
			<h2 class="h2">Handling Reactivity</h2>
			<!-- prettier-ignore -->
			<p>
				Use the following technique if you wish to update pagination data in a reactive manner. Make sure to update <code class="code" >paginationSettings</code> directly, as <a class="anchor" href="https://learn.svelte.dev/tutorial/updating-arrays-and-objects" target="_blank">updating a reference to source will not trigger the reactivity</a>.
			</p>
			<CodeBlock
				language="ts"
				code={`
let paginationSettings = {
    page: 0,
    limit: 5,
    size: source.length,
    amounts: [1, 2, 5, 10],
} satisfies PaginationSettings;

$: paginationSettings.size = source.length;
				`}
			/>
		</section>
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
