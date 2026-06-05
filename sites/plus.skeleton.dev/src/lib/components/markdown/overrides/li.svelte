<script lang="ts" module>
	export interface Props extends HTMLLiAttributes {}
</script>

<script lang="ts">
	import type { HTMLLiAttributes } from 'svelte/elements';

	const { children, ...rest }: Props = $props();

	const isTask = $derived(rest.class?.includes('task-list-item'));
</script>

<li class="{isTask ? 'list-none *:first:mr-1' : ''} {rest.class}" {...rest}>
	{@render children?.()}
</li>
