<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import FileButton from '$lib/components/FileButton/FileButton.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import sveldFileButton from '$lib/components/FileButton/FileButton.svelte?raw&sveld';

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
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 text-center !py-10 space-y-4">
			<FileButton bind:files accept="image/*" name="file" on:change={onChangeHandler} />
			<p class="!text-xs text-center">Monitor your browser's console when adding files.</p>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock language="ts" code={`let files: FileList;`} />
			<CodeBlock language="html" code={`<FileButton bind:files name="files">Upload File</FileButton>`} />
			<p>Attributes such as <code>multiple</code> and <code>required</code> are supported via Svelte's <em>$$restProps</em> feature.</p>
		</section>
		<section class="space-y-4">
			<h2>Variant Style</h2>
			<p>Use the <code>button</code> property to provide classes for the button, such as variant styles.</p>
			<CodeBlock language="html" code={`<FileButton ... button="variant-filled-primary">Upload</FileButton>`} />
		</section>
		<section class="space-y-4">
			<h2>On Change Event</h2>
			<p>Use the <code>on:change</code> event to monitor file selection or changes.</p>
			<CodeBlock language="ts" code={`function onChangeHandler(e: Event): void {\n\tconsole.log('file data:', e);\n}`} />
			<CodeBlock language="html" code={`<FileButton ... on:change={onChangeHandler}>Upload</FileButton>`} />
		</section>
	</svelte:fragment>
</DocsShell>
