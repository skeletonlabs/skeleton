<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/constants';
	// State
	import { settingsColors } from '$lib/state/state.svelte';
	// Utils
	import { genColorRamp, seedColor, genRandomSeed } from '$lib/utils/colors';
	// Components (Skeleton)
	import { Switch, Tabs } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconCheck from 'lucide-svelte/icons/check';
	import IconSeed from 'lucide-svelte/icons/sprout';
	import IconRandom from 'lucide-svelte/icons/dices';

	// Types
	interface ColorSelection {
		label: string;
		description: string;
		value: string;
		class: string;
	}

	// Local
	const colorSelection: ColorSelection[] = [
		{ label: 'Primary', description: 'The primary brand color.', value: 'primary', class: 'preset-filled-primary-500' },
		{ label: 'Secondary', description: 'A secondary accent color.', value: 'secondary', class: 'preset-filled-secondary-500' },
		{ label: 'Tertiary', description: 'A tertiary accent color.', value: 'tertiary', class: 'preset-filled-tertiary-500' },
		{ label: 'Success', description: 'Used for successful states.', value: 'success', class: 'preset-filled-success-500' },
		{ label: 'Warning', description: 'Used for warning states.', value: 'warning', class: 'preset-filled-warning-500' },
		{ label: 'Error', description: 'Used for error states.', value: 'error', class: 'preset-filled-error-500' },
		{ label: 'Surface', description: 'The neutral surface tones.', value: 'surface', class: 'preset-filled-surface-500' }
	];
	const shadesAll = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
	const shades3x = [50, 500, 950];

	// State
	let currentColor = $state('primary');
	let showAllShades = $state(false);
	const rxShadeArray = $derived(showAllShades ? shadesAll : shades3x);

	function promptColorSeed(colorName: string) {
		const seed = prompt(`Provide a color value to generate a palette for ${colorName}.`);
		if (seed) seedColor(colorName, seed);
	}

	function promptRandomColor(colorName: string) {
		if (confirm(`Generate a random palette for ${colorName}?`)) {
			genRandomSeed(colorName);
		}
	}
</script>

<div class="space-y-4">
	<p class="opacity-60">Define the palette and contrast tones per color.</p>
	<!-- Color Tabs -->
	<Tabs bind:value={currentColor} fluid>
		{#snippet list()}
			{#each colorSelection as color}
				<Tabs.Control value={color.value} labelBase="flex justify-center" stateInactive="">
					<div class="aspect-square w-[52px] rounded flex justify-center items-center {color.class}" title={color.description}>
						{#if color.value === currentColor}<IconCheck />{/if}
					</div>
				</Tabs.Control>
			{/each}
		{/snippet}
		{#snippet content()}
			{#each colorSelection as color}
				{#if color.value === currentColor}
					<div class="space-y-4">
						<!-- Actions -->
						<div class="grid grid-cols-[1fr_auto_auto_auto] items-center gap-2">
							<h3 class="h5">{colorSelection.find((c) => c.value === currentColor)?.label}</h3>
							<button
								type="button"
								class="chip preset-outlined-surface-300-700 hover:preset-tonal"
								onclick={() => promptColorSeed(color.value)}
							>
								<IconSeed size={14} />
								<span>Seed</span>
							</button>
							<button
								type="button"
								class="chip preset-outlined-surface-300-700 hover:preset-tonal"
								onclick={() => promptRandomColor(color.value)}
							>
								<IconRandom size={14} />
								<span>Random</span>
							</button>
							<Switch name="example" bind:checked={showAllShades} classes="!gap-2">
								<span class="type-scale-1 opacity-60">All</span>
							</Switch>
						</div>
						<!-- Table: Shades -->
						<table class="table">
							<tbody>
								{#each rxShadeArray as shade}
									<tr>
										<td class="type-scale-1 opacity-60">{shade}</td>
										<!-- --color-(name)-(shade) -->
										<td>
											<input
												type="text"
												class="input"
												bind:value={settingsColors[`--color-${color.value}-${shade}`]}
												oninput={() => genColorRamp(showAllShades, color.value)}
											/>
										</td>
										<td class="w-[1%] whitespace-nowrap">
											<!-- Known issue in Chrome; can ignore the console warning -->
											<!-- https://github.com/sveltejs/svelte/issues/8446#issuecomment-2213484541 -->
											<input
												class="input"
												type="color"
												bind:value={settingsColors[`--color-${color.value}-${shade}`]}
												oninput={() => genColorRamp(showAllShades, color.value)}
											/>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
						<!-- Contrast -->
						<div class="space-y-4">
							<h3 class="h5">Contrast</h3>
							<div class="grid grid-cols-2 gap-4">
								<!-- --color-(color)-contrast-dark -->
								<label class="label">
									<span class="label-text">Light Mode</span>
									<select
										class="select"
										name={`--color-${color.value}-contrast-light`}
										bind:value={settingsColors[`--color-${color.value}-contrast-light`]}
									>
										{#each constants.colorNames as colorName}
											<option value="#000000">Black</option>
											<optgroup label={colorName}>
												{#each constants.colorShades as colorShade}
													<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
												{/each}
											</optgroup>
										{/each}
									</select>
								</label>
								<!-- --color-surface-contrast-light -->
								<label class="label">
									<span class="label-text">Dark Mode</span>
									<select
										class="select"
										name={`--color-${color.value}-contrast-dark`}
										bind:value={settingsColors[`--color-${color.value}-contrast-dark`]}
									>
										{#each constants.colorNames as colorName}
											<option value="#FFFFFF">White</option>
											<optgroup label={colorName}>
												{#each constants.colorShades as colorShade}
													<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
												{/each}
											</optgroup>
										{/each}
									</select>
								</label>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		{/snippet}
	</Tabs>
</div>
