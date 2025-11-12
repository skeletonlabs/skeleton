<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { ItemGroupProps } from '@zag-js/menu';

	export interface MenuItemGroupProps extends ItemGroupProps, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { classesMenu } from '@skeletonlabs/skeleton-common';
	import { splitItemGroupProps } from '@zag-js/menu';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuItemGroupProps = $props();

	const menu = RootContext.consume();

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
