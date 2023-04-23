<script lang="ts">
	import ProgressBar from "$lib/components/ProgressBar/ProgressBar.svelte";
	import SlideToggle from "$lib/components/SlideToggle/SlideToggle.svelte";
	import { toastStore } from "$lib/utilities/Toast/stores";
	import type { ToastSettings } from "$lib/utilities/Toast/types";

    let variants: Array<{class: string, label: string}> = [
        { class: `variant-filled-primary`, label: 'Filled'},
        { class: `variant-ghost-secondary`, label: 'Ghost'},
        { class: `variant-soft-tertiary`, label: 'Soft'},
        { class: `variant-ringed-success`, label: 'Ringed'},
        { class: `variant-glass-warning`, label: 'Glass'},
        { class: `variant-glass-error`, label: 'Glass'},
    ];
    let colors: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error']

    const toastMe = (color: string) => {
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
        <div class="grid grid-cols-3 gap-4">
            {#each variants as button}
                <button class={`btn ${button.class}`}>{button.label}</button>
            {/each}
        </div>
        <span class="divider-vertical h-30" />
        <div class="grid grid-cols-3 gap-4 place-items-center">
            {#each variants as badge}
                <span class={`badge ${badge.class}`}>{badge.label}</span>
            {/each}
        </div>
        <span class="divider-vertical h-30" />
        <div class="flex flex-col justify-around">
            <SlideToggle name="exampeSliderThree" active={`bg-primary-500`} bind:checked={checked}/>
            <SlideToggle name="exampeSliderThree" active={`bg-primary-500`} bind:checked={unchecked} />
        </div>
        <span class="divider-vertical h-30" />
        <div class={`card variant-filled-primary`}>
            <p class="m-auto">Example Primary Card</p>
        </div>
        <span class="divider-vertical h-30"/>
        <div class="grid grid-cols-3 gap-4 place-items-center">
            {#each colors as color}
                <button class={`btn variant-filled-${color}}`} on:click={() => toastMe(color)}>Toast me!</button>
            {/each}
        </div>
    </div>        
    <hr class="opacity-50" />
    <div class="grid grid-cols-1 gap-4">
        {#each colors as progressColor, i}
            <ProgressBar meter={`bg-${progressColor}-500`} track={`bg-${progressColor}-500/20`} value={Math.round((100 / (progressColors.length + 1)) * (progressColors.length - i))} max={100} />
        {/each}
        {#each colors as alertColor}
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