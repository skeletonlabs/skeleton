<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// Helpers
	import { findColor, genHexPalette, generateCssCode } from './helpers';
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
	const paletteTailwind: any = {
		primary: findColor('emerald'),
		accent: findColor('indigo'),
		warning: findColor('rose'),
		surface: findColor('gray')
	};
	const formDataHex: any = {
		primary: findColor('sky').shades['500'].hex,
		accent: findColor('violet').shades['500'].hex,
		warning: findColor('pink').shades['500'].hex,
		surface: findColor('neutral').shades['500'].hex
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

	// Reactive
	$: currentPalette = $storeMode === true ? paletteTailwind : paletteHex;
	$: if (currentPalette) genCssSnippet();
</script>

<div class="themer space-y-4">
	<section class="flex justify-between items-center">
		<RadioGroup selected={storeMode}>
			<RadioItem value={true}>Tailwind</RadioItem>
			<RadioItem value={false}>Custom</RadioItem>
		</RadioGroup>
		{#if $storeMode}
			<a class="btn btn-sm" href="https://tailwindcss.com/docs/customizing-colors" target="_blank">Color Reference</a>
		{:else}
			<a class="btn btn-sm" href="https://coolors.co/" target="_blank">Get Inspired</a>
		{/if}
	</section>

	<!-- Color Pickers -->
	<!-- prettier-ignore -->
	<section class="card card-body !bg-[#141517] !ring-0 space-y-4">
		<!-- Select Tailwind Colors -->
		<div class="grid grid-cols-1 xl:grid-cols-[150px_1fr] gap-2 xl:gap-4 xl:place-items-end">
			<label class="w-full">
				<span class="text-white">Primary</span>
				{#if $storeMode}
					<select name="primary" id="primary" class="capitalize" bind:value={paletteTailwind.primary} on:change={()=>{genCssSnippet()}}>
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
					<select name="accent" id="accent" class="capitalize" bind:value={paletteTailwind.accent} on:change={()=>{genCssSnippet()}}>
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
					<select name="warning" id="warning" class="capitalize" bind:value={paletteTailwind.warning} on:change={()=>{genCssSnippet()}}>
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
					<select name="surface" id="surface" class="capitalize" bind:value={paletteTailwind.surface} on:change={()=>{genCssSnippet()}}>
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
        <p class="text-xs text-center">Each color {$storeMode ? 'selected' : 'input'} represents swatch 500.</p>
	</section>

	<!-- CSS Snipnpet -->
	<CodeBlock language="css" code={cssSnippet} />
</div>
