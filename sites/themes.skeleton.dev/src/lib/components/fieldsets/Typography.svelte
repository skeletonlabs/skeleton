<script lang="ts">
	import {
		colorNames,
		colorShades,
		fontSizes,
		fontStyles,
		fontWeights,
		letterSpacings,
		lineHeights,
		textDecorations,
		typographicScales
	} from '$lib/constants';
	import { storeTypography } from '$lib/stores.svelte';

	let factorLabel = $derived(typographicScales[storeTypography.typeScaleFactor as number].label);
	let factorValue = $derived(typographicScales[storeTypography.typeScaleFactor as number].value);
</script>

<fieldset class="space-y-4 md:space-y-8">
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
			bind:value={storeTypography.typeScaleFactor}
			min="0"
			max="8"
			step="1"
		/>
		<div class="rounded p-4 text-center preset-filled-surface-200-800">{factorLabel}</div>
	</label>
	<!-- --- -->
	<hr class="hr" />
	<!-- Base -->
	<h2 class="h4">Base</h2>
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Base Color</span>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<div class="size-10 rounded" style:background="rgb({storeTypography.baseFontColor})"></div>
				<select class="select" bind:value={storeTypography.baseFontColor}>
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
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<div class="size-10 rounded" style:background="rgb({storeTypography.baseFontColorDark})"></div>
				<select class="select" bind:value={storeTypography.baseFontColorDark}>
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
			<input type="text" class="input" bind:value={storeTypography.baseFontFamily} />
		</label>
		<label class="label">
			<span class="label-text">Font Size</span>
			<select class="select" bind:value={storeTypography.baseFontsize}>
				{#each fontSizes as fontSize}
					<option value={fontSize}>{fontSize}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Line Height</span>
			<select class="select" bind:value={storeTypography.baseLineHeight}>
				{#each lineHeights as lineHeights}
					<option value={lineHeights}>{lineHeights}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Weight</span>
			<select class="select" bind:value={storeTypography.baseFontWeight}>
				{#each fontWeights as fontWeight}
					<option value={fontWeight}>{fontWeight}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Style</span>
			<select class="select" bind:value={storeTypography.baseFontStyle}>
				{#each fontStyles as fontStyle}
					<option value={fontStyle}>{fontStyle}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Letter Spacing</span>
			<select class="select" bind:value={storeTypography.baseLetterSpacing}>
				{#each letterSpacings as letterSpacing}
					<option value={letterSpacing}>{letterSpacing}</option>
				{/each}
			</select>
		</label>
	</div>
	<!-- --- -->
	<hr class="hr" />
	<!-- Headings -->
	<h2 class="h4">Headings</h2>
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Base Color</span>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				{#if storeTypography.headingFontColor !== 'inherit'}
					<div class="size-10 rounded" style:background="rgb({storeTypography.headingFontColor})"></div>
				{/if}
				<select class="select" bind:value={storeTypography.headingFontColor}>
					{#each colorNames as colorName}
						<option value="inherit">Inherit</option>
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
			<div class="grid grid-cols-[auto_1fr] gap-2">
				{#if storeTypography.headingFontColorDark !== 'inherit'}
					<div class="size-10 rounded" style:background="rgb({storeTypography.headingFontColorDark})"></div>
				{/if}
				<select class="select" bind:value={storeTypography.headingFontColorDark}>
					<option value="inherit">Inherit</option>
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
			<input type="text" class="input" bind:value={storeTypography.headingFontFamily} />
		</label>
		<label class="label">
			<span class="label-text">Font Weight</span>
			<select class="select" bind:value={storeTypography.headingFontWeight}>
				{#each fontWeights as fontWeight}
					<option value={fontWeight}>{fontWeight}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Style</span>
			<select class="select" bind:value={storeTypography.headingFontStyle}>
				{#each fontStyles as fontStyle}
					<option value={fontStyle}>{fontStyle}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Letter Spacing</span>
			<select class="select" bind:value={storeTypography.headingLetterSpacing}>
				{#each letterSpacings as letterSpacing}
					<option value={letterSpacing}>{letterSpacing}</option>
				{/each}
			</select>
		</label>
	</div>
	<!-- --- -->
	<hr class="hr" />
	<!-- Anchors -->
	<h2 class="h4">Anchors</h2>
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Base Color</span>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				{#if storeTypography.anchorFontColor !== 'inherit'}
					<div class="size-10 rounded" style:background="rgb({storeTypography.anchorFontColor})"></div>
				{/if}
				<select class="select" bind:value={storeTypography.anchorFontColor}>
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
			<div class="grid grid-cols-[auto_1fr] gap-2">
				{#if storeTypography.anchorFontColorDark !== 'inherit'}
					<div class="size-10 rounded" style:background="rgb({storeTypography.anchorFontColorDark})"></div>
				{/if}
				<select class="select" bind:value={storeTypography.anchorFontColorDark}>
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
			<input type="text" class="input" bind:value={storeTypography.anchorFontFamily} />
		</label>
		<label class="label">
			<span class="label-text">Font Size</span>
			<select class="select" bind:value={storeTypography.anchorFontsize}>
				{#each fontSizes as fontSize}
					<option value={fontSize}>{fontSize}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Line Height</span>
			<select class="select" bind:value={storeTypography.anchorLineHeight}>
				{#each lineHeights as lineHeights}
					<option value={lineHeights}>{lineHeights}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Weight</span>
			<select class="select" bind:value={storeTypography.anchorFontWeight}>
				{#each fontWeights as fontWeight}
					<option value={fontWeight}>{fontWeight}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Style</span>
			<select class="select" bind:value={storeTypography.anchorFontStyle}>
				{#each fontStyles as fontStyle}
					<option value={fontStyle}>{fontStyle}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Letter Spacing</span>
			<select class="select" bind:value={storeTypography.anchorLetterSpacing}>
				{#each letterSpacings as letterSpacing}
					<option value={letterSpacing}>{letterSpacing}</option>
				{/each}
			</select>
		</label>
		<!-- --- -->
		<label class="label">
			<span class="label-text">Decoration</span>
			<select class="select" bind:value={storeTypography.anchorTextDecoration}>
				{#each textDecorations as textDecoration}
					<option value={textDecoration}>{textDecoration}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Hover</span>
			<select class="select" bind:value={storeTypography.anchorTextDecorationHover}>
				{#each textDecorations as textDecoration}
					<option value={textDecoration}>{textDecoration}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Active</span>
			<select class="select" bind:value={storeTypography.anchorTextDecorationActive}>
				{#each textDecorations as textDecoration}
					<option value={textDecoration}>{textDecoration}</option>
				{/each}
			</select>
		</label>
		<label class="label">
			<span class="label-text">Focus</span>
			<select class="select" bind:value={storeTypography.anchorTextDecorationFocus}>
				{#each textDecorations as textDecoration}
					<option value={textDecoration}>{textDecoration}</option>
				{/each}
			</select>
		</label>
	</div>
</fieldset>
