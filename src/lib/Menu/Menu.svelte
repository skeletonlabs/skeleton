<!-- https://supunkavinda.blog/js-detect-outside-click -->
<!-- <svelte:body on:click={handleOutClick} /> -->
<!-- bind:this={elemMenuContent} -->

<!--
    TODO:
    - Consider "out click" functionality with links above
    - Consider creating an Svelte Action (directive) to make anything a menu
    - update <Card> to include padding prop
-->

<script lang="ts">
    import { afterUpdate } from "svelte";

	export let visible: boolean = false;
    export let origin: string = 'tl'; // tl | tr | bl | br

    // Base Classes
    const cBase: string = 'relative inline-block';
    const cContent: string = 'absolute z-10';
    let cOrigin: string;

    // Set Origin
    function setOrigin(): void {
        switch (origin) {
            case ('tl'): cOrigin = 'origin-top-left left-0 mt-2'; break;
            case ('tr'): cOrigin = 'origin-top-right right-0 mt-2'; break;
            case ('bl'): cOrigin = 'origin-bottom-left top-[-5px] left-0 -translate-y-full'; break;
            case ('br'): cOrigin = 'origin-bottom-right top-[-5px] right-0 -translate-y-full'; break;
            default: break;
        }
    }

    // Functionality
    function toggle(): void { visible = !visible; }

    // After Update
    afterUpdate(() => {
        setOrigin();
    });

    // Responsive Classes
    $: classesMenu = `${cBase}`;
    $: classesContent = `${cContent} ${cOrigin}`;
</script>

<div class="menu-wrapper {classesMenu}">

    <!-- Trigger -->
    <div class="menu-trigger" on:click={toggle}>
        {#if $$slots.trigger}<slot name="trigger" />{/if}
    </div>

    <!-- Content -->
	<div role="menu" class:hidden={!visible} class="menu-content {classesContent}">
        {#if $$slots.content}<slot name="content" />{/if}
	</div>

</div>
