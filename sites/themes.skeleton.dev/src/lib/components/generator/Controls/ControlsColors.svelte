<script lang="ts">
	import * as constants from '$lib/constants/generator';
	import { globals, settingsColors } from '$lib/state/generator.svelte';
	import { genColorRamp, genRandomSeed, getColorKey, seedColor } from '$lib/utils/generator/colors';
	import ControlsColorsContrast from './ControlsColorsContrast.svelte';
	import DicesIcon from '@lucide/svelte/icons/dices';
	import EraserIcon from '@lucide/svelte/icons/eraser';
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import SproutIcon from '@lucide/svelte/icons/sprout';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';

	interface ColorSelection {
		label: string;
		description: string;
		value: string;
		class: string;
	}

	const colorSelection: ColorSelection[] = [
		{ label: 'Primary', description: 'The primary brand color.', value: 'primary', class: 'preset-filled-primary-500' },
		{ label: 'Secondary', description: 'A secondary accent color.', value: 'secondary', class: 'preset-filled-secondary-500' },
		{ label: 'Tertiary', description: 'A tertiary accent color.', value: 'tertiary', class: 'preset-filled-tertiary-500' },
		{ label: 'Success', description: 'Used for successful states.', value: 'success', class: 'preset-filled-success-500' },
		{ label: 'Warning', description: 'Used for warning states.', value: 'warning', class: 'preset-filled-warning-500' },
		{ label: 'Error', description: 'Used for error states.', value: 'error', class: 'preset-filled-error-500' },
		{ label: 'Surface', description: 'The neutral surface tones.', value: 'surface', class: 'preset-filled-surface-500' },
	];
	const shadesAll = constants.colorShades;
	const shades3x = [constants.colorShades[0], 500, constants.colorShades[constants.colorShades.length - 1]]; // 50/500/950

	// State
	let showAllShades = $state(false);
	const rxShadeArray = $derived(showAllShades ? shadesAll : shades3x);

	function onClearPalette() {
		if (
			confirm(
				'This will reset each color palette to neutral tones. This can be useful when starting a brand new theme. All current color changes will be lost, are you sure you wish to continue?',
			)
		) {
			constants.colorNames.forEach((colorName) => seedColor(colorName, '#CCCCCC'));
		}
	}

	function promptColorSeed(colorName: string) {
		const promptSeed = prompt(`Automatically generate a ${colorName} color palette from a hex color value that you provide.`);
		if (promptSeed) seedColor(colorName, promptSeed);
	}

	function promptRandomColor(colorName: string) {
		if (confirm(`Generate a random palette for the ${colorName} color?`)) {
			genRandomSeed(colorName);
		}
	}
</script>

<div class="space-y-4">
	<p class="opacity-60">Define a palette per each available theme color.</p>
	<button type="button" class="btn preset-outlined-surface-200-800 hover:preset-tonal w-full" onclick={onClearPalette}>
		<EraserIcon size={20} />
		<span>Clear All Palettes</span>
	</button>
	<Tabs value={globals.activeColor} onValueChange={(e) => (globals.activeColor = e.value)}>
		<Tabs.List class="justify-between">
			<Tabs.Indicator />
			{#each colorSelection as color (color)}
				<Tabs.Trigger value={color.value} class="aspect-square w-13 flex justify-center items-center {color.class}">
					<Tabs.Context>
						{#snippet children(tabs)}
							{#if tabs().value === color.value}
								<PencilIcon size={20} />
							{/if}
						{/snippet}
					</Tabs.Context>
				</Tabs.Trigger>
			{/each}
		</Tabs.List>

		{#each colorSelection as color (color)}
			<Tabs.Content value={color.value}>
				{#if color.value === globals.activeColor}
					{@const activeColorLabel = colorSelection.find((c) => c.value === globals.activeColor)?.label}
					<div class="space-y-4">
						<div class="grid grid-cols-[1fr_auto_auto] items-center gap-2">
							<h3 class="h5">{activeColorLabel}</h3>
							<button
								type="button"
								class="chip preset-outlined-surface-300-700 hover:preset-tonal"
								onclick={() => promptColorSeed(color.value)}
								title="Generate a full palette based on a single color value. The provide color represents shade 500."
							>
								<SproutIcon size={14} />
								<span>Seed</span>
							</button>
							<button
								type="button"
								class="chip preset-outlined-surface-300-700 hover:preset-tonal"
								onclick={() => promptRandomColor(color.value)}
								title="Generate a palette using a randomly selected color."
							>
								<DicesIcon size={14} />
								<span>Random</span>
							</button>
						</div>
						<Tabs value={showAllShades ? 'all-stops' : 'three-stops'} onValueChange={(e) => (showAllShades = e.value === 'all-stops')}>
							<Tabs.List>
								<Tabs.Indicator />
								<Tabs.Trigger value="three-stops" class="flex-1">Three Stops</Tabs.Trigger>
								<Tabs.Trigger value="all-stops" class="flex-1">All Stops</Tabs.Trigger>
							</Tabs.List>
						</Tabs>
						<div>
							{#if showAllShades}
								<p class="opacity-60">All stops must be manually defined.</p>
							{:else}
								<p class="opacity-60">Stops automatically blend between 50/500/950.</p>
							{/if}
						</div>
						<table class="table">
							<tbody>
								{#each rxShadeArray as shade}
									<tr>
										<td class="text-xs opacity-60">{shade}</td>
										<td>
											<input
												type="text"
												class="input"
												bind:value={settingsColors[getColorKey(color.value, shade.toString())]}
												onblur={() => genColorRamp(showAllShades, color.value)}
											/>
										</td>
										<td class="w-[1%] whitespace-nowrap">
											<!-- Known issue in Chrome; can ignore the console warning -->
											<!-- https://github.com/sveltejs/svelte/issues/8446#issuecomment-2213484541 -->
											<input
												class="input"
												type="color"
												bind:value={settingsColors[getColorKey(color.value, shade.toString())]}
												oninput={() => genColorRamp(showAllShades, color.value)}
											/>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
						<ControlsColorsContrast colorValue={color.value} />
					</div>
				{/if}
			</Tabs.Content>
		{/each}
	</Tabs>
</div>
