<script lang="ts">
	import { generateA11yOnColor, generatePalette, getPassReport, hexValueIsValid,hexToTailwindRgbString } from "$docs/layouts/DocsThemer/colors";
	import { inputSettings, swatchColorClasses } from "$docs/layouts/DocsThemer/settings";
	import type { ColorSettings, PassReport } from '../../routes/(inner)/docs/simple-generator/types';
	import { popup } from "$lib/utilities/Popup/popup";
	import type { PopupSettings } from "$lib/utilities/Popup/types";

	/** Pass the color */
	export let color: ColorSettings;

    const tooltipSettings: Omit<PopupSettings, 'target'> = {
		event: 'hover',
		placement: 'top'
	};

    let colorSelectionSettings: PopupSettings = {
        event: 'click',
        target: 'needs-to-be-overwritten',
        placement: 'bottom',
        closeQuery: ''
    };    

    const randomize = (): void => {
			color.hex = '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
            color.on = generateA11yOnColor(color.hex);
            color.palette = generatePalette(color.hex);
            color = color;
	}
    
    const regeneratePalette = (): void => {
        if(hexValueIsValid(color.hex)) {
            color.on = generateA11yOnColor(color.hex);
            color.palette = generatePalette(color.hex);
        }
    }

    const getContrastReport = (newColor: ColorSettings): PassReport => {
        return getPassReport(newColor.on, newColor.hex);
    }

    const colorEventChangeHandlerFactory = (shade: string) => {
        return (event: Event & {currentTarget: HTMLInputElement & EventTarget}) => {
            updateColor(shade, (event.target as HTMLInputElement).value);
        }
    }

    const updateColor = (shade: string, value: string) => {
        if(hexValueIsValid(value)) {
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
    }
    
    $: contrastReport = getContrastReport(color);
</script>
<div class="flex">
    <button class="btn variant-ghost-surface m-4" on:click={randomize}>
        <i class="fa-solid fa-dice mr-1"></i> Randomize
    </button>
    <label class="label">
        <span>{color.label}</span>
        <div class="grid grid-cols-[auto_1fr] gap-4 place-items-end">
            <input class="input" type="color" bind:value={color.hex} on:change={regeneratePalette}/>
            <input class="input" type="text" bind:value={color.hex} placeholder="#BADA55"/>
        </div>
    </label>
    <div class="flex-1 m-4">
        <div class="grid grid-cols-11 gap-0 min-w-[480]">
            {#each Object.entries(swatchColorClasses[color.key]) as [shade, shadeClasses]}
                <div class="grid grid-rows-[1fr_40px] text-center">
                    <!-- Label -->
                    <div class="text-surface-700 dark:text-surface-300 text-sm">
                        {shade}
                    </div>
                    <!-- Swatch -->
                    <button  
                        class={`btn !rounded-none ${shadeClasses}`}
                        type="button"
                        use:popup={{...colorSelectionSettings, target: `select-shade-${shade}`}}
                    />
                    <div class="card variant-filled p-4 !bg-white z-10" data-popup={`select-shade-${shade}`}>
                        <div class="grid grid-cols-[auto_1fr] gap-4 place-items-end">
                            <input 
                                class="input" 
                                type="color"
                                value={color.palette[shade].hex}
                                on:change={regeneratePalette}
                                on:change={colorEventChangeHandlerFactory(shade)} />
                            <input 
                                class="input variant-filled"
                                type="text"
                                placeholder="#BADA55"
                                value={color.palette[shade].hex}
                                on:change={colorEventChangeHandlerFactory(shade)}/>
                        </div>
                        <div class="arrow variant-filled" />
                    </div>
                </div>
            {/each}
        </div>        
    </div>
    <div class="input-group input-group-divider grid-cols-[1fr_auto] max-w-xs m-4">
        <!-- Select -->
        <select bind:value={color.on}>
            {#each inputSettings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
        </select>
        <!-- Badge -->
        <div
            class="input-group-shim !px-3"
            use:popup={{ ...tooltipSettings, ...{ target: 'popup'} }}
            class:!text-stone-900={contrastReport.fails}
            class:!bg-red-500={contrastReport.fails}
            class:!text-zinc-900={contrastReport.largeAA}
            class:!bg-amber-500={contrastReport.largeAA}
            class:!text-slate-900={contrastReport.smallAAA || contrastReport.smallAA}
            class:!bg-green-500={contrastReport.smallAAA || contrastReport.smallAA}
        >
            {@html contrastReport.report.emoji}
        </div>
        <!-- Popup -->
        <div
            data-popup="popup"
            class="text-xs card variant-filled p-2 whitespace-nowrap"
            class:!variant-filled-red-500={contrastReport.fails}
            class:!variant-filled-amber-500={contrastReport.largeAA}
            class:!variant-filled-green-500={contrastReport.smallAAA || contrastReport.smallAA}
        >
            {contrastReport.report.note}
            <!-- Arrow -->
            <div class="arrow variant-filled" />
        </div>
    </div>
</div>

