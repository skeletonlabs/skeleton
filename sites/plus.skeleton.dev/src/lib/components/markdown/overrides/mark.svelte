<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export interface Props extends HTMLAttributes<HTMLElement> {}
</script>

<script lang="ts">
	const { children, ...rest }: Props = $props();
</script>

<mark class="mark" {...rest}>
	{@render children?.()}
</mark>
