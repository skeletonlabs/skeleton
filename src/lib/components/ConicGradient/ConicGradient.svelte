<!-- 
 https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient
 https://www.sitepoint.com/create-css-conic-gradients-pie-charts/
 https://css-tricks.com/radial-gradient-recipes/ 
 https://tailwindcss.com/docs/configuration#referencing-in-java-script
 -->
<script lang="ts">
	import tailwindColors from 'tailwindcss/colors';

	import type { ConicColorStop } from './types';

	// Props
	export let data: ConicColorStop[] = [{ label: 'Progress', color: ['neutral', 500], start: 0, end: 100 }];
	export let legend: boolean = false;
	export let spin: boolean = false;
	export let width: string = 'w-full';
	export let hover: string = 'hover:bg-surface-500/30';

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
		const tw: any = tailwindColors;
		return tw[color[0]][color[1]];
	}

	// Generate Conic Gradient style
	function genConicGradient(): void {
		let d: any = data.map((v) => `${setColorValue(v.color)} ${v.start}% ${v.end}%`);
		cone = `conic-gradient(${d.join(', ')})`;
	}

	// Generate Legend
	function genLegend(): any {
		if (!legend) return;
		generatedLegendList = data.map((v) => {
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
	$: classesBase = `${cBase} ${$$props.class || ''}`;
	$: classesCone = `${cCone} ${width}`;
</script>

<figure class="conic-gradient {classesBase}" data-testid="conic-gradient">
	<!-- Label -->
	{#if $$slots.default}
		<figcaption class="conic-caption {cCaption}"><slot /></figcaption>
	{/if}
	<!-- Conic Gradient -->
	{#if cone}
		<div class={classesCone} class:animate-spin={spin} style:background={cone} />
	{/if}
	<!-- Legend -->
	{#if legend && generatedLegendList}
		<ul class="conic-list list {cLabel}">
			{#each generatedLegendList as { color, label, value }}
				<li class="conic-li {hover}">
					<span class="conic-swatch {cSwatch}" style:background={color} />
					<span class="flex-auto">{label}</span>
					<strong>{value}%</strong>
				</li>
			{/each}
		</ul>
	{/if}
</figure>
