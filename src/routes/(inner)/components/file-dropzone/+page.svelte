<script lang="ts">
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import FileDropzone from '$lib/components/FileDropzone/FileDropzone.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	let files: FileList;

	function onChange(e: any): void {
		console.log('file data:', e);
	}

	// Tables
	const tableProps = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['files', 'array', '-', 'Bind this to your form data, represents the "files" data from the input.'],
			['accept', 'string', '-', 'Set the native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept" target="_blank">file accepts attribute</a>.'],
			['name', 'string', '-', 'Set the native input name value.'],
			['multiple', 'boolean', 'false', 'Determines whether user can pick more than one file.'],
			['notes', 'string', '-', 'Provided additional notes or information.']
		]
	};
	const tablePropsStyles = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['width', 'string', 'w-full', 'Provide styles to set the dropzone width.'],
			['height', 'string', 'h-24', 'Provide styles to set the dropzone height.'],
			['padding', 'string', 'p-4', 'Provide styles to set the dropzone padding.'],
			['color', 'string', '-', 'Provide styles to set the dropzone text color.']
		]
	};
	const tableSlots = {
		headings: ['Name', 'Description'],
		source: [['default', 'Replace the message with custom UI.']]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>File Dropzone</h1>
		<p>Allow upload of files with drag and drop.</p>
		<CodeBlock language="javascript" code={`import { FileDropzone } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<h2 class="sr-only">Examples</h2>
	<section class="card card-body grid grid-cols-1 gap-4">
		<FileDropzone bind:files on:change={onChange} />
		<FileDropzone bind:files notes="Files should not exceed 5mb." on:change={onChange} />
		<FileDropzone bind:files on:change={onChange}><p>Custom message example</p></FileDropzone>
		<p class="!text-xs text-center">Monitor browser console when uploading files.</p>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="ts" code={`let files: FileList;`} />
		<h3>Notes Text</h3>
		<p>Use the <code>notes</code> prop to add a second line of information.</p>
		<CodeBlock language="html" code={`<FileDropzone notes="Files should not exceed 5mb." />`} />
		<h3>Message Slot</h3>
		<p>Use the default slot to replace the "drop files" message entirely.</p>
		<CodeBlock language="html" code={`<FileDropzone>(message)</FileDropzone>`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
		<DataTable headings={tablePropsStyles.headings} source={tablePropsStyles.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>Uses <code>input[type='file']</code> to allow for all native input accessibility.</p>
	</section>
</div>
