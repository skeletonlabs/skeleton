<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ItemGroupProps } from '@zag-js/combobox';

	export interface ComboboxItemGroupProps extends Omit<ItemGroupProps, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id'> {}
</script>

<script lang="ts">
	import { ItemGroupContext } from '../modules/item-group-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { splitItemGroupProps } from '@zag-js/combobox';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxItemGroupProps = $props();

	const combobox = RootContext.consume();

	const id = $props.id();
	const [itemGroupProps, componentProps] = $derived(
		splitItemGroupProps({
			id: id,
			...props,
		}),
	);
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(combobox().getItemGroupProps(itemGroupProps), rest));

	ItemGroupContext.provide(() => itemGroupProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
