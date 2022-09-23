<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// Helpers
	import { getTailwindColor, randomTailwindColor, genHexPalette, generateCssCode } from './helpers';
	import { colorsTailwind } from './colors';

	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import Swatches from './Swatches.svelte';

	// Stores
	const storeMode: Writable<boolean> = writable(true); // T: Tailwind | F: Custom

	// Local
	const regexHexColor = new RegExp(/^#[0-9a-f]{6}$/i);
	let paletteTailwind: any = {
		primary: getTailwindColor('emerald'),
		accent: getTailwindColor('indigo'),
		ternary: getTailwindColor('yellow'),
		warning: getTailwindColor('rose'),
		surface: getTailwindColor('gray')
	};
	const formDataHex: any = {
		primary: getTailwindColor('sky').shades['500'].hex,
		accent: getTailwindColor('violet').shades['500'].hex,
		ternary: getTailwindColor('yellow').shades['500'].hex,
		warning: getTailwindColor('pink').shades['500'].hex,
		surface: getTailwindColor('neutral').shades['500'].hex
	};
	let paletteHex: any = {
		primary: genHexPalette('primary', formDataHex.primary),
		accent: genHexPalette('accent', formDataHex.accent),
		ternary: genHexPalette('ternary', formDataHex.ternary),
		warning: genHexPalette('warning', formDataHex.warning),
		surface: genHexPalette('surface', formDataHex.surface)
	};
	let cssSnippet: string = '';

	// Handle hex color input by user
	function onHexInput(key: string, hexColor: string): void {
		if (regexHexColor.test(hexColor)) {
			paletteHex[key] = genHexPalette(key, hexColor);
			genCssSnippet();
		}
	}

	// Generate CSS Snippet
	function genCssSnippet(): void {
		cssSnippet = generateCssCode($storeMode, currentPalette);
	}

	// Randomize Tailwind Colors
	function onRandomize(): void {
		paletteTailwind = {
			primary: randomTailwindColor(),
			accent: randomTailwindColor(),
			warning: randomTailwindColor(),
			ternary: randomTailwindColor(),
			surface: randomTailwindColor()
		};
	}

	// Reactive
	$: currentPalette = $storeMode === true ? paletteTailwind : paletteHex;
	$: if (currentPalette) genCssSnippet();
	// $: liveThemePreview = `\<style\>${cssSnippet}\</style\>`;
</script>

<!-- Trigger Live Theme Preview -->
<!-- <svelte:head>{@html liveThemePreview}</svelte:head> -->

<!-- prettier-ignore -->
<div class="themer space-y-4">

	<!-- Color Pickers -->
	<section class="card !bg-[#141517] !ring-0 space-y-4">

		<!-- Header -->
		<div class="card-header lg:flex justify-between items-center">
			<RadioGroup selected={storeMode} display="flex">
				<RadioItem value={true}>Tailwind Colors</RadioItem>
				<RadioItem value={false}>Hex Colors</RadioItem>
			</RadioGroup>
			<div class="hidden lg:flex items-center space-x-2">
				{#if $storeMode}
					<a class="btn btn-sm text-white" href="https://tailwindcss.com/docs/customizing-colors" target="_blank">Reference</a>
					<button class="btn btn-sm text-white" on:click={onRandomize}>Randomize</button>
				{:else}
					<a class="btn btn-sm" href="https://coolors.co/" target="_blank">Get Inspired</a>
				{/if}
			</div>
		</div>

		<!-- Body -->
		<div class="card-body space-y-2">
			{#each ['primary', 'accent', 'ternary', 'warning', 'surface'] as colorKey}
				<div class="grid grid-cols-1 xl:grid-cols-[140px_1fr] gap-2 xl:gap-4 xl:place-items-end">
					<label class="w-full">
						<span class="text-white capitalize">{colorKey}</span>
						{#if $storeMode}
							<select class="capitalize" bind:value={paletteTailwind[colorKey]} on:change={()=>{genCssSnippet()}}>
								{#each colorsTailwind as c}<option value={c}>{c.label}</option>{/each}
							</select>
						{:else}
							<input
								type="text" placeholder="#FFFFFF" bind:value={formDataHex[colorKey]}
								on:input={() => { onHexInput(colorKey, formDataHex[colorKey]); }}
							/>
						{/if}
					</label>
					<Swatches palette={currentPalette[colorKey].shades} />
				</div>
			{/each}
		</div>

		<!-- Footer -->
		<div class="card-footer">
			<p class="text-xs text-center">Each color {$storeMode ? 'selected' : 'input'} represents swatch 500.</p>
		</div>

	</section>

	<!-- CSS Snipnpet -->
	<CodeBlock language="css" code={cssSnippet} />
</div>
