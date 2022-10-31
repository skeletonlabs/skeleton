<script lang="ts">
	import { Drawer } from '@brainandbones/skeleton';
	import DocsSidebar from './DocsSidebar.svelte';
	import { storeMobileDrawer } from '$docs/stores';
</script>

<Drawer open={storeMobileDrawer} display="lg:hidden">
	<DocsSidebar embedded={true} />
</Drawer>
