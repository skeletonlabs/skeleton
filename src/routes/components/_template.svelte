<script lang="ts">
	import Card from '$lib/Card/Card.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import DataTable from '$lib/Table/DataTable.svelte';

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Required', 'Description'],
		source: [['name', '-', '-', '-', '-', '...']]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [['name', '...']]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Template</h1>
		<p>Describe the component here.</p>
		<CodeBlock
			language="javascript"
			code={`import { Component } from '@brainandbones/skeleton';`}
		/>
	</header>

	<!-- Examples -->
	<Card class="space-y-4">
		<p>(ExamplesHere)</p>
	</Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<div>UsageExample</div>`.trim()} />
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
