<script lang="ts">
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Required', 'Description'],
		source: [
			['name', '-', '-', '-', '&check;', '...'],
			['name', '-', '-', '-', '-', '...']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [['name', '...']]
	};
	const tableA11y: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Required', 'Description'],
		source: [
			['name', '-', '-', '-', '&check;', '...'],
			['name', '-', '-', '-', '-', '...']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Template</h1>
		<p>Describe the component here.</p>
		<CodeBlock language="javascript" code={`import { Component } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<h2 class="sr-only">Examples</h2>
	<div class="card card-body space-y-4">
		<p>(ExamplesHere)</p>
	</div>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<div>UsageExample</div>`} />
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

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-center">
			<h2>Accessibility</h2>
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/" target="_blank">ARIA Guidelines</a>
		</div>
		<DataTable headings={tableA11y.headings} source={tableA11y.source} />
	</section>
</div>
