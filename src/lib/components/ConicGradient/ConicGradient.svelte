<script lang="ts">
	import { tailwindDefaultColors } from '$lib/tailwind/colors';
	import type { ConicStop } from './types';

	// Props
	export let stops: ConicStop[] = [{ label: 'Progress', color: ['neutral', 500], start: 0, end: 100 }];
	export let legend: boolean = false;
	export let spin: boolean = false;
	export let width: string = 'w-full';
	export let hover: string = 'bg-hover-token';

	// Local
	let cone: string;
	let generatedLegendList: any[];

	// Styles
	const cBase: string = 'flex flex-col items-center space-y-4';
	const cCaption: string = 'text-center';
	const cCone: string = 'block aspect-square rounded-full';
	const cLabel: string = 'text-sm w-full';
	const cSwatch: string = 'block aspect-square bg-black w-5 rounded-full mr-2';

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
				<li class="conic-item {hover}">
					<span class="conic-swatch {cSwatch}" style:background={color} />
					<span class="conic-label flex-auto">{label}</span>
					<strong class="conic-value">{value}%</strong>
				</li>
			{/each}
		</ul>
	{/if}
</figure>
