<!-- Layout: (documentation) -->

<script lang="ts">
	// Components
	import AppShell from '$lib/AppShell/AppShell.svelte';

	// Doc Components 
	import SkeletonDrawer from '$lib/_documentation/SkeletonDrawer/SkeletonDrawer.svelte';
	import SkeletonFooter from '$lib/_documentation/SkeletonFooter/SkeletonFooter.svelte';
</script>

<AppShell>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		<SkeletonDrawer />
	</svelte:fragment>

	<!-- Page: Content -->
	<slot />

	<!-- Page: Footer -->
	<svelte:fragment slot="footer">
		<SkeletonFooter />
	</svelte:fragment>

</AppShell>
