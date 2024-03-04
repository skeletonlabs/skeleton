<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton-svelte';

    // FIXME: required for Astro bug
    let {} = $props<any>()
</script>

<AppBar headlineBase="text-center">
	{#snippet headline()}
		<h2 class="h2">Headline</h2>
	{/snippet}
</AppBar>