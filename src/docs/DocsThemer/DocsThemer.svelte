<script lang="ts">
	import type { Writable } from 'svelte/store';

	// Preview Components
	import ProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';
	import Swatch from './Swatch.svelte';
	// Utilities
	import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

	// Local Utils
	import { storePreview } from './stores';
	import type { ColorSettings, FormTheme } from './types';
	import { inputSettings, fontSettings } from './settings';
	import { type Palette, generatePalette, generateA11yOnColor } from './colors';

	// Stores
	const storeThemGenForm: Writable<FormTheme> = localStorageStore('storeThemGenForm', {
		colors: [
			{ key: 'primary', label: 'Primary', hex: '#0FBA81', rgb: '0 0 0', on: '0 0 0' },
			{ key: 'secondary', label: 'Secondary', hex: '#4F46E5', rgb: '0 0 0', on: '255 255 255' },
			{ key: 'tertiary', label: 'Tertiary', hex: '#0EA5E9', rgb: '0 0 0', on: '0 0 0' },
			{ key: 'success', label: 'Success', hex: '#84cc16', rgb: '0 0 0', on: '0 0 0' },
			{ key: 'warning', label: 'Warning', hex: '#EAB308', rgb: '0 0 0', on: '0 0 0' },
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
	let showThemeCSS: boolean = false;

	function randomize(): void {
		$storeThemGenForm.colors.forEach((_, i: number) => {
			const randomHexCode = '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
			$storeThemGenForm.colors[i].hex = randomHexCode;
			$storeThemGenForm.colors[i].on = generateA11yOnColor(randomHexCode);
		});
	}

	function generateColorCSS(): string {
		let newCSS = '';
		const newPalette: Record<string, Palette> = {};
		// Loop store colors
		$storeThemGenForm.colors.forEach((color: ColorSettings, i: number) => {
			const colorKey = color.key;
			// Generate the new color palette hex/rgb/on values
			newPalette[color.key] = generatePalette($storeThemGenForm.colors[i].hex);
			// The color set comment
			newCSS += `/* ${colorKey} | ${newPalette[colorKey][500].hex} */\n\t`;
			// CSS props for shade 50-900 per each color
			for (let [k, v] of Object.entries(newPalette[colorKey])) {
				newCSS += `--color-${colorKey}-${k}: ${v.rgb}; /* ⬅ ${v.hex} */\n\t`;
			}
		});
		return newCSS;
	}

	function onPreviewToggle(): void {
		if ($storePreview === false) {
			localStorage.removeItem('storeThemGenForm');
			location.reload(); // required
		}
	}

	// Reactive
	$: if ($storeThemGenForm) {
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
    ${generateColorCSS()}
}`;
	}

	$: livePreviewStylesheet = $storePreview ? `\<style\>${cssOutput}\</style\>` : '';
</script>

<!-- Live Preview of Generated Theme -->
<svelte:head>{@html livePreviewStylesheet}</svelte:head>

<div class="docs-themer space-y-4">
	<div class="card card-glass-surface p-4 flex justify-between items-center">
		<span>Live Preview Mode</span>
		<SlideToggle size="lg" bind:checked={$storePreview} on:change={onPreviewToggle} />
	</div>
	<div class="grid grid-cols-2 gap-4">
		<!-- Theme Color -->
		<section class="card col-span-2 ">
			<!-- General Settings -->
			<header class="p-4 col-span-2 flex justify-between items-center">
				<div class="flex items-center space-x-4">
					<h3>Colors</h3>
					<LightSwitch />
				</div>
				<button class="btn btn-ghost-surface" on:click={randomize} disabled={!$storePreview}>Randomize Colors</button>
			</header>
			<hr />
			<div class="p-4 grid grid-cols-1 gap-4">
				{#each $storeThemGenForm.colors as colorRow}
					<div class="grid grid-cols-1 lg:grid-cols-[170px_1fr_160px] gap-2 lg:gap-4">
						<label>
							<span>{colorRow.label}</span>
							<div class="grid grid-cols-[auto_1fr] gap-4 place-items-end">
								<input type="color" bind:value={colorRow.hex} disabled={!$storePreview} />
								<input type="text" bind:value={colorRow.hex} placeholder="#BADA55" disabled={!$storePreview} />
							</div>
						</label>
						<Swatch color={colorRow.key} />
						<label>
							<span>Text & Fill Color</span>
							<select bind:value={colorRow.on} disabled={!$storePreview}>
								{#each inputSettings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
							</select>
						</label>
					</div>
				{/each}
			</div>
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
					<option value="9999px">9999px</option>
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
		<section class="card !bg-transparent p-4 space-y-8 col-span-2 lg:col-span-1">
			<h3>Preview</h3>
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
			<div class="grid grid-cols-4 gap-4 place-items-center">
				<span class="badge badge-filled-surface">surface</span>
				<span class="badge badge-filled-primary">primary</span>
				<span class="badge badge-filled-secondary">secondary</span>
				<span class="badge badge-filled-tertiary">tertiary</span>
				<span class="badge badge-glass">glass</span>
				<span class="badge badge-filled-success">success</span>
				<span class="badge badge-filled-warning">warning</span>
				<span class="badge badge-filled-error">error</span>
			</div>
			<hr class="opacity-50" />
			<!-- Slide Toggles -->
			<div class="grid grid-cols-4 gap-4 place-items-center">
				<SlideToggle accent="bg-surface-500" checked />
				<SlideToggle accent="bg-primary-500" checked />
				<SlideToggle checked />
				<SlideToggle accent="bg-tertiary-500" checked />
			</div>
		</section>

		<!-- CSS Output -->
		<footer class="col-span-2 space-y-4">
			{#if showThemeCSS}<CodeBlock language="css" code={cssOutput} />{/if}
			<div class="card card-glass-surface p-4 text-center">
				<!-- prettier-ignore -->
				<button class="btn btn-lg btn-filled-primary font-bold" on:click={() => { showThemeCSS = !showThemeCSS; }} disabled={!$storePreview}>
					{!showThemeCSS ? 'Show' : 'Hide'} Theme CSS
				</button>
			</div>
		</footer>
	</div>
</div>
