<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';
	import Swatch from './Swatch.svelte';

	// Preview Features
	import ProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';

	// Utils
	import type { FormTheme } from './types';
	import { settings } from './settings';

	// Local
	let formTheme: FormTheme = {
		colors: {
			primary: { label: 'Primary', hex: '#0FBA81', rgb: '0 0 0', on: '255 255 255' },
			accent: { label: 'Accent', hex: '#4F46E5', rgb: '0 0 0', on: '0 0 0' },
			tertiary: { label: 'Tertiary', hex: '#EAB309', rgb: '0 0 0', on: '255 255 255' },
			success: { label: 'Success', hex: '#000000', rgb: '0 0 0', on: '0 0 0' },
			warning: { label: 'Warning', hex: '#D41976', rgb: '0 0 0', on: '255 255 255' },
			error: { label: 'Error', hex: '#000000', rgb: '0 0 0', on: '0 0 0' },
			surface: { label: 'Surface', hex: '#1C2237', rgb: '0 0 0', on: '255 255 255' }
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
			<div class="grid grid-cols-[105px_1fr_160px] gap-4">
				<label>
					<span>{colorRow.label}</span>
					<input type="text" bind:value={colorRow.hex} placeholder="#BADA55" />
				</label>
				<Swatch color={colorKey} />
				<label>
					<span>On Colors</span>
					<select bind:value={colorRow.on}>
						{#each settings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
					</select>
				</label>
			</div>
		{/each}
	</section>

	<!-- Theme Settings -->
	<section class="card p-4 grid grid-cols-2 gap-4">
		<!-- Fonts -->
		<h3 class="col-span-2">Fonts</h3>
		<label>
			<span>Base</span>
			<select bind:value={formTheme.fontBase}>
				{#each settings.fonts as f}<option value={f}>{f}</option>{/each}
			</select>
		</label>
		<label>
			<span>Heading</span>
			<select bind:value={formTheme.fontHeadings}>
				{#each settings.fonts as f}<option value={f}>{f}</option>{/each}
			</select>
		</label>
		<!-- Text Color -->
		<h3 class="col-span-2">Text Color</h3>
		<label>
			<span>Light Mode</span>
			<select bind:value={formTheme.textColorLight}>
				{#each settings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
			</select>
		</label>
		<label>
			<span>Dark Mode</span>
			<select bind:value={formTheme.textColorDark}>
				{#each settings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
			</select>
		</label>
		<!-- Border Radiu -->
		<h3 class="col-span-2">Border Radius</h3>
		<label>
			<span>Base</span>
			<select bind:value={formTheme.roundedBase}>
				{#each settings.rounded as r}<option value={r}>{r}</option>{/each}
			</select>
		</label>
		<label>
			<span>Container</span>
			<select bind:value={formTheme.roundedContainer}>
				{#each settings.rounded as r}<option value={r}>{r}</option>{/each}
			</select>
		</label>
		<!-- Border Size -->
		<h3 class="col-span-2">Border Size</h3>
		<label>
			<span>Base</span>
			<select bind:value={formTheme.border}>
				{#each settings.border as b}<option value={b}>{b}</option>{/each}
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
