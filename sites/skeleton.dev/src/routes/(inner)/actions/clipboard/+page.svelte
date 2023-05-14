<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock, clipboard } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Action,
		name: 'Clipboard',
		description: 'Allows you to quickly copy data to the clipboard.',
		imports: ['clipboard'],
		source: 'actions/Clipboard',
		parameters: [
			['<code class="code">element</code>', 'string', '-', '-', `HTML element's <em>data-clipboard</em> ID value.`],
			['<code class="code">input</code>', 'string', '-', '-', `Input element's <em>data-clipboard</em> ID value.`]
		]
	};

	// Local
	const exampleData = 'This text was copied by the Skeleton clipboard action.';
	let copied = false;

	function onClickHandler(): void {
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<button use:clipboard={exampleData} class="btn variant-filled" on:click={onClickHandler} disabled={copied}>
					{copied ? 'Copied 👍' : 'Copy'}
				</button>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`const exampleData: string = 'This text was copied by the Skeleton clipboard action.';`} />
				<CodeBlock language="html" code={`<button use:clipboard={exampleData}>Copy</button>`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>If your data is available as a primitive data type (string, integer, etc), you can provide it directly to the action.</p>
		<!-- Element -->
		<div class="space-y-4">
			<h2 class="h2">Copying HTML Contents</h2>
			<p>
				To copy the <em>innerHTML</em> for an element, set a <code class="code">data-clipboard</code> on your target, then provide an
				<code class="code">element</code> reference to the action.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full text-token card variant-soft p-4 flex items-center gap-4">
						<div class="textarea p-2" data-clipboard="exampleElement" contenteditable>
							This <em>div</em> is set to 'contenteditable'. Make changes then tap copy.
						</div>
						<button use:clipboard={{ element: 'exampleElement' }} class="btn variant-filled">Copy</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<!-- Source -->
<div data-clipboard="exampleElement">(contents)</div>\n
<!-- Trigger -->
<button use:clipboard={{ element: 'exampleElement' }}>Copy</button>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Inputs -->
		<div class="space-y-4">
			<h2 class="h2">Copying Input Values</h2>
			<p>
				To copy the target input <em>value</em>, set a <code class="code">data-clipboard</code> data attribute on your target, then provide
				an
				<code class="code">input</code> reference to the action.
			</p>

			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full text-token card variant-soft p-4 flex items-center gap-4">
						<input class="input" type="text" value="Make changes to this input and then tap copy." data-clipboard="exampleInput" />
						<button use:clipboard={{ input: 'exampleInput' }} class="btn variant-filled">Copy</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<!-- Source -->
<input type="text" value="(contents)" data-clipboard="exampleInput"></input>\n
<!-- Trigger -->
<button use:clipboard={{ input: 'exampleInput' }}>Copy</button>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
	</svelte:fragment>
</DocsShell>
