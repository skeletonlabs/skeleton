<script lang="ts">
    // Base Classes
    const cBaseAppShell: string = 'w-full h-full flex overflow-hidden';
    const cPage: string = 'container mx-auto space-y-10 flex-1 overflow-x-hidden overflow-y-auto';
    const cSidebarLeft: string = 'flex-none w-0 lg:w-[280px] overflow-x-hidden overflow-y-auto';
    const cSidebarRight: string = 'flex-none w-0 lg:w-[280px] overflow-x-hidden overflow-y-auto';
</script>

<div id="appShell" class="{cBaseAppShell}">

    <!-- Slot: Sidebar (left) -->
    {#if $$slots.sidebarLeft}
    <aside class="sidebar-left {cSidebarLeft}"><slot name="sidebarLeft"></slot></aside>
    {/if}

    <!-- Slot: Main -->
    <div class="page {cPage}">

        <!-- Page Header -->
        {#if $$slots.header}
        <header id="page-header"><slot name="header">(slot:header)</slot></header>
        {/if}

        <!-- Page Content -->
        <div id="page-content" class="p-4 md:p-10"><slot /></div>

        <!-- Page Footer -->
        {#if $$slots.footer}
        <footer id="page-footer"><slot name="footer">(slot:footer)</slot></footer>
        {/if}

    </div>

    <!-- Slot: Sidebar (right) -->
    {#if $$slots.sidebarRight}
    <aside class="sidebar-right bg-blue-500 {cSidebarRight}"><slot name="sidebarRight"></slot></aside>
    {/if}

</div>
