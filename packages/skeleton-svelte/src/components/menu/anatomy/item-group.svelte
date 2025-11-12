<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { ItemGroupProps as ZagItemGroupProps } from '@zag-js/menu';
	import type { Snippet } from 'svelte';

	export interface MenuItemGroupProps extends ZagItemGroupProps, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { MenuRootContext } from '../modules/root-context.js';
	import { classesMenu } from '@skeletonlabs/skeleton-common';
	import { splitItemGroupProps } from '@zag-js/menu';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuItemGroupProps = $props();

	const menu = MenuRootContext.consume();

	const [groupProps, componentProps] = $derived(splitItemGroupProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			menu().getItemGroupProps(groupProps),
			{
				class: classesMenu.itemGroup,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
