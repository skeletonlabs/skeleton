<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsBackgrounds } from '$lib/state/generator.svelte';
</script>

<div class="space-y-4">
	<p class="opacity-60">Define the theme background colors.</p>
	<!-- --body-background-color -->
	<label class="label">
		<span class="label-text">Light Mode Background Color</span>
		<select class="select" name="--body-background-color" bind:value={settingsBackgrounds['--body-background-color']}>
			<option value="#FFFFFF">White</option>
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
	<label class="label">
		<span class="label-text">Dark Mode Background Color</span>
		<select class="select" name="--body-background-color-dark" bind:value={settingsBackgrounds['--body-background-color-dark']}>
			<option value="#000000">Black</option>
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
