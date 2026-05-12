<script lang="ts">
	import Siteheader from '$lib/components/SiteHeader/Siteheader.svelte';

	const { children } = $props();
</script>

<div class="grid grid-rows-[auto_1fr_auto] min-h-dvh">
	<Siteheader />
	<main>{@render children()}</main>
</div>
