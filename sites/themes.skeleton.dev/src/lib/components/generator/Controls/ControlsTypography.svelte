<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	// Constants
	import * as constants from '$lib/constants/constants';
	// State
	import { settingsTypography } from '$lib/state/state.svelte';

	// Local
	let category: 'base' | 'headings' | 'anchors' = $state('base');
</script>

<div class="space-y-4">
	<p class="opacity-60">Define all typographic settings for your theme.</p>
	<!-- Tabs -->
	<Tabs bind:value={category as string} fluid>
		{#snippet list()}
			<Tabs.Control value="base">Base</Tabs.Control>
			<Tabs.Control value="headings">Headings</Tabs.Control>
			<Tabs.Control value="anchors">Anchors</Tabs.Control>
		{/snippet}
		{#snippet content()}
			<!-- Panel: Base -->
			<Tabs.Panel value="base">
				<div class="grid grid-cols-2 gap-4">
					<!-- --base-font-color -->
					<label class="label">
						<span class="label-text">Light Mode Font Color</span>
						<select class="select" name="--base-font-color" bind:value={settingsTypography['--base-font-color']}>
							{#each constants.colorNames as colorName}
								<optgroup label={colorName}>
									{#each constants.colorShades as colorShade}
										<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
									{/each}
								</optgroup>
							{/each}
						</select>
					</label>
					<!-- --base-font-color-dark -->
					<label class="label">
						<span class="label-text">Dark Mode Font Color</span>
						<select class="select" name="--base-font-color-dark" bind:value={settingsTypography['--base-font-color-dark']}>
							{#each constants.colorNames as colorName}
								<optgroup label={colorName}>
									{#each constants.colorShades as colorShade}
										<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
									{/each}
								</optgroup>
							{/each}
						</select>
					</label>
					<!-- --base-font-family -->
					<label class="label col-span-2">
						<span class="label-text">Font Family</span>
						<select class="select" name="--base-font-family" bind:value={settingsTypography['--base-font-family']}>
							= {#each constants.fontFamilies as fontFamily}
								<option value={fontFamily}>{fontFamily}</option>
							{/each}
						</select>
					</label>
					<!-- --base-font-size -->
					<label class="label">
						<span class="label-text">Font Size</span>
						<select class="select" name="--base-font-size" bind:value={settingsTypography['--base-font-size']}>
							{#each constants.fontSizes as fontSize}
								<option value={fontSize}>{fontSize}</option>
							{/each}
						</select>
					</label>
					<!-- --base-line-height -->
					<label class="label">
						<span class="label-text">Line Height</span>
						<select class="select" name="--base-line-height" bind:value={settingsTypography['--base-line-height']}>
							{#each constants.lineHeights as lineHeight}
								<option value={lineHeight}>{lineHeight}</option>
							{/each}
						</select>
					</label>
					<!-- --base-font-weight -->
					<label class="label">
						<span class="label-text">Font Weight</span>
						<select class="select" name="--base-font-weight" bind:value={settingsTypography['--base-font-weight']}>
							{#each constants.fontWeights as fontWeight}
								<option value={fontWeight}>{fontWeight}</option>
							{/each}
						</select>
					</label>
					<!-- --base-font-style -->
					<label class="label">
						<span class="label-text">Font Style</span>
						<select class="select" name="--base-font-style" bind:value={settingsTypography['--base-font-style']}>
							{#each constants.fontStyles as fontStyle}
								<option value={fontStyle}>{fontStyle}</option>
							{/each}
						</select>
					</label>
					<!-- --base-letter-spacing -->
					<label class="label">
						<span class="label-text">Letter Spacing</span>
						<select class="select" name="--base-letter-spacing" bind:value={settingsTypography['--base-letter-spacing']}>
							{#each constants.letterSpacings as letterSpacing}
								<option value={letterSpacing}>{letterSpacing}</option>
							{/each}
						</select>
					</label>
				</div>
			</Tabs.Panel>

			<!-- Panel: Headings -->
			<Tabs.Panel value="headings">
				<div class="grid grid-cols-2 gap-4">
					<!-- --heading-font-color -->
					<label class="label">
						<span class="label-text">Light Mode Font Color</span>
						<select class="select" name="--heading-font-color" bind:value={settingsTypography['--heading-font-color']}>
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
					<!-- --heading-font-color-dark -->
					<label class="label">
						<span class="label-text">Dark Mode Font Color</span>
						<select class="select" name="--heading-font-color-dark" bind:value={settingsTypography['--heading-font-color-dark']}>
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
					<!-- --heading-font-family -->
					<label class="label col-span-2">
						<span class="label-text">Font Family</span>
						<select class="select" name="--heading-font-family" bind:value={settingsTypography['--heading-font-family']}>
							= {#each constants.fontFamilies as fontFamily}
								<option value={fontFamily}>{fontFamily}</option>
							{/each}
						</select>
					</label>
					<!-- --heading-font-weight -->
					<label class="label">
						<span class="label-text">Font Weight</span>
						<select class="select" name="--heading-font-weight" bind:value={settingsTypography['--heading-font-weight']}>
							{#each constants.fontWeights as fontWeight}
								<option value={fontWeight}>{fontWeight}</option>
							{/each}
						</select>
					</label>
					<!-- --heading-font-style -->
					<label class="label">
						<span class="label-text">Font Style</span>
						<select class="select" name="--heading-font-style" bind:value={settingsTypography['--heading-font-style']}>
							{#each constants.fontStyles as fontStyle}
								<option value={fontStyle}>{fontStyle}</option>
							{/each}
						</select>
					</label>
					<!-- --heading-letter-spacing -->
					<label class="label">
						<span class="label-text">Letter Spacing</span>
						<select class="select" name="--heading-letter-spacing" bind:value={settingsTypography['--heading-letter-spacing']}>
							{#each constants.letterSpacings as letterSpacing}
								<option value={letterSpacing}>{letterSpacing}</option>
							{/each}
						</select>
					</label>
				</div>
			</Tabs.Panel>

			<!-- Panel: Anchors -->
			<Tabs.Panel value="anchors">
				<div class="grid grid-cols-2 gap-4">
					<!-- --anchor-font-color -->
					<label class="label">
						<span class="label-text">Light Mode Font Color</span>
						<select class="select" name="--anchor-font-color" bind:value={settingsTypography['--anchor-font-color']}>
							{#each constants.colorNames as colorName}
								<optgroup label={colorName}>
									{#each constants.colorShades as colorShade}
										<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
									{/each}
								</optgroup>
							{/each}
						</select>
					</label>
					<!-- --anchor-font-color-dark -->
					<label class="label">
						<span class="label-text">Dark Mode Font Color</span>
						<select class="select" name="--anchor-font-color-dark" bind:value={settingsTypography['--anchor-font-color-dark']}>
							{#each constants.colorNames as colorName}
								<optgroup label={colorName}>
									{#each constants.colorShades as colorShade}
										<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
									{/each}
								</optgroup>
							{/each}
						</select>
					</label>
					<!-- --anchor-font-family -->
					<label class="label col-span-2">
						<span class="label-text">Font Family</span>
						<select class="select" name="--anchor-font-family" bind:value={settingsTypography['--anchor-font-family']}>
							= {#each constants.fontFamilies as fontFamily}
								<option value={fontFamily}>{fontFamily}</option>
							{/each}
						</select>
					</label>
					<!-- --anchor-font-size -->
					<label class="label">
						<span class="label-text">Font Size</span>
						<select class="select" name="--anchor-font-size" bind:value={settingsTypography['--anchor-font-size']}>
							{#each constants.fontSizes as fontSize}
								<option value={fontSize}>{fontSize}</option>
							{/each}
						</select>
					</label>
					<!-- --anchor-line-height -->
					<label class="label">
						<span class="label-text">Line Height</span>
						<select class="select" name="--anchor-line-height" bind:value={settingsTypography['--anchor-line-height']}>
							{#each constants.lineHeights as lineHeight}
								<option value={lineHeight}>{lineHeight}</option>
							{/each}
						</select>
					</label>
					<!-- --anchor-font-weight -->
					<label class="label">
						<span class="label-text">Font Weight</span>
						<select class="select" name="--anchor-font-weight" bind:value={settingsTypography['--anchor-font-weight']}>
							{#each constants.fontWeights as fontWeight}
								<option value={fontWeight}>{fontWeight}</option>
							{/each}
						</select>
					</label>
					<!-- --anchor-font-style -->
					<label class="label">
						<span class="label-text">Font Style</span>
						<select class="select" name="--anchor-font-style" bind:value={settingsTypography['--anchor-font-style']}>
							{#each constants.fontStyles as fontStyle}
								<option value={fontStyle}>{fontStyle}</option>
							{/each}
						</select>
					</label>
					<!-- --anchor-letter-spacing -->
					<label class="label">
						<span class="label-text">Letter Spacing</span>
						<select class="select" name="--anchor-letter-spacing" bind:value={settingsTypography['--anchor-letter-spacing']}>
							{#each constants.letterSpacings as letterSpacing}
								<option value={letterSpacing}>{letterSpacing}</option>
							{/each}
						</select>
					</label>
					<!-- --anchor-text-decoration -->
					<label class="label">
						<span class="label-text">Decoration</span>
						<select class="select" name="--anchor-text-decoration" bind:value={settingsTypography['--anchor-text-decoration']}>
							{#each constants.textDecorations as textDecoration}
								<option value={textDecoration}>{textDecoration}</option>
							{/each}
						</select>
					</label>
					<!-- --anchor-text-decoration-hover -->
					<label class="label">
						<span class="label-text">Hover</span>
						<select class="select" name="--anchor-text-decoration-hover" bind:value={settingsTypography['--anchor-text-decoration-hover']}>
							{#each constants.textDecorations as textDecoration}
								<option value={textDecoration}>{textDecoration}</option>
							{/each}
						</select>
					</label>
					<!-- --anchor-text-decoration-active -->
					<label class="label">
						<span class="label-text">Active</span>
						<select class="select" name="--anchor-text-decoration-hover" bind:value={settingsTypography['--anchor-text-decoration-hover']}>
							{#each constants.textDecorations as textDecoration}
								<option value={textDecoration}>{textDecoration}</option>
							{/each}
						</select>
					</label>
					<!-- --anchor-text-decoration-focus -->
					<label class="label">
						<span class="label-text">Active</span>
						<select class="select" name="--anchor-text-decoration-focus" bind:value={settingsTypography['--anchor-text-decoration-focus']}>
							{#each constants.textDecorations as textDecoration}
								<option value={textDecoration}>{textDecoration}</option>
							{/each}
						</select>
					</label>
				</div>
			</Tabs.Panel>
		{/snippet}
	</Tabs>
</div>
