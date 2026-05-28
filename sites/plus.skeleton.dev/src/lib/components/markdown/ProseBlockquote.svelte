<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children?: Snippet } = $props();
</script>

<blockquote class="blockquote">{@render children?.()}</blockquote>
