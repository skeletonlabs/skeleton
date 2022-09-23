<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { browser } from '$app/environment';

	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import Swatches from './Swatches.svelte';

	// Helpers
	import { getTailwindColor, randomTailwindColor, genHexPalette, generateThemeCss } from './helpers';
	import { colorsTailwind } from './colors';

	// Stores
	const storeMode: Writable<boolean> = writable(true); // T: Tailwind | F: Custom

	// Local
	const regexValidHexCode = new RegExp(/^#[0-9a-f]{6}$/i);
	let themePreviewEnabled: boolean = false;
	let themeCss: string = '';

	// Palette: Tailwind
	let paletteTailwind: any = {
		primary: getTailwindColor('emerald'),
		accent: getTailwindColor('indigo'),
		ternary: getTailwindColor('yellow'),
		warning: getTailwindColor('rose'),
		surface: getTailwindColor('gray')
	};

	// Palette: Hex
	let formHex: any = {
		primary: getTailwindColor('sky').shades['500'].hex,
		accent: getTailwindColor('violet').shades['500'].hex,
		ternary: getTailwindColor('yellow').shades['500'].hex,
		warning: getTailwindColor('pink').shades['500'].hex,
		surface: getTailwindColor('neutral').shades['500'].hex
	};
	let paletteHex: any = {
		primary: genHexPalette('primary', getTailwindColor('sky').shades['500'].hex),
		accent: genHexPalette('accent', getTailwindColor('violet').shades['500'].hex),
		ternary: genHexPalette('ternary', getTailwindColor('yellow').shades['500'].hex),
		warning: genHexPalette('warning', getTailwindColor('pink').shades['500'].hex),
		surface: genHexPalette('surface', getTailwindColor('neutral').shades['500'].hex)
	};

	// Functions ---

	// Tailwind: on selection change
	function onTailwindSelect(): void {
		setThemeCss();
	}

	// Tailwind: on randomize button click
	function onRandomize(): void {
		paletteTailwind = {
			primary: randomTailwindColor(),
			accent: randomTailwindColor(),
			warning: randomTailwindColor(),
			ternary: randomTailwindColor(),
			surface: randomTailwindColor()
		};
	}

	// Hex: on input change
	function onHexInput(key: string, hexColor: string): void {
		if (regexValidHexCode.test(hexColor)) {
			// Generate Palette
			paletteHex[key] = genHexPalette(key, hexColor);
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
	$: currentPalette = $storeMode === true ? paletteTailwind : paletteHex;

	// Update the CSS snippet on current palette change
	$: if (currentPalette) setThemeCss();

	// Toggle `.bg-mesh` on body when preview mobile ON
	$: if (browser) document.body.classList.toggle('bg-mesh', !themePreviewEnabled);
</script>

<!-- Insert live theme into page head -->
<svelte:head>
	{@html themePreviewEnabled ? `\<style\>${themeCss}\</style\>` : ''}
</svelte:head>

<!-- prettier-ignore -->
<div class="themer space-y-4">

	<!-- Color Pickers -->
	<section class="card !bg-[#141517] !ring-0 space-y-4">

		<!-- Header: Controls -->
		<div class="card-header flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y0 space-x-4">
			<RadioGroup selected={storeMode}>
				<RadioItem value={true}>Tailwind Colors</RadioItem>
				<RadioItem value={false}>Hex Colors</RadioItem>
			</RadioGroup>
			<SlideToggle bind:checked={themePreviewEnabled} class="text-white">Live Preview</SlideToggle>
			<div class="flex items-center space-x-2">
				{#if $storeMode}
					<a class="btn btn-sm text-white" href="https://tailwindcss.com/docs/customizing-colors" target="_blank">Reference</a>
					<button class="btn btn-sm text-white" on:click={onRandomize}>Randomize</button>
				{:else}
					<a class="btn btn-sm" href="https://coolors.co/" target="_blank">Get Inspired</a>
				{/if}
			</div>
		</div>

		<!-- Body: Form -->
		<div class="card-body space-y-2">
			{#each ['primary', 'accent', 'ternary', 'warning', 'surface'] as colorKey}
				<div class="grid grid-cols-1 xl:grid-cols-[140px_1fr] gap-2 xl:gap-4 xl:place-items-end">
					<label class="w-full">
						<span class="text-white capitalize">{colorKey}</span>
						{#if $storeMode}
							<select class="capitalize" bind:value={paletteTailwind[colorKey]} on:change={()=>{onTailwindSelect()}}>
								{#each colorsTailwind as c}<option value={c}>{c.label}</option>{/each}
							</select>
						{:else}
							<input
								type="text" placeholder="#FFFFFF" bind:value={formHex[colorKey]}
								on:input={() => { onHexInput(colorKey, formHex[colorKey]); }}
							/>
						{/if}
					</label>
					<Swatches palette={currentPalette[colorKey].shades} />
				</div>
			{/each}
		</div>

		<!-- Footer: Note -->
		<div class="card-footer">
			<p class="text-xs text-center">Each color {$storeMode ? 'selected' : 'input'} represents swatch 500.</p>
		</div>

	</section>

	<!-- CSS Snipnpet -->
	<CodeBlock language="css" code={themeCss} />
</div>
