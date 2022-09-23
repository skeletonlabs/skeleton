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
		warning: getTailwindColor('rose'),
		surface: getTailwindColor('gray')
	};
	const formDataHex: any = {
		primary: getTailwindColor('sky').shades['500'].hex,
		accent: getTailwindColor('violet').shades['500'].hex,
		warning: getTailwindColor('pink').shades['500'].hex,
		surface: getTailwindColor('neutral').shades['500'].hex
	};
	let paletteHex: any = {
		primary: genHexPalette('primary', formDataHex.primary),
		accent: genHexPalette('accent', formDataHex.accent),
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

<div class="themer space-y-4">
	<!-- Color Pickers -->
	<!-- prettier-ignore -->
	<section class="card !bg-[#141517] !ring-0 space-y-4">
		<!-- Header -->
		<div class="card-header lg:flex justify-between items-center">
			<RadioGroup selected={storeMode} display="flex">
				<RadioItem value={true}>Tailwind</RadioItem>
				<RadioItem value={false}>Custom</RadioItem>
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
		<!-- Settings -->
		<div class="card-body">
			<div class="grid grid-cols-1 xl:grid-cols-[150px_1fr] gap-2 xl:gap-4 xl:place-items-end">
				<label class="w-full">
					<span class="text-white">Primary</span>
					{#if $storeMode}
						<select class="capitalize" bind:value={paletteTailwind.primary} on:change={()=>{genCssSnippet()}}>
							{#each colorsTailwind as c}<option value={c}>{c.label}</option>{/each}
						</select>
					{:else}
						<input
							type="text" placeholder="#FFFFFF" bind:value={formDataHex.primary}
							on:input={() => { onHexInput('primary', formDataHex.primary); }}
						/>
					{/if}
				</label>
				<Swatches palette={currentPalette.primary.shades} />
			</div>
			<div class="grid grid-cols-1 xl:grid-cols-[150px_1fr] gap-2 xl:gap-4 xl:place-items-end">
				<label class="w-full">
					<span class="text-white">Accent</span>
					{#if $storeMode}
						<select class="capitalize" bind:value={paletteTailwind.accent} on:change={()=>{genCssSnippet()}}>
							{#each colorsTailwind as c}<option value={c}>{c.label}</option>{/each}
						</select>
					{:else}
						<input
							type="text" placeholder="#FFFFFF" bind:value={formDataHex.accent}
							on:input={() => { onHexInput('accent', formDataHex.accent); }}
						/>
					{/if}
				</label>
				<Swatches palette={currentPalette.accent.shades} />
			</div>
			<div class="grid grid-cols-1 xl:grid-cols-[150px_1fr] gap-2 xl:gap-4 xl:place-items-end">
				<label class="w-full">
					<span class="text-white">Warning</span>
					{#if $storeMode}
						<select class="capitalize" bind:value={paletteTailwind.warning} on:change={()=>{genCssSnippet()}}>
							{#each colorsTailwind as c}<option value={c}>{c.label}</option>{/each}
						</select>
					{:else}
						<input
							type="text" placeholder="#FFFFFF" bind:value={formDataHex.warning}
							on:input={() => { onHexInput('warning', formDataHex.warning); }}
						/>
					{/if}
				</label>
				<Swatches palette={currentPalette.warning.shades} />
			</div>
			<div class="grid grid-cols-1 xl:grid-cols-[150px_1fr] gap-2 xl:gap-4 xl:place-items-end">
				<label class="w-full">
					<span class="text-white">Surface</span>
					{#if $storeMode}
						<select class="capitalize" bind:value={paletteTailwind.surface} on:change={()=>{genCssSnippet()}}>
							{#each colorsTailwind as c}<option value={c}>{c.label}</option>{/each}
						</select>
					{:else}
						<input
							type="text" placeholder="#FFFFFF" bind:value={formDataHex.surface}
							on:input={() => { onHexInput('surface', formDataHex.surface); }}
						/>
					{/if}
				</label>
				<Swatches palette={currentPalette.surface.shades} />
			</div>
		</div>
        <!-- Footer -->
		<div class="card-footer">
			<p class="text-xs text-center">Each color {$storeMode ? 'selected' : 'input'} represents swatch 500.</p>
		</div>
	</section>

	<!-- CSS Snipnpet -->
	<CodeBlock language="css" code={cssSnippet} />
</div>
