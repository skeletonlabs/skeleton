<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsCustomFonts, settingsTypography } from '$lib/state/generator.svelte';
	import { customFontOptionValue, fetchFontsourceFont, parseFontsourceId } from '$lib/utils/generator/fonts';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import chroma from 'chroma-js';

	const WHITE = 'oklch(1 0 0 / 1)';
	const BLACK = 'oklch(0 0 0 / 1)';

	type DecorationState = 'default' | 'hover' | 'active' | 'focus';

	// Local
	let category: 'base' | 'headings' | 'anchors' = $state('base');
	let decorationState: DecorationState = $state('default');
	const decorationStates = ['default', 'hover', 'active', 'focus'] as const satisfies DecorationState[];

	/** Builds a `--typo-anchor--[state--]{suffix}` key for the current decoration state. */
	function anchorDecorationKey(state: DecorationState, suffix: string): keyof typeof settingsTypography {
		const infix = state === 'default' ? '' : `${state}--`;
		return `--typo-anchor--${infix}${suffix}` as keyof typeof settingsTypography;
	}

	/**
	 * Parses a `var(--color-{name}-{shade})` reference back into its parts, or detects `inherit` /
	 * a literal pure black/white (imported themes may carry these as hex/oklch rather than a palette var).
	 */
	function parseColorRef(value: string, specialHex: string | null, specialName: string, fallbackShade: string) {
		if (value === 'inherit') return { name: 'inherit', shade: fallbackShade };
		if (specialHex && chroma.valid(value) && chroma(value).hex() === specialHex) return { name: specialName, shade: fallbackShade };
		const match = value.match(/^var\(--color-([a-z]+)-(\d+)\)$/);
		return match ? { name: match[1], shade: match[2] } : { name: 'surface', shade: fallbackShade };
	}

	const initialBaseLight = parseColorRef(settingsTypography['--typo-base--color-light'], '#000000', 'black', '950');
	const initialBaseDark = parseColorRef(settingsTypography['--typo-base--color-dark'], '#ffffff', 'white', '50');
	const initialHeadingLight = parseColorRef(settingsTypography['--typo-heading--color-light'], '#000000', 'black', '950');
	const initialHeadingDark = parseColorRef(settingsTypography['--typo-heading--color-dark'], '#ffffff', 'white', '50');
	const initialAnchorLight = parseColorRef(settingsTypography['--typo-anchor--color-light'], null, '', '500');
	const initialAnchorDark = parseColorRef(settingsTypography['--typo-anchor--color-dark'], null, '', '500');

	let baseLightColorName: string = $state(initialBaseLight.name);
	let baseLightShade: string = $state(initialBaseLight.shade);
	let baseDarkColorName: string = $state(initialBaseDark.name);
	let baseDarkShade: string = $state(initialBaseDark.shade);
	let headingLightColorName: string = $state(initialHeadingLight.name);
	let headingLightShade: string = $state(initialHeadingLight.shade);
	let headingDarkColorName: string = $state(initialHeadingDark.name);
	let headingDarkShade: string = $state(initialHeadingDark.shade);
	let anchorLightColorName: string = $state(initialAnchorLight.name);
	let anchorLightShade: string = $state(initialAnchorLight.shade);
	let anchorDarkColorName: string = $state(initialAnchorDark.name);
	let anchorDarkShade: string = $state(initialAnchorDark.shade);

	const initialDecorationColor = Object.fromEntries(
		decorationStates.map((state) => [
			state,
			parseColorRef(settingsTypography[anchorDecorationKey(state, 'text-decoration-color')], null, '', '500'),
		]),
	) as Record<DecorationState, { name: string; shade: string }>;

	let decorationColorName: Record<DecorationState, string> = $state(
		Object.fromEntries(decorationStates.map((state) => [state, initialDecorationColor[state].name])) as Record<DecorationState, string>,
	);
	let decorationColorShade: Record<DecorationState, string> = $state(
		Object.fromEntries(decorationStates.map((state) => [state, initialDecorationColor[state].shade])) as Record<DecorationState, string>,
	);

	$effect(() => {
		settingsTypography['--typo-base--color-light'] =
			baseLightColorName === 'black' ? BLACK : `var(--color-${baseLightColorName}-${baseLightShade})`;
	});

	$effect(() => {
		settingsTypography['--typo-base--color-dark'] =
			baseDarkColorName === 'white' ? WHITE : `var(--color-${baseDarkColorName}-${baseDarkShade})`;
	});

	$effect(() => {
		settingsTypography['--typo-heading--color-light'] =
			headingLightColorName === 'inherit'
				? 'inherit'
				: headingLightColorName === 'black'
					? BLACK
					: `var(--color-${headingLightColorName}-${headingLightShade})`;
	});

	$effect(() => {
		settingsTypography['--typo-heading--color-dark'] =
			headingDarkColorName === 'inherit'
				? 'inherit'
				: headingDarkColorName === 'white'
					? WHITE
					: `var(--color-${headingDarkColorName}-${headingDarkShade})`;
	});

	$effect(() => {
		settingsTypography['--typo-anchor--color-light'] =
			anchorLightColorName === 'inherit' ? 'inherit' : `var(--color-${anchorLightColorName}-${anchorLightShade})`;
	});

	$effect(() => {
		settingsTypography['--typo-anchor--color-dark'] =
			anchorDarkColorName === 'inherit' ? 'inherit' : `var(--color-${anchorDarkColorName}-${anchorDarkShade})`;
	});

	$effect(() => {
		for (const state of decorationStates) {
			settingsTypography[anchorDecorationKey(state, 'text-decoration-color')] =
				decorationColorName[state] === 'inherit' ? 'inherit' : `var(--color-${decorationColorName[state]}-${decorationColorShade[state]})`;
		}
	});

	async function promptCustomFont(slot: 'font1' | 'font2') {
		const input = prompt('Fontsource URL (ex: https://fontsource.org/fonts/poppins)');
		if (!input) return;
		try {
			const font = await fetchFontsourceFont(parseFontsourceId(input));
			settingsCustomFonts[slot] = font;
			settingsTypography[slot === 'font1' ? '--font-custom-1' : '--font-custom-2'] = customFontOptionValue(font);
		} catch (err) {
			alert(err instanceof Error ? err.message : 'Failed to load font from Fontsource.');
		}
	}
</script>

<div class="space-y-4">
	<!-- Custom Fonts -->
	<section class="space-y-4">
		<header class="flex justify-between items-center gap-4">
			<div class="flex items-center gap-2">
				<h3 class="h5">Custom Fonts</h3>
				<span class="badge preset-filled-primary-500">Beta</span>
			</div>
			<a class="btn btn-xs preset-tonal" href="https://skeleton.dev/docs/svelte/design/themes#custom-fonts" target="_blank">View Docs</a>
		</header>
		<p class="opacity-60">
			Import custom fonts to preview via <a href="https://fontsource.org/" target="_blank" class="underline">Fontsource</a>.
		</p>
		<div class="grid grid-cols-2 gap-4">
			<div class="label space-y-2">
				<span class="label-text">Custom Font 1</span>
				<button
					type="button"
					class="chip w-full justify-center {settingsCustomFonts.font1
						? 'preset-tonal'
						: 'preset-outlined-surface-300-700 hover:preset-tonal'}"
					onclick={() => promptCustomFont('font1')}
				>
					{settingsCustomFonts.font1?.family ?? 'Import'}
				</button>
			</div>
			<div class="label space-y-2">
				<span class="label-text">Custom Font 2</span>
				<button
					type="button"
					class="chip w-full justify-center {settingsCustomFonts.font2
						? 'preset-tonal'
						: 'preset-outlined-surface-300-700 hover:preset-tonal'}"
					onclick={() => promptCustomFont('font2')}
				>
					{settingsCustomFonts.font2?.family ?? 'Import'}
				</button>
			</div>
		</div>
	</section>
	<!-- Scale -->
	<section class="space-y-4">
		<header class="flex justify-between items-center gap-4">
			<h3 class="h5">Typographic Scale</h3>
			<a class="btn btn-xs preset-tonal" href="https://designcode.io/typographic-scales" target="_blank">View Docs</a>
		</header>
		<!-- --text-scaling -->
		<div
			class="grid grid-cols-3 preset-outlined-surface-200-800 rounded-container overflow-hidden divide-x divide-y divide-surface-200-800"
		>
			{#each constants.typographicScales as typographicScale (typographicScale)}
				<button
					type="button"
					onclick={() => (settingsTypography['--text-scaling'] = typographicScale.value)}
					class="flex flex-col items-center py-2 {settingsTypography['--text-scaling'] === typographicScale.value
						? 'preset-filled'
						: 'hover:preset-tonal-primary'}"
				>
					<strong class="text-[16px]">{typographicScale.value}</strong>
					<strong class="text-[10px] opacity-50">{typographicScale.label}</strong>
				</button>
			{/each}
		</div>
	</section>
	<h3 class="h5">Typographic Feature</h3>
	<Tabs value={category} onValueChange={(e) => (category = e.value as typeof category)}>
		<Tabs.List>
			<Tabs.Indicator />
			<Tabs.Trigger class="flex-1" value="base">Base</Tabs.Trigger>
			<Tabs.Trigger class="flex-1" value="headings">Headings</Tabs.Trigger>
			<Tabs.Trigger class="flex-1" value="anchors">Anchors</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="base">
			<p class="mb-5 opacity-60">Set global defaults for text colors and font styles.</p>
			<div class="grid grid-cols-2 gap-4">
				<label class="label space-y-2">
					<span class="label-text">Light Mode Font Color</span>
					<div
						class="w-full h-4 border border-surface-200-800 rounded-base"
						style:background={`${settingsTypography['--typo-base--color-light']}`}
					></div>
					<select class="select" bind:value={baseLightColorName}>
						<option value="black">Black</option>
						{#each constants.colorNames as colorName}
							<option value={colorName}>{colorName}</option>
						{/each}
					</select>
					{#if baseLightColorName !== 'black'}
						<select class="select" bind:value={baseLightShade}>
							{#each constants.colorShades as colorShade}
								<option value={colorShade.toString()}>{colorShade}</option>
							{/each}
						</select>
					{/if}
				</label>
				<label class="label space-y-2">
					<span class="label-text">Dark Mode Font Color</span>
					<div
						class="w-full h-4 border border-surface-200-800 rounded-base"
						style:background={`${settingsTypography['--typo-base--color-dark']}`}
					></div>
					<select class="select" bind:value={baseDarkColorName}>
						<option value="white">White</option>
						{#each constants.colorNames as colorName}
							<option value={colorName}>{colorName}</option>
						{/each}
					</select>
					{#if baseDarkColorName !== 'white'}
						<select class="select" bind:value={baseDarkShade}>
							{#each constants.colorShades as colorShade}
								<option value={colorShade.toString()}>{colorShade}</option>
							{/each}
						</select>
					{/if}
				</label>
				<hr class="hr col-span-2" />
				<label class="label col-span-2">
					<span class="label-text">Font Family</span>
					<select class="select" name="--typo-base--font-family" bind:value={settingsTypography['--typo-base--font-family']}>
						{#each constants.fontFamilies as fontFamily}
							<option value={fontFamily}>{fontFamily}</option>
						{/each}
						{#if settingsCustomFonts.font1}
							<option value="var(--font-custom-1)">{settingsCustomFonts.font1.family}</option>
						{/if}
						{#if settingsCustomFonts.font2}
							<option value="var(--font-custom-2)">{settingsCustomFonts.font2.family}</option>
						{/if}
					</select>
				</label>
				<hr class="hr col-span-2" />
				<label class="label">
					<span class="label-text">Font Size</span>
					<select class="select" name="--typo-base--font-size" bind:value={settingsTypography['--typo-base--font-size']}>
						{#each constants.fontSizes as fontSize}
							<option value={fontSize}>{fontSize}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Line Height</span>
					<select class="select" name="--typo-base--line-height" bind:value={settingsTypography['--typo-base--line-height']}>
						{#each constants.lineHeights as lineHeight}
							<option value={lineHeight}>{lineHeight}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Weight</span>
					<select class="select" name="--typo-base--font-weight" bind:value={settingsTypography['--typo-base--font-weight']}>
						{#each constants.fontWeights as fontWeight}
							<option value={fontWeight}>{fontWeight}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Style</span>
					<select class="select" name="--typo-base--font-style" bind:value={settingsTypography['--typo-base--font-style']}>
						{#each constants.fontStyles as fontStyle}
							<option value={fontStyle}>{fontStyle}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Letter Spacing</span>
					<select class="select" name="--typo-base--letter-spacing" bind:value={settingsTypography['--typo-base--letter-spacing']}>
						{#each constants.letterSpacings as letterSpacing}
							<option value={letterSpacing}>{letterSpacing}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Word Spacing</span>
					<select class="select" name="--typo-base--word-spacing" bind:value={settingsTypography['--typo-base--word-spacing']}>
						{#each constants.wordSpacings as wordSpacing}
							<option value={wordSpacing}>{wordSpacing}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Stretch</span>
					<select class="select" name="--typo-base--font-stretch" bind:value={settingsTypography['--typo-base--font-stretch']}>
						{#each constants.fontStretches as fontStretch}
							<option value={fontStretch}>{fontStretch}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Kerning</span>
					<select class="select" name="--typo-base--font-kerning" bind:value={settingsTypography['--typo-base--font-kerning']}>
						{#each constants.fontKernings as fontKerning}
							<option value={fontKerning}>{fontKerning}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Hyphens</span>
					<select class="select" name="--typo-base--hyphens" bind:value={settingsTypography['--typo-base--hyphens']}>
						{#each constants.hyphensOptions as hyphensOption}
							<option value={hyphensOption}>{hyphensOption}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Text Transform</span>
					<select class="select" name="--typo-base--text-transform" bind:value={settingsTypography['--typo-base--text-transform']}>
						{#each constants.textTransforms as textTransform}
							<option value={textTransform}>{textTransform}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Text Shadow</span>
					<select class="select" name="--typo-base--text-shadow" bind:value={settingsTypography['--typo-base--text-shadow']}>
						{#each constants.textShadows as textShadow}
							<option value={textShadow}>{textShadow}</option>
						{/each}
					</select>
				</label>
			</div>
		</Tabs.Content>
		<Tabs.Content value="headings">
			<p class="mb-5 opacity-60">Adjust headings (H1-H6) text color and font styles.</p>
			<div class="grid grid-cols-2 gap-4">
				<label class="label space-y-2">
					<span class="label-text">Light Mode Font Color</span>
					<div
						class="w-full h-4 border border-surface-200-800 rounded-base"
						style:background={settingsTypography['--typo-heading--color-light'] === 'inherit'
							? `${settingsTypography['--typo-base--color-light']}`
							: `${settingsTypography['--typo-heading--color-light']}`}
					></div>
					<select class="select" bind:value={headingLightColorName}>
						<option value="inherit">inherit</option>
						<option value="black">Black</option>
						{#each constants.colorNames as colorName}
							<option value={colorName}>{colorName}</option>
						{/each}
					</select>
					{#if headingLightColorName !== 'inherit' && headingLightColorName !== 'black'}
						<select class="select" bind:value={headingLightShade}>
							{#each constants.colorShades as colorShade}
								<option value={colorShade.toString()}>{colorShade}</option>
							{/each}
						</select>
					{/if}
				</label>
				<label class="label space-y-2">
					<span class="label-text">Dark Mode Font Color</span>
					<div
						class="w-full h-4 border border-surface-200-800 rounded-base"
						style:background={settingsTypography['--typo-heading--color-dark'] === 'inherit'
							? `${settingsTypography['--typo-base--color-dark']}`
							: `${settingsTypography['--typo-heading--color-dark']}`}
					></div>
					<select class="select" bind:value={headingDarkColorName}>
						<option value="inherit">inherit</option>
						<option value="white">White</option>
						{#each constants.colorNames as colorName}
							<option value={colorName}>{colorName}</option>
						{/each}
					</select>
					{#if headingDarkColorName !== 'inherit' && headingDarkColorName !== 'white'}
						<select class="select" bind:value={headingDarkShade}>
							{#each constants.colorShades as colorShade}
								<option value={colorShade.toString()}>{colorShade}</option>
							{/each}
						</select>
					{/if}
				</label>
				<hr class="hr col-span-2" />
				<label class="label col-span-2">
					<span class="label-text">Font Family</span>
					<select class="select" name="--typo-heading--font-family" bind:value={settingsTypography['--typo-heading--font-family']}>
						{#each constants.fontFamilies as fontFamily}
							<option value={fontFamily}>{fontFamily}</option>
						{/each}
						{#if settingsCustomFonts.font1}
							<option value="var(--font-custom-1)">{settingsCustomFonts.font1.family}</option>
						{/if}
						{#if settingsCustomFonts.font2}
							<option value="var(--font-custom-2)">{settingsCustomFonts.font2.family}</option>
						{/if}
					</select>
				</label>
				<hr class="hr col-span-2" />
				<label class="label">
					<span class="label-text">Font Weight</span>
					<select class="select" name="--typo-heading--font-weight" bind:value={settingsTypography['--typo-heading--font-weight']}>
						{#each constants.fontWeights as fontWeight}
							<option value={fontWeight}>{fontWeight}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Style</span>
					<select class="select" name="--typo-heading--font-style" bind:value={settingsTypography['--typo-heading--font-style']}>
						{#each constants.fontStyles as fontStyle}
							<option value={fontStyle}>{fontStyle}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Letter Spacing</span>
					<select class="select" name="--typo-heading--letter-spacing" bind:value={settingsTypography['--typo-heading--letter-spacing']}>
						{#each constants.letterSpacings as letterSpacing}
							<option value={letterSpacing}>{letterSpacing}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Word Spacing</span>
					<select class="select" name="--typo-heading--word-spacing" bind:value={settingsTypography['--typo-heading--word-spacing']}>
						{#each constants.wordSpacings as wordSpacing}
							<option value={wordSpacing}>{wordSpacing}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Stretch</span>
					<select class="select" name="--typo-heading--font-stretch" bind:value={settingsTypography['--typo-heading--font-stretch']}>
						{#each constants.fontStretches as fontStretch}
							<option value={fontStretch}>{fontStretch}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Kerning</span>
					<select class="select" name="--typo-heading--font-kerning" bind:value={settingsTypography['--typo-heading--font-kerning']}>
						{#each constants.fontKernings as fontKerning}
							<option value={fontKerning}>{fontKerning}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Hyphens</span>
					<select class="select" name="--typo-heading--hyphens" bind:value={settingsTypography['--typo-heading--hyphens']}>
						{#each constants.hyphensOptions as hyphensOption}
							<option value={hyphensOption}>{hyphensOption}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Text Transform</span>
					<select class="select" name="--typo-heading--text-transform" bind:value={settingsTypography['--typo-heading--text-transform']}>
						{#each constants.textTransforms as textTransform}
							<option value={textTransform}>{textTransform}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Text Shadow</span>
					<select class="select" name="--typo-heading--text-shadow" bind:value={settingsTypography['--typo-heading--text-shadow']}>
						{#each constants.textShadows as textShadow}
							<option value={textShadow}>{textShadow}</option>
						{/each}
					</select>
				</label>
			</div>
		</Tabs.Content>
		<Tabs.Content value="anchors">
			<p class="mb-5 opacity-60">Adjust anchor link text color and font styles.</p>
			<div class="grid grid-cols-2 gap-4">
				<label class="label space-y-2">
					<span class="label-text">Light Mode Font Color</span>
					<div
						class="w-full h-4 border border-surface-200-800 rounded-base"
						style:background={settingsTypography['--typo-anchor--color-light'] === 'inherit'
							? `${settingsTypography['--typo-base--color-light']}`
							: `${settingsTypography['--typo-anchor--color-light']}`}
					></div>
					<select class="select" bind:value={anchorLightColorName}>
						<option value="inherit">inherit</option>
						{#each constants.colorNames as colorName}
							<option value={colorName}>{colorName}</option>
						{/each}
					</select>
					{#if anchorLightColorName !== 'inherit'}
						<select class="select" bind:value={anchorLightShade}>
							{#each constants.colorShades as colorShade}
								<option value={colorShade.toString()}>{colorShade}</option>
							{/each}
						</select>
					{/if}
				</label>
				<label class="label space-y-2">
					<span class="label-text">Dark Mode Font Color</span>
					<div
						class="w-full h-4 border border-surface-200-800 rounded-base"
						style:background={settingsTypography['--typo-anchor--color-dark'] === 'inherit'
							? `${settingsTypography['--typo-base--color-dark']}`
							: `${settingsTypography['--typo-anchor--color-dark']}`}
					></div>
					<select class="select" bind:value={anchorDarkColorName}>
						<option value="inherit">inherit</option>
						{#each constants.colorNames as colorName}
							<option value={colorName}>{colorName}</option>
						{/each}
					</select>
					{#if anchorDarkColorName !== 'inherit'}
						<select class="select" bind:value={anchorDarkShade}>
							{#each constants.colorShades as colorShade}
								<option value={colorShade.toString()}>{colorShade}</option>
							{/each}
						</select>
					{/if}
				</label>
				<hr class="hr col-span-2" />
				<label class="label col-span-2">
					<span class="label-text">Font Family</span>
					<select class="select" name="--typo-anchor--font-family" bind:value={settingsTypography['--typo-anchor--font-family']}>
						{#each constants.fontFamilies as fontFamily}
							<option value={fontFamily}>{fontFamily}</option>
						{/each}
						{#if settingsCustomFonts.font1}
							<option value="var(--font-custom-1)">{settingsCustomFonts.font1.family}</option>
						{/if}
						{#if settingsCustomFonts.font2}
							<option value="var(--font-custom-2)">{settingsCustomFonts.font2.family}</option>
						{/if}
					</select>
				</label>
				<hr class="hr col-span-2" />
				<label class="label">
					<span class="label-text">Font Size</span>
					<select class="select" name="--typo-anchor--font-size" bind:value={settingsTypography['--typo-anchor--font-size']}>
						{#each constants.fontSizes as fontSize}
							<option value={fontSize}>{fontSize}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Line Height</span>
					<select class="select" name="--typo-anchor--line-height" bind:value={settingsTypography['--typo-anchor--line-height']}>
						{#each constants.lineHeights as lineHeight}
							<option value={lineHeight}>{lineHeight}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Weight</span>
					<select class="select" name="--typo-anchor--font-weight" bind:value={settingsTypography['--typo-anchor--font-weight']}>
						{#each constants.fontWeights as fontWeight}
							<option value={fontWeight}>{fontWeight}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Style</span>
					<select class="select" name="--typo-anchor--font-style" bind:value={settingsTypography['--typo-anchor--font-style']}>
						{#each constants.fontStyles as fontStyle}
							<option value={fontStyle}>{fontStyle}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Letter Spacing</span>
					<select class="select" name="--typo-anchor--letter-spacing" bind:value={settingsTypography['--typo-anchor--letter-spacing']}>
						{#each constants.letterSpacings as letterSpacing}
							<option value={letterSpacing}>{letterSpacing}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Word Spacing</span>
					<select class="select" name="--typo-anchor--word-spacing" bind:value={settingsTypography['--typo-anchor--word-spacing']}>
						{#each constants.wordSpacings as wordSpacing}
							<option value={wordSpacing}>{wordSpacing}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Stretch</span>
					<select class="select" name="--typo-anchor--font-stretch" bind:value={settingsTypography['--typo-anchor--font-stretch']}>
						{#each constants.fontStretches as fontStretch}
							<option value={fontStretch}>{fontStretch}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Kerning</span>
					<select class="select" name="--typo-anchor--font-kerning" bind:value={settingsTypography['--typo-anchor--font-kerning']}>
						{#each constants.fontKernings as fontKerning}
							<option value={fontKerning}>{fontKerning}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Hyphens</span>
					<select class="select" name="--typo-anchor--hyphens" bind:value={settingsTypography['--typo-anchor--hyphens']}>
						{#each constants.hyphensOptions as hyphensOption}
							<option value={hyphensOption}>{hyphensOption}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Text Transform</span>
					<select class="select" name="--typo-anchor--text-transform" bind:value={settingsTypography['--typo-anchor--text-transform']}>
						{#each constants.textTransforms as textTransform}
							<option value={textTransform}>{textTransform}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Text Shadow</span>
					<select class="select" name="--typo-anchor--text-shadow" bind:value={settingsTypography['--typo-anchor--text-shadow']}>
						{#each constants.textShadows as textShadow}
							<option value={textShadow}>{textShadow}</option>
						{/each}
					</select>
				</label>
			</div>
			<!-- Anchor Decoration -->
			<div class="mt-8 space-y-4">
				<h2 class="h5">Anchor Decoration</h2>
				<Tabs value={decorationState} onValueChange={(e) => (decorationState = e.value as typeof decorationState)}>
					<Tabs.List>
						<Tabs.Indicator />
						<Tabs.Trigger class="flex-1" value="default">Default</Tabs.Trigger>
						<Tabs.Trigger class="flex-1" value="hover">Hover</Tabs.Trigger>
						<Tabs.Trigger class="flex-1" value="active">Active</Tabs.Trigger>
						<Tabs.Trigger class="flex-1" value="focus">Focus</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value={decorationState}>
						<div class="grid grid-cols-2 gap-4">
							<label class="label">
								<span class="label-text">Line</span>
								<select class="select" bind:value={settingsTypography[anchorDecorationKey(decorationState, 'text-decoration-line')]}>
									{#each constants.textDecorations as textDecoration}
										<option value={textDecoration}>{textDecoration}</option>
									{/each}
								</select>
							</label>
							<label class="label">
								<span class="label-text">Color</span>
								<select class="select" bind:value={decorationColorName[decorationState]}>
									<option value="inherit">inherit</option>
									{#each constants.colorNames as colorName}
										<option value={colorName}>{colorName}</option>
									{/each}
								</select>
								{#if decorationColorName[decorationState] !== 'inherit'}
									<select class="select" bind:value={decorationColorShade[decorationState]}>
										{#each constants.colorShades as colorShade}
											<option value={colorShade.toString()}>{colorShade}</option>
										{/each}
									</select>
								{/if}
							</label>
							<label class="label">
								<span class="label-text">Style</span>
								<select class="select" bind:value={settingsTypography[anchorDecorationKey(decorationState, 'text-decoration-style')]}>
									{#each constants.decorationStyles as decorationStyle}
										<option value={decorationStyle}>{decorationStyle}</option>
									{/each}
								</select>
							</label>
							<label class="label">
								<span class="label-text">Thickness</span>
								<select class="select" bind:value={settingsTypography[anchorDecorationKey(decorationState, 'text-decoration-thickness')]}>
									{#each constants.decorationThicknesses as decorationThickness}
										<option value={decorationThickness}>{decorationThickness}</option>
									{/each}
								</select>
							</label>
							<label class="label">
								<span class="label-text">Underline Offset</span>
								<select class="select" bind:value={settingsTypography[anchorDecorationKey(decorationState, 'text-underline-offset')]}>
									{#each constants.underlineOffsets as underlineOffset}
										<option value={underlineOffset}>{underlineOffset}</option>
									{/each}
								</select>
							</label>
							<label class="label">
								<span class="label-text">Underline Position</span>
								<select class="select" bind:value={settingsTypography[anchorDecorationKey(decorationState, 'text-underline-position')]}>
									{#each constants.underlinePositions as underlinePosition}
										<option value={underlinePosition}>{underlinePosition}</option>
									{/each}
								</select>
							</label>
						</div>
					</Tabs.Content>
				</Tabs>
			</div>
		</Tabs.Content>
	</Tabs>
</div>
