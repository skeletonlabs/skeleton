<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface ComboboxItemGroupLabelProps
		extends Omit<ItemGroupLabelProps, 'htmlFor'>,
			PropsWithElement<'div'>,
			HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { ComboboxItemGroupContext } from '../modules/item-group-context';
	import { ComboboxRootContext } from '../modules/root-context';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { type ItemGroupLabelProps, splitItemGroupLabelProps } from '@zag-js/combobox';
	import { mergeProps } from '@zag-js/svelte';

	const props: ComboboxItemGroupLabelProps = $props();

	const combobox = ComboboxRootContext.consume();
	const itemGroupProps = ComboboxItemGroupContext.consume();

	const [itemGroupLabelProps] = $derived(
		splitItemGroupLabelProps({
			htmlFor: itemGroupProps().id,
			...props,
		}),
	);
	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(combobox().getItemGroupLabelProps(itemGroupLabelProps), rest, {
			class: classesCombobox.itemGroupLabel,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
