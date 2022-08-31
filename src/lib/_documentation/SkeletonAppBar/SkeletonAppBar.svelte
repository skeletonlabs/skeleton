<script lang="ts">
    import AppBar from '$lib/AppBar/AppBar.svelte';
    import LightSwitch from '$lib/LightSwitch/LightSwitch.svelte';
    import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

    // Stores
    import { storeMobileDrawer } from '$lib/_documentation/stores';

    // Drawer Handler
    function drawerOpen(): void { storeMobileDrawer.set(true); };
</script>

<AppBar border="border-b border-b-surface-300 dark:border-b-surface-900">

    <!-- Branding -->
    <svelte:fragment slot="lead">
        <!-- Drawer Menu -->
        <div on:click={drawerOpen} class="lg:hidden mr-4 p-1 cursor-pointer">
            <SvgIcon name="bars" width="w-6" height="h-6" fill="fill-black dark:fill-white" on:click={drawerOpen} />
        </div>
        <!-- Skeleton -->
        <a href="/" class="hidden sm:block sm:text-base md:text-[26px] font-bold uppercase mr-4" title="Return to Homepage">Skeleton</a>
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