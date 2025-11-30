<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ItemProps } from '@zag-js/steps';

	export interface StepsItemProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: StepsItemProps = $props();

	const steps = RootContext.consume();

	// @zag-js/steps does not currently provide a splitItemProps function, so manually destructure
	const { element, children, index, ...rest } = $derived(props);
	const itemProps = $derived({ index });

	const attributes = $derived(mergeProps(steps().getItemProps(itemProps), rest));

	ItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
