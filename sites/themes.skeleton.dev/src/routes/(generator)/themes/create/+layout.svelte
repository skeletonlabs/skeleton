<script lang="ts">
	// State
	import { globals } from '$lib/state/generator.svelte';
	// Components (Skeleton)
	import { Segment } from '@skeletonlabs/skeleton-svelte';
	// Components (common)
	import AppHeader from '$lib/components/common/AppHeader/AppHeader.svelte';

	let { children } = $props();
</script>

<main class="h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden">
	<!-- Page Header -->
	<AppHeader />
	<!-- Page Content -->
	{@render children?.()}
</main>
