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
			description: 'Uses <code>$$restProps</code> to support all valid input attributes such as <em>required</em>.',
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>files</code>', 'FileList', '-', 'Bind this to your form data, represents the "files" data from the input.'],
				['<code>accept</code>', 'string', '-', 'Set the native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept" target="_blank">file accepts attribute</a>.'],
				['<code>name</code>', 'string', '-', 'Set the native input name value.'],
				['<code>multiple</code>', 'boolean', 'false', 'Determines whether user can pick more than one file.'],
				['<code>btn-filled-accent</code>', 'string', 'btn-filled-accent', 'Provides classes to style the button element.']
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
			headings: ['Selector', 'Description'],
			source: [
				['<code>.file-button</code>', 'The parent element.'],
				['<code>.file-button-input</code>', 'The hidden input element.'],
				['<code>.file-button-btn</code>', 'The visible button element.']
			]
		}
	];
	const slots: DocsShellTable[] = [
		{
			headings: ['Name', 'Description'],
			source: [['<code>Default</code>', 'Provide the button label text.']]
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
			<FileButton bind:files accept="image/*" name="file" button="btn-filled-accent" on:change={onChange}>Upload File</FileButton>
			<p class="!text-xs text-center">Monitor your browser's console when adding files.</p>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock language="ts" code={`let files: FileList;`} />
			<CodeBlock language="html" code={`<FileButton bind:files={files} button="btn-filled-accent">Upload File</FileButton>`} />
		</section>
	</svelte:fragment>
</DocsShell>
