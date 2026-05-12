<script lang="ts">
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';

	const { children } = $props();
</script>

<div class="grid grid-rows-[auto_1fr_auto] min-h-dvh">
	<Header />
	<main class="container mx-auto border-l border-r border-surface-200-800">
		{@render children()}
	</main>
	<Footer />
</div>
