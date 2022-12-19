<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';
	import Swatch from './Swatch.svelte';

	// Preview Features
	import ProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';

	// Types
	import type { FormTheme } from './types';

	// Local
	let formTheme: FormTheme = {
		colors: {
			primary: { label: 'Primary', hex: '#0FBA81', rgb: '0 0 0', on: '#FFFFFF' },
			accent: { label: 'Accent', hex: '#4F46E5', rgb: '0 0 0', on: '#000000' },
			tertiary: { label: 'Tertiary', hex: '#EAB309', rgb: '0 0 0', on: '#FFFFFF' },
			success: { label: 'Success', hex: '#000000', rgb: '0 0 0', on: '#000000' },
			warning: { label: 'Warning', hex: '#D41976', rgb: '0 0 0', on: '#FFFFFF' },
			error: { label: 'Error', hex: '#000000', rgb: '0 0 0', on: '#000000' },
			surface: { label: 'Surface', hex: '#1C2237', rgb: '0 0 0', on: '#FFFFFF' }
		},
		fontHeadings: 'sans',
		fontBase: 'sans',
		textColorLight: '0 0 0',
		textColorDark: '255 255 255',
		roundedBase: '4px',
		roundedContainer: '8px',
		border: '1px'
	};
	let generatedCSS: string = '{ ... }';
</script>

<div class="grid grid-cols-2 gap-4">
	<!-- General Settings -->
	<header class="col-span-2 flex justify-between items-center">
		<button class="btn btn-ghost-surface">Randomize</button>
		<LightSwitch />
	</header>

	<!-- Theme Color -->
	<section class="col-span-2 card p-4 grid grid-cols-1 gap-4">
		{#each Object.entries(formTheme.colors) as [colorKey, colorRow]}
			<div class="grid grid-cols-[105px_1fr_105px] gap-4">
				<label>
					<span>{colorRow.label}</span>
					<input type="text" bind:value={colorRow.hex} placeholder="#BADA55" />
				</label>
				<Swatch color={colorKey} />
				<label>
					<span>On Colors</span>
					<input type="text" bind:value={colorRow.on} placeholder="#FFFFFF" />
				</label>
			</div>
		{/each}
	</section>

	<!-- Theme Settings -->
	<section class="card p-4 grid grid-cols-2 gap-4">
		<h3 class="col-span-2">Fonts</h3>
		<!-- --theme-font-family-base -->
		<label>
			<span>Base</span>
			<select bind:value={formTheme.fontBase}>
				<option value="sans">Sans Serif</option>
				<option value="serif">Serif</option>
				<option value="mono">Monospace</option>
				<option value="system">System UI</option>
			</select>
		</label>
		<!-- --theme-font-family-heading -->
		<label>
			<span>Heading</span>
			<select bind:value={formTheme.fontHeadings}>
				<option value="sans">Sans Serif</option>
				<option value="serif">Serif</option>
				<option value="mono">Monospace</option>
				<option value="system">System UI</option>
			</select>
		</label>
		<h3 class="col-span-2">Text Color</h3>
		<!-- --theme-font-color-base -->
		<label>
			<span>Light Mode</span>
			<select bind:value={formTheme.textColorLight}>
				<!-- Black -->
				<option value="0 0 0">Black</option>
				<!-- Surface -->
				<option value="var(--color-surface-500)">Surface 500</option>
				<option value="var(--color-surface-600)">Surface 600</option>
				<option value="var(--color-surface-700)">Surface 700</option>
				<option value="var(--color-surface-800)">Surface 800</option>
				<option value="var(--color-surface-900)">Surface 900</option>
				<!-- Primary -->
				<option value="var(--color-primary-500)">Primary 500</option>
				<option value="var(--color-primary-600)">Primary 600</option>
				<option value="var(--color-primary-700)">Primary 700</option>
				<option value="var(--color-primary-800)">Primary 800</option>
				<option value="var(--color-primary-900)">Primary 900</option>
				<!-- Accent -->
				<option value="var(--color-accent-500)">Accent 500</option>
				<option value="var(--color-accent-600)">Accent 600</option>
				<option value="var(--color-accent-700)">Accent 700</option>
				<option value="var(--color-accent-800)">Accent 800</option>
				<option value="var(--color-accent-900)">Accent 900</option>
			</select>
		</label>
		<!-- --theme-font-color-dark -->
		<label>
			<span>Dark Mode</span>
			<select bind:value={formTheme.textColorDark}>
				<!-- White -->
				<option value="255 255 255">White</option>
				<!-- Surface -->
				<option value="var(--color-surface-400)">Surface 400</option>
				<option value="var(--color-surface-300)">Surface 300</option>
				<option value="var(--color-surface-200)">Surface 200</option>
				<option value="var(--color-surface-100)">Surface 100</option>
				<option value="var(--color-surface-50)">Surface 50</option>
				<!-- Primary -->
				<option value="var(--color-primary-400)">Primary 400</option>
				<option value="var(--color-primary-300)">Primary 300</option>
				<option value="var(--color-primary-200)">Primary 200</option>
				<option value="var(--color-primary-100)">Primary 100</option>
				<option value="var(--color-primary-50)">Primary 50</option>
				<!-- Accent -->
				<option value="var(--color-accent-400)">Accent 400</option>
				<option value="var(--color-accent-300)">Accent 300</option>
				<option value="var(--color-accent-200)">Accent 200</option>
				<option value="var(--color-accent-100)">Accent 100</option>
				<option value="var(--color-accent-50)">Accent 50</option>
			</select>
		</label>
		<h3 class="col-span-2">Border Radius</h3>
		<!-- --theme-rounded-base -->
		<label>
			<span>Base</span>
			<select bind:value={formTheme.roundedBase}>
				<option value="0px">0px</option>
				<option value="2px">2px</option>
				<option value="4px">4px</option>
				<option value="6px">6px</option>
				<option value="8px">8px</option>
				<option value="12px">12px</option>
				<option value="16px">16px</option>
				<option value="24px">24px</option>
				<option value="9999px">9999px</option>
			</select>
		</label>
		<!-- --theme-rounded-container -->
		<label>
			<span>Container</span>
			<select bind:value={formTheme.roundedContainer}>
				<option value="0px">0px</option>
				<option value="2px">2px</option>
				<option value="4px">4px</option>
				<option value="6px">6px</option>
				<option value="8px">8px</option>
				<option value="12px">12px</option>
				<option value="16px">16px</option>
				<option value="24px">24px</option>
			</select>
		</label>
		<h3 class="col-span-2">Border</h3>
		<!-- --theme-border-base -->
		<label>
			<span>Base</span>
			<select bind:value={formTheme.border}>
				<option value="0px">0px</option>
				<option value="1px">1px</option>
				<option value="2px">2px</option>
				<option value="4px">4px</option>
			</select>
		</label>
	</section>

	<!-- Previews -->
	<section class="card card-glass-accent p-4 space-y-8">
		<h3>Preview Elements</h3>
		<!-- Buttons -->
		<div class="grid grid-cols-3 gap-4">
			<button class="btn btn-filled-primary">primary</button>
			<button class="btn btn-filled-accent">accent</button>
			<button class="btn btn-filled-tertiary">tertiary</button>
			<button class="btn btn-filled-success">success</button>
			<button class="btn btn-filled-warning">warning</button>
			<button class="btn btn-filled-error">error</button>
		</div>
		<hr class="opacity-50" />
		<!-- Progress Bars -->
		<div class="grid grid-cols-1 gap-4">
			<ProgressBar meter="bg-primary-500" value={66} max={100} />
			<ProgressBar meter="bg-accent-500" value={50} max={100} />
			<ProgressBar meter="bg-tertiary-500" value={33} max={100} />
		</div>
		<hr class="opacity-50" />
		<!-- Badges -->
		<div class="grid grid-cols-3 gap-4 place-items-center">
			<button class="badge badge-filled-primary">primary</button>
			<button class="badge badge-filled-accent">accent</button>
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
	<footer class="col-span-2">
		<CodeBlock language="css" code={generatedCSS} />
	</footer>
</div>
