<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import ProgressRadial from '$lib/components/ProgressRadial/ProgressRadial.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Progress Radials',
		description: 'Displays a radial indicator showing the progress or completion of a task.',
		imports: ['ProgressRadial'],
		source: 'components/ProgressRadial'
	};
	const properties: DocsShellTable[] = [
		{
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>value</code>', 'number', '-', 'Set the meter fill amount. Shows as indeterminate when set undefined.'],
				['<code>stroke</code>', 'number', '20', 'Sets the base stroke width. Scales responsively.'],
				['<code>meter</code>', 'string', 'stroke-accent-500', 'Provide classes to set meter color.'],
				['<code>track</code>', 'string', 'stroke-surface-200 dark:stroke-surface-700', 'Provide classes to set track color.'],
				['<code>fill</code>', 'string', 'fill-token', 'Provide classes to set the SVG text fill color.'],
				['<code>font</code>', 'string', '56', 'Sets the base font size. Scales responsively.']
			]
		}
	];
	const classes: DocsShellTable[] = [
		{
			description: 'Coming soon.'
			// headings: ['Selector', 'Description'],
			// source: [
			// 	['<code>.foo</code>', '...'],
			// 	['<code>.bar</code>', '...']
			// ]
		}
	];
	const slots: DocsShellTable[] = [
		{
			headings: ['Name', 'Description'],
			source: [['<code>default</code>', 'Text content is rendered as SVG text in the center of the element.']]
		}
	];
	const a11y: DocsShellTable[] = [
		{
			aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/meter/',
			headings: ['Prop', 'Required', 'Description'],
			source: [['<code>label</code>', '-', `A semantic ARIA label.`]]
		}
	];

	// Reactive
	$: props = { value: 50, max: 100, step: 10 };
</script>

<DocsShell {settings} {properties} {classes} {slots} {a11y}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="card card-body grid grid-cols-1 gap-4">
				<ProgressRadial value={props.value} class="w-full">{props.value}%</ProgressRadial>
				<input type="range" min="0" max={props.max} step={props.step} bind:value={props.value} />
			</div>
			<div class="space-y-4">
				<div class="space-y-2">
					<h3>Indeterminate</h3>
					<p>Remove the value property to set to indeterminate mode.</p>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="card card-body">
						<ProgressRadial stroke={20} />
					</div>
					<div class="card card-body">
						<ProgressRadial stroke={50} meter="stroke-primary-500" track="stroke-primary-500/20" />
					</div>
					<div class="card card-body">
						<ProgressRadial stroke={100} meter="stroke-accent-500" track="stroke-accent-500/20" />
					</div>
					<div class="card card-body">
						<ProgressRadial stroke={200} meter="stroke-ternary-500" track="stroke-ternary-500/20" />
					</div>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock language="ts" code={`let value: number = 50; // %`} />
			<CodeBlock language="html" code={`<ProgressRadial {value}>{valuePercent}%</ProgressRadial>`} />
		</section>
	</svelte:fragment>
</DocsShell>
