<script lang="ts">
    import Button from '$lib/Button/Button.svelte';
    import LightSwitch from '$lib/LightSwitch/LightSwitch.svelte';
    import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

    import { storeNavDrawer } from '$lib/_documentation/SkeletonDrawer/navigation';

    // Base Classes
    const cBase: string = 'border-b border-b-surface-300 dark:border-b-surface-700 p-4 flex justify-between items-center';

	// Drawer Handler
    const drawerOpen = () => { storeNavDrawer.set(true); };
</script>

<div class="{cBase}">

    <div class="flex items-center">
        <!-- Drawer Menu -->
        <Button variant="minimal" on:click={drawerOpen} class="md:hidden mr-4">
            <SvgIcon name="bars" width="w-6" height="h-6" class="!block opacity-50" />
        </Button>
        <!-- Icon -->
        <div class="bg-surface-500/20 w-8 aspect-square flex justify-center items-center rounded-full mr-3">
            <SvgIcon name="skull" width="w-4" height="h-4" />
        </div>
        <!-- Skeleton -->
        <a href="/" class="text-[26px] font-bold uppercase">Skeleton</a>
    </div>

    <div class="flex items-center space-x-4">

        <!-- Light Switch -->
        <LightSwitch origin="tr" />

        <!-- Links -->
        <a href="https://discord.gg/EXqV7W8MtY" target="_blank" aria-label="Discord">
            <SvgIcon name="discord" class="opacity-80 hover:opacity-100" viewBox="0 0 640 512" />
        </a>
        <a href="https://twitter.com/SkeletonUI" target="_blank" aria-label="Twitter">
            <SvgIcon name="twitter" class="opacity-80 hover:opacity-100" />
        </a>
        <a href="https://github.com/Brain-Bones/skeleton" target="_blank" aria-label="GitHub">
            <SvgIcon name="github" class="opacity-80 hover:opacity-100" />
        </a>
    </div>

</div>