<script lang="ts">
	import Alert from '$lib/components/Alert/Alert.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Tables
	const tableClassesList: any = {
		headings: ['Class', 'Description'],
		source: [
			['<code>.list</code>', 'Class for defining a unordered or ordered list.'],
			['<code>.list-dl</code>', 'Class for defining a description list.'],
			['<code>.list-nav</code>', 'Class for defining a navigation list.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Alert -->
	<Alert>
		<svelte:fragment slot="lead">
			<span class="text-2xl">⚠️</span>
		</svelte:fragment>
		<span>Selection lists are available via the <strong>Listbox</strong> Svelte component.</span>
		<svelte:fragment slot="trail">
			<a href="/components/listboxes" class="btn btn-ghost">View Listboxes</a>
		</svelte:fragment>
	</Alert>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Lists</h1>
		<p>Automatically included in <code>all.css</code> and <code>elements.css</code>. This <a href="/guides/styling">stylesheet</a> provides styles for static list elements.</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/elements/lists.css';`} />
	</header>

	<!-- Examples -->
	<section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
		<h2 class='sr-only'>Examples</h2>
		<div class="card card-body space-y-4">
			<h6>Unordered</h6>
			<ul class="list">
				{#each ['A', 'B', 'C'] as v}
					<li>
						<span class="badge bg-primary-500">💀</span>
						<span class="flex-auto">
							Item {v}
						</span>
						<span>⋮</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="card card-body space-y-4">
			<h6>Ordered</h6>
			<ol class="list">
				{#each ['A', 'B', 'C'] as v, i}
					<li>
						<span class="badge bg-primary-500">{i + 1}</span>
						<span class="flex-auto">
							Item {v}
						</span>
						<span>⋮</span>
					</li>
				{/each}
			</ol>
		</div>
		<div class="card card-body space-y-4">
			<h6>Description</h6>
			<dl class="list-dl">
				{#each ['A', 'B'] as v}
					<div>
						<span class="badge bg-primary-500">💀</span>
						<span class="flex-auto">
							<dt>Item {v}</dt>
							<dd>Description for {v}</dd>
						</span>
						<span>⋮</span>
					</div>
				{/each}
			</dl>
		</div>
		<div class="card card-body space-y-4">
			<h6>Navigation</h6>
			<nav class="list-nav">
				<ul>
					{#each ['A', 'B', 'C'] as v}
						<li>
							<a href="/">
								<span class="badge bg-primary-500">💀</span>
								<span class="flex-auto">
									Item {v}
								</span>
								<span>⋮</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-8">
		<div class="space-y-4">
			<h2>Usage</h2>
			<p>Use semantic list HTML elements, add the <code>.list</code> class, then ensure you wrap children with <em>span</em> elements allow for flex row layout styling.</p>
		</div>
		<!-- Unordered -->
		<div class="space-y-4">
			<h4>Unordered</h4>
			<CodeBlock
				language="html"
				code={`
<ul class="list">
    <li>
        <span>💀</span>
        <span class="flex-auto">Skeleton</span>
    </li>
	<!-- ... -->
</ul>
            `}
			/>
		</div>
		<!-- Ordered -->
		<div class="space-y-4">
			<h4>Ordered</h4>
			<CodeBlock
				language="html"
				code={`
<ol class="list">
    <li>
        <span>1.</span>
        <span class="flex-auto">Skeleton</span>
    </li>
	<!-- ... -->
</ol>
            `}
			/>
		</div>
		<!-- Description -->
		<div class="space-y-4">
			<h4>Description</h4>
			<p>Note we insert an extra <em>div</em> element to control flex layout and aid with vertical list item spacing.</p>
			<CodeBlock
				language="html"
				code={`
<dl class="list-dl">
    <div>
        <span class="badge bg-primary-500">💀</span>
        <span class="flex-auto">
            <dt>Title</dt>
            <dd>Description</dd>
        </span>
    </div>
	<!-- ... -->
</dl>
            `}
			/>
		</div>
		<!-- Navigation -->
		<div class="space-y-4">
			<h4>Navigation</h4>
			<p>While verbose, we do recommend you use all tags shown below to meet recommended <a href="https://www.w3.org/WAI/tutorials/menus/structure/" target="_blank">accessibility guidelines</a>.</p>
			<CodeBlock
				language="html"
				code={`
<nav class="list-nav">
	<!-- (optionally you can provde a label here) -->
    <ul>
        <li>
            <a href="/">
                <span class="badge bg-primary-500">💀</span>
                <span class="flex-auto">Skeleton</span>
            </a>
        </li>
		<!-- ... -->
    </ul>
</nav>
            `}
			/>
			<p>If you need to highlight an active Navigation List item, we recommend conditionally applying a background color to the anchor tag.</p>
			<CodeBlock language="ts" code={`$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');`} />
			<CodeBlock language="html" code={`<a {href} class="{classesActive(href)}">Page</a>`} />
		</div>
		<!-- Global Styles -->
		<div class="space-y-4">
			<h4>Global Styles</h4>
			<p>Use your global stylesheet to update all instances of this element.</p>
			<CodeBlock
				language="css"
				code={`
.list,
.list-dl,
.list-nav ul {
	@apply space-y-4;
}
            `}
			/>
		</div>
	</section>

	<!-- Classes -->
	<section class="space-y-4">
		<h2>Classes</h2>
		<h4>List</h4>
		<DataTable headings={tableClassesList.headings} source={tableClassesList.source} />
	</section>
</div>
