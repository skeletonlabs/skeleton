<script lang="ts">
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
	<!-- Header -->
	<header class="space-y-4">
		<h1>Lists</h1>
		<p>This <a href="/guides/styling">stylesheet add-on</a> provides styling for presentational list elements.</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/lists.css';`} />
	</header>

	<!-- Examples -->
	<section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
			<p>Use semantic list HTML elements, add the <code>.list</code> class, then ensure you wrap children with <em>span</em> elements to alow for flex row spacing.</p>
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
            `.trim()}
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
            `.trim()}
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
            `.trim()}
			/>
		</div>
		<!-- Navigation -->
		<div class="space-y-4">
			<h4>Navigation</h4>
			<p>Note the <em>ul</em>, which is required to meet <a href="https://www.w3.org/WAI/tutorials/menus/structure/" target="_blank">accessibility guidelines</a>.</p>
			<CodeBlock
				language="html"
				code={`
<nav class="list-nav">
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
            `.trim()}
			/>
		</div>
		<!-- Global Styles -->
		<div class="space-y-4">
			<h4>Global Styles</h4>
			<p>You can override styles for all instances of this element in your global stylesheet as follows.</p>
			<CodeBlock
				language="css"
				code={`
.list,
.list-dl,
.list-nav ul {
	@apply space-y-4;
}
            `.trim()}
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
