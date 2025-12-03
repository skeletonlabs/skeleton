<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useAccordion } from '../modules/provider.svelte';

	export interface AccordionRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useAccordion>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: AccordionRootProviderProps = $props();

	const { element, children, value: accordion, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(accordion().getRootProps(), rest));

	RootContext.provide(() => accordion());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
