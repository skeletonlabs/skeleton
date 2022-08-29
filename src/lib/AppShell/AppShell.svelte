<script lang="ts">

    // Props
    export let page: string = 'container mx-auto p-4';

    // Base Classes
    const cBaseAppShell: string = 'w-screen h-screen overflow-hidden flex overflow-hidden';
    const cBaseContent: string = 'flex-1 overflow-y-auto';
    const cBaseSidebarLeft: string = 'flex-none w-0 lg:w-[280px] overflow-x-hidden overflow-y-auto';
    const cBaseSidebarRight: string = 'flex-none w-0 lg:w-[280px] overflow-x-hidden overflow-y-auto';
</script>

<div id="appShell" class="{cBaseAppShell}">

    <!-- Slot: Sidebar (left) -->
    {#if $$slots.sidebarLeft}
    <div class="sidebar-left {cBaseSidebarLeft}"><slot name="sidebarLeft"></slot></div>
    {/if}

    <!-- Slot: Main -->
    <div class="page {cBaseContent}">

        <!-- Page Header -->
        {#if $$slots.header}
        <header id="page-header"><slot name="header">(slot:header)</slot></header>
        {/if}

        <!-- Page -->
        <main class="{page}"><slot /></main>

        <!-- Page Footer -->
        {#if $$slots.footer}
        <footer id="page-footer"><slot name="footer">(slot:footer)</slot></footer>
        {/if}

    </div>

    <!-- Slot: Sidebar (right) -->
    {#if $$slots.sidebarRight}
    <div class="sidebar-right bg-blue-500 {cBaseSidebarRight}"><slot name="sidebarRight"></slot></div>
    {/if}

</div>
