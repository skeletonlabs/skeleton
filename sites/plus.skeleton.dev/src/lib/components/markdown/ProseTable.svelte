<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children, ...rest }: { children?: Snippet; [key: string]: unknown } = $props();
</script>

<div class="table-wrap">
	<table class="table" {...rest}>{@render children?.()}</table>
</div>
