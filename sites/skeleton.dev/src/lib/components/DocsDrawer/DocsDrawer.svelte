<script lang="ts">
  import { getDrawerStore, Drawer } from '@skeletonlabs/skeleton';
  import DocsSidebar from '../DocsSidebar/DocsSidebar.svelte';

  const drawerStore = getDrawerStore();

  $: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'lg:hidden' : '';
</script>

<Drawer class={classesDrawer}>
  {#if $drawerStore.id === 'doc-sidenav'}
    <!-- Doc Sidebar -->
    <DocsSidebar embedded={true} />
  {:else if $drawerStore.id === 'demo'}
    <!-- Drawer Doc Demos -->
    <div class="flex h-full w-full items-center justify-center">
      <div class="space-y-2 text-center">
        {#if $drawerStore.meta}<h2 class="h2">{$drawerStore.meta}</h2>{/if}
        <h4 class="h4">Drawer: <span class="capitalize">{$drawerStore.position}</span></h4>
        <span class="block">Tap outside the drawer to close.</span>
      </div>
    </div>
  {:else}
    <!-- Fallback Error -->
    <div class="flex h-full w-full items-center justify-center">
      <div class="space-y-2 text-center">
        <p>Invalid <code class="code">$drawerStore.id</code> provided.</p>
      </div>
    </div>
  {/if}
</Drawer>
