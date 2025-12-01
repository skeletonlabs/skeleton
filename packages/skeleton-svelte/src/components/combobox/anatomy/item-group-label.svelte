<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ComboboxItemGroupLabelProps
		extends Omit<ItemGroupLabelProps, 'htmlFor'>, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { ItemGroupContext } from '../modules/item-group-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { type ItemGroupLabelProps, splitItemGroupLabelProps } from '@zag-js/combobox';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxItemGroupLabelProps = $props();

	const combobox = RootContext.consume();
	const itemGroupProps = ItemGroupContext.consume();

	const [itemGroupLabelProps] = $derived(
		splitItemGroupLabelProps({
			htmlFor: itemGroupProps().id,
			...props,
		}),
	);
	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(combobox().getItemGroupLabelProps(itemGroupLabelProps), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
