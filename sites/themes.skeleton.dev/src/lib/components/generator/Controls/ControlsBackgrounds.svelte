<script lang="ts">
	// Constants
	import * as constants from '$lib/constants/generator';
	// State
	import { settingsBackgrounds } from '$lib/state/generator.svelte';
</script>

<div class="space-y-4">
	<p class="opacity-60">Set the body background color for either mode.</p>
	<!-- --body-background-color -->
	<label class="label">
		<span class="label-text">Light Mode Background</span>
		<div class="input-group grid-cols-[auto_1fr_auto] divide-x divide-surface-200-800">
			<div class="input-group-cell" style:background={`rgba(${settingsBackgrounds['--body-background-color']})`}></div>
			<select name="--body-background-color" bind:value={settingsBackgrounds['--body-background-color']}>
				<option value="255 255 255">White</option>
				{#each constants.colorNames as colorName}
					<optgroup label={colorName}>
						{#each constants.colorShades as colorShade}
							<option value={`var(--color-${colorName}-${colorShade})`}>{`${colorName}-${colorShade}`}</option>
						{/each}
					</optgroup>
				{/each}
			</select>
		</div>
	</label>
	<!-- --body-background-color-dark -->
	<label class="label">
		<span class="label-text">Dark Mode Background</span>
		<div class="input-group grid-cols-[auto_1fr_auto] divide-x divide-surface-200-800">
			<div class="input-group-cell" style:background={`rgba(${settingsBackgrounds['--body-background-color-dark']})`}></div>
			<select name="--body-background-color-dark" bind:value={settingsBackgrounds['--body-background-color-dark']}>
				<option value="0 0 0">Black</option>
				{#each constants.colorNames as colorName}
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
