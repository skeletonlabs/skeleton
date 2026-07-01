<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsTypography } from '$lib/state/generator.svelte';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';

	// Local
	let category: 'base' | 'headings' | 'anchors' = $state('base');
	let decorationState: 'default' | 'hover' | 'active' | 'focus' = $state('default');

	/** Builds a `--typo-anchor--[state--]{suffix}` key for the current decoration state. */
	function anchorDecorationKey(state: typeof decorationState, suffix: string): keyof typeof settingsTypography {
		const infix = state === 'default' ? '' : `${state}--`;
		return `--typo-anchor--${infix}${suffix}` as keyof typeof settingsTypography;
	}
</script>

<div class="space-y-4">
	<!-- <p class="opacity-60">Define all typographic settings for your theme.</p> -->
	<!-- Scale -->
	<div class="label">
		<div class="flex justify-between gap-4">
			<span class="label-text">Typographic Scale</span>
			<a class="text-inherit underline label-text" href="https://designcode.io/typographic-scales" target="_blank">What's This?</a>
		</div>
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
	</div>
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
					<select class="select" name="--typo-base--color-light" bind:value={settingsTypography['--typo-base--color-light']}>
						<option value="oklch(0 0 0 / 1)">Black</option>
						{#each constants.colorNames as colorName}
							<optgroup label={colorName}>
								{#each constants.colorShades as colorShade}
									<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</label>
				<label class="label space-y-2">
					<span class="label-text">Dark Mode Font Color</span>
					<div
						class="w-full h-4 border border-surface-200-800 rounded-base"
						style:background={`${settingsTypography['--typo-base--color-dark']}`}
					></div>
					<select class="select" name="--typo-base--color-dark" bind:value={settingsTypography['--typo-base--color-dark']}>
						<option value="oklch(1 0 0 / 1)">White</option>
						{#each constants.colorNames as colorName}
							<optgroup label={colorName}>
								{#each constants.colorShades as colorShade}
									<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</label>
				<label class="label col-span-2">
					<span class="label-text">Font Family</span>
					<select class="select" name="--typo-base--font-family" bind:value={settingsTypography['--typo-base--font-family']}>
						{#each constants.fontFamilies as fontFamily}
							<option value={fontFamily}>{fontFamily}</option>
						{/each}
					</select>
				</label>
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
				<label class="label col-span-2">
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
					<select class="select" name="--typo-heading--color-light" bind:value={settingsTypography['--typo-heading--color-light']}>
						<option value="inherit">inherit</option>
						<option value="oklch(0 0 0 / 1)">Black</option>
						{#each constants.colorNames as colorName}
							<optgroup label={colorName}>
								{#each constants.colorShades as colorShade}
									<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</label>
				<label class="label space-y-2">
					<span class="label-text">Dark Mode Font Color</span>
					<div
						class="w-full h-4 border border-surface-200-800 rounded-base"
						style:background={settingsTypography['--typo-heading--color-dark'] === 'inherit'
							? `${settingsTypography['--typo-base--color-dark']}`
							: `${settingsTypography['--typo-heading--color-dark']}`}
					></div>
					<select class="select" name="--typo-heading--color-dark" bind:value={settingsTypography['--typo-heading--color-dark']}>
						<option value="inherit">inherit</option>
						<option value="oklch(1 0 0 / 1)">White</option>
						{#each constants.colorNames as colorName}
							<optgroup label={colorName}>
								{#each constants.colorShades as colorShade}
									<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</label>
				<label class="label col-span-2">
					<span class="label-text">Font Family</span>
					<select class="select" name="--typo-heading--font-family" bind:value={settingsTypography['--typo-heading--font-family']}>
						{#each constants.fontFamilies as fontFamily}
							<option value={fontFamily}>{fontFamily}</option>
						{/each}
					</select>
				</label>
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
					<select
						class="select"
						name="--typo-heading--letter-spacing"
						bind:value={settingsTypography['--typo-heading--letter-spacing']}
					>
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
					<select
						class="select"
						name="--typo-heading--text-transform"
						bind:value={settingsTypography['--typo-heading--text-transform']}
					>
						{#each constants.textTransforms as textTransform}
							<option value={textTransform}>{textTransform}</option>
						{/each}
					</select>
				</label>
				<label class="label col-span-2">
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
					<select class="select" name="--typo-anchor--color-light" bind:value={settingsTypography['--typo-anchor--color-light']}>
						<option value="inherit">inherit</option>
						{#each constants.colorNames as colorName}
							<optgroup label={colorName}>
								{#each constants.colorShades as colorShade}
									<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</label>
				<label class="label space-y-2">
					<span class="label-text">Dark Mode Font Color</span>
					<div
						class="w-full h-4 border border-surface-200-800 rounded-base"
						style:background={settingsTypography['--typo-anchor--color-dark'] === 'inherit'
							? `${settingsTypography['--typo-base--color-dark']}`
							: `${settingsTypography['--typo-anchor--color-dark']}`}
					></div>
					<select class="select" name="--typo-anchor--color-dark" bind:value={settingsTypography['--typo-anchor--color-dark']}>
						<option value="inherit">inherit</option>
						{#each constants.colorNames as colorName}
							<optgroup label={colorName}>
								{#each constants.colorShades as colorShade}
									<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</label>
				<label class="label col-span-2">
					<span class="label-text">Font Family</span>
					<select class="select" name="--typo-anchor--font-family" bind:value={settingsTypography['--typo-anchor--font-family']}>
						{#each constants.fontFamilies as fontFamily}
							<option value={fontFamily}>{fontFamily}</option>
						{/each}
					</select>
				</label>
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
					<select
						class="select"
						name="--typo-anchor--letter-spacing"
						bind:value={settingsTypography['--typo-anchor--letter-spacing']}
					>
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
					<select
						class="select"
						name="--typo-anchor--text-transform"
						bind:value={settingsTypography['--typo-anchor--text-transform']}
					>
						{#each constants.textTransforms as textTransform}
							<option value={textTransform}>{textTransform}</option>
						{/each}
					</select>
				</label>
				<label class="label col-span-2">
					<span class="label-text">Text Shadow</span>
					<select class="select" name="--typo-anchor--text-shadow" bind:value={settingsTypography['--typo-anchor--text-shadow']}>
						{#each constants.textShadows as textShadow}
							<option value={textShadow}>{textShadow}</option>
						{/each}
					</select>
				</label>
			</div>
			<!-- Decoration -->
			<div class="mt-8 space-y-4">
				<h2 class="h5">Decoration</h2>
				<p class="opacity-60">Configure text decoration for each interaction state.</p>
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
								<select
									class="select"
									bind:value={settingsTypography[anchorDecorationKey(decorationState, 'text-decoration-line')]}
								>
									{#each constants.textDecorations as textDecoration}
										<option value={textDecoration}>{textDecoration}</option>
									{/each}
								</select>
							</label>
							<label class="label">
								<span class="label-text">Color</span>
								<select
									class="select"
									bind:value={settingsTypography[anchorDecorationKey(decorationState, 'text-decoration-color')]}
								>
									<option value="inherit">inherit</option>
									{#each constants.colorNames as colorName}
										<optgroup label={colorName}>
											{#each constants.colorShades as colorShade}
												<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
											{/each}
										</optgroup>
									{/each}
								</select>
							</label>
							<label class="label">
								<span class="label-text">Style</span>
								<select
									class="select"
									bind:value={settingsTypography[anchorDecorationKey(decorationState, 'text-decoration-style')]}
								>
									{#each constants.decorationStyles as decorationStyle}
										<option value={decorationStyle}>{decorationStyle}</option>
									{/each}
								</select>
							</label>
							<label class="label">
								<span class="label-text">Thickness</span>
								<select
									class="select"
									bind:value={settingsTypography[anchorDecorationKey(decorationState, 'text-decoration-thickness')]}
								>
									{#each constants.decorationThicknesses as decorationThickness}
										<option value={decorationThickness}>{decorationThickness}</option>
									{/each}
								</select>
							</label>
							<label class="label">
								<span class="label-text">Underline Offset</span>
								<select
									class="select"
									bind:value={settingsTypography[anchorDecorationKey(decorationState, 'text-underline-offset')]}
								>
									{#each constants.underlineOffsets as underlineOffset}
										<option value={underlineOffset}>{underlineOffset}</option>
									{/each}
								</select>
							</label>
							<label class="label">
								<span class="label-text">Underline Position</span>
								<select
									class="select"
									bind:value={settingsTypography[anchorDecorationKey(decorationState, 'text-underline-position')]}
								>
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
