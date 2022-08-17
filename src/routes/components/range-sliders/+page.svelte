<script lang="ts">
	import Card from '$lib/Card/Card.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import DataTable from '$lib/Table/DataTable.svelte';
	import RangeSlider from '$lib/RangeSlider/RangeSlider.svelte';

	let valueA: number = 5;
	let valueB: number = 50;

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['label', 'string', '-', 'Provide an optional input label.'],
			['id', 'string', '(unique id)', 'Provide a unique input id.'],
			['name', 'string', '(matches id)', 'Provide a unique input name.'],
			['min', 'number', '0', 'Set the input minimum range.'],
			['max', 'number', '10', 'Set the input maximum range.'],
			['step', 'number', '1', 'Set the input step offset.'],
			['value', 'number', '0', 'Set the input value.'],
			['ticked', 'boolean', 'false', 'Enables tick marks. See browser support below.'],
			['accent', 'string', 'accent-primary-500', 'Provide a class to set the input accent color.']
		]
	};
	const tableA11y: any = {
		headings: ['Prop', 'Required', 'Description'],
		source: [['label', '-', `A semantic ARIA label.`]]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Range Slider</h1>
		<p>Capture input from a range of values, including optional ticks.</p>
		<CodeBlock language="js" code={`import { RangeSlider } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<Card class="space-y-4">
			<RangeSlider bind:value={valueA} label="Big Slider Example 1" />
			<RangeSlider bind:value={valueA} accent="accent-accent-500" label="Big Slider Example 2" />
			<RangeSlider bind:value={valueA} accent="accent-warning-500" label="Big Slider Example 3" />
		</Card>
		<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
			<Card class="space-y-4">
				<RangeSlider label="Labeled" bind:value={valueA} />
			</Card>
			<Card class="space-y-4">
				<RangeSlider label="Disabled" disabled />
			</Card>
			<Card class="space-y-4">
				<RangeSlider label="Ticked" bind:value={valueA} ticked />
			</Card>
			<Card class="space-y-4">
				<RangeSlider label="Stepped" max={100} bind:value={valueB} step={5} ticked />
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<CodeBlock language="typescript" code={`let myValue: number = 50;`} />
		<CodeBlock language="html" code={`<RangeSlider label="Skeleton" max={100} step={5} bind:value={myValue} accent="accent-primary-500" ticked />`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2 class="text-2xl font-bold">Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-center">
			<h2>Accessibility</h2>
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/slider/" target="_blank">ARIA Guidelines</a>
		</div>
		<DataTable headings={tableA11y.headings} source={tableA11y.source} />
	</section>

	<!-- Support -->
	<section class="space-y-4">
		<h2 class="text-2xl font-bold">Browser Support</h2>
		<p>
			Skeleton utilizes <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range" target="_blank">native HTML range inputs</a>. Browser support is mixed for
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range" target="_blank">native datalist element</a>, which are used to generate tickmarks. Additionally, some browsers
			(such as Chrome) alter the track color to ensure contrast between the track and meter. Please keep accessibility in mind when utilizing this component.
		</p>
	</section>
</div>
