<script lang="ts">
	import ProgressBar from "$lib/components/ProgressBar/ProgressBar.svelte";
	import SlideToggle from "$lib/components/SlideToggle/SlideToggle.svelte";
	import { toastStore } from "$lib/utilities/Toast/stores";
	import type { ToastSettings } from "$lib/utilities/Toast/types";


    export let color: string = 'primary';
    export let colorLabel: string = 'Primary';
    export let buttons: Array<{class: string, label: string}> = [
        { class: `btn variant-filled-${color}`, label: 'Filled'},
        { class: `btn variant-ghost-${color}`, label: 'Ghost'},
        { class: `btn variant-soft-${color}`, label: 'Soft'},
        { class: `btn variant-ringed-${color}`, label: 'Ringed'},
        { class: `btn variant-glass-${color}`, label: 'Glass'},
    ];
    export let badges: Array<{class: string, label: string}> = [
        { class: `badge variant-filled-${color}`, label: 'Filled'},
        { class: `badge variant-ghost-${color}`, label: 'Ghost'},
        { class: `badge variant-soft-${color}`, label: 'Soft'},
        { class: `badge variant-ringed-${color}`, label: 'Ringed'},
        { class: `badge variant-glass-${color}`, label: 'Glass'},
    ]
    export let progressColors = [color];
    export let alertColors = [color];

    const toastMe = () => {
        const t: ToastSettings = {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            background: `variant-filled-${color}`
        };
        toastStore.trigger(t);
    }

    $: checked = true;
    $: unchecked = !checked;
</script>

<section class="card variant-glass p-4 space-y-8 flex flex-col">
    <div class="flex justify-around">
        <div class="grid grid-cols-2 gap-4">
            {#each  buttons as button}
                <button class={button.class}>{button.label}</button>
            {/each}
        </div>
        <span class="divider-vertical h-30" />
        <div class="grid grid-cols-2 gap-4 place-items-center">
            {#each  badges as badge}
                <span class={badge.class}>{badge.label}</span>
            {/each}
        </div>
        <span class="divider-vertical h-30" />
        <div class="flex flex-col justify-around">
            <SlideToggle name="exampeSliderThree" active={`bg-${color}-500`} bind:checked={checked}/>
            <SlideToggle name="exampeSliderThree" active={`bg-${color}-500`} bind:checked={unchecked} />
        </div>
        <span class="divider-vertical h-30" />
        <div class={`card variant-filled-${color}`}>
            <p class="m-auto">Example {colorLabel} Card</p>
        </div>
        <span class="divider-vertical h-30"/>
        <div class="flex flex-col justify-center">
            <button class={`btn variant-filled-${color}`} on:click={toastMe}>Toast me!</button>
        </div>
    </div>        
    <hr class="opacity-50" />
    <div class="grid grid-cols-1 gap-4">
        {#each progressColors as progressColor, i}
            <ProgressBar meter={`bg-${progressColor}-500`} track={`bg-${progressColor}-500/20`} value={Math.round((100 / (progressColors.length + 1)) * (progressColors.length - i))} max={100} />
        {/each}
        {#each alertColors as alertColor}
            <aside class={`alert variant-filled-${alertColor}`}>
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
        {/each}
    </div>
</section>