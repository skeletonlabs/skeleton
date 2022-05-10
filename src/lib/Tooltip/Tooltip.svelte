<script lang="ts">
    import { afterUpdate } from 'svelte';
    import { fade } from 'svelte/transition';

    let visible: boolean = false;

    export let background: string = 'bg-black dark:bg-white';
    export let color: string = 'text-white dark:text-black';
    export let width: string = 'w-auto';
    export let whitespace: string = 'whitespace-nowrap';
    export let rounded: string = 'rounded';
    export let duration: number = 150; // ms
    
    // Base Classes
    const cBaseTooltip: string = 'inline-flex flex-col items-center relative';
    const cBasePopup: string = 'absolute z-10 origin-bottom-left -translate-y-full pb-1 drop-shadow';
    let cBaseMessage: string = 'text-xs px-3 py-2';
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
    $: classesTooltip = `${cBaseTooltip}`;
    $: classesPopup = `${cBasePopup} ${color} ${width} ${whitespace}`;
    $: classesMessage = `${cBaseMessage} ${rounded}`;
</script>

<div class="tooltip {classesTooltip} {$$props.class}" data-testid="tooltip">

    <!-- Tooltip -->
    {#if $$slots.message && visible}
    <div
        class="popup {classesPopup}" data-testid="popup"
        in:fade="{{duration}}" out:fade="{{duration}}"
    >
        <!-- Message -->
        <div class="message {classesMessage}" data-testid="message"><slot name="message" /></div>
        <!-- Arrow -->
        <div class="arrow {cBaseArror}"></div>
    </div>
    {/if}
    
    <!-- Slot: Content -->
    <div data-testid="content" on:mouseenter={showTooltip} on:mouseleave={hideTooltip}>
        {#if $$slots.content}<slot name="content" />{/if}
    </div>

</div>
