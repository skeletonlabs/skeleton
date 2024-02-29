<script lang="ts">
	// Icons
	import IconSun from 'lucide-svelte/icons/sun';
	import IconMoon from 'lucide-svelte/icons/moon';
	// Stores & Utils
	import { storeFormColors, storeFormBackgrounds } from '$lib/stores.svelte';
	import { colorNames, colorShades } from '$lib/constants';
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
					<div class="grid grid-cols-[auto_1fr] items-center gap-2">
						<input class="input" type="color" bind:value={storeFormColors[color].seed} />
						<input class="input" type="text" bind:value={storeFormColors[color].seed} tabindex="-1" />
					</div>
				</label>
				<!-- Contrast Breakpoint -->
				<div class="grid grid-cols-[80px_auto_1fr_auto_80px] items-center gap-2">
					<select class="select" bind:value={storeFormColors[color].contrastLight}>
						{#each colorNames as colorName}
							<optgroup label={colorName}>
								{#each colorShades as shade}
									<option value="var(--color-{colorName}-{shade})">{shade}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
					<IconSun size={16} />
					<input
						class="input"
						type="range"
						name="contrast"
						bind:value={storeFormColors[color].breakpoint}
						min="0"
						max="10"
						step="1"
					/>
					<IconMoon size={16} />
					<select class="select" bind:value={storeFormColors[color].contrastDark}>
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
				<div class="size-10 rounded" style:background="rgb({storeFormBackgrounds.bodyBackgroundColor})"></div>
				<select class="select" bind:value={storeFormBackgrounds.bodyBackgroundColor}>
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
				<div class="size-10 rounded" style:background="rgb({storeFormBackgrounds.bodyBackgroundColorDark})"></div>
				<select class="select" bind:value={storeFormBackgrounds.bodyBackgroundColorDark}>
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
