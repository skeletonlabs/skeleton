<script lang="ts">
	import ProgressBar from "$lib/components/ProgressBar/ProgressBar.svelte";
	import SlideToggle from "$lib/components/SlideToggle/SlideToggle.svelte";
	import { toastStore } from "$lib/utilities/Toast/stores";
	import type { ToastSettings } from "$lib/utilities/Toast/types";
	import EditableSwatch from "./EditableSwatch.svelte";
	import type { ColorSettings, PassReport } from "./types";

    export let color: ColorSettings;


    const toastMe = () => {
        const t: ToastSettings = {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            background: `variant-filled-${color.key}`
        };
        toastStore.trigger(t);
    }

</script>

<div class="flex flex-col">
    <p>Click singular color swatches to edit them.</p>
    
    <!-- Examples -->
    <section class="card variant-glass p-4 space-y-8 flex flex-col">
        <EditableSwatch bind:color={color}/>
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