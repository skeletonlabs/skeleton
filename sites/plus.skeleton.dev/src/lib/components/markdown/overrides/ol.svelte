<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export interface Props extends HTMLAttributes<HTMLOListElement> {}
</script>

<script lang="ts">
	const { children, ...rest }: Props = $props();
</script>

<ol class="list-decimal list-outside pl-4 space-y-1" {...rest}>
	{@render children?.()}
</ol>
