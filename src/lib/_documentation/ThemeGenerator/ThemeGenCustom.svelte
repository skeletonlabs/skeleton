<script lang="ts">
	// https://github.com/bobthered/tailwindcss-palette-generator
	// @ts-ignore
	import paletteGenerator from '@bobthered/tailwindcss-palette-generator';

	// Components
	import Swatches from './Swatches.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

	const regexHexColor = new RegExp(/^#[0-9a-f]{6}$/i);
	const formValues: any = {
		primary: '#10b981',
		accent: '#6366F1',
		warning: '#f43f5e',
		surface: '#6b7280'
	};
	const hexShades: any = { primary: {}, accent: {}, warning: {}, surface: {} };
	const rgbShades: any = { primary: {}, accent: {}, warning: {}, surface: {} };
	let cssSnippet: string = ``;

	// Helpers ---

	function pruneHash(v: string): string {
		return v.replace('#', '');
	}

	// Hex -> RGB
	// Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
	function hexToRgb(hex: any): string {
		hex = pruneHash(hex);
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (result) {
			const color = {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			};
			return `${color.r} ${color.g} ${color.b}`;
		}
		return '(invalid)';
	}

	// Process

	// Process each input individually if valid hex color string
	function processPrimary(): void {
		if (regexHexColor.test(formValues.primary)) {
			generateHexShades('primary');
		}
	}
	function processAccent(): void {
		if (regexHexColor.test(formValues.accent)) {
			generateHexShades('accent');
		}
	}
	function processWarning(): void {
		if (regexHexColor.test(formValues.warning)) {
			generateHexShades('warning');
		}
	}
	function processSurface(): void {
		if (regexHexColor.test(formValues.surface)) {
			generateHexShades('surface');
		}
	}

	// Creates a hex shade palette from a singular hex value
	function generateHexShades(key: string): void {
		// Use paletteGenerator
		const p: any = paletteGenerator({ names: [key], colors: [formValues[key]] });
		delete p[key][950]; // drop swatch 950
		hexShades[key] = p[key];
		// Generate RGB shades
		generateRgbShades(key);
	}

	// Generate a set of RGB shades from Hex shades
	function generateRgbShades(key: string): void {
		Object.entries(hexShades[key]).forEach((hexShade: any) => {
			const [hexKey, hexValue] = hexShade;
			rgbShades[key][hexKey] = hexToRgb(hexValue);
		});
		// Update CSS
		generateCssSnippet(key);
	}

	// Generates the CSS snippet
	function generateCssSnippet(key: string): void {
		let css: string = '';
		Object.entries(rgbShades).forEach((set: any, i: number) => {
			const [colorName, shades] = set;
			// Add Comment Row
			css += `${i === 0 ? `\t/* --- Custom Hex Theme --- */\n` : '\n'}\t/* ${colorName} (${formValues[colorName]}) */`;
			// Per each entry, add custom property key/value row
			Object.entries(shades).forEach((shade) => {
				const [shadeKey, shadeValue] = shade;
				css += `\n\t--color-${colorName}-${shadeKey}: ${shadeValue};`;
			});
		});
		// Wrap snippet with `:root{}`
		cssSnippet = `:root {\n${css}\n}`;
	}

	// On Init ---

	function onInit(): void {
		processPrimary();
		processAccent();
		processWarning();
		processSurface();
	}
	onInit();
</script>

<form class="grid grid-cols-1 lg:grid-cols-2 gap-4">
	<!-- Color Inputs -->
	<fieldset class="space-y-4">
		<!-- Primary -->
		<label class="flex-1" for="primary">
			<span>Primary</span>
			<input type="text" placeholder="#FFFFFF" bind:value={formValues.primary} on:keyup={processPrimary} />
			<Swatches palette={hexShades.primary} />
		</label>

		<!-- Accent -->
		<label class="flex-1" for="accent">
			<span>Accent</span>
			<input type="text" placeholder="#FFFFFF" bind:value={formValues.accent} on:keyup={processAccent} />
			<Swatches palette={hexShades.accent} />
		</label>

		<!-- Warning -->
		<label class="flex-1" for="warning">
			<span>Warning</span>
			<input type="text" placeholder="#FFFFFF" bind:value={formValues.warning} on:keyup={processWarning} />
			<Swatches palette={hexShades.warning} />
		</label>

		<!-- Surface -->
		<label class="flex-1" for="surface">
			<span>Surface</span>
			<input type="text" placeholder="#FFFFFF" bind:value={formValues.surface} on:keyup={processSurface} />
			<Swatches palette={hexShades.surface} />
		</label>
	</fieldset>

	<!-- Codeblock -->
	<fieldset class="space-y-4">
		<CodeBlock language="css" code={`${cssSnippet}`} class="max-h-[440px] overflow-y-auto border border-white/10" />
	</fieldset>
</form>
