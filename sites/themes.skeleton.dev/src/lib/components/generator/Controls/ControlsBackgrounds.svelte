<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsBackgrounds } from '$lib/state/generator.svelte';
</script>

<div class="space-y-4">
	<p class="opacity-60">Set the body background color for either mode.</p>
	<!-- --color-root-bg-light -->
	<label class="label space-y-2">
		<span class="label-text">Light Mode Background</span>
		<div class="w-full h-8 border border-surface-200-800 rounded-base" style:background="var(--color-root-bg-light)"></div>
		<select class="select" name="--color-root-bg-light" bind:value={settingsBackgrounds['--color-root-bg-light']}>
			<option value="oklch(1 0 0 / 1)">White</option>
			{#each constants.colorNames as colorName (colorName)}
				<optgroup label={colorName}>
					{#each constants.colorShades as colorShade (colorShade)}
						<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
					{/each}
				</optgroup>
			{/each}
		</select>
	</label>
	<!-- --color-root-bg-dark -->
	<label class="label space-y-2">
		<span class="label-text">Dark Mode Background</span>
		<div class="w-full h-8 border border-surface-200-800 rounded-base" style:background="var(--color-root-bg-dark)"></div>
		<select class="select" name="--color-root-bg-dark" bind:value={settingsBackgrounds['--color-root-bg-dark']}>
			<option value="oklch(0 0 0 / 1)">Black</option>
			{#each constants.colorNames as colorName (colorName)}
				<optgroup label={colorName}>
					{#each constants.colorShades as colorShade (colorShade)}
						<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
					{/each}
				</optgroup>
			{/each}
		</select>
	</label>
</div>
