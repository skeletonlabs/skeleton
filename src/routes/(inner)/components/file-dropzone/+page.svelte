<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import FileDropzone from '$lib/components/FileDropzone/FileDropzone.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

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

	function onChangeHandler(e: any): void {
		console.log('file data:', e);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card variant-glass p-4 space-y-4">
			<FileDropzone name="files-example-one" on:change={onChangeHandler} />
			<FileDropzone name="files-example-two" accept="image/*" on:change={onChangeHandler}>
				<svelte:fragment slot="lead"><i class="fa-solid fa-file-arrow-up text-4xl" /></svelte:fragment>
				<svelte:fragment slot="meta">PNG, JPG, and GIF allowed.</svelte:fragment>
			</FileDropzone>
			<small class="block text-center opacity-75">Monitor your browser's console log when adding files.</small>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<p>
				Uses <code>input[type='file']</code> and allows for all native input features and accessibility. Including <code>multiple</code>,
				<code>accept</code>, and <code>required</code>.
			</p>
			<CodeBlock language="html" code={`<FileDropzone name="files" />`} />
			<p>You can override the default <code>message</code>, as well as optionally provide <code>icon</code> and <code>meta</code> slots.</p>
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
		</div>
		<div class="space-y-4">
			<h2>Binding Method</h2>
			<p>Use a <code>FileList</code> to bind the file data.</p>
			<CodeBlock language="ts" code={`let files: FileList;`} />
			<CodeBlock language="html" code={`<FileDropzone ... bind:files />`} />
		</div>
		<div class="space-y-4">
			<h2>On Change Event</h2>
			<p>Use the <code>on:change</code> event to monitor file selection or changes.</p>
			<CodeBlock language="ts" code={`function onChangeHandler(e: Event): void {\n\tconsole.log('file data:', e);\n}`} />
			<CodeBlock language="html" code={`<FileDropzone ... on:change={onChangeHandler}>Upload</FileDropzone>`} />
		</div>
	</svelte:fragment>
</DocsShell>
