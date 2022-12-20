<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { tailwindcssPaletteGenerator } from '@bobthered/tailwindcss-palette-generator';

	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';
	import Swatch from './Swatch.svelte';
	// Utilities
	import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

	// Preview Features
	import ProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';

	// Local Utils
	import type { ColorSettings, FormTheme } from './types';
	import { storePreview } from './stores';
	import { colorNames, inputSettings, fontSettings } from './settings';

	// Stores
	const storeThemGenForm: Writable<FormTheme> = localStorageStore('storeThemGenForm', {
		colors: [
			{ key: 'primary', label: 'Primary', hex: '#0FBA81', rgb: '0 0 0', on: '0 0 0' }, // BADA55
			{ key: 'secondary', label: 'Secondary', hex: '#4F46E5', rgb: '0 0 0', on: '255 255 255' },
			{ key: 'tertiary', label: 'Tertiary', hex: '#EAB309', rgb: '0 0 0', on: '0 0 0' },
			{ key: 'success', label: 'Success', hex: '#84cc16', rgb: '0 0 0', on: '0 0 0' },
			{ key: 'warning', label: 'Warning', hex: '#f59e0b', rgb: '0 0 0', on: '0 0 0' },
			{ key: 'error', label: 'Error', hex: '#D41976', rgb: '0 0 0', on: '255 255 255' },
			{ key: 'surface', label: 'Surface', hex: '#495a8f', rgb: '0 0 0', on: '255 255 255' }
		],
		fontBase: 'system',
		fontHeadings: 'system',
		textColorLight: '0 0 0',
		textColorDark: '255 255 255',
		roundedBase: '9999px',
		roundedContainer: '8px',
		borderBase: '1px'
	});

	// Local
	let cssOutput: string = '';
	let preserveHexSource: boolean = false;

	// Hex -> RGB - Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
	export function hexToRgb(hex: string): string {
		hex = hex.replace('#', '');
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (result) {
			const color = { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) };
			return `${color.r} ${color.g} ${color.b}`;
		}
		return '(invalid)';
	}

	function generateRandomHexColor(): string {
		return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
	}

	function randomize(): void {
		$storeThemGenForm.colors.forEach((_, i: number) => {
			$storeThemGenForm.colors[i].hex = generateRandomHexColor();
			$storeThemGenForm.colors[i].on = '255 255 255';
		});
	}

	function generateCSSPalette(): string {
		let fullPalette: string = '';
		// Generate full palette of hex colors 50-900
		// Source: https://github.com/bobthered/tailwindcss-palette-generator
		const generatedPalette = tailwindcssPaletteGenerator({
			// Array of Color Hex Values
			colors: $storeThemGenForm.colors.map((c: ColorSettings) => c.hex),
			// Shade Luminosity
			shades: [
				{ name: '50', lightness: 90 },
				{ name: '100', lightness: 85 },
				{ name: '200', lightness: 80 },
				{ name: '300', lightness: 75 },
				{ name: '400', lightness: 65 },
				// ---
				{ name: '500', lightness: 55 },
				// ---
				{ name: '600', lightness: 35 },
				{ name: '700', lightness: 30 },
				{ name: '800', lightness: 25 },
				{ name: '900', lightness: 20 }
			],
			// Array of Color Keys
			names: colorNames
		});
		// Generate CSS Property string rows in set order
		colorNames.forEach((colorName: string, i: number) => {
			const hex500 = $storeThemGenForm.colors[i].hex; // ensure 500 matches input
			fullPalette += `/* ${colorName} | ${hex500} */\n\t`;
			for (let [k, v] of Object.entries(generatedPalette[colorName])) {
				// **********************************************
				if (preserveHexSource && k === '500') v = hex500;
				// **********************************************
				fullPalette += `--color-${colorName}-${k}: ${hexToRgb(v)}; /* ⬅ ${v} */\n\t`;
			}
		});
		return fullPalette;
	}

	// Reload when when preview is disabled
	// Prevents issue if you browse away and back to generator
	function onPreviewToggle(): void {
		if ($storePreview === false) {
			localStorage.removeItem('storeThemGenForm');
			location.reload();
		}
	}

	// Reactive
	$: if ($storeThemGenForm || preserveHexSource) {
		cssOutput = `
:root {
    /* =~= Theme Properties =~= */
    --theme-font-family-base: ${fontSettings[$storeThemGenForm.fontBase]};
    --theme-font-family-heading: ${fontSettings[$storeThemGenForm.fontHeadings]};
    --theme-font-color-base: ${$storeThemGenForm.textColorLight};
    --theme-font-color-dark: ${$storeThemGenForm.textColorDark};
    --theme-rounded-base: ${$storeThemGenForm.roundedBase};
    --theme-rounded-container: ${$storeThemGenForm.roundedContainer};
    --theme-border-base: ${$storeThemGenForm.borderBase};
    /* =~= Theme On-X Colors =~= */
    --on-primary: ${$storeThemGenForm.colors[0]?.on};
    --on-secondary: ${$storeThemGenForm.colors[1]?.on};
    --on-tertiary: ${$storeThemGenForm.colors[2]?.on};
    --on-success: ${$storeThemGenForm.colors[3]?.on};
    --on-warning: ${$storeThemGenForm.colors[4]?.on};
    --on-error: ${$storeThemGenForm.colors[5]?.on};
    --on-surface: ${$storeThemGenForm.colors[6]?.on};
    /* =~= Theme Colors  =~= */
    ${generateCSSPalette()}
}`;
	}

	$: liveThemePreview = $storePreview ? `\<style\>${cssOutput}\</style\>` : '';
</script>

<svelte:head>
	<!-- Live Preview of Generated Theme -->
	{@html liveThemePreview}
</svelte:head>

{#if $storeThemGenForm}
	<div class="grid grid-cols-2 gap-4">
		<!-- General Settings -->
		<header class="col-span-2 flex justify-between items-center">
			<SlideToggle bind:checked={$storePreview} on:change={onPreviewToggle}>Preview</SlideToggle>
			<div class="flex justify-center items-center space-x-4">
				<button class="btn btn-ghost-surface" on:click={randomize} disabled={!$storePreview}>Randomize</button>
				<span
					title="Pass the provided hex color to shade 500. Provides more accureate results for branding, but may require you to rebalance your color stops."
				>
					<SlideToggle bind:checked={preserveHexSource}>Verbatim Hex</SlideToggle>
				</span>
			</div>
			<LightSwitch />
		</header>

		<!-- Theme Color -->
		<section class="col-span-2 card p-4 grid grid-cols-1 gap-4">
			{#each $storeThemGenForm.colors as colorRow}
				<div class="grid grid-cols-1 lg:grid-cols-[150px_1fr_160px] gap-2 lg:gap-4">
					<label>
						<span>{colorRow.label}</span>
						<div class="grid grid-cols-[1fr_auto] gap-2">
							<input type="text" bind:value={colorRow.hex} placeholder="#BADA55" disabled={!$storePreview} />
							<input class="border-[1px] border-white w-10 h-10" type="color" bind:value={colorRow.hex} disabled={!$storePreview} />
						</div>
					</label>
					<Swatch color={colorRow.key} />
					<label>
						<span>On Colors</span>
						<select bind:value={colorRow.on} disabled={!$storePreview}>
							{#each inputSettings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
						</select>
					</label>
				</div>
			{/each}
		</section>

		<!-- Theme Settings -->
		<section class="card p-4 grid grid-cols-2 gap-4 col-span-2 lg:col-span-1">
			<!-- Fonts -->
			<h3 class="col-span-2">Fonts</h3>
			<label>
				<span>Base</span>
				<select bind:value={$storeThemGenForm.fontBase} disabled={!$storePreview}>
					{#each inputSettings.fonts as f}<option value={f}>{f}</option>{/each}
				</select>
			</label>
			<label>
				<span>Headings</span>
				<select bind:value={$storeThemGenForm.fontHeadings} disabled={!$storePreview}>
					{#each inputSettings.fonts as f}<option value={f}>{f}</option>{/each}
				</select>
			</label>
			<!-- Text Color -->
			<h3 class="col-span-2">Text Color</h3>
			<label>
				<span>Light Mode</span>
				<select bind:value={$storeThemGenForm.textColorLight} disabled={!$storePreview}>
					{#each inputSettings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
				</select>
			</label>
			<label>
				<span>Dark Mode</span>
				<select bind:value={$storeThemGenForm.textColorDark} disabled={!$storePreview}>
					{#each inputSettings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
				</select>
			</label>
			<!-- Border Radius -->
			<h3 class="col-span-2">Border Radius</h3>
			<label>
				<span>Base</span>
				<select bind:value={$storeThemGenForm.roundedBase} disabled={!$storePreview}>
					{#each inputSettings.rounded as r}<option value={r}>{r}</option>{/each}
				</select>
			</label>
			<label>
				<span>Container</span>
				<select bind:value={$storeThemGenForm.roundedContainer} disabled={!$storePreview}>
					{#each inputSettings.rounded as r}<option value={r}>{r}</option>{/each}
				</select>
			</label>
			<!-- Border Size -->
			<h3 class="col-span-2">Border Size</h3>
			<label>
				<span>Base</span>
				<select bind:value={$storeThemGenForm.borderBase} disabled={!$storePreview}>
					{#each inputSettings.border as b}<option value={b}>{b}</option>{/each}
				</select>
			</label>
		</section>

		<!-- Previews -->
		<section class="card card-glass-secondary p-4 space-y-8 col-span-2 lg:col-span-1">
			<h3>Preview Elements</h3>
			<!-- Buttons -->
			<div class="grid grid-cols-3 gap-4">
				<button class="btn btn-filled-primary">primary</button>
				<button class="btn btn-filled-secondary">secondary</button>
				<button class="btn btn-filled-tertiary">tertiary</button>
				<button class="btn btn-filled-success">success</button>
				<button class="btn btn-filled-warning">warning</button>
				<button class="btn btn-filled-error">error</button>
			</div>
			<hr class="opacity-50" />
			<!-- Progress Bars -->
			<div class="grid grid-cols-1 gap-4">
				<ProgressBar meter="bg-primary-500" value={66} max={100} />
				<ProgressBar meter="bg-secondary-500" value={50} max={100} />
				<ProgressBar meter="bg-tertiary-500" value={33} max={100} />
			</div>
			<hr class="opacity-50" />
			<!-- Badges -->
			<div class="grid grid-cols-3 gap-4 place-items-center">
				<button class="badge badge-filled-primary">primary</button>
				<button class="badge badge-filled-secondary">secondary</button>
				<button class="badge badge-filled-tertiary">tertiary</button>
				<button class="badge badge-filled-success">success</button>
				<button class="badge badge-filled-warning">warning</button>
				<button class="badge badge-filled-error">error</button>
			</div>
			<hr class="opacity-50" />
			<!-- Slide Toggles -->
			<div class="grid grid-cols-3 gap-4 place-items-center">
				<SlideToggle accent="bg-primary-500" checked />
				<SlideToggle checked />
				<SlideToggle accent="bg-tertiary-500" checked />
			</div>
		</section>

		<!-- Generated CSS -->
		<footer class="col-span-2 space-y-4">
			<CodeBlock language="css" code={cssOutput} />
		</footer>
	</div>
{/if}
