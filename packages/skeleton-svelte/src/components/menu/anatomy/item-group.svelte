<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ItemGroupProps } from '@zag-js/menu';

	export interface MenuItemGroupProps extends Omit<ItemGroupProps, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { ItemGroupContext } from '../modules/item-group-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { splitItemGroupProps } from '@zag-js/menu';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuItemGroupProps = $props();

	const menu = RootContext.consume();

	const id = $props.id();
	const [itemGroupProps, componentProps] = $derived(
		splitItemGroupProps({
			id,
			...props,
		}),
	);
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(menu().getItemGroupProps(itemGroupProps), rest));

	ItemGroupContext.provide(() => itemGroupProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
