<script lang="ts">
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import FileButton from '$lib/components/FileButton/FileButton.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	let files: FileList;

	function onChange(e: Event): void {
		console.log('file data:', e);
	}

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['files', 'array', '-', 'Bind this to your form data, represents the "files" data from the input.'],
			['accept', 'string', '-', 'Set the native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept" target="_blank">file accepts attribute</a>.'],
			['name', 'string', '-', 'Set the native input name value.'],
			['multiple', 'boolean', 'false', 'Determines whether user can pick more than one file.']
		]
	};
	const tableEvents: any = {
		headings: ['Event', 'Description'],
		source: [['on:change', 'Detect when then file input value has changed.']]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [['Default', 'This slot provides the label for the file button.']]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>File Button</h1>
		<p>Allows you to select files with a single click.</p>
		<CodeBlock language="javascript" code={`import { FileButton } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Example -->
	<section class="card card-body flex flex-col items-center justify-center !py-10 space-y-4">
		<FileButton bind:files accept="image/*" name="file" class="btn-filled-primary" on:change={onChange}>Upload File</FileButton>
		<p class="!text-xs text-center">Monitor browser console when uploading files.</p>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p />
		<CodeBlock language="ts" code={`let files: FileList[] = [];`} />
		<CodeBlock language="html" code={`<FileButton bind:files={myFiles} class="btn-filled-primary">Upload File</FileButton>`} />
		<p>Note the class values are applied directly to the button element, which is a great way to provide button styles.</p>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Events -->
	<section class="space-y-4">
		<h2>Events</h2>
		<DataTable headings={tableEvents.headings} source={tableEvents.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>
</div>
