<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLLiAttributes } from 'svelte/elements';
	import type { ItemProps } from '@zag-js/combobox';

	export interface ComboboxItemProps extends PropsWithElement, Omit<ItemProps, 'id'>, Omit<HTMLLiAttributes, 'value'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { ComboboxRootContext } from '../modules/root-context';
	import { splitItemProps } from '@zag-js/combobox';
	import { ComboboxItemContext } from '../modules/item-context';

	const props: ComboboxItemProps = $props();

	const rootContext = ComboboxRootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);

	const attributes = $derived(mergeProps(rootContext.api.getItemProps(itemProps), { class: classesCombobox.item }, restAttributes));

	ComboboxItemContext.provide({
		get itemState() {
			return rootContext.api.getItemState(itemProps);
		}
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<li {...attributes}>
		{@render children?.()}
	</li>
{/if}
