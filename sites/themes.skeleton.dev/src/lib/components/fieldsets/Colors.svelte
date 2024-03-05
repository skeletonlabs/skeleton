<script lang="ts">
	// Icons
	import IconSun from 'lucide-svelte/icons/sun';
	import IconMoon from 'lucide-svelte/icons/moon';
	// State & Utils
	import { stateFormColors, stateFormBackgrounds } from '$lib/state.svelte';
	import { colorNames, colorShades } from '$lib/constants';

	// Local
	const shadeLabels = ['High', 'Mids', 'Lows'];
</script>

<div class="space-y-4 md:space-y-8">
	<!-- Palette -->
	<fieldset class="space-y-4 md:space-y-8">
		<h2 class="h4">Palette</h2>
		{#each colorNames as color}
			<div class="grid grid-cols-1 gap-4">
				<!-- Core Color -->
				<label class="label">
					<div class="label-text capitalize">{color}</div>
					<!-- Shades -->
					<div class="space-y-2">
						{#each stateFormColors[color].seeds as shade, i}
							<div class="grid grid-cols-[auto_auto_1fr] items-center gap-2">
								<small>{@html shadeLabels[i]}</small>
								<!-- Color Picker -->
								<input class="input" type="color" bind:value={shade} />
								<!-- Text Field -->
								<input class="input" type="text" bind:value={shade} />
							</div>
						{/each}
					</div>
				</label>
				<div class="grid grid-cols-[90px_auto_1fr_auto_90px] items-center gap-2">
					<!-- Contrast Dark -->
					<select class="select" bind:value={stateFormColors[color].contrastDark}>
						<option value="0 0 0">Black</option>
						<option value="255 255 255">White</option>
						{#each colorNames as colorName}
							<optgroup label={colorName}>
								{#each colorShades as shade}
									<option value="var(--color-{colorName}-{shade})">{shade}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
					<!-- Icon -->
					<IconSun size={16} />
					<!-- Breakpoint -->
					<input
						class="input"
						type="range"
						name="contrast"
						bind:value={stateFormColors[color].breakpoint}
						min="0"
						max="11"
						step="1"
					/>
					<!-- Icon -->
					<IconMoon size={16} />
					<!-- Contrast Light -->
					<select class="select" bind:value={stateFormColors[color].contrastLight}>
						<option value="0 0 0">Black</option>
						<option value="255 255 255">White</option>
						{#each colorNames as colorName}
							<optgroup label={colorName}>
								{#each colorShades as shade}
									<option value="var(--color-{colorName}-{shade})">{shade}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</div>
			</div>
		{/each}
	</fieldset>

	<!-- --- -->
	<hr class="hr" />

	<!-- Backgrounds -->
	<fieldset class="space-y-4 md:space-y-8">
		<h2 class="h4">Backgrounds</h2>
		<!-- Base Color -->
		<label class="label">
			<div class="label-text">Base Color</div>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<div class="h-10 w-3 rounded" style:background="rgb({stateFormBackgrounds.bodyBackgroundColor})"></div>
				<select class="select" bind:value={stateFormBackgrounds.bodyBackgroundColor}>
					<option value="0 0 0">Black</option>
					<option value="255 255 255">White</option>
					{#each colorNames as colorName}
						<optgroup label={colorName}>
							{#each colorShades as shade}
								<option value="var(--color-{colorName}-{shade})">{colorName}-{shade}</option>
							{/each}
						</optgroup>
					{/each}
				</select>
			</div>
		</label>
		<!-- Dark Mode -->
		<label class="label">
			<div class="label-text">Dark Mode</div>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<div class="h-10 w-3 rounded" style:background="rgb({stateFormBackgrounds.bodyBackgroundColorDark})"></div>
				<select class="select" bind:value={stateFormBackgrounds.bodyBackgroundColorDark}>
					<option value="0 0 0">Black</option>
					<option value="255 255 255">White</option>
					{#each colorNames as colorName}
						<optgroup label={colorName}>
							{#each colorShades as shade}
								<option value="var(--color-{colorName}-{shade})">{colorName}-{shade}</option>
							{/each}
						</optgroup>
					{/each}
				</select>
			</div>
		</label>
	</fieldset>
</div>
