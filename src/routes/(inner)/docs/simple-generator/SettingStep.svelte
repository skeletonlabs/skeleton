<script lang="ts">
	import { inputSettings } from "$docs/layouts/DocsThemer/settings";
	import type { FormTheme } from "$docs/layouts/DocsThemer/types";
	import ProgressBar from "$lib/components/ProgressBar/ProgressBar.svelte";
	import SlideToggle from "$lib/components/SlideToggle/SlideToggle.svelte";
	import { toastStore } from "$lib/utilities/Toast/stores";
	import type { ToastSettings } from "$lib/utilities/Toast/types";

    export let theme: FormTheme;
    
    const toastMe = () => {
        const t: ToastSettings = {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            background: 'variant-filled-primary'
        };
        toastStore.trigger(t);
    }
</script>
<section class="card p-4 grid grid-cols-2 gap-4 col-span-2 lg:col-span-1">
    <!-- Fonts -->
    <h3 class="col-span-2" data-toc-ignore>Fonts</h3>
    <label class="label">
        <span>Base</span>
        <select class="select" bind:value={theme.fontBase}>
            {#each inputSettings.fonts as f}<option value={f}>{f}</option>{/each}
        </select>
    </label>
    <label class="label">
        <span>Headings</span>
        <select class="select" bind:value={theme.fontHeadings}>
            {#each inputSettings.fonts as f}<option value={f}>{f}</option>{/each}
        </select>
    </label>
    <!-- Text Color -->
    <h3 class="col-span-2" data-toc-ignore>Text Color</h3>
    <label class="label">
        <span>Light Mode</span>
        <select class="select" bind:value={theme.textColorLight}>
            {#each inputSettings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
        </select>
    </label>
    <label class="label">
        <span>Dark Mode</span>
        <select class="select" bind:value={theme.textColorDark}>
            {#each inputSettings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
        </select>
    </label>
    <!-- Border Radius -->
    <h3 class="col-span-2" data-toc-ignore>Border Radius</h3>
    <label class="label">
        <span>Base</span>
        <select class="select" bind:value={theme.roundedBase}>
            {#each inputSettings.rounded as r}<option value={r}>{r}</option>{/each}
            <option value="9999px">9999px</option>
        </select>
    </label>
    <label class="label">
        <span>Container</span>
        <select class="select" bind:value={theme.roundedContainer}>
            {#each inputSettings.rounded as r}<option value={r}>{r}</option>{/each}
        </select>
    </label>
    <!-- Border Size -->
    <h3 class="col-span-2" data-toc-ignore>Border Size</h3>
    <label class="label">
        <span>Base</span>
        <select class="select" bind:value={theme.borderBase}>
            {#each inputSettings.border as b}<option value={b}>{b}</option>{/each}
        </select>
    </label>
</section>
<!-- Examples -->
<section class="card variant-glass p-4 space-y-8 flex flex-col">
    <div class="flex justify-around">
        <div class="grid grid-cols-2 gap-4">
            <button class="btn variant-filled-primary">Filled</button>
            <button class="btn variant-ghost-secondary">Ghost</button>
            <button class="btn variant-soft-tertiary">Soft</button>
            <button class="btn variant-ringed-success">Ringed</button>
            <button class="btn variant-glass-error">Glass</button>
        </div>
        <span class="divider-vertical h-30" />
        <div class="grid grid-cols-2 gap-4 place-items-center">
            <span class="badge variant-filled-primary">Filled</span>
            <span class="badge variant-ghost-secondary">Ghost</span>
            <span class="badge variant-soft-tertiary">Soft</span>
            <span class="badge variant-ringed-success">Ringed</span>
            <span class="badge variant-glass-error">Glass</span>
        </div>
        <span class="divider-vertical h-30" />
        <div class="flex flex-col justify-around">
            <SlideToggle name="exampeSliderThree" active={`bg-primary-500`} />
            <SlideToggle name="exampeSliderThree" active={`bg-primary-500`} checked />
        </div>
        <span class="divider-vertical h-30" />
        <div class="card variant-filled-primary">
            <p class="m-auto">Example Primary Card</p>
        </div>
        <span class="divider-vertical h-30"/>
        <div class="flex flex-col justify-center">
            <button class="btn variant-filled-primary" on:click={toastMe}>Toast me!</button>
        </div>
    </div>        
    <hr class="opacity-50" />
    <div class="grid grid-cols-1 gap-4">
        <ProgressBar meter="bg-primary-500" track="bg-primary-500/20" value={66} max={100} />
        <aside class="alert variant-filled-primary">
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