<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import { clipboard } from '$lib/actions/Clipboard/clipboard';
</script>

<div class="!mt-0 space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Clipboard</h1>
		<p>Allows you to quickly copy select data to the clipboard.</p>
		<CodeBlock language="ts" code={`import { clipboard } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="card card-body space-y-4">
		<h2 class='sr-only'>Examples</h2>
		<!-- Element -->
		<div class="bg-surface-500 p-2 rounded" data-clipboard="exampleElement" contenteditable>This <em>div</em> is set to 'contenteditable'. Make changes then tap copy below.</div>
		<button use:clipboard={{ element: 'exampleElement' }} class="btn btn-ghost">Copy Element Contents</button>
		<hr />
		<!-- Input -->
		<textarea data-clipboard="exampleInput">Make changes to this textarea and then tap copy below.</textarea>
		<button use:clipboard={{ input: 'exampleInput' }} class="btn btn-ghost">Copy Input Value</button>
	</section>

	<!-- Usage -->
	<section class="space-y-8">
		<h2>Usage</h2>
		<!-- Basic -->
		<div class="space-y-4">
			<h3>Basic Data</h3>
			<p>If your data is available in a basic type (string, integer, etc), you can provide it directly to the action.</p>
			<CodeBlock language="ts" code={`const exampleData: string = 'Your data here.';`} />
			<CodeBlock language="html" code={`<button use:clipboard={exampleData}>Copy</button>`} />
		</div>
		<!-- Element -->
		<div class="space-y-4">
			<h3>HTML Elements</h3>
			<p>
				To copy the <em>innerHTML</em> for an HTML element, we'll need to set a <code>data-clipboard</code> target, then provide the action an object of
				<code>element: 'dataClipboardId'</code>
			</p>
			<CodeBlock language="html" code={`<div data-clipboard="exampleElement">Content to copy.</div>`} />
			<CodeBlock language="html" code={`<button use:clipboard={{ element: 'exampleElement' }}>Copy</button>`} />
		</div>
		<!-- Inputs -->
		<div class="space-y-4">
			<h3>Form Inputs</h3>
			<p>
				To copy the <em>value</em> of a form input, we'll need to set a <code>data-clipboard</code> target, then provide the action an object of
				<code>input: 'dataClipboardId'</code>
			</p>
			<CodeBlock language="html" code={`<input type="text" value="Content to Copy." data-clipboard="exampleInput"></input>`} />
			<CodeBlock language="html" code={`<button use:clipboard={{ input: 'exampleInput' }}>Copy</button>`} />
		</div>
	</section>
</div>
