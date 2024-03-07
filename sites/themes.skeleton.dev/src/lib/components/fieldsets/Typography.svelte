<script lang="ts">
	import {
		colorNames,
		colorShades,
		fontFamilies,
		fontSizes,
		fontStyles,
		fontWeights,
		letterSpacings,
		lineHeights,
		textDecorations,
		typographicScales
	} from '$lib/constants';
	import { stateFormTypography } from '$lib/state.svelte';

	let factorLabel = $derived(typographicScales[Number(stateFormTypography.factor)].label);
	let factorValue = $derived(typographicScales[Number(stateFormTypography.factor)].value);
</script>

<fieldset class="space-y-4 md:space-y-8">
	<header>
		<h2 class="h2">Typography</h2>
		<p class="opacity-60">Define all typographic settings for your theme.</p>
	</header>
	<!-- Factor -->
	<label class="label space-y-2">
		<div class="label-text flex justify-between">
			<strong>Typographic Scale</strong>
			<span>{factorValue} </span>
		</div>
		<input
			class="input"
			type="range"
			name="typography-scale-factor"
			bind:value={stateFormTypography.factor}
			min="0"
			max="8"
			step="1"
		/>
		<div class="rounded p-4 text-center preset-filled-surface-200-800">{factorLabel}</div>
	</label>

	<!-- --- -->
	<hr class="hr" />

	<!-- Base -->
	<header>
		<h3 class="h3">Base</h3>
		<p class="opacity-60">Define default page typography styles.</p>
	</header>
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Base Color</span>
			<div class="input-group grid-cols-[auto_1fr]">
				<div class="input-group-cell">
					{#if stateFormTypography.headingFontColor !== 'inherit'}
						<div class="size-5 rounded-full" style:background="rgb({stateFormTypography.baseFontColor})"></div>
					{/if}
				</div>
				<select class="select" bind:value={stateFormTypography.baseFontColor}>
					<option value="0 0 0">Black</option>
					<option value="255 255 255">White</option>
					{#each colorNames as colorName}
						<optgroup label={colorName}>
							{#each colorShades as shade}
								<option value="var(--color-{colorName}-{shade})">{colorName}-{shade}</option>
							{/each}
						</optgroup>
					{/each}
				</select>
			</div>
		</label>
		<label class="label">
			<span class="label-text">Dark Mode</span>
			<div class="input-group grid-cols-[auto_1fr]">
				<div class="input-group-cell">
					{#if stateFormTypography.headingFontColor !== 'inherit'}
						<div class="size-5 rounded-full" style:background="rgb({stateFormTypography.baseFontColorDark})"></div>
					{/if}
				</div>
				<select class="select" bind:value={stateFormTypography.baseFontColorDark}>
					<option value="0 0 0">Black</option>
					<option value="255 255 255">White</option>
					{#each colorNames as colorName}
						<optgroup label={colorName}>
							{#each colorShades as shade}
								<option value="var(--color-{colorName}-{shade})">{colorName}-{shade}</option>
							{/each}
						</optgroup>
					{/each}
				</select>
			</div>
		</label>
		<label class="label col-span-2">
			<span class="label-text">Font Family</span>
			<!-- <input type="text" class="input" bind:value={stateFormTypography.baseFontFamily} /> -->
			<select class="select" bind:value={stateFormTypography.baseFontFamily}>
				<option value="inherit">Inherit</option>
				{#each fontFamilies as fontFamily}
					<option value={fontFamily}>{fontFamily}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Size</span>
			<select class="select" bind:value={stateFormTypography.baseFontsize}>
				{#each fontSizes as fontSize}
					<option value={fontSize}>{fontSize}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Line Height</span>
			<select class="select" bind:value={stateFormTypography.baseLineHeight}>
				{#each lineHeights as lineHeights}
					<option value={lineHeights}>{lineHeights}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Weight</span>
			<select class="select" bind:value={stateFormTypography.baseFontWeight}>
				{#each fontWeights as fontWeight}
					<option value={fontWeight}>{fontWeight}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Style</span>
			<select class="select" bind:value={stateFormTypography.baseFontStyle}>
				{#each fontStyles as fontStyle}
					<option value={fontStyle}>{fontStyle}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Letter Spacing</span>
			<select class="select" bind:value={stateFormTypography.baseLetterSpacing}>
				{#each letterSpacings as letterSpacing}
					<option value={letterSpacing}>{letterSpacing}</option>
				{/each}
			</select>
		</label>
	</div>

	<!-- --- -->
	<hr class="hr" />

	<!-- Headings -->
	<header>
		<h3 class="h3">Headings</h3>
		<p class="opacity-60">Define styles specific to page headings.</p>
	</header>
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Base Color</span>
			<div class="input-group grid-cols-[auto_1fr]">
				<div class="input-group-cell">
					{#if stateFormTypography.headingFontColor !== 'inherit'}
						<div class="size-5 rounded-full" style:background="rgb({stateFormTypography.headingFontColor})"></div>
					{/if}
				</div>
				<select class="select" bind:value={stateFormTypography.headingFontColor}>
					<option value="inherit">Inherit</option>
					<option value="0 0 0">Black</option>
					<option value="255 255 255">White</option>
					{#each colorNames as colorName}
						<optgroup label={colorName}>
							{#each colorShades as shade}
								<option value="var(--color-{colorName}-{shade})">{colorName}-{shade}</option>
							{/each}
						</optgroup>
					{/each}
				</select>
			</div>
		</label>
		<label class="label">
			<span class="label-text">Dark Mode</span>
			<div class="input-group grid-cols-[auto_1fr]">
				<div class="input-group-cell">
					{#if stateFormTypography.headingFontColor !== 'inherit'}
						<div class="size-5 rounded-full" style:background="rgb({stateFormTypography.headingFontColorDark})"></div>
					{/if}
				</div>
				<select class="select" bind:value={stateFormTypography.headingFontColorDark}>
					<option value="inherit">Inherit</option>
					<option value="0 0 0">Black</option>
					<option value="255 255 255">White</option>
					{#each colorNames as colorName}
						<optgroup label={colorName}>
							{#each colorShades as shade}
								<option value="var(--color-{colorName}-{shade})">{colorName}-{shade}</option>
							{/each}
						</optgroup>
					{/each}
				</select>
			</div>
		</label>
		<label class="label col-span-2">
			<span class="label-text">Font Family</span>
			<!-- <input type="text" class="input" bind:value={stateFormTypography.headingFontFamily} /> -->
			<select class="select" bind:value={stateFormTypography.headingFontFamily}>
				<option value="inherit">Inherit</option>
				{#each fontFamilies as fontFamily}
					<option value={fontFamily}>{fontFamily}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Weight</span>
			<select class="select" bind:value={stateFormTypography.headingFontWeight}>
				{#each fontWeights as fontWeight}
					<option value={fontWeight}>{fontWeight}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Style</span>
			<select class="select" bind:value={stateFormTypography.headingFontStyle}>
				{#each fontStyles as fontStyle}
					<option value={fontStyle}>{fontStyle}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Letter Spacing</span>
			<select class="select" bind:value={stateFormTypography.headingLetterSpacing}>
				{#each letterSpacings as letterSpacing}
					<option value={letterSpacing}>{letterSpacing}</option>
				{/each}
			</select>
		</label>
	</div>

	<!-- --- -->
	<hr class="hr" />

	<!-- Anchors -->
	<header>
		<h3 class="h3">Anchors</h3>
		<p class="opacity-60">Define styles specific to anchor links.</p>
	</header>
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Base Color</span>
			<div class="input-group grid-cols-[auto_1fr]">
				<div class="input-group-cell">
					{#if stateFormTypography.anchorFontColor !== 'inherit'}
						<div class="size-5 rounded-full" style:background="rgb({stateFormTypography.anchorFontColor})"></div>
					{/if}
				</div>
				<select class="select" bind:value={stateFormTypography.anchorFontColor}>
					<option value="0 0 0">Black</option>
					<option value="255 255 255">White</option>
					{#each colorNames as colorName}
						<optgroup label={colorName}>
							{#each colorShades as shade}
								<option value="var(--color-{colorName}-{shade})">{colorName}-{shade}</option>
							{/each}
						</optgroup>
					{/each}
				</select>
			</div>
		</label>
		<label class="label">
			<span class="label-text">Dark Mode</span>
			<div class="input-group grid-cols-[auto_1fr]">
				<div class="input-group-cell">
					{#if stateFormTypography.anchorFontColorDark !== 'inherit'}
						<div class="size-5 rounded-full" style:background="rgb({stateFormTypography.anchorFontColorDark})"></div>
					{/if}
				</div>
				<select class="select" bind:value={stateFormTypography.anchorFontColorDark}>
					<option value="0 0 0">Black</option>
					<option value="255 255 255">White</option>
					{#each colorNames as colorName}
						<optgroup label={colorName}>
							{#each colorShades as shade}
								<option value="var(--color-{colorName}-{shade})">{colorName}-{shade}</option>
							{/each}
						</optgroup>
					{/each}
				</select>
			</div>
		</label>
		<label class="label col-span-2">
			<span class="label-text">Font Family</span>
			<!-- <input type="text" class="input" bind:value={stateFormTypography.anchorFontFamily} /> -->
			<select class="select" bind:value={stateFormTypography.anchorFontFamily}>
				<option value="inherit">Inherit</option>
				{#each fontFamilies as fontFamily}
					<option value={fontFamily}>{fontFamily}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Size</span>
			<select class="select" bind:value={stateFormTypography.anchorFontsize}>
				{#each fontSizes as fontSize}
					<option value={fontSize}>{fontSize}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Line Height</span>
			<select class="select" bind:value={stateFormTypography.anchorLineHeight}>
				{#each lineHeights as lineHeights}
					<option value={lineHeights}>{lineHeights}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Weight</span>
			<select class="select" bind:value={stateFormTypography.anchorFontWeight}>
				{#each fontWeights as fontWeight}
					<option value={fontWeight}>{fontWeight}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Style</span>
			<select class="select" bind:value={stateFormTypography.anchorFontStyle}>
				{#each fontStyles as fontStyle}
					<option value={fontStyle}>{fontStyle}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Letter Spacing</span>
			<select class="select" bind:value={stateFormTypography.anchorLetterSpacing}>
				{#each letterSpacings as letterSpacing}
					<option value={letterSpacing}>{letterSpacing}</option>
				{/each}
			</select>
		</label>
		<!-- --- -->
		<label class="label">
			<span class="label-text">Decoration</span>
			<select class="select" bind:value={stateFormTypography.anchorTextDecoration}>
				{#each textDecorations as textDecoration}
					<option value={textDecoration}>{textDecoration}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Hover</span>
			<select class="select" bind:value={stateFormTypography.anchorTextDecorationHover}>
				{#each textDecorations as textDecoration}
					<option value={textDecoration}>{textDecoration}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Active</span>
			<select class="select" bind:value={stateFormTypography.anchorTextDecorationActive}>
				{#each textDecorations as textDecoration}
					<option value={textDecoration}>{textDecoration}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Focus</span>
			<select class="select" bind:value={stateFormTypography.anchorTextDecorationFocus}>
				{#each textDecorations as textDecoration}
					<option value={textDecoration}>{textDecoration}</option>
				{/each}
			</select>
		</label>
	</div>
</fieldset>
