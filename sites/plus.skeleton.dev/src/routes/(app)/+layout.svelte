<script lang="ts">
	import AppFooter from '$lib/components/app/app-footer.svelte';
	import AppHeader from '$lib/components/app/app-header.svelte';

	const { children } = $props();
</script>

<div class="grid grid-rows-[auto_1fr_auto] min-h-dvh">
	<AppHeader />
	<main class="container mx-auto border-l border-r border-surface-200-800">{@render children()}</main>
	<AppFooter />
</div>
