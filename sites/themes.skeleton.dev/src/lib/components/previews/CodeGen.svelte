<script lang="ts">
	// State
	import {
		stateFormColors,
		stateFormBackgrounds,
		stateFormTypography,
		stateFormSpacing,
		stateFormEdges
	} from '$lib/state.svelte';
	// Utils
	import { genColorPalette } from '$lib/generator';
	import { typographicScales, themeStatic, colorShades } from '$lib/constants';

	// Reactive State
	let colorPalette = $derived(genColorPalette(stateFormColors));
	let theme = $derived({
		properties: {
			// Scaling
			'--space-scale-factor': `${stateFormSpacing.factor}`,
			// Typography
			'--type-scale-factor': `${typographicScales[stateFormTypography.factor as number].value}`,
			...themeStatic.typoScale,
			// Typography - Base
			'--base-font-color': stateFormTypography.baseFontColor,
			'--base-font-color-dark': stateFormTypography.baseFontColorDark,
			'--base-font-family': stateFormTypography.baseFontFamily,
			'--base-font-size': stateFormTypography.baseFontsize,
			'--base-line-height': stateFormTypography.baseLineHeight,
			'--base-font-weight': stateFormTypography.baseFontWeight,
			'--base-font-style': stateFormTypography.baseFontStyle,
			'--base-letter-spacing': stateFormTypography.baseLetterSpacing,
			// Typography - Heading
			'--heading-font-color': stateFormTypography.headingFontColor,
			'--heading-font-color-dark': stateFormTypography.headingFontColorDark,
			'--heading-font-family': stateFormTypography.headingFontFamily,
			'--heading-font-size': stateFormTypography.headingFontsize,
			'--heading-line-height': stateFormTypography.headingLineHeight,
			'--heading-font-weight': stateFormTypography.headingFontWeight,
			'--heading-font-style': stateFormTypography.headingFontStyle,
			'--heading-letter-spacing': stateFormTypography.headingLetterSpacing,
			// Typography - Anchor
			'--anchor-font-color': stateFormTypography.anchorFontColor,
			'--anchor-font-color-dark': stateFormTypography.anchorFontColorDark,
			'--anchor-font-family': stateFormTypography.anchorFontFamily,
			'--anchor-font-size': stateFormTypography.anchorFontsize,
			'--anchor-line-height': stateFormTypography.anchorLineHeight,
			'--anchor-font-weight': stateFormTypography.anchorFontWeight,
			'--anchor-font-style': stateFormTypography.anchorFontStyle,
			'--anchor-letter-spacing': stateFormTypography.anchorLetterSpacing,
			// Backgrounds
			'--body-background-color': stateFormBackgrounds.bodyBackgroundColor,
			'--body-background-color-dark': stateFormBackgrounds.bodyBackgroundColorDark,
			// Edges ---
			'--radii-default': stateFormEdges.radiiDefault,
			'--radii-container': stateFormEdges.radiiContainer,
			'--border-width-default': stateFormEdges.borderWidthDefault,
			'--divide-width-default': stateFormEdges.ringWidthDefault,
			'--outline-width-default': stateFormEdges.outlineWidthDefault,
			'--ring-width-default': stateFormEdges.divideWidthDefault,
			// Colors
			...generateColorProperties()
		}
	});

	function generateColorProperties() {
		let code: any = {};
		let colorsArr: any = Object.entries(colorPalette);
		for (const [colorName, colorRamp] of colorsArr) {
			// Base Colors
			colorShades.forEach((cs) => (code[`--color-${colorName}-${cs}`] = colorRamp[cs].join(' ')));
			// Contrast Colors
			code[`--color-${colorName}-contrast-dark`] = stateFormColors[colorName].contrastDark;
			code[`--color-${colorName}-contrast-light`] = stateFormColors[colorName].contrastLight;
			// Base Colors
			colorShades.forEach((cs, i) => {
				const breakpointIndex = stateFormColors[colorName].breakpoint;
				const breakpointValue = i < breakpointIndex ? 'dark' : 'light';
				code[`--color-${colorName}-contrast-${cs}`] = `var(--color-${colorName}-contrast-${breakpointValue})`;
			});
		}
		return code;
	}
</script>

<div class="space-y-4 md:space-y-8">
	<!-- Template Code Block -->
	<!-- <CodeBlock code={} lang="ts" /> -->
	<pre class="pre"><code>{JSON.stringify(theme.properties, null, 2)}</code></pre>

	<hr class="hr" />

	<!-- Palette Preview -->
	<div class="grid grid-cols-7 gap-0.5">
		{#each Object.values(colorPalette) as color}
			<div class="grid grid-rows-11 gap-0.5">
				{#each Object.values(color || {}) as shade}
					<div class="p-2 pt-6 text-center" style:background="rgb({shade})">
						<div class="bg-black/30 text-white">{shade}</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>

	<!-- <pre class="pre"><code>{JSON.stringify(colorPalette, null, 2)}</code></pre> -->

	<!--
	<hr class="hr" />
	<section class="space-y-4">
		<h2 class="h4">Colors</h2>
		<pre class="pre"><code>{JSON.stringify(stateFormColors, null, 2)}</code></pre>
	</section>
	<section class="space-y-4">
		<h2 class="h4">Backgrounds</h2>
		<pre class="pre"><code>{JSON.stringify(stateFormBackgrounds, null, 2)}</code></pre>
	</section>
	<section class="space-y-4">
		<h2 class="h4">Typography</h2>
		<pre class="pre"><code>{JSON.stringify(stateFormTypography, null, 2)}</code></pre>
	</section>
	<section class="space-y-4">
		<h2 class="h4">Spacing</h2>
		<pre class="pre"><code>{JSON.stringify(stateFormSpacing, null, 2)}</code></pre>
	</section>
	<section class="space-y-4">
		<h2 class="h4">Edges</h2>
		<pre class="pre"><code>{JSON.stringify(stateFormEdges, null, 2)}</code></pre>
	</section>
	-->
</div>
