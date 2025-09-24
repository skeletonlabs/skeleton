<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { ItemProps } from '@zag-js/combobox';

	export interface ComboboxItemProps extends Omit<ItemProps, 'id'>, PropsWithElement<'li'>, HTMLAttributes<'li', 'value'> {}
</script>

<script lang="ts">
	import { ComboboxItemContext } from '../modules/item-context';
	import { ComboboxRootContext } from '../modules/root-context';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { splitItemProps } from '@zag-js/combobox';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxItemProps = $props();

	const combobox = ComboboxRootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(combobox().getItemProps(itemProps), rest, {
			class: classesCombobox.item,
		}),
	);

	ComboboxItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<li {...attributes}>
		{@render children?.()}
	</li>
{/if}
