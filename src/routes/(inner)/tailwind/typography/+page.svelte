<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Typography</h1>
		<p>Automatically included in <code>all.css</code>. This <a href="/guides/styling">stylesheet</a> provides common typographical element styles.</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/typography.css';`} />
	</header>

	<!-- Usage -->
	<section class="space-y-8">
		<h2>Usage</h2>
		<div class="space-y-4">
			<!-- Headings -->
			<h4>Headings</h4>
			<CodeBlock
				language="html"
				code={`
<h1>Skeleton H1</h1>
<h2>Skeleton H2</h2>
<h3>Skeleton H3</h3>
<h4>Skeleton H4</h4>
<h5>Skeleton H5</h5>
<h6>Skeleton H6</h6>
        `}
			/>
			<div class="card card-body space-y-6">
				<h1>Skeleton H1</h1>
				<h2>Skeleton H2</h2>
				<h3>Skeleton H3</h3>
				<h4>Skeleton H4</h4>
				<h5>Skeleton H5</h5>
				<h6>Skeleton H6</h6>
			</div>
		</div>
		<!-- Paragraph -->
		<div class="space-y-4">
			<h4>Paragraph</h4>
			<CodeBlock language="html" code={`<p>The quick brown fox jumps over the lazy dog.</p>`} />
			<div class="card card-body text-center"><p>The quick brown fox jumps over the lazy dog.</p></div>
		</div>
		<!-- Anchor -->
		<div class="space-y-4">
			<h4>Anchor</h4>
			<CodeBlock language="html" code={`<a href="/">Anchor</a>\n<a class="unstyled" href="/">Unstyled</a>`} />
			<div class="card card-body text-center space-x-4">
				<a href="https://www.youtube.com/watch?v=XTgFtxHhCQ0" target="_blank">Anchor</a>
				<a class="unstyled" href="https://www.youtube.com/watch?v=XTgFtxHhCQ0" target="_blank">Unstyled</a>
			</div>
		</div>
		<!-- Blockquote -->
		<div class="space-y-4">
			<h4>Blockquote</h4>
			<CodeBlock language="html" code={`<blockquote>Skeleton</blockquote>`} />
			<div class="card card-body">
				<blockquote class="max-w-[480px] mx-auto">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita cupiditate dolores dignissimos maiores doloremque fugiat, dolore doloribus nisi, repellendus mollitia nostrum, commodi a
					minus aperiam deleniti. Velit rerum ut tempora!
				</blockquote>
			</div>
		</div>
		<!-- Pre -->
		<div class="space-y-4">
			<h4>Pre-formatted Text</h4>
			<CodeBlock language="html" code={`<pre>The quick brown fox jumps over the lazy dog.</pre>`} />
			<div class="card card-body">
				<pre class="max-w-[480px] mx-auto">The quick brown fox jumps over the lazy dog.</pre>
			</div>
		</div>
		<!-- Code -->
		<div class="space-y-4">
			<h4 class="pb-4">Code</h4>
			<CodeBlock language="html" code={`<code>.myExampleClass</code>`} />
			<div class="card card-body text-center"><code>.myExampleClass</code></div>
		</div>
		<!-- kbd -->
		<div class="space-y-4">
			<h4 class="pb-4">Keyboard</h4>
			<CodeBlock language="html" code={`<kbd>Shift + ⌘</kbd>`} />
			<div class="card card-body text-center"><kbd>Shift + ⌘</kbd></div>
		</div>
	</section>
</div>
