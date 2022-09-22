<script lang="ts">
	import Drawer from '$lib/utilities/Drawer/Drawer.svelte';
	import DocsSidebar from './DocsSidebar.svelte';
	import { storeMobileDrawer } from '$docs/stores';
</script>

<Drawer open={storeMobileDrawer} display="lg:hidden">
	<DocsSidebar embedded={true} />
</Drawer>
