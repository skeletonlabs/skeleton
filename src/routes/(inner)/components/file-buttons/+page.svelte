<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import FileButton from '$lib/components/FileButton/FileButton.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
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

	function onChange(e: Event): void {
		console.log('file data:', e);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 text-center !py-10 space-y-4">
			<FileButton bind:files accept="image/*" name="file" button="btn-filled-secondary" on:change={onChange}>Upload File</FileButton>
			<p class="!text-xs text-center">Monitor your browser's console when adding files.</p>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock language="ts" code={`let files: FileList;`} />
			<CodeBlock language="html" code={`<FileButton bind:files button="btn-filled-secondary">Upload File</FileButton>`} />
		</section>
	</svelte:fragment>
</DocsShell>
