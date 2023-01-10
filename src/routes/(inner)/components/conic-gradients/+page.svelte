<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import ConicGradient from '$lib/components/ConicGradient/ConicGradient.svelte';

	import type { ConicStop } from '$lib/components/ConicGradient/types';

	// @ts-expect-error sveld import
	import sveldConicGradient from '$lib/components/ConicGradient/ConicGradient.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Conic Gradients',
		description: 'Create conic gradient data visualizations for pie charts, loading spinners, and more.',
		imports: ['ConicGradient'],
		types: ['ConicStop'],
		source: 'components/ConicGradient',
		components: [{ sveld: sveldConicGradient }]
	};

	// Color Stops
	let stopsTailwind: ConicStop[] = [
		{ label: 'Orange', color: ['orange', 500], start: 0, end: 10 },
		{ label: 'Yellow', color: ['yellow', 500], start: 10, end: 35 },
		{ label: 'Red', color: ['red', 500], start: 35, end: 100 }
	];
	const stopsVars: ConicStop[] = [
		{ label: 'Primary', color: 'rgb(var(--color-primary-500))', start: 0, end: 33 },
		{ label: 'Secondary', color: 'rgb(var(--color-secondary-500))', start: 33, end: 66 },
		{ label: 'Tertiary', color: 'rgb(var(--color-tertiary-500))', start: 66, end: 100 }
	];
	const stopsSpinner: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-surface-500))', start: 75, end: 100 }
	];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 gap-5">
			<div class="card p-4">
				<ConicGradient stops={stopsTailwind} legend={true}>
					<h3>Heat Map</h3>
				</ConicGradient>
			</div>
			<!-- CSS Properties -->
			<div class="card p-4 flex justify-center items-center">
				<ConicGradient stops={stopsVars} legend={true} class="w-full" />
			</div>
			<!-- Spinner -->
			<div class="card p-4 flex justify-center items-center">
				<ConicGradient stops={stopsSpinner} spin={true} width="w-8">
					<small class="opacity-50">Loading</small>
				</ConicGradient>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<p>
				Provide one or more color stops that start at <em>0%</em> and end at <em>100%</em>. The data set below will create a half red/green
				conic gradient.
			</p>
			<CodeBlock
				language="ts"
				code={`
import type { ConicStop } from '@skeletonlabs/skeleton';

const conicStops: ConicStop[] = [
	{ color: 'red', start: 0, end: 50 },
	{ color: 'green', start: 50, end: 100 }
];`}
			/>
			<CodeBlock language="html" code={`<ConicGradient stops={conicStops} legend={false} spin={false}>(caption)</ConicGradient>`} />
		</div>
		<!-- Legend -->
		<div class="space-y-4">
			<h2>Display a Legend</h2>
			<p>A legend can be enabled by setting <code>legend</code> as <em>true</em> and provided labels for each stop.</p>
			<CodeBlock
				language="ts"
				code={`
const conicStops: ConicStop[] = [
	{ label: 'Label 1', color: 'red', start: 0, end: 33 },
	{ label: 'Label 2', color: 'green', start: 33, end: 66 },
	{ label: 'Label 3', color: 'blue', start: 66, end: 100 }
];`}
			/>
		</div>
		<!-- Applying Colors -->
		<div class="space-y-4">
			<h2>Colors</h2>
			<h3>Via Theme Colors</h3>
			<p>Provide a theme color CSS custom property <code>var(--color-primary-500)</code> wrapped in <code>rgb()</code>.</p>
			<CodeBlock
				language="ts"
				code={`
const conicStops: ConicStop[] = [
	{ label: 'Primary', color: 'rgb(var(--color-primary-500))', start: 0, end: 33 },
	{ label: 'Secondary', color: 'rgb(var(--color-secondary-500))', start: 33, end: 66 },
	{ label: 'Tertiary', color: 'rgb(var(--color-tertiary-500))', start: 66, end: 100 }
];`}
			/>
		</div>
		<!-- Tailwind Colors -->
		<div class="space-y-4">
			<h3>Via Tailwind Colors</h3>
			<p>To utilize default Tailwind colors, supply an array with the format <code>[name: string, shade: number]</code>.</p>
			<CodeBlock
				language="ts"
				code={`
const conicStops: ConicStop[] = [
	{ label: 'Orange', color: ['orange', 500], start: 0, end: 10 },
	{ label: 'Yellow', color: ['yellow', 500], start: 10, end: 35 },
	{ label: 'Red', color: ['red', 500], start: 35, end: 100 }
];`}
			/>
		</div>
		<!-- Custom Colors -->
		<div class="space-y-4">
			<h3>Via Custom Colors</h3>
			<p>
				You can provide <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank" rel="noreferrer"
					>standard CSS color values</a
				> as a string, including: color names, hex, rgba, HSL, or similar.
			</p>
			<CodeBlock
				language="ts"
				code={`
const conicStops: ConicStop[] = [
	{ label: 'Name', color: 'orange', start: 0, end: 10 },
	{ label: 'HSL', color: 'hsl(60deg 100% 50%)', start: 10, end: 35 },
	{ label: 'Hex', color: '#bada55', start: 35, end: 100 }
];`}
			/>
		</div>
		<!-- Spinner -->
		<div class="space-y-4">
			<h2>Spinner Gradient</h2>
			<p>
				To create a spinner, set <code>spin</code> to <em>true</em>, and created a smooth gradient transition between transparent and filled
				color stops. Note the numeric gap between stops.
			</p>
			<CodeBlock language="html" code={`<ConicGradient stops={conicStops} spin={true} width="w-8" />`} />
			<CodeBlock
				language="ts"
				code={`
const conicStops: ConicStop[] = [
	{ color: 'transparent', start: 0, end: 25 },
	{ color: 'grey', start: 75, end: 100 }
];`}
			/>
		</div>
	</svelte:fragment>
</DocsShell>
