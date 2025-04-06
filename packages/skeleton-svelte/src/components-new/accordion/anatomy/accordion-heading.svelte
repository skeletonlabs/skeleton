<script lang="ts">
	import type { AccordionHeadingProps } from '../modules/types.js';

	const props: AccordionHeadingProps = $props();
	const { level = 3, children, ...restAttributes } = $derived(props);
	const tag = $derived(`h${level}`);
</script>

<svelte:element this={tag} {...restAttributes}>
	{@render children?.()}
</svelte:element>
