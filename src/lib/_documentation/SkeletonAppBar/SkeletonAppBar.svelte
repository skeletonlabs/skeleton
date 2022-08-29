<script lang="ts">
    import AppBar from '$lib/AppBar/AppBar.svelte';
    import Button from '$lib/Button/Button.svelte';
    import LightSwitch from '$lib/LightSwitch/LightSwitch.svelte';
    import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

    import { storeNavDrawer } from '$lib/_documentation/SkeletonDrawer/navigation';

    // Drawer Handler
    function drawerOpen(): void { storeNavDrawer.set(true); };
</script>

<AppBar>

    <!-- Branding -->
    <svelte:fragment slot="lead">
        <!-- Drawer Menu -->
        <Button variant="minimal" on:click={drawerOpen} class="md:hidden mr-4">
            <SvgIcon name="bars" width="w-6" height="h-6" class="!block opacity-50" />
        </Button>
        <!-- Icon -->
        <div class="bg-surface-500/20 w-8 aspect-square flex justify-center items-center rounded-full mr-3">
            <SvgIcon name="skull" width="w-4" height="h-4" />
        </div>
        <!-- Skeleton -->
        <a href="/" class="hidden md:block text-[26px] font-bold uppercase mr-4">Skeleton</a>
    </svelte:fragment>
    
    <!-- Navigation -->
    <svelte:fragment slot="trail">

         <!-- Links -->
         <section class="hidden md:flex space-x-4 spacer-line">
            <a href="/guides/get-started" class="navlink" aria-label="Docs">Docs</a>
            <a href="/docs/why" class="navlink" aria-label="Guides">Guides</a>
            <a href="/components/accordions" class="navlink" aria-label="Components">Components</a>
            <a href="/utilities/codeblocks" class="navlink" aria-label="Components">Utilities</a>
        </section>

        <!-- Light Switch -->
        <section class="flex spacer-line space-x-4">
            <LightSwitch origin="tr" />
        </section>

        <!-- Community -->
        <section class="flex space-x-4">
            <a href="https://discord.gg/EXqV7W8MtY" target="_blank" aria-label="Discord">
                <SvgIcon name="discord" viewBox="0 0 640 512" />
            </a>
            <a href="https://twitter.com/SkeletonUI" target="_blank" aria-label="Twitter">
                <SvgIcon name="twitter" />
            </a>
            <a href="https://github.com/Brain-Bones/skeleton" target="_blank" aria-label="GitHub">
                <SvgIcon name="github" />
            </a>
        </section>

    </svelte:fragment>

</AppBar>

<style lang="postcss">
    .navlink { @apply opacity-80 hover:opacity-100 hover:text-primary-500 transition-all; }
    .spacer-line { @apply border-r border-r-surface-500/50 pr-4; }
</style>