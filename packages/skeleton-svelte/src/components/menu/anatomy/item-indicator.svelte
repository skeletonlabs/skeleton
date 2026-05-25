<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface MenuItemIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { MenuItemContext } from '../modules/item-context.js';
	import { MenuRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuItemIndicatorProps = $props();

	const menu = MenuRootContext.consume();
	const itemProps = MenuItemContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(menu().getItemIndicatorProps(itemProps()), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
