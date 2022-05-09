<!-- TODO: add origin:auto, which auto-positions based on edge of screen -->

<script lang="ts">
    import { afterUpdate } from "svelte";
    import { beforeNavigate } from "$app/navigation";
    import { fade } from 'svelte/transition';

    export let select: boolean = false;
	export let open: boolean = false;
    export let origin: string = 'tl'; // tl | tr | bl | br
    export let duration: number = 100; // ms
    export let disabled: boolean = false;

    // DOM Elements
    let elemMenu: HTMLElement;

    // Base Classes
    const cBaseMenu: string = 'relative inline-block';
    const cBaseContent: string = 'absolute z-10';
    let cOrigin: string;

    // Set Origin
    function setOrigin(): void {
        switch (origin) {
            case ('tr'): cOrigin = 'origin-top-right right-0 mt-2'; break;
            case ('bl'): cOrigin = 'origin-bottom-left top-[-5px] left-0 -translate-y-full'; break;
            case ('br'): cOrigin = 'origin-bottom-right top-[-5px] right-0 -translate-y-full'; break;
            default: cOrigin = 'origin-top-left left-0 mt-2'; // tl
        }
    }

    // Toggle Visibility
    // NOTE: 1ms delay required to avoid race condition for select mode
    function toggle(): void {
        if (disabled) return;
        setTimeout(() => { open = !open; }, 1);
    }

    // Handle click on <body> element
    // Source: https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7
    function handleBodyClick(event: any): void {
        // If menu not open, exit
        if (!open) return;
        // If click is outside menu, close menu
        if (elemMenu && !elemMenu.contains(event.target) && !event.defaultPrevented) {
            open = false;
            return;
        }
        // If select enabled and click is inside menu, close menu
        if (select === true) {
            open = false;
            return;
        }
    }

    // Lifecycle Events
    afterUpdate(() => { setOrigin(); });
    beforeNavigate(() => { open = false; }); // close before navigate

    // Responsive Classes
    $: classesMenu = `${cBaseMenu}`;
    $: classesContent = `${cBaseContent} ${cOrigin}`;
</script>

<svelte:body on:click={handleBodyClick} />

<div class="menu-wrapper {classesMenu}" bind:this={elemMenu}>

    <!-- Trigger -->
    <div class="menu-trigger" on:click={toggle}>
        {#if $$slots.trigger}<slot name="trigger" />{/if}
    </div>

    <!-- Content -->
    {#if open}
	<div
        role="menu" class="menu-content {classesContent}"
        in:fade="{{duration}}" out:fade="{{duration}}"
    >
        {#if $$slots.content}<slot name="content" />{/if}
	</div>
    {/if}

</div>
