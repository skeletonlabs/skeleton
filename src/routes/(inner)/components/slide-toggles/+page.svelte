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
		<p>A sliding toggle element that can capture input from a user.</p>
		<CodeBlock language="javascript" code={`import { SlideToggle } from '@brainandbones/skeleton';`} />
	</heading>

	<!-- Examples -->
	<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<Card slotBody="flex justify-center items-center space-x-4">
			<svelte:fragment slot="header"><p class="text-center">Accent Colors</p></svelte:fragment>
			<SlideToggle size="md" accent="bg-primary-500" checked label="Toggle Green" />
			<SlideToggle size="md" checked label="Toggle Purple" />
			<SlideToggle size="md" accent="bg-warning-500" checked label="Toggle Warning" />
		</Card>
		<Card slotBody="flex justify-center items-center space-x-4">
			<svelte:fragment slot="header"><p class="text-center">Sizes</p></svelte:fragment>
			<SlideToggle size="sm" label="Toggle Small" />
			<SlideToggle size="md" label="Toggle Medium" />
			<SlideToggle size="lg" label="Toggle Large" />
		</Card>
		<Card slotBody="flex justify-center items-center space-x-4">
			<svelte:fragment slot="header"><p class="text-center">Labeled</p></svelte:fragment>
			<SlideToggle size="md" bind:checked={checkedValue}>
				Value is <code class="inline-block w-[40px] text-center">{checkedValue ? 'On' : 'Off'}</code>
			</SlideToggle>
		</Card>
		<Card slotBody="flex justify-center items-center space-x-4">
			<svelte:fragment slot="header"><p class="text-center">Disabled</p></svelte:fragment>
			<SlideToggle disabled label="Toggle Disabled" />
		</Card>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="typescript" code={`let myValue: boolean = false;`} />
		<CodeBlock language="html" code={`<SlideToggle bind:checked={myValue}>(label)</SlideToggle>`} />
		<CodeBlock language="html" code={`<SlideToggle bind:checked={myValue} size="lg" />`} />
		<CodeBlock language="html" code={`<SlideToggle bind:checked={myValue} disabled />`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<p>
			This component makes use of <a href="https://svelte.dev/docs#template-syntax-attributes-and-props" target="_blank">$$restProps</a>, which allows arbitrary attributes to be provided to the
			component.
		</p>
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
