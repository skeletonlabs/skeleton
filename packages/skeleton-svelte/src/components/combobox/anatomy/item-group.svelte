<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { ItemGroupProps } from '@zag-js/combobox';

	export interface ComboboxItemGroupProps extends Omit<ItemGroupProps, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { ComboboxRootContext } from '../modules/root-context';
	import { splitItemGroupProps } from '@zag-js/combobox';
	import { ComboboxItemGroupContext } from '../modules/item-group-context';

	const props: ComboboxItemGroupProps = $props();

	const combobox = ComboboxRootContext.consume();

	const id = $props.id();
	const [itemGroupProps, componentProps] = $derived(
		splitItemGroupProps({
			id: id,
			...props
		})
	);
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(combobox().getItemGroupProps(itemGroupProps), rest, {
			class: classesCombobox.itemGroup
		})
	);

	ComboboxItemGroupContext.provide(() => itemGroupProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
