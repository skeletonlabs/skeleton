<script lang="ts">
    import { afterUpdate } from "svelte";
    import { fade } from 'svelte/transition';

    let visible: boolean = false;

    export let position: string = 'top';
    export let background: string = 'bg-black dark:bg-white';
    export let color: string = 'text-white dark:text-black';
    export let width: string = 'w-auto';
    export let whitespace: string = 'whitespace-nowrap';
    export let rounded: string = 'rounded';
    export let duration: number = 100; // ms

    // Base Styles
    const cBaseTooltip: string = 'relative inline-flex justify-center items-center';
    const cBasePopup: string = 'flex absolute z-10 drop-shadow';
    const cBaseMessage: string = 'text-xs px-3 py-2';
    const cBaseArrow: string = 'h-2 w-2 -rotate-45';

    // Set Position
    let cPosition: string;
    function setPosition(): void {
        switch (position) {
            case ('left'): cPosition = 'left-0 -translate-x-full flex-row items-center'; break;
            case ('right'): cPosition = 'right-0 translate-x-full flex-row-reverse items-center'; break;
            case ('bottom'): cPosition = 'bottom-0 translate-y-full flex-col-reverse items-center'; break;
            default: cPosition = 'top-0 -translate-y-full flex-col items-center'; // top
        }
    }

    // Set Arrow Position
    let cArrowPosition: string;
    function setArrowPosition(): void {
        switch (position) {
            case ('left'): cArrowPosition = 'translate-x-[-50%]'; break;
            case ('right'): cArrowPosition = 'translate-x-[50%]'; break;
            case ('bottom'): cArrowPosition = 'translate-y-[50%]'; break;
            default: cArrowPosition = 'translate-y-[-50%]'; // top
        }
    }

    // Event Handlers
    function showTooltip(): void { visible = true; }
    function hideTooltip(): void { visible = false; }

    // On Init
    setPosition();
    setArrowPosition();

    // After Update
    afterUpdate(() => {
        setPosition();
        setArrowPosition();
    });

    // Reactive Classes
    $: classesTooltip = `${cBaseTooltip}`;
    $: classesPopup = `${cBasePopup} ${cPosition}`;
    $: classesMessage = `${cBaseMessage} ${background} ${color} ${width} ${whitespace} ${rounded}`;
    $: classesArrow = `${cBaseArrow} ${cArrowPosition} ${background}`;
</script>

<div class="tooltip {classesTooltip}">

    <!-- Popup -->
    {#if $$slots.message && visible}
    <div class="popup {classesPopup}" in:fade="{{duration}}" out:fade="{{duration}}">
        <div class="message {classesMessage}"><slot name="message" /></div>
        <div class="arrow {classesArrow}"></div>
    </div>
    {/if}
    
    <!-- Slot: Content -->
    {#if $$slots.content}
    <div on:mouseenter={showTooltip} on:mouseleave={hideTooltip}>
        <slot name="content" />
    </div>
    {/if}

</div>
