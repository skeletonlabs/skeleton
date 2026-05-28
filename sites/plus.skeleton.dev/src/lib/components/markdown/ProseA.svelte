<script lang="ts">
	import type { Snippet } from 'svelte';
	let { href, children, ...rest }: { href?: string; children?: Snippet; [key: string]: unknown } = $props();

	const isExternal = href && !href.startsWith('/') && !href.startsWith('#');
</script>

<a
	{href}
	class="anchor"
	target={isExternal ? '_blank' : undefined}
	rel={isExternal ? 'noopener noreferrer' : undefined}
	{...rest}
>{@render children?.()}</a>
