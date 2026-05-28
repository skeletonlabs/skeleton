<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children?: Snippet; class?: string } = $props();
	const isTask = $derived(className.split(' ').includes('task-list-item'));
</script>

<li class="{isTask ? 'list-none' : ''} {className}">
	{@render children?.()}
</li>
