<script lang="ts">
	import { generateA11yOnColor, hexToTailwindRgbString } from '$docs/layouts/DocsThemer/colors';
	import { swatchColorClasses } from '$docs/layouts/DocsThemer/settings';
	import type { ColorSettings } from './types';

	/** Pass the color */
	export let color: ColorSettings;

    const updateColor = (shade: number, value: string) => {
        console.log(`shade: ${shade} value:${value}`);
        console.log(`previous value: `, color.palette[shade]);
        color.palette[shade] = {
            hex: value,
            rgb: hexToTailwindRgbString(value),
            on: shade === 500 ? generateA11yOnColor(value) : color.palette[shade].on
        }
        color = color;
    }
</script>

<div class="grid grid-cols-11 gap-0">
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
