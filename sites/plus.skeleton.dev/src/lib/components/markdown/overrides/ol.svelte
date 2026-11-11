<script lang="ts" module>
	import type { HTMLAttributes } from "svelte/elements";

	export interface Props extends HTMLAttributes<HTMLOListElement> {}
</script>

<script lang="ts">
	const { children, ...rest }: Props = $props();
</script>

<ol class="list-outside list-decimal space-y-1 pl-4" {...rest}>
	{@render children?.()}
</ol>
