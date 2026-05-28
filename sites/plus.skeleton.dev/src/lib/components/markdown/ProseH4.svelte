<script lang="ts">
	import type { Snippet } from 'svelte';

	let { id, children }: { id?: string; children?: Snippet } = $props();
</script>

<h4 {id} class="h4">{@render children?.()}</h4>
