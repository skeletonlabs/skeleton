<script lang="ts">
    import { afterUpdate } from 'svelte';
    import { fade } from 'svelte/transition';

    let visible: boolean = false;
    
    export let background: string = 'bg-black dark:bg-white';
    export let color: string = 'text-white dark:text-black';
    export let width: string = 'w-auto';
    export let whitespace: string = 'whitespace-nowrap';
    export let duration: number = 150; // ms
    
    // Base Classes
    const cBase: string = 'inline-flex flex-col items-center relative';
    const cTooltip: string = 'absolute z-10 origin-bottom-left -translate-y-full pb-1';
    let cBaseMessage: string = 'text-xs px-3 py-2 rounded';
    let cBaseArror: string = 'h-2 w-2 -rotate-45 transform origin-top-left mx-auto';

    function setBackground(): void {
        cBaseMessage += ` ${background}`;
        cBaseArror += ` ${background}`;
    }

    // Event Handlers
    function showTooltip(): void { visible = true; }
    function hideTooltip(): void { visible = false; }

    // Updates
    afterUpdate(() => {
        setBackground();
    });

    // Reactive Classes
    $: classesBase = `${cBase}`;
    $: classesTooltip = `${cTooltip} ${color} ${width} ${whitespace}`;
    $: classesMessage = `${cBaseMessage}`;
</script>

<div class="tooltip {classesBase} {$$props.class}">

    <!-- Tooltip -->
    {#if $$slots.message && visible}
    <div
        class="tooltip {classesTooltip}"
        in:fade="{{duration}}" out:fade="{{duration}}"
    >
        <!-- Message -->
        <div class="message {classesMessage}"><slot name="message" /></div>
        <!-- Arrow -->
        <div class="arrow {cBaseArror}"></div>
    </div>
    {/if}
    
    <!-- Slot: Content -->
    <div on:mouseenter={showTooltip} on:mouseleave={hideTooltip}>
        {#if $$slots.content}<slot name="content" />{/if}
    </div>

</div>
