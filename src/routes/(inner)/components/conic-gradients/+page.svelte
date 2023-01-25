<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import ConicGradient from '$lib/components/ConicGradient/ConicGradient.svelte';

	import type { ConicStop } from '$lib/components/ConicGradient/types';

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
	let stopsThemed: ConicStop[] = [
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
			<!-- Basic -->
			<div class="card variant-glass p-4">
				<ConicGradient stops={stopsTailwind} legend>
					<h3>Heat Map</h3>
				</ConicGradient>
			</div>
			<!-- Theme Colors -->
			<div class="card variant-glass p-4 flex justify-center items-center">
				<ConicGradient stops={stopsThemed} legend class="w-full" />
			</div>
			<!-- Spinner -->
			<div class="card variant-glass p-4 flex justify-center items-center">
				<ConicGradient stops={stopsSpinner} spin width="w-8">
					<small class="opacity-50">Loading</small>
				</ConicGradient>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<p>
				Provide one or more color stops that start with values that range from <code>0%</code> to <code>100%</code>. A stop of
				<code>0%</code> starts at the top middle, then additional values are added in a clock-wise direction.
			</p>
			<CodeBlock language="ts" code={`import type { ConicStop } from '@skeletonlabs/skeleton';`} />
			<CodeBlock
				language="ts"
				code={`
const conicStops: ConicStop[] = [
	{ color: 'red', start: 0, end: 50 }, // 0-50% is red
	{ color: 'green', start: 50, end: 100 } // 50-100% is green
];`}
			/>
			<CodeBlock language="html" code={`<ConicGradient stops={conicStops}>(caption)</ConicGradient>`} />
		</div>
		<!-- Legend -->
		<div class="space-y-4">
			<h2>Display a Legend</h2>
			<p>By enabling the <code>legend</code> property, a small table of values will appear below the conic gradient.</p>
			<CodeBlock language="html" code={`<ConicGradient ... legend />`} />
		</div>
		<!-- Color Stops -->
		<div class="space-y-4">
			<h2>Color Stops</h2>
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
		<!-- Smooth Gradients -->
		<div class="space-y-4">
			<h2>Smooth Gradients</h2>
			<p>Provide gaps between when a color stop ends and when the next begins. The gradient blend will blend automatically.</p>
			<CodeBlock
				language="ts"
				code={`
const conicStops: ConicStop[] = [
	{ color: 'transparent', start: 0, end: 25 },
	{ color: 'grey', start: 75, end: 100 }
];`}
			/>
			<CodeBlock language="html" code={`<ConicGradient stops={conicStops} />`} />
		</div>
		<!-- Animate -->
		<div class="space-y-4">
			<h2>Animate</h2>
			<p>Add the <code>spin</code> property to implement a spinning animation automatically. This pairs well with smooth gradients.</p>
			<CodeBlock language="html" code={`<ConicGradient ... spin />`} />
		</div>
		<!-- Rotate Axis -->
		<div class="space-y-4">
			<h2>Rotate Axis</h2>
			<p>
				Use the <a href="https://tailwindcss.com/docs/rotate" target="_blank" rel="noreferrer">Tailwind rotate</a> utility clases with the
				<code>regionCone</code> property to change the starting axis position.
			</p>
			<CodeBlock language="html" code={`<ConicGradient ... regionCone="rotate-90" />`} />
		</div>
	</svelte:fragment>
</DocsShell>
