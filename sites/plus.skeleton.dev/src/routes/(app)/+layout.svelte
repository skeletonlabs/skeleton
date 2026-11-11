<script lang="ts">
	import Footer from "#lib/components/layout/footer.svelte";
	import Header from "#lib/components/layout/header.svelte";

	const { children } = $props();
</script>

<!-- grid-cols-1 required to avoid breaking mobile page width -->
<div class="grid min-h-dvh grid-cols-1 grid-rows-[auto_1fr_auto]">
	<Header />
	<main class="border-surface-200-800 container mx-auto border-r border-l">
		{@render children()}
	</main>
	<Footer />
</div>
