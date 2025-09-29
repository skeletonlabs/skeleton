<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsTypography } from '$lib/state/generator.svelte';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';

	// Local
	let category: 'base' | 'headings' | 'anchors' = $state('base');
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
						style:background={`${settingsTypography['--base-font-color']}`}
					></div>
					<select class="select" name="--base-font-color" bind:value={settingsTypography['--base-font-color']}>
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
						style:background={`${settingsTypography['--base-font-color-dark']}`}
					></div>
					<select class="select" name="--base-font-color-dark" bind:value={settingsTypography['--base-font-color-dark']}>
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
					<select class="select" name="--base-font-family" bind:value={settingsTypography['--base-font-family']}>
						= {#each constants.fontFamilies as fontFamily}
							<option value={fontFamily}>{fontFamily}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Size</span>
					<select class="select" name="--base-font-size" bind:value={settingsTypography['--base-font-size']}>
						{#each constants.fontSizes as fontSize}
							<option value={fontSize}>{fontSize}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Line Height</span>
					<select class="select" name="--base-line-height" bind:value={settingsTypography['--base-line-height']}>
						{#each constants.lineHeights as lineHeight}
							<option value={lineHeight}>{lineHeight}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Weight</span>
					<select class="select" name="--base-font-weight" bind:value={settingsTypography['--base-font-weight']}>
						{#each constants.fontWeights as fontWeight}
							<option value={fontWeight}>{fontWeight}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Style</span>
					<select class="select" name="--base-font-style" bind:value={settingsTypography['--base-font-style']}>
						{#each constants.fontStyles as fontStyle}
							<option value={fontStyle}>{fontStyle}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Letter Spacing</span>
					<select class="select" name="--base-letter-spacing" bind:value={settingsTypography['--base-letter-spacing']}>
						{#each constants.letterSpacings as letterSpacing}
							<option value={letterSpacing}>{letterSpacing}</option>
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
						style:background={settingsTypography['--heading-font-color'] === 'inherit'
							? `${settingsTypography['--base-font-color']}`
							: `${settingsTypography['--heading-font-color']}`}
					></div>
					<select class="select" name="--heading-font-color" bind:value={settingsTypography['--heading-font-color']}>
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
						style:background={settingsTypography['--heading-font-color-dark'] === 'inherit'
							? `${settingsTypography['--base-font-color-dark']}`
							: `${settingsTypography['--heading-font-color-dark']}`}
					></div>
					<select class="select" name="--heading-font-color-dark" bind:value={settingsTypography['--heading-font-color-dark']}>
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
					<select class="select" name="--heading-font-family" bind:value={settingsTypography['--heading-font-family']}>
						= {#each constants.fontFamilies as fontFamily}
							<option value={fontFamily}>{fontFamily}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Weight</span>
					<select class="select" name="--heading-font-weight" bind:value={settingsTypography['--heading-font-weight']}>
						{#each constants.fontWeights as fontWeight}
							<option value={fontWeight}>{fontWeight}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Style</span>
					<select class="select" name="--heading-font-style" bind:value={settingsTypography['--heading-font-style']}>
						{#each constants.fontStyles as fontStyle}
							<option value={fontStyle}>{fontStyle}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Letter Spacing</span>
					<select class="select" name="--heading-letter-spacing" bind:value={settingsTypography['--heading-letter-spacing']}>
						{#each constants.letterSpacings as letterSpacing}
							<option value={letterSpacing}>{letterSpacing}</option>
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
						style:background={settingsTypography['--anchor-font-color'] === 'inherit'
							? `${settingsTypography['--base-font-color']}`
							: `${settingsTypography['--anchor-font-color']}`}
					></div>
					<select class="select" name="--anchor-font-color" bind:value={settingsTypography['--anchor-font-color']}>
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
						style:background={settingsTypography['--anchor-font-color-dark'] === 'inherit'
							? `${settingsTypography['--base-font-color-dark']}`
							: `${settingsTypography['--anchor-font-color-dark']}`}
					></div>
					<select class="select" name="--anchor-font-color-dark" bind:value={settingsTypography['--anchor-font-color-dark']}>
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
					<select class="select" name="--anchor-font-family" bind:value={settingsTypography['--anchor-font-family']}>
						= {#each constants.fontFamilies as fontFamily}
							<option value={fontFamily}>{fontFamily}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Size</span>
					<select class="select" name="--anchor-font-size" bind:value={settingsTypography['--anchor-font-size']}>
						{#each constants.fontSizes as fontSize}
							<option value={fontSize}>{fontSize}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Line Height</span>
					<select class="select" name="--anchor-line-height" bind:value={settingsTypography['--anchor-line-height']}>
						{#each constants.lineHeights as lineHeight}
							<option value={lineHeight}>{lineHeight}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Weight</span>
					<select class="select" name="--anchor-font-weight" bind:value={settingsTypography['--anchor-font-weight']}>
						{#each constants.fontWeights as fontWeight}
							<option value={fontWeight}>{fontWeight}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Font Style</span>
					<select class="select" name="--anchor-font-style" bind:value={settingsTypography['--anchor-font-style']}>
						{#each constants.fontStyles as fontStyle}
							<option value={fontStyle}>{fontStyle}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Letter Spacing</span>
					<select class="select" name="--anchor-letter-spacing" bind:value={settingsTypography['--anchor-letter-spacing']}>
						{#each constants.letterSpacings as letterSpacing}
							<option value={letterSpacing}>{letterSpacing}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Decoration</span>
					<select class="select" name="--anchor-text-decoration" bind:value={settingsTypography['--anchor-text-decoration']}>
						{#each constants.textDecorations as textDecoration}
							<option value={textDecoration}>{textDecoration}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Hover</span>
					<select class="select" name="--anchor-text-decoration-hover" bind:value={settingsTypography['--anchor-text-decoration-hover']}>
						{#each constants.textDecorations as textDecoration}
							<option value={textDecoration}>{textDecoration}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Active</span>
					<select class="select" name="--anchor-text-decoration-hover" bind:value={settingsTypography['--anchor-text-decoration-hover']}>
						{#each constants.textDecorations as textDecoration}
							<option value={textDecoration}>{textDecoration}</option>
						{/each}
					</select>
				</label>
				<label class="label">
					<span class="label-text">Focus</span>
					<select class="select" name="--anchor-text-decoration-focus" bind:value={settingsTypography['--anchor-text-decoration-focus']}>
						{#each constants.textDecorations as textDecoration}
							<option value={textDecoration}>{textDecoration}</option>
						{/each}
					</select>
				</label>
			</div>
		</Tabs.Content>
	</Tabs>
</div>
