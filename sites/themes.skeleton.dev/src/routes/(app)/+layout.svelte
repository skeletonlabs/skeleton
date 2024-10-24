<script lang="ts">
	// Components (common)
	import AppFooter from '$lib/components/common/AppFooter/AppFooter.svelte';
	import AppHeader from '$lib/components/common/AppHeader/AppHeader.svelte';

	let { children } = $props();
</script>

<main class="h-screen grid grid-rows-[auto_1fr_auto] gap-10">
	<!-- Page Header -->
	<AppHeader />
	<!-- Page Content -->
	<section class="container mx-auto p-4">{@render children?.()}</section>
	<!-- Page Footer -->
	<AppFooter />
</main>
