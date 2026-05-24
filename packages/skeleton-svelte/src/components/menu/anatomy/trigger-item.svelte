<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface MenuTriggerItemProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { MenuItemContext } from '../modules/item-context.js';
	import { MenuTriggerItemContext } from '../modules/trigger-item-context.js';
	import { splitItemProps, type ItemProps } from '@zag-js/menu';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuTriggerItemProps = $props();

	const triggerItemProps = MenuTriggerItemContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(triggerItemProps(), rest));

	MenuItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
