<script lang="ts">
	import { tailwindColors } from './colors';

	import Swatches from './Swatches.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

	const twColors: any = tailwindColors;
	const colorLabels: any[] = Object.keys(tailwindColors);
	const formValues: any = {
		primary: 'emerald',
		accent: 'indigo',
		warning: 'rose',
		surface: 'gray'
	};
	const rgbShades: any = { primary: {}, accent: {}, warning: {}, surface: {} };
	let cssSnippet: string = ``;

	// Process ---

	function processPrimary(): void {
		setRgbShades('primary', formValues.primary);
	}
	function processAccent(): void {
		setRgbShades('accent', formValues.accent);
	}
	function processWarning(): void {
		setRgbShades('warning', formValues.warning);
	}
	function processSurface(): void {
		setRgbShades('surface', formValues.surface);
	}

	// Set rgb shades based on selection
	function setRgbShades(key: string, selectionKey: string): void {
		rgbShades[key] = twColors[selectionKey];
		generateCssSnippet();
	}

	// Generates the CSS snippet
	function generateCssSnippet(): void {
		let css: string = '';
		Object.entries(rgbShades).forEach((set: any, i: number) => {
			const [colorName, shades] = set;
			// Add Comment Row
			css += `${i === 0 ? `\t/* --- Custom Tailwind Theme --- */\n` : '\n'}\t/* ${colorName} (${formValues[colorName]}) */`;
			// Per each entry, add custom property key/value row
			Object.entries(shades).forEach((shade: any) => {
				const [shadeKey, shadeValue] = shade;
				css += `\n\t--color-${colorName}-${shadeKey}: ${shadeValue['rgb']};`;
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
	<!-- Color Selection -->
	<fieldset class="space-y-4">
		<!-- Primary -->
		<label>
			<span>Primary</span>
			<select name="primary" id="primary" bind:value={formValues.primary} on:change={processPrimary}>
				{#each colorLabels as l}<option value={l}>{l}</option>{/each}
			</select>
			<Swatches palette={rgbShades.primary} />
		</label>

		<!-- Accent -->
		<label>
			<span>Accent</span>
			<select name="accent" id="accent" bind:value={formValues.accent} on:change={processAccent}>
				{#each colorLabels as l}<option value={l}>{l}</option>{/each}
			</select>
			<Swatches palette={rgbShades.accent} />
		</label>

		<!-- Warning -->
		<label>
			<span>Warning</span>
			<select name="warning" id="warning" bind:value={formValues.warning} on:change={processWarning}>
				{#each colorLabels as l}<option value={l}>{l}</option>{/each}
			</select>
			<Swatches palette={rgbShades.warning} />
		</label>

		<!-- Surface -->
		<label>
			<span>Surface</span>
			<select name="surface" id="surface" bind:value={formValues.surface} on:change={processSurface}>
				{#each colorLabels as l}<option value={l}>{l}</option>{/each}
			</select>
			<Swatches palette={rgbShades.surface} />
		</label>
	</fieldset>

	<!-- Codeblock -->
	<fieldset class="space-y-4">
		<CodeBlock language="css" code={`${cssSnippet}`} class="max-h-[440px] overflow-y-auto border border-white/10" />
	</fieldset>
</form>
