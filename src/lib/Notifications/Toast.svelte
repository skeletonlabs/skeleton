<script lang="ts">
    import { fly, fade } from 'svelte/transition';

    import { toastStore } from '$lib/Notifications/Stores';
    import Button from '$lib/Button/Button.svelte';

    export let background: string = 'bg-primary-500';
    export let position: string = 'b'; // bottom
    export let variant: string = 'ghost';
    export let duration: number = 100;

    let y: number = 100;

    // Base Classes
    const cBaseToast: string = 'fixed z-50 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 py-3 px-4 rounded-xl';
    const cBaseMessage: string = 'text-base max-w-[600px]';

    // Set Position
    let cPosition: string;
    function setPosition(): void {
        switch (position) {
            // Centered
            case('t'): cPosition = 'left-[50%] top-4 translate-x-[-50%] mx-auto'; y = -100; break;
            case('b'): cPosition = 'left-[50%] bottom-4 translate-x-[-50%] mx-auto'; break;
            // Corners
            case ('tr'): cPosition = 'top-4 right-4'; y = -100; break;
            case ('tl'): cPosition = 'top-4 left-4'; y = -100; break;
            case ('br'): cPosition = 'bottom-4 right-4'; break;
            case ('bl'): cPosition = 'bottom-4 left-4'; break;
            default: cPosition = 'left-[50%] top-4 translate-x-[-50%] mx-auto';
        }
    }

    // Functionality
    function onAction(): void {
        $toastStore[0].button.action();
        toastStore.close();
    }
    function onDismiss(): void {
        toastStore.close();
    }

    // On Init
    setPosition();

    // Reactive Classes
    $: classesToast = `${cBaseToast} ${background} ${cPosition}`;
    $: classesMessage = `${cBaseMessage}`;
</script>

{#if $toastStore.length}
<div class="toast {classesToast}" transition:fly|local={{y, duration}}>

    <!-- Message -->
    <div class="toast-message {classesMessage}">
        {@html $toastStore[0].message}
    </div>

    <!-- Action -->
    <nav class="toast-actions space-x-2">
        {#if $toastStore[0].button}<Button {variant} on:click={onAction}>{$toastStore[0].button.label}</Button>{/if}
        <Button {variant} on:click={onDismiss}>
            {@html $toastStore[0].button ? '&#10005;' : 'Dismiss'}
        </Button>
    </nav>
    
</div>
{/if}
