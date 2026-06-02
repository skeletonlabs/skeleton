<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<ol class="list-decimal list-outside pl-4 space-y-1">{@render children?.()}</ol>
