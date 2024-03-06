<script lang="ts">
	// Icons
	import IconSun from 'lucide-svelte/icons/sun';
	import IconMoon from 'lucide-svelte/icons/moon';
	import Sprout from 'lucide-svelte/icons/sprout';
	import Dices from 'lucide-svelte/icons/dices';
	// State & Utils
	import { stateFormColors, stateFormBackgrounds } from '$lib/state.svelte';
	import { colorNames, colorShades } from '$lib/constants';
	// Generator
	import { seedHighLowColors, genRandomSeed } from '$lib/generator.svelte';

	// Local
	const shadeLabels = ['High', 'Mids', 'Lows'];

	function onSeedButton(colorName: string) {
		let colorSeed = prompt(
			'Provide a hex color value. This will be used to populate the high, medium, and low values auto-magically.'
		);
		if (!colorSeed) return;
		seedHighLowColors(colorName, colorSeed || '');
	}
</script>

<div class="space-y-4 md:space-y-8">
	<header>
		<h2 class="h2">Colors</h2>
		<p class="opacity-60">Define the palette and contrast tones.</p>
	</header>
	<!-- Palette -->
	<fieldset class="space-y-4 md:space-y-8">
		{#each colorNames as color}
			<div class="grid grid-cols-1 gap-4">
				<!-- Core Color -->
				<div class="label">
					<header class="grid grid-cols-[1fr_auto_auto] gap-2 items-center mb-2">
						<p class="font-bold capitalize">{color}</p>
						<button
							class="btn preset-outlined-surface-200-800"
							onclick={() => onSeedButton(color)}
							title="Seed a Color"
						>
							<Sprout size={16} />
						</button>
						<button
							class="btn preset-outlined-surface-200-800"
							onclick={() => genRandomSeed(color)}
							title="Use Random Color"
						>
							<Dices size={16} />
						</button>
					</header>
					<!-- Shades -->
					<div class="space-y-2">
						{#each stateFormColors[color].seeds as shade, i}
							<div class="grid grid-cols-[auto_auto_1fr] items-center gap-2">
								<!-- Label -->
								<label class="label-text !m-0" for="">{@html shadeLabels[i]}</label>
								<!-- Color Picker -->
								<input class="input" type="color" bind:value={shade} />
								<!-- Text Field -->
								<input class="input" type="text" bind:value={shade} />
							</div>
						{/each}
					</div>
				</div>
				<div class="grid grid-cols-3 items-center gap-4">
					<!-- Contrast Dark -->
					<div class="input-group grid-cols-[auto_1fr]">
						<div class="input-group-cell !pr-0">
							<IconMoon size={16} />
						</div>
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
					</div>
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
					<!-- Contrast Light -->
					<div class="input-group grid-cols-[auto_1fr]">
						<div class="input-group-cell !pr-0">
							<IconSun size={16} />
						</div>
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
			</div>
		{/each}
	</fieldset>

	<!-- Backgrounds -->
	<fieldset class="space-y-4 md:space-y-8">
		<header>
			<h3 class="h3">Backgrounds</h3>
			<p class="opacity-60">Define background styles for light and dark mode.</p>
		</header>
		<!-- Base Color -->
		<label class="label">
			<span class="label-text">Base Color</span>
			<div class="input-group grid-cols-[auto_1fr]">
				<div class="input-group-cell">
					<div class="size-5 rounded-full" style:background="rgb({stateFormBackgrounds.bodyBackgroundColor})"></div>
				</div>
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
			<span class="label-text">Dark Mode</span>
			<div class="input-group grid-cols-[auto_1fr]">
				<div class="input-group-cell">
					<div class="size-5 rounded-full" style:background="rgb({stateFormBackgrounds.bodyBackgroundColorDark})"></div>
				</div>
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
