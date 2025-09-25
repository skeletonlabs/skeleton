<script lang="ts">
	// Constants
	// Icons
	import * as constants from '$lib/constants/generator';
	// Utils
	import { seedColor } from '$lib/utils/generator/colors';
	import IconClear from '@lucide/svelte/icons/eraser';

	// Types
	// interface ColorSelection {
	// 	label: string;
	// 	description: string;
	// 	value: string;
	// 	class: string;
	// }

	// Local
	// const colorSelection: ColorSelection[] = [
	// 	{ label: 'Primary', description: 'The primary brand color.', value: 'primary', class: 'preset-filled-primary-500' },
	// 	{ label: 'Secondary', description: 'A secondary accent color.', value: 'secondary', class: 'preset-filled-secondary-500' },
	// 	{ label: 'Tertiary', description: 'A tertiary accent color.', value: 'tertiary', class: 'preset-filled-tertiary-500' },
	// 	{ label: 'Success', description: 'Used for successful states.', value: 'success', class: 'preset-filled-success-500' },
	// 	{ label: 'Warning', description: 'Used for warning states.', value: 'warning', class: 'preset-filled-warning-500' },
	// 	{ label: 'Error', description: 'Used for error states.', value: 'error', class: 'preset-filled-error-500' },
	// 	{ label: 'Surface', description: 'The neutral surface tones.', value: 'surface', class: 'preset-filled-surface-500' }
	// ];
	// const shadesAll = constants.colorShades;
	// const shades3x = [constants.colorShades[0], 500, constants.colorShades[constants.colorShades.length - 1]]; // 50/500/950

	// State
	// let showAllShades = $state(false);
	// const rxShadeArray = $derived(showAllShades ? shadesAll : shades3x);

	function onClearPalette() {
		if (
			confirm(
				'This will reset each color palette to neutral tones. This can be useful when starting a brand new theme. All current color changes will be lost, are you sure you wish to continue?',
			)
		) {
			constants.colorNames.forEach((colorName) => seedColor(colorName, '#CCCCCC'));
		}
	}

	// function promptColorSeed(colorName: string) {
	// 	const promptSeed = prompt(`Automatically generate a ${colorName} color palette from a hex color value that you provide.`);
	// 	if (promptSeed) seedColor(colorName, promptSeed);
	// }

	// function promptRandomColor(colorName: string) {
	// 	if (confirm(`Generate a random palette for the ${colorName} color?`)) {
	// 		genRandomSeed(colorName);
	// 	}
	// }
</script>

<div class="space-y-4">
	<p class="opacity-60">Define a palette per each available theme color.</p>
	<!-- Button: Clear Palette -->
	<button type="button" class="btn preset-outlined-surface-200-800 hover:preset-tonal w-full" onclick={onClearPalette}>
		<IconClear size={20} />
		<span>Clear All Palettes</span>
	</button>
	<!-- Color Tabs -->
	<!-- <Tabs value={globals.activeColor} onValueChange={(e) => (globals.activeColor = e.value)} fluid>
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
					<div class="space-y-4"> -->
	<!-- Actions -->
	<!-- <div class="grid grid-cols-[1fr_auto_auto_auto] items-center gap-2">
							<h3 class="h5">{activeColorLabel}</h3>
							<button
								type="button"
								class="chip preset-outlined-surface-300-700 hover:preset-tonal"
								onclick={() => promptColorSeed(color.value)}
								title="Generate a full palette based on a single color value. The provide color represents shade 500."
							>
								<IconSeed size={14} />
								<span>Seed</span>
							</button>
							<button
								type="button"
								class="chip preset-outlined-surface-300-700 hover:preset-tonal"
								onclick={() => promptRandomColor(color.value)}
								title="Generate a palette using a randomly selected color."
							>
								<IconRandom size={14} />
								<span>Random</span>
							</button>
							<Switch name="example" checked={showAllShades} onCheckedChange={(e) => (showAllShades = e.checked)} classes="!gap-2">
								<span class="text-xs opacity-60">All</span>
							</Switch>
						</div> -->
	<!-- Message -->
	<!-- <div>
							{#if showAllShades}
								<p class="opacity-60">All shades must be manually defined.</p>
							{:else}
								<p class="opacity-60">Shades automatically blend between 50/500/950.</p>
							{/if}
						</div> -->
	<!-- Table: Shades -->
	<!-- <table class="table">
							<tbody>
								{#each rxShadeArray as shade}
									<tr>
										<td class="text-xs opacity-60">{shade}</td> -->
	<!-- --color-(name)-(shade) -->
	<!-- <td>
											<input
												type="text"
												class="input"
												bind:value={settingsColors[getColorKey(color.value, shade.toString())]}
												onblur={() => genColorRamp(showAllShades, color.value)}
											/>
										</td>
										<td class="w-[1%] whitespace-nowrap"> -->
	<!-- Known issue in Chrome; can ignore the console warning -->
	<!-- https://github.com/sveltejs/svelte/issues/8446#issuecomment-2213484541 -->
	<!-- <input
												class="input"
												type="color"
												bind:value={settingsColors[getColorKey(color.value, shade.toString())]}
												oninput={() => genColorRamp(showAllShades, color.value)}
											/>
										</td>
									</tr>
								{/each}
							</tbody>
						</table> -->
	<!-- Light/Dark Contrast -->
	<!-- <div class="space-y-4">
							<div class="grid grid-cols-2 gap-4"> -->
	<!-- --color-(color)-contrast-light -->
	<!-- <label class="label space-y-2">
									<span class="label-text">Light Contrast</span>
									<div
										class="w-full h-4 border border-surface-200-800 rounded-base"
										style:background={`${settingsColors[getColorKey(color.value, 'contrast-light')]}`}
									></div>
									<select
										class="select"
										name={`--color-${color.value}-contrast-light`}
										bind:value={settingsColors[getColorKey(color.value, 'contrast-light')]}
									>
										<option value="oklch(1 0 0 / 1)">White</option>
										{#each constants.colorNames as colorName}
											<optgroup label={colorName}>
												{#each constants.colorShades as colorShade}
													<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
												{/each}
											</optgroup>
										{/each}
									</select>
								</label> -->
	<!-- --color-surface-contrast-dark -->
	<!-- <label class="label space-y-2">
									<span class="label-text">Dark Contrast</span>
									<div
										class="w-full h-4 border border-surface-200-800 rounded-base"
										style:background={`${settingsColors[getColorKey(color.value, 'contrast-dark')]}`}
									></div>
									<select
										class="select"
										name={`--color-${color.value}-contrast-dark`}
										bind:value={settingsColors[getColorKey(color.value, 'contrast-dark')]}
									>
										<option value="oklch(0 0 0 / 1)">Black</option>
										{#each constants.colorNames as colorName}
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
	</Tabs> -->
</div>
