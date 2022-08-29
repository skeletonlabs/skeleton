<script lang="ts">
    import Button from '$lib/Button/Button.svelte';
    import LightSwitch from '$lib/LightSwitch/LightSwitch.svelte';
    import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

    import { storeNavDrawer } from '$lib/_documentation/SkeletonDrawer/navigation';

	// Drawer Handler
    const drawerOpen = () => { storeNavDrawer.set(true); };
</script>

<div class="border-b border-b-surface-300 dark:border-b-surface-700 p-4 flex justify-between items-center">

    <div class="flex items-center">
        <!-- Drawer Menu -->
        <Button variant="minimal" on:click={drawerOpen} class="md:hidden mr-4">
            <SvgIcon name="bars" width="w-6" height="h-6" class="!block opacity-50" />
        </Button>
        <!-- Logo -->
        <a href="/" class="text-[26px] font-bold uppercase">Skeleton</a>
    </div>

    <div class="flex items-center space-x-4">
        <!-- Light Switch -->
        <LightSwitch origin="tr" />
        <!-- Github -->
        <a href="https://github.com/Brain-Bones/skeleton" target="_blank" aria-label="GitHub">
            <SvgIcon name="github" class="opacity-80 hover:opacity-100" />
        </a>
    </div>

</div>