<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { FileButton, CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldFileButton from '@skeletonlabs/skeleton/components/FileButton/FileButton.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'File Buttons',
		description: 'Allows you to select files with a single click.',
		imports: ['FileButton'],
		source: 'components/FileButton',
		components: [{ sveld: sveldFileButton }],
		restProps: 'input'
	};

	// Local
	let files: FileList;

	function onChangeHandler(e: Event): void {
		console.log('file data:', e);
		console.log('files:', files);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<FileButton bind:files name="file" accept="image/*" on:change={onChangeHandler} />
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<p class="!w-full text-center">Monitor your browser's console when adding files.</p>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="html" code={`<FileButton name="files" />`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Uses <code class="code">FileList</code> to bind data to an <code class="code">input[type='file']</code>. Accepts all attributes,
				including:
				<code class="code">multiple</code>, <code class="code">accept</code>, and <code class="code">required</code>.
			</p>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Variant Style</h2>
			<p>Use the <code class="code">button</code> property to provide classes for the button, such as variant styles.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<FileButton name="files" button="variant-soft-primary">Upload</FileButton>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<FileButton name="files" button="variant-soft-primary">Upload</FileButton>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Binding Method</h2>
			<p>Use a <code class="code">FileList</code> to bind the file data.</p>
			<CodeBlock language="ts" code={`let files: FileList;`} />
			<CodeBlock language="html" code={`<FileButton ... bind:files />`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">On Change Event</h2>
			<p>Use the <code class="code">on:change</code> event to monitor file selection or changes.</p>
			<CodeBlock language="ts" code={`function onChangeHandler(e: Event): void {\n\tconsole.log('file data:', e);\n}`} />
			<CodeBlock language="html" code={`<FileButton ... on:change={onChangeHandler}>Upload</FileButton>`} />
		</section>
	</svelte:fragment>
</DocsShell>
