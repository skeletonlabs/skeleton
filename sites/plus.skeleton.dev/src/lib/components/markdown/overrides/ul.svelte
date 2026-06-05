<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export interface Props extends HTMLAttributes<HTMLUListElement> {}
</script>

<script lang="ts">
	const { children, ...rest }: Props = $props();
	const isTaskList = $derived(rest.class?.includes('contains-task-list'));
</script>

<ul class="{isTaskList ? '' : 'list-disc list-outside pl-4'} space-y-1">
	{@render children?.()}
</ul>
