<script lang="ts">
	import type { AccordionHeadingProps } from '../modules/types.js';

	const props: AccordionHeadingProps = $props();
	const { level = 3, element, children, ...restAttributes } = $derived(props);
	const tag = $derived(`h${level}`);
</script>

{#if element}
	{@render element({ attributes: restAttributes })}
{:else}:
	<svelte:element this={tag} {...restAttributes}>
		{@render children?.()}
	</svelte:element>
{/if}
