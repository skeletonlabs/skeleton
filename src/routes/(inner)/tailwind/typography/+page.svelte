<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Typography</h1>
		<p>This <a href="/guides/styling">stylesheet add-on</a> provides common typographical elements.</p>
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
<h1>...</h1>
<h2>...</h2>
<h3>...</h3>
<h4>...</h4>
<h5>...</h5>
<h6>...</h6>
        `.trim()}
			/>
			<Card slotBody="space-y-6">
				<h1>Skeleton H1</h1>
				<h2>Skeleton H2</h2>
				<h3>Skeleton H3</h3>
				<h4>Skeleton H4</h4>
				<h5>Skeleton H5</h5>
				<h6>Skeleton H6</h6>
			</Card>
		</div>
		<!-- Paragraph -->
		<div class="space-y-4">
			<h4>Paragraph</h4>
			<CodeBlock language="html" code={`<p>...</p>`} />
			<Card slotBody="text-center"><p>The quick brown fox jumps over the lazy dog.</p></Card>
		</div>
		<!-- Anchor -->
		<div class="space-y-4">
			<h4>Anchor</h4>
			<CodeBlock language="html" code={`<a href="/">...</a>`} />
			<Card slotBody="text-center"><p><a href="https://www.youtube.com/watch?v=XTgFtxHhCQ0" target="_blank">This is an example link.</a></p></Card>
		</div>
		<!-- Blockquote -->
		<div class="space-y-4">
			<h4>Blockquote</h4>
			<CodeBlock language="html" code={`<blockquote>...</blockquote>`} />
			<Card slotBody="max-w-[480px] mx-auto">
				<blockquote>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita cupiditate dolores dignissimos maiores doloremque fugiat, dolore doloribus nisi, repellendus mollitia nostrum, commodi a
					minus aperiam deleniti. Velit rerum ut tempora!
				</blockquote>
			</Card>
		</div>
		<!-- Pre -->
		<div class="space-y-4">
			<h4>Preformatted Text</h4>
			<CodeBlock language="html" code={`<pre>...</pre>`} />
			<Card slotBody="max-w-[480px] mx-auto"><pre>The quick brown fox jumps over the lazy dog.</pre></Card>
		</div>
		<!-- Code -->
		<div class="space-y-4">
			<h4 class="pb-4">Code</h4>
			<CodeBlock language="html" code={`<code>...</code>`} />
			<Card slotBody="text-center"><code>.myExampleClass</code></Card>
		</div>
		<!-- kbd -->
		<div class="space-y-4">
			<h4 class="pb-4">KBD (Keyboard)</h4>
			<CodeBlock language="html" code={`<kbd>...</kbd>`} />
			<Card slotBody="text-center"><kbd>Shift + ⌘</kbd></Card>
		</div>
	</section>
</div>
