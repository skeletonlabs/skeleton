<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export interface Props extends HTMLAttributes<HTMLHeadingElement> {}
</script>

<script lang="ts">
	const { children, ...rest }: Props = $props();
</script>

<h5 class="h5" {...rest}>
	{@render children?.()}
</h5>
