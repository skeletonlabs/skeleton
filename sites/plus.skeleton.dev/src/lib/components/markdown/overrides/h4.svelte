<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export interface Props extends HTMLAttributes<HTMLHeadingElement> {}
</script>

<script lang="ts">
	const { children, ...rest }: Props = $props();
</script>

<h4 class="h4" {...rest}>
	{@render children?.()}
</h4>
