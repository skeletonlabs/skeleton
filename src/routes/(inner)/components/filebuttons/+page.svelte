<script lang="ts">
	import { FileButton } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';

	let files: any = [];

	function formatter(file: any): any {
		return {
			name: file.name,
			size: file.size,
			type: file.type
		};
	}

	function onChange(e: Event): void {
		console.log('file data:', e);
	}

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Required', 'Description'],
		source: [
			['xxx', '-', '-', '-', '&check;', '...'],
			['yyy', '-', '-', '-', '-', '...']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [['xxx', '...']]
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
		<!-- Component -->
		<FileButton bind:files accept="image/*" name="file" class="btn-filled-primary" on:change={onChange}>Upload File</FileButton>
		<!-- Log Results -->
		{#each files as file}
			<pre>details: {JSON.stringify(formatter(file), null, 2)}</pre>
		{/each}
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>(code block here)</p>
		<p>(describe how to use this component)</p>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>
</div>
