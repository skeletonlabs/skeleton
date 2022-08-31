<script lang="ts">
    import Drawer from "$lib/Drawer/Drawer.svelte";

    // SideBar
    import SkeletonSidebar from "./SkeletonSidebar.svelte";

    // Stores
    import { storeMobileDrawer } from "$lib/_documentation/stores";
</script>

<Drawer open={storeMobileDrawer}>
    <SkeletonSidebar embedded={true} />
</Drawer>