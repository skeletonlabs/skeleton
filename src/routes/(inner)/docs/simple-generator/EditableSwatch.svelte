<script lang="ts">
	import { generateA11yOnColor, hexToTailwindRgbString } from '$docs/layouts/DocsThemer/colors';
	import type { ColorSettings } from './types';

	/** Pass the color */
	export let color: ColorSettings;

    const updateColor = (shade: string, value: string) => {
        color.palette[shade] = {
            hex: value,
            rgb: hexToTailwindRgbString(value),
            on: generateA11yOnColor(value)
        }
        if(shade === '500') {
            color.hex = value;
            color.on = color.palette[shade].on;
        }
        color = color;
    }
</script>

<div class="grid grid-cols-11 gap-0 min-w-[480px]">
	{#each Object.keys(color.palette) as shade}
		<div class="grid grid-rows-[1fr_40px] text-center">
			<!-- Label -->
			<div class="text-surface-700 dark:text-surface-300 text-sm">
				{shade}
			</div>
			<!-- Swatch -->
            <input 
                class="input !rounded-none" 
                type="color"
                value={color.palette[shade].hex} 
                on:change={(event) => {updateColor(shade, event?.target?.value)}} />
		</div>
	{/each}
</div>
