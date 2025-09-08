<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface ComboboxItemGroupLabelProps
		extends PropsWithElement,
			Omit<ItemGroupLabelProps, 'htmlFor'>,
			HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { ComboboxRootContext } from '../modules/combobox-root-context';
	import { splitItemGroupLabelProps, type ItemGroupLabelProps } from '@zag-js/combobox';
	import { ComboboxItemGroupContext } from '../modules/combobox-item-group-context';

	const props: ComboboxItemGroupLabelProps = $props();
	const rootContext = ComboboxRootContext.consume();
	const itemGroupContext = ComboboxItemGroupContext.consume();
	const [itemGroupLabelProps] = $derived(
		splitItemGroupLabelProps({
			htmlFor: itemGroupContext.itemGroupProps.id,
			...props
		})
	);
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(rootContext.api.getItemGroupLabelProps(itemGroupLabelProps), { class: classesCombobox.itemGroupLabel }, restAttributes)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
