<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { OptionItemProps } from '@zag-js/menu';

	export interface MenuOptionItemProps extends OptionItemProps, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { splitOptionItemProps } from '@zag-js/menu';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuOptionItemProps = $props();

	const menu = RootContext.consume();

	const [itemProps, componentProps] = $derived(splitOptionItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(menu().getOptionItemProps(itemProps), rest));

	ItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
