<script lang="ts">
	import { generateA11yOnColor, generatePalette, getPassReport, hexValueIsValid } from "$docs/layouts/DocsThemer/colors";
	import { inputSettings } from "$docs/layouts/DocsThemer/settings";
	import ProgressBar from "$lib/components/ProgressBar/ProgressBar.svelte";
	import SlideToggle from "$lib/components/SlideToggle/SlideToggle.svelte";
	import { popup } from "$lib/utilities/Popup/popup";
	import type { PopupSettings } from "$lib/utilities/Popup/types";
	import { toastStore } from "$lib/utilities/Toast/stores";
	import type { ToastSettings } from "$lib/utilities/Toast/types";
	import EditableSwatch from "./EditableSwatch.svelte";
	import type { ColorSettings, PassReport } from "./types";

    export let color: ColorSettings;

    const tooltipSettings: Omit<PopupSettings, 'target'> = {
		event: 'hover',
		placement: 'top'
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

    const toastMe = () => {
        const t: ToastSettings = {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            background: `variant-filled-${color.key}`
        };
        toastStore.trigger(t);
    }

    $: contrastReport = getContrastReport(color);
</script>

<div class="flex flex-col">
    <p>Click singular color swatches to edit them.</p>
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
            <EditableSwatch bind:color={color}/>
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
    <!-- Examples -->
    <section class="card variant-glass p-4 space-y-8 flex flex-col">
        <div class="flex justify-around">
            <div class="grid grid-cols-2 gap-4">
                <button class={`btn variant-filled-${color.key}`}>Filled</button>
                <button class={`btn variant-ghost-${color.key}`}>Ghost</button>
                <button class={`btn variant-soft-${color.key}`}>Soft</button>
                <button class={`btn variant-ringed-${color.key}`}>Ringed</button>
                <button class={`btn variant-glass-${color.key}`}>Glass</button>
            </div>
            <span class="divider-vertical h-30" />
            <div class="grid grid-cols-2 gap-4 place-items-center">
                <span class={`badge variant-filled-${color.key}`}>Filled</span>
                <span class={`badge variant-ghost-${color.key}`}>Ghost</span>
                <span class={`badge variant-soft-${color.key}`}>Soft</span>
                <span class={`badge variant-ringed-${color.key}`}>Ringed</span>
                <span class={`badge variant-glass-${color.key}`}>Glass</span>
            </div>
            <span class="divider-vertical h-30" />
            <div class="flex flex-col justify-around">
                <SlideToggle name="exampeSliderThree" active={`bg-${color.key}-500`} />
                <SlideToggle name="exampeSliderThree" active={`bg-${color.key}-500`} checked />
            </div>
            <span class="divider-vertical h-30" />
            <div class={`card variant-filled-${color.key}`}>
                <p class="m-auto">Example {color.label} Card</p>
            </div>
            <span class="divider-vertical h-30"/>
            <div class="flex flex-col justify-center">
                <button class={`btn variant-filled-${color.key}`} on:click={toastMe}>Toast me!</button>
            </div>
        </div>        
        <hr class="opacity-50" />
        <div class="grid grid-cols-1 gap-4">
            <ProgressBar meter={`bg-${color.key}-500`} track={`bg-${color.key}-500/20`} value={66} max={100} />
            <aside class={`alert variant-filled-${color.key}`}>
                <i class="fa-solid fa-triangle-exclamation text-4xl" />
                <div class="alert-message">
                    <h3>Example Alert</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                </div>
                <div class="alert-actions">
                    <button class="btn variant-filled">Action</button>
                    <button class="btn-icon variant-filled"><i class="fa-solid fa-xmark" /></button>
                </div>
            </aside>
        </div>
    </section>
</div>