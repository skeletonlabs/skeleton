<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import FileDropzone from '$lib/components/FileDropzone/FileDropzone.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'File Dropzone',
		description: 'Allow upload of files with drag and drop.',
		imports: ['FileDropzone'],
		source: 'components/FileDropzone'
	};
	const properties: DocsShellTable[] = [
		{
			label: 'Settings',
			description: 'Uses <code>$$restProps</code> to support all valid input attributes such as <em>required</em>.',
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>files</code>', 'array', '-', 'Bind this to your form data, represents the "files" data from the input.'],
				['<code>accept</code>', 'string', '-', 'Set the native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept" target="_blank">file accepts attribute</a>.'],
				['<code>name</code>', 'string', '-', 'Set the native input name value.'],
				['<code>multiple</code>', 'boolean', 'false', 'Determines whether user can pick more than one file.'],
				['<code>notes</code>', 'string', '-', 'Provided additional notes or information.']
			]
		},
		{
			label: 'Styling',
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>width</code>', 'string', 'w-full', 'Provide styles to set the dropzone width.'],
				['<code>height</code>', 'string', 'h-24', 'Provide styles to set the dropzone height.'],
				['<code>padding</code>', 'string', 'p-4', 'Provide styles to set the dropzone padding.'],
				['<code>color</code>', 'string', '-', 'Provide styles to set the dropzone text color.']
			]
		}
	];
	const classes: DocsShellTable[] = [
		{
			description: 'Coming soon.'
			// headings: ['Selector', 'Description'],
			// source: [
			// 	['<code>.foo</code>', '...'],
			// 	['<code>.bar</code>', '...']
			// ]
		}
	];
	const slots: DocsShellTable[] = [
		{
			headings: ['Name', 'Description'],
			source: [['<code>default</code>', 'Replace the message with custom UI.']]
		}
	];

	// Local
	let files: FileList;

	function onChange(e: any): void {
		console.log('file data:', e);
	}
</script>

<DocsShell {settings} {properties} {classes} {slots}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-2">
			<div class="card card-body grid grid-cols-1 xl:grid-cols-2 gap-4">
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
			<h3>Notes</h3>
			<p>Use the <code>notes</code> property to provide addition text information on a second line.</p>
			<CodeBlock language="html" code={`<FileDropzone notes="Files should not exceed 5mb." />`} />
		</div>
		<div class="space-y-4">
			<h3>Message</h3>
			<p>Use the default slot to replace the default UI entirely.</p>
			<CodeBlock language="html" code={`<FileDropzone>(message)</FileDropzone>`} />
		</div>
	</svelte:fragment>
</DocsShell>
