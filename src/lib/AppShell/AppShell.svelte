<script lang="ts">
    // Props
    export let sidebarLeftWidth: string = 'w-auto';
    export let sidebarRightWidth: string = 'w-auto';

    // Base Classes
    const cBaseAppShell: string = 'w-full h-full flex flex-col overflow-hidden';
    const cContentArea: string = 'w-full h-full flex overflow-hidden';
    const cPage: string = 'flex-1 overflow-x-hidden overflow-y-auto';
    const cSidebarLeft: string = 'flex-none overflow-x-hidden overflow-y-auto';
    const cSidebarRight: string = 'flex-none overflow-x-hidden overflow-y-auto';

    // Reactive Classes
    $: classesSidebarLeft = `${cSidebarLeft} ${sidebarLeftWidth}`;
    $: classesSidebarRight = `${cSidebarRight} ${sidebarRightWidth}`;
</script>

<main id="appShell" class="{cBaseAppShell}" data-testid="app-shell">

    <!-- Slot: Header -->
    {#if $$slots.header}
    <header class="flex-none"><slot name="header"></slot></header>
    {/if}

    <!-- Content Area -->
    <div class="flex-auto {cContentArea}">

        <!-- Slot: Sidebar (left) -->
        {#if $$slots.sidebarLeft}
        <aside class="sidebar-left {classesSidebarLeft}"><slot name="sidebarLeft"></slot></aside>
        {/if}

        <!-- Page -->
        <div id="page" class="{cPage}">

            <!-- Slot: Page Header -->
            {#if $$slots.pageHeader}
            <header id="page-header"><slot name="pageHeader">(slot:header)</slot></header>
            {/if}

            <!-- Slot: Page Content (default) -->
            <div id="page-content"><slot /></div>

            <!-- Slot: Page Footer -->
            {#if $$slots.pageFooter}
            <footer id="page-footer"><slot name="pageFooter">(slot:footer)</slot></footer>
            {/if}

        </div>

        <!-- Slot: Sidebar (right) -->
        {#if $$slots.sidebarRight}
        <aside class="sidebar-right {classesSidebarRight}"><slot name="sidebarRight"></slot></aside>
        {/if}

    </div>

</main>
