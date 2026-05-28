<script lang="ts">
	import type { Snippet } from 'svelte';
	let { id, children }: { id?: string; children?: Snippet } = $props();
</script>

<h6 {id} class="h6">{@render children?.()}</h6>
