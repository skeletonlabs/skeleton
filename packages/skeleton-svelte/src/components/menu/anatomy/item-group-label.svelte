<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { ItemGroupLabelProps as ZagItemGroupLabelProps } from '@zag-js/menu';
	import type { Snippet } from 'svelte';

	export interface MenuItemGroupLabelProps
		extends ZagItemGroupLabelProps,
			PropsWithElement<'div'>,
			HTMLAttributes<'div', 'id' | 'dir'> {
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { MenuRootContext } from '../modules/root-context.js';
	import { classesMenu } from '@skeletonlabs/skeleton-common';
	import { splitItemGroupLabelProps } from '@zag-js/menu';
	import { mergeProps } from '@zag-js/svelte';

	const props: MenuItemGroupLabelProps = $props();

	const menu = MenuRootContext.consume();

	const [labelProps, componentProps] = $derived(splitItemGroupLabelProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			menu().getItemGroupLabelProps(labelProps),
			{
				class: classesMenu.itemGroupLabel,
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
