<script lang="ts">
	import { browser } from '$app/environment';
	import type { Writable } from 'svelte/store';

	import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

	// Components
	import Swatches from './Swatches.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Helpers
	import { getTailwindColor, randomTailwindColor, genHexPalette } from './helpers';
	import { tailwindDefaultColors } from '$lib/tailwind/colors';

	// Local
	const regexValidHexCode = new RegExp(/^#[0-9a-f]{6}$/i);
	const formData: any = {
		colors: '',
		borderBase: '1px',
		fontFamily: 'sans',
		fontColorBase: 'var(--color-surface-900)',
		fontColorDark: 'var(--color-surface-50)',
		roundedBase: '4px',
		roundedContainer: '8px'
	};

	// Font Families
	const fontFamilyLists: any = {
		sans: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
		mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
		helvetica: `Helvetica, system-ui`
	};

	// Stores
	let storeMode: Writable<boolean> = localStorageStore('storeMode', true); // T: Tailwind | F: Custom
	let storePreview: Writable<boolean> = localStorageStore('storePreview', false);
	let storeTailwindForm: Writable<any> = localStorageStore('storeTailwindForm', {
		primary: 'emerald',
		accent: 'indigo',
		ternary: 'yellow',
		warning: 'rose',
		surface: 'gray'
	});
	let storeTailwindPalette: Writable<any> = localStorageStore('storeTailwindPalette', {
		primary: getTailwindColor($storeTailwindForm.primary),
		accent: getTailwindColor($storeTailwindForm.accent),
		ternary: getTailwindColor($storeTailwindForm.ternary),
		warning: getTailwindColor($storeTailwindForm.warning),
		surface: getTailwindColor($storeTailwindForm.surface)
	});
	let storeHexForm: Writable<any> = localStorageStore('storeHexForm', {
		primary: getTailwindColor('emerald').shades['500'].hex,
		accent: getTailwindColor('indigo').shades['500'].hex,
		ternary: getTailwindColor('yellow').shades['500'].hex,
		warning: getTailwindColor('rose').shades['500'].hex,
		surface: getTailwindColor('gray').shades['500'].hex
	});
	let storeHexPalette: Writable<any> = localStorageStore('storeHexPalette', {
		primary: genHexPalette('primary', $storeHexForm.primary),
		accent: genHexPalette('accent', $storeHexForm.accent),
		ternary: genHexPalette('ternary', $storeHexForm.ternary),
		warning: genHexPalette('warning', $storeHexForm.warning),
		surface: genHexPalette('surface', $storeHexForm.surface)
	});

	// Local Storage

	function resetSettings(): void {
		if (confirm('Clear all theme settings and restore the site back to the default settings?')) {
			// Clear Local Storage Values
			localStorage.removeItem('storeMode');
			localStorage.removeItem('storePreview');
			localStorage.removeItem('storeTailwindForm');
			localStorage.removeItem('storeTailwindPalette');
			localStorage.removeItem('storeHexForm');
			localStorage.removeItem('storeHexPalette');
			// Reload Window
			location.reload();
		}
	}

	// Functions ---

	// Tailwind: on selection change
	function onTailwindSelect(): void {
		storeTailwindPalette.set({
			primary: getTailwindColor($storeTailwindForm.primary),
			accent: getTailwindColor($storeTailwindForm.accent),
			ternary: getTailwindColor($storeTailwindForm.ternary),
			warning: getTailwindColor($storeTailwindForm.warning),
			surface: getTailwindColor($storeTailwindForm.surface)
		});
	}

	// Tailwind: on randomize button click
	function onRandomize(): void {
		const newColors: any = {
			primary: randomTailwindColor(),
			accent: randomTailwindColor(),
			warning: randomTailwindColor(),
			ternary: randomTailwindColor(),
			surface: randomTailwindColor()
		};
		storeTailwindForm.set({
			primary: newColors.primary.label,
			accent: newColors.accent.label,
			ternary: newColors.ternary.label,
			warning: newColors.warning.label,
			surface: newColors.surface.label
		});
		storeTailwindPalette.set({
			primary: newColors.primary,
			accent: newColors.accent,
			warning: newColors.warning,
			ternary: newColors.ternary,
			surface: newColors.surface
		});
	}

	// Hex: on input change
	function onHexInput(key: string, hexColor: string): void {
		if (regexValidHexCode.test(hexColor)) {
			// Generate Palette
			$storeHexPalette[key] = genHexPalette(key, hexColor);
		}
	}

	function genCssColorStrings(colorKey: string, colorSet: any): string {
		let css: string = '';
		Object.entries(colorSet.shades).forEach((set: any, i: number) => {
			const [key, v] = set;
			css += i === 0 ? '' : '\n' + '\t';
			css += `--color-${colorKey}-${key}: ${v['rgb']}; /* ⬅ ${v['hex']} */`;
		});
		return css;
	}

	// Reactive ---

	// CSS
	$: cssBorderBase = `--theme-border-base: ${formData.borderBase};`;
	$: cssFontFamily = `--theme-font-family: ${fontFamilyLists[formData.fontFamily]};`;
	$: cssFontColorBase = `--theme-font-color-base: ${formData.fontColorBase};`;
	$: cssFontColorDark = `--theme-font-color-dark: ${formData.fontColorDark};`;
	$: cssRoundedBase = `--theme-rounded-base: ${formData.roundedBase};`;
	$: cssRoundedContainer = `--theme-rounded-container: ${formData.roundedContainer};`;
	$: cssFullTheme = `
:root {
	/* =~= Design Tokens =~= */
	${cssBorderBase}
	${cssFontFamily}
	${cssFontColorBase}
	${cssFontColorDark}
	${cssRoundedBase}
	${cssRoundedContainer}
	/* =~= Colors | ${$storeMode ? 'Tailwind' : 'Hex'} =~= */
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
	// Set the current palette based on Tailwind/Hex mode
	$: currentPalette = $storeMode === true ? $storeTailwindPalette : $storeHexPalette;
	// Toggle `.bg-mesh` on body when preview mobile ON
	$: if (browser) document.body.classList.toggle('bg-mesh', !$storePreview);
</script>

<!-- Insert live theme into page head -->
<svelte:head>
	{@html $storePreview ? `\<style\>${cssFullTheme}\</style\>` : ''}
</svelte:head>

<!-- prettier-ignore -->
<div class="themer space-y-4">

	<!-- {#if !$storeMode}<a class="btn btn-filled" href="https://coolors.co/" target="_blank">Inspiration</a>{/if} -->

	<!-- Color Selection -->
	<div class="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-2">
		<!-- Left: Form -->
		<div class="card card-body flex flex-col justify-center space-y-4">
			{#each ['primary', 'accent', 'ternary', 'warning', 'surface'] as colorKey}
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
			<!-- Mode -->
			<label for="" class="col-span-2">
				<span>Mode</span>
				<RadioGroup selected={storeMode} display="flex">
					<RadioItem value={true}>Tailwind</RadioItem>
					<RadioItem value={false}>Hex</RadioItem>
				</RadioGroup>
			</label>
			<hr class="col-span-2" />
			<!-- ----theme-border-base -->
			<label>
				<span>Border</span>
				<select name="background" id="background" bind:value={formData.borderBase}>
					<option value="0px">0px</option>
					<option value="1px">1px</option>
					<option value="2px">2px</option>
					<option value="4px">4px</option>
				</select>
			</label>
			<!-- --theme-font-family -->
			<label>
				<span>Font Family</span>
				<select name="background" id="background" bind:value={formData.fontFamily}>
					<option value="sans">Sans Serif</option>
					<option value="serif">Serif</option>
					<option value="mono">Monospace</option>
					<option value="helvetica">Helvetica</option>
				</select>
			</label>
			<!-- --theme-font-color-base -->
			<label>
				<span>Font Color <small>(light mode)</small></span>
				<select name="background" id="background" bind:value={formData.fontColorBase}>
					<option value="var(--color-surface-800)">Surface 800</option>
					<option value="var(--color-surface-900)">Surface 900</option>
					<option value="0 0 0">Black</option>
				</select>
			</label>
			<!-- --theme-font-color-dark -->
			<label>
				<span>Font Color <small>(dark mode)</small></span>
				<select name="background" id="background" bind:value={formData.fontColorDark}>
					<option value="var(--color-surface-100)">Surface 100</option>
					<option value="var(--color-surface-50)">Surface 50</option>
					<option value="255 255 255">White</option>
				</select>
			</label>
			<!-- ----theme-rounded-base -->
			<label>
				<span>Rounded</span>
				<select name="background" id="background" bind:value={formData.roundedBase}>
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
			<!-- ----theme-rounded-container -->
			<label>
				<span>Rounded <small>(container)</small></span>
				<select name="background" id="background" bind:value={formData.roundedContainer}>
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
			<hr class="col-span-2" />
			<!-- Preview -->
			<div class="place-self-center">
				<SlideToggle bind:checked={$storePreview}>Preview</SlideToggle>
			</div>
			<!-- Randomize -->
			<button class="btn btn-filled-accent" on:click={onRandomize} disabled={!$storeMode}>Random</button>
		</div>
	</div>

	{#if $storePreview}
	<Alert class="text-center">
		<button class="btn btn-filled" on:click={resetSettings}>Reset Theme</button>
	</Alert>
	{/if}
	
	<hr>

	<CodeBlock language="css" code={cssFullTheme} />
</div>
