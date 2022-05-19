<script lang="ts">
    import { fly, fade } from 'svelte/transition';

    import { toastStore } from '$lib/Notifications/Stores';
    import Button from '$lib/Button/Button.svelte';

    export let background: string = 'bg-primary-500';
    export let position: string = 'b'; // bottom
    export let variant: string = 'ghost';
    export let duration: number = 250;

    let y: number = 100;

    // Base Classes
    const cBaseToast: string = 'fixed z-50 flex items-center mx-auto py-3 px-4 max-w-[480px] space-x-4 rounded-xl';
    const cBaseMessage: string = 'flex-1 text-base';
    const cBaseActions: string = 'flex-none space-x-2';

    // Set Position
    let cPosition: string;
    switch (position) {
        // Centered
        case('t'): cPosition = 'left-4 right-4 top-4'; y = -100; break;
        case('b'): cPosition = 'left-4 right-4 bottom-4'; break;
        // Corners
        case ('tr'): cPosition = 'top-4 right-4 ml-4'; y = -100; break;
        case ('tl'): cPosition = 'top-4 left-4 mr-4'; y = -100; break;
        case ('br'): cPosition = 'bottom-4 right-4 ml-4'; break;
        case ('bl'): cPosition = 'bottom-4 left-4 mr-4'; break;
        default: cPosition = 'left-4 right-4 bottom-4';
    }

    // Functionality
    function onAction(): void {
        $toastStore[0].button.action();
        toastStore.close();
    }
    function onDismiss(): void {
        toastStore.close();
    }

    // Reactive Classes
    $: classesToast = `${cBaseToast} ${background} ${cPosition}`;
    $: classesMessage = `${cBaseMessage}`;
    $: classesActions = `${cBaseActions}`;
</script>

{#if $toastStore.length}
<div class="toast {classesToast}" transition:fly|local={{y, duration}}>

    <!-- Message -->
    {#key $toastStore[0].message}
    <div class="toast-message {classesMessage}" in:fade={{duration: 250}}>
        {@html $toastStore[0].message}
    </div>
    {/key}

    <!-- Action -->
    <nav class="toast-actions {classesActions}">
        {#if $toastStore[0].button}<Button {variant} on:click={onAction}>{$toastStore[0].button.label}</Button>{/if}
        <Button {variant} on:click={onDismiss}>
            {@html $toastStore[0].button ? '&#10005;' : 'Dismiss'}
        </Button>
    </nav>
    
</div>
{/if}
