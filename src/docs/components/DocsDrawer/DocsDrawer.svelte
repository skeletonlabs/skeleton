<script lang="ts">
	import Drawer from '$lib/utilities/Drawer/Drawer.svelte';
	import DocsSidebar from '../DocsSidebar/DocsSidebar.svelte';
	import { drawerStore } from '$lib/utilities/Drawer/stores';

	$: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'lg:hidden' : '';
</script>

<Drawer class={classesDrawer}>
	{#if $drawerStore.id === 'doc-sidenav'}
		<!-- Doc Sidebar -->
		<DocsSidebar embedded={true} />
	{:else if $drawerStore.id === 'demo'}
		<!-- Drawer Doc Demos -->
		<div class="w-full h-full flex justify-center items-center">
			<div class="text-center space-y-2">
				{#if $drawerStore.meta}<h2 class="h2">{$drawerStore.meta}</h2>{/if}
				<h4 class="h4">Drawer: <span class="capitalize">{$drawerStore.position}</span></h4>
				<span class="block">Tap outside the drawer to close.</span>
			</div>
		</div>
	{:else}
		<!-- Fallback Error -->
		<div class="w-full h-full flex justify-center items-center">
			<div class="text-center space-y-2">
				<p>Invalid <code class="code">$drawerStore.id</code> provided.</p>
			</div>
		</div>
	{/if}
</Drawer>
