<script lang="ts">
    import { fade } from 'svelte/transition';

    import { toastStore } from '$lib/Notifications/Stores';
    import Button from '$lib/Button/Button.svelte';

    export let position: string = 'b'; // bottom
    export let variant: string = 'ghost';
    export let duration: number = 100;

    // Base Classes
    const cBaseToast: string = 'bg-primary-500 fixed z-50 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 rounded-xl';
    const cBaseMessage: string = 'text-base max-w-[600px]';

    // Set Position
    let cPosition: string;
    function setPosition(): void {
        switch (position) {
            // Centered
            case('t'): cPosition = 'left-[50%] top-4 translate-x-[-50%] mx-auto'; break;
            case('b'): cPosition = 'left-[50%] bottom-4 translate-x-[-50%] mx-auto'; break;
            // Corners
            case ('tr'): cPosition = 'top-4 right-4'; break;
            case ('tl'): cPosition = 'top-4 left-4'; break;
            case ('br'): cPosition = 'bottom-4 right-4'; break;
            case ('bl'): cPosition = 'bottom-4 left-4'; break;
            default: cPosition = 'left-[50%] top-4 translate-x-[-50%] mx-auto';
        }
    }
    
    // Actions
    function onDismiss(): void {
        toastStore.close();
    }

    // On Init
    setPosition();

    // Reactive Classes
    $: classesToast = `${cBaseToast} ${cPosition}`;
    $: classesMessage = `${cBaseMessage}`;
</script>

{#if $toastStore.length}
<div class="toast {classesToast}" transition:fade|local={{duration}}>

    <!-- Message -->
    <!--  transition:blur|local={{duration}} -->
    <div class="toast-message {classesMessage}">{@html $toastStore[0].message}</div>

    <!-- Action -->
    <nav class="toast-actions">
        <Button {variant} on:click={onDismiss}>Dismiss</Button>
    </nav>
    
</div>
{/if}
