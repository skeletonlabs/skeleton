<script lang="ts">
	import type { Snippet } from 'svelte';
	let { id, children }: { id?: string; children?: Snippet } = $props();
</script>

<h5 {id} class="h5">{@render children?.()}</h5>
