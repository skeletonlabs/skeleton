<script lang="ts">
    import Drawer from "$lib/Drawer/Drawer.svelte";
    import SkeletonSidebar from "./SkeletonSidebar.svelte";
    import { storeMobileDrawer } from "$lib/_documentation/stores";
</script>

<Drawer open={storeMobileDrawer} display="lg:hidden">
    <SkeletonSidebar embedded={true} />
</Drawer>