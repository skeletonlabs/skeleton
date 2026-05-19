<script lang="ts">
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';

	const { children } = $props();
</script>

<!-- grid-cols-1 required to avoid breaking mobile page width -->
<div class="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-dvh">
	<Header />
	<main class="container mx-auto border-l border-r border-surface-200-800">
		{@render children()}
	</main>
	<Footer />
</div>
