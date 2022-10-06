<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import FileButton from '$lib/components/FileButton/FileButton.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'File Buttons',
		description: 'Allows you to select files with a single click.',
		imports: ['FileButton'],
		source: 'components/FileButton'
	};
	const properties: DocsShellTable[] = [
		{
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>files</code>', 'FileList', '-', 'Bind this to your form data, represents the "files" data from the input.'],
				['<code>accept</code>', 'string', '-', 'Set the native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept" target="_blank">file accepts attribute</a>.'],
				['<code>name</code>', 'string', '-', 'Set the native input name value.'],
				['<code>multiple</code>', 'boolean', 'false', 'Determines whether user can pick more than one file.']
			]
		}
	];
	const events: DocsShellTable[] = [
		{
			headings: ['Event', 'Description'],
			source: [['<code>on:change</code>', 'Detect when then file input value has changed.']]
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
			source: [['<code>Default</code>', 'This slot provides the label for the file button.']]
		}
	];

	// Local
	let files: FileList;

	function onChange(e: Event): void {
		console.log('file data:', e);
	}
</script>

<DocsShell {settings} {properties} {events} {classes} {slots}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card card-body text-center !py-10 space-y-4">
			<FileButton bind:files accept="image/*" name="file" class="btn-filled-accent" on:change={onChange}>Upload File</FileButton>
			<p class="!text-xs text-center">Monitor your browser's console when adding files.</p>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Note that class values are applied directly to the button element. Use this to provide button utility classes.</p>
			<CodeBlock language="ts" code={`let files: FileList;`} />
			<CodeBlock language="html" code={`<FileButton bind:files={myFiles} class="btn-filled-accent">Upload File</FileButton>`} />
		</section>
	</svelte:fragment>
</DocsShell>
