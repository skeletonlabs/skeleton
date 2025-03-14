<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsBackgrounds } from '$lib/state/generator.svelte';
</script>

<div class="space-y-4">
	<p class="opacity-60">Set the body background color for either mode.</p>
	<!-- --body-background-color -->
	<label class="label space-y-2">
		<span class="label-text">Light Mode Background</span>
		<div class="w-full h-8 border border-surface-200-800 rounded-base" style:background="var(--body-background-color)"></div>
		<select class="select" name="--body-background-color" bind:value={settingsBackgrounds['--body-background-color']}>
			<option value="oklch(1 0 0 / 1)">White</option>
			{#each constants.colorNames as colorName}
				<optgroup label={colorName}>
					{#each constants.colorShades as colorShade}
						<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
					{/each}
				</optgroup>
			{/each}
		</select>
	</label>
	<!-- --body-background-color-dark -->
	<label class="label space-y-2">
		<span class="label-text">Dark Mode Background</span>
		<div class="w-full h-8 border border-surface-200-800 rounded-base" style:background="var(--body-background-color-dark)"></div>
		<select class="select" name="--body-background-color-dark" bind:value={settingsBackgrounds['--body-background-color-dark']}>
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
