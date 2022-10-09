<script lang="ts">
	import { browser } from '$app/environment';
	import type { Writable } from 'svelte/store';

	// Utilities
	import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import Swatches from './Swatches.svelte';

	// Helpers
	import { getTailwindColor, randomTailwindColor, genHexPalette, generateThemeCss } from './helpers';
	import { tailwindDefaultColors } from '$lib/tailwind/colors';

	// Local
	const regexValidHexCode = new RegExp(/^#[0-9a-f]{6}$/i);
	let themeCss: string = '';

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
		// Generate CSS
		setThemeCss();
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
			// Update CSS Snipet
			setThemeCss();
		}
	}

	// Shared: Generate CSS Snippet
	function setThemeCss(): void {
		themeCss = generateThemeCss($storeMode, currentPalette);
	}

	// Reactive ---

	// Set the current palette based on Tailwind/Hex mode
	$: currentPalette = $storeMode === true ? $storeTailwindPalette : $storeHexPalette;

	// Update the CSS snippet on current palette change
	$: if (currentPalette) setThemeCss();

	// Toggle `.bg-mesh` on body when preview mobile ON
	$: if (browser) document.body.classList.toggle('bg-mesh', !$storePreview);
</script>

<!-- Insert live theme into page head -->
<svelte:head>
	{@html $storePreview ? `\<style\>${themeCss}\</style\>` : ''}
</svelte:head>

<!-- prettier-ignore -->
<div class="themer space-y-4">

	
	
	<!-- Color Pickers -->
	<section class="card !bg-[#141517] !ring-0">

		<!-- Header: Controls -->
		<div class="card-header flex justify-between items-center space-x-4">
			<!-- Mode -->
			<RadioGroup selected={storeMode}>
				<RadioItem value={true}>Tailwind</RadioItem>
				<RadioItem value={false}>Hex</RadioItem>
			</RadioGroup>
			{#if $storeMode}<button class="btn btn-filled" on:click={onRandomize}>Randomize</button>{/if}
			{#if !$storeMode}<a class="btn btn-filled" href="https://coolors.co/" target="_blank">Inspiration</a>{/if}
		</div>

		<!-- Body: Form -->
		<div class="card-body !pt-2 space-y-4 lg:space-y-2">
			{#each ['primary', 'accent', 'ternary', 'warning', 'surface'] as colorKey}
				<div class="grid grid-cols-1 xl:grid-cols-[140px_1fr] gap-2 xl:gap-4 xl:place-items-end">
					<label class="w-full">
						<span class="text-white capitalize">{colorKey}</span>
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

		<!-- Live Preview -->
		<div class="card-footer !pt-4 {$storePreview ? 'bg-green-500/30' : 'bg-red-500/10'} flex justify-between items-center">
			<SlideToggle bind:checked={$storePreview} class="text-white">Enable Live Preview</SlideToggle>
			<button class="btn bg-white/5 text-white" on:click={resetSettings}>Reset Theme</button>
		</div>

	</section>

	<!-- CSS Snipnpet -->
	<CodeBlock language="css" code={themeCss} />
</div>
