<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsBrand } from '$lib/state/generator.svelte';

	/** Parses a `var(--color-{name}-{shade})` reference back into its parts. */
	function parseColorRef(value: string) {
		const match = value.match(/^var\(--color-([a-z]+)-(\d+)\)$/);
		return match ? { name: match[1], shade: match[2] } : { name: 'primary', shade: '500' };
	}

	const initialLight = parseColorRef(settingsBrand['--color-brand-light']);
	const initialDark = parseColorRef(settingsBrand['--color-brand-dark']);

	let lightColorName: string = $state(initialLight.name);
	let lightShade: string = $state(initialLight.shade);
	let darkColorName: string = $state(initialDark.name);
	let darkShade: string = $state(initialDark.shade);

	// Brand isn't its own ramp — it's a reference into an existing palette color/shade.
	// Contrast is derived automatically from that same reference, not user-editable.
	$effect(() => {
		settingsBrand['--color-brand-light'] = `var(--color-${lightColorName}-${lightShade})`;
		settingsBrand['--color-brand-contrast-light'] = `var(--color-${lightColorName}-contrast-${lightShade})`;
	});

	$effect(() => {
		settingsBrand['--color-brand-dark'] = `var(--color-${darkColorName}-${darkShade})`;
		settingsBrand['--color-brand-contrast-dark'] = `var(--color-${darkColorName}-contrast-${darkShade})`;
	});
</script>

<div class="space-y-4">
	<p class="opacity-60">
		A variable accent color for your design system, referencing any color/shade from your palette. Use this as the default when
		styling elements and components (ex: <code class="code">preset-filled-brand</code>).
	</p>
	<div class="grid grid-cols-2 gap-4">
		<label class="label space-y-2">
			<span class="label-text">Light Mode</span>
			<div class="w-full h-4 border border-surface-200-800 rounded-base" style:background={settingsBrand['--color-brand-light']}
			></div>
			<select class="select" bind:value={lightColorName}>
				{#each constants.colorNames as colorName}
					<option value={colorName}>{colorName}</option>
				{/each}
			</select>
			<select class="select" bind:value={lightShade}>
				{#each constants.colorShades as colorShade}
					<option value={colorShade.toString()}>{colorShade}</option>
				{/each}
			</select>
		</label>
		<label class="label space-y-2">
			<span class="label-text">Dark Mode</span>
			<div class="w-full h-4 border border-surface-200-800 rounded-base" style:background={settingsBrand['--color-brand-dark']}
			></div>
			<select class="select" bind:value={darkColorName}>
				{#each constants.colorNames as colorName}
					<option value={colorName}>{colorName}</option>
				{/each}
			</select>
			<select class="select" bind:value={darkShade}>
				{#each constants.colorShades as colorShade}
					<option value={colorShade.toString()}>{colorShade}</option>
				{/each}
			</select>
		</label>
	</div>
</div>
