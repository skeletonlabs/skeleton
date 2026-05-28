<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children?: Snippet } = $props();
</script>

<mark class="mark">{@render children?.()}</mark>
