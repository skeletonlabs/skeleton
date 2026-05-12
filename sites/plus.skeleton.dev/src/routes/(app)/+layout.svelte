<script lang="ts">
	import SiteFooter from '$lib/components/SiteFooter/SiteFooter.svelte';
	import Siteheader from '$lib/components/SiteHeader/Siteheader.svelte';

	const { children } = $props();
</script>

<div class="grid grid-rows-[auto_1fr_auto] min-h-dvh">
	<Siteheader />
	<main class="container mx-auto border-l border-r border-surface-200-800">{@render children()}</main>
	<SiteFooter />
</div>
