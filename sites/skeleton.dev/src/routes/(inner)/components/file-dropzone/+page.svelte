<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { FileDropzone, CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldFileDropzone from '@skeletonlabs/skeleton/components/FileDropzone/FileDropzone.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'File Dropzone',
		description: 'Allow upload of files with drag and drop.',
		imports: ['FileDropzone'],
		source: 'components/FileDropzone',
		components: [{ sveld: sveldFileDropzone }],
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
				<div class="space-y-4 w-full text-token">
					<FileDropzone bind:files name="files-example-one" on:change={onChangeHandler} />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<p class="!w-full text-center">Monitor your browser's console when adding files.</p>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="html" code={`<FileDropzone name="files" />`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>
			Uses <code class="code">input[type='file']</code> and allows for all native input features and accessibility. Including
			<code class="code">multiple</code>,
			<code class="code">accept</code>, and <code class="code">required</code>.
		</p>
		<div class="space-y-4">
			<h2 class="h2">Customization</h2>
			<p>
				Customize the component with the available <code class="code">icon</code>, <code class="code">message</code>, and
				<code class="code">meta</code> slots.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="space-y-4 w-full">
						<FileDropzone name="files-example-two" accept="image/*" on:change={onChangeHandler}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-file-arrow-up text-4xl" /></svelte:fragment>
							<svelte:fragment slot="meta">PNG, JPG, and GIF allowed.</svelte:fragment>
						</FileDropzone>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<FileDropzone name="files">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<svelte:fragment slot="message">(message)</svelte:fragment>
	<svelte:fragment slot="meta">(meta)</svelte:fragment>
</FileDropzone>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
		<div class="space-y-4">
			<h2 class="h2">Binding Method</h2>
			<p>Use a <code class="code">FileList</code> to bind the file data.</p>
			<CodeBlock language="ts" code={`let files: FileList;`} />
			<CodeBlock language="html" code={`<FileDropzone ... bind:files />`} />
		</div>
		<div class="space-y-4">
			<h2 class="h2">On Change Event</h2>
			<p>Use the <code class="code">on:change</code> event to monitor file selection or changes.</p>
			<CodeBlock language="ts" code={`function onChangeHandler(e: Event): void {\n\tconsole.log('file data:', e);\n}`} />
			<CodeBlock language="html" code={`<FileDropzone ... on:change={onChangeHandler}>Upload</FileDropzone>`} />
		</div>
	</svelte:fragment>
</DocsShell>
