<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children?: Snippet; class?: string } = $props();
	const isTask = $derived(className.includes('task-list-item'));
</script>

<li class="{isTask ? 'list-none *:first:mr-1' : ''} {className}">
	{@render children?.()}
</li>
