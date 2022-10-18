<script lang="ts">
	import { onDestroy } from 'svelte';

	import Swatches from './Swatches.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Helpers
	import { semanticNames, tailwindDefaultColors } from '$lib/tailwind/colors';
	import { storeMode, storePreview, storeTailwindForm, storeTailwindPalette, storeHexForm, storeHexPalette, storeFormData } from '$docs/DocsThemer/stores';
	import { resetSettings, onTailwindSelect, onRandomize, onHexInput, genCssColorStrings } from '$docs/DocsThemer/utils';
	import { fonts } from '$docs/DocsThemer/fonts';

	// Local
	let showCode: boolean = false;

	// Reactive ---

	// Set the current palette based on Tailwind/Hex mode
	$: currentPalette = $storeMode === true ? $storeTailwindPalette : $storeHexPalette;
	// CSS
	$: themeCSS = `
:root {
	/* =~= Theme Styles =~= */
	--theme-border-base: ${$storeFormData.borderBase};
	--theme-font-family-heading: ${fonts[$storeFormData.fontFamilyHeading]};
	--theme-font-family-base: ${fonts[$storeFormData.fontFamilyBase]};
	--theme-font-color-base: ${$storeFormData.fontColorBase};
	--theme-font-color-dark: ${$storeFormData.fontColorDark};
	--theme-rounded-base: ${$storeFormData.roundedBase};
	--theme-rounded-container: ${$storeFormData.roundedContainer};
	/* =~= Theme Colors | ${$storeMode ? 'Tailwind' : 'Hex'} =~= */
	/* ${currentPalette.primary.label} | ${currentPalette.primary.shades['500'].hex} */
	${genCssColorStrings('primary', currentPalette.primary)}
	/* ${currentPalette.accent.label} | ${currentPalette.accent.shades['500'].hex} */
	${genCssColorStrings('accent', currentPalette.accent)}
	/* ${currentPalette.ternary.label} | ${currentPalette.ternary.shades['500'].hex} */
	${genCssColorStrings('ternary', currentPalette.ternary)}
	/* ${currentPalette.warning.label} | ${currentPalette.warning.shades['500'].hex} */
	${genCssColorStrings('warning', currentPalette.warning)}
	/* ${currentPalette.surface.label} | ${currentPalette.surface.shades['500'].hex} */
	${genCssColorStrings('surface', currentPalette.surface)}
}`.trim();
	$: headStyleCSS = $storePreview ? `\<style\>${themeCSS}\</style\>` : '';
</script>

<svelte:head>
	<!-- Generated Theme CSS -->
	{@html headStyleCSS}
</svelte:head>

<!-- prettier-ignore -->
<div class="themer space-y-4">

	<!-- Color Selection -->
	<div class="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-2">
		<!-- Left: Form -->
		<div class="card card-body flex flex-col justify-center space-y-4">
			<!-- Header -->
			<header class="flex justify-between items-center">
				<RadioGroup selected={storeMode}>
					<RadioItem value={true}>Tailwind</RadioItem>
					<RadioItem value={false}>Hex</RadioItem>
				</RadioGroup>
				<button class="btn btn-filled-accent" on:click={onRandomize} disabled={!$storeMode}>Randomize</button>
			</header>
			<hr />
			<!-- Color Inputs -->
			{#each semanticNames as colorKey}
				<div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-4">
					<label class="w-full">
						<span class="capitalize">{colorKey}</span>
						{#if $storeMode}
							<select class="capitalize" bind:value={$storeTailwindForm[colorKey]} on:change={()=>{onTailwindSelect()}}>
								{#each tailwindDefaultColors as c}<option value={c.label}>{c.label}</option>{/each}
							</select>
						{:else}
							<input
								type="text" placeholder="#FFFFFF" bind:value={$storeHexForm[colorKey]}
								on:input={() => { onHexInput(colorKey, $storeHexForm[colorKey]); }}
							/>
						{/if}
					</label>
					<Swatches palette={currentPalette[colorKey].shades} />
				</div>
			{/each}
		</div>
		<!-- Right: Options -->
		<div class="card card-body grid grid-cols-2 gap-4">
			<!-- LightSwitch -->
			<div class="col-span-2 flex justify-between items-center space-x-2">
				<strong>Settings</strong>
				<LightSwitch />
			</div>
			<hr class="col-span-2" />
			<!-- --theme-font-family-heading -->
			<label>
				<span>Font Family <small>(headings)</small></span>
				<select name="background" id="background" bind:value={$storeFormData.fontFamilyHeading}>
					<option value="sans">Sans Serif</option>
					<option value="serif">Serif</option>
					<option value="mono">Monospace</option>
					<option value="system">System UI</option>
				</select>
			</label>
			<!-- --theme-font-family-base -->
			<label>
				<span>Font Family <small>(base)</small></span>
				<select name="background" id="background" bind:value={$storeFormData.fontFamilyBase}>
					<option value="sans">Sans Serif</option>
					<option value="serif">Serif</option>
					<option value="mono">Monospace</option>
					<option value="system">System UI</option>
				</select>
			</label>
			<!-- --theme-font-color-base -->
			<label>
				<span>Font Color <small>(light mode)</small></span>
				<select name="background" id="background" bind:value={$storeFormData.fontColorBase}>
					<!-- Black -->
					<option value="0 0 0">Black</option>
					<!-- Surface -->
					<option value="var(--color-surface-500)">Surface 500</option>
					<option value="var(--color-surface-600)">Surface 600</option>
					<option value="var(--color-surface-700)">Surface 700</option>
					<option value="var(--color-surface-800)">Surface 800</option>
					<option value="var(--color-surface-900)">Surface 900</option>
					<!-- Primary -->
					<option value="var(--color-primary-500)">Primary 500</option>
					<option value="var(--color-primary-600)">Primary 600</option>
					<option value="var(--color-primary-700)">Primary 700</option>
					<option value="var(--color-primary-800)">Primary 800</option>
					<option value="var(--color-primary-900)">Primary 900</option>
					<!-- Accent -->
					<option value="var(--color-accent-500)">Accent 500</option>
					<option value="var(--color-accent-600)">Accent 600</option>
					<option value="var(--color-accent-700)">Accent 700</option>
					<option value="var(--color-accent-800)">Accent 800</option>
					<option value="var(--color-accent-900)">Accent 900</option>
				</select>
			</label>
			<!-- --theme-font-color-dark -->
			<label>
				<span>Font Color <small>(dark mode)</small></span>
				<select name="background" id="background" bind:value={$storeFormData.fontColorDark}>
					<!-- White -->
					<option value="255 255 255">White</option>
					<!-- Surface -->
					<option value="var(--color-surface-400)">Surface 400</option>
					<option value="var(--color-surface-300)">Surface 300</option>
					<option value="var(--color-surface-200)">Surface 200</option>
					<option value="var(--color-surface-100)">Surface 100</option>
					<option value="var(--color-surface-50)">Surface 50</option>
					<!-- Primary -->
					<option value="var(--color-primary-400)">Primary 400</option>
					<option value="var(--color-primary-300)">Primary 300</option>
					<option value="var(--color-primary-200)">Primary 200</option>
					<option value="var(--color-primary-100)">Primary 100</option>
					<option value="var(--color-primary-50)">Primary 50</option>
					<!-- Accent -->
					<option value="var(--color-accent-400)">Accent 400</option>
					<option value="var(--color-accent-300)">Accent 300</option>
					<option value="var(--color-accent-200)">Accent 200</option>
					<option value="var(--color-accent-100)">Accent 100</option>
					<option value="var(--color-accent-50)">Accent 50</option>
				</select>
			</label>
			<!-- --theme-rounded-base -->
			<label>
				<span>Rounded</span>
				<select name="background" id="background" bind:value={$storeFormData.roundedBase}>
					<option value="0px">0px</option>
					<option value="2px">2px</option>
					<option value="4px">4px</option>
					<option value="6px">6px</option>
					<option value="8px">8px</option>
					<option value="12px">12px</option>
					<option value="16px">16px</option>
					<option value="24px">24px</option>
					<option value="9999px">9999px</option>
				</select>
			</label>
			<!-- --theme-rounded-container -->
			<label>
				<span>Rounded <small>(container)</small></span>
				<select name="background" id="background" bind:value={$storeFormData.roundedContainer}>
					<option value="0px">0px</option>
					<option value="2px">2px</option>
					<option value="4px">4px</option>
					<option value="6px">6px</option>
					<option value="8px">8px</option>
					<option value="12px">12px</option>
					<option value="16px">16px</option>
					<option value="24px">24px</option>
				</select>
			</label>
			<!-- --theme-border-base -->
			<label>
				<span>Border</span>
				<select name="background" id="background" bind:value={$storeFormData.borderBase}>
					<option value="0px">0px</option>
					<option value="1px">1px</option>
					<option value="2px">2px</option>
					<option value="4px">4px</option>
				</select>
			</label>
			<hr class="col-span-2" />
			<!-- Preview -->
			<div class="col-span-2 place-self-center">
				<SlideToggle bind:checked={$storePreview}>Live Preview</SlideToggle>
			</div>
			<!-- Code Toggle -->
			<button class="col-span-2 btn btn-filled-primary" on:click={()=>{showCode=!showCode}}>
				{!showCode ? 'Show' : 'Hide'} Theme CSS <span class="text-xs ml-4">{@html showCode ? '&#9650;' : '&#9660;'}</span>
			</button>
		</div>
	</div>

	<!-- Preview Enabled Alert -->
	<Alert visible={$storePreview} class="animate-pulse hover:animate-none">
		<svelte:fragment slot="title">Live Preview Enabled</svelte:fragment>
		<span>While the preview is active you can browse the entire site. Don't worry, your settings will not be lost. When you're done, tap the reset button to return to your default theme.</span>
		<svelte:fragment slot="trail">
			<button class="btn btn-filled" on:click={resetSettings}>Reset Theme</button>
		</svelte:fragment>
	</Alert>


	<!-- Code -->
	{#if showCode}<CodeBlock language="css" code={themeCSS} />{/if}
</div>
