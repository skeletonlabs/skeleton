<script lang="ts">
	import { DataTable, Card, ProgressRadial } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['value', 'number', '-', 'Set the meter fill amount. Shows as indeterminate when set undefined.'],
			['stroke', 'number', '20', 'Sets the base stroke width. Scales responsively.'],
			['meter', 'string', 'stroke-black dark:stroke-white', 'Provide classes to set meter color.'],
			['track', 'string', 'stroke-surface-300 dark:stroke-surface-700', 'Provide classes to set track color.'],
			['color', 'string', 'fill-black dark:fill-white', 'Provide classes to set the SVG text fill color.'],
			['font', 'string', '56', 'Sets the base font size. Scales responsively.']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [['default', 'Text content is render as SVG text in the center of the element.']]
	};
	const tableA11y: any = {
		headings: ['Prop', 'Required', 'Description'],
		source: [['label', '-', `A semantic ARIA label.`]]
	};

	// Reactive
	$: props = { value: 50, max: 100, step: 10 };
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Progress Radial</h1>
		<p>Displays a radial indicator showing the progress or completion of a task.</p>
		<CodeBlock language="js" code={`import { ProgressRadial } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<Card>
		<div class="md:max-w-[50%] lg:max-w-[33%] mx-auto space-y-8">
			<ProgressRadial value={props.value}>{props.value}%</ProgressRadial>
			<input type="range" min="0" max={props.max} step={props.step} bind:value={props.value} aria-label="Example Radial Value" />
		</div>
	</Card>
	<section class="space-y-4">
		<div class="space-y-2">
			<h3>Indeterminate</h3>
			<p>Remove the value property to set to indeterminate mode.</p>
		</div>
		<div class="grid grid-cols-4 gap-4">
			<Card class="space-y-4">
				<ProgressRadial stroke={20} />
			</Card>
			<Card class="space-y-4">
				<ProgressRadial stroke={50} meter="stroke-primary-500" track="stroke-primary-500/20" />
			</Card>
			<Card class="space-y-4">
				<ProgressRadial stroke={100} meter="stroke-accent-500" track="stroke-accent-500/20" />
			</Card>
			<Card class="space-y-4">
				<ProgressRadial stroke={200} meter="stroke-warning-500" track="stroke-warning-500/20" />
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock
			language="html"
			code={`
<ProgressRadial
    value={valueAmount}
    stroke={20}
    meter="stroke-primary-500"
    track="stroke-primary-500/20"
    color="fill-primary-500"
    font="24"
>{valueAmount}%</ProgressRadial>
`.trim()}
		/>
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
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/meter/" target="_blank">ARIA Guidelines</a>
		</div>
		<DataTable headings={tableA11y.headings} source={tableA11y.source} />
	</section>
</div>
