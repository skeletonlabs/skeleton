<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import FileDropzone from '$lib/components/FileDropzone/FileDropzone.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldFileDropzone from '$lib/components/FileDropzone/FileDropzone.svelte?raw&sveld';

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

	function onChange(e: any): void {
		console.log('file data:', e);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-2">
			<div class="card p-4 grid grid-cols-1 xl:grid-cols-2 gap-4">
				<label for="">
					<span>Upload File</span>
					<FileDropzone bind:files notes="Files should not exceed 5mb." on:change={onChange} required />
				</label>
				<label for="">
					<span>Custom Message</span>
					<FileDropzone bind:files on:change={onChange}><p>(message)</p></FileDropzone>
				</label>
			</div>
			<div class="text-center"><code>Monitor your browser's console when adding files.</code></div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<p>Uses <code>input[type='file']</code> to allow for all native input accessibility.</p>
			<CodeBlock language="ts" code={`let files: FileList;`} />
			<CodeBlock language="html" code={`<FileDropzone bind:files />`} />
		</div>
		<div class="space-y-4">
			<h2>Title</h2>
			<p>Use the <code>title</code> property to provide a custom title.</p>
			<CodeBlock language="html" code={`<FileDropzone title="Upload your Attachment here." />`} />
		</div>
		<div class="space-y-4">
			<h2>Notes</h2>
			<p>Use the <code>notes</code> property to provide additional text information on a second line.</p>
			<CodeBlock language="html" code={`<FileDropzone notes="Files should not exceed 5mb." />`} />
		</div>
		<div class="space-y-4">
			<h2>Message</h2>
			<p>Use the default slot to replace the default UI entirely.</p>
			<CodeBlock language="html" code={`<FileDropzone>(message)</FileDropzone>`} />
		</div>
	</svelte:fragment>
</DocsShell>
