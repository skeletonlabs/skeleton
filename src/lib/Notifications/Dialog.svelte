<!-- Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog -->
<script lang="ts">
    import { fade, scale } from 'svelte/transition';

    import Button from '$lib/Button/Button.svelte';
    import { dialogStore } from '$lib/Notifications/Stores';

    // Local Settings
    const anim: any = {
        fade: {duration: 100},
        scale: {duration: 100, opacity: 0, start: 0.5}
    };
    let dialogValue: string;

    // Base Classes
    const cBaseShim: string = 'bg-surface-200/70 dark:bg-surface-900/70 absolute top-0 left-0 right-0 bottom-0 z-[999] flex justify-center items-center p-4';
    const cBaseDialog: string = 'bg-surface-50 dark:bg-surface-700 p-4 w-full max-w-[600px] space-y-4 rounded drop-shadow';
    const cBaseFooter: string = 'flex justify-end space-x-4';

    // Functionality
    function setResult(v: any): void {
        if ($dialogStore[0].result) { $dialogStore[0].result(v); }
    }
    function onDialogCancel(): void {
        setResult(false);
        dialogStore.close();
    }
    function onDialogConfirmSubmit(): void {
        setResult(true);
        dialogStore.close();
    }
    function onDialogPromptSubmit(): void {
        setResult(dialogValue);
        dialogStore.close();
    }

    // Subscribe to dialog updates
    dialogStore.subscribe(dArr => {
        // Set the local dialog value (for prompt)
        if (dArr.length) { dialogValue = dArr[0].value; }
    });

    // Reactive Classes
    $: classesShim = `${cBaseShim}`;
    $: classesDialog = `${cBaseDialog}`;
    $: classesFooter = `${cBaseFooter}`;
</script>

{#if $dialogStore.length}
<!-- Shim -->
<div class="dialog-shim {classesShim}" on:click={onDialogCancel} transition:fade|local={anim.fadeSettings}>

    <!-- Dialog -->
    <div role="dialog" class="dialog {classesDialog}" on:click|preventDefault|stopPropagation transition:scale|local="{anim.scale}">

        <!-- Header > Title -->
        <header class="dialog-header">
            <h3>{@html $dialogStore[0].title}</h3>
        </header>

        <!-- Content -->
        <section class="dialog-content space-y-4">

            <!-- Body -->
            <p class="opacity-60">{@html $dialogStore[0].body}</p>

            <!-- If: Component -->
            {#if $dialogStore[0].component}
            <svelte:component this={$dialogStore[0].component.element} {...$dialogStore[0].component.props}>
                {@html $dialogStore[0].component.slot}
            </svelte:component>
            {/if}

            <!-- If: Prompt -->
            {#if $dialogStore[0].type === 'prompt'}
            <input type="text" bind:value={dialogValue} placeholder="Enter value..." required>
            {/if}

        </section>

        <!-- Footer -->
        <footer class="dialog-footer {classesFooter}">
            <!-- Button: Cancel -->
            <Button variant="ghost" on:click={onDialogCancel}>Cancel</Button>
            <!-- If Confirm - Button: Confirm -->
            {#if $dialogStore[0].type === 'confirm'}<Button variant="filled-primary" on:click={onDialogConfirmSubmit}>Confirm</Button>{/if}
            <!-- If Promopt - Button: Submit -->
            {#if $dialogStore[0].type === 'prompt'}<Button variant="filled-primary" on:click={onDialogPromptSubmit}>Submit</Button>{/if}
        </footer>

    </div>

</div>
{/if}