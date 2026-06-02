<script lang="ts" module>
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	export interface Props extends HTMLAnchorAttributes {}
</script>

<script lang="ts">
	const { children, ...rest }: Props = $props();

	const isExternal = $derived(rest.href && !rest.href.startsWith('/') && !rest.href.startsWith('#'));
</script>

<a class="anchor" target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} {...rest}>
	{@render children?.()}
</a>
