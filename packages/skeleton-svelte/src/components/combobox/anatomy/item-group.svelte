<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ItemGroupProps } from '@zag-js/combobox';

	export interface ComboboxItemGroupProps
		extends PropsWithElement,
			Omit<ItemGroupProps, 'id'>,
			Omit<HTMLAttributes<HTMLDivElement>, 'id'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { ComboboxRootContext } from '../modules/root-context';
	import { splitItemGroupProps } from '@zag-js/combobox';
	import { ComboboxItemGroupContext } from '../modules/item-group-context';

	const props: ComboboxItemGroupProps = $props();

	const rootContext = ComboboxRootContext.consume();

	const id = $props.id();
	const [itemGroupProps, componentProps] = $derived(
		splitItemGroupProps({
			id: id,
			...props
		})
	);
	const { element, children, ...restAttributes } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(rootContext.api.getItemGroupProps(itemGroupProps), { class: classesCombobox.itemGroup }, restAttributes)
	);

	ComboboxItemGroupContext.provide({
		get itemGroupProps() {
			return itemGroupProps;
		}
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
