<script lang="ts">
	import { browser } from '$app/environment';
	import { writable, type Writable } from 'svelte/store';

	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import Swatches from './Swatches.svelte';

	// Helpers
	import { getTailwindColor, randomTailwindColor, genHexPalette, generateThemeCss } from './helpers';
	import { colorsTailwind } from './colors';

	// Local
	const regexValidHexCode = new RegExp(/^#[0-9a-f]{6}$/i);
	let themeCss: string = '';
	let loaded = false;

	// Stores
	let storeMode: Writable<boolean> = writable(true); // T: Tailwind | F: Custom
	let storePreview: Writable<boolean> = writable(false);
	let storeTailwindForm: Writable<any> = writable({
		primary: 'emerald',
		accent: 'indigo',
		ternary: 'yellow',
		warning: 'rose',
		surface: 'gray'
	});
	let storeTailwindPalette: Writable<any> = writable({
		primary: getTailwindColor($storeTailwindForm.primary),
		accent: getTailwindColor($storeTailwindForm.accent),
		ternary: getTailwindColor($storeTailwindForm.ternary),
		warning: getTailwindColor($storeTailwindForm.warning),
		surface: getTailwindColor($storeTailwindForm.surface)
	});
	let storeHexForm: Writable<any> = writable({
		primary: getTailwindColor('emerald').shades['500'].hex,
		accent: getTailwindColor('indigo').shades['500'].hex,
		ternary: getTailwindColor('yellow').shades['500'].hex,
		warning: getTailwindColor('rose').shades['500'].hex,
		surface: getTailwindColor('gray').shades['500'].hex
	});
	let storeHexPalette: Writable<any> = writable({
		primary: genHexPalette('primary', $storeHexForm.primary),
		accent: genHexPalette('accent', $storeHexForm.accent),
		ternary: genHexPalette('ternary', $storeHexForm.ternary),
		warning: genHexPalette('warning', $storeHexForm.warning),
		surface: genHexPalette('surface', $storeHexForm.surface)
	});

	// Local Storage

	if (browser) {
		// LocalStorage Values ---
		const lsMode: string = localStorage['storeMode'];
		const lsPreview: string = localStorage['storePreview'];
		const lsTailwindForm: string = localStorage['storeTailwindForm'];
		const lsTailwindPalette: string = localStorage['storeTailwindPalette'];
		const lsHexForm: string = localStorage['storeHexForm'];
		const lsHexPalette: string = localStorage['storeHexPalette'];
		// Getters ---
		if (lsMode !== undefined) {
			storeMode = writable(lsMode === 'true');
		}
		if (lsPreview !== undefined) {
			storePreview = writable(lsPreview === 'true');
		}
		if (lsTailwindForm !== undefined) {
			storeTailwindForm = writable(JSON.parse(lsTailwindForm));
		}
		if (lsTailwindPalette !== undefined) {
			storeTailwindPalette = writable(JSON.parse(lsTailwindPalette));
		}
		if (lsHexForm !== undefined) {
			storeHexForm = writable(JSON.parse(lsHexForm));
		}
		if (lsHexPalette !== undefined) {
			storeHexPalette = writable(JSON.parse(lsHexPalette));
		}
		// Setters ---
		storeMode.subscribe((v) => (localStorage.storeMode = String(v)));
		storePreview.subscribe((v) => (localStorage.storePreview = String(v)));
		storeTailwindForm.subscribe((v) => (localStorage.storeTailwindForm = JSON.stringify(v)));
		storeTailwindPalette.subscribe((v) => (localStorage.storeTailwindPalette = JSON.stringify(v)));
		storeHexForm.subscribe((v) => (localStorage.storeHexForm = JSON.stringify(v)));
		storeHexPalette.subscribe((v) => (localStorage.storeHexPalette = JSON.stringify(v)));
		// Loading Completed ---
		loaded = true;
	}

	function resetSettings(): void {
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
		storeTailwindPalette.set({
			primary: randomTailwindColor(),
			accent: randomTailwindColor(),
			warning: randomTailwindColor(),
			ternary: randomTailwindColor(),
			surface: randomTailwindColor()
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
{#if loaded}
<div class="themer space-y-4">
	
	<!-- Color Pickers -->
	<section class="card !bg-[#141517] !ring-0 space-y-4">
		<!-- Header: Controls -->
		<div class="card-body flex flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
			<!-- Mode -->
			<RadioGroup selected={storeMode}>
				<RadioItem value={true}>Tailwind Colors</RadioItem>
				<RadioItem value={false}>Hex Colors</RadioItem>
			</RadioGroup>
			<div class="flex items-center space-x-4">
				<!-- Actions -->
				{#if $storeMode}<button class="btn btn-sm btn-ghost" on:click={onRandomize}>Random</button>{/if}
				<button class="btn btn-sm btn-ghost" on:click={resetSettings}>Reset</button>
				<!-- Preview -->
				<SlideToggle bind:checked={$storePreview} class="text-white">Live</SlideToggle>
			</div>
		</div>

		<!-- Body: Form -->
		<div class="card-body space-y-2">
			{#each ['primary', 'accent', 'ternary', 'warning', 'surface'] as colorKey}
				<div class="grid grid-cols-1 xl:grid-cols-[140px_1fr] gap-2 xl:gap-4 xl:place-items-end">
					<label class="w-full">
						<span class="text-white capitalize">{colorKey}</span>
						{#if $storeMode}
							<select class="capitalize" bind:value={$storeTailwindForm[colorKey]} on:change={()=>{onTailwindSelect()}}>
								{#each colorsTailwind as c}<option value={c.label}>{c.label}</option>{/each}
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

		<!-- Footer: Note -->
		<div class="card-footer">
			<p class="text-xs text-center">Each color {$storeMode ? 'selected' : 'input'} represents swatch 500.</p>
		</div>

	</section>

	<!-- CSS Snipnpet -->
	<CodeBlock language="css" code={themeCss} />
</div>
{:else}
	<section class="card card-body !bg-[#141517] !ring-0 space-y-4 text-center"><p>Loading Theme Generator...</p></section>
{/if}
