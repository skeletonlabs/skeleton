<script lang="ts">
	import type { Snippet } from 'svelte';

	let { id, children }: { id?: string; children?: Snippet } = $props();
</script>

<h3 {id} class="h3">{@render children?.()}</h3>
