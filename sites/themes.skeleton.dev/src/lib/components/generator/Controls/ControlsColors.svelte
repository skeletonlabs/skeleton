<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { globals, settingsColors } from '$lib/state/generator.svelte';
	// Utils
	import { genColorRamp, seedColor, genRandomSeed } from '$lib/utils/generator/colors';
	// Components (Skeleton)
	import { Switch, Tabs } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconEdit from 'lucide-svelte/icons/pencil';
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
	<p class="opacity-60">Select a color, then define the palette and contrast values.</p>
	<!-- Color Tabs -->
	<Tabs bind:value={globals.activeColor} fluid>
		{#snippet list()}
			{#each colorSelection as color}
				<Tabs.Control value={color.value} labelBase="flex justify-center" stateInactive="">
					<div class="aspect-square w-[52px] rounded-md flex justify-center items-center {color.class}" title={color.description}>
						{#if color.value === globals.activeColor}<IconEdit size={20} />{/if}
					</div>
				</Tabs.Control>
			{/each}
		{/snippet}
		{#snippet content()}
			{#each colorSelection as color}
				{#if color.value === globals.activeColor}
					{@const activeColorLabel = colorSelection.find((c) => c.value === globals.activeColor)?.label}
					<div class="space-y-4">
						<!-- Actions -->
						<div class="grid grid-cols-[1fr_auto_auto_auto] items-center gap-2">
							<h3 class="h5">{activeColorLabel}</h3>
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
						<!-- Message -->
						<div>
							{#if showAllShades}
								<p class="opacity-60">All shades are manually defined.</p>
							{:else}
								<p class="opacity-60">Shades automatically blend between 50/500/950.</p>
							{/if}
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
						<!-- Light/Dark Contrast -->
						<div class="space-y-4">
							<div class="grid grid-cols-2 gap-4">
								<!-- --color-(color)-contrast-dark -->
								<label class="label">
									<span class="label-text">Light Mode Contrast</span>
									<div class="input-group grid-cols-[auto_1fr_auto] divide-x divide-surface-200-800">
										<div
											class="input-group-cell"
											style:background={`rgba(${settingsColors[`--color-${color.value}-contrast-light`]})`}
										></div>
										<select
											class="select"
											name={`--color-${color.value}-contrast-light`}
											bind:value={settingsColors[`--color-${color.value}-contrast-light`]}
										>
											{#each constants.colorNames as colorName}
												<option value="0 0 0">Black</option>
												<optgroup label={colorName}>
													{#each constants.colorShades as colorShade}
														<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
													{/each}
												</optgroup>
											{/each}
										</select>
									</div>
								</label>
								<!-- --color-surface-contrast-light -->
								<label class="label">
									<span class="label-text">Dark Mode Contrast</span>
									<div class="input-group grid-cols-[auto_1fr_auto] divide-x divide-surface-200-800">
										<div
											class="input-group-cell"
											style:background={`rgba(${settingsColors[`--color-${color.value}-contrast-dark`]})`}
										></div>
										<select
											class="select"
											name={`--color-${color.value}-contrast-dark`}
											bind:value={settingsColors[`--color-${color.value}-contrast-dark`]}
										>
											{#each constants.colorNames as colorName}
												<option value="255 255 255">White</option>
												<optgroup label={colorName}>
													{#each constants.colorShades as colorShade}
														<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
													{/each}
												</optgroup>
											{/each}
										</select>
									</div>
								</label>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		{/snippet}
	</Tabs>
</div>
