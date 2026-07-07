<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsColors } from '$lib/state/generator.svelte';
	import { getColorKey } from '$lib/utils/generator/colors';
	import chroma from 'chroma-js';
	import { untrack } from 'svelte';

	interface Props {
		colorValue: string;
	}

	const { colorValue }: Props = $props();

	const WHITE = 'oklch(1 0 0 / 1)';
	const BLACK = 'oklch(0 0 0 / 1)';

	/**
	 * Parses a `var(--color-{name}-{shade})` reference back into its parts, or detects a literal
	 * pure white/black (imported themes may carry these as hex/oklch rather than a palette var).
	 */
	function parseColorRef(value: string, specialHex: string, specialName: string, fallbackShade: string) {
		if (chroma.valid(value) && chroma(value).hex() === specialHex) return { name: specialName, shade: fallbackShade };
		const match = value.match(/^var\(--color-([a-z]+)-(\d+)\)$/);
		return match ? { name: match[1], shade: match[2] } : { name: 'surface', shade: fallbackShade };
	}

	const initialLight = untrack(() => parseColorRef(settingsColors[getColorKey(colorValue, 'contrast-light')], '#ffffff', 'white', '50'));
	const initialDark = untrack(() => parseColorRef(settingsColors[getColorKey(colorValue, 'contrast-dark')], '#000000', 'black', '950'));

	let lightColorName: string = $state(initialLight.name);
	let lightShade: string = $state(initialLight.shade);
	let darkColorName: string = $state(initialDark.name);
	let darkShade: string = $state(initialDark.shade);

	$effect(() => {
		settingsColors[getColorKey(colorValue, 'contrast-light')] =
			lightColorName === 'white' ? WHITE : `var(--color-${lightColorName}-${lightShade})`;
	});

	$effect(() => {
		settingsColors[getColorKey(colorValue, 'contrast-dark')] =
			darkColorName === 'black' ? BLACK : `var(--color-${darkColorName}-${darkShade})`;
	});
</script>

<div class="grid grid-cols-2 gap-4">
	<label class="label space-y-2">
		<span class="label-text">Light Contrast</span>
		<div
			class="w-full h-4 border border-surface-200-800 rounded-base"
			style:background={settingsColors[getColorKey(colorValue, 'contrast-light')]}
		></div>
		<select class="select" bind:value={lightColorName}>
			<option value="white">white</option>
			{#each constants.colorNames as colorName}
				<option value={colorName}>{colorName}</option>
			{/each}
		</select>
		{#if lightColorName !== 'white'}
			<select class="select" bind:value={lightShade}>
				{#each constants.colorShades as colorShade}
					<option value={colorShade.toString()}>{colorShade}</option>
				{/each}
			</select>
		{/if}
	</label>
	<label class="label space-y-2">
		<span class="label-text">Dark Contrast</span>
		<div
			class="w-full h-4 border border-surface-200-800 rounded-base"
			style:background={settingsColors[getColorKey(colorValue, 'contrast-dark')]}
		></div>
		<select class="select" bind:value={darkColorName}>
			<option value="black">black</option>
			{#each constants.colorNames as colorName}
				<option value={colorName}>{colorName}</option>
			{/each}
		</select>
		{#if darkColorName !== 'black'}
			<select class="select" bind:value={darkShade}>
				{#each constants.colorShades as colorShade}
					<option value={colorShade.toString()}>{colorShade}</option>
				{/each}
			</select>
		{/if}
	</label>
</div>
