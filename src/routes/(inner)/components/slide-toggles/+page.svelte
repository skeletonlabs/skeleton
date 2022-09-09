<script lang="ts">
	import { DataTable, Card, SlideToggle } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	let checkedValue: boolean = false;

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['checked', 'boolean', 'false', 'true | false', 'The checked state of the input element.'],
			['accent', 'string', 'bg-accent-500', 'class', 'Provide classes to set the checked state color.'],
			['size', 'string', 'md', 'sm | md | lg', 'Sets the size of the component.']
		]
	};
	const tableA11y: any = {
		headings: ['Prop', 'Required', 'Description'],
		source: [['label', '-', `Provide a semantic label.`]]
	};
</script>

<div class="space-y-8">
	<!-- Heading -->
	<heading class="space-y-4">
		<h1>Slide Toggle</h1>
		<p>Add a slide toggle switch with custom colors and sizes to capture input from a user.</p>
		<CodeBlock language="javascript" code={`import { SlideToggle } from '@brainandbones/skeleton';`} />
	</heading>

	<!-- Examples -->
	<section class="space-y-4">
		<h3>Colors</h3>
		<Card body="flex justify-center">
			<div class="grid grid-cols-3 gap-4">
				<SlideToggle size="md" accent="bg-primary-400" checked label="Toggle Green" />
				<SlideToggle size="md" accent="bg-warning-400" checked label="Toggle Warning" />
				<SlideToggle size="md" accent="bg-accent-400" checked label="Toggle Purple" />
				<SlideToggle size="md" accent="bg-blue-400" checked label="Toggle Blue" />
				<SlideToggle size="md" accent="bg-orange-400" checked label="Toggle Orange" />
				<SlideToggle size="md" accent="bg-yellow-400" checked label="Toggle Yellow" />
			</div>
		</Card>
		<h3>Sizes</h3>
		<Card body="flex justify-center items-center space-x-4">
			<SlideToggle size="sm" label="Toggle Small" />
			<SlideToggle size="md" label="Toggle Medium" />
			<SlideToggle size="lg" label="Toggle Large" />
		</Card>
		<h3>Label Slot</h3>
		<Card body="flex justify-center items-center space-x-4">
			<SlideToggle size="md" bind:checked={checkedValue}>
				<p class="w-[90px]">{checkedValue ? 'Checked' : 'Unchecked'}</p>
			</SlideToggle>
		</Card>
		<h3>Disabled</h3>
		<Card body="flex justify-center items-center space-x-4">
			<SlideToggle size="lg" disabled label="Toggle Disabled" />
		</Card>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="typescript" code={`let myValue: boolean = false;`} />
		<CodeBlock language="html" code={`<SlideToggle bind:checked={myValue} size="lg" accent="bg-primary-500">{labelText}</SlideToggle>`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-center">
			<h2>Accessibility</h2>
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/switch/" target="_blank">ARIA Guidelines</a>
		</div>
		<DataTable headings={tableA11y.headings} source={tableA11y.source} />
	</section>
</div>
