<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children, class: className, ...rest }: { children?: Snippet; class?: string; [key: string]: unknown } = $props();
</script>

<pre class={className} {...rest}>{@render children?.()}</pre>
