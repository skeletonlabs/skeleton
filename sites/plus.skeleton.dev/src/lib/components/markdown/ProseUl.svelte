<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children?: Snippet; class?: string } = $props();
	const isTaskList = $derived(className.split(' ').includes('contains-task-list'));
</script>

<ul class="{isTaskList ? '' : 'list-disc list-outside pl-5'} space-y-1">
	{@render children?.()}
</ul>
