<script lang="ts">
	// Components
	import Button from '$lib/components/Button/Button.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/guides/styling">Styling Guide</Crumb>
		<Crumb>Preview</Crumb>
	</Breadcrumb>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Stylesheet Preview</h1>
		<p>This page provides a "kitchen sink" of element styling provided by the Skeleton stylesheet add-ons.</p>
	</header>

	<!-- Core.css -->
	<Card slotHeader="space-y-4" slotBody="space-y-4" space="space-y-8">
		<svelte:fragment slot="header">
			<h2>Core.css</h2>
			<p>Applies styles to a variety of global elements.</p>
			<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/core.css';`} />
		</svelte:fragment>
		<!-- Body Styles -->
		<h4>BODY Element Styles</h4>
		<p>
			This adapts to the colors provided by your theme and based on your selected mode. Additionally, this site includes a CSS mesh gradient. <a
				href="https://github.com/Brain-Bones/skeleton/blob/dev/src/app.postcss"
				target="_blank">Click here</a
			>
			to review how we support light and dark modes. This was generated using <a href="https://csshero.org/mesher/" target="_blank">https://csshero.org/mesher/</a>.
		</p>
		<!-- Scrollbars -->
		<h4>Scrollbars</h4>
		<p>Note that custom scrollbar styles are not supported in all browsers, including Firefox.</p>
		<div class="bg-surface-500/10 max-h-[100px] overflow-auto p-4 rounded-xl">
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis
				totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi
				natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique
				quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem
				ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam
				sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus,
				quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam
				eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum,
				dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi
				veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos
				ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam
				eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum.
			</p>
		</div>
	</Card>

	<!-- Core.css -->
	<Card slotHeader="space-y-4" slotBody="grid grid-cols-1 md:grid-cols-2 gap-4" space="space-y-8">
		<svelte:fragment slot="header">
			<h2>Typography.css</h2>
			<p>Applies inherent styles to a variety of semantic HTML elements.</p>
			<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/typography.css';`} />
		</svelte:fragment>
		<div class="space-y-4">
			<!-- Headings -->
			<div class="space-y-6">
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<h5>Heading 5</h5>
				<h6>Heading 6</h6>
			</div>
			<CodeBlock language="html" code={`<h1>...</h1>`} />
			<!-- Paragraph -->
			<h4>Paragraph</h4>
			<p>The quick brown fox jumps over the lazy dog.</p>
			<CodeBlock language="html" code={`<p>...</p>`} />
			<!-- Anchor -->
			<h4>Anchor</h4>
			<p><a href="https://www.youtube.com/watch?v=XTgFtxHhCQ0" target="_blank">This is an example link.</a></p>
			<CodeBlock language="html" code={`<a href="/">...</a>`} />
		</div>
		<div class="space-y-4">
			<!-- Blockquote -->
			<h4>Blockquote</h4>
			<blockquote>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita cupiditate dolores dignissimos maiores doloremque fugiat, dolore doloribus nisi, repellendus mollitia nostrum, commodi a
				minus aperiam deleniti. Velit rerum ut tempora!
			</blockquote>
			<CodeBlock language="html" code={`<blockquote>...</blockquote>`} />
			<!-- Pre -->
			<h4>Preformatted Text</h4>
			<pre>The quick brown fox jumps over the lazy dog.</pre>
			<CodeBlock language="html" code={`<pre>...</pre>`} />
			<!-- Code -->
			<h4 class="pb-4">Code</h4>
			<code>.myExampleClass</code>
			<CodeBlock language="html" code={`<code>...</code>`} />
			<!-- kbd -->
			<h4 class="pb-4">KBD (Keyboard)</h4>
			<kbd>Shift + ⌘</kbd>
			<CodeBlock language="html" code={`<kbd>...</kbd>`} />
		</div>
	</Card>

	<!-- Preview -->
	<Card slotBody="space-y-4">
		<div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-4">
				<h2>Forms.css</h2>
				<p>We've provided a "kitchen sink" page to view all form styles.</p>
			</div>
			<Button variant="filled-accent" href="/guides/forms/preview">Preview Form Inputs</Button>
		</div>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/forms.css';`} />
	</Card>
</div>
