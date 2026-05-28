<script lang="ts">
	import type { Snippet } from 'svelte';

	let { id, children }: { id?: string; children?: Snippet } = $props();
</script>

<h1 {id} class="h1">{@render children?.()}</h1>
