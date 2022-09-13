<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import Placeholder from '$lib/components/Placeholder/Placeholder.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Reactive
	$: props = {
		animate: true,
		circle: true
	};

	// Props & Slots
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['width', 'string', 'w-auto', 'class', 'Provide classes to set the width styles.'],
			['height', 'string', 'w-4', 'class', 'Provide classes to set the height styles.'],
			['rounded', 'string', 'rounded-lg', 'class', 'Provide classes to set the border radius style.'],
			['circle', 'boolean', 'false', 'true | false', 'Creates a circular shaped placeholder.'],
			['animate', 'boolean', 'true', 'true | false', 'Can be set to false to disable the pulse animation.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Heading -->
	<heading class="space-y-4">
		<h1>Placeholder</h1>
		<p>Create "skeleton" placeholders while loading page content.</p>
		<CodeBlock language="javascript" code={`import { Placeholder } from '@brainandbones/Placeholder';`} />
	</heading>

	<!-- Examples -->
	<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<Card>
			<Placeholder animate={props.animate} circle={props.circle} width="w-10" />
			<div class="space-y-4 mt-4">
				<Placeholder animate={props.animate} />
				<Placeholder animate={props.animate} />
			</div>
		</Card>
		<div class="space-y-4">
			<div class="flex justify-center items-center space-x-4">
				<SlideToggle bind:checked={props.circle} accent="bg-accent-500">Circle</SlideToggle>
				<SlideToggle bind:checked={props.animate} accent="bg-accent-500">Animate</SlideToggle>
			</div>
			<Card>
				<div class="space-y-4">
					<Placeholder animate={props.animate} />
					<div class="grid grid-cols-4 gap-4">
						<Placeholder animate={props.animate} />
						<Placeholder animate={props.animate} />
						<Placeholder animate={props.animate} />
						<Placeholder animate={props.animate} />
					</div>
				</div>
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<Placeholder animate={true} circle={true} />`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>
</div>
