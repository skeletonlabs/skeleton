<script lang="ts">
	import { tailwindDefaultColors } from './settings';
	import type { ConicStop } from './types';

	// Props
	/**
	 * Provide a data set of color stops and labels.
	 * @type {ConicStop[]}
	 */
	export let stops: ConicStop[] = [{ color: ['neutral', 500], start: 0, end: 100 }];
	/** Allows for automatic generation of a legend below the conic gradient. */
	export let legend = false;
	/** When enabled, the conic gradient will spin. */
	export let spin = false;
	/** Provided classes to style the conic gradient width. */
	export let width = 'w-full';
	/** Provided classes to style the legend hover effect. */
	export let hover = 'bg-primary-hover-token';

	// Local
	let cone: string;
	let generatedLegendList: any[];

	// Styles
	const cBase = 'flex flex-col items-center space-y-4';
	const cCaption = 'text-center';
	const cCone = 'block aspect-square rounded-full';
	const cLabel = 'text-sm w-full';
	const cSwatch = 'block aspect-square bg-black w-5 rounded-full mr-2';

	// Set Color
	function setColorValue(color: any): string {
		// If string, keep as is
		if (typeof color === 'string') return color;
		// If object, provide default Tailwind color
		const colorSet: any = tailwindDefaultColors.find((c) => c.label === color[0]);
		return colorSet?.shades[color[1]].hex;
	}

	// Generate Conic Gradient style
	function genConicGradient(): void {
		let d: any = stops.map((v) => `${setColorValue(v.color)} ${v.start}% ${v.end}%`);
		cone = `conic-gradient(${d.join(', ')})`;
	}

	// Generate Legend
	function genLegend(): any {
		if (!legend) return;
		generatedLegendList = stops.map((v) => {
			return {
				label: v.label,
				color: setColorValue(v.color),
				value: v.end - v.start
			};
		});
	}

	// Lifecycle (on init)
	genConicGradient();
	genLegend();

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesCone = `${cCone} ${width}`;
</script>

<figure class="conic-gradient {classesBase}" data-testid="conic-gradient">
	<!-- Label -->
	{#if $$slots.default}
		<figcaption class="conic-caption {cCaption}"><slot /></figcaption>
	{/if}
	<!-- Conic Gradient -->
	{#if cone}
		<div class="concic-cone {classesCone}" class:animate-spin={spin} style:background={cone} />
	{/if}
	<!-- Legend -->
	{#if legend && generatedLegendList}
		<ul class="conic-list list {cLabel}">
			{#each generatedLegendList as { color, label, value }}
				<li class="conic-item {hover}" on:click on:keydown on:keyup on:keypress>
					<span class="conic-swatch {cSwatch}" style:background={color} />
					<span class="conic-label flex-auto">{label}</span>
					<strong class="conic-value">{value}%</strong>
				</li>
			{/each}
		</ul>
	{/if}
</figure>
